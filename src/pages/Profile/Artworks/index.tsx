import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import orderBy from 'lodash/orderBy';

import EmptyText from 'components/EmptyText';
import {getArtworks as _getArtworks} from 'dispatchers/artworks';
import {getArtworks} from 'selectors/state';
import {AppDispatch, SFC} from 'types';
import * as S from './Styles';

const Artworks: SFC = ({className}) => {
  const {id} = useParams();
  const artworks = useSelector(getArtworks);
  const dispatch = useDispatch<AppDispatch>();

  const userId = id ? parseInt(id, 10) : null;

  useEffect(() => {
    (async () => {
      if (!userId) return;
      await dispatch(_getArtworks({owner: userId}));
    })();
  }, [dispatch, userId]);

  const artworkList = useMemo(() => {
    const _artworks = orderBy(Object.values(artworks), ['created_date'], ['desc']);
    return _artworks.filter(({owner}) => owner.id === userId);
  }, [artworks, userId]);

  const renderArtworks = () => {
    const _artworks = artworkList.map(({image}) => <S.Img key={image} src={image} />);
    return <S.Artworks>{_artworks}</S.Artworks>;
  };

  const renderContent = () => {
    if (!!artworkList.length) return renderArtworks();
    return <EmptyText>No artwork to display.</EmptyText>;
  };

  return <S.Container className={className}>{renderContent()}</S.Container>;
};

export default Artworks;
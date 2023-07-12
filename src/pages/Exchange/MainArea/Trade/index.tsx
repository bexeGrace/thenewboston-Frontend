import {useState} from 'react';

import {useActiveAssetPair} from 'hooks';
import {SFC} from 'types';
import AssetPairSelector from './AssetPairSelector';
import Buy from './Buy';
import OrderBook from './OrderBook';
import Sell from './Sell';
import * as S from './Styles';

enum Tab {
  buy = 'buy',
  sell = 'sell',
}

const Trade: SFC = ({className}) => {
  const [activeTab, setActiveTab] = useState(Tab.buy);
  const activeAssetPair = useActiveAssetPair();

  const renderTabContent = () => {
    if (!activeAssetPair) return null;

    const tabContent = {
      [Tab.buy]: <Buy />,
      [Tab.sell]: <Sell />,
    };

    return <S.TabContent>{tabContent[activeTab]}</S.TabContent>;
  };

  const renderTabs = () => {
    if (!activeAssetPair) return null;

    return (
      <S.Tabs>
        <S.Tab $isActive={activeTab === Tab.buy} onClick={() => setActiveTab(Tab.buy)}>
          Buy
        </S.Tab>
        <S.Tab $isActive={activeTab === Tab.sell} onClick={() => setActiveTab(Tab.sell)}>
          Sell
        </S.Tab>
      </S.Tabs>
    );
  };

  return (
    <S.Container className={className}>
      <AssetPairSelector />
      {renderTabs()}
      <S.Grid>
        {renderTabContent()}
        <OrderBook />
      </S.Grid>
    </S.Container>
  );
};

export default Trade;
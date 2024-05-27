import styled from 'styled-components';

import {breakpoints} from 'styles';

export const CardsContainer = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 12px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: auto;
  }
`;

export const Container = styled.div`
  padding: 24px 32px;
`;

export const CodeContainer = styled.div`
  padding: 24px 32px;
  background-color: #d3d3d3;
  border-radius: 10px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

export const ListLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const RoleNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #064d8d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const ContentTitle = styled.div`
  margin-left: 20px;
  font-weight: bold;
  font-size: 50;
`;

export const ContentDetail = styled.div`
  margin-left: 25px;
`;

export const Detail = styled.div`
  margin-left: 25px;
  font-size: 17px;
`;

export const Line = styled.div`
  position: absolute;
  left: 20px;
  width: 2px;
  height: 90%;
  top: 30px;
  background: repeating-linear-gradient(to bottom, transparent, transparent 5px, #007bff 5px, #007bff 10px);
  z-index: 0;
`;

export const Code = styled.pre`
  font-size: 15px;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
`;

export const Img = styled.img`
  height: 40px;
  width: 40px;
`;
import styled from 'styled-components';
import MdiIcon from '@mdi/react';

export const CartProductCount = styled.div`
  align-items: center;
  background: red;
  border-radius: 8px;
  color: #fff;
  display: flex;
  font-size: 10px;
  font-weight: 500;
  height: 14px;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 14px;
`;

export const Icon = styled(MdiIcon)`
  color: #939393;
`;

export const IconContainer = styled.div`
  background: #f4f5f6;
  border-radius: 8px;
  display: flex;
  padding: 9px;
  position: relative;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
  }
`;

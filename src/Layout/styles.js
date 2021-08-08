/*
   styled components for Layout
 */

import styled from 'styled-components';
import { Layout, Divider } from 'antd';


const { Header } = Layout;

export const ContentContainer = styled(Layout.Content)`
  background-color: lightgrey;
  height: 100vh;
  padding: 20px;
`;

export const IconStyled = styled.img`
  height: 32px;
  margin-right: 22px;
  width: 32px;
`;

export const HeaderStyled = styled(Header)`
  background-color: grey;
  display: flex;
  justify-content: space-between;
  padding: 1em;

  @media(min-width: 476px) {
    padding: 1em 1em 1em 1.5em;
  }
`;

export const HeaderActions = styled.div`
  display: flex;

  .ant-input-affix-wrapper {
    border-radius: 50px;
    margint-right: 30px;
    width: 220px;
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 0;
`;

export const StyledTopHeader = styled(Header)`
  background-color: #0e3860;
  display: none;
  padding: 1.1em .7em 0;
  justify-content: flex-end;

  @media (max-width: 430px) {
    display: flex;
  }

  img {
    margin-right: 8px;
  }
`;

export const SearchInputStyled = styled.div`
  .ant-input-affix-wrapper {
    border-radius: 40px;
    height: 40px;
    line-height: 10;
    width: 180px;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

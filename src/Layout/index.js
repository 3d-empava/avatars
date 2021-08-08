import React from 'react';
import { Layout as AntLayout } from 'antd';

import {
  ContentContainer,
  HeaderStyled,
} from './styles';
import './styles.css';

const Layout = ({ children }) => {

  return (
    <AntLayout>
        <HeaderStyled>
        </HeaderStyled>
        <ContentContainer>{children}</ContentContainer>
    </AntLayout>
  );
};

export default Layout;

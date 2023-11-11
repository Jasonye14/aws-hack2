import {Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const MainPageStyle = styled.div`
  display: flex;
  flex-direction: column;


  margin: 0;
  padding-inline: 10px;

`;

const MainPageBody = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContent = styled.main`
  padding: 16px;
  flex-grow: 1;
`;

export {
  MainContent,
  MainPageStyle
};
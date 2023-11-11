import {Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const MainPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
`;

const MainPageBody = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContent = styled.div`
  padding: 16px;
  flex-grow: 1;
  height: 90%;
`;

export {
  MainContent,
  MainPageStyle,
  MainPageBody
};
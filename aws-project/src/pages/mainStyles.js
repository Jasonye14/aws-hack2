import {Global, css } from '@emotion/react';
import styled from '@emotion/styled';

const MainPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
`;

const MainPageBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  height: 100%;
  padding-block: 20px;
  padding-inline: 1rem;

`;

const MainContent = styled.div`
  display: flex;
  width: 42.5vw;
  height: 90%;
`;

export {
  MainContent,
  MainPageStyle,
  MainPageBody
};
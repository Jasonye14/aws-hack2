import React from "react";

// Styles
import {
  MainContent,
  MainPageStyle
} from './mainStyles';

// Components
import CO2Map from "../components/CO2Map/CO2Map";
import MainHeader from "../components/header/header";
import MainSideBar from "../components/sidebar/sidebar";

function MainPage() {
  return (
    <MainPageStyle>
      <MainHeader />
      <MainContent>
        <CO2Map />
      </MainContent>
    </MainPageStyle>
  );
}

export default MainPage;
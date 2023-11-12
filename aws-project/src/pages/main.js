import React, {useEffect, useState} from "react";

// Styles
import {
  MainContent,
  MainPageStyle,
  MainPageBody
} from './mainStyles';

// Components
import CO2Map from "../components/CO2Map/CO2Map";
import Card from "../components/card/card";
import CountryInfoCard from '../components/countryInfoCard/CountryInfoCard';
import FootPrintCard from "../components/eduCards/footprintCard/footprintCard";
import MainHeader from "../components/header/header";
import MainSideBar from "../components/sidebar/sidebar";

function MainPage() {
  return (
    <MainPageStyle>
      <MainHeader />
      <MainPageBody>
        <MainSideBar>
        </MainSideBar>

        <MainContent>
          <CO2Map />
        </MainContent>

        <MainSideBar>
          <FootPrintCard></FootPrintCard>
          <card></card>
          <FootPrintCard></FootPrintCard>
        </MainSideBar>
      </MainPageBody>
    </MainPageStyle>
  );
}

export default MainPage;
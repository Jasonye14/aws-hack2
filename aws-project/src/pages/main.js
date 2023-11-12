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
import MainHeader from "../components/header/header";
import MainSideBar from "../components/sidebar/sidebar";

function MainPage() {
  return (
    <MainPageStyle>
      <MainHeader />
      <MainPageBody>
        <MainSideBar>
          <CountryInfoCard/>
          <Card></Card>
        </MainSideBar>

        <MainContent>
          <CO2Map />
        </MainContent>

        <MainSideBar>
          This is the sidebar...
        </MainSideBar>
      </MainPageBody>
    </MainPageStyle>
  );
}

export default MainPage;
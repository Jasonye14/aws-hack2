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
import DateDisplay from "../components/dateBlock/dateBlock";


//left side
import CO2Card from "../components/CO2card/co2Card";
import EnvironmentalCard from "../components/EnviroCard/EnvironmentalCard";
import InfoCard from "../components/InfoCard/InfoCard";

function MainPage() {
  //country handler
  const [selectedCountry, setSelectedCountry] = useState(null);
  //alert(selectedCountry);

  const handleCountryClick = (countryName) => {
    setSelectedCountry(countryName);
  };

  return (
    <MainPageStyle>
      <MainHeader />
      <MainPageBody>
        <MainSideBar>
          <DateDisplay />
          <InfoCard countryName={selectedCountry} />
          <CO2Card/>
          <EnvironmentalCard/>
        </MainSideBar>

        <MainContent>
        <CO2Map onCountryClick={handleCountryClick} />
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
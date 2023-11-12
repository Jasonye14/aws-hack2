import React, {useEffect, useState} from "react";

// Styles
import {
  MainContent,
  MainPageStyle,
  MainPageBody
} from './mainStyles';

// Components
import CO2Map from "../components/CO2Map/CO2Map";
import MainHeader from "../components/header/header";
import MainSideBar from "../components/sidebar/sidebar";
import DateDisplay from "../components/dateBlock/dateBlock";
import PollutionCard from "../components/bottomCard/bottomCard";


//left side
import CO2Card from "../components/CO2card/co2Card";
import EnvironmentalCard from "../components/EnviroCard/EnvironmentalCard";
import InfoCard from "../components/InfoCard/InfoCard";

//right side
import FootPrintCard from "../components/eduCards/footprintCard/footprintCard";
import EcoProductCard from "../components/eduCards/ecoProductCard/ecoProductCard";
import PolicyCard from "../components/eduCards/policyCard/policyCard";

function MainPage() {
  //country handler
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [clickedCoords, setClickedCoords] = useState({ lat: null, lng: null });
  //alert(selectedCountry);

  const handleCountryClick = (countryData) => {
    setSelectedCountry(countryData.name);
    setClickedCoords({ lat: countryData.lat, lng: countryData.lng });
  };

  // const handleMapClick = (lat, lng) => {
  //   setClickedCoords({ lat: lat, lng: lng });
  // };

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("coords clicked")
    const url = 'https://airquality.googleapis.com/v1/currentConditions:lookup?key=AIzaSyACtvFhkIF7nUaCXpLiZmpauqJG5mTPaB4';
    const headers = {
      'Content-Type': 'application/json'
    };
    const body = JSON.stringify({
      "universalAqi": true,
      "location": {
        "latitude": clickedCoords.lat,
        "longitude": clickedCoords.lng
      },
      "extraComputations": [
        "HEALTH_RECOMMENDATIONS",
        "DOMINANT_POLLUTANT_CONCENTRATION",
        "POLLUTANT_CONCENTRATION",
        "LOCAL_AQI",
        "POLLUTANT_ADDITIONAL_INFO"
      ],
      "languageCode": "en"
    });

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: body
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setData(data); // Saving the data to the state
    })
    .catch(error => console.error('Error:', error));
  }, [clickedCoords]);


  return (
    <MainPageStyle>
      <MainHeader />
      <MainPageBody>
        <MainSideBar>
          <DateDisplay />
          <InfoCard countryName={selectedCountry} location={clickedCoords} />
          <CO2Card countryName={selectedCountry}/>
          <EnvironmentalCard data={data}/>
        </MainSideBar>

        <MainContent>
          <CO2Map onCountryClick={handleCountryClick} />
          <PollutionCard data={data}></PollutionCard>
        </MainContent>

        <MainSideBar>
          <FootPrintCard></FootPrintCard>
          <EcoProductCard></EcoProductCard>
          <PolicyCard data={data}></PolicyCard>
        </MainSideBar>
      </MainPageBody>
    </MainPageStyle>
  );
}

export default MainPage;
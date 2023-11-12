/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BottomCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-around;
  padding: 20px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3);
  background-color: #2c3e50; // Restored the background color
  color: #ecf0f1;
`;

const BottomCardBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px; // Adjusted for better visual alignment
`;

const SectionTitle = styled.h3`
  color: #ecf0f1;
  margin-bottom: 10px;
  font-size: 14px; // Adjust font size as needed
`;

const Selector = styled.select`
  background-color: #252525;
  color: #fff;
  border: 1px solid #333;
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 10px;

  .CircularProgressBar {
    width: 100px;
  }
`;

const ButtonRow = styled.div`
  background-color: #2c3e50; // Dark background color
  padding: 10px;
  display: flex;
  gap: 10px;
  overflow-x: auto; // In case of overflow, allow horizontal scrolling
  min-height: min-content;
`;

const Button = styled.button`
  background-color: #34495e; // Button background color
  color: #ecf0f1; // Button text color
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #4b6584; // Darken the button on hover
    transform: translateY(-2px); // Lift the button slightly on hover
  }

  &.active {
    background-color: #2980b9; // Highlight color for active button
  }
`;

const pollutants = ['All', 'CO', 'NO2', 'SO2', 'O3', 'PM2.5', 'PM10'];
const ranges = {
  co: {
    low: 9000,
    high: 35000
  },
  no2: {
    low: 60,
    high: 120
  },
  so2: {
    low: 35,
    high: 76
  },
  pm25: {
    low: 12,
    high: 55
  },
  pm10: {
    low: 12,
    high: 55
  },
  o3: {
    low: 54,
    high: 86
  }
}

const pollutionLevels = {
  CO: { level: 6, max: 50, unit: 'ppm' }, // values in ppm
  SO2: { level: 5, max: 500, unit: 'ppb' }, // values in ppb
  NO2: { level: 30, max: 200, unit: 'ppb' }, // values in ppb
  O3: { level: 60, max: 240, unit: 'ppb' }, // values in ppb
  PM25: { level: 12, max: 35, unit: 'µg/m3' }, // values in µg/m3
  PM10: { level: 25, max: 50, unit: 'µg/m3' }, // values in µg/m3
};

const PollutionCard = ({data}) => {
  const [selectedPollutant, setSelectedPollutant] = useState('All');
  const [pollInfo, setPollInfo] = useState({});

  useEffect(() => {
    if (data) {
      for (const pId in data.pollutants) {
        let p = data.pollutants[pId]
        console.log(p)
        let type = p.displayName
        const sources = p.additionalInfo.sources
        const effects = p.additionalInfo.effects
        const value = p.concentration.value
        let unit = p.concentration.units
        const code = p.code
        if (unit === 'PARTS_PER_BILLION') {
          unit = 'ppb';
        }
        else if (unit === 'MICROGRAMS_PER_CUBIC_METER') {
          unit = 'µg/m3';
        }
        setPollInfo(prev => {
          return {
            ...prev,
            [type]: {
              sources: sources,
              effects: effects,
              value: value,
              unit: unit,
              code: code
            }
          }
        })
      }
    }
  }, [data])

  useEffect(() => {
    console.log(pollInfo)
  }, [pollInfo])

  useEffect(() => {
    if (selectedPollutant != 'All') {
      console.log(ranges[pollInfo[selectedPollutant].code].high);

    }
  }, [selectedPollutant]);

  const handleChange = (event) => {
    setSelectedPollutant(event.target.value);
  };


  return (
    <BottomCard>
      <ButtonRow>
        {pollutants.map((pollutant) => (
          <Button
            key={pollutant}
            className={selectedPollutant === pollutant ? 'active' : ''}
            onClick={() => setSelectedPollutant(pollutant)}
          >
            {pollutant}
          </Button>
        ))}
      </ButtonRow>
      <BottomCardBody>
        {selectedPollutant === 'All' ?
          (Object.keys(pollInfo).length === 6 && (
            <>
              <Section>
                <SectionTitle>{'CO'}</SectionTitle>
                <CircularProgressbar
                  value={pollInfo['CO'].value}
                  maxValue={ranges[pollInfo['CO'].code].high}
                  text={`${Math.round(pollInfo['CO'].value)} ${pollInfo['CO'].unit}`}
                  styles={buildStyles({
                    textColor: '#fff',
                    pathColor: pollInfo['CO'].value <= ranges[pollInfo['CO'].code].low ? '#2ecc71'
                    : pollInfo['CO'].value <= ranges[pollInfo['CO'].code].high ? '#f1c40f' : '#e74c3c',
                    trailColor: '#204d74',
                    pathTransitionDuration: 0.5,
                  })}
                />
              </Section>

              <Section>
                <SectionTitle>{'PM2.5'}</SectionTitle>
                <CircularProgressbar
                  value={pollInfo['PM2.5'].value}
                  maxValue={ranges[pollInfo['PM2.5'].code].high}
                  text={`${Math.round(pollInfo['PM2.5'].value)} ${pollInfo['PM2.5'].unit}`}
                  styles={buildStyles({
                    textColor: '#fff',
                    pathColor: pollInfo['PM2.5'].value <= ranges[pollInfo['PM2.5'].code].low ? '#2ecc71'
                    : pollInfo['PM2.5'].value <= ranges[pollInfo['PM2.5'].code].high ? '#f1c40f' : '#e74c3c',
                    trailColor: '#204d74',
                    pathTransitionDuration: 0.5,
                  })}
                />
              </Section>

              <Section>
                <SectionTitle>{'NO2'}</SectionTitle>
                <CircularProgressbar
                  value={pollInfo['NO2'].value}
                  maxValue={ranges[pollInfo['NO2'].code].high}
                  text={`${Math.round(pollInfo['NO2'].value)} ${pollInfo['NO2'].unit}`}
                  styles={buildStyles({
                    textColor: '#fff',
                    pathColor: pollInfo['NO2'].value <= ranges[pollInfo['NO2'].code].low ? '#2ecc71'
                    : pollInfo['NO2'].value <= ranges[pollInfo['NO2'].code].high ? '#f1c40f' : '#e74c3c',
                    trailColor: '#204d74',
                    pathTransitionDuration: 0.5,
                  })}
                />
              </Section>
            </>
        )) :
          (Object.keys(pollInfo).length === 6 && (
            <>
              <Section>
                <SectionTitle>{selectedPollutant}</SectionTitle>
                <CircularProgressbar
                  value={pollInfo[selectedPollutant].value}
                  maxValue={ranges[pollInfo[selectedPollutant].code].high}
                  text={`${Math.round(pollInfo[selectedPollutant].value)} ${pollInfo[selectedPollutant].unit}`}
                  styles={buildStyles({
                    textColor: '#fff',
                    pathColor: pollInfo[selectedPollutant].value <= ranges[pollInfo[selectedPollutant].code].low ? '#2ecc71'
                    : pollInfo[selectedPollutant].value <= ranges[pollInfo[selectedPollutant].code].high ? '#f1c40f' : '#e74c3c',
                    trailColor: '#204d74',
                    pathTransitionDuration: 0.5,
                  })}
                />
              </Section>
              <div>
                {pollInfo[selectedPollutant].sources}
              </div>
            </>
          ))
        }
      </BottomCardBody>
    </BottomCard>
  );
};

export default PollutionCard;

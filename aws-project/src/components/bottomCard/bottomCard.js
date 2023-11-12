/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BottomCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  /* background-color: #2c3e50; */
  color: #ecf0f1;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3);
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 5rem;
`;

const SectionTitle = styled.h3`
  color: #ecf0f1;
  margin-bottom: 10px;
`;

const pollutionData = [
  { name: 'CO', level: 70, color: '#e74c3c' }, // Example data
  { name: 'SO2', level: 50, color: '#f1c40f' },
  { name: 'NO2', level: 30, color: '#2ecc71' },
  // Add more pollutants as needed
];

const PollutionCard = () => {
  return (
    <BottomCard>
      {pollutionData.map((pollutant) => (
        <Section key={pollutant.name}>
          <SectionTitle>{pollutant.name}</SectionTitle>
          <CircularProgressbar
            value={pollutant.level}
            text={`${pollutant.level}%`}
            styles={buildStyles({
              textColor: pollutant.color,
              pathColor: pollutant.color,
              trailColor: '#ecf0f1',
            })}
          />
        </Section>
      ))}
    </BottomCard>
  );
};

export default PollutionCard;

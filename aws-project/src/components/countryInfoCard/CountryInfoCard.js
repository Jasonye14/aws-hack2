import styled from '@emotion/styled';

// Styled card component
const InfoCard = styled.div`
  background-color: #1e212d; /* Dark background for the card */
  color: #ffffff; /* Text color */
  padding: 20px; /* Inner spacing */
  margin: 20px; /* Outer spacing */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05); /* Subtle shadow for "lifted" look */
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2 {
    margin: 0 0 10px 0; /* Space below the title */
    color: #4b9fbc; /* Highlight color for the title */
    font-size: 1.5rem; /* Title font size */
  }

  ul {
    list-style: none; /* Remove default list styling */
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 10px; /* Space below each list item */
      font-size: 0.9rem; /* List item font size */

      &:before {
        content: '• '; /* Custom bullet point */
        color: #4b9fbc; /* Highlight color for bullet points */
        font-size: 1.5rem; /* Bullet point size */
        vertical-align: middle;
        line-height: 0;
      }
    }
  }
`;

function CountryInfoCard() {
  return (
    <InfoCard>
      <h2>Your Country's Environment</h2>
      <ul>
        <li>Greenhouse Gas Emissions: [Data Here]</li>
        <li>CO2 Levels: [Data Here]</li>
        <li>Air Quality Index: [Data Here]</li>
      </ul>
    </InfoCard>
  );
}

export default CountryInfoCard;
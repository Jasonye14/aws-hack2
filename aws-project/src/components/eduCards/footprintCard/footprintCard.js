/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

// Styled components
const Card = styled.div`
  background-color: #222538;
  color: #ffffff;

  border-radius: 10px;
  padding: 20px;
  margin: 20px auto;
  max-width: 320px; /* Maximum width of the card */

  text-align: left;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const CardTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #21d4fd; /* A bright color for the title */
`;

const CardContent = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const BulletPoint = styled.li`
  margin-bottom: 10px;
  &:before {
    content: '• ';
    color: #21d4fd; /* Bullet point color */
    font-weight: bold; /* Bold bullet points */
    display: inline-block; /* Needed to apply margin */
    width: 1em;
    margin-left: -1em;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 20px; /* Indent for the bullet points */
`;

// Usage in component
export default function FootPrintCard() {
  return (
    <Card>
      <CardTitle>Reduce Your Carbon Footprint</CardTitle>
      <CardContent>
      Small changes in our everyday lives can have a significant impact on reducing carbon emissions. Here are practical steps you can take:      </CardContent>
      <BulletList>
        <BulletPoint>🚘  Use public transportation or carpool to reduce car emissions.</BulletPoint>
        <BulletPoint>💡  Switch to energy-efficient appliances and light bulbs.</BulletPoint>
        <BulletPoint>🐄  Reduce meat consumption to lower methane emissions.</BulletPoint>
        <BulletPoint>🚮  Recycle and compost to minimize waste in landfills.</BulletPoint>
        <BulletPoint>☀️   Support renewable energy sources like solar and wind power.</BulletPoint>
      </BulletList>
    </Card>
  );
}


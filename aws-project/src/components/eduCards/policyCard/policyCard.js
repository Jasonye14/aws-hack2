/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';

// Global styles to include the Poppins font
const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

const Card = styled.div`
  background-color: #121212; // Dark background color
  color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); // Shadow for depth
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.7);
  }
`;

const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600; // Poppins semi-bold
  color: #4CAF50; // Vibrant accent color
  margin: 0;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const PolicyItem = styled.div`
  background-color: #1c1c1c; // Slightly lighter background for the items
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #292929; // Darken item background on hover
  }
`;

const PolicyName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600; // Poppins semi-bold
  color: #ffffff;
`;

const PolicyDescription = styled.p`
  font-size: 0.9rem;
  color: #bbbbbb; // Lighter text for the description
`;

const policies = [
  {
    name: 'Climate Action Plan (CAP)',
    description: 'A strategic framework for measuring, planning, and reducing greenhouse gas (GHG) emissions and related climatic impacts.',
    link: "https://www.bethlehem-pa.gov/Public-Works/Climate-Action-Plan"
  },
  {
    name: 'Green Drinks',
    description: 'An informal monthly mixer that brings together folks who are interested in sustainable business, policy and living',
    link: "http://www.greendrinks.org/PA/Lehigh%20Valley"
  },
];

const PolicyCard = () => {
  const handlePolicyClick = (url) => {
    window.open(url); // or use window.open(url, '_blank') for a new tab
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Card>
        <CardTitle>Local Policies & Initiatives</CardTitle>
        {policies.map((policy, index) => (
          <PolicyItem key={index} onClick={() => handlePolicyClick(policy.link)}>
            <PolicyName>{policy.name}</PolicyName>
            <PolicyDescription>{policy.description}</PolicyDescription>
          </PolicyItem>
        ))}
      </Card>
    </>
  );
};

export default PolicyCard;
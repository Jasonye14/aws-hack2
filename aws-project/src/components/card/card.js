import { css } from '@emotion/react';
import React from 'react';

const cardStyle = css`
  background-color: #1A202C;
  width: 86%;
  height: auto;
  margin: 20px 30px;
  border: 1px solid #334155;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const headerStyle = css`
  padding: 10px 15px;
  background-color: #1A202C;
  color: #E2E8F0;
  text-align: center;
  border-bottom: 1px solid #334155;
`;

const bodyStyle = css`
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  align-items: center;
`;

const statStyle = css`
  text-align: center;
  color: #CBD5E1;
`;

const titleStyle = css`
  margin-bottom: 3px;
  color: #63B3ED;
  font-size: 0.9em; // Smaller font size for the title
`;

const valueStyle = css`
  margin: 0;
  font-size: 1.1em;
  font-weight: bold;
  color: #FBBF24;
`;

const Card = () => {
  const title = "Educational Stats";
  const stats = [
    { label: 'Courses Completed', value: '12' },
    { label: 'Average Score', value: '92%' },
    { label: 'Certificates Earned', value: '3' }
  ];

  return (
    <div css={cardStyle}>
      <div css={headerStyle}>
        <h2 css={titleStyle}>{title}</h2> {/* Apply titleStyle to the title */}
      </div>
      <div css={bodyStyle}>
        {stats.map((stat, index) => (
          <div key={index} css={statStyle}>
            <h3 css={titleStyle}>{stat.label}</h3>
            <p css={valueStyle}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const cardStyle = css`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const headerStyle = css`
  padding: 15px;
  background-color: #007bff;
  color: white;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const bodyStyle = css`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const statStyle = css`
  margin: 10px 0;
  text-align: center;
`;

const titleStyle = css`
  margin-bottom: 5px;
  color: #007bff;
`;

const valueStyle = css`
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
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
        <h2>{title}</h2>
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

/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import { ecoFriendlyProducts } from './sampleEcoProducts';

const Card = styled.div`
  background-color: #222538;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto', sans-serif;
  margin: 20px auto;
  max-width: 320px;
  text-align: left;
`;

const CardHeader = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #4CAF50;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: #1f1f1f;
  color: #fff;
  border: 1px solid #555;
  margin-bottom: 2rem;
  box-sizing: border-box;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProductLink = styled.li`
  display: block; // Make the link fill the container
  background-color: #262626;
  color: #fff;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #2e2e2e; // Slightly lighter on hover
  }
  &:last-child {
    margin-bottom: 0;
  }
  a {
    text-align: left;
    color: whitesmoke;
    text-decoration: none; // Remove underline from links
  }
`;

// The main component
const EcoProductCard = () => {
  const [category, setCategory] = useState('pollution');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Card>
      <CardHeader>Eco-Friendly Products</CardHeader>
      <Dropdown value={category} onChange={handleCategoryChange}>
        <option value="pollution">Pollution</option>
        <option value="carbonEmissions">Carbon Emissions</option>
        <option value="waterWaste">Water Waste</option>
      </Dropdown>
      <ProductList>
        {ecoFriendlyProducts[category].map((product, index) => (
          <ProductLink key={index}>
            <a href={product.url} target='_blank' rel="noopener noreferrer">
              {product.name}
            </a>
          </ProductLink>
        ))}
      </ProductList>
    </Card>
  );
};

export default EcoProductCard;

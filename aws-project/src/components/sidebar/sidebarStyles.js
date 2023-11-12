import styled from "@emotion/styled";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  height: 100%; // Full height

  border-radius: 0.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), /* Smaller shadow for subtle effect */
              0 4px 6px rgba(0, 0, 0, 0.05); /* Additional layer of shadow for depth */

  background-color: #222538;
  overflow-y: auto; // If content is too long, scroll
`;

export { Sidebar };

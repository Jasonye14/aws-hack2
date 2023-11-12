import styled from "@emotion/styled";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  height: 100%; // Full height

  border-radius: 0.2rem;

  background-color: #21253A;
  overflow-y: auto; // If content is too long, scroll
`;

export { Sidebar };

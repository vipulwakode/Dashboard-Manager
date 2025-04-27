import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Container = styled.div`
  display: flex;
  background-color: rgb(177, 196, 216);
  height: 5rem;
  padding: 1rem;
  align-items: center;
  gap: 2rem;
  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
    flex-shrink: 0;
  }
`;

const Header = () => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <SearchBar placeholder="Search widgets" />
    </Container>
  );
};

export default Header;

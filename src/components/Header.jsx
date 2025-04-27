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
`;
const Header = () => {
  return (
    <Container>
      <h1>Dashboard</h1>
      <SearchBar placeholder="Search widgets" />
    </Container>
  );
};

export default Header;

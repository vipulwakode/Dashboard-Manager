import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/dashboardSlice";

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.headerBackground};
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
    display: none;
  }
`;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.themeToggleBackground};
  cursor: pointer;
`;

const DarkThemeIcon = styled(FaMoon)`
  width: 2rem;
  height: 2rem;
`;

const LightThemeIcon = styled(FaSun)`
  width: 2rem;
  height: 2rem;
`;

const ThemeText = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.headerText};
`;

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.dashboard.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Container>
      <Title>Dashboard</Title>
      <SearchBar placeholder="Search widgets" />
      <ThemeContainer onClick={handleToggleTheme}>
        {theme === "light" ? (
          <>
            <LightThemeIcon size={24} color="#000" />
            <ThemeText>Light Mode</ThemeText>
          </>
        ) : (
          <>
            <DarkThemeIcon size={24} color="#fff" />
            <ThemeText>Dark Mode</ThemeText>
          </>
        )}
      </ThemeContainer>
    </Container>
  );
};

export default Header;

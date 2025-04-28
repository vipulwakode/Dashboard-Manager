import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  bodyBackground: "#f0f2f5",
  bodyText: "#000",
  headerBackground: "rgb(177, 196, 216)",
  headerText: "#000",
  widgetBackground: "#fff",
  widgetBoxShadow: "rgba(0, 0, 0, 0.1)",
  closeIconColor: "#333",
  buttonBackground: "#1e90ff",
  buttonHover: "#1c86ee",
  searchBarBackground: "#fff",
  modalBackground: "#fff",
  inputBackground: "#fff",
  borderColor: "#ccc",
  selectedInputBackground: "#EDF5E3",
  selectedInputHoverBackground: "#F7F7F7",
};

const darkTheme = {
  bodyBackground: "#121212",
  bodyText: "#ccc",
  headerBackground: "rgb(51, 51, 51)",
  headerText: "#fff",
  widgetBackground: "rgb(51, 51, 51)",
  widgetBoxShadow: "rgba(255, 255, 255, 0.1)",
  closeIconColor: "#fff",
  buttonBackground: "#555",
  buttonHover: "#777",
  searchBarBackground: "rgb(60, 60, 60)",
  modalBackground: "rgb(60, 60, 60)",
  inputBackground: "rgb(80, 80, 80)",
  borderColor: "rgb(100, 100, 100)",
  selectedInputBackground: "rgb(100, 100, 100)",
  selectedInputHoverBackground: "rgb(70, 70, 70)",
};

const ThemeWrapper = ({ children }) => {
  const theme = useSelector((state) => state.dashboard.theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;

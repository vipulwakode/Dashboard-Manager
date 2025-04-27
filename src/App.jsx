import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Dashboard from "./components/Dashboard";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f0f2f5;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Dashboard />
    </Provider>
  );
}

export default App;

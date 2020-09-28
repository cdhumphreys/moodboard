import React from "react";
import { ThemeProvider, createGlobalStyle, css } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import UIDashboard from "./pages/UIDashboard";
import Home from "./pages/Home";

import Nav from "./components/Nav";

import { darkTheme } from "./Themes";

const GlobalStyles = createGlobalStyle`
${(props) =>
  props.theme &&
  css`
    body,
    html {
      background-color: ${props.theme.primaryBackgroundColour};
      font-family: ${props.theme.fontFamily};
    }
  `}
`;

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Nav />
        <Switch>
          <Route path="/ui-dashboard">
            <UIDashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

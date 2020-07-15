import React from 'react';
import { Route } from 'react-router-dom'
import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import FrontPage from "./views/FrontPage"
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Route exact path={"/"} component={FrontPage} />
    </ThemeProvider>
  );
}

export default App;

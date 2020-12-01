import './App.css';

import Layout from "./composite/Layout";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import muiTheme from "./theme";

function App() {
  return <MuiThemeProvider theme={muiTheme}><Layout/></MuiThemeProvider>
}

export default App;

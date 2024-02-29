import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./containers/styles/globalStyle";
import Routes from "./routes"
ReactDOM.render(
  <>
    <Routes /> <GlobalStyle />
  </>,
  document.getElementById("root")
);
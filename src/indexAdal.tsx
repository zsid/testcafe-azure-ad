import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { runWithAdal } from "react-adal";
import adal from "./config/adalConfig";

const DO_NOT_LOGIN = false;

runWithAdal(
  adal.authContext,
  () => {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      document.getElementById("root")
    );
  },
  DO_NOT_LOGIN
);

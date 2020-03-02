import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import msal from "./config/msalConfig";
import AzureAD from "react-aad-msal";

ReactDOM.render(
  <AzureAD provider={msal.authProvider} forceLogin>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
  </AzureAD>,
  document.getElementById("root")
);

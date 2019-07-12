import { AdalConfig, AuthenticationContext } from "react-adal";

const adalConfig: AdalConfig = {
  cacheLocation: "sessionStorage",
  // @ts-ignore
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  tenant: process.env.REACT_APP_TENANT
};

const authContext = new AuthenticationContext(adalConfig);

export default {
  authContext
};

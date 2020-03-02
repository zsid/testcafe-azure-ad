import { AuthenticationContext } from "react-adal";

const adalConfig: any = {
  cacheLocation: "sessionStorage",
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
  tenant: process.env.REACT_APP_TENANT
};

const authContext = new AuthenticationContext(adalConfig);

export default {
  authContext
};

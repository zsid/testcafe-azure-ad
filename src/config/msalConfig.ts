import { MsalAuthProvider, LoginType } from "react-aad-msal";

// Msal Configurations
const config: any = {
  auth: {
    authority: `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT}`,
    clientId: process.env.REACT_APP_CLIENT_ID,
    redirectUri: process.env.REACT_APP_REDIRECT_URI
  },
  cache: {
    cacheLocation: "sessionStorage"
  }
};

// Options
const options = {
  loginType: LoginType.Redirect,
  // @ts-ignore
  tokenRefreshUri: `${(window as any).location.origin}/auth.html`
};

const authenticationParameters = {
  scopes: ["openid"]
};

const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);

export default { authProvider };

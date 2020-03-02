This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem

We use Azure AD for our login. We are now changing our libraries from `react-adal` to `react-aad-msal`. Our application is not rendering in the test browser since migrating to `react-aad-msal`. You can see the applicaiton normally if you visit `localhost:3000`.

## How to run the application

- Register your application in [Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
- Add redirect URI to be `http://localhost:3000/login` and have `Web` in the dropdown option.
- The application requires the [Implicit grant flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow) to be enabled. To do that once you have registered your application under Authentication you need to Access tokens and ID tokens.

![azure](https://github.com/zsid/testcafe-azure-ad/blob/master/azureAd.png)

- Update `.env` file with your `React variables`

```
REACT_APP_TENANT=Azure-tenant-id
REACT_APP_CLIENT_ID=Azure-client-id
REACT_APP_REDIRECT_URI=http://localhost:3000/login // This is the redirect URI that you have specified in Azure. They need to match.
```

- Update your `config.ts` in `testcafe` folder with the Azure login information. Either hardcode them or use `env` variables.

```
baseUrl: process.env.BASE_URL || "http://localhost:3000",
azureAdUsername: process.env.AZURE_AD_USERNAME // Your-login-email
azureAdPassword: process.env.AZURE_AD_PASSWORD // Your-password
```

- Start the app `yarn start` (dont forget to `yarn` before that to install dependancies) and then run seperately your `testcafe` tests - `yarn test:e2e:chrome`. You can see that after logging in the application is not rendering.

  - If you cannot login and the test fails in the login screen go into `testcafe/utils/roles.ts` and uncomment the last line `// .click(Selector("input").withAttribute("type", "submit"));` as this step sometimes appears and sometimes not.
  - You can also stop the test from running, unlock the browser and login yourself. You will not be see the application rendering.

- If you want to run the app using `react-adal` library rather than `react-aad-msal`, then rename `indexAdal.tsx` to `index.tsx` and change the name of `index.tsx`. You can see that we can login normally in our tests and see the application

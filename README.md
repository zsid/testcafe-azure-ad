This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem

We use Azure AD for our login. When we run our `testcafe` tests with `userRoles` the first test always fails due to login issues and it enters a loop. Subsequent tests pass and the login problem is not there.

## How to run the application

- Register your application in [Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
- The application requires the [Implicit grant flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow) to be enabled. To do that once you have registered your application under Authentication you need to Access tokens and ID tokens.

[azure](https://github.com/zsid/testcafe-azure-ad/azureAd.png)

- Once you have register
- [Enable ID tokens and access tokens](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-v2-javascript)
- Create `.env` file
- Add your `React Variables` i.e.

```
REACT_APP_TENANT=Azure-tenant-id
REACT_APP_CLIENT_ID=Azure-client-id
REACT_APP_REDIRECT_URI=http://localhost:3000/login
```

- Update your `config.ts` in `testcafe` folder with the Azure login information. Either hardcode them or use `env` variables.

```
baseUrl: process.env.BASE_URL || "http://localhost:3000",
azureAdUsername: process.env.AZURE_AD_USERNAME // Your-login-email
azureAdPassword: process.env.AZURE_AD_PASSWORD // Your-password
```

- Start the app `yarn start` (dont forget to `yarn` before that to install dependancies) and then in run seperately your `testcafe` tests - `yarn test:e2e:chrome`. You can see that the tests pass in safari `yarn test:e2e:safari`. The tests will also fail in `headless` mode.

- If you add debug in your tests when running them in `chrome` before navigating away, you can `unlock` the page and complete the flow - you will see that the loop will not longer be there. To simulate that add `debug` before the last `submit`

```
export async function loginAzureAD(t: any) {
  await t
    .typeText(
      Selector("input").withAttribute("type", "email"),
      config.azureAdUsername
    )
    .click(Selector("input").withAttribute("type", "submit"))
    .typeText(
      Selector("input").withAttribute("type", "password"),
      config.azureAdPassword
    )
    .click(Selector("input").withAttribute("type", "submit"))
    .debug() <--- Add debug here and press submit
    .click(Selector("input").withAttribute("type", "submit"));
}
```

- You can run the tests in `headless` mode and see the screenshot - > it is the same screen that you see when you run `e2e` tests in `chrome` and the first test fails.

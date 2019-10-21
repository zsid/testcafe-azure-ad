This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Problem

We use Azure AD for our login. When we run our `testcafe` tests with `userRoles` the first test always fails due to login issues and it enters a loop. Subsequent tests pass and the login problem is not there.

## How to run the application

- `yarn`
- `yarn start`
- `yarn test:e2e:headless`

You would see an error in the command line:

```
testcafe-azure-ad/testcafe/fixture/navigation.test.ts (13, 11): Property 'expect' does not exist on type 'DoneCallback'.
testcafe-azure-ad/testcafe/fixture/navigation.test.ts (20, 6): Property 'expect' does not exist on type 'DoneCallback'.
testcafe-azure-ad/testcafe/fixture/navigation.test.ts (31, 6): Property 'click' does not exist on type 'DoneCallback'.
```

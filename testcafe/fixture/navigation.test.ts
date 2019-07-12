import config from "../config";
import HomePage from "../pages/HomePage";
import { azureAdUser } from "../utils/roles";
import { ClientFunction } from "testcafe";

export const getLocation = ClientFunction(() => document.location.pathname);

fixture("HomePage Navigation")
  .page(`${config.baseUrl}`)
  .beforeEach(async (t: any) => {
    await t.useRole(azureAdUser);
  });

const homePage = new HomePage();

test("Navigation exists on the home page with two links", async t => {
  const { navigationLink } = homePage;

  await t.expect(navigationLink.count).eql(2);
});

test("Clicking the first link takes you to the orders list page", async t => {
  const { navigationLink } = homePage;

  await t
    .expect(navigationLink.nth(0).getAttribute("href"))
    .eql("/movies")
    .click(navigationLink.nth(0))
    .expect(getLocation())
    .eql("/movies");
});

test("Clicking the second link takes you to the snacks page", async t => {
  const { navigationLink } = homePage;

  await t
    .click(navigationLink.nth(1))
    .expect(getLocation())
    .eql("/snacks");
});

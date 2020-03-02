import { Role, Selector } from "testcafe";
import config from "../config";

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
    .click(Selector("input").withAttribute("type", "submit"));
  // .click(Selector("input").withAttribute("type", "submit"));
}

export const azureAdUser = Role(`${config.baseUrl}`, loginAzureAD);

export default {
  azureAdUser
};

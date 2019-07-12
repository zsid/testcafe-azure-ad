import { ReactSelector } from "testcafe-react-selectors";

export default class HomePage {
  navigation: Selector;

  navigationLink: Selector;

  constructor() {
    this.navigation = ReactSelector("nav").withProps({
      "data-tc": "navigation"
    });
    this.navigationLink = ReactSelector("NavLink").withProps({
      "data-tc": "navigationLink"
    });
  }
}

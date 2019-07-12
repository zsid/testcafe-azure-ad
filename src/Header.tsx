import React from "react";
import { NavLink } from "react-router-dom";
import adal from "./config/adalConfig";

const Header = () => (
  <header data-tc="header">
    <nav>
      <NavLink exact to={"/movies"} data-tc="navigationLink">
        Movies
      </NavLink>
      <NavLink exact to={"/snacks"} data-tc="navigationLink">
        Snacks
      </NavLink>
      <button onClick={() => adal.authContext.logOut()}>Log out</button>
    </nav>
  </header>
);

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header data-tc="header">
    <nav>
      <NavLink exact to={"/movies"} data-tc="navigationLink">
        Movies
      </NavLink>
      <NavLink exact to={"/snacks"} data-tc="navigationLink">
        Snacks
      </NavLink>
    </nav>
  </header>
);

export default Header;

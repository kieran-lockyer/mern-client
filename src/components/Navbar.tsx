import React from "react";
import { Icon } from "@blueprintjs/core";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarNav, NavbarNavItem } from "./styles";

export default () => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <img src="./images/logo.png" alt="Brand Logo" />
        </NavbarBrand>

        <NavbarNav>
          <NavbarNavItem>
            <NavLink
              activeClassName="selected"
              className="navbar__nav-link"
              exact
              to="/"
            >
              <Icon icon="dashboard" iconSize={25} />
            </NavLink>
          </NavbarNavItem>
          <NavbarNavItem>
            <NavLink
              activeClassName="selected"
              className="navbar__nav-link"
              exact
              to="/photos"
            >
              <Icon icon="mugshot" iconSize={25} />
            </NavLink>
          </NavbarNavItem>
          <NavbarNavItem>
            <NavLink
              activeClassName="selected"
              className="navbar__nav-link"
              exact
              to="/tags"
            >
              <Icon icon="tag" iconSize={25} />
            </NavLink>
          </NavbarNavItem>
          <NavbarNavItem>
            <NavLink
              activeClassName="selected"
              className="navbar__nav-link"
              to="/settings"
            >
              <Icon icon="cog" iconSize={25} />
            </NavLink>
          </NavbarNavItem>
        </NavbarNav>
      </Navbar>
    </>
  );
};

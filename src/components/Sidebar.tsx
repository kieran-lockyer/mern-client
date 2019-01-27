import React from "react";
import { Icon } from "@blueprintjs/core";
import { Navbar, NavbarBrand, NavbarNav, NavItems } from "../styles/AppStyles";
import { NavItem } from "../styles/AppStyles";

export default () => {
  return (
    <>
      <Navbar>
        <NavbarBrand>
          <img src="/images/logo.png" alt="Brand Logo" />
        </NavbarBrand>

        <NavbarNav>
          <NavItems>
            <NavItem exact to="/">
              <Icon icon="dashboard" iconSize={25} />
            </NavItem>
          </NavItems>
          <NavItems>
            <NavItem exact to="/photos">
              <Icon icon="mugshot" iconSize={25} />
            </NavItem>
          </NavItems>
          <NavItems>
            <NavItem exact to="/tags">
              <Icon icon="tag" iconSize={25} />
            </NavItem>
          </NavItems>
          <NavItems>
            <NavItem to="/settings">
              <Icon icon="cog" iconSize={25} />
            </NavItem>
          </NavItems>
        </NavbarNav>
      </Navbar>
    </>
  );
};

NavItem.defaultProps = {
  activeClassName: "active"
};

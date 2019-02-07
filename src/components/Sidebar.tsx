import React from "react";
import { Icon } from "@blueprintjs/core";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => (
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
        <NavItem to="/photos">
          <Icon icon="media" iconSize={25} />
        </NavItem>
      </NavItems>
      <NavItems>
        <NavItem to="/tags">
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
);

const Navbar = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-direction: column;
  align-items: center;
  max-width: 5rem;
  background: #172336;
  margin-right: auto;
  @media only screen and (max-width: 800px) {
    flex-direction: row;
    width: 100%;
    max-width: 100%;
  }
`;

const NavbarBrand = styled.div`
  margin: 3rem auto;

  @media only screen and (max-width: 800px) {
    margin 0;
  }


  & img {
    border-radius: 50%;
    width: 100%;
    height: auto;
    padding: 0.7rem;
    max-height: 70px;
    width: auto;
  }
`;

const NavbarNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex-basis: 100%;
  @media only screen and (max-width: 800px) {
    flex-direction: row;
  }
`;

const NavItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s ease-in;
`;

const NavItem = styled(NavLink)`
  width: 100%;
  min-height: 4rem;
  display: flex;
  justify-content: center;
  flex: 0 0 2rem;
  align-items: center;
  transition: all 0.2s;
  color: #fff;

  & svg {
    fill: #fff !important;
  }

  &:hover,
  &:active {
    background: #48c0b9;
  }

  &.${props => props.activeClassName} {
    background: #48c0b9;
  }
`;

NavItem.defaultProps = {
  activeClassName: "active"
};

export default Sidebar;

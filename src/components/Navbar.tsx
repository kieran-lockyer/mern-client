import React from "react";
import { Icon } from "@blueprintjs/core";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__brand">
          <img
            className="navbar__brand-img"
            src="./images/logo.png"
            alt="Brand Logo"
          />
        </div>

        <ul className="navbar__nav">
          <li className="navbar__nav-item">
            <NavLink
              activeClassName="selected"
              className="navbar__nav-link"
              exact
              to="/"
            >
              <Icon icon="dashboard" iconSize={25} />
            </NavLink>
          </li>
          <li className="navbar__nav-item">
            <NavLink
              activeClassName="selected"
              className="navbar__nav-link"
              exact
              to="/photos"
            >
              <Icon icon="mugshot" iconSize={25} />
            </NavLink>
          </li>
          <li className="navbar__nav-item">
            <NavLink
              activeClassName="selected"
              className="navbar__nav-link"
              exact
              to="/tags"
            >
              <Icon icon="tag" iconSize={25} />
            </NavLink>
          </li>
          <li className="navbar__nav-item">
            <NavLink
              activeClassName="selected"
              className="navbar__nav-link"
              to="/settings"
            >
              <Icon icon="cog" iconSize={25} />
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

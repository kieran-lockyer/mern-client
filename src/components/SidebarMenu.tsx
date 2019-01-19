import React, { Component } from "react";
import { Icon } from "@blueprintjs/core";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
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
            <Link className="navbar__nav-link" to="/">
              <Icon icon="dashboard" iconSize={25} />
            </Link>
          </li>
          <li className="navbar__nav-item">
            <Link className="navbar__nav-link" to="/photos">
              <Icon icon="mugshot" iconSize={25} />
            </Link>
          </li>
          <li className="navbar__nav-item">
            <Link className="navbar__nav-link" to="/tags">
              <Icon icon="tag" iconSize={25} />
            </Link>
          </li>
          <li className="navbar__nav-item">
            <Link className="navbar__nav-link" to="/settings">
              <Icon icon="cog" iconSize={25} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarMenu;

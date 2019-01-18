import React from "react";
import { Icon } from "@blueprintjs/core";

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
            <a href="#" className="navbar__nav-link">
              <Icon icon="home" iconSize={25} />
            </a>
          </li>
          <li className="navbar__nav-item">
            <a href="#" className="navbar__nav-link">
              <Icon icon="chart" iconSize={25} />
            </a>
          </li>
          <li className="navbar__nav-item">
            <a href="#" className="navbar__nav-link">
              <Icon icon="cog" iconSize={25} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarMenu;

import React from "react";

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
              <i className="fas fa-chart-bar" />
            </a>
          </li>
          <li className="navbar__nav-item">
            <a href="#" className="navbar__nav-link">
              <i className="fas fa-cog" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SidebarMenu;

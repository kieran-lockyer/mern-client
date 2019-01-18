import React, { Component } from "react";
import Dashboard from "./Dashboard";
import SidebarMenu from "./SidebarMenu";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SidebarMenu />
        <Dashboard />
      </div>
    );
  }
}

export default App;

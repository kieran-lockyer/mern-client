import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";
import SidebarMenu from "./SidebarMenu";
import PhotoDashboard from "./PhotoList/AllPhotos";
import TagsDashboard from "./TagList/AllTags";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <SidebarMenu />
          <Route path="/" exact component={Dashboard} />
          <Route path="/photos" exact component={PhotoDashboard} />
          <Route path="/tags" exact component={TagsDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;

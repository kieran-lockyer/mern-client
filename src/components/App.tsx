import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar";
import PhotoDashboard from "./PhotoList/AllPhotos";
import TagsDashboard from "./TagList/AllTags";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/photos" exact component={PhotoDashboard} />
            <Route path="/tags" exact component={TagsDashboard} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

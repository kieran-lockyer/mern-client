import React, { Component } from "react";
import Dashboard from "./Dashboard/Dashboard";
import Navbar from "./Navbar";
import PhotoDashboard from "./PhotoList/AllPhotos";
import TagsDashboard from "./TagList/AllTags";
import TagSingle from "./TagList/TagSingle";
import Error from "./Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "./styles";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/photos" exact component={PhotoDashboard} />
            <Route path="/tags" exact component={TagsDashboard} />
            <Route path="/tags/:tagname" exact component={TagSingle} />
            <Route component={Error} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

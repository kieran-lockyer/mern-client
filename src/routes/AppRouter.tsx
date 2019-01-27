import React, { Component } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar";
import Photos from "../components/Photos/PhotoList";
import Tags from "../components/Tags/TagList";
import TagSingle from "../components/Tags/TagSingle";
import NotFound from "../components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContainer } from "../styles/AppStyles";

export default class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/photos" exact component={Photos} />
            <Route path="/tags" exact component={Tags} />
            <Route path="/tags/:tagname" exact component={TagSingle} />
            <Route component={NotFound} />
          </Switch>
        </AppContainer>
      </Router>
    );
  }
}

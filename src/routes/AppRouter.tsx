import React, { Component } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar";
import Photos from "../components/Photos/PhotoList";
import Tags from "../components/Tags/TagList";
import TagSingle from "../components/Tags/TagSingle";
import NotFound from "../components/NotFound";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../history";
import { AppContainer } from "../styles/AppStyles";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <AppContainer>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route
              path="/photos"
              exact
              render={() => <Redirect from="/photos" exact to="/photos/1" />}
            />
            <Route path="/photos/:page" exact component={Photos} />
            <Redirect from="/tags" exact push to="/tags/1" />
            <Route path="/tags/:page" exact component={Tags} />
            <Route path="/tag/:tagname" exact component={TagSingle} />
            <Route component={NotFound} />
          </Switch>
        </AppContainer>
      </Router>
    );
  }
}

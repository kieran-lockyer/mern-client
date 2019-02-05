import React, { Component } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar";
import Photos from "../components/Photos/PhotoList";
import Tags from "../components/Tags/TagList";
import TagSingle from "../components/Tags/TagSingle";
import NotFound from "../components/NotFound";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../history";
import styled from "styled-components";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Container>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route
              path="/photos"
              exact
              render={() => <Redirect from="/photos" exact to="/photos/1" />}
            />
            <Route path="/photos/:id" exact component={Photos} />
            <Route
              path="/tags"
              exact
              render={() => <Redirect from="/tags" exact to="/tags/1" />}
            />
            <Route path="/tags/:page" exact component={Tags} />
            <Route path="/tag/:tagId" exact component={TagSingle} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background: #eee;
`;

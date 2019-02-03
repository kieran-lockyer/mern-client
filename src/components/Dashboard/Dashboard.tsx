import React, { Component } from "react";
import DashboardAnalytics from "./DashboardAnalytics";
import DashboardGraph from "./DashboardGraph";
import DashboardStats from "./DashboardStats";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../actions";
import api from "../../api";
import { Cube } from "react-preloaders";

class Dashboard extends Component<any, any> {
  state = {
    popTags: [],
    trendingTags: [],
    isLoading: true
  };

  async componentDidMount() {
    try {
      this.props.fetchPhotos(1);
      this.props.fetchTags(1);
      const popTags = await api.get("/tags/stats/get/poptags");
      const trendingTags = await api.get("/tags/stats/get/trendingtags");
      this.setState({
        popTags: popTags.data,
        trendingTags: trendingTags.data
      });
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1500);
    } catch {
      err => console.log(err);
    }
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <Container>
          <Wrapper>
            <Header>
              <Graph>
                <DashboardGraph />
              </Graph>
              <DashboardStats />
            </Header>
            <DashboardAnalytics {...this.state} />
          </Wrapper>
        </Container>
      );
    } else {
      return (
        <Container>
          <Cube color={"#48c0b9"} bgColor={"transparent"} />
        </Container>
      );
    }
  }
}

// Styled Components
const Container = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 85%;
  padding: 2rem;
  max-width: 1300px;
`;

const Header = styled.section`
  border-radius: 15px;
  margin-bottom: 3rem;
  display: flex;
`;

const Graph = styled.div`
  background: #18263d;
  border-radius: 1rem;
  box-shadow: 0 0 14px 12px #e8e8e8;
  padding: 20px;
  box-sizing: border-box;
  width: 75%;
  margin-right: auto;
`;

export default connect(
  null,
  actions
)(Dashboard);

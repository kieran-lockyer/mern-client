import React, { Component } from "react";
import DashboardAnalytics from "./DashboardAnalytics";
import DashboardGraph from "./DashboardGraph";
import DashboardStats from "./DashboardStats";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Cube } from "react-preloaders";

class Dashboard extends Component<any, any> {
  componentDidMount() {
    try {
      this.props.fetchPhotos(1, 30, "dateAdded", "desc", "");
      this.props.fetchTags(1, 30, "dateAdded", "desc", "");
      this.props.fetchStats();
      this.props.fetchGraphData(30, "one_month");
    } catch {
      err => console.log(err);
    }
  }

  render() {
    const { isLoading } = this.props;

    if (!isLoading) {
      return (
        <Container>
          <Wrapper>
            <Header>
              <Graph>
                <DashboardGraph />
              </Graph>
              <DashboardStats />
            </Header>
            <DashboardAnalytics />
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

  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 1rem;
  }
`;

const Header = styled.section`
  border-radius: 15px;
  margin-bottom: 3rem;
  display: flex;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Graph = styled.div`
  background: #18263d;
  border-radius: 1rem;
  box-shadow: 0 0 14px 12px #e8e8e8;
  padding: 20px;
  box-sizing: border-box;
  width: 75%;
  margin-right: auto;
  @media only screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const mapStateToProps = state => ({
  isLoading: state.stats.isLoading
});

export default connect(
  mapStateToProps,
  actions
)(Dashboard);

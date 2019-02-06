import React, { Component } from "react";
import Chart from "react-apexcharts";
import { ButtonGroup, Button } from "@blueprintjs/core";
import { connect } from "react-redux";
import * as actions from "../../actions";
import styled from "styled-components";
import { Cube } from "react-preloaders";

class DashboardGraph extends Component<any, any> {
  render() {
    if (this.props.selection) {
      return (
        <div>
          <ButtonGroup fill>
            <Button
              onClick={() => this.props.fetchGraphData(7, "one_week")}
              id="one_week"
              className={
                this.props.selection === "one_week"
                  ? "date-button-group date-button-group-active"
                  : "date-button-group"
              }
            >
              1W
            </Button>
            <Button
              onClick={() => this.props.fetchGraphData(30, "one_month")}
              id="one_month"
              className={
                this.props.selection === "one_month"
                  ? "date-button-group date-button-group-active"
                  : "date-button-group"
              }
            >
              1M
            </Button>
            <Button
              onClick={() => this.props.fetchGraphData(90, "three_months")}
              id="three_months"
              className={
                this.props.selection === "three_months"
                  ? "date-button-group date-button-group-active"
                  : "date-button-group"
              }
            >
              3M
            </Button>
            <Button
              onClick={() => this.props.fetchGraphData(180, "six_months")}
              id="six_months"
              className={
                this.props.selection === "six_months"
                  ? "date-button-group date-button-group-active"
                  : "date-button-group"
              }
            >
              6M
            </Button>
          </ButtonGroup>
          <Chart options={this.props.options} series={this.props.series} />
        </div>
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

const Container = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const mapStateToProps = state => ({
  options: state.graph.options,
  series: state.graph.series,
  selection: state.graph.selection
});

export default connect(
  mapStateToProps,
  actions
)(DashboardGraph);

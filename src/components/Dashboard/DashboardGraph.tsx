import React, { Component } from "react";
import Chart from "react-apexcharts";
import { ButtonGroup, Button } from "@blueprintjs/core";
import { connect } from "react-redux";
import * as actions from "../../actions";

class DashboardGraph extends Component<any, any> {
  render() {
    return (
      <div>
        <ButtonGroup fill>
          <Button
            onClick={() => this.props.fetchGraphData(7)}
            id="one_week"
            className="date-button-group"
          >
            1W
          </Button>
          <Button
            onClick={() => this.props.fetchGraphData(30)}
            id="one_month"
            className="date-button-group"
          >
            1M
          </Button>
          <Button
            onClick={() => this.props.fetchGraphData(90)}
            id="six_months"
            className="date-button-group"
          >
            3M
          </Button>
          <Button
            onClick={() => this.props.fetchGraphData(180)}
            id="one_year"
            className="date-button-group"
          >
            6M
          </Button>
        </ButtonGroup>
        <Chart options={this.props.options} series={this.props.series} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  options: state.graph.options,
  series: state.graph.series,
  selection: state.graph.selection
});

export default connect(
  mapStateToProps,
  actions
)(DashboardGraph);

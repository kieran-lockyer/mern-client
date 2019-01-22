import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class DashboardGraph extends Component {
  state = {
    selection: "one_year",
    options: {
      legend: {
        show: false,
        position: "top",
        horizontalAlign: "left"
      },
      chart: {
        id: "Photo Analytics",
        foreColor: "#FFFFFF"
      },
      grid: {
        show: false
      },
      xaxis: {
        type: "date",
        title: {
          style: {
            color: "#FFF"
          }
        },
        categories: [
          "January",
          "Feburary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ]
      },
      tooltip: {
        x: {
          format: "dd MMM yyyy"
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      theme: {
        palette: "palette1"
      }
    },
    // END OF OPTIONS

    series: [
      {
        name: "Tags Generated",
        type: "bar",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 65, 45, 34, 44]
      },
      {
        name: "Photos Uploaded",
        type: "line",
        data: [18, 32, 18, 50, 67, 23, 75, 70, 65, 45, 34, 44]
      }
    ]
  };

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="line"
      />
    );
  }
}

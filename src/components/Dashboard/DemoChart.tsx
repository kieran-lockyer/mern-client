import React, { Component } from "react";
import Chart from "react-apexcharts";

class DemoChart extends Component {
  state = {
    options: {
      legend: {
        show: true
      },
      theme: {
        palette: "palette2",
        monochrome: {
          enabled: false,
          color: "#255aee",
          shadeTo: "light",
          shadeIntensity: 0.65
        }
      },
      chart: {
        id: "apexchart-example"
      },
      xaxis: {
        lines: {
          show: false
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
        ],
        xaxis: {
          type: "datetime"
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },

    series: [
      {
        name: "Photos Uploaded",
        type: "area",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 65, 45, 34, 44]
      },
      {
        name: "Tags Generated",
        type: "bar",
        data: [10, 32, 18, 50, 67, 23, 75, 70, 65, 45, 34, 44]
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

export default DemoChart;

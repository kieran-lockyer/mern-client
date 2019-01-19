import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class FeaturedChart extends Component {
  state = {
    chartData: {}
  };
  render() {
    return <Line data={chartData} options={chartOptions} />;
  }
}

const chartData = {
  labels: [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "October",
    "November",
    "December"
  ],
  datasets: [
    {
      label: "Photos",
      data: [25, 34, 10, 17, 20, 30, 40, 20, 15, 23, 75, 44, 25],
      backgroundColor: "rgba(72, 192, 185, 0.5)",
      borderColor: "rgba(137, 83, 157, 0.5)"
    }
  ]
};

const chartOptions = {
  repsonsive: true,
  aspectRatio: 1,
  scaleLineColor: "transparent",
  title: {
    display: true,
    text: "Photos Uploaded",
    fontSize: 25
  },
  hover: {
    mode: "dataset"
  },
  scales: {
    yAxes: [
      {
        display: false
      }
    ],
    xAxes: [
      {
        display: false
      }
    ]
  }
};

export default FeaturedChart;

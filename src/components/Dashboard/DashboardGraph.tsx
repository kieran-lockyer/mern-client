import React, { Component } from "react";
import Chart from "react-apexcharts";
import api from '../../api/index'

export default class DashboardGraph extends Component {
  state = {
    selection: "thirty_days",
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
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
        ].reverse()
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
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Photos Uploaded",
        type: "line",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  };

  componentDidMount() {
    this.getTagStats()
  }

  getTagStats = () => {
    console.log("fetching")
    api.get('/tags/stats/30').then((res) => {
      console.log(res)
      this.setState({
        series: [
          {
            name: "Tags Generated",
            type: "bar",
            data: res.data
          }
        ]
      })
    })
  }

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

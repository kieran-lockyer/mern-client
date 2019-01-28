import React, { Component } from "react";
import Chart from "react-apexcharts";
import api from "../../api/index";

class DashboardGraph extends Component<any, any> {
  state = {
    selection: "thirty_days",
    options: {
      legend: {
        show: false,
        position: "top",
        horizontalAlign: "left"
      },
      chart: {
        id: "Sortal Analytics",
        foreColor: "#FFFFFF",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000
          }
        }
      },
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 0
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        type: "datetime",
        title: {
          style: {
            color: "#FFF"
          }
        },
        categories: []
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
      },
      stroke: {
        curve: "straight",
        width: 5
      }
    },

    series: [
      {
        name: "Tags Generated",
        type: "area",
        data: []
      },
      {
        name: "Photos Uploaded",
        type: "line",
        data: []
      }
    ]
  };

  componentDidMount() {
    this.getTagStats(20);
  }

  getTagStats = numOfDays => {
    api.get(`/tags/stats/${numOfDays}`).then(res => {
      const data = [...new Array(res.data.length)].map((i, id) => {
        return {
          date: new Date(
            new Date().setDate(new Date().getDate() - id)
          ).toDateString(),
          tags: res.data[id]
        };
      });
      console.log(data);
      this.setState({
        series: [
          {
            name: "Tags Generated",
            type: "bar",
            data: res.data
          }
        ]
      });
      this.setState({
        options: {
          ...this.state.options,
          xaxis: {
            ...this.state.options.xaxis,
            categories: data.map(date => date.date).reverse()
          }
        }
      });
    });
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

export default DashboardGraph;

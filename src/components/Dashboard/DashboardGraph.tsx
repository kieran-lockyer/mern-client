import React, { Component } from "react";
import Chart from "react-apexcharts";
import api from "../../api/index";
import { ButtonGroup, Button } from "@blueprintjs/core";

class DashboardGraph extends Component<any, any> {
  state = {
    selection: "one_week",
    options: {
      chart: {
        id: "Sortal Analytics",
        foreColor: "#FFFFFF",
        type: "area",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 1000
          }
        },
        toolbar: {
          show: false
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
        theme: "dark",
        x: {
          show: false,
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
        curve: "smooth",
        width: 5
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: "bottom",
        horizontalAlign: "center",
        floating: true
      },
      fill: {
        type: "pattern",
        pattern: {
          style: "slantedLines",
          width: 3,
          height: 2,
          strokeWidth: 2
        }
      }
    },

    series: [
      {
        name: "Tags Generated",
        type: "area",
        data: []
      }
    ]
  };

  componentDidMount() {
    this.getTagStats(7);
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

      this.setState({
        series: [
          {
            name: "Tags Generated",
            type: "area",
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
      this.getPhotoStats(numOfDays);
    });
  };

  getPhotoStats = numOfDays => {
    api.get(`/photos/stats/${numOfDays}`).then(res => {
      const updatedSeries = [
        ...this.state.series,
        { name: "Photos Uploaded", type: "bar", data: res.data }
      ];
      this.setState({
        series: updatedSeries
      });
    });
  };

  updateDate(timeline) {
    this.setState({
      selection: timeline
    });

    switch (timeline) {
      case "one_month":
        this.getTagStats(30);
        break;
      case "six_months":
        this.getTagStats(180);
        break;
      case "one_year":
        this.getTagStats(365);
        break;
      case "one_week":
        this.getTagStats(7);
        break;
      default:
    }
  }

  render() {
    return (
      <div>
        <ButtonGroup fill>
          <Button
            onClick={() => this.updateDate("one_week")}
            id="one_week"
            className="date-button-group"
          >
            1W
          </Button>
          <Button
            onClick={() => this.updateDate("one_month")}
            id="one_month"
            className="date-button-group"
          >
            1M
          </Button>
          <Button
            onClick={() => this.updateDate("six_months")}
            id="six_months"
            className="date-button-group"
          >
            6M
          </Button>
          <Button
            onClick={() => this.updateDate("one_year")}
            id="one_year"
            className="date-button-group"
          >
            1Y
          </Button>
        </ButtonGroup>
        <Chart options={this.state.options} series={this.state.series} />
      </div>
    );
  }
}

export default DashboardGraph;

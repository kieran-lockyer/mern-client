const initialState = {
  selection: "one_week",
  options: {
    chart: {
      id: "Sortal Analytics",
      foreColor: "#FFFFFF",
      stacked: true,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "100%"
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
      width: [0, 0]
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: true
    },
    fill: {
      opacity: [0.8, 0.9, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.95,
        opacityTo: 0.65,
        stops: [0, 100, 100, 100]
      }
    }
  },

  series: []
};

export default (state = initialState, { type, tagData, photoData }) => {
  switch (type) {
    case "FETCH_GRAPH_DATA":
      const newSeries = [
        {
          name: "Tags Generated",
          type: "column",
          data: tagData
        },
        {
          name: "Photos Uploaded",
          type: "column",
          data: photoData
        }
      ];

      const dates = [...new Array(tagData.length)].map((i, id) => {
        return {
          date: new Date(
            new Date().setDate(new Date().getDate() - id)
          ).toDateString()
        };
      });

      return {
        ...state,
        series: newSeries,
        options: {
          ...state.options,
          xaxis: {
            ...state.options.xaxis,
            categories: dates.map(date => date.date).reverse()
          }
        }
      };

    default:
      return state;
  }
};

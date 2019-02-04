const initialState = {
  selection: "one_week",
  options: {
    chart: {
      id: "Sortal Analytics",
      foreColor: "#FFFFFF",
      type: "area",
      stacked: true,
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
          type: "area",
          data: tagData
        },
        {
          name: "Photos Uploaded",
          type: "bar",
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

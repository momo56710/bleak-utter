import { border, Box } from "@pankod/refine-chakra-ui";
import React from "react";
import ReactApexChart from "react-apexcharts";
function PieChart() {
  return <ApexChart />;
}
export default PieChart;
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
        labels: ["momo", "sa3id", "adam", "a", "c"],
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              labels: {
                show: true,
                style: {
                  fontSize: "10px",
                },
              },
            },
          },
        },
        stroke: { show: false },
      },
      series: [44, 55, 41, 17, 15],
    };
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.options}
        series={this.state.series}
        type="donut"
        width={"100px"}
      />
    );
  }
}

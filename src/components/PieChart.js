import React from "react";
import ReactApexChart from "react-apexcharts";
function PieChart({ pieChartData, label }) {
  const internalPieChartData = {
    series: pieChartData,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: label,
    //   colors:["#F37","#37D"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: window.innerWidth >= 599 ? 200 : 300,
              // width:200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <ReactApexChart
        options={internalPieChartData.options}
        series={internalPieChartData.series}
        type="pie"
        width={380}
      />
    </div>
  );
}

export default PieChart;

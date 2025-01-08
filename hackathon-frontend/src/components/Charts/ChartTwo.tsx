import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const AlertsByCategory: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      events: {
        dataPointSelection: (event, chartContext, config) => {
          console.log(
            `Drill-down to fisheries for ${config.w.config.xaxis?.categories?.[config.dataPointIndex]}`,
          );
        },
      },
    },
    xaxis: {
      categories: ["Water Contamination", "Low Oxygen", "Fish Disease"],
    },
    tooltip: {
      enabled: true,
    },
  };

  const chartSeries = [{ name: "Alerts", data: [30, 20, 15] }];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      height={350}
    />
  );
};

export default AlertsByCategory;

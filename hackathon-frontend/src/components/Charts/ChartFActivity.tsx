import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const FisheriesActivity: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "heatmap",
    },
    xaxis: {
      categories: ["Activity 1", "Activity 2", "Activity 3"],
    },
    colors: ["#008FFB"],
  };

  const chartSeries = [
    {
      name: "Fishery 1",
      data: [5, 10, 15],
    },
    {
      name: "Fishery 2",
      data: [10, 20, 30],
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="heatmap"
      height={350}
    />
  );
};

export default FisheriesActivity;

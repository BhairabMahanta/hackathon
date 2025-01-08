import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const DeviceUsage: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Desktop", "Mobile", "Tablet", "Offline"],
    tooltip: {
      enabled: true,
    },
  };

  const chartSeries = [55, 30, 10, 5]; // Example percentages

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="donut"
      height={350}
    />
  );
};

export default DeviceUsage;

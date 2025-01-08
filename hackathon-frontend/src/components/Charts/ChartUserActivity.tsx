import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
const UserActivity: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
  };

  const chartSeries = [
    {
      name: "Active Users",
      data: [50, 75, 100, 125, 150],
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="area"
      height={350}
    />
  );
};

export default UserActivity;

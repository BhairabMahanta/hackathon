import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const WaterQualityTrends: React.FC = () => {
  const series = [
    { name: "pH", data: [7.1, 7.3, 7.5, 7.2, 7.4] },
    { name: "Dissolved Oxygen", data: [6.5, 6.8, 6.7, 6.9, 6.4] },
    { name: "Temperature", data: [25, 27, 26, 28, 26] },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line", // Explicitly specify the type
      height: 350,
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
    },
    colors: ["#00E396", "#FEB019", "#FF4560"],
    stroke: { curve: "smooth" },
    legend: { position: "top", horizontalAlign: "right" },
    grid: { strokeDashArray: 5 },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-4 text-lg font-bold">Water Quality Trends</h4>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default WaterQualityTrends;

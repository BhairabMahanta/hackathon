import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const WaterQualityTrends: React.FC = () => {
  const [filter, setFilter] = useState("daily");

  const chartOptions: ApexOptions = {
    chart: {
      type: "line", // Explicitly match the string literal type
      height: 350,
      toolbar: {
        tools: {
          download: true,
        },
      },
    },
    xaxis: {
      categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    },
    tooltip: {
      enabled: true,
    },
  };

  const chartSeries = [
    { name: "pH", data: [7.1, 7.2, 7.3, 7.4, 7.5] },
    { name: "Temperature (°C)", data: [23, 24, 22, 25, 24] },
    { name: "Dissolved Oxygen (mg/L)", data: [6.2, 6.5, 6.1, 6.3, 6.0] },
  ];

  const handleExport = () => {
    console.log("Export raw data");
  };

  return (
    <div>
      <div>
        <button onClick={() => setFilter("daily")}>Daily</button>
        <button onClick={() => setFilter("weekly")}>Weekly</button>
        <button onClick={() => setFilter("monthly")}>Monthly</button>
        <button onClick={() => setFilter("yearly")}>Yearly</button>
      </div>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={350}
      />
      <button onClick={handleExport}>Export Raw Data</button>
    </div>
  );
};

export default WaterQualityTrends;

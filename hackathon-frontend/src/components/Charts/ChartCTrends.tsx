import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const CatchTrends: React.FC = () => {
  const series = [
    { name: "Total Catch", type: "bar", data: [100, 200, 150, 180, 220] },
    { name: "Average Catch", type: "line", data: [20, 40, 30, 36, 44] },
  ];

  const options: ApexOptions = {
    chart: {
      type: "line", // Explicitly specify the main type
      stacked: false,
      height: 350,
      toolbar: { show: false },
    },
    xaxis: {
      categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    },
    yaxis: [
      { title: { text: "Total Catch (kg)" } },
      { opposite: true, title: { text: "Average Catch (kg)" } },
    ],
    stroke: { width: [0, 4] },
    plotOptions: { bar: { columnWidth: "50%" } },
    legend: { position: "top", horizontalAlign: "right" },
    colors: ["#0ABEF9", "#5750F1"],
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-4 text-lg font-bold">Catch Trends</h4>
      <ReactApexChart options={options} series={series} height={350} />
    </div>
  );
};

export default CatchTrends;

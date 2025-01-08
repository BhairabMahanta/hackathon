import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // Import the ApexOptions type

const CatchDistribution: React.FC = () => {
  const series = [44, 55, 13, 43, 22]; // Example data for fish types
  const options: ApexOptions = {
    chart: {
      type: "pie", // This is now explicitly typed
      height: 350,
    },
    labels: ["Catla", "Rohu", "Hilsa", "Mrigal", "Other"],
    legend: {
      position: "bottom",
    },
    colors: ["#5750F1", "#0ABEF9", "#FF4560", "#00E396", "#FEB019"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-4 text-lg font-bold">Catch Distribution</h4>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default CatchDistribution;

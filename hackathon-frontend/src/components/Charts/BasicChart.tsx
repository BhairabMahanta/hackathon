"use client";

import ChartThree from "@/components/Charts/ChartThree";
import React from "react";
import ChartFive from "@/components/Charts/ChartFive";
import ChartTwo from "./ChartTwo";
import ChartOne from "./ChartOne";
import WaterQualityTrends from "./ChartWQ";
import CatchDistribution from "./ChartCatch";
import CatchTrends from "./ChartCTrends";

const BasicChart: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <WaterQualityTrends />
        <div className="col-span-12 xl:col-span-5">
          <ChartFive />
          <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5"></div>
          <div className="col-span-12 xl:col-span-5"></div>
          <CatchDistribution />
          <CatchTrends />
        </div>
      </div>
    </>
  );
};

export default BasicChart;

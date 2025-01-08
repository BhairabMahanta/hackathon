"use client";
import React from "react";

import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import MapOne from "../Maps/MapOne";
import DataStatsOne from "@/components/DataStats/DataStatsOne";
import WaterQualityTrends from "../Charts/ChartWQ";
import CatchDistribution from "../Charts/ChartCatch";
import CatchTrends from "../Charts/ChartCTrends";
import UserActivity from "../Charts/ChartUserActivity";
import FisheriesActivity from "../Charts/ChartFActivity";
import DeviceUsage from "../Charts/ChartThree";
import AlertsByCategory from "../Charts/ChartTwo";

const FisherY: React.FC = () => {
  return (
    <>
      <DataStatsOne />

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        {/* Row 1 */}
        <div className="col-span-12 md:col-span-6">
          <CatchDistribution />
        </div>
        <div className="col-span-12 md:col-span-6">
          <WaterQualityTrends />
        </div>

        {/* Row 2 */}
        <div className="col-span-12 md:col-span-6">
          <CatchTrends />
        </div>
        <div className="col-span-12 md:col-span-6">
          <MapOne />
        </div>

        {/* Row 3: Three Smaller Charts */}
        <div className="col-span-12 lg:col-span-4">
          <AlertsByCategory />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <DeviceUsage />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <FisheriesActivity />
        </div>

        {/* Row 4: Larger Charts */}
        <div className="col-span-12 md:col-span-6">
          <UserActivity />
        </div>
        <div className="col-span-12 md:col-span-6">
          <TableOne />
        </div>

        {/* Row 5 */}
        <div className="col-span-12">
          <ChatCard />
        </div>
      </div>
    </>
  );
};

export default FisherY;

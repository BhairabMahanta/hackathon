import BasicChart from "@/components/Charts/BasicChart";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Fisheries Monitoring Basic Chart Page | Trek-Project",
  description: "Basic Analytics",
  // other metadata
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Basic Chart" />
      <BasicChart />
    </DefaultLayout>
  );
};

export default BasicChartPage;

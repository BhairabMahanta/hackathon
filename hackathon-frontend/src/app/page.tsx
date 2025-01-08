import FisherY from "@/components/Dashboard/FisherY";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title: "Fisheries Monitoring Dashboard Page | Trek-Project ",
  description: "Home page for Fisheries Monitoring",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <FisherY />
      </DefaultLayout>
    </>
  );
}

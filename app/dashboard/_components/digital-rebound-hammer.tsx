import React from "react";
import { DashboardChart } from "./dashboard-chart";
import {
  averageCompressiveStrength,
  averageReboundNumber,
  remarks,
} from "../_data/digital-rebound-hammer";
import { DashboardTable } from "./dashboard-table";

export default function DigitalReboundHammer() {
  return (
    <section className="border-b pb-12">
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <h2 className="text-center text-2xl font-bold tracking-tight">
          Digital Rebound Hammer
        </h2>

        <div className="mt-8 text-center">
          <DashboardChart data={averageReboundNumber} />
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            Average rebound number measurements across all buildings using
            Digital Rebound Hammer.
          </p>
        </div>

        <div className="mt-16 text-center">
          <DashboardChart data={averageCompressiveStrength} />
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            Average compressive strength measurements across all buildings using
            Digital Rebound Hammer.
          </p>
        </div>

        <div className="mt-16">
          <DashboardTable data={remarks} />
        </div>
      </div>
    </section>
  );
}

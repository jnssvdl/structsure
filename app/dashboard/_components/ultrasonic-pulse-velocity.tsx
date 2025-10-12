import React from "react";
import { DashboardChart } from "./dashboard-chart";
import { DashboardTable } from "./dashboard-table";
import {
  averageCompressiveStrength,
  averageVelocity,
  remarks,
} from "@/app/dashboard/_data/ultrasonic-pulse-velocity";

export default function UltrasonicPulseVelocity() {
  return (
    <section className="py-12">
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <h2 className="text-center text-2xl font-bold tracking-tight">
          Ultrasonic Pulse Velocity
        </h2>

        <div className="mt-8 text-center">
          <DashboardChart data={averageVelocity} />
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            Average velocity measurements across all buildings using Ultrasonic
            Pulse Velocity.
          </p>
        </div>

        <div className="mt-16 text-center">
          <DashboardChart data={averageCompressiveStrength} />
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            Average compressive strength measurements across all buildings using
            Ultrasonic Pulse Velocity.
          </p>
        </div>

        <div className="mt-16 text-center">
          <DashboardTable data={remarks} />
        </div>
      </div>
    </section>
  );
}

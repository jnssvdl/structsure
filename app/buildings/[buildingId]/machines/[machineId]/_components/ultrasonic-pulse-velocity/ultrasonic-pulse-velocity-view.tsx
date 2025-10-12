import { UltrasonicPulseVelocityType } from "@/types/ultrasonic-pulse-velocity";
import React from "react";
import UltrasonicPulseVelocityTable from "./ultrasonic-pulse-velocity-table";
import VelocityChart from "./velocity-chart";
import { CompressiveStrengthChart } from "./compressive-strength-chart";

export default function UltrasonicPulseVelocityView({
  data,
}: {
  data: UltrasonicPulseVelocityType;
}) {
  return (
    <section className="py-12">
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <div className="bg-card rounded-xl border p-6">
          <ul className="list-disc space-y-2 pl-6">
            {data.analysis.map((point, index) => (
              <li
                key={index}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="p-12">
            <VelocityChart data={data.chart.velocity} />
          </div>
          <div className="p-12">
            <CompressiveStrengthChart data={data.chart.compressiveStrength} />
          </div>
        </div>

        <div className="mt-6">
          <UltrasonicPulseVelocityTable table={data.table} />
        </div>
      </div>
    </section>
  );
}

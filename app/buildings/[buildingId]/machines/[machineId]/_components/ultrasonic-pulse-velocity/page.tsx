import { UltrasonicPulseVelocityType } from "@/types/ultrasonic-pulse-velocity";
import React from "react";
import UltrasonicPulseVelocityTable from "./table";
import VelocityChart from "./charts/velocity";
import { CompressiveStrengthChart } from "./charts/compressive-strength";

export default function UltrasonicPulseVelocityPage({
  data,
}: {
  data: UltrasonicPulseVelocityType;
}) {
  return (
    <React.Fragment>
      <section className="py-16">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <UltrasonicPulseVelocityTable table={data.table} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <div className="bg-card rounded-xl border p-12">
              <VelocityChart data={data.chart.velocity} />
            </div>
            <div className="bg-card rounded-xl border p-12">
              <CompressiveStrengthChart data={data.chart.compressiveStrength} />
            </div>
          </div>
        </div>
      </section>

      {data.analysis && data.analysis.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto w-full px-4 xl:max-w-7xl">
            <ul className="list-disc space-y-2">
              {data.analysis.map((point, index) => (
                <li key={index} className="text-sm leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

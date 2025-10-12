import { UltrasonicPulseVelocityType } from "@/types/ultrasonic-pulse-velocity";
import React from "react";
import UltrasonicPulseVelocityTable from "./table";
// import { VelocityChart } from "@/components/velocity-chart";
import VelocityChart from "./charts/velocity";
import { CompressiveStrengthChart } from "./charts/compressive-strength";

export default function UltrasonicPulseVelocityPage({
  data,
}: {
  data: UltrasonicPulseVelocityType;
}) {
  return (
    <React.Fragment>
      <section>
        <div className="overflow-x-auto">
          <UltrasonicPulseVelocityTable table={data.table} />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <VelocityChart data={data.chart.velocity} />
          <CompressiveStrengthChart data={data.chart.compressiveStrength} />
        </div>
      </section>

      {data.analysis && data.analysis.length > 0 && (
        <section>
          <div className="space-y-3">
            {data.analysis.map((point, index) => (
              <li key={index} className="text-sm leading-relaxed">
                {point}
              </li>
            ))}
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

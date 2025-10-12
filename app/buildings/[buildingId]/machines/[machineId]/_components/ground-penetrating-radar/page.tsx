import { GroundPenetratingRadarType } from "@/types/ground-penetrating-radar";
import GroundPenetratingRadarTable from "./table";

export default function GroundPenetratingRadarPage({
  data,
}: {
  data: GroundPenetratingRadarType;
}) {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <GroundPenetratingRadarTable table={data.table} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong>Slab Rebar Spacing:</strong>{" "}
              {data.analysis.slabRebarSpacing}
            </p>
            <p>
              <strong>Wall Rebar Spacing:</strong>{" "}
              {data.analysis.wallRebarSpacing}
            </p>
            <p>
              <strong>Signal Clarity:</strong>{" "}
              {data.analysis.signalClaritySpacing}
            </p>
            <p>
              <strong>Rebar Condition:</strong> {data.analysis.rebarCondition}
            </p>
            <p>
              <strong>Detected Issues:</strong> {data.analysis.issuesDetected}
            </p>
            <p>
              <strong>Recommendation:</strong> {data.analysis.recommendation}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

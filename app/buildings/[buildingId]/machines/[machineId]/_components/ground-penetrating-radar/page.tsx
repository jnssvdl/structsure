import GPRTable from "@/components/gpr-table";
import { GroundPenetratingRadarType } from "@/types/ground-penetrating-radar";

export default function GroundPenetratingRadarPage({
  data,
}: {
  data: GroundPenetratingRadarType;
}) {
  return (
    <>
      <section>
        <div className="overflow-x-auto">
          <GPRTable GPRRecords={data.table} />
        </div>
      </section>

      <section>
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
      </section>
    </>
  );
}

import { GroundPenetratingRadarType } from "@/types/ground-penetrating-radar";
import GroundPenetratingRadarTable from "./ground-penetrating-radar-table";
import InfoCard from "@/components/info-card";

export default function GroundPenetratingRadarView({
  data,
}: {
  data: GroundPenetratingRadarType;
}) {
  return (
    <section className="py-8">
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <InfoCard
            title="Slab Rebar Spacing"
            content={data.analysis.slabRebarSpacing}
          />

          <InfoCard
            title="Wall Rebar Spacing"
            content={data.analysis.wallRebarSpacing}
          />

          <InfoCard
            title="Signal Clarity"
            content={data.analysis.signalClaritySpacing}
          />

          <InfoCard
            title="Rebar Condition"
            content={data.analysis.rebarCondition}
          />

          <InfoCard
            title="Detected Issues"
            content={data.analysis.issuesDetected}
          />

          <InfoCard
            title="Recommendation"
            content={data.analysis.recommendation}
          />
        </div>
        <div className="mt-6">
          <GroundPenetratingRadarTable table={data.table} />
        </div>
      </div>
    </section>
  );
}

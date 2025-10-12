import { GroundPenetratingRadarType } from "@/types/ground-penetrating-radar";
import GroundPenetratingRadarTable from "./ground-penetrating-radar-table";

export default function GroundPenetratingRadarView({
  data,
}: {
  data: GroundPenetratingRadarType;
}) {
  return (
    <section className="py-8">
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card rounded-xl border p-4">
            <h3 className="mb-2 text-sm font-medium">Slab Rebar Spacing</h3>
            <p className="text-muted-foreground text-sm">
              {data.analysis.slabRebarSpacing}
            </p>
          </div>

          <div className="bg-card rounded-xl border p-4">
            <h3 className="mb-2 text-sm font-medium">Wall Rebar Spacing</h3>
            <p className="text-muted-foreground text-sm">
              {data.analysis.wallRebarSpacing}
            </p>
          </div>

          <div className="bg-card rounded-xl border p-4">
            <h3 className="mb-2 text-sm font-medium">Signal Clarity</h3>
            <p className="text-muted-foreground text-sm">
              {data.analysis.signalClaritySpacing}
            </p>
          </div>

          <div className="bg-card rounded-xl border p-4">
            <h3 className="mb-2 text-sm font-medium">Rebar Condition</h3>
            <p className="text-muted-foreground text-sm">
              {data.analysis.rebarCondition}
            </p>
          </div>

          <div className="bg-card rounded-xl border p-4">
            <h3 className="mb-2 text-sm font-medium">Detected Issues</h3>
            <p className="text-muted-foreground text-sm">
              {data.analysis.issuesDetected}
            </p>
          </div>

          <div className="bg-card rounded-xl border p-4">
            <h3 className="mb-2 text-sm font-medium">Recommendation</h3>
            <p className="text-muted-foreground text-sm">
              {data.analysis.recommendation}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <GroundPenetratingRadarTable table={data.table} />
        </div>
      </div>
    </section>
  );
}

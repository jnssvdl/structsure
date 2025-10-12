import { DigitalReboundHammerType } from "@/types/digital-rebound-hammer";
import DigitalReboundHammerTable from "./table";
import { DigitalReboundHammerChart } from "./chart";

export default function DigitalReboundHammerPage({
  data,
}: {
  data: DigitalReboundHammerType;
}) {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="bg-card h-full rounded-xl border p-4">
              <h3 className="mb-2 text-sm font-medium">Compressive Strength</h3>
              <p className="text-muted-foreground text-sm">
                {data.analysis.compressiveStrength}
              </p>
            </div>

            <div className="bg-card h-full rounded-xl border p-4">
              <h3 className="mb-2 text-sm font-medium">Rebound Value</h3>
              <p className="text-muted-foreground text-sm">
                {data.analysis.reboundValue}
              </p>
            </div>

            <div className="bg-card h-full rounded-xl border p-4">
              <h3 className="mb-2 text-sm font-medium">Concrete Condition</h3>
              <p className="text-muted-foreground text-sm">
                {data.analysis.conreteCondition}
              </p>
            </div>

            <div className="bg-card h-full rounded-xl border p-4">
              <h3 className="mb-2 text-sm font-medium">Recommendations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {data.analysis.recommendation}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <DigitalReboundHammerChart data={data.chart} />
          </div>

          <div className="mt-6">
            <DigitalReboundHammerTable table={data.table} />
          </div>
        </div>
      </section>
    </>
  );
}

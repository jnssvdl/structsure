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
      <section className="py-16">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <DigitalReboundHammerTable table={data.table} />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <div className="bg-card rounded-xl border px-32 py-12">
            <DigitalReboundHammerChart data={data.chart} />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="h-full">
              <h4>Compressive Strength</h4>
              <p>{data.analysis.compressiveStrength}</p>
            </div>

            <div className="h-full">
              <h4>Rebound Value</h4>
              <span>{data.analysis.reboundValue}</span>
            </div>

            <div className="h-full">
              <h4>Concrete Condition</h4>
              <p>{data.analysis.conreteCondition}</p>
            </div>

            <div className="h-full lg:col-span-2">
              <h4 className="flex items-center gap-2 text-sm font-semibold">
                Recommendations
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {data.analysis.recommendation}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

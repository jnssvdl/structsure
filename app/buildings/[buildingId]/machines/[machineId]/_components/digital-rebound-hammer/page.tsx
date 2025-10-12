import { DRHChart } from "@/components/drh-chart";
import DRHTable from "@/components/drh-table";

import { DigitalReboundHammerType } from "@/types/digital-rebound-hammer";

export default function DigitalReboundHammerPage({
  data,
}: {
  data: DigitalReboundHammerType;
}) {
  return (
    <>
      <section>
        <div className="overflow-x-auto">
          <DRHTable DRHRecords={data.table} />
        </div>
      </section>

      <section>
        <DRHChart data={data.chart} />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="h-full">
          <div>
            <div>Compressive Strength</div>
          </div>
          <div>{data.analysis.compressiveStrength}</div>
        </div>

        <div className="h-full">
          <div>
            <div>Rebound Value</div>
          </div>
          <div>{data.analysis.reboundValue}</div>
        </div>

        <div className="h-full">
          <div>
            <div>Concrete Condition</div>
          </div>
          <div>{data.analysis.conreteCondition}</div>
        </div>

        <div className="h-full lg:col-span-2">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              Recommendations
            </div>
          </div>
          <div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {data.analysis.recommendation}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

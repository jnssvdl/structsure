import { DigitalReboundHammerType } from "@/types/digital-rebound-hammer";
import DigitalReboundHammerTable from "./digital-rebound-hammer-table";
import { DigitalReboundHammerChart } from "./digital-rebound-hammer-chart";
import InfoCard from "@/components/info-card";

export default function DigitalReboundHammerView({
  data,
}: {
  data: DigitalReboundHammerType;
}) {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-4">
            <InfoCard
              title="Compressive Strength"
              content={data.analysis.compressiveStrength}
            />

            <InfoCard
              title="Rebound Value"
              content={data.analysis.reboundValue}
            />

            <InfoCard
              title="Concrete Condition"
              content={data.analysis.conreteCondition}
            />

            <InfoCard
              title="Recommendations"
              content={data.analysis.recommendation}
            />
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

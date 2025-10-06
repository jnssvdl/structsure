import { CompressiveStrengthChart } from "@/components/compression-strength-chart";
import UPVTable from "@/components/upv-table";
import { VelocityChart } from "@/components/velocity-chart";
import type {
  Building,
  Machine,
  UPVData,
} from "@/types/ultrasonic-pulse-velocity";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Gauge } from "lucide-react";

type UPVPageProps = {
  building: Building;
  machine: Machine;
  data: UPVData;
};

export default function UPVPage({ building, machine, data }: UPVPageProps) {
  return (
    <div className="bg-background min-h-screen">
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Building2 className="text-primary h-8 w-8" />
            <div>
              <h1 className="text-primary text-4xl font-extrabold tracking-tight">
                {building.name}
              </h1>
              <p className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                <Gauge className="h-4 w-4" />
                Structural testing results using{" "}
                <span className="font-semibold">{machine.name}</span>
              </p>
            </div>
          </div>
        </div>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>UPV Measurements</CardTitle>
              <CardDescription>
                Detailed ultrasonic pulse velocity readings and calculations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <UPVTable UPVRecords={data.table} />
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Velocity Distribution</CardTitle>
                <CardDescription>
                  Ultrasonic pulse velocity measurements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <VelocityChart data={data.chart.velocity} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compressive Strength Analysis</CardTitle>
                <CardDescription>
                  Estimated compressive strength based on UPV readings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CompressiveStrengthChart
                  data={data.chart.compressiveStrength}
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {data.analysis && data.analysis.length > 0 && (
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Analysis based on UPV test results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.analysis.map((point, index) => (
                    <li key={index} className="text-sm leading-relaxed">
                      {point}
                    </li>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        )}
      </main>
    </div>
  );
}

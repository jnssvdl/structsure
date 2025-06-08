import { DRHChart } from "@/components/drh-chart";
import DRHTable from "@/components/drh-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Hammer, AlertTriangle } from "lucide-react";

import type { Building, DRHData, Machine } from "@/types";

type DRHPageProps = {
  building: Building;
  machine: Machine;
  data: DRHData;
};

export default function DRHPage({ building, machine, data }: DRHPageProps) {
  return (
    <div className="bg-background min-h-screen">
      <main className="mx-auto max-w-7xl space-y-12 px-4 py-12 sm:px-6 lg:px-12">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Building2 className="text-primary h-8 w-8" />
            <div>
              <h1 className="text-primary text-4xl font-extrabold tracking-tight">
                {building.name}
              </h1>
              <p className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                <Hammer className="h-4 w-4" />
                Structural testing results using{" "}
                <span className="font-semibold">{machine.name}</span>
              </p>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Compressive Strength</CardTitle>
            </CardHeader>
            <CardContent>{data.analysis.compressiveStrength}</CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle>Rebound Value</CardTitle>
            </CardHeader>
            <CardContent>{data.analysis.reboundValue}</CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle>Concrete Condition</CardTitle>
            </CardHeader>
            <CardContent>{data.analysis.conreteCondition}</CardContent>
          </Card>

          <Card className="h-full lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {data.analysis.recommendation}
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                Test Results Visualization
              </CardTitle>
              <CardDescription>
                Graphical representation of structural testing data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DRHChart data={data.chart} />
            </CardContent>
          </Card>
        </section>

        {/* Data Table Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                Detailed Test Records
              </CardTitle>
              <CardDescription>
                Complete dataset from structural testing measurements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <DRHTable DRHRecords={data.table} />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

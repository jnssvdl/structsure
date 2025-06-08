import { DRHChart } from "@/components/drh-chart";
import DRHTable from "@/components/drh-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building2, Hammer, AlertTriangle } from "lucide-react";

import type { Building, DRHData, Machine } from "@/types";

type DRHPageProps = {
  building: Building;
  machine: Machine;
  data: DRHData;
};

export default function DRHPage({ building, machine, data }: DRHPageProps) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                {building.name}
              </h1>
              <div className="text-muted-foreground mt-1 flex items-center gap-2 text-sm">
                <Hammer className="h-4 w-4" />
                Structural testing results using {machine.name}
              </div>
            </div>
          </div>
          <Separator />
        </div>

        {/* Analysis + Recommendation Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {/* Compressive Strength */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Compressive Strength</CardTitle>
            </CardHeader>
            <CardContent>{data.analysis.compressiveStrength}</CardContent>
          </Card>

          {/* Rebound Value */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Rebound Value</CardTitle>
            </CardHeader>
            <CardContent>{data.analysis.reboundValue}</CardContent>
          </Card>

          {/* Concrete Condition */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Concrete Condition</CardTitle>
            </CardHeader>
            <CardContent>{data.analysis.conreteCondition}</CardContent>
          </Card>

          {/* Recommendation */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {data.analysis.recommendation}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Data Visualization Section */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="xl:col-span-2">
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
          </div>
        </div>

        {/* Data Table Section */}
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
      </div>
    </div>
  );
}

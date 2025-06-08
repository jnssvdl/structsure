import { CompressiveStrengthChart } from "@/components/compression-strength-chart";
import UPVTable from "@/components/upv-table";
import { VelocityChart } from "@/components/velocity-chart";
import type { Building, Machine, UPVData } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building2, BarChart3 } from "lucide-react";

type UPVPageProps = {
  building: Building;
  machine: Machine;
  data: UPVData;
};

export default function UPVPage({ building, machine, data }: UPVPageProps) {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl space-y-6 p-4 md:p-6">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                {machine.name} Test Results
              </h1>
              <div className="mt-1 flex flex-col text-sm">
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Building: {building.name}
                </span>
              </div>
            </div>
          </div>
          <Separator />
        </div>

        {/* Data Table Section */}
        <div className="space-y-4">
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
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
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
        </div>

        {/* Analysis Section */}
        {data.analysis && data.analysis.length > 0 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analysis based on UPV test results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.analysis.map((point, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

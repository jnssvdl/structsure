import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2, Radar } from "lucide-react";
import type { Building, GPRData, Machine } from "@/types";
import GPRTable from "@/components/gpr-table";

type GPRPageProps = {
  building: Building;
  machine: Machine;
  data: GPRData;
};

export default function GPRPage({ building, machine, data }: GPRPageProps) {
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
                <Radar className="h-4 w-4" />
                Structural testing results using{" "}
                <span className="font-semibold">{machine.name}</span>
              </p>
            </div>
          </div>
        </div>

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
                <GPRTable GPRRecords={data.table} />
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Structural Analysis Summary</CardTitle>
              <CardDescription>
                Insights based on GPR scan interpretation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  <strong>Slab Rebar Spacing:</strong>{" "}
                  {data.analysis.slabRebarSpacing}
                </p>
                <p>
                  <strong>Wall Rebar Spacing:</strong>{" "}
                  {data.analysis.wallRebarSpacing}
                </p>
                <p>
                  <strong>Signal Clarity:</strong>{" "}
                  {data.analysis.signalClaritySpacing}
                </p>
                <p>
                  <strong>Rebar Condition:</strong>{" "}
                  {data.analysis.rebarCondition}
                </p>
                <p>
                  <strong>Detected Issues:</strong>{" "}
                  {data.analysis.issuesDetected}
                </p>
                <p>
                  <strong>Recommendation:</strong>{" "}
                  {data.analysis.recommendation}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

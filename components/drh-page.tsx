import { Building, DRH, Machine } from "@/types";
import React from "react";
import DRHTable from "./drh-table";

type DRHPageProps = {
  machine: Machine;
  building: Building;
  drhData: DRH[];
};

export default function DRHPage({ machine, building, drhData }: DRHPageProps) {
  return (
    <main className="mx-auto max-w-6xl flex-1 overflow-auto p-6">
      <div className="mx-auto space-y-6">
        <div>
          <h2 className="mb-2 text-2xl font-bold tracking-tight">
            {building.name}
          </h2>
          <p className="text-muted-foreground">
            Structural testing results using {machine.name}
          </p>
        </div>
        <div className="overflow-x-auto">
          <DRHTable drhData={drhData} />
        </div>
      </div>
    </main>
  );
}

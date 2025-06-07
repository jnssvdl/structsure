import { Building, Machine, UPV } from "@/types";
import React from "react";
import UPVTable from "./upv-table";

type UPVPageProps = {
  machine: Machine;
  building: Building;
  upvData: UPV[];
};

export default function UPVPage({ machine, building, upvData }: UPVPageProps) {
  return (
    <main className="flex-1 overflow-auto p-6">
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
          <UPVTable upvData={upvData} />
        </div>
      </div>
    </main>
  );
}

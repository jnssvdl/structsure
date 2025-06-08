import { buildings, DATA, machines } from "@/data";
import { notFound } from "next/navigation";
import DRHPage from "./_components/drh-page";
import { DRHData, UPVData } from "@/types";
import UPVPage from "./_components/upv-page";

export const dynamicParams = false;

export async function generateStaticParams() {
  const params = [];

  for (const machine of machines) {
    for (const building of buildings) {
      params.push({
        machineId: machine.id,
        buildingId: building.id,
      });
    }
  }
  return params;
}

export default async function DataPage({
  params,
}: {
  params: Promise<{ machineId: string; buildingId: string }>;
}) {
  const { machineId, buildingId } = await params;
  const machine = machines.find((m) => m.id === machineId);
  const building = buildings.find((b) => b.id === buildingId);

  if (!machine || !building) return notFound();

  const data = DATA.find(
    (d) => d.machineId === machineId && d.buildingId === buildingId,
  );

  if (machineId === "digital-rebound-hammer") {
    return (
      <DRHPage building={building} machine={machine} data={data as DRHData} />
    );
  }

  if (machineId === "ultrasonic-pulse-velocity") {
    return (
      <UPVPage building={building} machine={machine} data={data as UPVData} />
    );
  }

  if (machineId === "ground-penetrating-radar") {
    return notFound();
  }

  return notFound();
}

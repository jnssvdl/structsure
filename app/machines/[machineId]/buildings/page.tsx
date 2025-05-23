import { buildings, testData } from "@/data";
import { notFound } from "next/navigation";
import { machines } from "@/data";
import BuildingCard from "@/components/building-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return machines.map((machine) => ({
    machineId: machine.id,
  }));
}

export default async function MachineBuildingsPage({
  params,
}: {
  params: Promise<{ machineId: string }>;
}) {
  const { machineId } = await params;
  const machine = machines.find((m) => m.id === machineId);
  if (!machine) return notFound();

  const testedBuildingIds = new Set(
    testData
      .filter((test) => test.machineId === machineId)
      .map((test) => test.buildingId),
  );

  const testedBuildings = buildings.filter((building) =>
    testedBuildingIds.has(building.id),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-5">
        <Button asChild variant="ghost">
          <Link href={`/machines`}>
            <ArrowLeft className="h-4 w-4" />
            Back to Machine
          </Link>
        </Button>
      </div>

      <div className="mb-10 text-center">
        <h1 className="text-primary text-3xl font-bold tracking-tight">
          Buildings Tested by {machine.name}
        </h1>
        <p className="text-muted-foreground mx-auto mt-2 max-w-2xl">
          {machine.description}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testedBuildings.map((building) => (
          <BuildingCard
            key={building.id}
            building={building}
            machineId={machineId}
          />
        ))}
      </div>
    </div>
  );
}

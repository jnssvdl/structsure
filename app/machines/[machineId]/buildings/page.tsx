import { buildings, testData } from "@/data";
import { notFound } from "next/navigation";
import { machines } from "@/data";
import BuildingCard from "@/components/building-card";

export default async function MachineBuildingsPage({
  params,
}: {
  params: Promise<{ machineId: string }>;
}) {
  const { machineId } = await params;
  const machine = machines.find((m) => m.id === machineId);
  if (!machine) return notFound();

  // Get buildings tested by this machine
  const testedBuildingIds = new Set(
    testData
      .filter((test) => test.machineId === machineId)
      .map((test) => test.buildingId),
  );

  const testedBuildings = buildings.filter((building) =>
    testedBuildingIds.has(building.id),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mt-4 text-3xl font-bold tracking-tight">
          Buildings Tested by {machine.name}
        </h1>
        <p className="mt-2 text-gray-600">{machine.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

import { buildings, testData } from "@/data";
import { notFound } from "next/navigation";
import { machines } from "@/data";
import BuildingCard from "@/components/building-card";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
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
    <div className="min-h-screen">
      <header className="bg-background sticky top-0 z-40 w-full border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-primary text-xl font-bold">
            StructSure
          </Link>
          <ModeToggle />
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-primary mb-2 text-3xl font-bold tracking-tight">
            {machine.name}
          </h1>
          <h2 className="text-muted-foreground text-lg">Buildings:</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testedBuildings.map((building) => (
            <Link
              key={building.id}
              href={`/machines/${machine.id}/buildings/${building.id}`}
            >
              <BuildingCard building={building} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

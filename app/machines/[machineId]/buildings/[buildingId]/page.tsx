import { buildings, testData, machines } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DRH } from "@/types";
import DRHTable from "@/components/drh-table";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function BuildingTestDataPage({
  params,
}: {
  params: Promise<{ machineId: string; buildingId: string }>;
}) {
  const { machineId, buildingId } = await params;
  const machine = machines.find((m) => m.id === machineId);
  const building = buildings.find((b) => b.id === buildingId);

  if (!machine || !building) return notFound();

  const test = testData.find(
    (t) => t.machineId === machineId && t.buildingId === buildingId,
  );

  if (!test) return notFound();

  // Get all buildings tested by this machine
  const testedBuildings = Array.from(
    new Set(
      testData
        .filter((t) => t.machineId === machineId)
        .map((t) => t.buildingId),
    ),
  ).map((id) => buildings.find((b) => b.id === id)!);

  const renderTestResults = () => {
    switch (machineId) {
      case "drh":
        const drhData = test.data as DRH[];
        return <DRHTable drhData={drhData} />;
      default:
        return <p>No test results available for this machine type.</p>;
    }
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="hidden w-64 border-r p-4 md:block">
        <h2 className="mb-4 text-lg font-semibold">Tested Buildings</h2>
        <ScrollArea className="h-[calc(100vh-150px)]">
          <div className="space-y-2">
            {testedBuildings.map((b) => (
              <Link
                key={b.id}
                href={`/machines/${machineId}/buildings/${b.id}`}
              >
                <Button
                  variant={b.id === buildingId ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  {b.name}
                </Button>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">
              {building.name}
            </h1>
          </div>

          {renderTestResults()}
        </div>
      </div>
    </div>
  );
}

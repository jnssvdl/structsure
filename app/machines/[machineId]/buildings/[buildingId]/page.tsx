import { buildings, testData, machines } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { DRH } from "@/types";
import DRHTable from "@/components/drh-table";

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
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href={`/machines/${machineId}/buildings`}
          className="text-blue-600 hover:underline"
        >
          &larr; Back to buildings
        </Link>
      </div>

      <h1 className="mb-2 text-3xl font-bold">
        {building.name} - {machine.name} Test Results
      </h1>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">Test Results</h2>
        {renderTestResults()}
      </div>
    </div>
  );
}

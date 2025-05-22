import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { buildings, testData } from "@/data";
import { notFound } from "next/navigation";
import { machines } from "@/data";

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
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">
        Buildings Tested by {machine.name}
      </h1>
      <p className="mb-8 text-gray-600">{machine.description}</p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Year Built
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {testedBuildings.map((building) => (
              <tr key={building.id}>
                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                  {building.name}
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  {building.location}
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                  <Link
                    href={`/machines/${machineId}/buildings/${building.id}`}
                    className={buttonVariants({ variant: "link", size: "sm" })}
                  >
                    View Test Data
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

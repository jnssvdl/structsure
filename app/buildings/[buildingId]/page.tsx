import { Header } from "@/components/header";
import MachineCard from "@/components/machine-card";
import { machines } from "@/data";
import { notFound } from "next/navigation";
import { buildings } from "@/data";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default async function MachinesPage({
  params,
}: {
  params: Promise<{ buildingId: string }>;
}) {
  const { buildingId } = await params;

  const building = buildings.find((b) => b.id === buildingId);

  if (!building) return notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="mx-auto max-w-7xl flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-12 grid gap-12 lg:grid-cols-2">
            <div className="relative w-full overflow-hidden rounded-t-lg">
              <Image
                src={building.imageUrl}
                alt={building.name}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
              />
            </div>

            <div className="space-y-6">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <h1 className="text-3xl font-bold">{building.name}</h1>
                </div>
                <Badge variant={"outline"}>{building.function}</Badge>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-1 font-semibold">Capacity</h3>
                  <p className="text-2xl font-bold">
                    {building.capacity.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-500">people</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-1 font-semibold">Floors</h3>
                  <p className="text-2xl font-bold">
                    {building.numberOfFloors}
                  </p>
                  <p className="text-sm text-gray-500">levels</p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-1 font-semibold">Building Age</h3>
                  <p className="text-2xl font-bold">{building.buildingAge}</p>
                  <p className="text-sm text-gray-500">years</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="mb-8 text-2xl font-bold">Tested Machines</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine) => (
            <MachineCard
              key={machine.id}
              machine={machine}
              building={building}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

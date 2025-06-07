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

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Building Header Section */}
        <section className="mb-12">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border lg:w-1/2">
              <Image
                src={building.imageUrl}
                alt={building.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col justify-center lg:w-1/2">
              <div className="mb-6 space-y-3">
                <h1 className="text-3xl font-bold tracking-tight">
                  {building.name}
                </h1>
                <Badge variant="secondary" className="w-fit">
                  {building.function}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Capacity",
                    value: building.capacity.toLocaleString(),
                    unit: "people",
                  },
                  {
                    label: "Floors",
                    value: building.numberOfFloors,
                    unit: "levels",
                  },
                  { label: "Age", value: building.buildingAge, unit: "years" },
                ].map((stat, index) => (
                  <div key={index} className="rounded-lg border p-4">
                    <h3 className="text-muted-foreground text-sm font-medium">
                      {stat.label}
                    </h3>
                    <p className="text-2xl font-semibold">{stat.value}</p>
                    <p className="text-muted-foreground text-xs">{stat.unit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Machines Section */}
        <section className="space-y-6">
          <div className="border-b pb-6">
            <h2 className="text-2xl font-semibold tracking-tight">
              Tested Machines
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {machines.map((machine) => (
              <MachineCard
                key={machine.id}
                machine={machine}
                building={building}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

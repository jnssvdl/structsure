import MachineCard from "@/components/machine-card";

import { notFound } from "next/navigation";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BUILDINGS } from "@/data/buildings";
import { MACHINES } from "@/data/machines";

export const dynamicParams = false;

export async function generateStaticParams() {
  return BUILDINGS.map((building) => ({
    buildingId: building.id,
  }));
}

export default async function MachinesPage({
  params,
}: {
  params: Promise<{ buildingId: string }>;
}) {
  const { buildingId } = await params;
  const building = BUILDINGS.find((b) => b.id === buildingId);

  if (!building) return notFound();

  return (
    <main className="px-4 py-16 lg:px-12">
      {/* building */}
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border lg:w-1/2">
          <Image
            src={building.image || ""}
            alt={building.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-center space-y-6 lg:w-1/2">
          <div>
            <h1 className="text-primary text-3xl font-bold tracking-tight">
              {building.name}
            </h1>
            <div className="flex flex-wrap gap-2">
              {building.function.map((f, index) => (
                <Badge variant="secondary" key={index}>
                  {f}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Capacity",
                value: building.capacity.toLocaleString(),
                unit: "people",
              },
              {
                title: "Floors",
                value: building.floors,
                unit: "levels",
              },
              {
                title: "Age",
                value: building.age || "N/A",
                unit: "years",
              },
            ].map(({ title, value, unit }) => (
              <Card key={title} className="p-4">
                <CardHeader className="px-0 pt-0 pb-1">
                  <CardTitle className="text-muted-foreground text-sm font-medium">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="text-muted-foreground text-xs">{unit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* machine */}
        <div>
          <h2 className="text-primary mb-8 text-center text-3xl font-semibold tracking-tight">
            Tested Machines
          </h2>

          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            id="machines"
          >
            {MACHINES.map((machine) => (
              <MachineCard
                key={machine.id}
                machine={machine}
                building={building}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

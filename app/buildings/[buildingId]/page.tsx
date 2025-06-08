import { Header } from "@/components/header";
import MachineCard from "@/components/machine-card";
import { machines } from "@/data";
import { notFound } from "next/navigation";
import { buildings } from "@/data";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
                <p className="text-sm font-medium">{building.function}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card className="p-2">
                  <CardHeader className="px-2 pt-2 pb-0">
                    <CardTitle className="text-muted-foreground text-sm font-medium">
                      Capacity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-2 pb-2">
                    <p className="text-lg font-semibold">
                      {building.capacity.toLocaleString()}
                    </p>
                    <p className="text-muted-foreground text-xs">people</p>
                  </CardContent>
                </Card>

                <Card className="p-2">
                  <CardHeader className="px-2 pt-2 pb-0">
                    <CardTitle className="text-muted-foreground text-sm font-medium">
                      Floors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-2 pb-2">
                    <p className="text-lg font-semibold">
                      {building.numberOfFloors}
                    </p>
                    <p className="text-muted-foreground text-xs">levels</p>
                  </CardContent>
                </Card>

                <Card className="p-2">
                  <CardHeader className="px-2 pt-2 pb-0">
                    <CardTitle className="text-muted-foreground text-sm font-medium">
                      Age
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-2 pb-2">
                    <p className="text-lg font-semibold">
                      {building.buildingAge === 0
                        ? "N/A"
                        : building.buildingAge}
                    </p>
                    <p className="text-muted-foreground text-xs">years</p>
                  </CardContent>
                </Card>
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

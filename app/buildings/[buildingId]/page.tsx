import { Header } from "@/components/header";
import MachineCard from "@/components/machine-card";
import { machines } from "@/data";
import { notFound } from "next/navigation";
import { buildings } from "@/data";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const dynamicParams = false;

export async function generateStaticParams() {
  return buildings.map((building) => ({
    buildingId: building.id,
  }));
}

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

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
        {/* Building Header Section */}
        <section className="mb-12 flex flex-col gap-8 lg:flex-row">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border lg:w-1/2">
            <Image
              src={building.imageUrl}
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
              <Badge variant="secondary" className="mt-2">
                {building.function}
              </Badge>
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
                  value: building.numberOfFloors,
                  unit: "levels",
                },
                {
                  title: "Age",
                  value: building.buildingAge || "N/A",
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
        </section>

        <section>
          <div className="mx-auto max-w-7xl">
            <h2 className="text-primary mb-8 text-center text-3xl font-semibold tracking-tight">
              Tested Machines
            </h2>

            <div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              id="machines"
            >
              {machines.map((machine) => (
                <MachineCard
                  key={machine.id}
                  machine={machine}
                  building={building}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

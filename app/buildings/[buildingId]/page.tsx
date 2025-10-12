import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BUILDINGS } from "@/data/buildings";
import { MACHINES } from "@/data/machines";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const dynamicParams = false;

export async function generateStaticParams() {
  return BUILDINGS.map((building) => ({
    buildingId: building.id,
  }));
}

export default async function BuildingPage({
  params,
}: {
  params: Promise<{ buildingId: string }>;
}) {
  const { buildingId } = await params;
  const building = BUILDINGS.find((b) => b.id === buildingId);

  if (!building) return notFound();

  return (
    <section className="py-16">
      {/* building */}
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image
              src={building.image || "/placholder.png"}
              alt={building.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* details */}
          <div>
            <h1 className="mb-2 text-3xl font-bold tracking-tight">
              {building.name}
            </h1>

            <div className="mb-6 flex flex-wrap gap-2">
              {building.function.map((f, i) => (
                <Badge key={i} variant="secondary">
                  {f}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
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
                <div
                  key={title}
                  className="bg-card flex flex-col rounded-xl border p-4 shadow-2xs"
                >
                  <span className="text-muted-foreground text-sm font-medium">
                    {title}
                  </span>
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="text-muted-foreground text-xs">{unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MACHINES.map((machine) => {
            const Icon = machine.icon;
            return (
              <Link
                key={machine.id}
                href={`/buildings/${buildingId}/machines/${machine.id}`}
                className="group hover:bg-card flex flex-col items-center rounded-xl border p-8 text-center transition-all hover:shadow-2xs"
              >
                {Icon && (
                  <div className="bg-border mb-4 rounded-full p-4">
                    <Icon className="h-10 w-10" />
                  </div>
                )}

                <div className="mb-2 font-semibold">
                  {machine.name.slice(0, machine.name.indexOf("("))}
                </div>

                <div className="flex items-center text-sm font-medium">
                  View{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

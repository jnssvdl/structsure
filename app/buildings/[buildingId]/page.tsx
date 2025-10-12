import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BUILDINGS } from "@/data/buildings";
import { MACHINES } from "@/data/machines";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
                  className="bg-card flex flex-col rounded-xl border p-4"
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
              <div
                key={machine.id}
                className="hover:bg-card rounded-xl border p-8 text-center"
              >
                <div className="flex flex-col items-center">
                  {Icon && (
                    <div className="bg-border mb-4 rounded-full p-4">
                      <Icon className="h-10 w-10" />
                    </div>
                  )}
                  <div className="mb-2 font-semibold">
                    {machine.name.slice(0, machine.name.indexOf("("))}
                  </div>

                  <Button variant={"link"} className="group" asChild>
                    <Link
                      href={`/buildings/${buildingId}/machines/${machine.id}`}
                    >
                      See data{" "}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

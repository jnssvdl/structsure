import { Header } from "@/components/header";
import MachineCard from "@/components/machine-card";
import { machines } from "@/data";
import { notFound } from "next/navigation";
import { buildings } from "@/data";

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
      <main className="flex-1">
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

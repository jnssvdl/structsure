import { BUILDINGS } from "@/data/buildings";
import { MACHINES } from "@/data/machines";
import { notFound } from "next/navigation";

export default async function MachineLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ machineId: string; buildingId: string }>;
}>) {
  const { machineId, buildingId } = await params;

  const machine = MACHINES.find((m) => m.id === machineId);
  const building = BUILDINGS.find((b) => b.id === buildingId);

  if (!machine || !building) return notFound();

  return (
    <>
      {/* <div className="flex flex-col items-center py-16 text-center">
        <h1 className="text-primary text-4xl font-bold tracking-tight">
          {building.name}
        </h1>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          {machine.name}
        </p>
      </div> */}
      {children}
    </>
  );
}

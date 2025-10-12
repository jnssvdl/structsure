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

  const MachineIcon = machine.icon;

  return (
    <>
      <div className="flex flex-col items-center pt-12 pb-4 text-center">
        <div className="flex items-center gap-2">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight">
            {building.name}
          </h1>
        </div>

        <p className="text-muted-foreground mt-2 flex items-center gap-2 leading-relaxed">
          <MachineIcon className="h-5 w-5 shrink-0" />
          {machine.name} Analysis
        </p>
      </div>
      {children}
    </>
  );
}

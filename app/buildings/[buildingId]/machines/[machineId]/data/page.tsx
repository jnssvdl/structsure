import { buildings, DATA, machines } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import DRHTable from "@/components/drh-table";
import { DRHData, UPVData } from "@/types";
import UPVTable from "@/components/upv-table";
import { VelocityChart } from "@/components/velocity-chart";
import { CompressiveStrengthChart } from "@/components/compression-strength-chart";
import { DRHChart } from "@/components/drh-chart";

export const dynamicParams = false;

export async function generateStaticParams() {
  const params = [];

  for (const machine of machines) {
    for (const building of buildings) {
      params.push({
        machineId: machine.id,
        buildingId: building.id,
      });
    }
  }
  return params;
}

export default async function DataPage({
  params,
}: {
  params: Promise<{ machineId: string; buildingId: string }>;
}) {
  const { machineId, buildingId } = await params;
  const machine = machines.find((m) => m.id === machineId);
  const building = buildings.find((b) => b.id === buildingId);

  if (!machine || !building) return notFound();

  const data = DATA.find(
    (d) => d.machineId === machineId && d.buildingId === buildingId,
  );

  if (!data) return notFound();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="p-2">
              <h1 className="text-primary text-lg font-bold">{machine.name}</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Buildings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {buildings.map((b) => (
                    <SidebarMenuItem key={b.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={b.id === buildingId}
                        className="h-full"
                      >
                        <Link href={`/buildings/${b.id}/`}>{b.name}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="mx-auto flex w-full justify-between">
              <Link
                href="/"
                className="text-primary flex items-center gap-2 text-xl font-bold"
              >
                <Image
                  src="/images/logo.png"
                  alt="StructSure Logo"
                  width={32}
                  height={32}
                  priority
                />
                StructSure
              </Link>
              <ModeToggle />
            </div>
          </header>

          {machineId === "digital-rebound-hammer" ? (
            <div className="mx-auto max-w-6xl flex-1 overflow-auto p-6">
              <div className="mx-auto space-y-6">
                <div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight">
                    {building.name}
                  </h2>
                  <p className="text-muted-foreground">
                    Structural testing results using {machine.name}
                  </p>
                </div>
                <DRHPage data={data as DRHData} />
              </div>
            </div>
          ) : machineId === "ultrasonic-pulse-velocity" ? (
            <div className="flex-1 overflow-auto p-6">
              <div className="mx-auto space-y-6">
                <div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight">
                    {building.name}
                  </h2>
                  <p className="text-muted-foreground">
                    Structural testing results using {machine.name}
                  </p>
                </div>
                <UPVPage data={data as UPVData} />
              </div>
            </div>
          ) : machineId === "ground-penetrating-radar" ? null : null}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

function UPVPage({ data }: { data: UPVData }) {
  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="mx-auto space-y-6">
        <div className="overflow-x-auto">
          <UPVTable UPVRecords={data.table} />
        </div>
        <VelocityChart data={data.chart.velocity} />
        <CompressiveStrengthChart data={data.chart.compressiveStrength} />
      </div>
    </div>
  );
}

function DRHPage({ data }: { data: DRHData }) {
  return (
    <>
      <div className="overflow-x-auto">
        <DRHTable DRHRecords={data.table} />
      </div>
      <DRHChart data={data.chart} />
    </>
  );
}

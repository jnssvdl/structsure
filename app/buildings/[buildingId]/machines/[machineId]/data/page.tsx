import { buildings, tests, machines } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { DRH, UPV } from "@/types";
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
import DRHPage from "@/components/drh-page";
import UPVPage from "@/components/upv-page";

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

  const test = tests.find(
    (t) => t.machineId === machineId && t.buildingId === buildingId,
  );

  if (!test) return notFound();

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
                        <Link
                          href={`/buildings/${b.id}/machines/${machineId}/data`}
                        >
                          {b.name}
                        </Link>
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
            <DRHPage
              building={building}
              machine={machine}
              drhData={test.data as DRH[]}
            />
          ) : machineId === "ultrasonic-pulse-velocity" ? (
            <UPVPage
              building={building}
              machine={machine}
              upvData={test.data as UPV[]}
            />
          ) : machineId === "ground-penetrating-radar" ? null : null}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

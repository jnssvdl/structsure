import { ModeToggle } from "@/components/mode-toggle";
import Searchbar from "@/components/searchbar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { buildings } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default async function DataLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ buildingId: string }>;
}>) {
  const { buildingId } = await params;
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader></SidebarHeader>
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

              <div className="hidden items-center gap-6 md:flex">
                <Searchbar />
                <ModeToggle />
              </div>
            </div>
          </header>

          {children}
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

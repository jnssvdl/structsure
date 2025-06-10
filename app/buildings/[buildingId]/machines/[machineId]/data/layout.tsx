import type React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import Searchbar from "@/components/searchbar";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
    <TooltipProvider>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar className="border-r">
            <SidebarContent className="gap-0">
              <SidebarGroup className="px-0">
                <SidebarGroupLabel className="text-muted-foreground px-4 py-2 text-xs font-medium">
                  All Buildings
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu className="gap-1 px-2">
                    {buildings.map((building) => (
                      <SidebarMenuItem key={building.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <SidebarMenuButton
                              asChild
                              isActive={building.id === buildingId}
                              className="h-10 justify-start px-3"
                            >
                              <Link href={`/buildings/${building.id}/`}>
                                <span className="flex-1 truncate text-left">
                                  {building.name}
                                </span>
                              </Link>
                            </SidebarMenuButton>
                          </TooltipTrigger>
                          <TooltipContent
                            side="right"
                            className="text-background max-w-[200px] break-words"
                          >
                            {building.name}
                          </TooltipContent>
                        </Tooltip>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          <SidebarInset className="flex flex-1 flex-col">
            <header className="bg-background sticky top-0 z-40 flex w-full border-b">
              <div className="flex items-center">
                <SidebarTrigger className="ml-4" />
              </div>
              <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
                <div className="flex flex-1 justify-between">
                  <Link
                    href="/"
                    className="text-primary hover:text-primary/80 flex items-center gap-2 text-xl font-bold transition-colors"
                  >
                    <Image
                      src="/images/logo.png"
                      alt="StructSure Logo"
                      width={32}
                      height={32}
                      priority
                      className="rounded-md"
                    />
                    <span className="hidden sm:inline">StructSure</span>
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden md:block">
                    <Searchbar />
                  </div>
                  <ModeToggle />
                </div>
              </div>
            </header>

            <div className="flex-1 overflow-auto">{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
}

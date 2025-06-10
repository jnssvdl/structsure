import Link from "next/link";
import { buildings } from "@/data";
import BuildingCard from "@/components/building-card";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function BuildingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Header Section */}
        <section className="px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-center space-y-6 text-center">
            <h1 className="text-primary text-4xl font-bold tracking-tight">
              Building Directory
            </h1>

            <p className="text-muted-foreground max-w-3xl">
              Explore our comprehensive database of tested buildings. Each entry
              includes detailed specifications, testing history, and machine
              analysis data.
            </p>

            <Button asChild>
              <Link href="/buildings/overall">Overall building data</Link>
            </Button>
          </div>
        </section>

        {/* Grid Section */}
        <section className="px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {buildings.map((building) => (
                <Link
                  key={building.id}
                  href={`/buildings/${building.id}`}
                  className="transition-transform hover:scale-105 hover:opacity-90"
                >
                  <BuildingCard building={building} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

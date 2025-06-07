import Link from "next/link";
import { buildings } from "@/data";
import BuildingCard from "@/components/building-card";
import { Header } from "@/components/header";

export default function BuildingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-primary text-4xl font-bold tracking-tight">
              Building Directory
            </h1>
            <p className="text-muted-foreground">
              Explore our comprehensive database of tested buildings. Each entry
              includes detailed specifications, testing history, and machine
              analysis data.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {buildings.map((building) => (
            <Link
              key={building.id}
              href={`/buildings/${building.id}`}
              className="transition-all hover:scale-[1.02] hover:opacity-90"
            >
              <BuildingCard building={building} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

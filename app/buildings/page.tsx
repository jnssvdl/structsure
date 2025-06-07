import Link from "next/link";
import { buildings } from "@/data";
import BuildingCard from "@/components/building-card";
import { Header } from "@/components/header";

export default function BuildingsPage() {
  return (
    <div className="">
      <Header />
      <main className="mx-auto max-w-6xl">
        <section className="mb-2 border-b">
          <div className="px-4 py-12 text-center">
            <h1>Building Directory</h1>
            <p>
              Explore our comprehensive database of tested buildings. Each entry
              includes detailed specifications, testing history, and machine
              analysis data.
            </p>
          </div>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {buildings.map((building) => (
            <Link key={building.id} href={`/buildings/${building.id}`}>
              <BuildingCard building={building} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

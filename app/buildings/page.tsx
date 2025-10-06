import Link from "next/link";
import BuildingCard from "@/components/building-card";
import { BUILDINGS } from "@/data/buildings";

export default function BuildingsPage() {
  return (
    <main className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-primary text-4xl font-bold tracking-tight">
            Building Directory
          </h1>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            Choose a building to see its specifications, assessment records, and
            analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDINGS.map((building) => (
            <Link key={building.id} href={`/buildings/${building.id}`}>
              <BuildingCard building={building} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

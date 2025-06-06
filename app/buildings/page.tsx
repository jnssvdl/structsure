import Link from "next/link";
import { buildings } from "@/data";
import BuildingCard from "@/components/building-card";
import { Header } from "@/components/header";

export default function BuildingsPage() {
  return (
    <div className="">
      <Header />
      <main className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {buildings.map((building) => (
            <Link key={building.id} href={`/buildings/${building.id}/machines`}>
              <BuildingCard building={building} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

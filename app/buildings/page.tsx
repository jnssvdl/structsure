import Link from "next/link";
import BuildingCard from "@/components/building-card";
import { BUILDINGS } from "@/data/buildings";

export default async function BuildingsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const searchQuery = (await searchParams).q || "";

  const filteredBuildings = BUILDINGS.filter((building) =>
    building.name.toLowerCase().includes(searchQuery),
  );

  return (
    <section className="py-16">
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Building Directory
          </h1>
          <p className="text-muted-foreground mt-2 leading-relaxed">
            Choose a building to see its specifications, assessment records, and
            analysis.
          </p>
        </div>

        {filteredBuildings.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBuildings.map((building) => (
              <Link key={building.id} href={`/buildings/${building.id}`}>
                <BuildingCard building={building} />
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground mt-2 text-center leading-relaxed">
            No buildings matched your search &quot;{searchQuery}&quot;. Try
            adjusting your search terms or browse all buildings.
          </p>
        )}
      </div>
    </section>
  );
}

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { machines } from "@/data";

export default function MachinesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">Available Machines</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {machines.map((machine) => (
          <div
            key={machine.id}
            className="rounded-lg border p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold">{machine.name}</h2>
            <p className="mb-4 text-gray-600">{machine.description}</p>
            <Link
              href={`/machines/${machine.id}/buildings`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              View Buildings
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

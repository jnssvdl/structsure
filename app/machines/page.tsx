import { machines } from "@/data";
import { Header } from "@/components/header";
import MachineCard from "@/components/machine-card";

export default function MachinesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container flex-1 px-4 py-8">
        <div className="mb-10 space-y-1">
          <h1 className="text-3xl font-bold tracking-tight">StructSure</h1>
          <p className="">
            Select a machine to explore details or view buildings
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {machines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </main>
    </div>
  );
}

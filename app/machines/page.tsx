import { Header } from "@/components/header";
import MachineCard from "@/components/machine-card";
import { machines } from "@/data";

export default function MachinesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 space-y-1 text-center">
              <h1 className="text-primary text-3xl font-bold tracking-tight">
                Machines
              </h1>
              <p>Select a machine to explore details or view buildings</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {machines.map((machine) => (
                <MachineCard key={machine.id} machine={machine} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

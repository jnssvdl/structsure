import { machines } from "@/data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MachineDetailsPage({
  params,
}: {
  params: Promise<{ machineId: string }>;
}) {
  const { machineId } = await params;
  const machine = machines.find((m) => m.id === machineId);

  if (!machine) return notFound();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={machine.imageUrl}
            alt={machine.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">{machine.name}</h1>
          <p className="text-lg text-gray-600">{machine.description}</p>

          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">Primary Uses</h2>
              <p className="text-gray-600">{machine.uses}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">Key Components</h2>
              <ul className="list-disc space-y-2 pl-6 text-gray-600">
                {machine.parts.map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

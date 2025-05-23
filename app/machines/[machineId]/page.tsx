import { machines } from "@/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function MachineDetailsPage({
  params,
}: {
  params: Promise<{ machineId: string }>;
}) {
  const { machineId } = await params;
  const machine = machines.find((m) => m.id === machineId);

  if (!machine) return notFound();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-background sticky top-0 z-10 w-full border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-primary text-xl font-bold">
            StructSure
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        <section className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-start">
            {/* Image */}
            <div className="border-border flex-shrink-0 rounded-xl border p-2 shadow-sm">
              <div className="relative h-80 w-80 overflow-hidden rounded-lg">
                <Image
                  src={machine.imageUrl}
                  alt={machine.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-6">
              <div>
                <h1 className="text-primary text-3xl font-bold tracking-tight">
                  {machine.name}
                </h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  {machine.description}
                </p>
              </div>

              <div>
                <h2 className="text-primary text-xl font-semibold">
                  Primary Uses
                </h2>
                <p className="text-muted-foreground">{machine.uses}</p>
              </div>

              <div>
                <h2 className="text-primary text-xl font-semibold">
                  Key Components
                </h2>
                <ul className="text-muted-foreground list-disc space-y-2 pl-5">
                  {machine.parts.map((part, index) => (
                    <li key={index}>{part}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="border-t pt-10">
          <p className="text-muted-foreground">
            Additional technical details or documentation links can be added
            here.
          </p>
        </div> */}
        </section>
      </main>
    </div>
  );
}

import Image from "next/image";
import { notFound } from "next/navigation";
import { machines } from "@/data";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default async function MachineDetailsPage({
  params,
}: {
  params: Promise<{ machineId: string }>;
}) {
  const { machineId } = await params;

  const machine = machines.find((m) => m.id === machineId);

  if (!machine) return notFound();

  return (
    <div className="min-h-screen">
      <header className="bg-background sticky top-0 z-40 w-full border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-primary text-xl font-bold">
            StructSure
          </Link>
          <ModeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-6 py-6">
        <div className="text-center">
          <h1 className="text-primary text-3xl font-bold tracking-tight">
            {machine.name}
          </h1>
        </div>

        <div className="flex items-center justify-center rounded-xl border">
          <Image
            src={machine.imageUrl}
            width={300}
            height={300}
            alt={machine.name}
            className="object-cover"
          />
        </div>

        <div className="space-y-8">
          <div className="border-primary border-l-2 pl-6">
            <div className="leading-relaxed">
              <p>{machine.fullText}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

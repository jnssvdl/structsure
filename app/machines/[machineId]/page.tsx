import { machines } from "@/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;

export async function generateStaticParams() {
  return machines.map((machine) => ({
    machineId: machine.id,
  }));
}

export default async function MachineDetailsPage({
  params,
}: {
  params: Promise<{ machineId: string }>;
}) {
  const { machineId } = await params;
  const machine = machines.find((m) => m.id === machineId);

  if (!machine) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-5">
        <Button asChild variant="ghost">
          <Link href="/machines">
            <ArrowLeft className="h-4 w-4" />
            Back to Machines
          </Link>
        </Button>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div className="border-border overflow-hidden rounded-lg border">
          <Image
            src={machine.imageUrl}
            alt={machine.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-8">
          <h1 className="text-primary text-3xl font-bold tracking-tight">
            {machine.name}
          </h1>
          <p className="text-muted-foreground text-lg">{machine.description}</p>

          <div className="space-y-6">
            <section>
              <h2 className="text-primary text-xl font-semibold">
                Primary Uses
              </h2>
              <p className="text-muted-foreground">{machine.uses}</p>
            </section>

            <section>
              <h2 className="text-primary text-xl font-semibold">
                Key Components
              </h2>
              <ul className="text-muted-foreground list-disc space-y-2 pl-6">
                {machine.parts.map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

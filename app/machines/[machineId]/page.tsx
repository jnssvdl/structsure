import Image from "next/image";
import { notFound } from "next/navigation";
import { MACHINES } from "@/data/machines";
import { Separator } from "@/components/ui/separator";

export async function generateStaticParams() {
  return MACHINES.map((machine) => ({
    machineId: machine.id,
  }));
}

export default async function MachinePage({
  params,
}: {
  params: Promise<{ machineId: string }>;
}) {
  const { machineId } = await params;

  const machine = MACHINES.find((m) => m.id === machineId);

  if (!machine) return notFound();

  const MachineIcon = machine.icon;

  return (
    <section className="py-16">
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="bg-card flex-shrink-0 rounded-xl border p-4">
            <div className="bg-border/50 relative mb-4 aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src={machine.image}
                alt={machine.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <Separator />

            <div className="mt-4 flex items-center gap-2">
              <MachineIcon className="text-muted-foreground h-6 w-6" />
              <h1 className="font-semibold">{machine.name}</h1>
            </div>
          </div>

          {/* Description */}
          <article className="prose dark:prose-invert">
            <p className="text-muted-foreground text-justify leading-relaxed">
              {machine.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

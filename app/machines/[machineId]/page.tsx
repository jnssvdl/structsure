import Image from "next/image";
import { notFound } from "next/navigation";
import { MACHINES } from "@/data/machines";

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

  return (
    <section className="py-16">
      <div className="container mx-auto w-full px-4 xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={machine.image}
              alt={machine.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <article className="prose dark:prose-invert mx-auto">
            <h1 className="mb-4 text-3xl font-bold tracking-tight">
              {machine.name}
            </h1>
            <p className="text-muted-foreground text-justify leading-relaxed whitespace-pre-line">
              {machine.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

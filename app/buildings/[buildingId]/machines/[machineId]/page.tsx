import Image from "next/image";
import { notFound } from "next/navigation";
import { machines } from "@/data";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Searchbar from "@/components/searchbar";

export const dynamicParams = false;

export async function generateStaticParams() {
  return machines.map((machine) => ({
    machineId: machine.id,
  }));
}

export default async function MachinePage({
  params,
}: {
  params: Promise<{ machineId: string }>;
}) {
  const { machineId } = await params;

  const machine = machines.find((m) => m.id === machineId);

  if (!machine) return notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background sticky top-0 z-40 w-full border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-primary flex items-center gap-2 text-xl font-bold"
          >
            <Image
              src="/images/logo.png"
              alt="StructSure Logo"
              width={32}
              height={32}
              priority
            />
            StructSure
          </Link>

          <div className="flex items-center gap-4">
            <Searchbar />
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Searchbar */}
        <div className="border-t px-4 py-3 sm:hidden">
          <Searchbar />
        </div>
      </header>

      <main className="mx-auto max-w-7xl flex-1 px-4 py-12 sm:px-6 lg:px-12">
        {/* Title */}
        <section className="mb-12 text-center">
          <h1 className="text-primary text-4xl font-bold tracking-tight">
            {machine.name}
          </h1>
        </section>

        <section className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <div className="lg:w-2/5">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border">
              <Image
                src={machine.imageUrl}
                alt={machine.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <article className="prose dark:prose-invert sm:prose-lg mx-auto max-w-none lg:w-3/5">
            <div className="text-muted-foreground rounded-lg p-6 leading-relaxed whitespace-pre-line">
              {machine.fullText}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

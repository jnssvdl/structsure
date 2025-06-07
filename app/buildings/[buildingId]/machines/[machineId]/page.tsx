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
    <div className="min-h-screen">
      <header className="bg-background sticky top-0 z-40 w-full border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            <div className="hidden sm:block">
              <Searchbar />
            </div>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Searchbar - shows below on small screens */}
        <div className="border-t px-4 py-3 sm:hidden">
          <Searchbar />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">{machine.name}</h1>
        </div>

        {/* Responsive Content Layout */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Image Column */}
          <div className="lg:w-[40%]">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border">
              <Image
                src={machine.imageUrl}
                fill
                alt={machine.name}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:w-[60%]">
            <article className="prose prose-sm dark:prose-invert sm:prose-base">
              <div className="text-muted-foreground rounded-lg p-6 leading-relaxed whitespace-pre-line">
                {machine.fullText}
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

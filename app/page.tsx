import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Building Test Data Viewer</h1>
      <p className="mb-8 text-lg">
        View test results from various machines for different buildings around
        the world.
      </p>
      <div className="flex gap-4">
        <Link
          href="/machines"
          className={buttonVariants({ variant: "default" })}
        >
          View Machines
        </Link>
      </div>
    </main>
  );
}

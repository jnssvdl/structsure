import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="text-muted-foreground mt-12 border-t py-6 text-sm">
      <div className="container mx-auto flex flex-col items-center gap-2 px-4 text-center xl:max-w-7xl">
        <p>&copy; 2025 StructSure — Cavite State University</p>

        <div className="flex flex-wrap justify-center gap-4 font-semibold">
          <Link href="/dashboard" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/buildings" className="hover:underline">
            Buildings
          </Link>
          <Link href="/#machines" className="hover:underline">
            Machines
          </Link>
          <Link href="/#about" className="hover:underline">
            About
          </Link>
          <Link href="/#team" className="hover:underline">
            Team
          </Link>
        </div>

        <Separator />

        <div className="text-xs">
          <p>
            Website developed by{" "}
            <Link
              href="mailto:joeniesusvidal01@email.com"
              className="font-semibold hover:underline"
            >
              Joeniesus
            </Link>{" "}
            as a commissioned project.
          </p>
          <p>
            All data displayed on this website were gathered by and credited to
            the{" "}
            <Link href="/#team" className="font-semibold hover:underline">
              team of researchers
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

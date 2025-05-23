import Link from "next/link";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-primary text-xl font-bold">
          StructSure
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {["Home", "About", "Team", "Contact"].map((label) => (
            <Link
              key={label}
              href={`/#${label.toLowerCase()}`}
              className="hover:text-primary font-medium transition-colors"
            >
              {label}
            </Link>
          ))}

          <div className="hidden items-center gap-2 md:flex">
            <div className="relative w-64">
              <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-10 text-sm"
              />
            </div>

            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

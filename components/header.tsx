import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import SearchForm from "./search-form";
import { Button } from "./ui/button";
// import { Menu } from "lucide-react";

export function Header() {
  return (
    // <header className="sticky top-0 z-50 w-full border-b bg-transparent backdrop-blur">
    <header className="bg-background sticky top-0 z-50 border-b">
      <nav className="container mx-auto flex h-16 items-center justify-between p-4 xl:max-w-7xl">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="StructSure Logo"
            width={32}
            height={32}
            priority
          />
        </Link>

        <ul className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/buildings">Buildings</Link>
          </Button>

          {/* <Button variant="ghost" asChild>
            <Link href="/machines">Machines</Link>
          </Button> */}

          <Button variant="ghost" asChild>
            <Link href="/summary">Summary</Link>
          </Button>

          {["Machines", "About", "Team"].map((label) => (
            <Button key={label} variant="ghost" asChild>
              <Link href={`/#${label.toLowerCase()}`}>{label}</Link>
            </Button>
          ))}

          <SearchForm />

          <ModeToggle />

          {/* <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </Button> */}
        </ul>
      </nav>
    </header>
  );
}

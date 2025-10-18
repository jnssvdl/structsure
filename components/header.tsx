import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import SearchForm from "./search-form";
import { Button } from "./ui/button";
import MobileNav from "./mobile-nav";
// import { Menu } from "lucide-react";

export function Header() {
  return (
    // <header className="sticky top-0 z-50 w-full border-b bg-transparent backdrop-blur">
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 p-4 xl:max-w-7xl">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="StructSure Logo"
            width={32}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>

          <Button variant="ghost" asChild>
            <Link href="/buildings">Buildings</Link>
          </Button>

          {["Machines", "About", "Team"].map((label) => (
            <Button key={label} variant="ghost" asChild>
              <Link href={`/#${label.toLowerCase()}`}>{label}</Link>
            </Button>
          ))}

          <SearchForm />
          <ModeToggle />
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}

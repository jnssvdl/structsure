import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import Searchbar from "./searchbar";

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo + Brand */}
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

        <nav className="hidden items-center gap-6 md:flex">
          {["Home", "About", "Team"].map((label) => (
            <Link
              key={label}
              href={`/#${label.toLowerCase()}`}
              className="hover:text-primary font-medium transition-colors"
            >
              {label}
            </Link>
          ))}

          <Searchbar />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold">StructSure</span>
          </Link>

          <nav className="hidden items-center space-x-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
            <ModeToggle />
          </nav>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search machines or data..."
            className="pl-9"
          />
        </div>
      </div>
    </header>
  );
}

"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import SearchForm from "./search-form";
import { ModeToggle } from "./mode-toggle";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Buildings", href: "/buildings" },
    { label: "Machines", href: "/#machines" },
    { label: "About", href: "/#about" },
    { label: "Team", href: "/#team" },
  ];

  return (
    <div className="flex gap-4 md:hidden">
      <ModeToggle />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open Menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>
              Navigate the site to explore features, content, and useful
              information.
            </SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-4 px-4">
            <SearchForm />
            {links.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

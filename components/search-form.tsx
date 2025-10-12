"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    const params = new URLSearchParams({ q: searchQuery });

    router.push(`/buildings?${params.toString()}`);
  };

  return (
    <form className="relative w-full md:max-w-64" onSubmit={handleSearch}>
      <Input
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pr-10"
      />
      <Button
        size="icon"
        variant="outline"
        type="submit"
        className="absolute top-0 right-0 rounded-l-none"
      >
        <Search />
      </Button>
    </form>
  );
}

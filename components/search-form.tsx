"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <form className="relative">
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

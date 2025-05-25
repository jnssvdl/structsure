"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { buildings, machines } from "@/data";
import Link from "next/link";

interface SearchResult {
  buildingId: string;
  buildingName: string;
  machineId: string;
  machineName: string;
  displayText: string;
}

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Generate all possible building-machine combinations and filter them
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const allCombinations: SearchResult[] = [];

    buildings.forEach((building) => {
      machines.forEach((machine) => {
        allCombinations.push({
          buildingId: building.id,
          buildingName: building.name,
          machineId: machine.id,
          machineName: machine.name,
          displayText: `${building.name} - ${machine.name}`,
        });
      });
    });

    // Filter combinations based on search query
    return allCombinations.filter(
      (combination) =>
        combination.buildingName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        combination.machineName
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  const showResults =
    searchQuery.trim().length > 0 && searchResults.length > 0 && isFocused;

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 150)}
          className="pl-10"
        />
      </div>

      {showResults && (
        <Card className="absolute top-full right-0 left-0 z-50 mt-1 max-h-64 overflow-hidden p-0">
          <CardContent className="p-0">
            <div className="max-h-64 overflow-y-auto">
              {searchResults.map((result) => (
                <Link
                  href={`/machines/${result.machineId}/buildings/${result.buildingId}`}
                  key={`${result.buildingId}-${result.machineId}`}
                >
                  <div className="hover:bg-muted cursor-pointer border-b p-3 transition-colors last:border-b-0">
                    <p className="text-sm">{result.displayText}</p>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

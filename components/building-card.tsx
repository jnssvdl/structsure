import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building } from "@/types";
import { Button } from "./ui/button";
import Link from "next/link";

export default function BuildingCard({
  building,
  machineId,
}: {
  building: Building;
  machineId: string;
}) {
  return (
    <Card key={building.id} className="transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle>{building.name}</CardTitle>
        <CardDescription>{building.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Year Built:</span>
            <span>{building.yearBuilt || "N/A"}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button asChild>
          <Link href={`/machines/${machineId}/buildings/${building.id}`}>
            View Test Data
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

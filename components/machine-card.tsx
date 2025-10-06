import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Machine } from "@/types/machine";
import { Building } from "@/types/building";

export default function MachineCard({
  machine,
  building,
}: {
  machine: Machine;
  building: Building;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={machine.image}
            alt={machine.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-2">
          <CardTitle>{machine.name}</CardTitle>
        </div>
      </CardContent>

      <CardFooter>
        <div className="flex w-full flex-col gap-2">
          <Button asChild variant="outline">
            <Link href={`/buildings/${building.id}/machines/${machine.id}`}>
              Machine Details
            </Link>
          </Button>
          <Button asChild>
            <Link
              href={`/buildings/${building.id}/machines/${machine.id}/data`}
            >
              View test data
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

import React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Machine } from "@/types";
import { Button } from "./ui/button";
import Link from "next/link";

export default function MachineCard({ machine }: { machine: Machine }) {
  return (
    <Card>
      <CardHeader>
        <div className="relative h-48 w-full">
          <Image
            src={machine.imageUrl}
            alt={machine.name}
            fill
            className="rounded-xl object-cover"
            placeholder="empty"
          />
        </div>
        <div className="space-y-2">
          <CardTitle>{machine.name}</CardTitle>
          <CardDescription className="text-muted-foreground line-clamp-2">
            {machine.description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardFooter className="flex flex-col gap-2">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/machines/${machine.id}`}>Machine Details</Link>
        </Button>
        <Button asChild className="w-full">
          <Link href={`/machines/${machine.id}/buildings`}>View Buildings</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

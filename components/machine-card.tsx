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
    <Card
      key={machine.id}
      className="overflow-hidden transition-all hover:shadow-md"
    >
      <div className="relative h-48 w-full">
        <Image
          src={machine.imageUrl || "/images/machine-placeholder.jpg"}
          alt={machine.name}
          fill
          className="object-cover"
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{machine.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {machine.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col space-y-3">
        <Button asChild className="w-full" variant="outline">
          <Link href={`/machines/${machine.id}`}>Machine Details</Link>
        </Button>
        <Button asChild className="w-full">
          <Link href={`/machines/${machine.id}/buildings`}>View Buildings</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

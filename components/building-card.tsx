import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building } from "@/types";
import {
  Building as BuildingIcon,
  Calendar,
  Layers,
  Users,
} from "lucide-react";
import Image from "next/image";
// import Image from "next/image";

export default function BuildingCard({ building }: { building: Building }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="relative h-48">
          <Image
            src={building.imageUrl || "/images/logo.jpg"}
            alt={building.name}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <CardTitle className="text-primary">{building.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex items-center gap-2">
            <Users className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">Capacity:</span>
            <span className="font-medium">
              {building.capacity.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">No. of Floors:</span>
            <span className="font-medium">{building.numberOfFloors}</span>
          </div>
          <div className="flex items-center gap-2">
            <BuildingIcon className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">Function:</span>
            <span className="font-medium">{building.function}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground">Building age:</span>
            <span className="font-medium">
              {building.buildingAge && `${building.buildingAge} years`}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

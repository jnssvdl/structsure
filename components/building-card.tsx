import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building } from "@/types";
import {
  Building as BuildingIcon,
  Calendar,
  Layers,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

export default function BuildingCard({ building }: { building: Building }) {
  return (
    <Card className="h-full cursor-pointer pt-0 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg">
      {building.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={building.imageUrl}
            alt={building.name}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      )}

      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="line-clamp-2">{building.name}</CardTitle>
          <BuildingIcon className="text-muted-foreground ml-2 h-4 w-4 flex-shrink-0" />
        </div>
        <CardDescription>
          <Badge variant="secondary">{building.function}</Badge>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex items-center gap-2">
          <Users className="text-muted-foreground h-4 w-4" />
          <span className="text-muted-foreground">Capacity:</span>
          <span>{building.capacity.toLocaleString()}</span>
        </div>

        <div className="flex items-center gap-2">
          <Layers className="text-muted-foreground h-4 w-4" />
          <span className="text-muted-foreground">Floors:</span>
          <span>{building.numberOfFloors}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="text-muted-foreground h-4 w-4" />
          <span className="text-muted-foreground">Age:</span>
          <span>
            {building.buildingAge
              ? `${building.buildingAge} 
                ${building.buildingAge === 1 ? "year" : "years"}`
              : "N/A"}
          </span>
        </div>
      </CardContent>

      {/* <CardFooter>
        <Button className="w-full">View testing data</Button>
      </CardFooter> */}
    </Card>
  );
}

import React from "react";
import { Building as BuildingIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Building } from "@/types/building";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function BuildingCard({ building }: { building: Building }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="hover:bg-card flex h-full flex-col rounded-xl border p-4">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
            <Image
              src={building.image || "/placeholder.png"}
              alt={building.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <BuildingIcon className="text-muted-foreground h-4 w-4 shrink-0" />
              <h3 className="text-foreground truncate text-lg leading-tight font-semibold">
                {building.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {building.function.map((f, index) => (
                <Badge variant="secondary" key={index}>
                  {f}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{building.name}</p>
      </TooltipContent>
    </Tooltip>
  );
}

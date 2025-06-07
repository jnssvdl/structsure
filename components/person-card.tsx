import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Person } from "@/types";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-primary text-xl">{person.name}</CardTitle>
        <div className="text-muted-foreground space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Born {person.birthDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{person.residence}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            <span className="text-sm font-medium">Education</span>
          </div>

          <div className="space-y-3">
            {person.education.map((e, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-medium">{e.level}</span>
                  <Badge variant={"secondary"}>{e.year}</Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {e.school}
                </p>
                {i < person.education.length - 1 && (
                  <Separator className="mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Person } from "@/types/person";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{person.name}</CardTitle>

        <div className="text-muted-foreground space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>Born {person.birthdate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{person.residence}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-4 flex items-center gap-2">
          <GraduationCap className="h-4 w-4 shrink-0" />
          <span className="font-medium">Education</span>
        </div>

        <div className="space-y-4">
          {person.education.map((e, i) => (
            <div key={i} className="space-y-1 text-sm">
              <div className="flex items-start justify-between">
                <span className="font-medium">{e.level}</span>
                <Badge variant="secondary">{e.year}</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {e.school}
              </p>
              {i < person.education.length - 1 && (
                <Separator className="mt-2" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

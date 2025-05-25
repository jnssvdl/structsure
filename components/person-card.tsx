import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Person } from "@/types";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

export default function PersonCard({ person }: { person: Person }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">{person.name}</CardTitle>
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
            {person.education.map((edu, eduIndex) => (
              <div key={eduIndex} className="space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-primary text-sm font-medium">
                    {edu.level}
                  </span>
                  <span className="text-muted-foreground bg-muted rounded px-2 py-1 text-xs">
                    {edu.year}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {edu.school}
                </p>
                {eduIndex < person.education.length - 1 && (
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

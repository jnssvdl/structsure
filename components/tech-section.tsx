import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function TechSection() {
  const technologies = [
    {
      title: "DRH Technology",
      description:
        "Digital Rebound Hammer for non-destructive testing of concrete strength and quality.",
    },
    {
      title: "UPV Analysis",
      description:
        "Ultrasonic Pulse Velocity testing for evaluating concrete integrity and detecting flaws.",
    },
    {
      title: "GPR Scanning",
      description:
        "Ground Penetrating Radar for non-invasive imaging of structural components.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-primary mb-12 text-center text-4xl font-bold">
          Our Technologies
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, idx) => (
            <Card
              key={idx}
              className="h-full transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle>{tech.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {tech.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

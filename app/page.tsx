import Link from "next/link";
import { Button } from "@/components/ui/button";
import PersonCard from "@/components/person-card";
import { persons } from "@/data/persons";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/magicui/aurora-text";
import { MACHINES } from "@/data/machines";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <React.Fragment>
      <section className="relative border-b py-32">
        <GridPattern
          width={32}
          height={32}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "absolute inset-0",
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />

        <div className="relative container mx-auto flex flex-col items-center px-4 text-center xl:max-w-7xl">
          <div className="bg-background rounded-full border px-4 py-1 text-sm font-bold">
            <AuroraText colors={["#f7e968", "#aadb4f", "#8ecb4b", "#98db58"]}>
              StructSure
            </AuroraText>
          </div>
          <h1 className="mt-6 text-4xl leading-tight font-bold xl:text-5xl">
            A directory of structural health assessments at Cavite State
            University
          </h1>
          <p className="text-muted-foreground mt-6 max-w-4xl xl:text-lg">
            Explore data collected through Ultrasonic Pulse Velocity, Digital
            Rebound Hammer, and Ground Penetrating Radar of university
            buildings.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="group">
              <Link href="/buildings" passHref>
                Explore
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="border-b py-24">
        <div className="container mx-auto w-full px-4 xl:max-w-7xl">
          <h2 className="mb-10 text-center text-4xl leading-tight font-bold">
            About Us
          </h2>

          <div className="text-muted-foreground mx-auto max-w-2xl space-y-6 text-justify">
            <p>
              <strong>
                <AuroraText
                  colors={["#f7e968", "#aadb4f", "#8ecb4b", "#98db58"]}
                >
                  StructSure
                </AuroraText>
              </strong>{" "}
              is a thesis research project developed at Cavite State University
              to advance structural health monitoring techniques for academic
              and professional applications.
            </p>
            <p>
              The project was part of the Civil Engineering graduate program,
              focusing on integrating Ultrasonic Pulse Velocity, Digital Rebound
              Hammer, and Ground Penetrating Radar into a comprehensive
              assessment system for campus infrastructure.
            </p>
            <p>
              Guided by the College of Engineering and Information Technology,
              this research supports CvSU&apos;s mission to pioneer innovative
              engineering solutions for real-world infrastructure challenges.
            </p>
          </div>
        </div>
      </section>

      <section id="machines" className="border-b py-24">
        <div className="container mx-auto flex flex-col items-center px-4 text-center xl:max-w-7xl">
          <h2 className="mb-2 text-4xl leading-tight font-bold">
            Machines Used
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Each device plays a vital role in assessing the strength, integrity,
            and subsurface structure of university buildings.
          </p>

          <div className="grid w-full gap-6 lg:grid-cols-3">
            {MACHINES.map((machine) => {
              const Icon = machine.icon;
              return (
                <Link
                  key={machine.id}
                  href={`/machines/${machine.id}`}
                  className="group hover:bg-card flex flex-col items-center rounded-xl border p-8 text-center transition-all hover:shadow-2xs"
                >
                  {Icon && (
                    <div className="bg-border mb-4 rounded-full p-4">
                      <Icon className="h-10 w-10" />
                    </div>
                  )}
                  <div className="mb-2 font-semibold">
                    {machine.name.slice(0, machine.name.indexOf("("))}
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    Learn more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="team" className="py-24">
        <div className="container mx-auto flex w-full flex-col items-center px-4 xl:max-w-7xl">
          <h2 className="mb-10 text-center text-4xl leading-tight font-bold">
            Our Team
          </h2>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {persons.map((member) => (
              <PersonCard key={member.name} person={member} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

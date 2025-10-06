import Link from "next/link";
import { Button } from "@/components/ui/button";
import PersonCard from "@/components/person-card";
import { persons } from "@/data/persons";
import { ArrowRight } from "lucide-react";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function Home() {
  return (
    <main>
      <section className="relative border-b px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32">
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

        <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
          <div className="bg-background rounded-full border px-4 py-1 text-sm font-semibold">
            <AuroraText colors={["#f7e968", "#aadb4f", "#8ecb4b", "#98db58"]}>
              StructSure
            </AuroraText>
          </div>
          <h1 className="mt-6 max-w-7xl text-4xl leading-tight font-bold xl:text-6xl">
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
              <Link
                href="/buildings"
                passHref
                className="flex items-center gap-2"
              >
                Explore
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-b px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32"
      >
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="mb-10 text-4xl leading-tight font-bold">About Us</h2>

          <div className="text-muted-foreground max-w-2xl space-y-6 text-justify">
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

      <section
        id="team"
        className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32"
      >
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="mb-12 text-center text-4xl leading-tight font-bold">
            Our Team
          </h2>

          <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {persons.map((member) => (
              <PersonCard key={member.name} person={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

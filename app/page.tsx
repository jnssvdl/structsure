import { Header } from "@/components/header";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PersonCard from "@/components/person-card";
import { persons } from "@/data/persons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section
          id="hero"
          className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32"
        >
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
          <div className="mx-auto flex max-w-7xl flex-col items-center">
            <AuroraText
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              colors={["#f7e968", "#aadb4f", "#8ecb4b", "#98db58"]}
            >
              StructSure
            </AuroraText>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-center text-lg md:text-xl">
              Advanced structural health monitoring for Cavite State University
              facilities using DRH, UPV, and GPR technologies.
            </p>
            <Link href="/buildings" passHref>
              <Button size="lg" asChild>
                <span>Explore</span>
              </Button>
            </Link>
          </div>
        </section>

        <section
          id="about"
          className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center">
            <h2 className="text-primary mb-12 text-center text-4xl font-bold">
              About Us
            </h2>

            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/cvsu.jpg"
                  alt="Cavite State University"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-muted-foreground space-y-6">
                <p>
                  <strong className="text-primary">StructSure</strong> is a
                  thesis research project developed at Cavite State University
                  to advance structural health monitoring techniques for
                  academic and professional applications.
                </p>
                <p>
                  The project was part of the Civil Engineering graduate
                  program, focusing on integrating DRH, UPV, and GPR
                  technologies into a comprehensive assessment system for campus
                  infrastructure.
                </p>
                <p>
                  Guided by the College of Engineering and Information
                  Technology, this research supports CvSU&apos;s mission to
                  pioneer innovative engineering solutions for real-world
                  infrastructure challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="team"
          className="px-4 py-16 md:px-8 md:py-24 lg:px-12 lg:py-32"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center">
            <h2 className="text-primary mb-12 text-center text-4xl font-bold">
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
    </div>
  );
}

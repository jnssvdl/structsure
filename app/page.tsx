import { Header } from "@/components/header";
import ContactSection from "@/components/contact-section";
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
        <section id="hero" className="py-20">
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
          <div className="container mx-auto flex flex-col items-center">
            <AuroraText
              className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl"
              colors={["#f7e968", "#aadb4f", "#8ecb4b", "#98db58"]}
            >
              StructSure
            </AuroraText>
            <p className="mb-8">
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

        <section id="about" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-primary mb-12 text-center text-4xl font-bold">
              About Us
            </h2>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="w-full">
                <div className="relative h-0 w-full overflow-hidden rounded-lg pb-[66.66%] shadow-lg">
                  <Image
                    src="/images/cvsu.jpg"
                    alt="Cavite State University"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p>
                  <strong>StructSure</strong> is a thesis research project
                  developed at Cavite State University to advance structural
                  health monitoring techniques for academic and professional
                  applications.
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

        <section id="team" className="py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-primary mb-12 text-center text-4xl font-bold">
              Our Team
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {persons.map((member) => (
                <PersonCard key={member.name} person={member} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-2 p-4">
        <p className="text-muted-foreground text-center">
          © {new Date().getFullYear()} StructSure - Cavite State University
        </p>
      </footer>
    </div>
  );
}

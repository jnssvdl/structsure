import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GridPattern } from "./magicui/grid-pattern";
import { AuroraText } from "./magicui/aurora-text";

export default function HeroSection() {
  return (
    <section id="hero" className="px-4 py-20 text-center md:py-28">
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
      <div className="container mx-auto flex max-w-3xl flex-col items-center">
        {/* <h1 className="text-primary mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          StructSure
        </h1> */}

        <AuroraText
          className="text-primary mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          colors={["#f7e968", "#aadb4f", "#8ecb4b", "#98db58"]}
        >
          StructSure
        </AuroraText>
        <p className="text-muted-foreground mb-8 text-lg md:text-xl">
          Advanced structural health monitoring for Cavite State University
          facilities using DRH, UPV, and GPR technologies.
        </p>
        <Link href="/machines" passHref>
          <Button size="lg" asChild>
            <span>Explore</span>
          </Button>
        </Link>
      </div>
    </section>
  );
}

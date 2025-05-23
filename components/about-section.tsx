import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-primary mb-12 text-center text-4xl font-bold">
          About StructSure
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
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong>StructSure</strong> is a thesis research project developed
              at Cavite State University to advance structural health monitoring
              techniques for academic and professional applications.
            </p>
            <p>
              The project was part of the Civil Engineering graduate program,
              focusing on integrating DRH, UPV, and GPR technologies into a
              comprehensive assessment system for campus infrastructure.
            </p>
            <p>
              Guided by the College of Engineering and Information Technology,
              this research supports CvSU&apos;s mission to pioneer innovative
              engineering solutions for real-world infrastructure challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

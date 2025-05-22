import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-primary mb-6 text-center text-3xl font-bold">
          About StructSure
        </h2>

        <div className="mb-12 text-center">
          <p className="text-lg">
            StructSure is a thesis research project developed at Cavite State
            University to advance structural health monitoring techniques for
            academic and professional applications.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-primary text-xl font-semibold">
              Research Background
            </h3>
            <p className="">
              This project was conducted as part of the Civil Engineering
              graduate program, focusing on integrating DRH, UPV, and GPR
              technologies to create a comprehensive structural assessment
              system for university buildings and facilities.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-primary text-xl font-semibold">
              University Collaboration
            </h3>
            <p className="">
              Conducted under the guidance of the Civil Engineering Department,
              this research contributes to Cavite State Universitys mission to
              develop innovative engineering solutions for infrastructure
              assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

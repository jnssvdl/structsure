import { persons } from "@/data/persons";
import React from "react";
import PersonCard from "./person-card";

export default function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
  );
}

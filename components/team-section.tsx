import Image from "next/image";
import React from "react";

export default function TeamSection() {
  const teamMembers = [
    { name: "Team Member 1", role: "Civil Engineering Researcher" },
    { name: "Team Member 2", role: "Civil Engineering Researcher" },
    { name: "Team Member 3", role: "Civil Engineering Researcher" },
  ];

  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border p-8 shadow-sm">
          <h2 className="text-primary mb-12 text-center text-4xl font-bold">
            Our Team
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center space-y-3 text-center"
              >
                <div className="relative h-32 w-32 overflow-hidden rounded-full border">
                  <Image
                    src={`/placeholder.svg?height=128&width=128&text=${encodeURIComponent(
                      member.name,
                    )}`}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

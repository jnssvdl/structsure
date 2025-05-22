import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-primary mb-12 text-center text-3xl font-semibold">
          Our Team
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto -mt-16 mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src="/images/team/profile.png"
                  alt="Dr. Maria Santos"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardTitle>Sarah Rufin</CardTitle>
              <CardDescription>Student Civil Engineer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-primary">
                Leads the DRH analysis team with 15 years of experience in
                structural dynamics.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto -mt-16 mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src="/images/team/profile.png"
                  alt="Dr. Maria Santos"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardTitle>Juan Dela Cruz</CardTitle>
              <CardDescription>Student Civil Engineer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-primary">
                Oversees UPV and GPR operations with expertise in
                non-destructive testing methodologies.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto -mt-16 mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  src="/images/team/profile.png"
                  alt="Dr. Maria Santos"
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardTitle>John Doe</CardTitle>
              <CardDescription>Student Civil Engineer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-primary">
                Manages data interpretation and reporting for all structural
                assessment projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

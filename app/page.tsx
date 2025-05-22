import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Header } from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900">
          StructSure
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
          Advanced structural health monitoring for Cavite State University
          facilities using DRH, UPV, and GPR technologies
        </p>
        <Button asChild size="lg">
          <Link href="/machines">Explore</Link>
        </Button>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            About StructSure
          </h2>

          <div className="mb-12 text-center">
            <p className="text-lg text-gray-600">
              StructSure is a thesis research project developed at Cavite State
              University to advance structural health monitoring techniques for
              academic and professional applications.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Research Background
              </h3>
              <p className="text-gray-600">
                This project was conducted as part of the Civil Engineering
                graduate program, focusing on integrating DRH, UPV, and GPR
                technologies to create a comprehensive structural assessment
                system for university buildings and facilities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                University Collaboration
              </h3>
              <p className="text-gray-600">
                Conducted under the guidance of the Civil Engineering
                Department, this research contributes to Cavite State
                Universitys mission to develop innovative engineering solutions
                for infrastructure assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold text-gray-800">
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
                <p className="text-gray-600">
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
                <p className="text-gray-600">
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
                <p className="text-gray-600">
                  Manages data interpretation and reporting for all structural
                  assessment projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} StructSure - Cavite State University
          </p>
        </div>
      </footer>
    </div>
  );
}

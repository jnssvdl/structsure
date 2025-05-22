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
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-primary mb-6 text-5xl font-bold tracking-tight">
          StructSure
        </h1>
        <p className="text-foreground mx-auto mb-8 max-w-2xl text-xl">
          Advanced structural health monitoring for Cavite State University
          facilities using DRH, UPV, and GPR technologies
        </p>
        <Button asChild size="lg">
          <Link href="/machines">Explore</Link>
        </Button>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="text-primary container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} StructSure - Cavite State University
          </p>
        </div>
      </footer>
    </div>
  );
}

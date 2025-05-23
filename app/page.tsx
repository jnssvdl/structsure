import { Header } from "@/components/header";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import TechSection from "@/components/tech-section";
import TeamSection from "@/components/team-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />

        <AboutSection />

        <TechSection />

        <TeamSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <p className="text-muted-foreground mx-auto px-4 text-center">
          © {new Date().getFullYear()} StructSure - Cavite State University
        </p>
      </footer>
    </div>
  );
}

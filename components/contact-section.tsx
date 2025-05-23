import React from "react";
import { Button } from "./ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-primary mb-16 text-center text-4xl font-bold">
          Contact Us
        </h2>
        <div className="grid justify-center gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-muted-foreground max-w-md">
              Have questions about our research or interested in collaboration?
              Reach out to our team.
            </p>
            <div className="max-w-md space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primary h-6 w-6" />
                <span className="text-base font-medium">
                  structsure@cvsu.edu.ph
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primary h-6 w-6" />
                <span className="text-base font-medium">+63 02 4567 980</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-primary h-6 w-6" />
                <span className="text-base font-medium">
                  Cavite State University, Indang, Cavite
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="max-w-md space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name" className="text-sm font-medium">
                  First name
                </Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name" className="text-sm font-medium">
                  Last name
                </Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

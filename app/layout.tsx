import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StructSure",
  description:
    "Advanced structural health monitoring for Cavite State University facilities using DRH, UPV, and GPR technologies.",
  icons: {
    icon: "/favicon-16x16.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <footer className="border-t-2 px-4 py-4 sm:px-6 lg:px-8">
            <p className="text-muted-foreground text-center">
              © {new Date().getFullYear()} StructSure - Cavite State University
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

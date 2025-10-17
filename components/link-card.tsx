import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LinkCardProps {
  href: string;
  title: string;
  Icon?: React.ElementType;
  ctaText?: string;
}

export function LinkCard({ href, title, Icon, ctaText }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="group hover:bg-card flex flex-col items-center rounded-xl border p-8 text-center transition-all hover:shadow-2xs"
    >
      {Icon && (
        <div className="bg-border mb-4 rounded-full p-4">
          <Icon className="h-10 w-10" />
        </div>
      )}
      <div className="mb-2 font-semibold">{title}</div>
      <div className="flex items-center text-sm font-medium">
        {ctaText}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

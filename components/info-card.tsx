import React from "react";

type InfoCardProps = {
  title: string;
  content: string;
};

export default function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="bg-card rounded-xl border p-4">
      <h3 className="mb-2 text-sm font-medium">{title}</h3>
      <p className="text-muted-foreground text-sm">{content}</p>
    </div>
  );
}

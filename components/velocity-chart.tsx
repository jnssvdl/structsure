"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { UPVChart } from "@/types";

const chartConfig = {
  velocity: {
    label: "Velocity",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export function VelocityChart({ data }: { data: UPVChart["velocity"] }) {
  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="floor"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          //   tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="velocity" fill="var(--color-velocity)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

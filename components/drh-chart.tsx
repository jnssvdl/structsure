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
import { DRHChartType } from "@/types/ultrasonic-pulse-velocity";

const chartConfig = {
  averageReboundNumber: {
    label: "Average Rebound Number",
    color: "blue",
  },
  averageCompressiveStrength: {
    label: "Average Compressive Strength",
    color: "orange",
  },
} satisfies ChartConfig;

export function DRHChart({ data }: { data: DRHChartType }) {
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
        <Bar
          dataKey="averageReboundNumber"
          fill="var(--color-averageReboundNumber)"
          radius={4}
        />
        <Bar
          dataKey="averageCompressiveStrength"
          fill="var(--color-averageCompressiveStrength)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}

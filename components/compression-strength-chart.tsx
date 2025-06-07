"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
  compressiveStrength: {
    label: "Compressive Strength",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function CompressiveStrengthChart({
  data,
}: {
  data: UPVChart["compressiveStrength"];
}) {
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
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="compressiveStrength"
          fill="var(--color-compressiveStrength)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}

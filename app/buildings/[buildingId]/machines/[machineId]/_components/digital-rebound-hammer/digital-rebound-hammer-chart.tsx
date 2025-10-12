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
import { DigitalReboundHammerType } from "@/types/digital-rebound-hammer";

const chartConfig = {
  averageReboundNumber: {
    label: "Average Rebound Number",
  },
  averageCompressiveStrength: {
    label: "Average Compressive Strength",
  },
} satisfies ChartConfig;

export function DigitalReboundHammerChart({
  data,
}: {
  data: DigitalReboundHammerType["chart"];
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
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="averageReboundNumber"
          fill="var(--color-chart-1)"
          radius={4}
        />
        <Bar
          dataKey="averageCompressiveStrength"
          fill="var(--color-chart-2)"
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  );
}

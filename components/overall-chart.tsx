"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  firstFloor: {
    label: "1st Floor",
    color: "#2563eb",
  },
  secondFloor: {
    label: "2nd Floor",
    color: "#dc2626",
  },
  thirdFloor: {
    label: "3rd Floor",
    color: "#16a34a",
  },
  fourthFloor: {
    label: "4th Floor",
    color: "#ca8a04",
  },
  fifthFloor: {
    label: "5th Floor",
    color: "#9333ea",
  },
} satisfies ChartConfig;

type OverallData = {
  building: string;
  firstFloor: number | null;
  secondFloor: number | null;
  thirdFloor: number | null;
  fourthFloor: number | null;
  fifthFloor: number | null;
};

interface OverallChartProps {
  data: OverallData[];
}

export function OverallChart({ data }: OverallChartProps) {
  // Filter out null values and convert 0 to null for better visualization
  const processedData = data.map((item) => ({
    ...item,
    firstFloor: item.firstFloor === 0 ? null : item.firstFloor,
    secondFloor: item.secondFloor === 0 ? null : item.secondFloor,
    thirdFloor: item.thirdFloor === 0 ? null : item.thirdFloor,
    fourthFloor: item.fourthFloor === 0 ? null : item.fourthFloor,
    fifthFloor: item.fifthFloor === 0 ? null : item.fifthFloor,
  }));

  return (
    <ChartContainer config={chartConfig} className="h-[400px] w-full">
      <BarChart accessibilityLayer data={processedData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="building"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          textAnchor="end"
        />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="firstFloor" fill="var(--color-firstFloor)" radius={2}>
          <LabelList dataKey="firstFloor" position="top" />
        </Bar>
        <Bar dataKey="secondFloor" fill="var(--color-secondFloor)" radius={2}>
          <LabelList dataKey="secondFloor" position="top" />
        </Bar>
        <Bar dataKey="thirdFloor" fill="var(--color-thirdFloor)" radius={2}>
          <LabelList dataKey="thirdFloor" position="top" />
        </Bar>
        <Bar dataKey="fourthFloor" fill="var(--color-fourthFloor)" radius={2}>
          <LabelList dataKey="fourthFloor" position="top" />
        </Bar>
        <Bar dataKey="fifthFloor" fill="var(--color-fifthFloor)" radius={2}>
          <LabelList dataKey="fifthFloor" position="top" />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

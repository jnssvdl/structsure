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
  },
  secondFloor: {
    label: "2nd Floor",
  },
  thirdFloor: {
    label: "3rd Floor",
  },
  fourthFloor: {
    label: "4th Floor",
  },
  fifthFloor: {
    label: "5th Floor",
  },
} satisfies ChartConfig;

type DashboardChartProps = {
  data: {
    building: string;
    firstFloor: number | null;
    secondFloor: number | null;
    thirdFloor: number | null;
    fourthFloor: number | null;
    fifthFloor: number | null;
  }[];
};

export function DashboardChart({ data }: DashboardChartProps) {
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
        <Bar dataKey="firstFloor" fill="var(--color-chart-1)" radius={2}>
          <LabelList dataKey="firstFloor" position="top" />
        </Bar>
        <Bar dataKey="secondFloor" fill="var(--color-chart-2)" radius={2}>
          <LabelList dataKey="secondFloor" position="top" />
        </Bar>
        <Bar dataKey="thirdFloor" fill="var(--color-chart-3)" radius={2}>
          <LabelList dataKey="thirdFloor" position="top" />
        </Bar>
        <Bar dataKey="fourthFloor" fill="var(--color-chart-4)" radius={2}>
          <LabelList dataKey="fourthFloor" position="top" />
        </Bar>
        <Bar dataKey="fifthFloor" fill="var(--color-chart-5)" radius={2}>
          <LabelList dataKey="fifthFloor" position="top" />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

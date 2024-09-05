"use client"

import { TrendingUp } from "lucide-react"
import { useEffect } from "react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { useDashboardStore } from "@/store/useDashboardStore"

export const description = "A pie chart with legend and hover functionality"




// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitors: 90, fill: "var(--color-other)" },
// ]

// const chartConfig: ChartConfig = {
//   value: {
//     label: "Value",
//   },
//   Subscriptions: {
//     label: "Subscriptions",
//     color: "hsl(var(--chart-1))",
//   },
//   Advertisements: {
//     label: "Advertisements",
//     color: "hsl(var(--chart-2))",
//   },
//   Merchandise: {
//     label: "Merchandise",
//     color: "hsl(var(--chart-3))",
//   },
//   Other: {
//     label: "Other",
//     color: "hsl(var(--chart-4))",
//   },
// };

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Subscription",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Advertisements",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Merch",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function Revenue() {
  const { revenuePieChartData, initializeWithDummyData } = useDashboardStore()

  useEffect(() => {
    initializeWithDummyData();
  }, [initializeWithDummyData]);


  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Pie Chart with Legend and Hover</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={revenuePieChartData}
              dataKey="visitors"
              nameKey="browser"
              labelLine={false}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
      </CardFooter>
    </Card>
  )
}

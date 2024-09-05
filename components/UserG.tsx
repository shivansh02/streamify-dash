"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useDashboardStore } from "@/store/useDashboardStore"

const chartConfig = {
  views: {
    label: "Page Views",
  },
  Total: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
  Active: {
    label: "Active",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function UserGrowth() {
  const [ActiveChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("Total")

  const { userGrowthData } = useDashboardStore()

  const Total = React.useMemo(
    () => ({
      Total: userGrowthData.reduce((acc, curr) => acc + curr.Total, 0),
      Active: userGrowthData.reduce((acc, curr) => acc + curr.Active, 0),
    }),
    [userGrowthData]
  )

  return (
    <Card className="w-full max-w-full max-h-60">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-4 py-3 sm:px-6 sm:py-5">
          <CardTitle className="text-base sm:text-lg font-semibold">
            User Growth Overview
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            Total/Active users for the last 12 months
          </CardDescription>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap w-full sm:w-auto">
          {["Total", "Active"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={ActiveChart === chart}
                className="flex flex-1 flex-col justify-center items-start gap-1 border-t px-4 py-3 sm:px-6 sm:py-4 sm:items-center sm:border-l data-[active=true]:bg-muted/50"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart]?.label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-2xl">
                  {Total[chart as keyof typeof Total]?.toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:px-4 py-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-w-16 aspect-h-9 max-h-28 w-full"
        >
          <LineChart
            accessibilityLayer
            data={userGrowthData}
            margin={{
              left: 12,
              right: 12,
            }}
            className="w-full h-full"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={ActiveChart}
              type="monotone"
              stroke={`var(--color-${ActiveChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

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

// export const description = "An interActive line chart"

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
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row h-16">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          {/* <CardTitle>Line Chart - InterActive</CardTitle> */}
          <CardDescription>
            Total/Active users for the last 12 months
          </CardDescription>
        </div>
        <div className="flex">
          {["Total", "Active"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-Active={ActiveChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[Active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {Total[key as keyof typeof Total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-4">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={userGrowthData}
            margin={{
              left: 12,
              right: 12,
            }}
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
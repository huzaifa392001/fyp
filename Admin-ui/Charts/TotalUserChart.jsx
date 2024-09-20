"use client"
import React from 'react'
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart"
export const description = "A stacked area chart"
const chartConfig = {
  deliveryPartners: {
    label: "Delivery Partners",
    color: "hsl(var(--chart-1))",
  },
  customers: {
    label: "Customer",
    color: "hsl(var(--chart-2))",
  },
}


function TotalUserChart({ chartData }) {
  return (
    <div className="chartContainer">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className='chartContainer'>
            <AreaChart
              accessibilityLayer
              data={chartData}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="deliveryPartners" // Corrected dataKey
                type="natural"
                fill="var(--secondary-color)"
                fillOpacity={0.4}
                stroke="var(--secondary-color)"
                stackId="a"
              />
              <Area
                dataKey="customers" // Corrected dataKey
                type="natural"
                fill="var(--theme-color)"
                fillOpacity={0.4}
                stroke="var(--theme-color)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
        {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
      </Card>
    </div>
  )
}

export default TotalUserChart

"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A simple area chart"

export function ActiveUserChart({ chartData, heading, title }) {

    const chartConfig = {
        desktop: {
            label: { title },
            color: "hsl(var(--chart-1))",
        },
    }
    return (
        <Card>
            {heading && (
                <CardHeader>
                    <CardTitle>{heading}</CardTitle>
                </CardHeader>
            )}
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
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
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey={title}
                            type="natural"
                            fill={title === "customers" ? "var(--theme-color)" : "var(--secondary-color)"}
                            fillOpacity={0.4}
                            stroke={title === "customers" ? "var(--theme-color)" : "var(--secondary-color)"}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

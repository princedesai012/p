'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltipContent,
} from '@/components/ui/chart';
import type { ComparisonItem } from '@/lib/types';
import type { ChartConfig } from '@/components/ui/chart';

const chartConfig = {
  today: {
    label: 'Today',
    color: 'hsl(var(--primary))',
  },
  yesterday: {
    label: 'Yesterday',
    color: 'hsl(var(--accent))',
  },
} satisfies ChartConfig;

interface ComparisonChartProps {
  data: ComparisonItem[];
}

export function ComparisonChart({ data }: ComparisonChartProps) {
  return (
    <Card className="shadow-lg transition-shadow duration-300 hover:shadow-primary/20">
      <CardHeader>
        <CardTitle>Today vs. Yesterday</CardTitle>
        <CardDescription>
          A comparison of key prices from today and yesterday.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `₹${value}`}
              />
              <Tooltip
                content={<ChartTooltipContent />}
                cursor={{ fill: 'hsl(var(--muted))' }}
              />
              <Bar
                dataKey="yesterday"
                fill="var(--color-yesterday)"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="today"
                fill="var(--color-today)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

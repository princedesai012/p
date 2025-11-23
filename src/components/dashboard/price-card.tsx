import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Minus, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface PriceCardProps {
  title: string;
  price: number;
  unit: string;
  change: number;
  Icon: React.ElementType;
  lastUpdated: string;
}

export function PriceCard({
  title,
  price,
  unit,
  change,
  Icon,
  lastUpdated,
}: PriceCardProps) {
  const isPositive = change > 0;
  const isNegative = change < 0;
  const isNeutral = change === 0;

  const ChangeIcon = isPositive
    ? TrendingUp
    : isNegative
    ? TrendingDown
    : Minus;

  return (
    <Card className="flex h-full transform flex-col justify-between shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-6 w-6 text-muted-foreground" />}
      </CardHeader>
      <CardContent className="pb-4">
        <div className="text-4xl font-bold">
          ₹{price.toLocaleString('en-IN')}
        </div>
        <p className="text-xs text-muted-foreground">{unit}</p>
        <div className="mt-4 flex items-center space-x-2">
          <Badge
            variant="outline"
            className={cn(
              'text-xs font-semibold',
              isPositive && 'border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400',
              isNegative && 'border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-400'
            )}
          >
            <ChangeIcon className="mr-1 h-4 w-4" />
            {isPositive ? '+' : ''}
            {change.toFixed(2)}
          </Badge>
          <span className="text-xs text-muted-foreground">vs yesterday</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Last Updated: {lastUpdated}</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Share price</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
}

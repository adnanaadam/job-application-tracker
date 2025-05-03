import { ArrowUp, ArrowDown } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from '@/lib/utils'

export function StatsCard({
  name,
  value,
  icon: Icon,
  change,
  trend
}: {
  name: string
  value: number
  icon: any
  change: number
  trend: 'up' | 'down' | 'neutral'
}) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-500">
            {name}
          </CardTitle>
          <Icon className="h-4 w-4 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <span className="text-2xl font-bold">{value}</span>
          <div className={cn(
            "flex items-center text-sm",
            trend === 'up' ? 'text-green-500' : 
            trend === 'down' ? 'text-red-500' : 'text-gray-500'
          )}>
            {trend === 'up' ? (
              <ArrowUp className="h-4 w-4 mr-1" />
            ) : trend === 'down' ? (
              <ArrowDown className="h-4 w-4 mr-1" />
            ) : null}
            {change}%
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
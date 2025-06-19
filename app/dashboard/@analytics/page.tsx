import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

const metrics = [
  { name: "Total Revenue", value: "$45,231", change: "+20.1%", icon: DollarSign },
  { name: "Active Users", value: "2,350", change: "+15.3%", icon: Users },
  { name: "Page Views", value: "12,234", change: "+8.2%", icon: Activity },
  { name: "Conversion Rate", value: "3.2%", change: "+2.1%", icon: TrendingUp },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Analytics Dashboard
            <Badge variant="outline">@analytics</Badge>
          </CardTitle>
          <CardDescription>From app/dashboard/@analytics/page.tsx</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.name}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.name}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{metric.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DashboardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Main Dashboard Content
          <Badge variant="secondary">Default Slot</Badge>
        </CardTitle>
        <CardDescription>This content comes from app/dashboard/page.tsx</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This is the main dashboard content that appears in the default children slot. Below you'll see the parallel
          routes for analytics and team sections rendering simultaneously.
        </p>
      </CardContent>
    </Card>
  )
}

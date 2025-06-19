import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardLayout({
  children,
  analytics,
  team,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-xl text-muted-foreground">
          Parallel Routes Example - Multiple sections rendered simultaneously
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Parallel Routes Structure</CardTitle>
          <CardDescription>This layout renders multiple parallel routes using named slots</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">
              app/dashboard/layout.tsx receives:
              <br />• children (default slot)
              <br />• analytics (@analytics slot)
              <br />• team (@team slot)
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {children}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Analytics Section</h2>
            {analytics}
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Team Section</h2>
            {team}
          </div>
        </div>
      </div>
    </div>
  )
}

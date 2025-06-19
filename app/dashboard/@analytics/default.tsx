import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics Default</CardTitle>
        <CardDescription>This is the default fallback for the @analytics slot</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This content is shown when the analytics slot doesn't match the current URL.
        </p>
      </CardContent>
    </Card>
  )
}

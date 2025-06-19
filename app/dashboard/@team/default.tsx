import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TeamDefault() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Default</CardTitle>
        <CardDescription>This is the default fallback for the @team slot</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">This content is shown when the team slot doesn't match the current URL.</p>
      </CardContent>
    </Card>
  )
}

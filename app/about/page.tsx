import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About This Project</h1>
        <p className="text-xl text-muted-foreground">A comprehensive example of Next.js routing patterns</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Basic Routes Example</CardTitle>
          <CardDescription>This page demonstrates a basic route using the App Router</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This is a basic route created by placing a <Badge variant="secondary">page.tsx</Badge> file in the{" "}
            <Badge variant="secondary">app/about/</Badge> directory.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">app/about/page.tsx → /about</p>
          </div>
          <p className="text-muted-foreground">
            The App Router uses file-based routing where folders define routes and special files like page.tsx,
            layout.tsx, loading.tsx, and error.tsx define the UI for route segments.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

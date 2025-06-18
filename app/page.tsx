import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, ImageIcon, Route } from "lucide-react"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Next.js Routing Examples</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore different routing patterns in Next.js including basic routes, parallel routes, and intercepting
          routes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Route className="h-5 w-5" />
              Basic Routes
            </CardTitle>
            <CardDescription>Standard file-based routing with pages and layouts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button asChild variant="outline" className="w-full justify-between">
                <Link href="/about">
                  About Page
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between">
                <Link href="/products">
                  Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-between">
                <Link href="/blog">
                  Blog
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Parallel Routes
            </CardTitle>
            <CardDescription>Render multiple pages simultaneously in the same layout</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard">
                View Dashboard
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Dashboard with parallel @analytics and @team routes</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Intercepting Routes
            </CardTitle>
            <CardDescription>Intercept routes to show content in modals</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/gallery">
                View Gallery
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-2">Photo gallery with modal intercepting routes</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-muted/50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Routing Patterns Explained</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Basic Routes</h3>
            <p className="text-sm text-muted-foreground">
              File-based routing where each file in the app directory becomes a route. Uses page.tsx, layout.tsx, and
              loading.tsx conventions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Parallel Routes</h3>
            <p className="text-sm text-muted-foreground">
              Named slots (@folder) that allow rendering multiple pages in the same layout simultaneously, perfect for
              dashboards.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Intercepting Routes</h3>
            <p className="text-sm text-muted-foreground">
              Intercept navigation to show content in modals while keeping the URL updated and maintaining shareable
              links.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

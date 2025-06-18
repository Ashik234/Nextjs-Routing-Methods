import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const posts = [
  {
    id: 1,
    title: "Understanding Next.js App Router",
    excerpt: "Learn about the new App Router and its benefits",
    date: "2024-01-15",
    category: "Tutorial",
  },
  {
    id: 2,
    title: "Parallel Routes in Practice",
    excerpt: "Real-world examples of parallel routing patterns",
    date: "2024-01-10",
    category: "Guide",
  },
  {
    id: 3,
    title: "Intercepting Routes for Better UX",
    excerpt: "How to use intercepting routes for modal experiences",
    date: "2024-01-05",
    category: "Tutorial",
  },
]

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl text-muted-foreground">Articles about Next.js routing patterns</p>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle>
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.excerpt}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nested Routes</CardTitle>
          <CardDescription>Blog posts use nested routing structure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">
              app/blog/page.tsx → /blog
              <br />
              app/blog/[id]/page.tsx → /blog/1, /blog/2, etc.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

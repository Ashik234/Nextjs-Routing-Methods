import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar } from "lucide-react"

const posts = {
  1: {
    title: "Understanding Next.js App Router",
    content:
      "The App Router is a new paradigm for building applications with React and Next.js. It introduces several new concepts including layouts, server components, and improved routing patterns.",
    date: "2024-01-15",
    category: "Tutorial",
    author: "John Doe",
  },
  2: {
    title: "Parallel Routes in Practice",
    content:
      "Parallel routes allow you to simultaneously render multiple pages in the same layout. This is particularly useful for dashboards where you want to show different sections of data at the same time.",
    date: "2024-01-10",
    category: "Guide",
    author: "Jane Smith",
  },
  3: {
    title: "Intercepting Routes for Better UX",
    content:
      "Intercepting routes provide a way to load a route from another part of your application within the current layout. This is perfect for modal experiences while maintaining URL state.",
    date: "2024-01-05",
    category: "Tutorial",
    author: "Mike Johnson",
  },
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts[params.id as keyof typeof posts]

  if (!post) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Button asChild variant="outline">
        <Link href="/blog">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </Button>

      <article>
        <Card>
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline">{post.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
            </div>
            <CardTitle className="text-3xl">{post.title}</CardTitle>
            <CardDescription>By {post.author}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-gray max-w-none">
              <p>{post.content}</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-mono text-sm">Nested dynamic route: app/blog/[id]/page.tsx</p>
              <p className="text-sm text-muted-foreground mt-1">URL: /blog/{params.id}</p>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  )
}

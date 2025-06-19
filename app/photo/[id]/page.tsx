import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ImageIcon } from "lucide-react"

const photos = {
  1: {
    title: "Mountain Landscape",
    description: "Beautiful mountain view at sunset",
    details:
      "Captured during a hiking trip in the Rocky Mountains. The golden hour lighting creates a perfect contrast against the rugged peaks.",
  },
  2: {
    title: "Ocean Waves",
    description: "Peaceful ocean waves on the shore",
    details: "Taken at a secluded beach during low tide. The rhythmic waves create a meditative atmosphere.",
  },
  3: {
    title: "Forest Path",
    description: "Winding path through a dense forest",
    details: "A mysterious trail leading deeper into an old-growth forest. Sunlight filters through the canopy above.",
  },
  4: {
    title: "City Skyline",
    description: "Modern city skyline at night",
    details:
      "Urban landscape showcasing the city's architectural diversity. Lights create beautiful reflections on nearby water.",
  },
  5: {
    title: "Desert Dunes",
    description: "Golden sand dunes in the desert",
    details: "Vast expanse of shifting sands shaped by wind over centuries. The patterns change with each passing day.",
  },
  6: {
    title: "Lake Reflection",
    description: "Perfect reflection on a calm lake",
    details:
      "Mirror-like surface of an alpine lake at dawn. The stillness creates a perfect symmetry with the surrounding mountains.",
  },
}

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photo = photos[params.id as keyof typeof photos]

  if (!photo) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Photo Not Found</h1>
        <Button asChild>
          <Link href="/gallery">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gallery
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <Button asChild variant="outline">
          <Link href="/gallery">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gallery
          </Link>
        </Button>
        <Badge variant="outline" className="flex items-center gap-2">
          <ImageIcon className="h-4 w-4" />
          Full Page View
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{photo.title}</CardTitle>
          <CardDescription className="text-lg">{photo.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground text-xl">Photo {params.id}</span>
          </div>

          <div className="prose prose-gray max-w-none">
            <p>{photo.details}</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">Direct route: app/photo/[id]/page.tsx</p>
            <p className="text-sm text-muted-foreground mt-1">
              This is the full page view, accessible directly via URL or when intercepting routes don't match
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

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

export default function PhotoModal({ params }: { params: { id: string } }) {
  const router = useRouter()
  const photo = photos[params.id as keyof typeof photos]

  if (!photo) {
    return null
  }

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {photo.title}
            <Badge variant="outline">Modal View</Badge>
          </DialogTitle>
          <DialogDescription>{photo.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Photo {params.id}</span>
          </div>

          <p className="text-sm text-muted-foreground">{photo.details}</p>

          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">Intercepted route: app/gallery/@modal/(.)photo/[id]/page.tsx</p>
            <p className="text-sm text-muted-foreground mt-1">
              This modal intercepts navigation from /gallery to /photo/[id]
            </p>
          </div>

          <div className="flex gap-2">
            <Button onClick={() => router.back()} variant="outline">
              Close Modal
            </Button>
            <Button asChild>
              <Link href={`/photo/${params.id}`}>
                <ExternalLink className="h-4 w-4 mr-2" />
                Open Full Page
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

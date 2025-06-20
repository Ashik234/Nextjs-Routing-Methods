import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const photos = [
  {
    id: 1,
    title: "Mountain Landscape",
    description: "Beautiful mountain view at sunset",
  },
  {
    id: 2,
    title: "Ocean Waves",
    description: "Peaceful ocean waves on the shore",
  },
  {
    id: 3,
    title: "Forest Path",
    description: "Winding path through a dense forest",
  },
  { id: 4, title: "City Skyline", description: "Modern city skyline at night" },
  {
    id: 5,
    title: "Desert Dunes",
    description: "Golden sand dunes in the desert",
  },
  {
    id: 6,
    title: "Lake Reflection",
    description: "Perfect reflection on a calm lake",
  },
];

export default function GalleryPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Photo Gallery</h1>
        <p className="text-xl text-muted-foreground">
          Intercepting Routes Example - Click photos to view in modal
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Intercepting Routes</CardTitle>
          <CardDescription>
            Photos open in a modal when navigated from this page, but show full
            page when accessed directly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">
              app/gallery/@modal/(.)photo/[id]/page.tsx → Modal view
              <br />
              app/photo/[id]/page.tsx → Full page view
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Card key={photo.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {photo.title}
                <Badge variant="secondary">#{photo.id}</Badge>
              </CardTitle>
              <CardDescription>{photo.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <span className="text-muted-foreground">Photo {photo.id}</span>
              </div>
              <Link
                href={`/photo/${photo.id}`}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
              >
                View Photo
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

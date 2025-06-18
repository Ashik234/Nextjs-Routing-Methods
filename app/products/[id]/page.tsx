import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

const products = {
  1: {
    name: "Laptop Pro",
    price: "$1,299",
    category: "Electronics",
    description: "High-performance laptop for professionals",
  },
  2: {
    name: "Wireless Headphones",
    price: "$199",
    category: "Audio",
    description: "Premium noise-canceling headphones",
  },
  3: { name: "Smart Watch", price: "$399", category: "Wearables", description: "Advanced fitness and health tracking" },
  4: {
    name: "Tablet",
    price: "$599",
    category: "Electronics",
    description: "Versatile tablet for work and entertainment",
  },
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return (
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Button asChild>
          <Link href="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <Button asChild variant="outline">
        <Link href="/products">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {product.name}
            <Badge variant="secondary">{product.category}</Badge>
          </CardTitle>
          <CardDescription>Product ID: {params.id}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-3xl font-bold text-primary">{product.price}</div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">Dynamic route: app/products/[id]/page.tsx</p>
            <p className="text-sm text-muted-foreground mt-1">
              The [id] folder creates a dynamic segment that captures the URL parameter
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

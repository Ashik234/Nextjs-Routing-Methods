import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  { id: 1, name: "Laptop Pro", price: "$1,299", category: "Electronics" },
  { id: 2, name: "Wireless Headphones", price: "$199", category: "Audio" },
  { id: 3, name: "Smart Watch", price: "$399", category: "Wearables" },
  { id: 4, name: "Tablet", price: "$599", category: "Electronics" },
]

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="text-xl text-muted-foreground">Basic route with dynamic routing examples</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {product.name}
                <Badge variant="secondary">{product.category}</Badge>
              </CardTitle>
              <CardDescription>Price: {product.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link href={`/products/${product.id}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Dynamic Routes</CardTitle>
          <CardDescription>Click on any product to see dynamic routing in action</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">app/products/[id]/page.tsx → /products/1, /products/2, etc.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Info, Package, FileText, BarChart3, ImageIcon } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Products", href: "/products", icon: Package },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center space-x-4">
          <Link href="/" className="font-bold text-xl">
            Next.js Routes
          </Link>
          <div className="flex space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Button key={item.name} asChild variant={pathname === item.href ? "default" : "ghost"} size="sm">
                  <Link href={item.href} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}

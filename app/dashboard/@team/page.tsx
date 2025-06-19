import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Frontend Developer",
    status: "online",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  { name: "Bob Smith", role: "Backend Developer", status: "away", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Carol Davis", role: "Designer", status: "online", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "David Wilson", role: "Product Manager", status: "offline", avatar: "/placeholder.svg?height=40&width=40" },
]

export default function TeamPage() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Team Overview
            <Badge variant="outline">@team</Badge>
          </CardTitle>
          <CardDescription>From app/dashboard/@team/page.tsx</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>Current team status and availability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <Badge
                  variant={member.status === "online" ? "default" : member.status === "away" ? "secondary" : "outline"}
                >
                  {member.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

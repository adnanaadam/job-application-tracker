import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function RecentActivity() {
  const activities = [
    {
      title: "Interview scheduled",
      time: "Today",
      description: "Technical interview with TechCorp at 2:00 PM"
    },
    {
      title: "Application submitted",
      time: "2 days ago",
      description: "Applied for UI Designer at DesignHub"
    }
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{activity.title}</span>
              <span className="text-xs text-gray-500">{activity.time}</span>
            </div>
            <p className="text-sm">{activity.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
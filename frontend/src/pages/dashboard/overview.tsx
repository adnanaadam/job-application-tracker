import { Link } from 'react-router'
import {
  Briefcase,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  ArrowUp,
  ArrowDown,
  Search,
  Plus
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ApplicationStatusChart } from "@/components/dashboard/applicationStatusChart"
import { Progress } from "@/components/ui/progress"
import { cn } from '@/lib/utils'

// Mock data - replace with your actual data
const stats = [
  { 
    name: 'Total Applications', 
    value: 24, 
    icon: Briefcase,
    change: 12,
    trend: 'up'
  },
  { 
    name: 'Interviews', 
    value: 8, 
    icon: Calendar,
    change: 5,
    trend: 'up'
  },
  { 
    name: 'Pending', 
    value: 6, 
    icon: Clock,
    change: 2,
    trend: 'down'
  },
  { 
    name: 'Offers', 
    value: 2, 
    icon: CheckCircle,
    change: 1,
    trend: 'up'
  },
  { 
    name: 'Rejected', 
    value: 4, 
    icon: XCircle,
    change: 3,
    trend: 'neutral'
  },
]

const recentApplications = [
  { 
    id: 1,
    company: 'TechCorp', 
    position: 'Senior Frontend Developer', 
    status: 'interview', 
    date: '2023-06-15',
    progress: 75
  },
  { 
    id: 2,
    company: 'DesignHub', 
    position: 'UI/UX Designer', 
    status: 'applied', 
    date: '2023-06-10',
    progress: 25
  },
  { 
    id: 3,
    company: 'DataSystems', 
    position: 'Data Analyst', 
    status: 'offer', 
    date: '2023-06-05',
    progress: 100
  },
]

export default function Overview() {
  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button asChild>
            <Link to="/dashboard/applications/new" className="flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              Add Application
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.name}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold">{stat.value}</span>
                <div className={cn(
                  "flex items-center text-sm",
                  stat.trend === 'up' ? 'text-green-500' : 
                  stat.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                )}>
                  {stat.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4 mr-1" />
                  ) : stat.trend === 'down' ? (
                    <ArrowDown className="h-4 w-4 mr-1" />
                  ) : null}
                  {stat.change}%
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Application Status Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ApplicationStatusChart />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Interview scheduled</span>
                <span className="text-xs text-gray-500">Today</span>
              </div>
              <p className="text-sm">Technical interview with TechCorp at 2:00 PM</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Application submitted</span>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
              <p className="text-sm">Applied for UI Designer at DesignHub</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Applications</CardTitle>
              <Button variant="ghost" asChild>
                <Link to="/dashboard/applications" className="text-sm">
                  View All
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div>
                    <h3 className="font-medium">{app.position}</h3>
                    <p className="text-sm text-gray-600">{app.company}</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-32">
                      <Progress 
                        value={app.progress} 
                        className={cn(
                          "h-2",
                          app.status === 'offer' ? 'bg-green-500' :
                          app.status === 'interview' ? 'bg-blue-500' :
                          'bg-yellow-500'
                        )}
                      />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === 'interview' ? 'bg-blue-100 text-blue-800' :
                      app.status === 'applied' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/dashboard/applications/${app.id}`}>
                        View
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
import { Link } from 'react-router'
import { Search, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ApplicationStatusChart } from '@/components/dashboard/overview/applicationStatusChart'
import { RecentActivity } from '@/components/dashboard/overview/recentActivity'
import { RecentApplications } from '@/components/dashboard/overview/recentApplication'
import { StatsCard } from '@/components/dashboard/overview/statsCard'

const stats = [
  { name: 'Total Applications', value: 24, icon: 'Briefcase', change: 12, trend: 'up' },
  { name: 'Interviews', value: 8, icon: 'Calendar', change: 5, trend: 'up' },
  { name: 'Pending', value: 6, icon: 'Clock', change: 2, trend: 'down' },
  { name: 'Offers', value: 2, icon: 'CheckCircle', change: 1, trend: 'up' },
  { name: 'Rejected', value: 4, icon: 'XCircle', change: 3, trend: 'neutral' },
]

const recentApplications = [
  { id: 1, company: 'TechCorp', position: 'Senior Frontend Developer', status: 'interview', date: '2023-06-15', progress: 75 },
  { id: 2, company: 'DesignHub', position: 'UI/UX Designer', status: 'applied', date: '2023-06-10', progress: 25 },
  { id: 3, company: 'DataSystems', position: 'Data Analyst', status: 'offer', date: '2023-06-05', progress: 100 },
]

export default function Overview() {
  return (
    <div className="flex-1 p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none">
            <Search className="h-4 w-4 mr-2" />
            <span className="sr-only md:not-sr-only">Search</span>
          </Button>
          <Button asChild className="flex-1 md:flex-none">
            <Link to="/dashboard/applications/new" className="flex items-center">
              <Plus className="h-4 w-4 mr-2" />
              <span className="sr-only md:not-sr-only">Add Application</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat: any) => (
          <StatsCard key={stat.name} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ApplicationStatusChart />
        <RecentActivity />
        <RecentApplications applications={recentApplications} />
      </div>
    </div>
  )
}
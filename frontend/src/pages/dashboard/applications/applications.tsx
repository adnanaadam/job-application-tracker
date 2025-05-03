import { Link } from 'react-router'
import { 
//   Briefcase,
//   Calendar,
//   Clock,
//   CheckCircle,
//   XCircle,
  Search,
  Plus,
  Filter,
  ChevronDown,
  MoreVertical,
  Edit,
  Trash2,
  FileText
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// Mock data - replace with your actual data
const applications = [
  {
    id: '1',
    company: 'TechCorp',
    position: 'Senior Frontend Developer',
    status: 'interview',
    appliedDate: '2023-06-15',
    updatedAt: '2023-06-18',
    progress: 75,
    notes: 'Technical interview scheduled for June 20th'
  },
  {
    id: '2',
    company: 'DesignHub',
    position: 'UI/UX Designer',
    status: 'applied',
    appliedDate: '2023-06-10',
    updatedAt: '2023-06-12',
    progress: 25,
    notes: 'Waiting to hear back from recruiter'
  },
  {
    id: '3',
    company: 'DataSystems',
    position: 'Data Analyst',
    status: 'offer',
    appliedDate: '2023-06-05',
    updatedAt: '2023-06-08',
    progress: 100,
    notes: 'Offer received - $95k + benefits'
  },
  {
    id: '4',
    company: 'CloudNet',
    position: 'DevOps Engineer',
    status: 'rejected',
    appliedDate: '2023-05-28',
    updatedAt: '2023-06-01',
    progress: 100,
    notes: 'Position filled internally'
  },
]

const statusOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'applied', label: 'Applied' },
  { value: 'interview', label: 'Interview' },
  { value: 'offer', label: 'Offer' },
  { value: 'rejected', label: 'Rejected' },
]

export function Applications() {
  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Job Applications</h1>
          <p className="text-sm text-muted-foreground">
            Track and manage all your job applications in one place
          </p>
        </div>
        <Button asChild>
          <Link to="/dashboard/applications/new" className="flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Application
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search applications..."
                  className="pl-9"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="h-4 w-4 mr-2" />
                    Status
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {statusOptions.map((option) => (
                    <DropdownMenuItem key={option.value}>
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Button variant="ghost" className="text-sm">
              Clear Filters
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{app.company}</TableCell>
                  <TableCell>{app.position}</TableCell>
                  <TableCell>
                    <Badge 
                    //   variant={
                    //     app.status === 'interview' ? 'default' :
                    //     app.status === 'applied' ? 'secondary' :
                    //     app.status === 'offer' ? 'success' :
                    //     'destructive'
                    //   }
                    >
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Progress 
                        value={app.progress} 
                        className={cn(
                          "h-2 w-24",
                          app.status === 'offer' ? 'bg-green-500' :
                          app.status === 'interview' ? 'bg-blue-500' :
                          app.status === 'rejected' ? 'bg-red-500' :
                          'bg-yellow-500'
                        )}
                      />
                      <span className="text-sm text-muted-foreground">
                        {app.progress}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {app.appliedDate}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {app.updatedAt}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                          <Link 
                            to={`/dashboard/applications/${app.id}`}
                            className="flex items-center"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link 
                            to={`/dashboard/applications/${app.id}/edit`}
                            className="flex items-center"
                          >
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
            <span className="font-medium">4</span> applications
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
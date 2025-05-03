import { useParams, Link } from 'react-router'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Calendar, Mail, Phone, Globe, MapPin, FileText } from 'lucide-react'
import { useMockApplications } from '@/hooks/use-mock-applications' // Custom mock data hook

export function ApplicationDetail() {
  const { id } = useParams()
  const { getApplicationById } = useMockApplications()
 const application: any | null = id ? getApplicationById(id) : null;

  if (!application) {
    return (
      <div className="flex-1 p-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center h-[50vh]">
          <h2 className="text-xl font-medium">Application not found</h2>
          <Button asChild>
            <Link to="/dashboard/applications">Back to Applications</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link to="/dashboard/applications" className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Applications
          </Link>
        </Button>
        <Button asChild>
          <Link 
            to={`/dashboard/applications/${id}/edit`}
            className="flex items-center"
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Application
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{application.position}</CardTitle>
              <p className="text-lg font-medium text-gray-600 mt-2">
                {application.company}
              </p>
              <Badge 
                variant={
                  application.status === 'interview' ? 'default' :
                  application.status === 'applied' ? 'secondary' :
                  application.status === 'offer' ? 'success' :
                  'destructive'
                }
                className="mt-3"
              >
                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-3 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Applied Date</p>
                <p className="font-medium">{application.appliedDate}</p>
              </div>
            </div>

            {application.contactEmail && (
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Contact Email</p>
                  <a 
                    href={`mailto:${application.contactEmail}`} 
                    className="font-medium hover:underline"
                  >
                    {application.contactEmail}
                  </a>
                </div>
              </div>
            )}

            {application.contactPhone && (
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Contact Phone</p>
                  <p className="font-medium">{application.contactPhone}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            {application.website && (
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Website</p>
                  <a 
                    href={application.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    {application.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              </div>
            )}

            {application.location && (
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">{application.location}</p>
                </div>
              </div>
            )}
          </div>

          {application.notes && (
            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 mr-3 text-gray-500" />
                <h3 className="font-medium">Notes</h3>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="whitespace-pre-line">{application.notes}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
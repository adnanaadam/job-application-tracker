import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

export function RecentApplications({ applications }: { applications: any[] }) {
  return (
    <Card className='lg:col-span-3'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle>Recent Applications</CardTitle>
          <Button variant='ghost' asChild>
            <Link to='/dashboard/applications' className='text-sm'>
              View All
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {applications.map((app: any) => (
            <div
              key={app.id}
              className='flex flex-col justify-between gap-4 rounded-lg border p-4 transition-colors hover:bg-gray-50 sm:flex-row sm:items-center sm:gap-0'
            >
              <div>
                <h3 className='font-medium'>{app.position}</h3>
                <p className='text-sm text-gray-600'>{app.company}</p>
              </div>
              <div className='flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:space-x-6'>
                <div className='w-full sm:w-32'>
                  <Progress
                    value={app.progress}
                    className={cn(
                      'h-2',
                      app.status === 'offer'
                        ? 'bg-green-500'
                        : app.status === 'interview'
                          ? 'bg-blue-500'
                          : 'bg-yellow-500'
                    )}
                  />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    app.status === 'interview'
                      ? 'bg-blue-100 text-blue-800'
                      : app.status === 'applied'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                  }`}
                >
                  {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                </span>
                <Button
                  variant='ghost'
                  size='sm'
                  asChild
                  className='w-full sm:w-auto'
                >
                  <Link to={`/dashboard/applications/${app.id}`}>View</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

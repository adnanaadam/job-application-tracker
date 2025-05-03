import { Link, useNavigate } from 'react-router';
import { Search, Plus, Filter, ChevronDown, MoreVertical, Edit, FileText, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { useMockApplications } from '@/hooks/use-mock-applications';

// Status badge configuration
const statusConfig: { [key: string]: { variant: "secondary" | "default" | "success" | "destructive" | "outline"; color: string } } = {
  applied: { variant: 'secondary', color: 'bg-yellow-500' },
  interview: { variant: 'default', color: 'bg-blue-500' },
  offer: { variant: 'success', color: 'bg-green-500' },
  rejected: { variant: 'destructive', color: 'bg-red-500' }
};

const statusOptions = [
  { value: 'all', label: 'All Statuses' },
  { value: 'applied', label: 'Applied' },
  { value: 'interview', label: 'Interview' },
  { value: 'offer', label: 'Offer' },
  { value: 'rejected', label: 'Rejected' },
];

// Delete confirmation dialog component
function DeleteDialog({ id, open, onOpenChange }: { id: string; open: boolean; onOpenChange: (open: boolean) => void }) {
  const navigate = useNavigate();
  const { deleteApplication } = useMockApplications();

  const handleDelete = () => {
    deleteApplication(id);
    onOpenChange(false);
    navigate('/dashboard/applications');
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this application. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 focus-visible:ring-red-600"
          >
            Delete Application
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// Main applications component
export function Applications() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAppId, setSelectedAppId] = useState('');

  const { applications } = useMockApplications();

  const handleDeleteClick = (id: string) => {
    setSelectedAppId(id);
    setDeleteDialogOpen(true);
  };

  return (
    <div className="flex-1 space-y-4 p-4 sm:p-6">
      {/* Header Section */}
      <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Job Applications</h1>
          <p className="text-sm text-muted-foreground">
            Track and manage all your job applications
          </p>
        </div>
        <Button asChild className="w-full sm:w-auto">
          <Link to="/dashboard/applications/new" className="flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            {isMobile ? 'Add' : 'Add Application'}
          </Link>
        </Button>
      </header>

      {/* Filters Section */}
      <section>
        <Card className="overflow-hidden">
          <CardHeader className="p-4 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search applications..."
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      {isMobile ? '' : 'Status'}
                      <ChevronDown className="ml-2 h-4 w-4" />
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
                {!isMobile && (
                  <Button variant="ghost" className="text-sm">
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
        </Card>
      </section>

      {/* Applications Table Section */}
      <section>
        <Card className="overflow-hidden">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle>All Applications</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Company</TableHead>
                    {!isTablet && <TableHead>Position</TableHead>}
                    <TableHead>Status</TableHead>
                    {!isMobile && <TableHead>Progress</TableHead>}
                    {!isMobile && <TableHead>Applied</TableHead>}
                    {!isTablet && <TableHead>Updated</TableHead>}
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          <span>{app.company}</span>
                          {isTablet && (
                            <span className="text-sm text-muted-foreground">
                              {app.position}
                            </span>
                          )}
                        </div>
                      </TableCell>
                      {!isTablet && <TableCell>{app.position}</TableCell>}
                      <TableCell>
                        <Badge
                          variant={statusConfig[app.status].variant}
                          className="whitespace-nowrap"
                        >
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </Badge>
                      </TableCell>
                      {!isMobile && (
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={app.progress}
                              className={cn(
                                "h-2 w-24",
                                statusConfig[app.status].color
                              )}
                            />
                            <span className="text-sm text-muted-foreground">
                              {app.progress}%
                            </span>
                          </div>
                        </TableCell>
                      )}
                      {!isMobile && (
                        <TableCell className="text-sm text-muted-foreground">
                          {app.appliedDate}
                        </TableCell>
                      )}
                      {!isTablet && (
                        <TableCell className="text-sm text-muted-foreground">
                          {app.updatedAt}
                        </TableCell>
                      )}
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link
                                to={`/dashboard/applications/${app.id}`}
                                className="flex cursor-pointer items-center"
                              >
                                <FileText className="mr-2 h-4 w-4" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link
                                to={`/dashboard/applications/${app.id}/edit`}
                                className="flex cursor-pointer items-center"
                              >
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="text-red-600 focus:text-red-600"
                              onClick={() => handleDeleteClick(app.id)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-between gap-4 p-4 sm:flex-row sm:p-6">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">{applications.length}</span> of{' '}
              <span className="font-medium">{applications.length}</span> applications
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>

      {/* Delete Confirmation Dialog */}
      <DeleteDialog 
        id={selectedAppId} 
        open={deleteDialogOpen} 
        onOpenChange={setDeleteDialogOpen} 
      />
    </div>
  );
}
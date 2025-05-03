import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Trash2 } from 'lucide-react'
import { useMockApplications } from '@/hooks/use-mock-applications'

export function DeleteApplication({ id }) {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { deleteApplication } = useMockApplications()

  const handleDelete = () => {
    deleteApplication(id)
    setOpen(false)
    navigate('/dashboard/applications')
  }

  return (
    <>
      <Button 
        variant="ghost" 
        size="sm" 
        className="text-red-600 hover:text-red-800"
        onClick={() => setOpen(true)}
      >
        <Trash2 className="h-4 w-4 mr-2" />
        Delete
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this application.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
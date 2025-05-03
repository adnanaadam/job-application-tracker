import { Globe, Trash2, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from 'react-router';

interface AccountActionsProps {
  onDeleteClick: () => void;
}

export function AccountActions({ onDeleteClick }: AccountActionsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button variant="ghost" className="w-full justify-between" asChild>
          <Link to="/dashboard/settings/export">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>Export Data</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button 
          variant="ghost" 
          className="w-full justify-between text-red-600 hover:text-red-700" 
          onClick={onDeleteClick}
        >
          <div className="flex items-center gap-2">
            <Trash2 className="h-5 w-5" />
            <span>Delete Account</span>
          </div>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
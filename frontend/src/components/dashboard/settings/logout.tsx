import { LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface LogoutSectionProps {
  onLogout: () => void;
}

export function LogoutSection({ onLogout }: LogoutSectionProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-600 hover:text-red-700" 
          onClick={onLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
}
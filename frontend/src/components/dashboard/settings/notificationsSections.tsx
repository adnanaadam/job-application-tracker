import { Bell } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface NotificationsSectionProps {
  notificationsEnabled: boolean;
  emailUpdatesEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
  setEmailUpdatesEnabled: (enabled: boolean) => void;
}

export function NotificationsSection({
  notificationsEnabled,
  emailUpdatesEnabled,
  setNotificationsEnabled,
  setEmailUpdatesEnabled,
}: NotificationsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          <span>Notifications</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <Label>Application Alerts</Label>
            <p className="text-sm text-muted-foreground">
              Receive updates about your job applications
            </p>
          </div>
          <Switch 
            checked={notificationsEnabled}
            onCheckedChange={setNotificationsEnabled}
          />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <div>
            <Label>Email Updates</Label>
            <p className="text-sm text-muted-foreground">
              Get weekly summaries and tips
            </p>
          </div>
          <Switch 
            checked={emailUpdatesEnabled}
            onCheckedChange={setEmailUpdatesEnabled}
          />
        </div>
      </CardContent>
    </Card>
  );
}
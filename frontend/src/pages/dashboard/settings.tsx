import { AccountActions } from "@/components/dashboard/settings/accountsActions";
import { BillingSection } from "@/components/dashboard/settings/billingSection";
import { DeleteAccountDialog } from "@/components/dashboard/settings/deleteAccountDialog";
import { LogoutSection } from "@/components/dashboard/settings/logout";
import { NotificationsSection } from "@/components/dashboard/settings/notificationsSections";
import { ProfileSection } from "@/components/dashboard/settings/profileSection";
import { SecuritySection } from "@/components/dashboard/settings/securitySection";
import { SettingsHeader } from "@/components/dashboard/settings/settingsHeader";
import { Separator } from "@/components/ui/separator";
import { useAuth } from '@/hooks/use-auth';
import { useState } from 'react';

export function Settings() {
  const { user, logout } = useAuth();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailUpdatesEnabled, setEmailUpdatesEnabled] = useState(false);

  return (
    <div className="flex-1 space-y-6 p-4 md:p-6">
      <SettingsHeader />
      <Separator className="my-6" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          <ProfileSection user={user} />
          <SecuritySection />
          <NotificationsSection
            notificationsEnabled={notificationsEnabled}
            emailUpdatesEnabled={emailUpdatesEnabled}
            setNotificationsEnabled={setNotificationsEnabled}
            setEmailUpdatesEnabled={setEmailUpdatesEnabled}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <AccountActions onDeleteClick={() => setIsDeleteDialogOpen(true)} />
          <BillingSection />
          <LogoutSection onLogout={logout} />
        </div>
      </div>

      <DeleteAccountDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onDelete={logout}
      />
    </div>
  );
}
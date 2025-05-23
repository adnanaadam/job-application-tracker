import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/appSidebar';
import { Outlet } from 'react-router';

export default function Dashboard() {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main className='w-full p-4'>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
}

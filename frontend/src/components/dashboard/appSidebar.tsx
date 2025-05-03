import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  FileText,
  BarChart2,
  Settings,
  Plus,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: 'dashboard/overview' },
    { name: 'Applications', icon: Briefcase, href: 'dashboard/applications' },
    { name: 'Calendar', icon: Calendar, href: 'dashboard/calendar' },
    { name: 'Documents', icon: FileText, href: 'dashboard/documents' },
    { name: 'Analytics', icon: BarChart2, href: 'dashboard/analytics' },
    { name: 'Settings', icon: Settings, href: 'dashboard/settings' },
  ];

  return (
    <Sidebar className='bg-white shadow-sm' collapsible='icon'>
      <SidebarContent className='overflow-hidden'>
        <SidebarHeader className='my-4'>
          <Link to='/' className='flex items-center gap-2'>
            <span
              className={cn(
                'text-xl font-bold text-gray-900 transition-opacity duration-300',
                state === 'collapsed' ? 'opacity-0' : 'opacity-100 delay-300'
              )}
            >
              JobTrackr
            </span>
          </Link>
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu
              className={cn(state === 'collapsed' && 'items-center')}
            >
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    // size="md"
                    tooltip={item.name}
                    isActive={location.pathname === `/${item.href}`}
                    className={cn(
                      'text-sm transition-colors duration-200',
                      location.pathname === `/${item.href}`
                        ? 'bg-blue-50 text-blue-700'
                        : 'hover:bg-gray-100'
                    )}
                  >
                    <Link
                      to={item.href}
                      className={cn(
                        'flex items-center gap-3 px-4',
                        state === 'collapsed' && 'justify-center'
                      )}
                    >
                      <item.icon className='h-5 w-5' />
                      {state === 'expanded' && <span>{item.name}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className='p-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              //   size="md"
              tooltip='New Application'
              className='text-sm transition-colors duration-200 hover:bg-gray-100'
            >
              <Link
                to='/dashboard/applications/new'
                className={cn(
                  'flex items-center gap-3 px-4',
                  state === 'collapsed' && 'justify-center'
                )}
              >
                <Plus className='h-5 w-5' />
                {state === 'expanded' && <span>New Application</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

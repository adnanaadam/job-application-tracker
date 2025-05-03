import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  FileText,
  BarChart2,
  Settings,
  Plus,
  Rocket,
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
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard/overview' },
    { name: 'Applications', icon: Briefcase, href: '/dashboard/applications' },
    { name: 'Calendar', icon: Calendar, href: '#' },
    { name: 'Documents', icon: FileText, href: '#' },
    { name: 'Analytics', icon: BarChart2, href: '#' },
    { name: 'Settings', icon: Settings, href: '/dashboard/settings' },
  ];

  return (
    <Sidebar className='bg-white shadow-sm' collapsible='icon'>
      <SidebarContent className='overflow-hidden'>
        <SidebarHeader className='m-4'>
          <Link to='/' className='group/item flex items-center space-x-2'>
            <Rocket
              className={cn(
                'h-6 w-6 text-blue-600 transition-transform group-hover/item:rotate-45',
                state === 'collapsed' && 'w-full'
              )}
            />
            <span
              className={cn(
                state === 'collapsed' ? 'opacity-0' : 'opacity-100 delay-300',
                'text-xl font-bold tracking-tighter text-nowrap text-gray-900 transition-all duration-300 group-hover/item:text-blue-600'
              )}
            >
              JobTrackr
              <span className='text-blue-600'>.</span>
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
                    size="lg"
                    tooltip={item.name}
                    isActive={location.pathname === `${item.href}`}
                    className={cn(
                      'text-sm transition-colors duration-200',
                      location.pathname === `/${item.href}`
                        ? 'bg-blue-50 text-blue-600'
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
              size='lg'
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

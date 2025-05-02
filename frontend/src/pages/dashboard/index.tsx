import DashboardCard from '@/components/dashboard/dashboardCard';
import { Briefcase, Clock, CheckCircle } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div>
      <h1 className='mb-6 text-2xl font-bold text-white'>Dashboard Overview</h1>

      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        <DashboardCard
          title='Total Applications'
          value={12}
          icon={<Briefcase />}
          href='/applications'
        />
        <DashboardCard
          title='Pending Interviews'
          value={4}
          icon={<Clock />}
          href='/interviews'
        />
        <DashboardCard
          title='Offers Received'
          value={2}
          icon={<CheckCircle />}
          href='/offers'
        />
      </div>
    </div>
  );
};

export default DashboardPage;

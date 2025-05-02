import { Link } from 'react-router';
import { Card, CardContent } from '@/components/ui/card';

interface DashboardCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  href: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, href }) => {
  return (
    <Link to={`/dashboard${href}`}>
      <Card className="hover:shadow-lg transition">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="text-primary">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DashboardCard;

import { Link } from 'react-router';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { BarChart, Calendar, Notebook, Rocket } from 'lucide-react';

const Features = [
  {
    icon: Rocket,
    description: 'Log every job application you send out and manage them from one dashboard.',
  },
  {
    icon: Calendar,
    description: 'Keep tabs on interview dates, follow-ups, and application deadlines.',
  },
  {
    icon: Notebook,
    description: 'Attach notes, contacts, and helpful links to every application.',
  },
  {
    icon: BarChart,
    description: 'View your application progress and statuses in a clean, simple layout.',
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <main className="flex flex-col items-center text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6 text-gray-900">
            Take Control of Your <span className="text-blue-600">Job Search</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Streamline your job hunt with our powerful application tracker. Never miss an opportunity again.
          </p>
          
          <div className="flex gap-4 mb-16">
            <Button asChild>
              <Link to="/dashboard" className="px-8">
                Get Started
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/features" className="px-8 border-gray-300 text-gray-700 hover:bg-gray-50">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Features Section */}
          <section className="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="hover:border-blue-500 transition-colors bg-gray-50 hover:bg-white text-center"
                >
                  <CardHeader className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Landing;
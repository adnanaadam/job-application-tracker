import { Rocket, Calendar, NotebookText, BarChart, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Link } from 'react-router';

const features = [
  {
    icon: Rocket,
    title: "Application Tracking",
    description: "Log every job application in one centralized dashboard with status tracking."
  },
  {
    icon: Calendar,
    title: "Deadline Management",
    description: "Never miss follow-ups with automated reminders for interviews and applications."
  },
  {
    icon: NotebookText,
    title: "Detailed Notes",
    description: "Attach important details like recruiter contacts, salary ranges, and interview questions."
  },
  {
    icon: BarChart ,
    title: "Progress Analytics",
    description: "Visualize your job search with insightful charts and application metrics."
  },
  {
    icon: ShieldCheck,
    title: "Secure Storage",
    description: "Your data is encrypted and protected. We never share your information."
  },
  {
    icon: HeartHandshake,
    title: "Completely Free",
    description: "Built to help job seekers, with no hidden fees or premium paywalls."
  }
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Simplify Your <span className="text-blue-600">Job Search</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          JobTrackr helps you organize, track, and analyze your job applications - all in one place.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild>
            <Link to="/dashboard" className="px-8">
              Get Started
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/" className="px-8">
              Back to Home
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card 
              key={feature.title}
              className="hover:shadow-lg transition-shadow text-center"
            >
              <CardHeader className="items-center">
                <div className="p-3 bg-blue-50 rounded-full mb-4 flex items-center w-full justify-center">
                <IconComponent className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
          })};
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            About JobTrackr
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              JobTrackr was born out of frustration with the job search process. As former job seekers ourselves, 
              we knew there had to be a better way to stay organized during this stressful time.
            </p>
            <p>
              Our mission is simple: to give job seekers the tools they need to track applications efficiently, 
              reduce anxiety, and ultimately land their dream job.
            </p>
            <p className="font-medium text-gray-900">
              No spreadsheets. No chaos. Just a simple, powerful tool designed specifically for your job search journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


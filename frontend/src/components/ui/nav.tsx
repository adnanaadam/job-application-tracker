import { Link } from 'react-router';
import { Button } from "@/components/ui/button";
import { Rocket, User, LogIn } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full shadow border-gray-200 bg-white/80 backdrop-blur-lg">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo with modern typography */}
        <Link to="/" className="flex items-center space-x-2 group">
          <Rocket className="h-6 w-6 text-blue-600 transition-transform group-hover:rotate-45" />
          <span className="text-xl font-bold tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors">
            JobTrackr
            <span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Navigation with subtle hover effects */}
        <div className="hidden md:flex items-center space-x-1">
          <Button variant="ghost" asChild className="px-3 py-2 rounded-lg hover:bg-blue-50">
            <Link to="/features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </Link>
          </Button>
          <Button variant="ghost" asChild className="px-3 py-2 rounded-lg hover:bg-blue-50">
            <Link to="/pricing" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
          </Button>
          <Button variant="ghost" asChild className="px-3 py-2 rounded-lg hover:bg-blue-50">
            <Link to="/resources" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Resources
            </Link>
          </Button>
        </div>

        {/* Auth buttons with icons */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" asChild className="border-gray-300 hover:border-blue-400">
            <Link to="/login" className="flex items-center space-x-2 text-gray-700">
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </Button>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600">
            <Link to="/register" className="flex items-center space-x-2 text-white">
              <User className="h-4 w-4" />
              <span>Get Started</span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
import { Link } from 'react-router';
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Heart, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-24 bg-gradient-to-b from-white to-blue-50 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand column with animated logo */}
          <div className="flex flex-col items-start">
            <Link to="/" className="group flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-blue-600 group-hover:rotate-45 transition-transform" />
              <span className="text-xl font-bold text-gray-900">
                JobTrackr<span className="text-blue-600">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              The modern way to track your job search journey.
            </p>
            <div className="flex gap-4 *:transition-colors *:p-2 *:rounded-full *:hover:bg-blue-100">
              <a 
                href="https://github.com/yourusername/jobtrackr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500"
              >
                <TwitterLogoIcon className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/yourcompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div className="flex flex-col items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Product
            </h3>
            <div className="space-y-3 flex flex-col *:text-sm *:text-gray-600 *:hover:text-blue-600 *:transition-all *:inline-block *:duration-300 *:hover:translate-x-1">
              <Link 
                to="/features"
              >
                Features
              </Link>
              <Link 
                to="/updates"
              >
                Updates
              </Link>
              <Link 
                to="/roadmap"
              >
                Roadmap
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Resources
            </h3>
            <div className="space-y-3 flex flex-col *:text-sm *:text-gray-600 *:hover:text-blue-600 *:transition-all *:inline-block *:duration-300 *:hover:translate-x-1">
              <Link 
                to="/blog"
              >
                Blog
              </Link>
              <Link 
                to="/guides" 
              >
                Job Search Guides
              </Link>
              <Link 
                to="/templates" 
              >
                Templates
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Company
            </h3>
            <div className="space-y-3 flex flex-col *:text-sm *:text-gray-600 *:hover:text-blue-600 *:transition-all *:inline-block *:duration-300 *:hover:translate-x-1">
              <Link 
                to="/about" 
              >
                About Us
              </Link>
              <Link 
                to="/contact"
              >
                Contact
              </Link>
              <Link 
                to="/privacy" 
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} JobTrackr. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600">
              Terms
            </Link>
            <Link to="/cookies" className="text-sm text-gray-500 hover:text-blue-600">
              Cookies
            </Link>
            <p className="text-sm text-gray-500 inline-flex items-center">
              Made with <Heart className="mx-1 h-4 w-4 text-red-500" /> in GH
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
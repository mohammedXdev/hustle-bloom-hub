
import { useState } from 'react';
import { Menu, X, Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              Side Hustle Hub
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Browse Services
            </a>
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Post a Gig
            </a>
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              How it Works
            </a>
            <a href="#" className="text-gray-700 hover:text-brand-blue font-medium transition-colors">
              Community
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center max-w-md mx-8 flex-1">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for services..."
                className="pl-10 bg-gray-50/80 border-0 rounded-2xl focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex rounded-2xl">
              <Bell className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex rounded-2xl">
              <User className="h-5 w-5 text-gray-600" />
            </Button>
            <Button className="btn-primary text-sm py-2 px-6 hidden md:flex">
              Sign Up
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Input
                placeholder="Search for services..."
                className="bg-gray-50 border-0 rounded-2xl"
              />
              <nav className="flex flex-col space-y-3 pt-4">
                <a href="#" className="text-gray-700 hover:text-brand-blue font-medium">
                  Browse Services
                </a>
                <a href="#" className="text-gray-700 hover:text-brand-blue font-medium">
                  Post a Gig
                </a>
                <a href="#" className="text-gray-700 hover:text-brand-blue font-medium">
                  How it Works
                </a>
                <a href="#" className="text-gray-700 hover:text-brand-blue font-medium">
                  Community
                </a>
              </nav>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button variant="outline" className="rounded-2xl">
                  Login
                </Button>
                <Button className="btn-primary">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

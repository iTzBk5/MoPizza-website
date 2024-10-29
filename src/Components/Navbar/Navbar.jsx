import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button.jsx';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-lg backdrop-filter bg-opacity-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">MoPizza</Link> {/* Change to Link */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link> {/* Change to Link */}
              <Link to="/Franchise" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Franchise</Link> {/* Change to Link */}
              <Link to="/Game" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Game</Link> {/* Change to Link */}
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

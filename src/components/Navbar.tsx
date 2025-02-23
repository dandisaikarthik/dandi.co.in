import React from 'react';
import { Menu, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            {!isHome && (
              <button 
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
            )}
            <a href="/" className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <span><img src="/src/dandilogo.png" alt="Logo" className="h-60 w-auto" /></span>
              
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="/logo-design" className="text-gray-600 hover:text-gray-900 transition-colors">
              Logo Design
            </a>
            <a href="/product-design" className="text-gray-600 hover:text-gray-900 transition-colors">
              Product Design
            </a>
            <a href="/poster-design" className="text-gray-600 hover:text-gray-900 transition-colors">
              Poster Design
            </a>
            <a href="/web-design" className="text-gray-600 hover:text-gray-900 transition-colors">
              Web Design
            </a>
          </div>

          <button className="md:hidden">
            <Menu size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
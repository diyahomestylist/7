import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Facebook, Instagram, Youtube, Phone, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePage = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-6 items-center">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={14} />
                <span>10 AM - 10 PM Daily</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-3">
                <Facebook size={16} className="hover:text-yellow-400 cursor-pointer transition-colors" />
                <Instagram size={16} className="hover:text-yellow-400 cursor-pointer transition-colors" />
                <Youtube size={16} className="hover:text-yellow-400 cursor-pointer transition-colors" />
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingCart size={16} className="hover:text-yellow-400 cursor-pointer transition-colors" />
                <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95' 
            : 'bg-gradient-to-r from-yellow-400 to-yellow-300'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div 
                  className="bg-red-600 text-white px-6 py-3 font-bold relative flex flex-col items-center justify-center min-h-16 group-hover:bg-red-700 transition-colors" 
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)',
                    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
                  }}
                >
                  <div className="text-center leading-none">
                    <div className="text-lg font-black">JUS</div>
                    <div className="text-2xl font-black leading-none">MO</div>
                    <div className="text-2xl font-black leading-none">MO</div>
                    <div className="text-xs opacity-90">est</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link 
                to="/" 
                className={`font-semibold transition-colors ${
                  isActivePage('/') 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className={`font-semibold transition-colors ${
                  isActivePage('/about') 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                ABOUT US
              </Link>
              <Link 
                to="/menu" 
                className={`font-semibold transition-colors ${
                  isActivePage('/menu') 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                MENU
              </Link>
              <Link 
                to="/franchise" 
                className={`font-semibold transition-colors ${
                  isActivePage('/franchise') 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                FRANCHISE
              </Link>
              <Link 
                to="/news" 
                className={`font-semibold transition-colors ${
                  isActivePage('/news') 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                NEWS & EVENTS
              </Link>
              <Link 
                to="/outlets" 
                className={`font-semibold transition-colors ${
                  isActivePage('/outlets') 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                OUTLETS
              </Link>
              <Link 
                to="/contact" 
                className={`font-semibold transition-colors ${
                  isActivePage('/contact') 
                    ? 'text-red-600 border-b-2 border-red-600' 
                    : 'text-gray-800 hover:text-red-600'
                }`}
              >
                CONTACT
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100 transition-colors z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4 border-t border-gray-200 mt-3 pt-3">
              <div className="flex flex-col space-y-3">
                {[
                  { path: '/', label: 'HOME' },
                  { path: '/about', label: 'ABOUT US' },
                  { path: '/menu', label: 'MENU' },
                  { path: '/franchise', label: 'FRANCHISE' },
                  { path: '/news', label: 'NEWS & EVENTS' },
                  { path: '/outlets', label: 'OUTLETS' },
                  { path: '/contact', label: 'CONTACT' }
                ].map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={`font-semibold py-2 transition-colors ${
                      isActivePage(item.path) 
                        ? 'text-red-600 bg-red-50 px-3 rounded' 
                        : 'text-gray-800 hover:text-red-600 px-3'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
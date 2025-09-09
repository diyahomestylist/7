import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Facebook, Instagram, Youtube } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <span>Authentic Handcrafted Tibetan Momos</span>
            <span>Served From 10 AM to 10 PM - 7/365</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              <Facebook size={16} className="hover:text-yellow-400 cursor-pointer" />
              <Instagram size={16} className="hover:text-yellow-400 cursor-pointer" />
              <Youtube size={16} className="hover:text-yellow-400 cursor-pointer" />
            </div>
            <ShoppingCart size={16} className="hover:text-yellow-400 cursor-pointer" />
            <span>0</span>
          </div>
        </div>
      </div>

      {/* Main Header - Exact yellow background color */}
      <header className="shadow-lg sticky top-0 z-50" style={{background: 'linear-gradient(90deg, #FFC107 0%, #FFEB3B 100%)'}}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo - Exact copy with flag banner style */}
            <Link to="/" className="flex items-center">
              <div className="relative">
                {/* Flag banner shape - exact replica */}
                <div className="bg-red-600 text-white px-4 py-2 font-bold relative flex flex-col items-center justify-center min-h-16" 
                     style={{
                       clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 50%, calc(100% - 15px) 100%, 0 100%)',
                       background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
                     }}>
                  <div className="text-center leading-none">
                    <div className="text-lg font-black">JUS</div>
                    <div className="text-2xl font-black leading-none">MO</div>
                    <div className="text-2xl font-black leading-none">MO</div>
                    <div className="text-xs">est</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link to="/about" className="text-black hover:text-red-600 font-medium transition-colors">
                ABOUT US
              </Link>
              <Link to="/menu" className="text-black hover:text-red-600 font-medium transition-colors">
                MENU
              </Link>
              <Link to="/franchise" className="text-black hover:text-red-600 font-medium transition-colors">
                FRANCHISE
              </Link>
              <Link to="/news" className="text-black hover:text-red-600 font-medium transition-colors">
                NEWS & EVENTS
              </Link>
              <Link to="/outlets" className="text-black hover:text-red-600 font-medium transition-colors">
                OUTLETS
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/about" 
                  className="text-black hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT US
                </Link>
                <Link 
                  to="/menu" 
                  className="text-black hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  MENU
                </Link>
                <Link 
                  to="/franchise" 
                  className="text-black hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FRANCHISE
                </Link>
                <Link 
                  to="/news" 
                  className="text-black hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NEWS & EVENTS
                </Link>
                <Link 
                  to="/outlets" 
                  className="text-black hover:text-red-600 font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  OUTLETS
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
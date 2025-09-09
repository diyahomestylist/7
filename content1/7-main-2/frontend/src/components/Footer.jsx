import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div 
                className="bg-red-600 text-white px-4 py-2 font-bold relative flex flex-col items-center justify-center min-h-12" 
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)'
                }}
              >
                <div className="text-center leading-none">
                  <div className="text-sm font-black">JUS</div>
                  <div className="text-lg font-black leading-none">MOMO</div>
                  <div className="text-xs opacity-90">est</div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Authentic handcrafted Tibetan Momos made with love and the freshest ingredients. 
              Experience the taste of tradition with every bite.
            </p>
            <div className="flex space-x-4">
              <Facebook 
                size={24} 
                className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" 
              />
              <Instagram 
                size={24} 
                className="text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" 
              />
              <Youtube 
                size={24} 
                className="text-gray-400 hover:text-red-500 cursor-pointer transition-colors" 
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Franchise
                </Link>
              </li>
              <li>
                <Link to="/outlets" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Outlets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Multiple Outlets Across</p>
                  <p className="text-white font-semibold">Mumbai, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">+91 9876543210</p>
                  <p className="text-gray-300 text-sm">Call for orders</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">info@jusmomo.com</p>
                  <p className="text-gray-300 text-sm">Get in touch</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Monday - Sunday</p>
                  <p className="text-gray-300">10:00 AM - 10:00 PM</p>
                  <p className="text-yellow-400 text-sm font-medium">Always Open for You!</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 mt-4">
                <h4 className="text-white font-semibold mb-2">Special Hours</h4>
                <p className="text-gray-300 text-sm">
                  Extended hours during festivals and special occasions. 
                  Follow us on social media for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Jus Momo. All rights reserved. | 
              <span className="text-yellow-400 font-semibold"> India's Best Food Franchise Under ₹2 Lakhs</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Franchise Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
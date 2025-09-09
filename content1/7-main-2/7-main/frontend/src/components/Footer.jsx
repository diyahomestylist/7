import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-red-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to Newsletter</h3>
              <p className="text-red-100">Get weekly offers and discounts.</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-red-600 text-white px-4 py-2 font-bold text-xl transform -skew-x-12">
                  JUS
                </div>
                <div className="bg-red-700 text-white px-4 py-2 font-bold text-xl transform -skew-x-12 -ml-2">
                  MOMO
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Authentic handcrafted Tibetan Momos made with love and the freshest ingredients.
              </p>
              <div className="flex space-x-4">
                <Facebook size={20} className="hover:text-yellow-400 cursor-pointer transition-colors" />
                <Instagram size={20} className="hover:text-yellow-400 cursor-pointer transition-colors" />
                <Youtube size={20} className="hover:text-yellow-400 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/menu" className="text-gray-400 hover:text-yellow-400 transition-colors">Menu</Link></li>
                <li><Link to="/franchise" className="text-gray-400 hover:text-yellow-400 transition-colors">Franchise</Link></li>
                <li><Link to="/news" className="text-gray-400 hover:text-yellow-400 transition-colors">News & Events</Link></li>
                <li><Link to="/outlets" className="text-gray-400 hover:text-yellow-400 transition-colors">Outlets</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-yellow-400" />
                  <span className="text-gray-400">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-yellow-400" />
                  <span className="text-gray-400">info@jusmomo.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-yellow-400" />
                  <span className="text-gray-400">Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Clock size={18} className="text-yellow-400" />
                  <div>
                    <p className="text-gray-400">Daily</p>
                    <p className="text-white font-semibold">10 AM - 10 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Jus Momo. All rights reserved. | Developed by Dineamic Foods & Beverages</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
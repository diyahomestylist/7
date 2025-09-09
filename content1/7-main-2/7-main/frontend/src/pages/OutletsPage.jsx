import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock } from 'lucide-react';
import { outlets } from '../data/mockData';

const OutletsPage = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Outlets</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find a Jus Momo outlet near you
          </p>
        </div>
      </section>

      {/* Outlets List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outlets.map((outlet) => (
              <div key={outlet.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{outlet.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin size={18} className="text-red-600" />
                    <span className="text-gray-600">{outlet.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-red-600" />
                    <span className="text-gray-600">{outlet.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock size={18} className="text-red-600" />
                    <span className="text-gray-600">{outlet.hours}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutletsPage;
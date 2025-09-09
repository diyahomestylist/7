import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { franchiseInfo } from '../data/mockData';

const FranchisePage = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Franchise Opportunity</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join India's best food franchise under ₹2 lakhs
          </p>
        </div>
      </section>

      {/* Franchise Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Jus Momo Franchise?</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Investment</h3>
                  <p className="text-gray-700">{franchiseInfo.investment}</p>
                </div>
                <div className="bg-yellow-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-yellow-600 mb-2">ROI</h3>
                  <p className="text-gray-700">{franchiseInfo.roi}</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Support</h3>
                  <p className="text-gray-700">{franchiseInfo.support}</p>
                </div>
                <div className="bg-blue-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Royalty</h3>
                  <p className="text-gray-700">{franchiseInfo.royalty}</p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {franchiseInfo.description}
              </p>

              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply for Franchise
              </button>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" 
                alt="Restaurant interior"
                className="rounded-lg shadow-xl mb-6"
              />
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <input 
                    type="tel" 
                    placeholder="Your Phone"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <textarea 
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  ></textarea>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FranchisePage;
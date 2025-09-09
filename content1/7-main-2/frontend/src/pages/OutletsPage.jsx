import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MapPin, Phone, Clock, Star, Navigation, Search, Filter } from 'lucide-react';

const OutletsPage = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOutlet, setSelectedOutlet] = useState(null);

  const cities = [
    { id: 'all', name: 'All Cities', count: 105 },
    { id: 'mumbai', name: 'Mumbai', count: 25 },
    { id: 'delhi', name: 'Delhi NCR', count: 20 },
    { id: 'bangalore', name: 'Bangalore', count: 18 },
    { id: 'pune', name: 'Pune', count: 15 },
    { id: 'hyderabad', name: 'Hyderabad', count: 12 },
    { id: 'chennai', name: 'Chennai', count: 10 },
    { id: 'kolkata', name: 'Kolkata', count: 5 }
  ];

  const outlets = [
    {
      id: 1,
      name: "Jus Momo Bandra West",
      address: "Shop No. 12, Linking Road, Bandra West, Mumbai - 400050",
      city: "mumbai",
      phone: "+91 9876543210",
      rating: 4.8,
      reviews: 324,
      hours: "10:00 AM - 10:00 PM",
      type: "Flagship Store",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      features: ["Dine-in", "Takeaway", "Home Delivery", "Parking Available"],
      coordinates: { lat: 19.0596, lng: 72.8295 }
    },
    {
      id: 2,
      name: "Jus Momo Connaught Place",
      address: "Block A, Inner Circle, Connaught Place, New Delhi - 110001",
      city: "delhi",
      phone: "+91 9876543211",
      rating: 4.7,
      reviews: 567,
      hours: "10:00 AM - 11:00 PM",
      type: "Premium Outlet",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      features: ["Dine-in", "Takeaway", "Home Delivery", "AC Seating"],
      coordinates: { lat: 28.6315, lng: 77.2167 }
    },
    {
      id: 3,
      name: "Jus Momo Brigade Road",
      address: "145, Brigade Road, Bangalore - 560025",
      city: "bangalore",
      phone: "+91 9876543212",
      rating: 4.6,
      reviews: 289,
      hours: "10:00 AM - 10:30 PM",
      type: "Express Outlet",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      features: ["Takeaway", "Home Delivery", "Quick Service"],
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    {
      id: 4,
      name: "Jus Momo FC Road",
      address: "Shop 7, FC Road, Pune - 411005",
      city: "pune",
      phone: "+91 9876543213",
      rating: 4.9,
      reviews: 445,
      hours: "10:00 AM - 10:00 PM",
      type: "Popular Outlet",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      features: ["Dine-in", "Takeaway", "Home Delivery", "Student Friendly"],
      coordinates: { lat: 18.5204, lng: 73.8567 }
    },
    {
      id: 5,
      name: "Jus Momo Hitech City",
      address: "Cyber Towers, HITEC City, Hyderabad - 500081",
      city: "hyderabad",
      phone: "+91 9876543214",
      rating: 4.5,
      reviews: 178,
      hours: "10:00 AM - 10:00 PM",
      type: "Corporate Outlet",
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
      features: ["Takeaway", "Corporate Catering", "Home Delivery"],
      coordinates: { lat: 17.4475, lng: 78.3563 }
    },
    {
      id: 6,
      name: "Jus Momo Express Avenue",
      address: "Express Avenue Mall, Royapettah, Chennai - 600014",
      city: "chennai",
      phone: "+91 9876543215",
      rating: 4.4,
      reviews: 234,
      hours: "10:00 AM - 10:00 PM",
      type: "Mall Outlet",
      image: "https://images.unsplash.com/photo-1567521464027-f96e9c2e5c7a?w=400&h=300&fit=crop",
      features: ["Dine-in", "Takeaway", "Food Court", "Family Friendly"],
      coordinates: { lat: 13.0827, lng: 80.2707 }
    }
  ];

  const filteredOutlets = outlets.filter(outlet => {
    const matchesCity = selectedCity === 'all' || outlet.city === selectedCity;
    const matchesSearch = outlet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         outlet.address.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Outlets</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Find your nearest Jus Momo outlet and enjoy authentic Tibetan momos
            </p>
            <div className="text-4xl font-bold text-yellow-300">
              105+ Outlets Across India
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search outlets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* City Filters */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name} ({city.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Outlets Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOutlets.map((outlet) => (
              <div key={outlet.id} className="bg-white rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300 overflow-hidden group">
                {/* Image */}
                <div className="relative">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      outlet.type === 'Flagship Store' ? 'bg-gold-500' :
                      outlet.type === 'Premium Outlet' ? 'bg-purple-500' :
                      outlet.type === 'Popular Outlet' ? 'bg-green-500' :
                      'bg-blue-500'
                    }`}>
                      {outlet.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{outlet.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {outlet.name}
                  </h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{outlet.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Phone size={16} className="text-gray-400" />
                      <p className="text-gray-600 text-sm">{outlet.phone}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-gray-400" />
                      <p className="text-gray-600 text-sm">{outlet.hours}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {outlet.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                      <Navigation size={16} />
                      <span>Get Directions</span>
                    </button>
                    <button 
                      onClick={() => setSelectedOutlet(outlet)}
                      className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredOutlets.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <MapPin size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No outlets found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* City Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Presence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jus Momo is rapidly expanding across India, bringing authentic momos to food lovers everywhere
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {cities.slice(1).map((city) => (
              <div key={city.id} className="text-center group cursor-pointer">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {city.count}
                  </div>
                  <div className="text-gray-800 font-semibold text-sm">
                    {city.name}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your city? We're expanding rapidly!</p>
            <button className="btn-modern">
              Request New Outlet
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Find Us on <span className="gradient-text">Map</span>
            </h2>
            <p className="text-xl text-gray-600">
              Interactive map coming soon - locate your nearest Jus Momo outlet
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-custom-lg p-8 text-center">
            <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-500">Coming Soon - Find outlets near you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outlet Detail Modal */}
      {selectedOutlet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-full overflow-y-auto">
            <div className="relative">
              <img
                src={selectedOutlet.image}
                alt={selectedOutlet.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedOutlet(null)}
                className="absolute top-4 right-4 bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedOutlet.name}</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-purple-600 mt-1" />
                  <p className="text-gray-700">{selectedOutlet.address}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-purple-600" />
                  <p className="text-gray-700">{selectedOutlet.phone}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-purple-600" />
                  <p className="text-gray-700">{selectedOutlet.hours}</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-yellow-400 fill-current" />
                  <p className="text-gray-700">{selectedOutlet.rating} stars ({selectedOutlet.reviews} reviews)</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Available Services:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedOutlet.features.map((feature, index) => (
                    <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Get Directions
                </button>
                <button className="flex-1 border border-purple-600 text-purple-600 py-3 px-6 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default OutletsPage;
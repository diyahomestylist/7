import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Star, Heart, ShoppingCart, Filter, Search } from 'lucide-react';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Items', count: 18 },
    { id: 'steamed', name: 'Steamed Momos', count: 6 },
    { id: 'fried', name: 'Fried & Kurkure', count: 5 },
    { id: 'fusion', name: 'Fusion Items', count: 4 },
    { id: 'beverages', name: 'Beverages', count: 3 }
  ];

  const menuItems = [
    {
      id: 1,
      name: "Classic Steamed Chicken Momos",
      description: "Traditional Tibetan momos with juicy chicken filling, served with spicy chutney",
      price: 120,
      originalPrice: 150,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png",
      category: "steamed",
      rating: 4.8,
      reviews: 324,
      isVeg: false,
      spiceLevel: 2,
      popular: true
    },
    {
      id: 2,
      name: "Vegetable Steamed Momos",
      description: "Fresh mixed vegetables with aromatic spices, wrapped in soft dough",
      price: 100,
      originalPrice: 120,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png",
      category: "steamed",
      rating: 4.6,
      reviews: 256,
      isVeg: true,
      spiceLevel: 1,
      popular: false
    },
    {
      id: 3,
      name: "Signature Kurkure Momos",
      description: "Crispy golden momos with special kurkure coating, served with tangy sauce",
      price: 150,
      originalPrice: 180,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/kurkuremomo.png",
      category: "fried",
      rating: 4.9,
      reviews: 567,
      isVeg: false,
      spiceLevel: 3,
      popular: true
    },
    {
      id: 4,
      name: "Mo Pav Special",
      description: "Crunchy kurkure momo placed inside soft pav bun with special sauce",
      price: 80,
      originalPrice: 100,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Mopav.png",
      category: "fusion",
      rating: 4.7,
      reviews: 189,
      isVeg: false,
      spiceLevel: 2,
      popular: true
    },
    {
      id: 5,
      name: "Momo Maggick",
      description: "Hot maggi noodles with saucy momos in choice of 4 flavours",
      price: 180,
      originalPrice: 220,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Momo_maggick.png",
      category: "fusion",
      rating: 4.6,
      reviews: 276,
      isVeg: false,
      spiceLevel: 2,
      popular: false
    },
    // Add more items...
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.popular - a.popular || b.rating - a.rating;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Complete Menu</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover our authentic Tibetan momos and fusion delights, crafted with love and the finest ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300 overflow-hidden group">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {item.popular && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Popular
                      </span>
                    )}
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.isVeg 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {item.isVeg ? '🟢 VEG' : '🔴 NON-VEG'}
                    </div>
                  </div>

                  {/* Wishlist */}
                  <button className="absolute top-4 right-4 p-2 bg-white text-gray-600 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                    <Heart size={18} />
                  </button>

                  {/* Discount */}
                  {item.originalPrice > item.price && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                        SAVE ₹{item.originalPrice - item.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-red-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Spice Level */}
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-gray-600 mr-2">Spice Level:</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((level) => (
                        <div
                          key={level}
                          className={`w-2 h-2 rounded-full ${
                            level <= item.spiceLevel ? 'bg-red-500' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Price and Add to Cart */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-red-600">₹{item.price}</span>
                      {item.originalPrice > item.price && (
                        <span className="ml-2 text-lg text-gray-400 line-through">
                          ₹{item.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2">
                      <ShoppingCart size={16} />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-modern px-8 py-4">
              Load More Items
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
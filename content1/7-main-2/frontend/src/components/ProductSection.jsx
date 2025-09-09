import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Eye } from 'lucide-react';

const ProductSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "Steamed Momos",
      description: "Delicious, Mouthwatering Handcrafted Momos Filled With Juicy Veg and Non-Veg Filling",
      price: 120,
      originalPrice: 150,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png",
      category: "steamed",
      rating: 4.8,
      reviews: 324,
      badge: "Popular",
      isVeg: false
    },
    {
      id: 2,
      name: "Kurkure Momos",
      description: "Juicy Momos Bathed in JUS MOMO'S Signature Kurkure Breading and Fried to a Crispy Golden Delight",
      price: 150,
      originalPrice: 180,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/kurkuremomo.png",
      category: "fried",
      rating: 4.9,
      reviews: 567,
      badge: "Signature",
      isVeg: false
    },
    {
      id: 3,
      name: "Mo Pav",
      description: "Jus Momo's Signature Crunchy Kurkure Momo Placed Inside a Soft Pav Bun",
      price: 80,
      originalPrice: 100,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Mopav.png",
      category: "fusion",
      rating: 4.7,
      reviews: 189,
      badge: "Trending",
      isVeg: false
    },
    {
      id: 4,
      name: "Momo Maggick",
      description: "Piping Hot Maggi Noodles Served With Our Saucy Momos in a Choice of 4 Tantalizing Flavours",
      price: 180,
      originalPrice: 220,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Momo_maggick.png",
      category: "fusion",
      rating: 4.6,
      reviews: 276,
      badge: "New",
      isVeg: false
    },
    {
      id: 5,
      name: "Veg Momos",
      description: "Fresh vegetable filling with aromatic spices wrapped in soft dough",
      price: 100,
      originalPrice: 120,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png",
      category: "steamed",
      rating: 4.5,
      reviews: 445,
      badge: "",
      isVeg: true
    },
    {
      id: 6,
      name: "Cheese Momos",
      description: "Delicious momos filled with melted cheese and herbs",
      price: 140,
      originalPrice: 160,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/kurkuremomo.png",
      category: "steamed",
      rating: 4.4,
      reviews: 298,
      badge: "",
      isVeg: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Items', count: products.length },
    { id: 'steamed', label: 'Steamed', count: products.filter(p => p.category === 'steamed').length },
    { id: 'fried', label: 'Fried', count: products.filter(p => p.category === 'fried').length },
    { id: 'fusion', label: 'Fusion', count: products.filter(p => p.category === 'fusion').length },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 font-semibold rounded-full text-sm mb-4">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Some of our <span className="gradient-text">exclusive items</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our delicious range of authentic Tibetan momos, crafted with love and the finest ingredients
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label} 
              <span className="ml-2 text-sm opacity-75">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-500 overflow-hidden card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      product.badge === 'Popular' ? 'bg-green-500' :
                      product.badge === 'Signature' ? 'bg-purple-500' :
                      product.badge === 'Trending' ? 'bg-blue-500' :
                      'bg-orange-500'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    product.isVeg 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.isVeg ? '🟢 VEG' : '🔴 NON-VEG'}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      favorites.has(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart size={18} fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <button className="p-2 bg-white text-gray-600 rounded-full hover:bg-gray-50 transition-colors">
                    <Eye size={18} />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      SAVE ₹{product.originalPrice - product.price}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-600">₹{product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-400 line-through">₹{product.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2 group">
                    <ShoppingCart size={16} />
                    <span className="group-hover:hidden">Add</span>
                    <span className="hidden group-hover:inline">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-modern text-lg px-8 py-4">
            View Complete Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
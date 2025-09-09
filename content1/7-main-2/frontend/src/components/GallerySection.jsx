import React, { useState } from 'react';
import { Instagram, Heart, Share2, Eye } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png",
      title: "Classic Steamed Momos",
      likes: 245,
      type: "food"
    },
    {
      id: 2,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/kurkuremomo.png",
      title: "Signature Kurkure Momos",
      likes: 389,
      type: "food"
    },
    {
      id: 3,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Mopav.png",
      title: "Innovative Mo Pav",
      likes: 167,
      type: "food"
    },
    {
      id: 4,
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Momo_maggick.png",
      title: "Momo Maggick Special",
      likes: 298,
      type: "food"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=400&fit=crop",
      title: "Fresh Ingredients",
      likes: 156,
      type: "ingredient"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      title: "Cooking Process",
      likes: 203,
      type: "process"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop",
      title: "Restaurant Ambiance",
      likes: 124,
      type: "restaurant"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop",
      title: "Happy Customers",
      likes: 345,
      type: "customers"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop",
      title: "Chef's Special",
      likes: 278,
      type: "food"
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 font-semibold rounded-full text-sm mb-4">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <Instagram className="inline-block mr-3 text-pink-500" size={48} />
            Follow us on <span className="gradient-text">Instagram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out our delicious creations and behind-the-scenes moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${
                index % 7 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
              } ${index % 5 === 0 ? 'md:col-span-2' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => openModal(item)}
            >
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-80' : 'opacity-40'
                }`}>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Heart size={16} className="text-red-400" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover Effects */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                      <Instagram size={32} className="text-white" />
                    </div>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${
                    item.type === 'food' ? 'bg-red-500' :
                    item.type === 'process' ? 'bg-blue-500' :
                    item.type === 'restaurant' ? 'bg-green-500' :
                    item.type === 'customers' ? 'bg-purple-500' :
                    'bg-orange-500'
                  }`}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl shadow-custom-lg p-8 max-w-2xl mx-auto">
            <Instagram size={48} className="text-pink-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Follow us for more delicious updates!
            </h3>
            <p className="text-gray-600 mb-6">
              Stay connected with us on Instagram for the latest menu items, 
              behind-the-scenes content, and special offers.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              @jusmomo_official
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              ✕
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Heart size={20} className="text-red-400" />
                  <span>{selectedImage.likes} likes</span>
                </div>
                <button className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-full hover:bg-opacity-30 transition-all">
                  <Share2 size={16} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
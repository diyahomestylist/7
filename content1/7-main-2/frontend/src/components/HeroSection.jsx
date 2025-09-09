import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Yummy delicious authentic",
      subtitle: "Tibetan Momos",
      description: "Double bite sized parcels with a healthy veg and non veg filling",
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png",
      bgColor: "from-red-600 to-red-800"
    },
    {
      id: 2,
      title: "Crunchy",
      subtitle: "Kurkure Momos", 
      description: "Juicy Momos Bathed in JUS MOMO'S Signature Kurkure Breading and Fried to a Crispy Golden Delight",
      image: "https://jusmomo.com/wp-content/uploads/2023/04/kurkuremomo.png",
      bgColor: "from-orange-600 to-red-700"
    },
    {
      id: 3,
      title: "Welcome",
      subtitle: "Handcrafted with Love",
      description: "Authentic handcrafted Tibetan Momos made with love and the freshest ingredients",
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Mopav.png",
      bgColor: "from-red-700 to-red-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source 
            src="https://jusmomo.com/wp-content/uploads/2023/04/pexels-shotpot-7652535-3840x2160-50fps.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Dynamic overlay based on current slide */}
        <div 
          className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgColor} bg-opacity-75 transition-all duration-1000`}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-white animate-fade-in-left">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-full text-sm">
                  {slides[currentSlide].title}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow">
                {slides[currentSlide].subtitle}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-shadow-light max-w-2xl">
                {slides[currentSlide].description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="btn-modern flex items-center justify-center space-x-2 text-lg px-8 py-4">
                  <ShoppingCart size={20} />
                  <span>Order Now</span>
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Menu
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-yellow-400 w-8' 
                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Image Content */}
            <div className="hidden lg:flex justify-center items-center animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-3xl opacity-30 scale-110"></div>
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].subtitle}
                  className="relative z-10 max-w-md w-full h-auto animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-black bg-opacity-20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Video Loading Indicator */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-30">
          <div className="text-white text-center">
            <div className="spinner mb-4"></div>
            <p>Loading amazing content...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
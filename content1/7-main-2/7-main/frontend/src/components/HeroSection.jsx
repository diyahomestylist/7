import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background - Using the exact same video from original */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://jusmomo.com/wp-content/uploads/2023/04/pexels-shotpot-7652535-3840x2160-50fps.mp4" type="video/mp4" />
          {/* Fallback image */}
        </video>
        {/* Video overlay - matching original darkness */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content - Exact positioning and styling */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Exact text styling from original */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight" 
                style={{fontFamily: 'Arial, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
              Yummy delicious authentic
              <br />
              <span className="text-yellow-300">Tibetan momos</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed" 
               style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
              Double bite sized parcels with a healthy veg and non veg filling
            </p>
            {/* Buttons matching original style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-sm font-semibold text-lg transition-all duration-300 shadow-lg">
                Start Shopping Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { galleryImages } from '../data/mockData';

const GallerySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Gallery Images - Infinite Scroll Effect */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-x space-x-4">
            {/* First set of images */}
            {galleryImages.map((image) => (
              <div key={image.id} className="flex-shrink-0 w-80 h-60 relative group cursor-pointer">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {galleryImages.map((image) => (
              <div key={`duplicate-${image.id}`} className="flex-shrink-0 w-80 h-60 relative group cursor-pointer">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
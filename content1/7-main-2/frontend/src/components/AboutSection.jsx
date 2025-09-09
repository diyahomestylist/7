import React from 'react';
import { Award, Users, MapPin, Utensils } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "2021",
      label: "Established",
      description: "Years of authentic taste"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "Happy Franchisees",
      description: "Growing family"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: "100+",
      label: "Outlets",
      description: "Across India"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      number: "25+",
      label: "Menu Items",
      description: "Delicious varieties"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl rotate-3 opacity-10"></div>
            <div className="relative bg-white rounded-3xl shadow-custom-lg overflow-hidden">
              <img
                src="https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png"
                alt="Jus Momo Delicious Momos"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Authentic Taste</h3>
                <p className="text-gray-200">Handcrafted with tradition</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 font-semibold rounded-full text-sm mb-4">
                About Jus Momo
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to 
                <span className="gradient-text"> Jus Momo</span>
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong className="text-red-600">'Jus MOMO'</strong> is the first trademarked flagship brand of 
                  Dineamic Foods & Beverages offering a variety of authentic handcrafted Tibetan Momos 
                  artfully created by chefs using the freshest of ingredients.
                </p>
                <p>
                  Launched in 2021, <strong className="text-red-600">Jus Momo offers excellent opportunities 
                  for franchise owners</strong> by providing affordable investment options with good ROI 
                  and simple menu with a variety of choices.
                </p>
                <p className="text-xl font-semibold text-red-600">
                  This is one of India's best food franchises under ₹2 lakhs.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-modern">
                Explore Franchise
              </button>
              <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-custom group-hover:shadow-custom-lg transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                  <div className="text-red-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-800 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
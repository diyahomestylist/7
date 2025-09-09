import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, Users, MapPin, Target, Heart, Utensils, TrendingUp, Globe } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authenticity",
      description: "We preserve traditional Tibetan recipes and cooking methods passed down through generations."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Quality",
      description: "Only the freshest ingredients and highest quality standards in every momo we serve."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community", 
      description: "Building a family of franchisees and customers who share our passion for great food."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly evolving our menu while respecting traditional flavors and techniques."
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Jus Momo Founded",
      description: "Started with a vision to bring authentic Tibetan momos to India"
    },
    {
      year: "2022", 
      title: "First Franchise",
      description: "Launched franchise program with excellent ROI model"
    },
    {
      year: "2023",
      title: "50+ Outlets",
      description: "Expanded to 50+ franchisee outlets across major cities"
    },
    {
      year: "2024",
      title: "100+ Locations",
      description: "Became one of India's fastest-growing food franchises"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Visionary leader with 15+ years in food industry"
    },
    {
      name: "Priya Sharma",
      role: "Head Chef",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9c9c9cf?w=300&h=300&fit=crop&crop=face",
      description: "Expert in Tibetan cuisine with authentic recipes"
    },
    {
      name: "Amit Patel",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      description: "Ensures quality consistency across all outlets"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-400 rounded-full opacity-10"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              About <span className="text-yellow-300">Jus Momo</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-shadow-light">
              Bringing authentic Tibetan momos to India with love, tradition, and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                Our Story
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Join Our Family
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 font-semibold rounded-full text-sm mb-6">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Tradition to <span className="gradient-text">Innovation</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong className="text-red-600">'Jus MOMO'</strong> is the first trademarked flagship brand 
                  of Dineamic Foods & Beverages, born from a passion for authentic Tibetan cuisine and a 
                  vision to make it accessible across India.
                </p>
                <p>
                  Our journey began in 2021 with a simple mission: to preserve the authentic taste of 
                  traditional Tibetan momos while innovating with modern flavors and fusion concepts. 
                  Every momo is handcrafted by skilled chefs using time-honored techniques and the 
                  freshest ingredients.
                </p>
                <p>
                  What started as a single outlet has grown into one of India's most successful food 
                  franchise networks, with over 100 locations and counting. Our success lies in our 
                  commitment to quality, authenticity, and providing excellent franchise opportunities.
                </p>
                <p className="text-xl font-semibold text-red-600">
                  Today, we're proud to be recognized as one of India's best food franchises under ₹2 lakhs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl rotate-3 opacity-10"></div>
              <img
                src="https://jusmomo.com/wp-content/uploads/2023/04/Chicken-Momo-1.png"
                alt="Authentic Jus Momo"
                className="relative z-10 w-full rounded-3xl shadow-custom-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 font-semibold rounded-full text-sm mb-4">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from recipe development to franchise support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-custom text-center group hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-2">
                <div className="text-red-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Globe className="inline-block mr-3 text-blue-500" size={48} />
              Growth <span className="gradient-text">Milestones</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-12 group">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {milestone.year}
                </div>
                <div className="ml-8 flex-grow">
                  <div className="bg-white rounded-2xl p-6 shadow-custom group-hover:shadow-custom-lg transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 font-semibold rounded-full text-sm mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the <span className="gradient-text">Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals driving our mission to serve authentic and delicious momos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-custom group hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                2021
              </div>
              <div className="text-lg text-red-100">
                Established
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                100+
              </div>
              <div className="text-lg text-red-100">
                Outlets
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                50,000+
              </div>
              <div className="text-lg text-red-100">
                Happy Customers
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                ₹2L
              </div>
              <div className="text-lg text-red-100">
                Investment Under
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
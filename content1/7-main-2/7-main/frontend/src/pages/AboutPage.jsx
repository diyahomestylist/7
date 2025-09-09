import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { franchiseInfo } from '../data/mockData';

const AboutPage = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Jus Momo</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The first trademarked flagship brand of Dineamic Foods & Beverages
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  'Jus MOMO' is the first trademarked flagship brand of Dineamic Foods & Beverages 
                  offering a variety of authentic handcrafted Tibetan Momos artfully created by chefs 
                  using the freshest of ingredients in both veg and non veg to consumers tastes and preferences.
                </p>
                <p>
                  Launched in 2021, Jus Momo offers excellent opportunities for franchise owners by 
                  providing affordable investment options with good ROI and simple menu with a variety 
                  of choices that don't require employees hired for any particular abilities.
                </p>
                <p>
                  Jus Momo not only provides support and assistance to franchisees, including staff 
                  training to help them establish the store but also does not require them to fulfil 
                  any financial requirement or pay royalties year after year.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&h=400&fit=crop" 
                alt="Momo preparation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
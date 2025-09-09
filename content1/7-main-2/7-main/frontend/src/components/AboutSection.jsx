import React from 'react';
import { franchiseInfo } from '../data/mockData';

const AboutSection = () => {
  return (
    <section className="py-20" style={{background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 50%, #FFE0B2 100%)'}}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Empty for spacing to match original */}
          <div className="hidden lg:block"></div>
          
          {/* Right side - Content with exact styling */}
          <div className="text-white p-8 md:p-12 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500" 
               style={{
                 background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
                 boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
               }}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                <span className="text-yellow-300 font-bold">
                  'Jus MOMO' is the first trademarked flagship brand of Dineamic Foods & Beverages
                </span> offering a variety of authentic handcrafted Tibetan Momos artfully created by chefs using the freshest of ingredients in both veg and non veg to consumers tastes and preferences.
              </p>
              
              <p className="text-lg leading-relaxed">
                Launched in 2021, <span className="text-yellow-300 font-bold">
                  Jus Momo offers excellent opportunities for franchise owners by providing affordable investment options with good ROI
                </span> and simple menu with a variety of choices. that don't require employees hired for any particular abilities.
              </p>
              
              <p className="text-lg leading-relaxed">
                Jus Momo not only provides support and assistance to franchisees, including staff training to help them establish the store.but also does not require them to fulfil any financial requirement or pay royalties year after year. <span className="text-yellow-300 font-bold">
                  This is one of India's best food franchises under ₹2 lakhs.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DollarSign, TrendingUp, Users, Award, CheckCircle, Phone, Mail, Calculator } from 'lucide-react';

const FranchisePage = () => {
  const [calculatorData, setCalculatorData] = useState({
    investment: 200000,
    monthlyRevenue: 150000,
    expenses: 90000
  });

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Low Investment",
      description: "Start your franchise with investment under ₹2 lakhs",
      highlight: "₹1.5L - ₹2L"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High ROI",
      description: "Guaranteed return on investment within 12-18 months",
      highlight: "ROI: 35-45%"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Full Support",
      description: "Complete training, marketing, and operational support",
      highlight: "24/7 Support"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Model",
      description: "100+ successful outlets across India",
      highlight: "100+ Outlets"
    }
  ];

  const packages = [
    {
      name: "Express Kiosk",
      investment: "₹1.5 - ₹1.8 Lakhs",
      space: "80-120 sq ft",
      features: [
        "Complete setup & equipment",
        "Initial inventory",
        "Staff training (5 days)",
        "Marketing materials",
        "Operations manual"
      ],
      popular: false
    },
    {
      name: "Standard Outlet",
      investment: "₹1.8 - ₹2.2 Lakhs",
      space: "200-300 sq ft",
      features: [
        "Complete setup & equipment",
        "Initial inventory",
        "Staff training (7 days)",
        "Grand opening support",
        "Marketing campaigns",
        "Operations manual",
        "POS system"
      ],
      popular: true
    },
    {
      name: "Premium Store",
      investment: "₹2.2 - ₹2.5 Lakhs",
      space: "400-600 sq ft",
      features: [
        "Premium setup & equipment",
        "Extended inventory",
        "Staff training (10 days)",
        "Grand opening support",
        "Dedicated marketing support",
        "Operations manual",
        "Advanced POS system",
        "Customer seating area"
      ],
      popular: false
    }
  ];

  const requirements = [
    "Minimum 80 sq ft space in high footfall area",
    "Investment capacity of ₹1.5 - ₹2.5 lakhs",
    "Entrepreneurial mindset and dedication",
    "Local market knowledge preferred",
    "Ability to manage day-to-day operations"
  ];

  const support = [
    "Site selection assistance",
    "Store design and setup",
    "Equipment procurement",
    "Staff recruitment and training",
    "Marketing and promotional support",
    "Operations manual and SOPs",
    "Regular quality audits",
    "24/7 helpline support"
  ];

  const calculateROI = () => {
    const monthlyProfit = calculatorData.monthlyRevenue - calculatorData.expenses;
    const annualProfit = monthlyProfit * 12;
    const roi = ((annualProfit / calculatorData.investment) * 100).toFixed(1);
    const paybackMonths = Math.ceil(calculatorData.investment / monthlyProfit);
    
    return { monthlyProfit, annualProfit, roi, paybackMonths };
  };

  const roiResults = calculateROI();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-400 rounded-full opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full text-sm mb-6">
              Franchise Opportunity
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              Join India's Fastest Growing <span className="text-yellow-300">Momo Franchise</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-shadow-light">
              Start your own Jus Momo outlet with investment under ₹2 lakhs and guaranteed ROI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-600 font-semibold rounded-full text-sm mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Franchise <span className="gradient-text">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a proven business model with comprehensive support and guaranteed returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-custom hover:shadow-custom-lg transition-all duration-300 group hover:-translate-y-2">
                <div className="text-green-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="text-2xl font-bold text-green-600">
                  {benefit.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm mb-4">
              Investment Options
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="gradient-text">Package</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the franchise package that best fits your investment capacity and space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 shadow-custom hover:shadow-custom-lg transition-all duration-300 relative ${
                pkg.popular ? 'ring-4 ring-green-200 transform scale-105' : ''
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-6 py-2 rounded-full font-bold text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {pkg.name}
                </h3>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {pkg.investment}
                  </div>
                  <div className="text-gray-600">
                    Space: {pkg.space}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-bold text-lg transition-colors ${
                  pkg.popular 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Choose This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 font-semibold rounded-full text-sm mb-4">
                ROI Calculator
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Calculate Your <span className="gradient-text">Returns</span>
              </h2>
              <p className="text-xl text-gray-600">
                See how much you can earn with your Jus Momo franchise
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-custom-lg">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator Inputs */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Calculator className="mr-3 text-green-600" size={28} />
                    Your Investment Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Initial Investment (₹)
                    </label>
                    <input
                      type="number"
                      value={calculatorData.investment}
                      onChange={(e) => setCalculatorData({...calculatorData, investment: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Monthly Revenue (₹)
                    </label>
                    <input
                      type="number"
                      value={calculatorData.monthlyRevenue}
                      onChange={(e) => setCalculatorData({...calculatorData, monthlyRevenue: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Monthly Expenses (₹)
                    </label>
                    <input
                      type="number"
                      value={calculatorData.expenses}
                      onChange={(e) => setCalculatorData({...calculatorData, expenses: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Your Projected Returns</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-1">Monthly Profit</div>
                      <div className="text-2xl font-bold">₹{roiResults.monthlyProfit.toLocaleString()}</div>
                    </div>

                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-1">Annual Profit</div>
                      <div className="text-2xl font-bold">₹{roiResults.annualProfit.toLocaleString()}</div>
                    </div>

                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-1">ROI Percentage</div>
                      <div className="text-3xl font-bold text-yellow-300">{roiResults.roi}%</div>
                    </div>

                    <div className="bg-white bg-opacity-20 rounded-lg p-4">
                      <div className="text-sm opacity-80 mb-1">Payback Period</div>
                      <div className="text-2xl font-bold">{roiResults.paybackMonths} months</div>
                    </div>
                  </div>

                  <div className="mt-6 text-sm opacity-90">
                    * These are estimated figures based on average performance of existing outlets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Franchise <span className="gradient-text">Requirements</span>
              </h2>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-custom">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Our <span className="gradient-text">Support</span>
              </h2>
              <div className="space-y-4">
                {support.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-4 shadow-custom">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="text-yellow-300">Franchise Journey?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the Jus Momo family today and become part of India's fastest-growing food franchise network
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call: +91 9876543210</span>
            </a>
            <a
              href="mailto:franchise@jusmomo.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FranchisePage;
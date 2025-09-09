import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 9876543210", "+91 9876543211"],
      description: "Call us for quick orders and inquiries"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@jusmomo.com", "franchise@jusmomo.com"],
      description: "Send us your questions and feedback"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Multiple Outlets Across", "Mumbai, Delhi, Bangalore"],
      description: "Visit our nearest outlet"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: ["Monday - Sunday", "10:00 AM - 10:00 PM"],
      description: "Always open to serve you"
    }
  ];

  const locations = [
    {
      city: "Mumbai",
      outlets: 25,
      address: "Multiple locations across Mumbai",
      phone: "+91 9876543210"
    },
    {
      city: "Delhi",
      outlets: 18,
      address: "Multiple locations across Delhi NCR",
      phone: "+91 9876543211"
    },
    {
      city: "Bangalore",
      outlets: 15,
      address: "Multiple locations across Bangalore",
      phone: "+91 9876543212"
    },
    {
      city: "Pune",
      outlets: 12,
      address: "Multiple locations across Pune",
      phone: "+91 9876543213"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-custom-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a <span className="gradient-text">message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="franchise">Franchise Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="complaint">Complaint</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn-modern w-full flex items-center justify-center space-x-2 text-lg py-4"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact <span className="gradient-text">Information</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-custom hover:shadow-custom-lg transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="text-red-600 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                          {info.title}
                        </h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-gray-800 font-semibold">
                              {detail}
                            </p>
                          ))}
                        </div>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-4">Follow Us</h3>
                <p className="mb-4 text-red-100">
                  Stay connected for latest updates, offers, and delicious content!
                </p>
                <div className="flex space-x-4">
                  <Facebook size={24} className="hover:text-blue-300 cursor-pointer transition-colors" />
                  <Instagram size={24} className="hover:text-pink-300 cursor-pointer transition-colors" />
                  <Youtube size={24} className="hover:text-red-300 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-full text-sm mb-4">
              Our Locations
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find us <span className="gradient-text">near you</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have outlets across major cities in India. Visit your nearest Jus Momo outlet!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-custom-lg transition-all duration-300 group">
                <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {location.outlets}+
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {location.city}
                </h3>
                <p className="text-gray-600 mb-3 text-sm">
                  {location.address}
                </p>
                <div className="flex items-center justify-center space-x-2 text-red-600">
                  <Phone size={16} />
                  <span className="font-semibold text-sm">
                    {location.phone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-400">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Call us now for quick support or urgent inquiries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call Now: +91 9876543210</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
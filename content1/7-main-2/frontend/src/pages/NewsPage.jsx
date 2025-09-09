import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Tag, ArrowRight, Search } from 'lucide-react';

const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All News', count: 12 },
    { id: 'announcements', name: 'Announcements', count: 4 },
    { id: 'events', name: 'Events', count: 3 },
    { id: 'awards', name: 'Awards', count: 2 },
    { id: 'expansion', name: 'Expansion', count: 3 }
  ];

  const news = [
    {
      id: 1,
      title: "Jus Momo Crosses 100 Outlets Milestone Across India",
      excerpt: "We're thrilled to announce that Jus Momo has successfully established over 100 outlets across major cities in India, marking a significant milestone in our journey.",
      content: "This achievement represents our commitment to bringing authentic Tibetan momos to every corner of India...",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      category: "announcements",
      author: "Jus Momo Team",
      date: "2024-01-15",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "Grand Opening: New Flagship Store in Mumbai",
      excerpt: "Our newest flagship store in Mumbai's Bandra West is now open, featuring an expanded menu and premium dining experience.",
      content: "The new flagship store spans 2000 sq ft and offers a complete Jus Momo experience...",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      category: "events",
      author: "Mumbai Team",
      date: "2024-01-10",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 3,
      title: "Jus Momo Wins 'Best Food Franchise 2024' Award",
      excerpt: "We're honored to receive the 'Best Food Franchise 2024' award from the Indian Franchise Association for our exceptional growth and franchise support.",
      content: "This prestigious award recognizes our commitment to franchisee success and quality food service...",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      category: "awards",
      author: "Corporate Team",
      date: "2024-01-05",
      readTime: "4 min read",
      featured: true
    },
    {
      id: 4,
      title: "Introducing Our New Fusion Menu Items",
      excerpt: "Get ready to experience exciting new fusion items including Momo Pizza, Momo Burgers, and innovative seasonal specials.",
      content: "Our culinary team has been working on exciting fusion concepts that blend traditional momos with contemporary flavors...",
      image: "https://jusmomo.com/wp-content/uploads/2023/04/Momo_maggick.png",
      category: "announcements",
      author: "Culinary Team",
      date: "2023-12-28",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 5,
      title: "Expansion to South India: 20 New Outlets",
      excerpt: "We're expanding our presence in South India with 20 new outlets planned across Bangalore, Chennai, and Hyderabad.",
      content: "This strategic expansion will bring authentic Tibetan momos to South Indian food enthusiasts...",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      category: "expansion",
      author: "Operations Team",
      date: "2023-12-20",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 6,
      title: "Annual Franchisee Meet 2024 - Celebrating Success",
      excerpt: "Join us for our annual franchisee meet where we celebrate achievements, share insights, and plan for the upcoming year.",
      content: "Our annual meet brings together franchisees from across India to share experiences and learn best practices...",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      category: "events",
      author: "Event Team",
      date: "2023-12-15",
      readTime: "3 min read",
      featured: false
    }
  ];

  const filteredNews = news.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = news.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">News & Events</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Stay updated with the latest news, events, and announcements from Jus Momo
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <article key={item.id} className="bg-white rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300 overflow-hidden group">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                        item.category === 'announcements' ? 'bg-green-500' :
                        item.category === 'events' ? 'bg-purple-500' :
                        item.category === 'awards' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}>
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User size={16} />
                          <span>{item.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-2">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <article key={item.id} className="bg-white rounded-2xl shadow-custom hover:shadow-custom-lg transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      item.category === 'announcements' ? 'bg-green-500' :
                      item.category === 'events' ? 'bg-purple-500' :
                      item.category === 'awards' ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`}>
                      <Tag size={14} className="inline mr-1" />
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center space-x-2 text-sm">
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Updated with <span className="text-yellow-300">Jus Momo</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates, events, and special offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-red-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
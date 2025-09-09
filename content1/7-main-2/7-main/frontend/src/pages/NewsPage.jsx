import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Outlet Opening in Bangalore",
      date: "March 15, 2024",
      excerpt: "We're excited to announce the opening of our new outlet in Bangalore's Phoenix Mall.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Special Diwali Menu Launched",
      date: "March 10, 2024",
      excerpt: "Celebrate the festival of lights with our special festive menu featuring unique momo varieties.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Franchise Partners Meet 2024",
      date: "March 5, 2024",
      excerpt: "Annual franchise partners meeting concluded successfully with new expansion plans.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">News & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with the latest news and events from Jus Momo
          </p>
        </div>
      </section>

      {/* News Items */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <button className="text-red-600 hover:text-red-800 font-semibold">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
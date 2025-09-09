import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Shiv Raman",
      role: "Food Enthusiast",
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Had a wonderful experience with Jus Momo. Kudos to Mr. Baskar for his excellent customer service. I went for an assorted veg Momos Happy Box. Worth the money! The taste is authentic and reminds me of the streets of Tibet.",
      highlight: "Excellent customer service and authentic taste!"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Regular Customer",
      location: "Delhi",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c9c9cf?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "The best momos in town! The kurkure momos are absolutely delicious and the service is always prompt. I've been ordering from Jus Momo for over a year now, and they never disappoint. The quality is consistent and amazing.",
      highlight: "Best momos in town with consistent quality!"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      role: "Franchise Owner",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "As a franchise owner, I can confidently say that Jus Momo has exceeded all my expectations. The support from the company is exceptional, and the ROI is exactly as promised. Customers love the authentic taste and keep coming back.",
      highlight: "Exceptional franchise support with great ROI!"
    },
    {
      id: 4,
      name: "Anita Patel",
      role: "Food Blogger",
      location: "Pune",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "I've tried momos from many places, but Jus Momo stands out with their unique varieties and authentic preparation. The Mo Pav is innovative and delicious. Perfect blend of traditional taste with modern presentation.",
      highlight: "Unique varieties with perfect traditional-modern blend!"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Corporate Executive",
      location: "Gurgaon",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "Office lunch sorted! Jus Momo delivers consistently good food right to our office. The variety keeps everyone happy, and the prices are very reasonable. Highly recommend for corporate catering needs.",
      highlight: "Perfect for corporate catering with great variety!"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-500 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-red-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-red-100 text-red-600 font-semibold rounded-full text-sm mb-4">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What our <span className="gradient-text">happy customers</span> say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the people who love our authentic momos
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-custom-lg p-8 md:p-12 text-center relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-red-200">
              <Quote size={48} />
            </div>

            {/* Stars */}
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].content}"
            </blockquote>

            {/* Highlight */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 mb-8">
              <p className="text-red-600 font-semibold text-lg">
                💡 {testimonials[currentTestimonial].highlight}
              </p>
            </div>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].avatar}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-4 border-red-100"
              />
              <div className="text-left">
                <h4 className="font-bold text-xl text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-sm text-gray-500">
                  📍 {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white hover:bg-red-50 text-red-600 rounded-full shadow-custom transition-all duration-300 hover:shadow-custom-lg"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-red-600 w-8'
                    : 'bg-gray-300 hover:bg-red-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 bg-white hover:bg-red-50 text-red-600 rounded-full shadow-custom transition-all duration-300 hover:shadow-custom-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Customer Avatars Preview */}
        <div className="flex justify-center mt-12 space-x-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`relative transition-all duration-300 ${
                index === currentTestimonial
                  ? 'scale-110 ring-4 ring-red-200'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">2,500+</div>
            <div className="text-gray-600">Happy Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">50,000+</div>
            <div className="text-gray-600">Orders Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
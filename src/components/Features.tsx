import React from 'react';
import { Search, AlertCircle, Phone, Star, CreditCard, Moon } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="w-12 h-12 text-cyan-400" />,
      title: "Nearby Service Finder",
      description: "Find mechanics, tow services, and fuel stations within minutes of your location"
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-red-400" />,
      title: "Emergency SOS Button",
      description: "Instant emergency alert with GPS location sharing to emergency contacts"
    },
    {
      icon: <Phone className="w-12 h-12 text-green-400" />,
      title: "One-Tap Connect",
      description: "Direct connection to service providers with estimated arrival times"
    },
    {
      icon: <Star className="w-12 h-12 text-yellow-400" />,
      title: "Verified & Rated Providers",
      description: "All service providers are background-checked and customer-rated"
    },
    {
      icon: <CreditCard className="w-12 h-12 text-blue-400" />,
      title: "In-App Payments",
      description: "Secure, cashless payments with transparent pricing and receipts"
    },
    {
      icon: <Moon className="w-12 h-12 text-purple-400" />,
      title: "Night Mode UI",
      description: "Dark interface optimized for nighttime use with reduced eye strain"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need for roadside emergencies, all in one comprehensive app
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
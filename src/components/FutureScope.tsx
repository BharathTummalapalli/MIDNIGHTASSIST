import React from 'react';
import { Brain, Shield, MapPin, Zap } from 'lucide-react';

const FutureScope = () => {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: "AI-Powered Predictions",
      description: "Machine learning algorithms to predict fuel levels, battery health, and maintenance needs",
      timeline: "Q3 2024"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "Insurance Integration",
      description: "Direct tie-ups with insurance companies for seamless claim processing and coverage",
      timeline: "Q4 2024"
    },
    {
      icon: <MapPin className="w-12 h-12 text-purple-400" />,
      title: "Pan-India Expansion",
      description: "Nationwide coverage with localized service providers in every major city and highway",
      timeline: "2025"
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: "EV Support Network",
      description: "Specialized support for electric vehicles including mobile charging and battery services",
      timeline: "2025"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Future Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Continuously evolving to meet the changing needs of modern transportation and emergency assistance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
            >
              {/* Timeline badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {feature.timeline}
              </div>
              
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 rounded-3xl border border-cyan-400/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Vision 2026: India's Leading Emergency Response Platform
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Our goal is to become the most trusted and comprehensive emergency assistance platform in India, 
            preventing roadside emergencies before they happen and ensuring no one ever feels helpless on the road again.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-gray-300 text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50K+</div>
              <div className="text-gray-300 text-sm">Service Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
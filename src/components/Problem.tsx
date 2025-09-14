import React from 'react';
import { AlertTriangle, Clock, MapPin, Shield } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-red-400" />,
      title: "Midnight Breakdowns",
      description: "Vehicle failures happen at the worst times, leaving you stranded in dark, unfamiliar places."
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-400" />,
      title: "Finding Help",
      description: "Searching for nearby mechanics or tow services at night is time-consuming and unreliable."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Safety Concerns",
      description: "Being alone on the road at night raises serious personal safety and security issues."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: "Emergency Situations",
      description: "Medical emergencies or accidents require immediate response and family notification."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
            The Problem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every year, millions of drivers face roadside emergencies during late hours, 
            putting them in vulnerable and potentially dangerous situations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-red-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {problem.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
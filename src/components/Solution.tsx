import React from 'react';
import { Search, AlertCircle, Phone, Users, CreditCard, Moon } from 'lucide-react';

const Solution = () => {
  const solutions = [
    {
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      title: "Nearby Service Finder",
      description: "Instantly locate verified mechanics, tow services, and fuel stations within your radius."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-400" />,
      title: "Emergency SOS Button",
      description: "One-tap emergency alert that notifies emergency services and your emergency contacts."
    },
    {
      icon: <Phone className="w-8 h-8 text-green-400" />,
      title: "24/7 Emergency Helplines",
      description: "Direct access to emergency services, roadside assistance, and medical help."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Family Alerts",
      description: "Automatic notifications to your loved ones when you're in an emergency situation."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-400" />,
      title: "Verified Providers",
      description: "All service providers are thoroughly vetted, rated, and insured for your safety."
    },
    {
      icon: <Moon className="w-8 h-8 text-indigo-400" />,
      title: "Night Mode Optimized",
      description: "Specially designed interface for low-light conditions and reduced eye strain."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Midnight Assist transforms your smartphone into a powerful safety tool, 
            connecting you with help when you need it most.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {solution.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
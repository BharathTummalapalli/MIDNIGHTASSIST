import React from 'react';
import { DollarSign, Users, Building } from 'lucide-react';

const BusinessModel = () => {
  const models = [
    {
      icon: <DollarSign className="w-10 h-10 text-green-400" />,
      title: "Commission-Based",
      description: "Small percentage from each successful service connection",
      details: "5-10% commission on completed services"
    },
    {
      icon: <Users className="w-10 h-10 text-blue-400" />,
      title: "Premium Subscriptions",
      description: "Monthly plans with priority support and additional features",
      details: "₹99/month for premium features"
    },
    {
      icon: <Building className="w-10 h-10 text-purple-400" />,
      title: "B2B Partnerships",
      description: "Corporate packages for fleet management and employee safety",
      details: "Custom enterprise solutions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900/20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Business Model
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sustainable revenue streams that benefit all stakeholders in the roadside assistance ecosystem
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {model.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-300 transition-colors duration-300">
                {model.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {model.description}
              </p>
              <div className="text-sm text-green-400 font-semibold">
                {model.details}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-3xl border border-green-400/20 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Revenue Projections
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">₹50L</div>
              <div className="text-gray-300">Year 1 Target</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">₹2Cr</div>
              <div className="text-gray-300">Year 2 Target</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">₹10Cr</div>
              <div className="text-gray-300">Year 3 Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;
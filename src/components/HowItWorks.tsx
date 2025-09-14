import React from 'react';
import { Smartphone, MapPin, Wrench } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="w-16 h-16 text-blue-400" />,
      title: "Open App",
      description: "Launch Midnight Assist and let us detect your location automatically",
      step: "01"
    },
    {
      icon: <MapPin className="w-16 h-16 text-cyan-400" />,
      title: "Choose Service",
      description: "Select the type of assistance you need or tap the emergency SOS button",
      step: "02"
    },
    {
      icon: <Wrench className="w-16 h-16 text-green-400" />,
      title: "Get Instant Help",
      description: "Connect with verified providers and track their real-time arrival",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get help in three simple steps, designed for ease of use even in stressful situations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full"></div>
                </div>
              )}
              
              <div className="relative z-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white">
                  {step.step}
                </div>
                
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-6 py-3 rounded-full border border-blue-400/30">
            <span className="text-blue-300 font-semibold">Average response time: 30 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
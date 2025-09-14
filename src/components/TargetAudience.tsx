import React from 'react';
import { Car, GraduationCap, Truck, Users } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: <Car className="w-12 h-12 text-blue-400" />,
      title: "Late-Night Travelers",
      description: "Business professionals and frequent travelers who often drive during off-hours"
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-purple-400" />,
      title: "Students",
      description: "College students traveling between cities or returning home late from work"
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-400" />,
      title: "Commercial Drivers",
      description: "Truck drivers, delivery personnel, and others working night shifts"
    },
    {
      icon: <Users className="w-12 h-12 text-pink-400" />,
      title: "Safety-Conscious Families",
      description: "Families prioritizing safety for all members, especially women traveling alone"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Midnight Assist is designed for anyone who values safety and peace of mind while traveling
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105 group text-center"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="p-4 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl">
                  {audience.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {audience.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-8 rounded-3xl border border-purple-400/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Special Focus on Women's Safety
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With enhanced safety features including instant family alerts, location sharing, 
              and priority emergency response, we're committed to making nighttime travel safer for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
import React from 'react';
import { Download, Play } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234F46E5%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
  <div className="text-center max-w-4xl mx-auto">
    <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
      Never Get Stranded Again
    </h2>
    <p className="text-2xl lg:text-3xl text-blue-200 mb-4 font-light">
      Download Midnight Assist Today
    </p>
    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
      Join thousands of users who trust Midnight Assist for their roadside safety and emergency assistance needs.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
      <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-10 py-6 rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
        <Play className="w-6 h-6 fill-current" />
        Google Play Store
      </button>
      <button className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-10 py-6 rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-gray-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 border border-gray-600">
        <Download className="w-6 h-6" />
        App Store
      </button>
    </div>
    
    {/* Stats */}
    <div className="grid md:grid-cols-4 gap-8 bg-gradient-to-r from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
        <div className="text-gray-300">Downloads</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-green-400 mb-2">4.8★</div>
        <div className="text-gray-300">User Rating</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
        <div className="text-gray-300">Service Partners</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-cyan-400 mb-2">8 min</div>
        <div className="text-gray-300">Avg Response</div>
      </div>
    </div>
  </div>
</div>
</section>
  );

}
export default CTA;
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Midnight Assist
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted 24/7 roadside safety and assistance partner. We're here to ensure 
              you're never stranded, no matter where the road takes you.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
          
            {/* Quick Links */}
            <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">How It Works</a></li>
              <li><a href="#problem" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Problem</a></li>
              <li><a href="#solution" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Solution</a></li>
              <li><a href="#target-audience" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Target Audience</a></li>
              <li><a href="#business-model" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Business Model</a></li>
              <li><a href="#future-scope" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Future Scope</a></li>
              <li><a href="#cta" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Get Started</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
            </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:bharaththummalapalli3@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  bharaththummalapalli3@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 9494186142</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  Andhrapradesh,Eastgodavari<br />
                  India 
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Midnight Assist. All rights reserved. Built with ❤️ for safer journeys.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
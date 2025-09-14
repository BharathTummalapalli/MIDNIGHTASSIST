import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import BusinessModel from './components/BusinessModel';
import FutureScope from './components/FutureScope';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <BusinessModel />
      <FutureScope />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import PhoneMockup from './components/PhoneMockup';
import WaitlistInput from './components/WaitlistInput';
import Footer from './components/Footer';
import LandingPageSections from './components/LandingPageSections';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`relative min-h-screen flex flex-col transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Noise Overlay */}
      <div className="fixed inset-0 bg-noise z-[999] pointer-events-none" />

      {/* Background Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full -z-10" />

      {/* Brand Watermark */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-12 lg:left-12 flex items-center gap-3 z-20">
        <Logo size="md" className="md:w-10 md:h-10" />
        <span className="text-lg md:text-xl font-bold tracking-tight text-white">WanderLust</span>
      </div>

      {/* Main Content - Hero Section */}
      <main className="relative z-10 flex-grow flex items-center justify-center w-full max-w-7xl px-4 md:px-12 lg:px-24 mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center py-20">
          {/* Left column (on Desktop): Phone Mockup */}
          <div className="flex justify-center lg:justify-end items-center order-1 lg:order-1 mb-8 lg:mb-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-teal-500/10 blur-[120px] rounded-full scale-90 -z-10 group-hover:scale-110 transition-transform duration-1000" />
              <PhoneMockup />
            </div>
          </div>

          {/* Right column (on Desktop): Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50">
              <span className="text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase">Coming Soon</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-4 leading-[1.05]">
              Travel without the <br />
              <span className="gradient-text">tourist mindset</span>
            </h1>

            <p className="text-zinc-400 text-base md:text-lg max-w-sm mb-8 md:mb-10 leading-relaxed font-light">
              Curated local experiences. Hidden gems. Real memories.
            </p>

            <div className="w-full max-w-md">
              <WaitlistInput id="waitlist-main" />
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              <p className="text-zinc-500 text-xs font-medium tracking-wide">25+ travelers already join</p>
            </div>
          </div>
        </div>
      </main>

      {/* Product Information Sections */}
      <LandingPageSections />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;

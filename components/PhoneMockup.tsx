import React, { useState, useEffect } from 'react';

// --- Splash Screen UI ---
const SplashScreenUI: React.FC = () => (
  <div className="w-full h-full bg-[#0a0a0b]">
    <img
      src="/phone-screen.png"
      alt="WanderLust App Screen"
      className="w-full h-full object-cover"
    />
  </div>
);

// --- Discover Screen UI ---
const DiscoverUI: React.FC = () => (
  <div className="w-full h-full bg-[#0a0a0b] text-white flex flex-col p-5 overflow-hidden">
    <div className="flex justify-between items-center mt-6 mb-6">
      <h2 className="text-xl font-bold tracking-tight italic">Discover</h2>
      <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
        <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
      </div>
    </div>
    <div className="flex items-center gap-1 text-teal-400 text-xs mb-6">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
      <span className="font-semibold">Tokyo</span>
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
    </div>

    <p className="text-sm font-bold mb-4">Explore Cities</p>
    <div className="relative w-full h-36 rounded-2xl overflow-hidden mb-6">
      <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
        <p className="text-sm font-bold">Tokyo</p>
        <p className="text-[10px] text-zinc-300">Japan • 12 spots</p>
      </div>
    </div>

    <p className="text-sm font-bold mb-3">Categories</p>
    <div className="flex gap-2 mb-6 overflow-hidden">
      <div className="px-4 py-1.5 rounded-full bg-teal-500 text-[10px] font-bold">All</div>
      <div className="px-4 py-1.5 rounded-full bg-zinc-900 text-[10px] font-bold whitespace-nowrap">Coffee & Food</div>
      <div className="px-4 py-1.5 rounded-full bg-zinc-900 text-[10px] font-bold whitespace-nowrap">Hidden Gems</div>
    </div>

    <p className="text-sm font-bold mb-3">Recommended for You</p>
    <div className="grid grid-cols-2 gap-3 mb-12">
      <div className="flex flex-col">
        <div className="w-full h-24 rounded-xl overflow-hidden mb-2">
          <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
        </div>
        <p className="text-[10px] font-bold leading-tight">Bear Pond Espresso</p>
      </div>
      <div className="flex flex-col">
        <div className="w-full h-24 rounded-xl overflow-hidden mb-2">
          <img src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
        </div>
        <p className="text-[10px] font-bold leading-tight">Secret Garden...</p>
      </div>
    </div>

    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-6 py-4 bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-white/5">
      <div className="text-teal-500"><div className="w-5 h-5 border-2 border-current rounded-full" /></div>
      <div className="text-zinc-500"><div className="w-5 h-5 border-2 border-current rounded-sm" /></div>
      <div className="text-zinc-500"><div className="w-5 h-5 border-2 border-current rounded-sm" /></div>
      <div className="text-zinc-500"><div className="w-5 h-5 border-2 border-current rounded-full" /></div>
    </div>
  </div>
);

// --- Profile Screen UI ---
const ProfileUI: React.FC = () => (
  <div className="w-full h-full bg-[#0a0a0b] text-white flex flex-col p-5 font-sans select-none overflow-hidden">
    <div className="flex justify-between items-center mb-8 pt-6">
      <h2 className="text-xl font-bold tracking-tight italic">Profile</h2>
      <div className="p-2 rounded-full bg-zinc-900">
        <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      </div>
    </div>
    <div className="flex flex-col items-center mb-8">
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500 flex items-center justify-center p-1 shadow-lg shadow-blue-500/20">
          <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-zinc-900 border-2 border-zinc-950 rounded-full flex items-center justify-center text-zinc-500">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-1 italic">Alex Traveler</h3>
      <div className="px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center gap-1">
        <span className="text-teal-400 text-[8px] font-bold tracking-wider uppercase">@Adventurer</span>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-6">
      {[{ val: 24, label: 'Discovered' }, { val: 5, label: 'Itineraries' }, { val: 3, label: 'Cities' }].map((s, idx) => (
        <div key={idx} className="bg-zinc-900/50 rounded-xl p-2.5 flex flex-col items-center border border-white/5">
          <span className="text-base font-bold">{s.val}</span>
          <span className="text-[7px] text-zinc-500 uppercase tracking-widest">{s.label}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-between items-end mb-4 px-1">
      <h4 className="text-xs font-bold">Badges</h4>
      <span className="text-[9px] text-zinc-500">3/6 unlocked</span>
    </div>
    <div className="grid grid-cols-3 gap-3 mb-10">
      {[{ color: 'teal' }, { color: 'purple' }, { color: 'orange' }, { color: 'zinc' }, { color: 'zinc' }, { color: 'zinc' }].map((b, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative mb-1.5 bg-zinc-900/50 border border-white/5`}>
            <div className={`w-5 h-5 rounded-full bg-zinc-800 ${idx < 3 ? 'border border-teal-500/30' : ''}`} />
          </div>
          <div className="w-8 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className={`h-full bg-teal-500 ${idx < 3 ? 'w-full' : 'w-0'}`} />
          </div>
        </div>
      ))}
    </div>
    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between px-6 py-4 bg-zinc-900/80 backdrop-blur-md rounded-3xl border border-white/5">
      <div className="text-zinc-500"><div className="w-5 h-5 border-2 border-current rounded-full" /></div>
      <div className="text-zinc-500"><div className="w-5 h-5 border-2 border-current rounded-sm" /></div>
      <div className="text-zinc-500"><div className="w-5 h-5 border-2 border-current rounded-sm" /></div>
      <div className="text-teal-500"><div className="w-5 h-5 border-2 border-current rounded-full" /></div>
    </div>
  </div>
);

// --- Main Mockup Component ---
const PhoneMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState(0);
  const screens = [<SplashScreenUI />, <DiscoverUI />, <ProfileUI />];

  useEffect(() => {
    // Rotation interval set to 2 seconds as requested by the user
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative group perspective-2000">
      {/* 
        The requested perspective:
        - Top leaning left: rotateZ negative
        - 3D angled: rotateY / rotateX
      */}
      <div className="relative animate-float transform-gpu transition-all duration-1000 ease-out rotate-mockup-default group-hover:rotate-mockup-hover">

        {/* Shadow - adjusted for perspective */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[95%] h-12 bg-black/60 blur-[40px] rounded-[100%] transition-transform duration-1000 group-hover:scale-110" />

        {/* Frame */}
        <div className="relative w-[230px] h-[470px] md:w-[265px] md:h-[540px] bg-[#0c0c0d] rounded-[3.5rem] p-[8px] shadow-[0_45px_100px_-20px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.1)] ring-1 ring-white/10 overflow-hidden">

          <div className="absolute inset-0 rounded-[3.5rem] border-[1.5px] border-white/10 pointer-events-none z-30" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-30 opacity-30" />
          <div className="absolute inset-[6px] rounded-[3.1rem] bg-black shadow-[inset_0_0_30px_rgba(0,0,0,1)] z-10" />

          {/* Screen Content */}
          <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden bg-zinc-950 z-20">
            {/* Dynamic Island with Pulsing Indicator */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[70px] h-[22px] bg-black rounded-[20px] z-50 flex items-center justify-between px-3">
              <div className="w-1 h-1 rounded-full bg-zinc-800/50" />
              <div className="relative flex items-center justify-center">
                <div className="absolute w-2 h-2 rounded-full bg-teal-500/20 animate-ping" />
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500/80 shadow-[0_0_8px_rgba(45,212,191,1)] animate-pulse-glow" />
              </div>
            </div>

            {/* Rotating Screens */}
            <div className="w-full h-full relative">
              {screens.map((Screen, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${activeScreen === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 blur-sm'}`}
                >
                  {Screen}
                </div>
              ))}
            </div>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full z-50" />
          </div>
        </div>

        {/* Side Buttons */}
        <div className="absolute top-24 -left-[2px] w-[3px] h-10 bg-zinc-800 rounded-r-sm z-0" />
        <div className="absolute top-40 -left-[2px] w-[3px] h-14 bg-zinc-800 rounded-r-sm z-0" />
        <div className="absolute top-44 -right-[2px] w-[3px] h-20 bg-zinc-800 rounded-l-sm z-0 shadow-xl" />
      </div>
    </div>
  );
};

export default PhoneMockup;

import React, { useState } from 'react';

interface WaitlistInputProps {
  id: string;
}

const WaitlistInput: React.FC<WaitlistInputProps> = ({ id }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <div className="relative group">
        <input 
          id={id}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full h-14 bg-zinc-900/80 border border-zinc-800 rounded-2xl px-6 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-teal-500/30 transition-all text-sm font-light backdrop-blur-sm"
        />
      </div>
      
      <button 
        type="submit"
        disabled={submitted}
        className={`h-14 w-full rounded-2xl font-bold text-sm tracking-tight text-white transition-all transform hover:scale-[1.01] active:scale-[0.99] ${submitted ? 'bg-zinc-800 text-zinc-500' : 'bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 hover:shadow-[0_0_25px_rgba(45,212,191,0.25)]'}`}
      >
        {submitted ? 'Invitation Sent' : 'Join the Waitlist'}
      </button>
    </form>
  );
};

export default WaitlistInput;

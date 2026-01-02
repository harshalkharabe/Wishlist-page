
import React, { useState } from 'react';
import { supabase } from '../utils/supabase';

interface WaitlistInputProps {
  id: string;
}

const WaitlistInput: React.FC<WaitlistInputProps> = ({ id }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !loading) {
      setLoading(true);
      setError(null);

      try {
        const { error: supabaseError } = await supabase
          .from('waitlist_signups')
          .insert([{ email }]);

        if (supabaseError) {
          if (supabaseError.code === '23505') {
            setError('This email is already on the waitlist.');
          } else {
            setError('Something went wrong. Please try again.');
            console.error('Supabase error:', supabaseError);
          }
        } else {
          setSubmitted(true);
          setEmail('');
          setTimeout(() => {
            setSubmitted(false);
          }, 3000);
        }
      } catch (err) {
        setError('Failed to join. Please check your connection.');
        console.error('Submission error:', err);
      } finally {
        setLoading(false);
      }
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
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          placeholder="Enter your email"
          disabled={loading || submitted}
          className={`w-full h-14 bg-zinc-900/80 border ${error ? 'border-red-500/50 focus:ring-red-500/30' : 'border-zinc-800 focus:ring-teal-500/30'} rounded-2xl px-6 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 transition-all text-sm font-light backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed`}
        />
      </div>

      {error && (
        <p className="text-red-400 text-xs px-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitted || loading}
        className={`h-14 w-full rounded-2xl font-bold text-sm tracking-tight text-white transition-all transform hover:scale-[1.01] active:scale-[0.99] ${submitted ? 'bg-zinc-800 text-zinc-500' : 'bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 hover:shadow-[0_0_25px_rgba(45,212,191,0.25)]'} disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none`}
      >
        {loading ? 'Joining...' : submitted ? 'Invitation Sent' : 'Join the Waitlist'}
      </button>
    </form>
  );
};

export default WaitlistInput;

import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Instagram, Smartphone, Send, Check, Zap } from 'lucide-react';

export default function ReelmakerPage() {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans p-6 md:p-12">
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-16">
        <a href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-yellow-400 hover:text-white transition-all">
          <ArrowLeft size={16} /> Go Back
        </a>
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <div className="bg-yellow-400 p-1 rounded-lg text-black"><Zap size={20} fill="currentColor" /></div>
          CVGPOST
        </div>
      </nav>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-6 leading-none">Join the <br/><span className="text-yellow-400">Elite.</span></h1>
          <p className="text-gray-400 font-medium mb-8">We hire the top 1% of mobile creators. Get high-end projects and premium rates.</p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-[3rem] border border-zinc-800 shadow-2xl">
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="relative"><User className="absolute left-5 top-5 text-zinc-500" size={18}/><input required placeholder="Full Name" className="w-full bg-zinc-800 p-5 pl-14 rounded-2xl border-none text-white font-bold outline-none focus:ring-2 ring-yellow-400" /></div>
              <div className="relative"><Instagram className="absolute left-5 top-5 text-zinc-500" size={18}/><input required placeholder="Instagram @handle" className="w-full bg-zinc-800 p-5 pl-14 rounded-2xl border-none text-white font-bold outline-none focus:ring-2 ring-yellow-400" /></div>
              <div className="relative"><Smartphone className="absolute left-5 top-5 text-zinc-500" size={18}/><input required placeholder="Primary Device (e.g. iPhone 16 Pro)" className="w-full bg-zinc-800 p-5 pl-14 rounded-2xl border-none text-white font-bold outline-none focus:ring-2 ring-yellow-400" /></div>
              <textarea placeholder="Portfolio Link..." className="w-full bg-zinc-800 p-5 rounded-2xl border-none text-white font-bold h-32 outline-none focus:ring-2 ring-yellow-400 resize-none"></textarea>
              <button className="w-full bg-yellow-400 text-black py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-2">Apply Now <Send size={18}/></button>
            </form>
          ) : (
            <div className="text-center py-10">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={32} className="text-black"/></div>
              <h3 className="text-2xl font-black uppercase">Sent!</h3>
              <p className="text-gray-400 text-[10px] font-bold mt-2 uppercase">We will review your work.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
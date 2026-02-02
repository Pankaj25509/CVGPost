import React, { useState, useEffect } from 'react';
import { ArrowLeft, Building, Mail, Globe, Check, Zap, ArrowRight } from 'lucide-react';

export default function BrandPage() {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans p-6 md:p-12">
      <nav className="max-w-7xl mx-auto flex justify-between items-center mb-16">
        <a href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-all">
          <ArrowLeft size={16} /> Go Back
        </a>
        <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
          <div className="bg-black p-1 rounded-lg text-yellow-400"><Zap size={20} fill="currentColor" /></div>
          CVGPOST
        </div>
      </nav>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-6 leading-none text-black">Scale <br/><span className="text-yellow-500">Fast.</span></h1>
          <p className="text-gray-500 font-medium mb-8">Outsource your high-volume production to our specialized vertical video team.</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-[3rem] border border-gray-100 shadow-xl">
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="relative"><Building className="absolute left-5 top-5 text-gray-400" size={18}/><input required placeholder="Company Name" className="w-full bg-white p-5 pl-14 rounded-2xl border-none font-bold outline-none focus:ring-2 ring-black" /></div>
              <div className="relative"><Mail className="absolute left-5 top-5 text-gray-400" size={18}/><input required type="email" placeholder="Business Email" className="w-full bg-white p-5 pl-14 rounded-2xl border-none font-bold outline-none focus:ring-2 ring-black" /></div>
              <div className="relative"><Globe className="absolute left-5 top-5 text-gray-400" size={18}/><input required placeholder="Website URL" className="w-full bg-white p-5 pl-14 rounded-2xl border-none font-bold outline-none focus:ring-2 ring-black" /></div>
              <select className="w-full bg-white p-5 rounded-2xl border-none font-bold outline-none appearance-none cursor-pointer">
                <option>5-10 Reels / Month</option>
                <option>10-25 Reels / Month</option>
                <option>25+ Reels / Month</option>
              </select>
              <button className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-black transition-all flex items-center justify-center gap-2">Contact Us <ArrowRight size={18}/></button>
            </form>
          ) : (
            <div className="text-center py-10">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={32} className="text-yellow-400"/></div>
              <h3 className="text-2xl font-black uppercase">Inquiry Sent</h3>
              <p className="text-gray-400 text-[10px] font-bold mt-2 uppercase">Our manager will reach out.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
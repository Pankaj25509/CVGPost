import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, ArrowRight, User, Mail, Calendar, Clock, 
  MessageSquare, ArrowLeft, ShieldCheck, Sparkles, Trophy 
} from 'lucide-react';

const BookingPage = () => {
  const [activeCategory, setActiveCategory] = useState('Regular');
  const [selectedPlan, setSelectedPlan] = useState('Half Day');
  const [submitted, setSubmitted] = useState(false);

  // Ensure page starts at top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pricingData = {
    Regular: [
      { title: "Hourly", price: "1,999", details: "1 Pro Reel + Raw Access. Best for quick updates." },
      { title: "Half Day", price: "4,999", details: "4 Hours, 5 Reels + Trending Audio. Our most popular." },
      { title: "Full Day", price: "8,999", details: "8 Hours, 10+ Reels + Multi-location coverage." }
    ],
    Wedding: [
      { title: "Teaser", price: "12,000", details: "Cinematic Highlight Reel + Drone. 24hr Fast Delivery." },
      { title: "Traditional", price: "25,000", details: "Full Event Coverage + Social Media Optimized edits." },
      { title: "Premium", price: "45,000", details: "Multi-Camera + Long-form Doc + Luxury Photo Album." }
    ],
    Corporate: [
      { title: "Startup", price: "15,000", details: "Founder Story + HQ Audio + 2 Revision Rounds." },
      { title: "Professional", price: "35,000", details: "Office B-Roll + Testimonials + LinkedIn Optimized." },
      { title: "Enterprise", price: "75,000", details: "Brand Story + Multi-interviews + Full Ads Media Kit." }
    ]
  };

  const benefits = [
    { icon: <ShieldCheck size={18} />, text: "iPhone 16 Pro Quality" },
    { icon: <Trophy size={18} />, text: "Cinema Stabilization" },
    { icon: <Sparkles size={18} />, text: "Trending Hooks" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-yellow-400 selection:text-black">
      {/* Navbar */}
      <nav className="p-6 border-b border-zinc-900 flex justify-between items-center bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-yellow-400 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </a>
          
          <div className="h-4 w-[1px] bg-zinc-800 hidden md:block" />
          
          {/* Logo Section - No Text, Just Image */}
          <div 
            className="cursor-pointer flex items-center justify-center overflow-hidden h-10 w-32"
            onClick={() => window.location.href='/'}
          >
             <img
                src="/logo.png" 
                alt="CVGPOST Logo"
                className="h-[280%] w-auto max-w-none object-contain brightness-110" 
              />
          </div>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-zinc-600 hidden sm:block">
            Production Booking • 2026
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                Secure Your <span className="text-yellow-400">Slot</span>
              </h1>
              
              {/* Category Toggles */}
              <div className="flex gap-2 p-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl w-fit mb-8">
                {Object.keys(pricingData).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSelectedPlan(pricingData[cat][0].title);
                    }}
                    className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeCategory === cat ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/20' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Select {activeCategory} Plan</h3>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  {pricingData[activeCategory].map((plan) => (
                    <motion.div
                      key={plan.title}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => setSelectedPlan(plan.title)}
                      className={`p-6 rounded-[2.5rem] border-2 cursor-pointer transition-all relative overflow-hidden ${
                        selectedPlan === plan.title 
                        ? 'border-yellow-400 bg-yellow-400/5 shadow-xl shadow-yellow-400/5' 
                        : 'border-zinc-900 bg-zinc-900/30 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex justify-between items-center relative z-10">
                        <div>
                          <h4 className="font-black uppercase text-xl text-white">{plan.title}</h4>
                          <p className="text-yellow-400 font-black tracking-tight text-lg">₹{plan.price}</p>
                        </div>
                        {selectedPlan === plan.title && (
                          <div className="bg-yellow-400 p-2 rounded-full text-black"><Check size={18} strokeWidth={3} /></div>
                        )}
                      </div>
                      <p className={`mt-3 text-xs font-medium transition-colors ${selectedPlan === plan.title ? 'text-zinc-300' : 'text-zinc-500'}`}>
                        {plan.details}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-6 border-t border-zinc-900">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    <span className="text-yellow-400">{b.icon}</span> {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-900/50 p-8 md:p-12 rounded-[3.5rem] border border-zinc-800 shadow-2xl relative overflow-hidden">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-zinc-500">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                        <input required placeholder="Enter Full Name" className="w-full bg-zinc-950 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 text-white placeholder-zinc-700 transition-all font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-zinc-500">Email Contact</label>
                      <div className="relative">
                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                        <input required type="email" placeholder="email@company.com" className="w-full bg-zinc-950 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 text-white placeholder-zinc-700 transition-all font-bold" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-zinc-500">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                        <input required type="date" className="w-full bg-zinc-950 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 text-white placeholder-zinc-700 transition-all font-bold [color-scheme:dark]" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-zinc-500">Time Slot</label>
                      <div className="relative">
                        <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                        <select className="w-full bg-zinc-950 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 text-white transition-all font-bold appearance-none">
                          <option>Morning (10AM - 2PM)</option>
                          <option>Evening (3PM - 7PM)</option>
                          <option>Full Day Session</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-4 text-zinc-500">Vision for this {activeCategory} Shoot</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-5 top-6 text-zinc-600" size={18} />
                      <textarea placeholder={`What are we filming for your ${selectedPlan} session?`} className="w-full bg-zinc-950 rounded-2xl py-5 pl-14 pr-6 outline-none border-2 border-transparent focus:border-yellow-400 text-white placeholder-zinc-700 transition-all font-bold h-32 resize-none"></textarea>
                    </div>
                  </div>

                  <button className="w-full bg-yellow-400 text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-3 group">
                    Confirm {selectedPlan} Booking
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-20 relative z-10">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-yellow-400 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-yellow-400/50">
                    <Check size={48} strokeWidth={3} className="text-black" />
                  </motion.div>
                  <h2 className="text-4xl font-black uppercase tracking-tight mb-4 text-white">Request Sent!</h2>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">We'll be in touch within 2 hours.</p>
                </div>
              )}
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('booking-root')).render(<BookingPage />);
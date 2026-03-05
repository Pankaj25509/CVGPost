import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, ArrowRight, User, Mail, Calendar, Clock, 
  MessageSquare, ArrowLeft, ShieldCheck, Sparkles, Trophy,
  ChevronRight, Globe, Zap
} from 'lucide-react';

const BookingPage = () => {
  const [activeCategory, setActiveCategory] = useState('Regular');
  const [selectedPlan, setSelectedPlan] = useState('Half Day');
  const [submitted, setSubmitted] = useState(false);

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
    { icon: <ShieldCheck size={16} />, text: "iPhone 16 Pro Quality" },
    { icon: <Zap size={16} />, text: "24h Turnaround" },
    { icon: <Sparkles size={16} />, text: "Trending Hooks" }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-yellow-400 selection:text-black antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-all group">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </a>
            
            <div className="hidden md:block h-6 w-[1px] bg-zinc-800" />
            
            <div 
              className="cursor-pointer flex items-center h-8 w-28 opacity-90 hover:opacity-100 transition-opacity"
              onClick={() => window.location.href='/'}
            >
               <img
                src="/logo.png" 
                alt="CVGPOST Logo"
                className="h-[250%] w-auto object-contain brightness-110" 
              />
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Booking Open
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto pt-32 pb-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Selection Column */}
          <div className="lg:col-span-5 space-y-12">
            <header className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-yellow-400 text-[10px] font-black uppercase tracking-[0.4em]"
              >
                Reservation Terminal
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] text-white"
              >
                Secure <br /> Your <span className="text-zinc-500">Slot</span>
              </motion.h1>
            </header>

            {/* Category Switcher */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {Object.keys(pricingData).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setSelectedPlan(pricingData[cat][0].title);
                    }}
                    className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${
                      activeCategory === cat 
                      ? 'bg-white text-black border-white shadow-xl' 
                      : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Plan Cards */}
              <div className="grid gap-3">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-3"
                  >
                    {pricingData[activeCategory].map((plan) => (
                      <div
                        key={plan.title}
                        onClick={() => setSelectedPlan(plan.title)}
                        className={`group p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                          selectedPlan === plan.title 
                          ? 'bg-white/5 border-yellow-400/50' 
                          : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex justify-between items-start relative z-10">
                          <div className="space-y-1">
                            <h4 className={`text-sm font-black uppercase tracking-wider ${selectedPlan === plan.title ? 'text-white' : 'text-zinc-400'}`}>
                              {plan.title}
                            </h4>
                            <p className="text-zinc-500 text-[11px] leading-relaxed max-w-[220px]">
                              {plan.details}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className={`text-lg font-black ${selectedPlan === plan.title ? 'text-yellow-400' : 'text-zinc-300'}`}>
                              ₹{plan.price}
                            </span>
                          </div>
                        </div>
                        {selectedPlan === plan.title && (
                          <motion.div layoutId="activePlan" className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Benefits Footer */}
            <div className="flex flex-wrap gap-6 pt-8 border-t border-zinc-900">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                  <span className="text-yellow-400">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm"
            >
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Client Name</label>
                      <div className="group relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-yellow-400 transition-colors" size={16} />
                        <input required placeholder="Full Name" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-yellow-400/50 text-sm font-medium transition-all" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                      <div className="group relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-yellow-400 transition-colors" size={16} />
                        <input required type="email" placeholder="email@company.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-yellow-400/50 text-sm font-medium transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Shoot Date</label>
                      <div className="group relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-yellow-400 transition-colors" size={16} />
                        <input required type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-yellow-400/50 text-sm font-medium transition-all [color-scheme:dark]" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Preferred Time</label>
                      <div className="group relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700 group-focus-within:text-yellow-400 transition-colors" size={16} />
                        <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-10 outline-none focus:border-yellow-400/50 text-sm font-medium transition-all appearance-none cursor-pointer">
                          <option>Morning (10AM - 2PM)</option>
                          <option>Evening (3PM - 7PM)</option>
                          <option>Full Day Session</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-700 rotate-90 pointer-events-none" size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-1">Project Brief</label>
                    <div className="group relative">
                      <MessageSquare className="absolute left-4 top-5 text-zinc-700 group-focus-within:text-yellow-400 transition-colors" size={16} />
                      <textarea placeholder={`Tell us about your ${selectedPlan} project vision...`} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 outline-none focus:border-yellow-400/50 text-sm font-medium transition-all h-32 resize-none"></textarea>
                    </div>
                  </div>

                  <button className="w-full bg-yellow-400 text-black py-5 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-white transition-all shadow-lg shadow-yellow-400/5 flex items-center justify-center gap-3 group">
                    Confirm {selectedPlan} Request
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-center text-[9px] font-bold text-zinc-600 uppercase tracking-widest">
                    By clicking, you agree to our production terms & conditions.
                  </p>
                </form>
              ) : (
                <div className="text-center py-20 relative z-10 space-y-6">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                    <Check size={40} strokeWidth={3} className="text-white" />
                  </motion.div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-black uppercase tracking-tight text-white">Application Sent</h2>
                    <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-[10px]">Our production manager will call you within 2 hours.</p>
                  </div>
                  <button onClick={() => setSubmitted(false)} className="text-[10px] font-black uppercase tracking-widest text-yellow-400 hover:text-white transition-colors">
                    Send another request
                  </button>
                </div>
              )}
              
              {/* Subtle Decorative Elements */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('booking-root')).render(<BookingPage />);
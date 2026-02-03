import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Check,
  Play,
  Camera,
  User,
  ArrowRight,
  ChevronDown,
  Star,
  Quote,
  Calendar,
  ArrowUp,
  MessageCircle,
  Briefcase,
  Users,
  Target,
  Award,
  Clock,
  Coins,
  Sparkles,
  Smartphone,
  Layers,
  Send,
  Building,
  Globe,
  ShieldCheck,
  Trophy,
} from "lucide-react";

// --- DATA ---

const projects = [
  {
    name: "Urban Streetwear",
    category: "Fashion Reel",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Luxury Interior",
    category: "Real Estate",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Automotive Motion",
    category: "Car Cinematic",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Gourmet Plating",
    category: "Food & Beverage",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Fitness Grind",
    category: "Sports Promo",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Nightlife Vibe",
    category: "Event Coverage",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
  },
];

const features = [
  {
    icon: <Award className="text-yellow-400" />,
    title: "Quality Work",
    desc: "Cinema-grade mobile visuals shot on iPhone 16 Pro hardware for maximum clarity.",
  },
  {
    icon: <Clock className="text-yellow-400" />,
    title: "On-Time Delivery",
    desc: "Raw footage delivered instantly; high-end edited reels delivered within 24-48 hours.",
  },
  {
    icon: <Target className="text-yellow-400" />,
    title: "Viral Strategy",
    desc: "Content engineered specifically for algorithms with high-retention hooks and audio.",
  },
  {
    icon: <Users className="text-yellow-400" />,
    title: "Professional Team",
    desc: "Access to expert directors and editors who specialize in the vertical video format.",
  },
  {
    icon: <Coins className="text-yellow-400" />,
    title: "Affordable Pricing",
    desc: "Premium production value at transparent rates designed for high ROI and scale.",
  },
  {
    icon: <Sparkles className="text-yellow-400" />,
    title: "Creative Content",
    desc: "Unique transitions, storytelling, and aesthetic grading that stops the scroll.",
  },
];

const pricingData = {
  regular: [
    {
      title: "Hourly",
      price: "₹1,999",
      suffix: "/hr",
      features: [
        "Shot on iPhone 16 Pro",
        "1 Professional Reel",
        "Raw Footage Access",
      ],
      dark: false,
    },
    {
      title: "Half Day",
      price: "₹4,999",
      suffix: "",
      features: [
        "4 Hours Coverage",
        "4-5 Professional Reels",
        "On-the-spot Delivery",
      ],
      popular: true,
      dark: true,
    },
    {
      title: "Full Day",
      price: "₹8,999",
      suffix: "",
      features: [
        "8 Hours Coverage",
        "10+ Professional Reels",
        "Multi-Location Shoot",
      ],
      dark: false,
    },
  ],
  wedding: [
    {
      title: "Teaser",
      price: "₹12,000",
      suffix: "",
      features: [
        "Cinematic Highlight Reel",
        "Drone Shots Included",
        "24hr Fast Delivery",
      ],
      dark: false,
    },
    {
      title: "Traditional",
      price: "₹25,000",
      suffix: "",
      features: [
        "Full Event Coverage",
        "iPhone 16 Pro Quality",
        "Social Media Optimized",
      ],
      popular: true,
      dark: true,
    },
    {
      title: "Premium",
      price: "₹45,000",
      suffix: "",
      features: [
        "Multi-Camera Setup",
        "Long-form Documentary",
        "Luxury Photo Album",
      ],
      dark: false,
    },
  ],
  corporate: [
    {
      title: "Startup",
      price: "₹15,000",
      suffix: "",
      features: ["Founder Story Video", "HQ Audio Setup", "2 Revision Rounds"],
      dark: false,
    },
    {
      title: "Professional",
      price: "₹35,000",
      suffix: "",
      features: [
        "Office B-Roll",
        "Customer Testimonials",
        "LinkedIn Optimized",
      ],
      popular: true,
      dark: true,
    },
    {
      title: "Enterprise",
      price: "₹75,000",
      suffix: "",
      features: [
        "Complete Brand Story",
        "Multiple Interviews",
        "Ads Media Kit",
      ],
      dark: false,
    },
  ],
};

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, Urban Fit",
    text: "The turnaround time is actually insane. I had my raw footage before I even left the shoot location, and the final reels were trending within 24 hours.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Sara Khan",
    role: "Lifestyle Influencer",
    text: "I've worked with many production houses, but CVGPOST understands mobile-first content better than anyone. The iPhone 16 Pro quality is indistinguishable from cinema cameras.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Vikram Rathore",
    role: "Restaurateur",
    text: "They captured the vibe of my restaurant perfectly. The transitions are smooth and the lighting makes the food look incredible. Worth every rupee.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

const faqs = [
  {
    question: "How fast is the turnaround time?",
    answer:
      "We pride ourselves on speed. For half-day and full-day sessions, we often provide on-the-spot delivery of raw footage, with edited reels delivered within 24-48 hours.",
  },
  {
    question: "Do you provide the equipment?",
    answer:
      "Yes, all our packages include shooting on the latest iPhone 16 Pro hardware using professional stabilization and lighting gear to ensure cinema-grade mobile quality.",
  },
  {
    question: "Can we shoot at multiple locations?",
    answer:
      "Our Full Day plan is specifically designed for multi-location shoots. For Hourly or Half Day plans, we recommend staying within one general area to maximize shooting time.",
  },
  {
    question: "What is 'Raw Footage Access'?",
    answer:
      "It means you get every single clip we shoot during the session. We send these via a high-speed transfer link so you have all the content for future use or behind-the-scenes posts.",
  },
  {
    question: "Do you handle the script and concepts?",
    answer:
      "Absolutely. We collaborate with you before the shoot to curate the vibe, trending audio selection, and transitions to ensure high conversion and engagement.",
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const [pricingTab, setPricingTab] = useState("regular");

  // Partnership Specific States
  const [partnerModal, setPartnerModal] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkScroll = () => setShowScroll(window.pageYOffset > 400);
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setPartnerModal(null);
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-yellow-400 selection:text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-6 py-4 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div
            className="cursor-pointer flex items-center justify-center overflow-hidden h-10 md:h-14 w-32 md:w-40"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/logo.png"
              alt="CVGPOST Logo"
              className="h-[300%] w-auto max-w-none object-contain brightness-110"
            />
          </div>

          <div className="hidden md:flex flex-1 justify-center gap-10 text-[10px] font-black uppercase tracking-widest text-zinc-400">
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="hover:text-yellow-400 transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="hover:text-yellow-400 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, "pricing")}
              className="hover:text-yellow-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#partnership"
              onClick={(e) => scrollToSection(e, "partnership")}
              className="hover:text-yellow-400 transition-colors"
            >
              Partnership
            </a>
            <a
              href="#testimonials"
              onClick={(e) => scrollToSection(e, "testimonials")}
              className="hover:text-yellow-400 transition-colors"
            >
              Reviews
            </a>
          </div>

          {/* Right Action Button */}
          <div className="flex justify-end min-w-[140px]">
            <motion.a
              href="/booking.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-yellow-400/20"
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 px-4 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-yellow-600 text-[10px] font-black tracking-[0.4em] uppercase mb-6 z-20 text-center"
        >
          Uncompromising Video Standards
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-4xl md:text-7xl font-black mb-16 text-center z-20 max-w-5xl leading-tight tracking-tighter"
        >
          CRAFTED • CURATED •<br />
          <span className="text-yellow-400">COMPLETE</span>
        </motion.h1>

        <div className="relative w-full max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex justify-center items-center z-0 select-none pointer-events-none"
          >
            <h2 className="text-[12vw] font-black text-white leading-none uppercase tracking-tighter">
              CVGPOST
            </h2>
          </motion.div>
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              bounce: 0.3,
            }}
            className="relative z-10 w-[220px] md:w-[270px] aspect-[9/19] bg-black rounded-[3.2rem] border-[9px] border-zinc-900 shadow-2xl overflow-hidden mb-12"
          >
            <div className="flex flex-col h-full bg-black relative">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                alt="Phone Content"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
              <div className="relative z-20 p-6 pt-10 flex flex-col h-full text-left">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md p-1.5 pr-3 rounded-full border border-zinc-800/10">
                    <div className="bg-yellow-400 p-1 rounded-full"></div>
                    <span className="text-[10px] font-black text-white tracking-tighter uppercase">
                      CVGPOST
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-950/10 backdrop-blur-md flex items-center justify-center border border-zinc-800/10">
                    <User size={14} className="text-white" />
                  </div>
                </div>
                <div className="mt-auto">
                  <p className="text-yellow-400 text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                    Live Session
                  </p>
                  <h3 className="text-white text-2xl font-black leading-none uppercase mb-6">
                    Create <br /> Your <br /> Legacy.
                  </h3>
                  <button
                    onClick={() => window.open("/booking.html", "_blank")}
                    className="w-full py-4 bg-yellow-400 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white shadow-lg cursor-pointer active:scale-95 transition-transform"
                  >
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="z-20 flex flex-col md:flex-row gap-4 w-full justify-center px-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/10"
            >
              Book Your Session <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#EAB308" }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => scrollToSection(e, "services")}
              className="bg-transparent text-white border-2 border-zinc-800 px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center cursor-pointer"
            >
              Our Services
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-24 px-6 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
              How We Deliver
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              The CVGPOST Advantage
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  borderColor: "#EAB308",
                  backgroundColor: "#18181b",
                }}
                className="p-10 rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-900 transition-all group cursor-default"
              >
                <div className="mb-6 p-4 bg-zinc-950 rounded-2xl w-fit shadow-sm group-hover:shadow-yellow-100 transition-all">
                  {React.cloneElement(feature.icon, { size: 32 })}
                </div>
                <h3 className="text-xl font-black uppercase mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 font-medium leading-relaxed text-sm text-white text-white">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        id="services"
        className="py-24 px-6 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
              Our Services
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              High Conversion Content
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  boxShadow: "0 0 30px rgba(250, 204, 21, 0.35)",
                  borderColor: "rgba(250, 204, 21, 1)",
                }}
                className="group relative aspect-[9/16] bg-zinc-900 rounded-[2.5rem] overflow-hidden border-2 border-zinc-900 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={project.img}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  alt={project.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-yellow-400 p-5 rounded-full text-black transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                    <Play fill="black" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 text-white z-10 text-left">
                  <p className="text-yellow-400 text-[10px] font-black uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-black leading-tight uppercase">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 px-6 max-w-7xl mx-auto bg-zinc-950 border-t border-zinc-800"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase text-white tracking-tighter">
            Plans & Pricing
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["regular", "wedding", "corporate"].map((tab) => (
              <button
                key={tab}
                onClick={() => setPricingTab(tab)}
                className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${pricingTab === tab ? "bg-yellow-400 text-black shadow-xl scale-105" : "bg-zinc-900 text-gray-400 hover:bg-zinc-40-200"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          key={pricingTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {pricingData[pricingTab].map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -10,
                borderColor: "rgba(250, 204, 21, 1)",
                boxShadow: "0 0 40px rgba(250, 204, 21, 0.3)",
              }}
              className={`p-12 min-h-[600px] rounded-[3rem] border-2 border-zinc-900 transition-all flex flex-col relative ${plan.dark ? "bg-yellow-400 text-black scale-105 shadow-2xl shadow-yellow-200/50" : "bg-zinc-900 text-white border-zinc-800"}`}
            >
              {plan.popular && (
                <div className="absolute top-6 right-8 bg-yellow-400 text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3
                className={`text-xl font-bold mb-2 uppercase tracking-widest ${!plan.dark ? "text-gray-400" : ""}`}
              >
                {plan.title}
              </h3>
              <div
                className={`text-5xl font-black mb-8 ${!plan.dark ? "text-yellow-400" : ""}`}
              >
                {plan.price}
                <span className="text-sm text-white text-white text-gray-400 font-bold">
                  {plan.suffix}
                </span>
              </div>
              <div className="flex-grow">
                <ul className="space-y-6">
                  {plan.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-3 text-sm text-white text-white font-black ${!plan.dark ? "text-zinc-300" : ""}`}
                    >
                      <Check
                        size={18}
                        className={
                          !plan.dark ? "text-yellow-400" : "text-black"
                        }
                      />{" "}
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => window.open("/booking.html", "_blank")}
                className={`w-full py-5 mt-8 rounded-2xl font-black uppercase text-xs tracking-widest transition-all cursor-pointer ${plan.dark ? "bg-black text-white" : "bg-yellow-400 text-white hover:bg-yellow-400 hover:text-white shadow-xl"}`}
              >
                Book {plan.title}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Partnership Section (Reelmakers and Brands) */}
      <section
        id="partnership"
        className="py-24 px-6 bg-zinc-950 border-t border-zinc-800 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
              The Partnership Network
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              Collaboration & Growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Reelmakers Side */}
            <motion.div
              whileHover={{ y: -10, borderColor: "#EAB308" }}
              className="bg-zinc-950 text-white p-12 md:p-16 rounded-[3.5rem] flex flex-col items-center text-center relative overflow-hidden group shadow-2xl border border-zinc-800 transition-all"
            >
              <div className="mb-10 p-6 bg-yellow-400 rounded-3xl w-fit rotate-3 group-hover:rotate-12 transition-transform shadow-lg shadow-yellow-400/20">
                <Users size={42} className="text-black" />
              </div>

              <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 relative z-10 tracking-tighter">
                Creator <br /> Network
              </h3>

              <p className="text-zinc-400 font-medium mb-12 max-w-sm relative z-10 leading-relaxed text-sm text-white text-white">
                Are you a filmmaker or reel maker? Join India's fastest growing
                vertical network. We provide elite projects, high-end gear
                access, and trending strategies.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-md relative z-10">
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-left">
                  <Smartphone size={18} className="text-yellow-400 mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest">
                    Gear Access
                  </p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl text-left">
                  <Trophy size={18} className="text-yellow-400 mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest">
                    Elite Clients
                  </p>
                </div>
              </div>

              <button
                onClick={() => setPartnerModal("creator")}
                className="bg-yellow-400 text-black px-12 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all z-10 shadow-xl shadow-yellow-400/10"
              >
                Apply as Creator
              </button>

              <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-white/5 pointer-events-none uppercase italic group-hover:text-yellow-400/10 transition-colors">
                CREATOR
              </div>
            </motion.div>

            {/* Brands Side */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 border-2 border-zinc-800 p-12 md:p-16 rounded-[3.5rem] flex flex-col items-center text-center relative overflow-hidden group shadow-xl"
            >
              <div className="mb-10 p-6 bg-black rounded-3xl w-fit -rotate-3 group-hover:-rotate-12 transition-transform">
                <Building size={42} className="text-yellow-400" />
              </div>
              <h3 className="text-3xl md:text-5xl font-black uppercase mb-6 relative z-10 tracking-tighter text-white">
                Agency <br /> Solutions
              </h3>
              <p className="text-zinc-400 font-medium mb-12 max-w-sm relative z-10 leading-relaxed text-sm text-white text-white">
                White-labeled production for marketing agencies and brands
                looking to scale. We handle the content so you can handle the
                business. Bulk rates available.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10 w-full max-w-md">
                <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-2xl text-left">
                  <Layers size={18} className="text-white mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Scalable Volume
                  </p>
                </div>
                <div className="bg-zinc-950 border border-zinc-800 p-4 rounded-2xl text-left">
                  <ShieldCheck size={18} className="text-white mb-2" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    IP Protection
                  </p>
                </div>
              </div>

              <button
                onClick={() => setPartnerModal("brand")}
                className="bg-yellow-400 text-black px-12 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all z-10 shadow-xl"
              >
                Request Partnership
              </button>
              <div className="absolute -bottom-10 -right-10 text-[150px] font-black text-white/5 pointer-events-none uppercase italic group-hover:text-white/10 transition-colors">
                BRAND
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 px-6 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">
              Client Testimonials
            </h2>
            <p className="text-zinc-400 font-medium uppercase tracking-widest text-[10px]">
              The community word
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  borderColor: "rgba(250, 204, 21, 1)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                }}
                className="bg-zinc-900/50 p-10 rounded-[2.5rem] border-2 border-zinc-800 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="#EAB308"
                        className="text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote
                    className="text-yellow-400 mb-4 opacity-50"
                    size={32}
                  />
                  <p className="text-zinc-300 font-medium italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                  />
                  <div>
                    <h4 className="font-black text-sm text-white text-white uppercase tracking-tight">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 px-6 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">
              Common Questions
            </h2>
            <p className="text-zinc-400 font-medium uppercase tracking-widest text-[10px]">
              Everything you need to know
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                whileHover={{
                  borderColor: "rgba(250, 204, 21, 1)",
                  boxShadow: "0 0 30px rgba(250, 204, 21, 0.15)",
                }}
                className="border-2 border-zinc-800 rounded-[2rem] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left"
                >
                  <span className="text-lg font-black uppercase tracking-tight text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: activeIndex === i ? 180 : 0 }}
                    className="text-yellow-400"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-gray-600 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-black mb-6 tracking-tighter cursor-default text-white"
          >
            CVGPOST<span className="text-yellow-400">.</span>
          </motion.div>

          <p className="text-zinc-500 text-[10px] mb-10 uppercase tracking-[0.3em] font-black">
            Hyderabad
          </p>

          <div className="w-full max-w-md h-[1px] bg-zinc-900 mb-8" />

          <div className="text-center">
            <p className="text-zinc-600 text-[9px] tracking-[0.2em] uppercase font-bold">
              © 2026 CVGPOST. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>

      {/* PARTNER MODEL SYSTEM */}
      <AnimatePresence>
        {partnerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-zinc-950 rounded-[3.5rem] w-full max-w-2xl overflow-hidden relative shadow-[0_0_100px_rgba(250,204,21,0.2)]"
            >
              <button
                onClick={() => setPartnerModal(null)}
                className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowRight size={24} className="rotate-180" />
              </button>

              <div className="p-12 md:p-16">
                {!formSubmitted ? (
                  <>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-yellow-400 rounded-2xl">
                        {partnerModal === "creator" ? (
                          <Users size={24} />
                        ) : (
                          <Building size={24} />
                        )}
                      </div>
                      <h2 className="text-4xl font-black uppercase tracking-tighter">
                        {partnerModal === "creator"
                          ? "Apply Now"
                          : "Partner with us"}
                      </h2>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          required
                          placeholder="Full Name"
                          className="w-full p-5 bg-zinc-900 rounded-2xl border-2 border-zinc-900 focus:border-yellow-400 outline-none font-bold text-sm text-white text-white"
                        />
                        <input
                          required
                          type="email"
                          placeholder="Email Address"
                          className="w-full p-5 bg-zinc-900 rounded-2xl border-2 border-zinc-900 focus:border-yellow-400 outline-none font-bold text-sm text-white text-white"
                        />
                      </div>
                      <input
                        required
                        placeholder={
                          partnerModal === "creator"
                            ? "Instagram / Portfolio Link"
                            : "Company / Brand Name"
                        }
                        className="w-full p-5 bg-zinc-900 rounded-2xl border-2 border-zinc-900 focus:border-yellow-400 outline-none font-bold text-sm text-white text-white"
                      />
                      <textarea
                        required
                        placeholder="Tell us about your goals..."
                        className="w-full p-5 bg-zinc-900 rounded-2xl border-2 border-zinc-900 focus:border-yellow-400 outline-none font-bold text-sm text-white text-white h-32 resize-none"
                      ></textarea>
                      <button className="w-full bg-yellow-400 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-yellow-400 hover:text-white transition-all flex items-center justify-center gap-3">
                        Send Application <Send size={16} />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <Check size={40} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                      Submitted!
                    </h2>
                    <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                      We will reach out within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons: WhatsApp & Scroll Up */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-row items-center justify-end gap-4">
        <motion.a
          href="https://wa.me/918801106361?text=Hi%20CVGPost%2C%20I'm%20interested%20in%20your%20production%20services%20and%20would%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-[#25D366] text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 group border border-zinc-800/10 mr-2"
        >
          <MessageCircle
            size={22}
            fill="white"
            className="group-hover:rotate-12 transition-transform"
          />
          <span className="text-[11px] font-black uppercase tracking-widest">
            Chat with us
          </span>
          <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-pulse opacity-40 pointer-events-none"></span>
        </motion.a>
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative z-10 bg-yellow-400 text-white p-4 rounded-2xl shadow-2xl group flex items-center justify-center border border-zinc-800/5"
            >
              <ArrowUp
                size={24}
                strokeWidth={3}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;

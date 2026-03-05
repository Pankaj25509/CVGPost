import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
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
const serviceData = [
  {
    id: 1,
    name: "Birthday Recap",
    cat: "Personal Events",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Proposal Shoot",
    cat: "Personal Events",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Family Gala",
    cat: "Personal Events",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "Viral Hook",
    cat: "Influencers",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Creator Edit",
    cat: "Influencers",
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Trend Setter",
    cat: "Influencers",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 7,
    name: "Product Promo",
    cat: "Brands",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Brand Story",
    cat: "Brands",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Commercial Cut",
    cat: "Brands",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 10,
    name: "Cinematic Vows",
    cat: "Weddings",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "The Big Day",
    cat: "Weddings",
    img: "https://plus.unsplash.com/premium_photo-1675851210855-e7727076e829?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Wedding Teaser",
    cat: "Weddings",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 13,
    name: "Supercar Reveal",
    cat: "Cars & Bikes",
    img: "https://images.unsplash.com/photo-1628519592419-bf288f08cef5?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "Track Day",
    cat: "Cars & Bikes",
    img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Neon Ride",
    cat: "Cars & Bikes",
    img: "https://plus.unsplash.com/premium_photo-1686730540277-c7e3a5571553?q=80&w=764&auto=format&fit=crop",
  },

  {
    id: 16,
    name: "Urban Style",
    cat: "Portraits",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 17,
    name: "Studio Mood",
    cat: "Portraits",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 18,
    name: "Golden Hour",
    cat: "Portraits",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
  },

  {
    id: 19,
    name: "Model Collab",
    cat: "Collabs",
    img: "https://plus.unsplash.com/premium_photo-1677529485307-34dc32286a21?q=80&w=687&auto=format&fit=crop",
  },
  {
    id: 20,
    name: "Artistic Vision",
    cat: "Collabs",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 21,
    name: "Studio Collab",
    cat: "Collabs",
    img: "https://images.unsplash.com/photo-1631203924626-549ba231917e?q=80&w=688&auto=format&fit=crop",
  },

  {
    id: 22,
    name: "Luxury Villa",
    cat: "Real Estate",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 23,
    name: "Modern Office",
    cat: "Real Estate",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 24,
    name: "Penthouse Tour",
    cat: "Real Estate",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
  },
];

const categories = [
  "Personal Events",
  "Influencers",
  "Brands",
  "Weddings",
  "Cars & Bikes",
  "Portraits",
  "Collabs",
  "Real Estate",
];
const AnimatedBadge = () => {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
    >
      <Sparkles size={14} className="text-orange-500 animate-pulse" />
      <span className="text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent">
        Professional Reelmaking Services
      </span>
    </motion.div>
  );
};

// --- DATA ---
const features = [
  {
    icon: <Award className="text-yellow-400" />,
    title: "Quality Work",
    desc: "Cinema-grade mobile visuals shot on iPhone hardware for maximum clarity.",
  },
  {
    icon: <Clock className="text-yellow-400" />,
    title: "Fast Turnaround",
    desc: "Get your stunning reels delivered within 24-48 hours without compromising on quality.",
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
        "Shot on iPhone",
        "1 Professional Reel",
        "Raw Footage Access",
        "CVGPost Logo Mandatory",
      ],
      dark: false,
    },
    {
      title: "Half Day",
      price: "₹4,799",
      features: [
        "3 Hours Coverage",
        "2 Professional Reels",
        "Raw Footage Access",
        "Drone Footage",
        "Extra Reel",
        "Hand-Light",
        "Customized Reel Edit",
        "CVGPost Logo Mandatory",
      ],
      dark: false,
    },
  ],
  wedding: [
    {
      title: "Starter",
      price: "₹11,999",
      suffix: "+GST",
      features: [
        "Shot on iPhone",
        "Covers 1 Event",
        "3 Reels",
        "CVGPost Logo Mandatory",
      ],
      dark: false,
    },
    {
      title: "Elevate",
      price: "₹21,999",
      suffix: "+GST",
      features: [
        "Shot on iPhone",
        "Covers 2 Events",
        "5 Reels + 1 Reel Complimentary",
        "CVGPost Logo Mandatory",
      ],
      dark: false,
    },
    {
      title: "Classic",
      price: "₹34,999",
      suffix: "+GST",
      features: [
        "Shot on iPhone",
        "Covers 3 Events",
        "8 Reels + 2 Reels Complimentary",
        "CVGPost Logo Mandatory",
      ],
      dark: false,
    },
    {
      title: "Signature",
      price: "₹54,999",
      suffix: "+GST",
      features: [
        "Shot on iPhone",
        "Covers 4 Events",
        "12 Reels + 3 Reels Complimentary",
        "Complimentary HD Photos",
        "CVGPost Logo Mandatory",
        "Drone Shoot for 1 Event Complimentary",
      ],
      dark: false,
    },
    {
      title: "Prestige",
      price: "₹66,999",
      suffix: "+GST",
      features: [
        "Shot on iPhone",
        "Covers 5 Events",
        "16 Reels + 4 Reels Complimentary",
        "Complimentary HD Photos",
        "CVGPost Logo Mandatory",
        "Drone Shoot for 2 Event Complimentary",
      ],
      dark: false,
    },
    {
      title: "Royal",
      price: "₹79,999",
      suffix: "+GST",
      features: [
        "Shot on iPhone",
        "Covers 6 Events",
        "20 Reels + 5 Reels Complimentary",
        "Complimentary HD Photos",
        "CVGPost Logo Mandatory",
        "Drone Shoot for 3 Event Complimentary",
      ],
      dark: false,
    },
  ],
  business: [
    {
      title: "Smart Price Option",
      price: "₹10,000",
      suffix: "",
      features: [
        "Cinematic visuals",
        "Complete brand story",
        "Customer testimonials",
        "Expert-led production",
        "Seamless coordination",
        "Polished visual output",
        "Campaign & launch ready",
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
  const [activeTab, setActiveTab] = useState("Personal Events");
  const displayReels = serviceData.filter((reel) => reel.cat === activeTab);
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

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

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
              Why Us
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="hover:text-yellow-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, "pricing")}
              className="hover:text-yellow-400 transition-colors"
            >
              Packages
            </a>
            <a
              href="#partnership"
              onClick={(e) => scrollToSection(e, "works")}
              className="hover:text-yellow-400 transition-colors"
            >
              Our Works
            </a>
            <a
              href="#partnership"
              onClick={(e) => scrollToSection(e, "partnership")}
              className="hover:text-yellow-400 transition-colors"
            >
              Partner
            </a>
            <a
              href="#partnership"
              onClick={(e) => scrollToSection(e, "")}
              className="hover:text-yellow-400 transition-colors"
            >
              Contact
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
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-300 text-[10px] font-black tracking-[0.4em] uppercase mb-6 z-20 text-center"
        >
          CRAFTED • CURATED • COMPLETE
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-transparent bg-clip-text bg-gradient-to-br from-orange-600 via-orange-400 to-yellow-200 text-4xl md:text-7xl font-black mb-16 text-center z-20 max-w-5xl leading-tight tracking-tighter"
        >
          Create Stunning Reels That
          <br />
          Capture Attention
        </motion.h1>

        <div className="relative w-full max-w-4xl flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 flex justify-center items-center z-0 select-none pointer-events-none"
          >
            <h2 className="text-[8vw] font-black text-white leading-none uppercase tracking-tighter">
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
            className="relative z-10 w-[180px] md:w-[220px] aspect-[9/19] bg-black rounded-[2.8rem] md:rounded-[3.2rem] border-[7px] border-zinc-900 shadow-2xl overflow-hidden mb-12"
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
              onClick={() => window.open("/booking", "_self")}
              className="bg-yellow-400 text-black px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-xl shadow-yellow-400/10 cursor-pointer"
            >
              Book Your Session <ArrowRight size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#EAB308" }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => scrollToSection(e, "works")}
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
              Where Your Story Meets Our Lens
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              A fusion of technical expertise and creative intuition, designed
              to deliver reels that resonate long after the first view.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -10,
                  borderColor: "#EAB308",
                  backgroundColor: "#18181b",
                }}
                className="p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-900 transition-all group cursor-default"
              >
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-zinc-950 rounded-xl md:rounded-2xl w-fit shadow-sm group-hover:shadow-yellow-100 transition-all">
                  {React.cloneElement(feature.icon, {
                    className: "w-6 h-6 md:w-8 md:h-8 text-yellow-400",
                  })}
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase mb-2 md:mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 font-medium leading-relaxed text-xs md:text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-24 px-4 md:px-6 max-w-7xl mx-auto bg-zinc-950 border-t border-zinc-800"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase text-white tracking-tighter">
            Choose Your Perfect Plan
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">
            Simple pricing for extraordinary results.
          </p>
        </div>

        {/* Regular Pricing Tiles (2 Tiles) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 justify-center max-w-5xl mx-auto">
          {pricingData.regular.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, borderColor: "rgba(250, 204, 21, 0.5)" }}
              className="p-8 md:p-12 rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-900 text-white transition-all flex flex-col"
            >
              <h3 className="text-lg font-bold mb-2 uppercase tracking-widest text-zinc-500">
                {plan.title}
              </h3>
              <div className="text-4xl md:text-5xl font-black mb-8 text-yellow-400">
                {plan.price}
                <span className="text-sm ml-1 text-zinc-500">
                  {plan.suffix}
                </span>
              </div>
              <ul className="space-y-4 flex-grow">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs md:text-sm font-black text-zinc-300"
                  >
                    <Check
                      size={18}
                      className="text-yellow-400 flex-shrink-0"
                    />{" "}
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  window.open("booking.html", "_blank");
                }}
                className="w-full py-5 mt-8 rounded-2xl font-black uppercase text-[10px] bg-yellow-400 text-black hover:bg-white transition-all"
              >
                Book {plan.title}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Wide Category Tiles (Wedding & Business) */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {/* Wedding Wide Tile */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-900 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-grow">
              <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px]">
                Cinematic Stories
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mt-2 mb-4">
                Wedding Collections
              </h3>
              <p className="text-zinc-400 text-sm md:text-base max-w-md font-medium mb-6">
                From intimate ceremonies to royal celebrations. Starting from{" "}
                <span className="text-white font-bold">₹11,999</span>.
              </p>
            </div>
            <button
              onClick={() => {
                window.open("booking.html", "_blank");
              }}
              className="w-full md:w-auto px-12 py-5 rounded-2xl bg-yellow-400 text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all"
            >
              Know More
            </button>
          </motion.div>

          {/* Business Wide Tile */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[2.5rem] border-2 border-zinc-800 bg-zinc-900 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
          >
            <div className="flex-grow">
              <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-[10px]">
                Brand Strategy
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase mt-2 mb-4">
                Business & Brands
              </h3>
              <p className="text-zinc-400 text-sm md:text-base max-w-md font-medium mb-6">
                High-conversion commercial content designed to scale your brand
                presence.
              </p>
            </div>
            <button
              onClick={() => {
                window.open("booking.html", "_blank");
              }}
              className="w-full md:w-auto px-12 py-5 rounded-2xl bg-yellow-400 text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all"
            >
              Book Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Our Works */}
      <section
        id="works"
        className="py-24 px-6 bg-zinc-950 border-t border-zinc-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter text-white">
              Our Portfolio
            </h2>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
              Cinematic Excellence across every category.
            </p>
          </div>
          <div className="flex overflow-x-auto md:justify-center gap-6 mb-16 pb-4 scrollbar-hide no-scrollbar">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] pb-2 transition-all border-b-2 whitespace-nowrap ${
                  activeTab === tab
                    ? "border-yellow-400 text-yellow-400"
                    : "border-transparent text-zinc-600 hover:text-zinc-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <AnimatePresence mode="wait">
              {displayReels.map((reel) => (
                <motion.div
                  key={reel.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 0 40px rgba(250, 204, 21, 0.3)",
                    borderColor: "#EAB308",
                  }}
                  className="group relative aspect-[9/16] bg-zinc-900 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-2 border-zinc-900 transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={reel.img}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    alt={reel.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-0 group-hover:opacity-30" />
                      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                        <Play size={24} fill="black" className="ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-left">
                    <p className="text-yellow-400 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-1">
                      {activeTab}
                    </p>
                    <h3 className="text-xl md:text-2xl font-black uppercase leading-tight text-white">
                      {reel.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
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

              <p className="text-zinc-400 font-medium mb-12 max-w-sm relative z-10 leading-relaxed text-sm text-white">
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
              <p className="text-zinc-400 font-medium mb-12 max-w-sm relative z-10 leading-relaxed text-sm text-white">
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
                    <h4 className="font-black text-sm text-white uppercase tracking-tight">
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
                          className="w-full p-5 bg-zinc-900 rounded-2xl border-2 border-zinc-900 focus:border-yellow-400 outline-none font-bold text-sm text-white"
                        />
                        <input
                          required
                          type="email"
                          placeholder="Email Address"
                          className="w-full p-5 bg-zinc-900 rounded-2xl border-2 border-zinc-900 focus:border-yellow-400 outline-none font-bold text-sm text-white"
                        />
                      </div>
                      <input
                        required
                        placeholder={
                          partnerModal === "creator"
                            ? "Instagram / Portfolio Link"
                            : "Company / Brand Name"
                        }
                        className="w-full p-5 bg-zinc-900 rounded-2xl border-2 border-zinc-900 focus:border-yellow-400 outline-none font-bold text-sm text-white"
                      />
                      <textarea
                        required
                        placeholder="Tell us about your goals..."
                        className="w-full p-5 bg-zinc-900 rounded-2xl border-2 border-zinc-900 focus:border-yellow-400 outline-none font-bold text-sm text-white h-32 resize-none"
                      ></textarea>
                      <button className="w-full bg-yellow-400 text-black py-6 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-yellow-400 hover:text-white transition-all flex items-center justify-center gap-3">
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
              className="relative z-10 bg-yellow-400 text-black p-4 rounded-2xl shadow-2xl group flex items-center justify-center border border-zinc-800/5"
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

      {/* FIXED: BOOKING MODAL WAS OUTSIDE THE COMPONENT, MOVED INSIDE */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem] w-full max-w-lg relative shadow-2xl"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsBookingOpen(false)}
                className="absolute top-6 right-8 text-zinc-500 hover:text-yellow-400 text-2xl"
              >
                ✕
              </button>

              <h2 className="text-3xl font-black text-white uppercase mb-2">
                Book {selectedPlan}
              </h2>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-8">
                Secure your date below
              </p>

              <form className="space-y-4">
                <input
                  placeholder="Your Name"
                  className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-white outline-none focus:border-yellow-400"
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-white outline-none focus:border-yellow-400"
                />
                <input
                  type="date"
                  className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-white [color-scheme:dark]"
                />

                <button
                  type="button"
                  onClick={() => {
                    alert("Request Sent!");
                    setIsBookingOpen(false);
                  }}
                  className="w-full py-5 bg-yellow-400 text-black font-black uppercase rounded-2xl hover:bg-white transition-all"
                >
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

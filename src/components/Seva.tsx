import React from 'react';
import { motion } from 'motion/react';
import { Heart, Gift, Award, TrendingUp, ChevronRight, Users } from 'lucide-react';
import GebukHeader from './ui/GebukHeader';

interface Props {
  language: 'en' | 'hi';
}

const Seva: React.FC<Props> = ({ language }) => {
  const campaigns = [
    { 
      title: language === 'en' ? "Go-Seva: Cow Protection" : "गौ-सेवा: गाय संरक्षण",
      progress: 65, 
      goal: "₹5,00,000", 
      donors: 124,
      image: "https://images.unsplash.com/photo-1541011858348-18501062024b?w=400&auto=format&fit=crop&q=60"
    },
    { 
      title: language === 'en' ? "Daily Prasadam Feed" : "दैनिक प्रसादम",
      progress: 42, 
      goal: "₹2,00,000", 
      donors: 88,
      image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=400&auto=format&fit=crop&q=60"
    }
  ];

  const badges = [
    { name: "Protector", icon: TrendingUp, color: "text-blue-500" },
    { name: "Giver", icon: Gift, color: "text-pink-500" },
    { name: "Champion", icon: Award, color: "text-premium-gold" },
  ];

  return (
    <div className="space-y-8">
      <GebukHeader 
        subtitle={language === 'en' ? "Transcendental Offerings" : "दिव्य भेंट"}
        title={language === 'en' ? "Seva Portal" : "सेवा पोर्टल"}
      />

      {/* Donor Recognition Banner */}
      <div className="matte-card p-6 flex items-center justify-between border-dashed border-premium-gold/30 bg-premium-gold/[0.03]">
        <div className="flex items-center gap-5">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-matte-black bg-matte-gray flex items-center justify-center text-[10px] text-gray-500 font-black">
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <div>
            <p className="text-[10px] text-white font-black uppercase tracking-widest leading-none mb-1">
              {language === 'en' ? 'Join 2.4k Donors' : '2.4k दाताओं से जुड़ें'}
            </p>
            <p className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter">Community Impact Shield</p>
          </div>
        </div>
        <ChevronRight size={16} className="text-premium-gold" />
      </div>

      {/* Active Campaigns */}
      <div className="space-y-6">
        <div className="flex justify-between items-end px-1">
          <h2 className="text-xl font-bold tracking-tight">Priority Campaigns</h2>
          <span className="text-[10px] text-premium-gold font-black uppercase tracking-widest">See All</span>
        </div>

        {campaigns.map((camp, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -4 }}
            className="matte-card p-0 overflow-hidden bg-white/[0.01]"
          >
            <div className="h-28 w-full relative">
              <img src={camp.image} alt={camp.title} className="w-full h-full object-cover grayscale opacity-30 transition-all duration-700 group-hover:opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent" />
            </div>
            
            <div className="p-6 space-y-5">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-white text-lg leading-tight w-2/3 tracking-tight">{camp.title}</h3>
                <div className="bg-premium-gold/10 px-3 py-1.5 rounded-xl border border-premium-gold/20">
                  <p className="text-[10px] font-black text-premium-gold uppercase tracking-widest">{camp.goal}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-2xl font-black text-premium-gold">{camp.progress}%</span>
                    <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest ml-2">Progress</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-black flex items-center gap-1.5">
                    <Users size={12} strokeWidth={3} /> {camp.donors} Active
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${camp.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-premium-gold shadow-[0_0_12px_rgba(212,175,55,0.5)]"
                  />
                </div>
              </div>

              <button className="w-full py-4 bg-white/5 hover:bg-premium-gold hover:text-matte-black text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-2xl transition-all flex items-center justify-center gap-3 border border-white/5 hover:shadow-gold">
                <Heart size={16} fill="currentColor" /> Participate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Rewards & Badges */}
      <section className="space-y-4 pb-12">
        <h2 className="text-xl font-bold tracking-tight">Your Hall of Fame</h2>
        <div className="grid grid-cols-3 gap-4">
          {badges.map((badge, i) => (
            <div key={i} className="matte-card p-4 flex flex-col items-center gap-3 bg-gradient-to-b from-white/[0.02] to-transparent border-white/5">
              <div className={`p-3 rounded-2xl bg-white/5 ${badge.color}`}>
                <badge.icon size={22} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-600 text-center">{badge.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Seva;


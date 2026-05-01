import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Sun, Clock, MapPin, Users, ChevronRight, Moon, Trophy, Bell } from 'lucide-react';
import GebukHeader from './ui/GebukHeader';

interface Props {
  language: 'en' | 'hi';
}

const Dashboard: React.FC<Props> = ({ language }) => {
  const content = {
    en: {
      greeting: "Hare Krishna, Arjun",
      subtitle: "Daily Darshan",
      ekadashi: "Next Ekadashi",
      ekadashiDate: "Mohini Ekadashi",
      parana: "Parana: 05:24 - 09:42",
      nearby: "Sanga Nearby",
    },
    hi: {
      greeting: "हरे कृष्ण, अर्जुन",
      subtitle: "दैनिक दर्शन",
      ekadashi: "अगली एकादशी",
      ekadashiDate: "मोहिनी एकादशी",
      parana: "पारणा: 05:24 - 09:42",
      nearby: "पास के भक्त",
    }
  }[language];

  return (
    <div className="space-y-8">
      <GebukHeader 
        subtitle={content.subtitle}
        title={content.greeting}
      />

      {/* Ekadashi Portal Card */}
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="matte-card bg-gradient-to-br from-shyam-blue/90 via-matte-black/95 to-peacock-blue/20 border-pitambara/20 relative overflow-hidden group shadow-[0_30px_60px_-12px_rgba(10,17,40,0.6)]"
      >
        <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none group-hover:scale-125 transition-transform duration-[4s] ease-out">
          <Moon size={180} className="text-pitambara rotate-12 blur-[2px]" />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-pitambara mb-4">
            <div className="w-2 h-2 rounded-full bg-pitambara animate-pulse shadow-[0_0_12px_rgba(247,127,0,0.8)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">{content.ekadashi}</span>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-3xl font-black text-white tracking-tighter leading-none">{content.ekadashiDate}</p>
              <div className="flex items-center gap-3 text-pitambara/60 text-[10px] font-black mt-2 uppercase tracking-widest">
                <Clock size={12} strokeWidth={3} />
                <span>{content.parana}</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button className="flex-1 bg-pitambara text-shyam-blue font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest shadow-[0_10px_20px_-5px_rgba(247,127,0,0.3)] hover:brightness-110 active:scale-95 transition-all">
                {language === 'en' ? 'SET REMINDER' : 'रिमाइंडर'}
              </button>
              <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-pitambara/30 transition-all">
                <Bell size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Quick View */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: language === 'en' ? 'Rounds' : 'माला', value: '16/16', icon: Sun, color: 'text-pitambara', bg: 'bg-pitambara/10' },
          { label: language === 'en' ? 'Sanga' : 'संग', value: '12', icon: Users, color: 'text-peacock-green', bg: 'bg-peacock-green/10' },
          { label: language === 'en' ? 'Points' : 'अंक', value: '850', icon: Trophy, color: 'text-premium-gold', bg: 'bg-premium-gold/10' },
        ].map((stat, i) => (
          <div key={i} className="matte-card p-4 flex flex-col items-center text-center gap-2 bg-white/[0.01]">
            <div className={`p-2 rounded-xl border border-white/5 ${stat.bg} ${stat.color}`}>
              <stat.icon size={18} />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{stat.value}</p>
              <p className="text-[8px] uppercase tracking-widest text-gray-600 font-black">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Sanga Nearby Peek */}
      <section className="space-y-4">
        <div className="flex justify-between items-end px-1">
          <h2 className="text-xl font-bold tracking-tight">{content.nearby}</h2>
          <span className="text-[10px] text-premium-gold font-black uppercase tracking-widest">Global Map</span>
        </div>
        
        <div className="space-y-3">
          {[
            { name: 'Dr. Vivek Sharma', role: 'Bhakti Shastri', dist: '0.4km', active: true },
            { name: 'Meera Dasi', role: 'Kirtan Lead', dist: '1.2km', active: false },
          ].map((devotee, i) => (
            <div key={i} className="matte-card p-5 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-matte-gray flex items-center justify-center text-premium-gold border border-white/5 text-lg font-bold">
                    {devotee.name[0]}
                  </div>
                  {devotee.active && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-matte-black" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-bold text-white tracking-tight">{devotee.name}</p>
                  <p className="text-[10px] text-gray-500 font-medium">{devotee.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-black">
                <MapPin size={10} strokeWidth={3} />
                {devotee.dist}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;


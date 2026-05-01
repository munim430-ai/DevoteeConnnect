import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  BookOpen, 
  Heart, 
  Headphones, 
  ChevronRight,
  Sparkles,
  Search,
  Compass
} from 'lucide-react';
import GebukHeader from './ui/GebukHeader';
import Sanga from './Sanga';
import AIWisdom from './AIWisdom';
import Seva from './Seva';
import SatsangVault from './SatsangVault';

interface Props {
  language: 'en' | 'hi';
}

type HubSection = 'menu' | 'sanga' | 'vault' | 'ai' | 'seva';

const Hub: React.FC<Props> = ({ language }) => {
  const [activeSection, setActiveSection] = useState<HubSection>('menu');

  const menuItems = [
    { 
      id: 'sanga', 
      icon: MapPin, 
      title: language === 'en' ? 'Sanga Explorer' : 'संग खोजक',
      desc: language === 'en' ? 'Find devotees nearby' : 'पास के भक्तों को खोजें',
      color: 'text-peacock-green',
      bg: 'bg-peacock-green/10'
    },
    { 
      id: 'vault', 
      icon: Headphones, 
      title: language === 'en' ? 'Satsang Vault' : 'सत्संग वॉल्ट',
      desc: language === 'en' ? 'Divine audio library' : 'दिव्य ऑडियो लाइब्रेरी',
      color: 'text-shyam-blue',
      bg: 'bg-shyam-blue/20'
    },
    { 
      id: 'ai', 
      icon: BookOpen, 
      title: language === 'en' ? 'AI Wisdom Guide' : 'AI ज्ञान मार्ग',
      desc: language === 'en' ? 'Ask spiritual questions' : 'आध्यात्मिक प्रश्न पूछें',
      color: 'text-premium-gold',
      bg: 'bg-premium-gold/10'
    },
    { 
      id: 'seva', 
      icon: Heart, 
      title: language === 'en' ? 'Seva Opportunities' : 'सेवा के अवसर',
      desc: language === 'en' ? 'Serve the mission' : 'मिशन की सेवा करें',
      color: 'text-red-400',
      bg: 'bg-red-400/10'
    }
  ];

  if (activeSection !== 'menu') {
    return (
      <div className="space-y-6">
        <button 
          onClick={() => setActiveSection('menu')}
          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-4 group"
        >
          <ChevronRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Back to Hub</span>
        </button>
        {activeSection === 'sanga' && <Sanga language={language} />}
        {activeSection === 'vault' && <SatsangVault language={language} />}
        {activeSection === 'ai' && <AIWisdom language={language} />}
        {activeSection === 'seva' && <Seva language={language} />}
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-20">
      <GebukHeader 
        subtitle={language === 'en' ? "Central Portal" : "मुख्य पोर्टल"}
        title={language === 'en' ? "Spiritual Hub" : "आध्यात्मिक केंद्र"}
      />

      {/* Hero Search / Quick Access */}
      <div className="relative group">
        <div className="absolute inset-x-0 -top-4 -bottom-4 bg-gradient-to-r from-pitambara/10 via-transparent to-peacock-green/10 blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
        <div className="matte-card p-6 bg-shyam-blue/20 border-white/5 flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <Compass size={100} className="text-pitambara" />
          </div>
          <div className="relative z-10">
            <h3 className="text-lg font-black text-white tracking-tight uppercase mb-1">{language === 'en' ? 'Deep Search' : 'गहन खोज'}</h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{language === 'en' ? 'Explore all resources' : 'सभी संसाधनों का पता लगाएं'}</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-pitambara text-shyam-blue flex items-center justify-center shadow-lg relative z-10">
            <Search size={22} strokeWidth={3} />
          </div>
        </div>
      </div>

      {/* Hub Menu Grid */}
      <div className="grid grid-cols-1 gap-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveSection(item.id as HubSection)}
              className="matte-card p-5 bg-white/[0.01] flex items-center justify-between border-white/5 hover:border-pitambara/20 transition-all group text-left"
            >
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center border border-white/5 shadow-sm group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="text-base font-black text-white tracking-tight uppercase leading-none mb-1.5">{item.title}</h4>
                  <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-700 group-hover:text-pitambara group-hover:bg-white/10 transition-all">
                <ChevronRight size={16} strokeWidth={3} />
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Featured Insight Tip */}
      <div className="matte-card p-6 bg-gradient-to-br from-shyam-blue/40 to-black/40 border-pitambara/10 mt-8">
        <div className="flex items-center gap-2 text-pitambara mb-3">
          <Sparkles size={14} />
          <span className="text-[9px] font-black uppercase tracking-[0.3em]">Hub Insight</span>
        </div>
        <p className="text-xs text-gray-400 italic leading-relaxed">
          "The Sangam of devotees is the highest platform of spiritual progression. Explore the Explorer to find your tribe."
        </p>
      </div>
    </div>
  );
};

export default Hub;

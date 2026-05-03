import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ChevronRight, 
  Play, 
  Shield, 
  Users, 
  Cloud,
  Zap,
  Globe
} from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A1128] text-white overflow-y-auto max-h-[850px] scrollbar-hide">
      {/* Navigation */}
      <nav className="p-8 flex justify-between items-center z-50 sticky top-0 bg-[#0A1128]/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-pitambara flex items-center justify-center rotate-45">
            <span className="text-[#0A1128] font-black -rotate-45">ॐ</span>
          </div>
          <span className="font-black tracking-tighter text-lg">DevoteeConnect</span>
        </div>
        <button className="text-[10px] font-black uppercase tracking-widest text-[#F77F00]">Early Access</button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 pt-16 pb-24 text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pitambara/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-pitambara" />
          <span className="text-[10px] font-black uppercase tracking-widest text-pitambara">Next-Gen Spiritual OS</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
        >
          ELEVATE YOUR <br/> SADHANA.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed"
        >
          A unified dashboard for the modern devotee. Track chants, connect with sanga, and access divine wisdom.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col gap-4"
        >
          <button className="w-full bg-white text-[#0A1128] font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest shadow-xl">
             Launch Portal
          </button>
          <button className="w-full bg-white/5 border border-white/10 font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest flex items-center justify-center gap-3">
             <Play size={16} fill="currentColor" /> Watch Vision
          </button>
        </motion.div>
      </section>

      {/* Features Bento */}
      <section className="p-8 grid grid-cols-1 gap-4">
        {[
          { icon: Zap, title: 'Real-time Sadhana', desc: 'Precise chant tracking with global leaderboards.', color: 'text-pitambara' },
          { icon: Globe, title: 'Global Sanga', desc: 'Find devotees in your city and build community.', color: 'text-peacock-green' },
          { icon: Shield, title: 'Wisdom AI', desc: 'Verified spiritual answers based on shastras.', color: 'text-shyam-blue' },
        ].map((feat, i) => (
          <div key={i} className="matte-card p-8 bg-white/[0.01] border-white/10 space-y-4">
            <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${feat.color}`}>
              <feat.icon size={24} />
            </div>
            <h3 className="text-xl font-bold tracking-tight">{feat.title}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
          </div>
        ))}
      </section>

      {/* Philosophy Section */}
      <section className="p-8 pb-32">
        <div className="matte-card p-10 bg-gradient-to-br from-[#0A1128] to-black border-pitambara/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Cloud size={200} />
          </div>
          <div className="relative z-10 space-y-6 text-center">
            <div className="w-2 h-2 rounded-full bg-pitambara mx-auto animate-pulse" />
            <h2 className="text-3xl font-black tracking-tighter">Technology <br/> Meet Transcendence.</h2>
            <p className="text-xs text-gray-400 italic">"Yoga is the journey of the self, through the self, to the self."</p>
            <button className="text-[10px] font-black uppercase tracking-widest border-b border-pitambara pb-1 text-pitambara">Read Our Vision</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

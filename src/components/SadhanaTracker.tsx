import React, { useState } from 'react';
import { motion, useAnimation } from 'motion/react';
import { RefreshCcw, Save, ShieldCheck, Zap, Sun } from 'lucide-react';
import GebukHeader from './ui/GebukHeader';

interface Props {
  language: 'en' | 'hi';
}

const SadhanaTracker: React.FC<Props> = ({ language }) => {
  const [rounds, setRounds] = useState(0);
  const [beads, setBeads] = useState(0);
  const controls = useAnimation();

  const handleBeadClick = () => {
    if (beads >= 107) {
      setBeads(0);
      setRounds(r => r + 1);
    } else {
      setBeads(b => b + 1);
    }
    controls.start({
      scale: [1, 0.92, 1],
      transition: { duration: 0.1, ease: "easeOut" }
    });
  };

  return (
    <div className="space-y-8 flex flex-col items-center h-full">
      <GebukHeader 
        subtitle={language === 'en' ? "Transcendental Vibrations" : "दिव्य ध्वनि"}
        title={language === 'en' ? "Digital Mala" : "डिजिटल माला"}
        align="center"
      />

      {/* Stats Overview */}
      <div className="flex gap-4 w-full">
        <div className="matte-card flex-1 p-6 bg-gradient-to-tr from-shyam-blue/20 to-black border-pitambara/10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-pitambara/60 font-black mb-2">
            {language === 'en' ? 'Completed' : 'पूर्ण'}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-pitambara">{rounds}</span>
            <span className="text-xs text-gray-700 font-bold">/ 16</span>
          </div>
        </div>
        <div className="matte-card flex-1 p-6 bg-gradient-to-tr from-matte-gray to-black border-white/10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-black mb-2">
            {language === 'en' ? 'Bead' : 'मनका'}
          </p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white">{beads}</span>
            <span className="text-xs text-gray-700 font-bold">/ 108</span>
          </div>
        </div>
      </div>

      {/* Digital Mala Visualizer */}
      <div className="relative flex items-center justify-center py-10 scale-110">
        <motion.div 
          animate={controls}
          onClick={handleBeadClick}
          className="relative w-64 h-64 rounded-full border-[12px] border-matte-gray flex items-center justify-center cursor-pointer select-none ring-[16px] ring-pitambara/5 shadow-[0_0_60px_-15px_rgba(247,127,0,0.1)] active:ring-pitambara/10 transition-all border-shyam-blue/20"
        >
          {/* Beads Decoration - Refined */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-3.5 h-3.5 rounded-full bg-matte-gray border border-white/5 shadow-2xl"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-128px)`,
                boxShadow: beads > (i * 9) ? '0 0 10px rgba(247, 127, 0, 0.4)' : 'none',
                borderColor: beads > (i * 9) ? '#F77F00' : 'rgba(255,255,255,0.05)',
                backgroundColor: beads > (i * 9) ? '#F77F00' : '#121212'
              }}
            />
          ))}

          {/* Active Progress Ring */}
          <svg className="absolute w-full h-full -rotate-90 scale-[1.02]">
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="transparent"
              stroke="#F77F00"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={754}
              strokeDashoffset={754 - (754 * beads) / 108}
              className="transition-all duration-300 ease-out shadow-[0_0_20px_rgba(247,127,0,0.5)]"
            />
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="transparent"
              stroke="white"
              strokeWidth="6"
              strokeOpacity="0.03"
            />
          </svg>

          <div className="text-center group">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 p-8 opacity-5"
            >
              <Sun size={120} className="text-premium-gold w-full h-full" />
            </motion.div>
            <Zap size={32} className="text-pitambara opacity-20 mx-auto mb-2" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-premium-gold/60">
              {language === 'en' ? 'HOLD FOCUS' : 'ध्यान दें'}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="w-full space-y-4">
        <div className="matte-card p-6 flex justify-between items-center group bg-white/[0.01] border-peacock-green/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-peacock-green/10 flex items-center justify-center text-peacock-green border border-peacock-green/20">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white">Daily Streak</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">42 Consistent Days</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-premium-gold">+120 xp</p>
          </div>
        </div>

        <div className="flex gap-3 pb-8">
          <button className="flex-1 bg-white/5 hover:bg-white/10 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all border border-white/5 active:scale-95">
            <RefreshCcw size={18} className="text-gray-500" />
            <span className="text-[10px] uppercase tracking-widest">Reset</span>
          </button>
          <button className="flex-1 bg-premium-gold text-matte-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-gold active:scale-95">
            <Save size={18} />
            <span className="text-[10px] uppercase tracking-widest">Secure Sync</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SadhanaTracker;


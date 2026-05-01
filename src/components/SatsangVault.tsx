import React from 'react';
import { motion } from 'motion/react';
import { Mic, Users, Headphones, Play, Shield, MoreHorizontal, MessageSquare } from 'lucide-react';
import GebukHeader from './ui/GebukHeader';

interface Props {
  language: 'en' | 'hi';
}

const SatsangVault: React.FC<Props> = ({ language }) => {
  const rooms = [
    { 
      title: "Srimad Bhagavatam Canto 1", 
      speaker: "HH Bhakti Vigyana Swami", 
      listeners: "1.2k", 
      live: true,
      tags: ["Philosophy", "Lecture"]
    },
    { 
      title: "Evening Kirtan: Vrindavan", 
      speaker: "Madhavas", 
      listeners: "850", 
      live: true,
      tags: ["Kirtan", "Meditation"]
    }
  ];

  return (
    <div className="space-y-6">
      <GebukHeader 
        subtitle={language === 'en' ? "Audio Sanctuary" : "ऑडियो अभयारण्य"}
        title={language === 'en' ? "Satsang Vault" : "सत्संग वॉल्ट"}
      />

      {/* Featured Live Session */}
      <div className="matte-card p-0 overflow-hidden relative group">
        <div className="absolute top-4 right-4 z-20">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/20">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live</span>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-shyam-blue/20 flex items-center justify-center relative border border-shyam-blue/30">
              <Headphones size={32} className="text-premium-gold" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-shyam-blue rounded-full flex items-center justify-center border border-premium-gold/30">
                <Mic size={12} className="text-premium-gold" />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-peacock-green uppercase tracking-widest mb-1 italic">Now Broadcasting</p>
              <h3 className="text-xl font-bold text-white leading-tight">Sri Guru-Charan-Padma</h3>
              <p className="text-sm text-gray-500 font-medium">By Shivarama Das</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-1.5">
                <Users size={16} />
                <span className="text-xs font-bold">245</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare size={16} />
                <span className="text-xs font-bold">12</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-premium-gold text-matte-black rounded-xl font-bold text-xs hover:scale-105 active:scale-95 transition-all shadow-lg shadow-premium-gold/20">
              <Play size={14} fill="currentColor" /> Listen Live
            </button>
          </div>
        </div>

        {/* Visualizer Mock */}
        <div className="flex items-end gap-1 h-8 opacity-20 px-8 pb-1">
          {[...Array(30)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ height: [4, Math.random() * 24 + 4, 4] }}
              transition={{ repeat: Infinity, duration: 1 + Math.random(), ease: "easeInOut" }}
              className="flex-1 bg-premium-gold rounded-full"
            />
          ))}
        </div>
      </div>

      {/* Recommended Archives */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <h2 className="text-lg font-bold">Recent Streams</h2>
          <span className="text-xs text-premium-gold font-bold uppercase tracking-widest">Library</span>
        </div>

        <div className="space-y-3">
          {rooms.map((room, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 4 }}
              className="matte-card p-5 flex justify-between items-center bg-white/[0.02] border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-matte-gray border border-white/5 flex items-center justify-center text-gray-500">
                  <Play size={20} className="ml-1" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{room.title}</h4>
                  <p className="text-[10px] text-gray-500 font-medium">Speaker: {room.speaker}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <div className="flex gap-1">
                  {room.tags.map(t => (
                    <span key={t} className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/5 text-gray-400 font-bold uppercase">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-600 font-bold uppercase">
                  <Users size={10} /> {room.listeners}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Private Study Room */}
      <div className="matte-card border-dashed border-premium-gold/30 bg-premium-gold/[0.02] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-premium-gold/10 rounded-2xl text-premium-gold">
            <Shield size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-white">Private Mentor Circle</p>
            <p className="text-[10px] text-gray-500">Encrypted 1-on-1 audio study</p>
          </div>
        </div>
        <button className="text-gray-500">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default SatsangVault;

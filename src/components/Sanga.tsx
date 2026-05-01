import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Users, Filter, Navigation, Star, MessageCircle } from 'lucide-react';
import GebukHeader from './ui/GebukHeader';

interface Props {
  language: 'en' | 'hi';
}

const Sanga: React.FC<Props> = ({ language }) => {
  const [filter, setFilter] = useState('all');

  const devotees = [
    { id: 1, name: "Radharaman Das", level: "Mentor", distance: "0.8 km", status: "Online", tag: "Book Distribution" },
    { id: 2, name: "Ananda Murti", level: "Senior", distance: "1.2 km", status: "In Morning Class", tag: "Kirtan" },
    { id: 3, name: "Govinda Priya", level: "Initiated", distance: "2.4 km", status: "Offline", tag: "Prasadam Seva" },
  ];

  const categories = [
    { id: 'all', label: language === 'en' ? 'All' : 'सब' },
    { id: 'mentor', label: language === 'en' ? 'Mentors' : 'मेंटर्स' },
    { id: 'nearby', label: language === 'en' ? 'Nearby' : 'करीब' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <GebukHeader 
          subtitle={language === 'en' ? "Communal Synergy" : "सामुदायिक तालमेल"}
          title={language === 'en' ? "Sanga Network" : "संग नेटवर्क"}
        />
        <button className="w-12 h-12 rounded-2xl bg-matte-gray border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
          <Filter size={20} />
        </button>
      </div>

      {/* Map View Toggle Mock */}
      <div className="matte-card h-48 bg-[url('https://api.dicebear.com/7.x/shapes/svg?seed=map')] bg-cover bg-center grayscale opacity-60 relative group cursor-pointer border-matte-gray overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-matte-black/40 group-hover:bg-transparent transition-all duration-700" />
        
        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <motion.div 
                key={i} 
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-10 h-10 rounded-full border-4 border-matte-black bg-matte-gray flex items-center justify-center text-xs text-pitambara font-black shadow-xl"
              >
                {String.fromCharCode(64 + i)}
              </motion.div>
            ))}
          </div>
          <button className="bg-pitambara text-shyam-blue px-6 py-2.5 rounded-2xl text-[10px] uppercase font-black tracking-widest flex items-center gap-2 shadow-[0_10px_20px_rgba(247,127,0,0.3)] hover:scale-105 active:scale-95 transition-all">
            <Navigation size={14} fill="currentColor" /> Open Explorer
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide py-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`whitespace-nowrap px-6 py-3 rounded-2xl text-[10px] uppercase tracking-widest font-black transition-all border ${
              filter === cat.id 
                ? 'bg-pitambara text-shyam-blue border-pitambara shadow-[0_5px_15px_rgba(247,127,0,0.3)]' 
                : 'bg-matte-gray text-gray-600 border-white/5 hover:border-white/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Devotee List */}
      <div className="space-y-4">
        {devotees.map((dev) => (
          <motion.div
            key={dev.id}
            whileHover={{ y: -2 }}
            className="matte-card p-5 flex justify-between items-center group bg-white/[0.01]"
          >
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-14 h-14 rounded-[1.25rem] bg-shyam-blue/10 border border-shyam-blue/20 flex items-center justify-center text-2xl text-premium-gold group-hover:bg-shyam-blue/20 transition-all duration-500">
                  <Users size={28} strokeWidth={1.5} />
                </div>
                {dev.status === 'Online' && (
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-peacock-green rounded-full border-[3px] border-matte-black shadow-[0_0_10px_rgba(45,106,79,0.4)]" />
                )}
              </div>
              <div>
                <p className="text-base font-bold text-white flex items-center gap-2 tracking-tight">
                  {dev.name}
                  {dev.level === 'Mentor' && <Star size={14} className="text-pitambara fill-pitambara" />}
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{dev.level}</span>
                  <div className="w-1 h-1 rounded-full bg-peacock-blue/40" />
                  <span className="text-[10px] text-peacock-green font-black uppercase tracking-widest">{dev.tag}</span>
                </div>
              </div>
            </div>
            <div className="text-right space-y-3">
              <p className="text-[10px] text-gray-700 font-black uppercase tracking-tighter">{dev.distance}</p>
              <button className="w-10 h-10 rounded-2xl bg-white/5 text-gray-500 flex items-center justify-center hover:bg-peacock-green hover:text-white hover:border-peacock-green/30 transition-all duration-300">
                <MessageCircle size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sanga;


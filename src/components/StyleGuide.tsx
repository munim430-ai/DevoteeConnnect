import React from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  Moon, 
  MapPin, 
  Heart, 
  Zap, 
  ShieldCheck, 
  Search, 
  ChevronRight,
  Sparkles,
  Command,
  Palette,
  Layout,
  MousePointer2
} from 'lucide-react';

const StyleGuide: React.FC = () => {
  const colors = [
    { name: 'Shyam Blue', hex: '#0A1128', class: 'bg-[#0A1128]', desc: 'The deep, infinite cosmic blue.' },
    { name: 'Pitambara', hex: '#F77F00', class: 'bg-[#F77F00]', desc: 'The glowing yellow-orange of the divine cloth.' },
    { name: 'Peacock Green', hex: '#2D6A4F', class: 'bg-[#2D6A4F]', desc: 'Elegant, grounded spiritual growth.' },
    { name: 'Matte Gray', hex: '#121212', class: 'bg-[#121212]', desc: 'Sleek interface foundations.' },
    { name: 'Premium Gold', hex: '#D4AF37', class: 'bg-[#D4AF37]', desc: 'Refined royal highlight.' },
  ];

  const sections = [
    { id: 'colors', icon: Palette, title: 'Color Spectrum' },
    { id: 'buttons', icon: MousePointer2, title: 'Interactive Elements' },
    { id: 'cards', icon: Layout, title: 'Matte Cards' },
    { id: 'typography', icon: Command, title: 'Divine Type' },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 pb-32 space-y-16 overflow-y-auto max-h-[850px] scrollbar-hide">
      {/* Header */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 text-pitambara">
          <Sparkles size={24} />
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">System Design</span>
        </div>
        <h1 className="text-5xl font-black tracking-tighter">Sri Krishna <br/><span className="text-pitambara">UI Kit v1.0</span></h1>
        <p className="text-gray-500 max-w-md text-sm leading-relaxed">
          A spiritual design system built on high-contrast palettes, glassmorphism, and sacred geometry.
        </p>
      </section>

      {/* Colors */}
      <section id="colors" className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
          <Palette size={14} /> 01. Color Palette
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {colors.map((color) => (
            <div key={color.name} className="matte-card p-4 flex items-center gap-4 bg-white/[0.01]">
              <div className={`w-16 h-16 rounded-2xl ${color.class} shadow-lg border border-white/10`} />
              <div>
                <h3 className="font-bold text-white">{color.name}</h3>
                <code className="text-[10px] text-pitambara font-mono">{color.hex}</code>
                <p className="text-[10px] text-gray-500 mt-1">{color.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <section id="buttons" className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
          <MousePointer2 size={14} /> 02. Buttons & Actions
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
             <button className="bg-pitambara text-shyam-blue px-8 py-3 rounded-2xl text-[10px] uppercase font-black tracking-widest shadow-[0_10px_20px_rgba(247,127,0,0.3)]">
                Primary Action
             </button>
             <button className="bg-shyam-blue text-white border border-pitambara/30 px-8 py-3 rounded-2xl text-[10px] uppercase font-black tracking-widest">
                Ghost Outlined
             </button>
          </div>
          <div className="flex flex-wrap gap-4">
             <button className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-premium-gold shadow-sm">
                <Sun size={24} />
             </button>
             <button className="w-14 h-14 rounded-2xl bg-peacock-green/10 border border-peacock-green/20 flex items-center justify-center text-peacock-green">
                <ShieldCheck size={24} />
             </button>
             <button className="w-14 h-14 rounded-2xl bg-red-400/10 border border-red-400/20 flex items-center justify-center text-red-400">
                <Heart size={24} fill="currentColor" />
             </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section id="cards" className="space-y-6">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
          <Layout size={14} /> 03. Container Philosophy
        </h2>
        <div className="space-y-4">
          <div className="matte-card p-6 bg-white/[0.02] border-white/10 group cursor-pointer">
            <h4 className="text-white font-bold group-hover:text-pitambara transition-colors">Standard Matte Surface</h4>
            <p className="text-xs text-gray-500 mt-2">Low opacity white with backdrop-blur-xl and subtle border.</p>
          </div>
          <div className="matte-card p-6 bg-gradient-to-br from-shyam-blue/40 to-black/40 border-pitambara/20">
            <h4 className="text-white font-bold">Thematic Gradient Surface</h4>
            <p className="text-xs text-gray-500 mt-2">Using Shyam Blue to create depth and focus.</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section id="typography" className="space-y-6 pb-20">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
          <Command size={14} /> 04. Typography
        </h2>
        <div className="space-y-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pitambara block mb-2">Display Heading</span>
            <p className="text-4xl font-black text-white leading-none">THE ETERNAL WISDOM</p>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-peacock-green block mb-2">Sub Heading</span>
            <p className="text-xl font-bold text-white tracking-tight">Vrindavan Meditation Portal</p>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 block mb-2">Metadata Cap</span>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">01 MAY 2026 • 16:49:17Z</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;

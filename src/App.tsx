/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  MapPin, 
  Moon, 
  BookOpen, 
  Heart, 
  MessageSquare,
  Trophy,
  Bell,
  Menu,
  Languages,
  Headphones,
  LayoutGrid
} from 'lucide-react';

import Dashboard from './components/Dashboard';
import SadhanaTracker from './components/SadhanaTracker';
import SocialFeed from './components/SocialFeed';
import Hub from './components/Hub';
import LandingPage from './components/LandingPage';
import StyleGuide from './components/StyleGuide';

type Tab = 'dashboard' | 'feed' | 'sadhana' | 'hub' | 'landing' | 'styleguide';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [
    "https://api.dicebear.com/7.x/initials/svg?seed=Krishna&backgroundColor=0A1128", // Placeholder replacement with specific ones
    "https://images.unsplash.com/photo-1621244102140-5e58988e0078?w=1200", // Vrindavan
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1200", // Peacock
    "https://images.unsplash.com/photo-1544924202-627ad399994c?w=1200"  // Spiritual Light
  ];

  // Better thematic backgrounds using high-res spiritual art (simulated via high-quality landscape/altar shots)
  const krishnaBackgrounds = [
    "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=1600&q=80", // Artistic Altar
    "https://images.unsplash.com/photo-1621244102140-5e58988e0078?w=1600&q=80", // Vrindavan Temple
    "https://images.unsplash.com/photo-1617658298051-5b72e5052968?w=1600&q=80", // Peacock Feathers Textrure
    "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1600&q=80"  // Ancient Indian Art Style
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % krishnaBackgrounds.length);
    }, 15000); // Slower, more meditative rotation
    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: 'dashboard', icon: Home, label: language === 'en' ? 'Home' : 'मुख्य' },
    { id: 'feed', icon: LayoutGrid, label: language === 'en' ? 'Feed' : 'फीड' },
    { id: 'sadhana', icon: Moon, label: language === 'en' ? 'Sadhana' : 'साधना' },
    { id: 'hub', icon: Menu, label: language === 'en' ? 'Hub' : 'केंद्र' },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black p-4 sm:p-8 overflow-hidden">
      {/* Dynamic Krishna Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={bgIndex}
            initial={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
            animate={{ opacity: 0.5, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${krishnaBackgrounds[bgIndex]})` }}
          />
        </AnimatePresence>
        {/* Divine Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-shyam-blue via-transparent to-peacock-green opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </div>

      {/* Mobile Device Frame */}
      <div className="relative w-full max-w-[420px] h-[850px] bg-matte-black/90 backdrop-blur-2xl rounded-[4rem] shadow-[0_0_0_12px_#111,0_0_0_13px_rgba(255,255,255,0.05),0_60px_100px_-20px_rgba(0,0,0,1)] overflow-hidden flex flex-col border border-white/10 z-10">
        
        {/* Notch Area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-matte-black border-x border-b border-white/5 rounded-b-2xl z-[60] flex items-center justify-center">
          <div className="w-12 h-1 bg-[#1A1A1A] rounded-full mb-1" />
        </div>

        {/* Status Bar Mock */}
        <div className="pt-3 px-10 flex justify-between items-center text-[10px] font-bold text-gray-500 z-50">
          <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-2 rounded-[2px] border border-gray-600 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-3 bg-gray-500" />
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="pt-8 px-8 flex justify-between items-center z-10 relative">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pitambara to-amber- glow flex items-center justify-center rotate-12 shadow-[0_12px_24px_-8px_rgba(247,127,0,0.5)] border border-white/20">
              <span className="text-shyam-blue font-black -rotate-12 text-2xl tracking-tighter">ॐ</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tighter mb-0 leading-none">DevoteeConnect</h1>
              <p className="text-[10px] uppercase tracking-[0.4em] text-pitambara font-black mt-1">Eternal Wisdom</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setLanguage(l => l === 'en' ? 'hi' : 'en')}
              className="w-10 h-10 rounded-2xl bg-shyam-blue/40 flex items-center justify-center hover:bg-shyam-blue/60 transition-all border border-pitambara/20 group shadow-lg"
            >
              <Languages size={18} className="text-pitambara group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto px-8 py-8 scrollbar-hide pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              {activeTab === 'dashboard' && <Dashboard language={language} />}
              {activeTab === 'feed' && <SocialFeed language={language} />}
              {activeTab === 'sadhana' && <SadhanaTracker language={language} />}
              {activeTab === 'hub' && <Hub language={language} />}
              {activeTab === 'landing' && <LandingPage />}
              {activeTab === 'styleguide' && <StyleGuide />}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 w-full bg-matte-black/90 backdrop-blur-3xl px-2 py-4 pb-10 flex flex-col gap-4 z-[70] border-t border-white/5">
          <div className="flex justify-around items-center w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className="flex flex-col items-center gap-1.5 transition-all group"
                >
                  <div className={`p-2.5 rounded-2xl transition-all duration-300 relative ${
                    isActive 
                      ? 'bg-pitambara text-shyam-blue shadow-[0_0_20px_rgba(247,127,0,0.3)] scale-110' 
                      : 'text-gray-600 hover:text-white hover:bg-white/5'
                  }`}>
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={`text-[8px] font-bold tracking-tighter uppercase ${
                    isActive ? 'text-pitambara' : 'text-gray-600'
                  }`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Style Options */}
          <div className="flex justify-center gap-6 pt-2 opacity-40 hover:opacity-100 transition-opacity">
            <button 
              onClick={() => setActiveTab('landing')}
              className={`text-[7px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${activeTab === 'landing' ? 'border-pitambara text-pitambara bg-pitambara/10' : 'border-white/10 text-gray-700'}`}
            >
              Landing View
            </button>
            <button 
              onClick={() => setActiveTab('styleguide')}
              className={`text-[7px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${activeTab === 'styleguide' ? 'border-pitambara text-pitambara bg-pitambara/10' : 'border-white/10 text-gray-700'}`}
            >
              UI Kit
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}


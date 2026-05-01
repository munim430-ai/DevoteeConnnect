import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Book, Sparkles, Hash } from 'lucide-react';
import GebukHeader from './ui/GebukHeader';

interface Props {
  language: 'en' | 'hi';
}

const AIWisdom: React.FC<Props> = ({ language }) => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: 'ai', 
      text: language === 'en' 
        ? "Hare Krishna! I am your AI Wisdom Guide, trained on the authoritative translations and purports of Srila Prabhupada. How may I assist your study today?"
        : "हरे कृष्ण! मैं आपका एआई विजडम गाइड हूं, जिसे श्रील प्रभुपाद के आधिकारिक अनुवादों और तात्पर्यों पर प्रशिक्षित किया गया है। आज मैं आपके अध्ययन में कैसे सहायता कर सकता हूँ?"
    }
  ]);

  const suggestions = [
    { en: "Who is Krishna?", hi: "कृष्ण कौन हैं?" },
    { en: "The nature of the soul", hi: "आत्मा का स्वरूप" },
    { en: "The meaning of Bhakti", hi: "भक्ति का अर्थ" },
  ];

  return (
    <div className="h-full flex flex-col space-y-6">
      <GebukHeader 
        subtitle={language === 'en' ? "Scriptural RAG Engine" : "शास्त्रीय आरएजी इंजन"}
        title={language === 'en' ? "AI Wisdom" : "एआई विजडम"}
      />

      {/* Chat Area */}
      <div className="flex-1 space-y-6 overflow-y-auto max-h-[400px] scrollbar-hide px-1">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${m.role === 'ai' ? 'justify-start' : 'justify-end'}`}
          >
            <div className={`max-w-[90%] p-6 rounded-[2rem] ${
              m.role === 'ai' 
                ? 'matte-card !p-6 border-white/5 text-gray-300 relative' 
                : 'bg-premium-gold text-matte-black font-bold shadow-gold'
            }`}>
              {m.role === 'ai' && (
                <div className="flex items-center gap-2 mb-3 text-[10px] text-premium-gold font-black uppercase tracking-widest">
                  <Sparkles size={12} strokeWidth={3} /> Srila Prabhupada VedaBase
                </div>
              )}
              <p className="text-sm leading-relaxed tracking-tight">{m.text}</p>
              
              {m.role === 'ai' && i === 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {suggestions.map((s, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setQuery(language === 'en' ? s.en : s.hi)}
                      className="px-4 py-2 bg-white/5 rounded-full text-[10px] border border-white/5 hover:bg-white/10 hover:border-premium-gold/30 transition-all font-bold uppercase tracking-widest text-gray-400"
                    >
                      {language === 'en' ? s.en : s.hi}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input Area */}
      <div className="space-y-4">
        <div className="relative group">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'en' ? "Consult the VedaBase..." : "वेदबेस से परामर्श लें..."}
            className="w-full bg-matte-gray border border-white/5 rounded-[2rem] p-6 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-premium-gold/30 transition-all resize-none h-32 shadow-premium"
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-6 right-6 w-12 h-12 bg-premium-gold text-matte-black rounded-2xl flex items-center justify-center shadow-gold transition-transform"
          >
            <Send size={20} strokeWidth={3} />
          </motion.button>
        </div>

        {/* Source Reference Tag */}
        <div className="flex items-center gap-3 p-4 bg-white/[0.01] border border-white/5 rounded-2xl border-dashed">
          <Hash size={14} className="text-gray-600" />
          <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest italic leading-normal">
            Sources: Bhagavad-gita, Bhagavatam, Chaitanya Charitamrita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIWisdom;


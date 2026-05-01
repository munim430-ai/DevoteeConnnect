import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, MessageCircle, Heart, MoreHorizontal, Image as ImageIcon, Send, Sparkles, Plus, Loader2 } from 'lucide-react';
import GebukHeader from './ui/GebukHeader';

interface Post {
  id: number;
  user: string;
  avatar: string;
  time: string;
  content: string;
  likes: string;
  comments: string;
  image: string | null;
}

interface Props {
  language: 'en' | 'hi';
}

const SocialFeed: React.FC<Props> = ({ language }) => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Bhakti Siddhanta Das",
      avatar: "B",
      time: "2h ago",
      content: language === 'en' 
        ? "Just finished reading the 4th Chapter of Bhagavad Gita. The concept of Transcendental Knowledge is truly life-changing. ॐ"
        : "भगवद गीता का चौथा अध्याय पढ़ना अभी समाप्त किया। दिव्य ज्ञान की अवधारणा वास्तव में जीवन बदलने वाली है। ॐ",
      likes: "124",
      comments: "18",
      image: "https://images.unsplash.com/photo-1545063914-a1a6ec821c88?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      user: "Yamuna Devi",
      avatar: "Y",
      time: "5h ago",
      content: language === 'en'
        ? "Morning Kirtan at the temple was soul-stirring today. The holy names have so much power! #Iskcon #Vrindavan"
        : "मंदिर में आज सुबह का कीर्तन आत्मा को झकझोर देने वाला था। पवित्र नामों में इतनी शक्ति है! #Iskcon #Vrindavan",
      likes: "56",
      comments: "5",
      image: null
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLike = (id: number) => {
    setLikedPosts(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setSelectedImage(event.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const fetchMorePosts = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      const newPosts: Post[] = [
        {
          id: posts.length + 1,
          user: "Gauranga Pr",
          avatar: "G",
          time: "Just now",
          content: language === 'en'
            ? "Chant and be happy! The maha-mantra is the most powerful medication for the mind in this age of Kali."
            : "जपें और खुश रहें! महा-मंत्र कलयुग के इस युग में मन के लिए सबसे शक्तिशाली औषधि है।",
          likes: "89",
          comments: "12",
          image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?w=800&auto=format&fit=crop&q=60"
        }
      ];
      setPosts(prev => [...prev, ...newPosts]);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) fetchMorePosts();
    }, { threshold: 1.0 });
    if (scrollRef.current) observer.observe(scrollRef.current);
    return () => observer.disconnect();
  }, [posts.length, isLoading]);

  return (
    <div className="space-y-8 h-full relative">
      <GebukHeader 
        subtitle={language === 'en' ? "Spiritual Insights" : "आध्यात्मिक विचार"}
        title={language === 'en' ? "Devotee Feed" : "भक्त फीड"}
      />

      {/* Post Creation Box */}
      <div className="matte-card p-5 bg-shyam-blue/10 border-dashed border-pitambara/20 group relative z-10">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-shyam-blue border border-pitambara/10 flex items-center justify-center text-pitambara font-black">
            A
          </div>
          <div className="flex-1 space-y-3">
            <textarea 
              placeholder={language === 'en' ? "Share your realization..." : "अपने विचार साझा करें..."}
              className="w-full bg-transparent border-none text-sm text-white placeholder:text-gray-700 focus:outline-none resize-none pt-2 h-12"
            />
            {selectedImage && (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative w-24 h-24 rounded-xl overflow-hidden border border-pitambara/30">
                <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                <button onClick={() => setSelectedImage(null)} className="absolute top-1 right-1 p-1 bg-black/60 rounded-full text-white"><Plus size={12} className="rotate-45" /></button>
              </motion.div>
            )}
          </div>
        </div>
        
        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageSelect} />
        
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5 opacity-0 group-focus-within:opacity-100 transition-opacity">
          <div className="flex gap-3">
            <button onClick={() => fileInputRef.current?.click()} className="p-2 text-gray-500 hover:text-pitambara transition-colors">
              <ImageIcon size={18} />
            </button>
            <button className="p-2 text-gray-500 hover:text-pitambara transition-colors">
              <Sparkles size={18} />
            </button>
          </div>
          <button className="bg-pitambara text-shyam-blue px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(247,127,0,0.2)] hover:brightness-110 active:scale-95 transition-all">
            Post
          </button>
        </div>
      </div>

      {/* Feed Items */}
      <div className="space-y-6 pb-4">
        {posts.map((post) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="matte-card p-6 space-y-6 bg-white/[0.01]"
          >
            {/* User Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-[1.25rem] bg-matte-gray border border-white/5 flex items-center justify-center font-black text-premium-gold shadow-sm">
                  {post.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">{post.user}</h4>
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-tight">{post.time}</p>
                </div>
              </div>
              <button className="text-gray-700">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 cursor-pointer" onClick={() => setSelectedPost(post)}>
              <p className="text-sm text-gray-300 leading-relaxed tracking-tight">
                {post.content}
              </p>
              {post.image && (
                <div className="rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                  <img 
                    src={post.image} 
                    alt="Post media" 
                    className="w-full h-48 object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                  />
                </div>
              )}
            </div>

            {/* Engagement */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-6">
                <motion.button 
                  whileTap={{ scale: 1.4 }}
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-2 group"
                >
                  <div className={`p-2 rounded-xl transition-all ${likedPosts.has(post.id) ? 'bg-red-500/10' : 'group-hover:bg-red-500/10'}`}>
                    <Heart size={18} className={`${likedPosts.has(post.id) ? 'text-red-500 fill-red-500' : 'text-gray-600 group-hover:text-red-500'}`} />
                  </div>
                  <span className={`text-[10px] font-black ${likedPosts.has(post.id) ? 'text-red-500' : 'text-gray-600'}`}>
                    {likedPosts.has(post.id) ? parseInt(post.likes) + 1 : post.likes}
                  </span>
                </motion.button>
                <motion.button 
                  whileTap={{ scale: 1.1 }}
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-2 group"
                >
                  <div className="p-2 rounded-xl group-hover:bg-premium-gold/10 transition-all">
                    <MessageCircle size={18} className="text-gray-600 group-hover:text-premium-gold" />
                  </div>
                  <span className="text-[10px] font-black text-gray-600">{post.comments}</span>
                </motion.button>
              </div>
              <button className="p-2 text-gray-700 hover:text-white transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Post View Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              layoutId={`post-${selectedPost.id}`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="relative w-full max-w-xl bg-matte-gray rounded-[2.5rem] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,1)] overflow-hidden max-h-[80vh] flex flex-col"
            >
              <div className="overflow-y-auto p-8 space-y-6 scrollbar-hide">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-matte-black border border-white/5 flex items-center justify-center font-black text-premium-gold text-lg">{selectedPost.avatar}</div>
                    <div>
                      <h4 className="text-base font-bold text-white">{selectedPost.user}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{selectedPost.time}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelectedPost(null)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"><Plus size={20} className="rotate-45" /></button>
                </div>
                <p className="text-lg text-white leading-relaxed tracking-tight">{selectedPost.content}</p>
                {selectedPost.image && <img src={selectedPost.image} className="w-full h-72 object-cover rounded-[2rem] border border-white/5 shadow-xl" alt="Content" />}
                
                <div className="pt-6 border-t border-white/5 space-y-4">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.25em] text-premium-gold">Discussion (2)</h5>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-[10px] font-black text-white shrink-0">V</div>
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-white">Vivek Gupta</p>
                        <p className="text-xs text-gray-400 leading-relaxed">Absolutely brother. The nectar in these words is incomparable. Hare Krishna! 🙏</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-matte-black/50 border-t border-white/5 backdrop-blur-md">
                <div className="flex gap-3 items-center bg-white/5 rounded-2xl px-4 py-2 border border-white/5">
                  <input type="text" placeholder="Offer your realization..." className="flex-1 bg-transparent border-none text-xs text-white focus:outline-none py-2" />
                  <button className="text-premium-gold"><Send size={16} /></button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Load More Trigger & Indicator */}
      <div ref={scrollRef} className="py-10 flex flex-col items-center gap-2 opacity-50 pb-20">
        <AnimatePresence>
          {isLoading && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative">
                <Loader2 size={24} className="text-pitambara animate-spin" />
                <div className="absolute inset-0 blur-md bg-pitambara/20 animate-pulse" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-pitambara">Seeking Wisdom...</p>
            </motion.div>
          )}
        </AnimatePresence>
        {!isLoading && <div className="w-1 h-1 rounded-full bg-gray-800" />}
      </div>

      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-32 right-8 sm:right-[calc(50%-180px)] w-16 h-16 bg-pitambara text-shyam-blue rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_rgba(247,127,0,0.3)] z-50 border-2 border-white/20"
      >
        <Plus size={28} strokeWidth={3} />
      </motion.button>
    </div>
  );
};

export default SocialFeed;

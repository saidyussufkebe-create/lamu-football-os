import React, { useState } from 'react';
import { Image, Film, BarChart2, X, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

const PostComposer: React.FC = () => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const charLimit = 280;

  const handlePost = () => {
    if (!content.trim() && images.length === 0) return;
    toast.success('Post published successfully!');
    setContent('');
    setImages([]);
  };

  const addImage = () => {
    if (images.length >= 4) {
      toast.error('Max 4 images allowed');
      return;
    }
    // Mock adding an image
    setImages([...images, 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400']);
  };

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm">
      <div className="flex gap-3">
        <img 
          src="https://ui-avatars.com/api/?name=User&background=10b981&color=fff" 
          className="w-10 h-10 rounded-full object-cover" 
          alt="User" 
        />
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="What's happening in Lamu football?"
            className="min-h-[100px] border-none focus-visible:ring-0 resize-none p-0 bg-transparent text-base"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={charLimit}
          />
          
          {images.length > 0 && (
            <div className={`grid gap-2 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {images.map((img, i) => (
                <div key={i} className="relative group rounded-xl overflow-hidden aspect-video">
                  <img src={img} alt="upload" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                    className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" onClick={addImage} className="text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                <Image className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                <Film className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                <BarChart2 className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <span className={`text-xs font-medium ${content.length > charLimit - 20 ? 'text-amber-500' : 'text-slate-400'}`}>
                {content.length}/{charLimit}
              </span>
              <Button 
                onClick={handlePost}
                disabled={!content.trim() && images.length === 0}
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-5 gap-2"
              >
                <span>Post</span>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;
import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Copy, 
  Twitter, 
  MessageCircle, 
  MoreHorizontal,
  Link as LinkIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
}

export const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose, postId }) => {
  const [comment, setComment] = useState('');
  
  const comments = [
    { id: '1', user: 'Fatma Juma', avatar: 'https://ui-avatars.com/api/?name=Fatma+Juma', content: 'Great shot! The beach pitch looks amazing.', time: '1h ago' },
    { id: '2', user: 'Coach Bado', avatar: 'https://ui-avatars.com/api/?name=Coach+Bado', content: 'We need to work on those transitions though! ⚽', time: '45m ago' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden max-h-[85vh] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold dark:text-white">Comments</h3>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="flex gap-3">
                  <img src={c.avatar} className="w-8 h-8 rounded-full" alt={c.user} />
                  <div className="flex-1">
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl rounded-tl-none">
                      <p className="text-xs font-bold dark:text-white mb-1">{c.user}</p>
                      <p className="text-sm text-slate-700 dark:text-slate-300">{c.content}</p>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 ml-1">{c.time} • Reply</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-2 rounded-2xl border border-slate-200 dark:border-slate-700">
                <input 
                  type="text" 
                  placeholder="Write a comment..." 
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button 
                  size="icon" 
                  disabled={!comment.trim()}
                  onClick={() => {
                    toast.success('Comment posted');
                    setComment('');
                  }}
                  className="bg-emerald-600 rounded-xl h-8 w-8"
                >
                  <Send className="w-4 h-4 text-white" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

interface ShareSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareSheet: React.FC<ShareSheetProps> = ({ isOpen, onClose }) => {
  const options = [
    { icon: Copy, label: 'Copy Link', color: 'bg-slate-100 dark:bg-slate-800', action: () => toast.success('Link copied!') },
    { icon: Twitter, label: 'Twitter', color: 'bg-sky-50 dark:bg-sky-900/30 text-sky-500', action: () => window.open('https://twitter.com/intent/tweet') },
    { icon: MessageCircle, label: 'WhatsApp', color: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500', action: () => {} },
    { icon: MoreHorizontal, label: 'More', color: 'bg-slate-100 dark:bg-slate-800', action: () => {} },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            className="relative bg-white dark:bg-slate-900 w-full max-w-md rounded-t-3xl p-6"
          >
            <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-6" />
            <h3 className="font-bold text-lg mb-6 dark:text-white">Share to</h3>
            <div className="grid grid-cols-4 gap-4">
              {options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => { opt.action(); onClose(); }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-active:scale-90 ${opt.color}`}>
                    <opt.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium dark:text-slate-400">{opt.label}</span>
                </button>
              ))}
            </div>
            <Button 
              variant="secondary" 
              className="w-full mt-8 rounded-2xl"
              onClick={onClose}
            >
              Cancel
            </Button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
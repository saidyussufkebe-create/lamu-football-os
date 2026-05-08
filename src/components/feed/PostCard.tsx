import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  MoreHorizontal, 
  CheckCircle2 
} from 'lucide-react';
import { Post } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { CommentModal, ShareSheet } from './InteractionModals';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isShareSheetOpen, setIsShareSheetOpen] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    if (!isLiked) {
      toast.success('Liked post');
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
      >
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex gap-3">
              <div className="relative">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name} 
                  className="w-11 h-11 rounded-full object-cover shadow-sm"
                />
                {post.author.verified && (
                  <div className="absolute -right-0.5 -bottom-0.5 bg-white dark:bg-slate-900 rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h4 className="font-bold text-slate-900 dark:text-white leading-none hover:underline cursor-pointer">{post.author.name}</h4>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  @{post.author.handle} • {post.timestamp}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full h-8 w-8">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>

          <p className="text-slate-800 dark:text-slate-200 leading-relaxed mb-4 whitespace-pre-wrap">
            {post.content.split(' ').map((word, i) => {
              if (word.startsWith('#') || word.startsWith('@')) {
                return <span key={i} className="text-emerald-600 font-medium hover:underline cursor-pointer">{word} </span>;
              }
              return word + ' ';
            })}
          </p>

          {post.media && post.media.length > 0 && (
            <div className={`grid gap-2 mb-4 overflow-hidden rounded-2xl ${
              post.media.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
            }`}>
              {post.media.map((img, i) => (
                <div key={i} className={`relative aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden ${post.media?.length === 3 && i === 0 ? 'row-span-2 aspect-square' : ''}`}>
                  <img src={img} alt="Post content" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-800/50">
            <div className="flex gap-6">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-1.5 transition-colors group ${isLiked ? 'text-rose-500' : 'text-slate-500 dark:text-slate-400 hover:text-rose-500'}`}
              >
                <div className="relative">
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : 'group-hover:fill-rose-100 dark:group-hover:fill-rose-900/30'}`} />
                  <AnimatePresence>
                    {isLiked && (
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span className="text-sm font-semibold">{likesCount}</span>
              </button>

              <button 
                onClick={() => setIsCommentModalOpen(true)}
                className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:fill-emerald-100 dark:group-hover:fill-emerald-900/30" />
                <span className="text-sm font-semibold">{post.comments}</span>
              </button>

              <button 
                onClick={() => setIsShareSheetOpen(true)}
                className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-colors group"
              >
                <Share2 className="w-5 h-5" />
                <span className="text-sm font-semibold">{post.shares}</span>
              </button>
            </div>

            <button 
              onClick={handleBookmark}
              className={`transition-colors p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full ${isBookmarked ? 'text-amber-500' : 'text-slate-500 dark:text-slate-400 hover:text-amber-500'}`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </motion.div>

      <CommentModal 
        isOpen={isCommentModalOpen} 
        onClose={() => setIsCommentModalOpen(false)} 
        postId={post.id} 
      />
      <ShareSheet 
        isOpen={isShareSheetOpen} 
        onClose={() => setIsShareSheetOpen(false)} 
      />
    </>
  );
};

export default PostCard;
import React from 'react';
import { Plus } from 'lucide-react';
import { Story } from './types';
import { motion } from 'framer-motion';

interface StoriesRowProps {
  stories: Story[];
}

const StoriesRow: React.FC<StoriesRowProps> = ({ stories }) => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-1">
      {/* Add Story */}
      <div className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer group">
        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
          <Plus className="w-6 h-6 text-slate-400 group-hover:text-emerald-500" />
        </div>
        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Add Story</span>
      </div>

      {stories.map((story) => (
        <motion.div 
          key={story.id} 
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer"
        >
          <div className={`p-0.5 rounded-full ${story.hasUnread ? 'bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-400' : 'bg-slate-200 dark:bg-slate-700'}`}>
            <div className="p-0.5 bg-white dark:bg-slate-900 rounded-full">
              <img 
                src={story.user.avatar} 
                alt={story.user.name} 
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
          </div>
          <span className="text-[11px] font-medium text-slate-600 dark:text-slate-300 truncate w-16 text-center">
            {story.user.name.split(' ')[0]}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default StoriesRow;
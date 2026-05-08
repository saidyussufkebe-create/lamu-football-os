import React from 'react';
import { motion } from 'framer-motion';

interface FeedFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FeedFilters: React.FC<FeedFiltersProps> = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { id: 'all', label: 'All Posts' },
    { id: 'following', label: 'Following' },
    { id: 'media', label: 'Media' },
    { id: 'matches', label: 'Matches' },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`
            px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all relative
            ${activeFilter === filter.id 
              ? 'text-emerald-600' 
              : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
          `}
        >
          {filter.label}
          {activeFilter === filter.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-emerald-50 dark:bg-emerald-950/30 rounded-full -z-10"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default FeedFilters;
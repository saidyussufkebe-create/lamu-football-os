import React, { useState } from 'react';
import StoriesRow from './feed/StoriesRow';
import PostComposer from './feed/PostComposer';
import FeedFilters from './feed/FeedFilters';
import PostCard from './feed/PostCard';
import { Post, Story } from './feed/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, MessageSquare, Search } from 'lucide-react';

const MOCK_STORIES: Story[] = [
  { id: '1', user: { name: 'Ali Ahmed', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/profile-picture-1-3ae6fdbf-1778212570380.webp' }, hasUnread: true },
  { id: '2', user: { name: 'Manda Utd', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/profile-picture-2-5397d977-1778212569176.webp' }, hasUnread: true },
  { id: '3', user: { name: 'Omar Bakari', avatar: 'https://ui-avatars.com/api/?name=Omar+Bakari&background=random' }, hasUnread: false },
  { id: '4', user: { name: 'Shela FC', avatar: 'https://ui-avatars.com/api/?name=Shela+FC&background=random' }, hasUnread: true },
  { id: '5', user: { name: 'Fatma Juma', avatar: 'https://ui-avatars.com/api/?name=Fatma+Juma&background=random' }, hasUnread: false },
];

const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    author: {
      name: 'Ali Ahmed',
      handle: 'ali_striker',
      avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/profile-picture-1-3ae6fdbf-1778212570380.webp',
      verified: true
    },
    content: 'Just finished a sunset training session at Mokowe. The pitch is looking great for Saturday! #LamuFootball #TrainingDay @MandaUtd',
    timestamp: '2h ago',
    media: ['https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/post-image-1-269dc71b-1778212570358.webp'],
    likes: 124,
    comments: 18,
    shares: 5,
    isLiked: true
  },
  {
    id: 'p2',
    author: {
      name: 'Manda United Official',
      handle: 'manda_utd',
      avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/profile-picture-2-5397d977-1778212569176.webp',
      verified: true
    },
    content: 'Our latest gallery from the regional finals. What a crowd! Thank you for the support #LamuSportsHub #Finals',
    timestamp: '5h ago',
    media: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/post-image-2-8efea6ee-1778212570659.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/post-image-3-0ec057e2-1778212570592.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/post-image-4-eecebf5a-1778212569005.webp'
    ],
    likes: 850,
    comments: 42,
    shares: 112
  },
  {
    id: 'p3',
    author: {
      name: 'Scout Kenya',
      handle: 'scout_kenya',
      avatar: 'https://ui-avatars.com/api/?name=Scout+Kenya&background=random',
      verified: false
    },
    content: 'Keeping an eye on the U17 talent in Lamu this weekend. There are some hidden gems in the archipelago! 💎⚽ #Scouting #KenyanFootball',
    timestamp: '8h ago',
    likes: 56,
    comments: 3,
    shares: 12
  }
];

const HomeFeed: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20">
      {/* Desktop Feed Header */}
      <div className="hidden lg:flex items-center justify-between sticky top-0 z-10 py-4 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl -mx-4 px-4 border-b border-slate-200/50 dark:border-slate-800/50">
        <h2 className="text-xl font-bold dark:text-white">Feed</h2>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors relative">
            <Search className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </button>
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors relative">
            <MessageSquare className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-50 dark:border-slate-950 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors relative">
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-amber-500 border-2 border-slate-50 dark:border-slate-950 rounded-full"></span>
          </button>
        </div>
      </div>

      <section>
        <StoriesRow stories={MOCK_STORIES} />
      </section>

      <section>
        <PostComposer />
      </section>

      <section className="sticky top-[60px] lg:top-[72px] z-10 py-2 -mx-4 px-4 bg-slate-50/60 dark:bg-slate-950/60 backdrop-blur-lg">
        <FeedFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </section>

      <section className="space-y-4">
        <AnimatePresence mode="popLayout">
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default HomeFeed;
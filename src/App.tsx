import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Trophy, 
  Search, 
  Wallet, 
  Settings, 
  Bell, 
  Menu, 
  X,
  Activity,
  BrainCircuit,
  MessageSquare,
  Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';

// Components
import HomeFeed from './components/HomeFeed';
import PlayerSystem from './components/PlayerSystem';
import TeamManagement from './components/TeamManagement';
import TournamentEngine from './components/TournamentEngine';
import ScoutingMarketplace from './components/ScoutingMarketplace';
import MpesaFlow from './components/MpesaFlow';
import AIAgents from './components/AIAgents';

export type View = 'feed' | 'players' | 'teams' | 'tournaments' | 'scouting' | 'payments' | 'ai';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('feed');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        console.log('PWA Ready');
      });
    }
  }, []);

  const navItems = [
    { id: 'feed', label: 'Feed', icon: Home },
    { id: 'players', label: 'Players', icon: Users },
    { id: 'teams', label: 'Teams', icon: Activity },
    { id: 'tournaments', label: 'Leagues', icon: Trophy },
    { id: 'scouting', label: 'Scouts', icon: Search },
    { id: 'ai', label: 'AI Hub', icon: BrainCircuit },
    { id: 'payments', label: 'Wallet', icon: Wallet },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'feed': return <HomeFeed />;
      case 'players': return <PlayerSystem />;
      case 'teams': return <TeamManagement />;
      case 'tournaments': return <TournamentEngine />;
      case 'scouting': return <ScoutingMarketplace />;
      case 'payments': return <MpesaFlow />;
      case 'ai': return <AIAgents />;
      default: return <HomeFeed />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      <Toaster position="top-center" richColors />
      <style>{`
        .perspective { perspective: 1000px; }
        .rotate-y-12 { transform: rotateY(12deg); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 lg:hidden flex items-center justify-between px-4 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight dark:text-white">LSH</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => toast.info("Direct messages")} className="relative p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <MessageSquare className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </button>
          <button onClick={() => toast.info("Notifications")} className="relative p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-slate-600 dark:text-slate-400" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-amber-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </button>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            {isSidebarOpen ? <X className="w-6 h-6 text-slate-600 dark:text-slate-400" /> : <Menu className="w-6 h-6 text-slate-600 dark:text-slate-400" />}
          </button>
        </div>
      </header>

      <div className="flex h-full min-h-screen">
        {/* Desktop Sidebar / Mobile Drawer */}
        <aside 
          className={`
            fixed lg:sticky top-0 h-screen z-40 w-64 transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col
          `}
        >
          <div className="hidden lg:flex items-center gap-3 p-6 border-b border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-emerald-500/20 shadow-lg">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-none text-slate-900 dark:text-white">Lamu Hub</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Football OS</p>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id as View);
                  setIsSidebarOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                  ${activeView === item.id 
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 font-semibold shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}
                `}
              >
                <item.icon className={`w-5 h-5 ${activeView === item.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span>{item.label}</span>
                {item.id === 'ai' && (
                  <span className="ml-auto text-[10px] bg-amber-100 dark:bg-amber-900/50 text-amber-600 px-2 py-0.5 rounded-full font-bold">BETA</span>
                )}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-full flex items-center justify-between px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5" />
                <span>{isDarkMode ? 'Light' : 'Dark'}</span>
              </div>
              <div className={`w-10 h-5 rounded-full relative transition-colors ${isDarkMode ? 'bg-emerald-600' : 'bg-slate-300'}`}>
                <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`}></div>
              </div>
            </button>
          </div>
        </aside>

        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        <main className="flex-1 overflow-y-auto pb-24 lg:pb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="max-w-7xl mx-auto p-4 lg:p-8"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </main>

        <nav className="fixed bottom-0 inset-x-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 lg:hidden px-4 py-2 z-50">
          <div className="flex items-center justify-around">
            {navItems.slice(0, 5).map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id as View)}
                className={`
                  flex flex-col items-center gap-1 p-2 rounded-lg transition-colors
                  ${activeView === item.id ? 'text-emerald-600' : 'text-slate-400'}
                `}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default App;
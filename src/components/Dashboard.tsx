import React from 'react';
import { 
  Trophy, 
  Users, 
  Calendar, 
  TrendingUp, 
  ChevronRight, 
  Star, 
  MapPin, 
  PlayCircle,
  Clock,
  ArrowUpRight,
  Activity,
  BrainCircuit
} from 'lucide-react';
import { View } from '../App';

interface DashboardProps {
  setView: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  const HERO_IMAGE = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/hero-banner-lamu-football-074391f8-1778211736249.webp";
  
  const stats = [
    { label: 'Registered Players', value: '1,240', change: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Teams', value: '48', change: '+4', icon: Trophy, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Live Tournaments', value: '3', change: 'New', icon: Calendar, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Scout Requests', value: '15', change: '+8', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const upcomingMatches = [
    { id: 1, home: 'Lamu All-Stars', away: 'Shela FC', time: '16:00', date: 'Today', venue: 'Mokowe Ground' },
    { id: 2, home: 'Manda Utd', away: 'Faza Warriors', time: '14:30', date: 'Tomorrow', venue: 'Lamu Seafront' },
  ];

  return (
    <div className="space-y-8">
      <section className="relative h-48 lg:h-80 rounded-3xl overflow-hidden group">
        <img src={HERO_IMAGE} alt="Lamu Football" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 lg:p-10">
          <div className="max-w-2xl text-white">
            <span className="bg-emerald-500 text-[10px] lg:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">Lamu County League</span>
            <h2 className="text-2xl lg:text-4xl font-extrabold mb-2">The Heart of Coastal Football</h2>
            <p className="text-white/80 text-sm lg:text-base line-clamp-2 mb-4">Discover local legends, track match stats, and connect with scouts across Kenya.</p>
            <div className="flex gap-3">
              <button onClick={() => setView('tournaments')} className="bg-white text-emerald-700 font-bold px-5 py-2 rounded-xl text-sm active:scale-95 transition-transform">View Fixtures</button>
              <button onClick={() => setView('players')} className="bg-white/20 backdrop-blur-md text-white font-bold px-5 py-2 rounded-xl text-sm hover:bg-white/30 transition-colors">Join as Player</button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className={`${stat.bg} dark:bg-slate-800 w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold dark:text-white">{stat.value}</span>
              <span className="text-[10px] font-bold text-emerald-600">{stat.change}</span>
            </div>
          </div>
        ))}
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2 dark:text-white">
              <Activity className="w-5 h-5 text-emerald-600" />
              Recent Highlights
            </h3>
            <button className="text-emerald-600 text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="grid gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row shadow-sm group">
                <div className="md:w-48 h-40 relative flex-shrink-0">
                  <img src={`https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=400`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="match" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"><PlayCircle className="w-12 h-12 text-white" /></div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-amber-600 uppercase">Match Clip</span>
                      <span className="text-[10px] text-slate-400">• 2h ago</span>
                    </div>
                    <h4 className="font-bold text-lg leading-tight mb-2 group-hover:text-emerald-600 transition-colors dark:text-white">Incredible Bicycle Kick Goal from Ahmed Ali (17y)</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">Lamu All-Stars secures a last-minute draw against Shela FC in a thriller.</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold dark:text-slate-300">
                      <img src="https://ui-avatars.com/api/?name=Ahmed+Ali&background=random" className="w-6 h-6 rounded-full" alt="user" />
                      <span>Ahmed Ali</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 text-xs text-slate-400"><Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 1.2k</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2 dark:text-white"><Calendar className="w-4 h-4 text-emerald-600" /> Live & Upcoming</h3>
            <div className="space-y-4">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase mb-2">
                    <span>{match.date} • {match.time}</span>
                    <span className="text-emerald-500 flex items-center gap-1"><span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>LIVE SQUAD</span>
                  </div>
                  <div className="flex items-center justify-between font-bold text-sm dark:text-slate-200">
                    <span className="truncate flex-1">{match.home}</span>
                    <span className="mx-2 text-slate-300">vs</span>
                    <span className="truncate flex-1 text-right">{match.away}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-500"><MapPin className="w-3 h-3" />{match.venue}</div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors border border-slate-100 dark:border-slate-800">Full Schedule</button>
          </div>
          <div className="bg-emerald-600 rounded-2xl p-5 text-white shadow-lg">
            <BrainCircuit className="w-8 h-8 mb-3 opacity-80" />
            <h4 className="font-bold text-lg mb-1">Coach Intelligence</h4>
            <p className="text-xs text-white/80 mb-4 leading-relaxed">Get AI-powered tactical suggestions and training plans for your team.</p>
            <button className="w-full bg-white text-emerald-600 py-2 rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-transform">Try Coach AI</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
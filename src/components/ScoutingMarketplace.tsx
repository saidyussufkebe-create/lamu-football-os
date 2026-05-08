import React from 'react';
import { 
  Search, 
  Map as MapIcon, 
  Globe, 
  Star, 
  Users, 
  Target, 
  Zap, 
  ChevronRight,
  Filter,
  Eye,
  Video
} from 'lucide-react';

const ScoutingMarketplace: React.FC = () => {
  const scouts = [
    { name: 'John Doe', agency: 'Nike Elite Africa', focus: 'Youth Talent', region: 'East Africa' },
    { name: 'Sarah Ahmed', agency: 'FKF National Scout', focus: 'Midfielders', region: 'Coastal' },
  ];

  const featuredHighlights = [
    { title: 'Top 5 Coastal Goals', author: 'Lamu Media', views: '24k', duration: '2:45' },
    { title: 'Goalie Masterclass', author: 'Scout AI', views: '12k', duration: '5:12' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold flex items-center gap-3">
            <Globe className="w-8 h-8 text-blue-500" />
            Scouting Hub
          </h2>
          <p className="text-slate-500 dark:text-slate-400">Connecting local stars to national & international scouts.</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
          <Target className="w-5 h-5" />
          Join Scout Pool
        </button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              Talent Filter
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">Region</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm p-2.5">
                  <option>Lamu Island</option>
                  <option>Manda Island</option>
                  <option>Pate Island</option>
                  <option>Mokowe</option>
                </select>
              </div>
              
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">Position</label>
                <div className="grid grid-cols-2 gap-2">
                  {['FWD', 'MID', 'DEF', 'GK'].map(pos => (
                    <button key={pos} className="px-3 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs font-bold hover:bg-emerald-50 hover:text-emerald-600 transition-colors">
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">Age Range</label>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="15" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm p-2.5" />
                  <span className="text-slate-400">-</span>
                  <input type="number" placeholder="21" className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm p-2.5" />
                </div>
              </div>

              <button className="w-full bg-emerald-600 text-white py-3 rounded-2xl text-sm font-bold shadow-lg shadow-emerald-500/10 active:scale-95 transition-all">
                Search Talent
              </button>
            </div>
          </div>

          <div className="bg-amber-500 rounded-3xl p-6 text-white">
            <Zap className="w-8 h-8 mb-4 fill-white" />
            <h4 className="font-bold text-lg mb-1">Scout AI Premium</h4>
            <p className="text-amber-50 text-xs mb-4">
              Get detailed performance analytics and injury history for any player in Kenya.
            </p>
            <button className="w-full bg-white text-amber-600 py-2 rounded-xl text-xs font-bold">
              Upgrade Now
            </button>
          </div>
        </div>

        {/* Talent Feed */}
        <div className="lg:col-span-3 space-y-8">
          <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden flex items-center shadow-xl shadow-blue-500/20">
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-black mb-2">Regional Talent Map</h3>
              <p className="text-blue-100 text-sm mb-6">
                Visualizing football density and talent hotspots across the Lamu Archipelago.
              </p>
              <button className="bg-white text-blue-700 px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2">
                <MapIcon className="w-4 h-4" />
                Interactive Map
              </button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none">
               <Globe className="w-full h-full scale-150" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Video className="w-5 h-5 text-red-500" />
                Featured Highlights
              </h3>
              <button className="text-blue-600 text-sm font-bold">Upload Demo</button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {featuredHighlights.map((v, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm group">
                  <div className="aspect-video bg-slate-200 dark:bg-slate-800 relative">
                    <img src={`https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=400`} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-emerald-600 fill-emerald-600" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-[10px] text-white font-bold">
                      {v.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{v.title}</h4>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-slate-500">by {v.author}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Eye className="w-3.5 h-3.5" />
                        {v.views}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Active Scouts
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {scouts.map((scout, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-bold text-sm">{scout.name}</h5>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">{scout.agency}</p>
                  </div>
                  <button className="text-blue-600 font-bold text-xs hover:underline">Contact</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutingMarketplace;
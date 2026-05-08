import React from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  ChevronRight, 
  Activity, 
  Shield, 
  Award,
  Share2,
  Camera,
  Info,
  Users
} from 'lucide-react';

const PlayerSystem: React.FC = () => {
  const PLAYER_CARD_BG = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/player-card-background-6d256622-1778211736145.webp";

  const players = [
    { id: 1, name: 'Salim "Mojo" Juma', position: 'Forward', team: 'Lamu All-Stars', rating: 88, scoutScore: 94, age: 19, goals: 12, assists: 4, verified: true, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' },
    { id: 2, name: 'Omar Bakari', position: 'Midfielder', team: 'Shela FC', rating: 84, scoutScore: 89, age: 21, goals: 3, assists: 9, verified: false, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200' },
    { id: 3, name: 'Khalid Issa', position: 'Goalkeeper', team: 'Mokowe FC', rating: 91, scoutScore: 92, age: 20, goals: 0, assists: 1, verified: true, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold flex items-center gap-3 dark:text-white">
            <Users className="w-8 h-8 text-emerald-600" />
            Player Talent Pool
          </h2>
          <p className="text-slate-500 dark:text-slate-400">Discover and track the best grassroots talent in Lamu.</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search players..." className="pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none w-full md:w-64 dark:text-white" />
          </div>
          <button className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"><Filter className="w-5 h-5 dark:text-slate-400" /></button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="font-bold text-xl flex items-center gap-2 dark:text-white"><Shield className="w-5 h-5 text-amber-500" /> Verified Talent</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {players.filter(p => p.verified).map((player) => (
              <div key={player.id} className="relative group perspective">
                <div className="w-full aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform group-hover:rotate-y-12" style={{backgroundImage: `url(${PLAYER_CARD_BG})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-amber-500/20 pointer-events-none mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex flex-col p-6 text-white">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col items-center"><span className="text-4xl font-black text-amber-400">{player.rating}</span><span className="text-[10px] font-bold uppercase tracking-widest opacity-80">{player.position}</span></div>
                      <Award className="w-6 h-6 text-amber-400 fill-amber-400/20" />
                    </div>
                    <div className="mt-4 flex-1 flex flex-col items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-amber-400/50 p-1 bg-white/10 backdrop-blur-sm mb-4"><img src={player.image} alt={player.name} className="w-full h-full rounded-full object-cover" /></div>
                      <h4 className="text-xl font-black text-center uppercase tracking-tight leading-tight">{player.name}</h4>
                      <p className="text-xs font-medium opacity-80 mt-1">{player.team}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/20 text-center">
                      <div><p className="text-[10px] uppercase opacity-60">GLS</p><p className="font-bold">{player.goals}</p></div>
                      <div><p className="text-[10px] uppercase opacity-60">AST</p><p className="font-bold">{player.assists}</p></div>
                      <div><p className="text-[10px] uppercase opacity-60">AGE</p><p className="font-bold">{player.age}</p></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-xs font-bold transition-colors shadow-lg shadow-emerald-500/10">Stats</button>
                  <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"><Share2 className="w-4 h-4 dark:text-slate-400" /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2 dark:text-white"><TrendingUp className="w-5 h-5 text-blue-500" /> Scouting Leaderboard</h3>
            <div className="space-y-4">
              {players.map((player) => (
                <div key={player.id} className="flex items-center gap-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <div className="relative">
                    <img src={player.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    {player.verified && <div className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-0.5 border-2 border-white dark:border-slate-900"><Shield className="w-2.5 h-2.5 text-white fill-white" /></div>}
                  </div>
                  <div className="flex-1"><h5 className="font-bold text-sm dark:text-slate-200">{player.name}</h5><p className="text-xs text-slate-500">{player.position} • {player.team}</p></div>
                  <div className="text-right"><div className="flex items-center gap-1 justify-end"><Star className="w-3 h-3 text-amber-500 fill-amber-500" /><span className="font-bold text-sm dark:text-white">{player.scoutScore}</span></div><p className="text-[10px] text-slate-400 font-medium">Scout Score</p></div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl">
            <Camera className="w-10 h-10 mb-4 opacity-80" /><h4 className="text-xl font-extrabold mb-2">Want to be scouted?</h4><p className="text-blue-100 text-sm mb-6 leading-relaxed">Record highlights using our app. Our AI will analyze your performance and rank you.</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white text-blue-700 py-2.5 rounded-xl text-xs font-bold active:scale-95 transition-transform">Upload</button>
              <button className="bg-blue-500/30 backdrop-blur-md border border-white/20 text-white py-2.5 rounded-xl text-xs font-bold">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSystem;
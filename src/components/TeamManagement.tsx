import React from 'react';
import { 
  Activity, 
  Users, 
  Layout, 
  Calendar, 
  MessageCircle, 
  Settings, 
  Plus,
  MoreVertical,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';

const TeamManagement: React.FC = () => {
  const TEAM_LOGO = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/team-logo-placeholder-9366f129-1778211735891.webp";

  const squad = [
    { name: 'S. Juma', number: 10, pos: 'FWD', status: 'Available', form: ['W', 'W', 'D'] },
    { name: 'O. Bakari', number: 8, pos: 'MID', status: 'Injured', form: ['W', 'L', 'W'] },
    { name: 'K. Issa', number: 1, pos: 'GK', status: 'Available', form: ['W', 'W', 'W'] },
    { name: 'A. Hassan', number: 4, pos: 'DEF', status: 'Available', form: ['L', 'W', 'D'] },
  ];

  return (
    <div className="space-y-8">
      {/* Team Header */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
        <div className="w-24 h-24 lg:w-32 lg:h-32 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-slate-100 dark:border-slate-700">
          <img src={TEAM_LOGO} alt="logo" className="w-16 h-16 object-contain" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <h2 className="text-3xl font-black">Lamu All-Stars</h2>
            <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500/10" />
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Lamu County • Established 2018</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-lg border border-emerald-100 dark:border-emerald-900/50">
              League Leaders
            </div>
            <div className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-lg border border-slate-100 dark:border-slate-700">
              24 Players
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors">
            <Plus className="w-5 h-5" />
            New Match
          </button>
          <button className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-400">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tactics Board & Lineup */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Layout className="w-5 h-5 text-emerald-600" />
              Tactical Lineup
            </h3>
            <select className="bg-transparent border-none text-emerald-600 font-bold text-sm focus:ring-0 cursor-pointer">
              <option>Formation: 4-3-3</option>
              <option>Formation: 4-4-2</option>
              <option>Formation: 3-5-2</option>
            </select>
          </div>

          <div className="aspect-[4/3] bg-emerald-700 rounded-3xl relative overflow-hidden shadow-inner border-[10px] border-emerald-800">
            {/* Pitch Markings */}
            <div className="absolute inset-4 border-2 border-white/20 rounded-lg"></div>
            <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/20"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full"></div>
            
            {/* Player Positions (Visual Demo) */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-emerald-700 shadow-lg border-2 border-amber-500">10</div>
            <div className="absolute top-[30%] left-[20%] w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-emerald-700 shadow-lg">11</div>
            <div className="absolute top-[30%] left-[80%] -translate-x-full w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-emerald-700 shadow-lg">7</div>
            <div className="absolute top-[55%] left-[50%] -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-emerald-700 shadow-lg">8</div>
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-emerald-700 shadow-lg">1</div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-5">
            <h4 className="font-bold mb-4">Upcoming Training</h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/30 rounded-xl flex flex-col items-center justify-center text-amber-600 border border-amber-100 dark:border-amber-900/50">
                <span className="text-[10px] font-bold leading-none">OCT</span>
                <span className="text-lg font-black leading-none">24</span>
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm">Conditioning & Finishing Drill</p>
                <p className="text-xs text-slate-500">Lamu High Pitch • 17:00</p>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <img key={i} src={`https://ui-avatars.com/api/?name=${i}&background=random`} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900" alt="" />
                ))}
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold">+18</div>
              </div>
            </div>
          </div>
        </div>

        {/* Squad List */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-600" />
              Squad Management
            </h3>
            
            <div className="space-y-4">
              {squad.map((player, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-lg flex items-center justify-center font-bold text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    {player.number}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm">{player.name}</p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase">{player.pos} • {player.status}</p>
                  </div>
                  <div className="flex gap-1">
                    {player.form.map((f, idx) => (
                      <span key={idx} className={`w-1.5 h-1.5 rounded-full ${f === 'W' ? 'bg-emerald-500' : f === 'L' ? 'bg-red-500' : 'bg-slate-300'}`}></span>
                    ))}
                  </div>
                  <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 text-emerald-600 text-sm font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-2xl transition-all">
              Manage Full Squad
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 text-white border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold">Team Finances</h4>
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Monthly Subs</span>
                <span className="text-emerald-400 font-bold">KES 12,400</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Sponsor Payout</span>
                <span className="text-emerald-400 font-bold">KES 50,000</span>
              </div>
              <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[65%]"></div>
              </div>
              <p className="text-[10px] text-center text-slate-500">65% of players have paid their fees</p>
            </div>
            <button className="w-full bg-white text-slate-900 py-2.5 rounded-xl text-xs font-bold active:scale-95 transition-transform">
              Send Payment Reminders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
import React from 'react';
import { 
  Trophy, 
  Table as TableIcon, 
  MapPin, 
  Clock, 
  Calendar, 
  Activity, 
  ChevronRight,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';

const TournamentEngine: React.FC = () => {
  const tableData = [
    { pos: 1, team: 'Lamu All-Stars', p: 12, w: 10, d: 2, l: 0, pts: 32 },
    { pos: 2, team: 'Shela FC', p: 12, w: 9, d: 1, l: 2, pts: 28 },
    { pos: 3, team: 'Mokowe FC', p: 12, w: 7, d: 3, l: 2, pts: 24 },
    { pos: 4, team: 'Faza Warriors', p: 12, w: 6, d: 2, l: 4, pts: 20 },
    { pos: 5, team: 'Manda Island Utd', p: 12, w: 5, d: 1, l: 6, pts: 16 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold flex items-center gap-3">
            <Trophy className="w-8 h-8 text-amber-500" />
            Lamu County League
          </h2>
          <p className="text-slate-500 dark:text-slate-400">Official tournament standings and fixtures.</p>
        </div>
        <div className="flex bg-white dark:bg-slate-900 p-1 rounded-2xl border border-slate-200 dark:border-slate-800">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-bold">Fixtures</button>
          <button className="px-4 py-2 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-bold">Standings</button>
          <button className="px-4 py-2 text-slate-600 dark:text-slate-400 rounded-xl text-sm font-bold">Stats</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Standings Table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-bold text-xl flex items-center gap-2">
                <TableIcon className="w-5 h-5 text-emerald-600" />
                League Table
              </h3>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full uppercase">Division A</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr className="text-[10px] text-slate-400 uppercase font-bold text-left">
                    <th className="px-6 py-4">Pos</th>
                    <th className="px-6 py-4">Team</th>
                    <th className="px-6 py-4">P</th>
                    <th className="px-6 py-4">W</th>
                    <th className="px-6 py-4">D</th>
                    <th className="px-6 py-4">L</th>
                    <th className="px-6 py-4">Pts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {tableData.map((row) => (
                    <tr key={row.pos} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4 font-bold text-sm">
                        <span className={`
                          w-6 h-6 rounded-md flex items-center justify-center
                          ${row.pos <= 2 ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}
                        `}>
                          {row.pos}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-[10px] font-bold">
                            {row.team.charAt(0)}
                          </div>
                          <span className="font-bold text-sm">{row.team}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{row.p}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{row.w}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{row.d}</td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{row.l}</td>
                      <td className="px-6 py-4 font-black text-emerald-600">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/30 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Golden Boot</p>
                <h4 className="font-bold">Salim "Mojo" Juma</h4>
                <p className="text-xs text-emerald-600 font-bold">12 Goals</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/30 rounded-2xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Top Assists</p>
                <h4 className="font-bold">Omar Bakari</h4>
                <p className="text-xs text-blue-600 font-bold">9 Assists</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixtures Feed */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Latest Results</h3>
            <button className="text-emerald-600 text-sm font-bold">Calendar</button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-5 shadow-sm hover:border-emerald-200 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Oct 20, 2023
                  </span>
                  <span className="text-emerald-500 flex items-center gap-1">
                    FT
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-bold text-sm truncate">Lamu Stars</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <span className="text-lg font-black">2</span>
                    <span className="text-slate-300">-</span>
                    <span className="text-lg font-black">1</span>
                  </div>
                  <div className="flex items-center gap-2 flex-1 justify-end">
                    <span className="font-bold text-sm truncate">Shela FC</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 text-[10px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Lamu Main</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 150 Fans</span>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-[10px] text-amber-700 font-bold">MVP</div>
                    <span className="text-xs font-bold">Salim Juma</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-6 text-white shadow-xl shadow-emerald-500/20">
            <h4 className="font-bold text-lg mb-2">Host a Tournament</h4>
            <p className="text-emerald-50 text-xs mb-6 leading-relaxed">
              Create your own league, automate fixtures, and manage prize pools with ease.
            </p>
            <button className="w-full bg-white text-emerald-700 py-2.5 rounded-xl text-xs font-bold active:scale-95 transition-transform">
              Start Organizer Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentEngine;
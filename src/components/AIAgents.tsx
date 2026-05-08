import React, { useState } from 'react';
import { 
  BrainCircuit, 
  MessageSquare, 
  Mic, 
  Sparkles, 
  BarChart3, 
  FileText, 
  Play, 
  Share2,
  Users,
  Trophy,
  Activity,
  Zap,
  Bot,
  ChevronRight
} from 'lucide-react';
import { toast } from 'sonner';

const AIAgents: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const agents = [
    { id: 'reporter', name: 'Match Reporter', icon: MessageSquare, color: 'bg-blue-500', desc: 'Turns raw stats into viral match reports.' },
    { id: 'scout', name: 'Scout Discovery', icon: Sparkles, color: 'bg-purple-500', desc: 'Identifies talent using performance trends.' },
    { id: 'coach', name: 'Coach Intel', icon: BrainCircuit, color: 'bg-emerald-500', desc: 'Suggests tactical improvements.' },
    { id: 'sponsor', name: 'Sponsor Matching', icon: Zap, color: 'bg-amber-500', desc: 'Connects businesses with teams.' },
  ];

  const generateReport = () => {
    setIsGenerating(true);
    toast.info("AI is analyzing match data...");
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Match Report Generated!");
    }, 2500);
  };

  return (
    <div className="space-y-8">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6"><div className="px-4 py-1.5 bg-emerald-600 rounded-full text-[10px] font-bold uppercase tracking-widest">Powered by 21st SDK</div></div>
          <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">Lamu Hub <span className="text-emerald-400">AI Engine</span></h2>
          <p className="text-slate-400 max-w-xl text-lg mb-8 leading-relaxed">Automating the administrative burden of grassroots football so you can focus on the game.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-emerald-50 transition-colors">
              <Bot className="w-5 h-5" /> Configure Agents
            </button>
          </div>
        </div>
        <div className="absolute right-[-10%] top-[-10%] opacity-20 pointer-events-none"><BrainCircuit className="w-[400px] h-[400px] text-emerald-500" /></div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-2 dark:text-white"><Bot className="w-6 h-6 text-emerald-500" /> Available Agents</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 group transition-all hover:border-emerald-500/30">
                <div className={`${agent.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg`}><agent.icon className="w-6 h-6 text-white" /></div>
                <h4 className="font-bold text-lg mb-2 dark:text-white">{agent.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">{agent.desc}</p>
                <button className="text-emerald-600 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">Learn More <ChevronRight className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="font-bold text-xl mb-6 dark:text-white">Match Recap AI</h3>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 mb-6 text-center">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-4">Input: Match #482</p>
              <div className="flex items-center justify-center gap-4 py-4">
                <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center font-bold text-sm shadow-sm dark:text-white">L</div>
                <div className="text-lg font-black italic dark:text-slate-500">VS</div>
                <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-lg flex items-center justify-center font-bold text-sm shadow-sm dark:text-white">S</div>
              </div>
            </div>
            <button onClick={generateReport} disabled={isGenerating} className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all ${isGenerating ? 'bg-slate-100 text-slate-400' : 'bg-slate-900 text-white hover:bg-black shadow-xl'}`}>
              {isGenerating ? <Activity className="w-4 h-4 animate-pulse" /> : <FileText className="w-4 h-4" />}
              {isGenerating ? 'Analyzing...' : 'Generate Match Report'}
            </button>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400"><Sparkles className="w-3 h-3 text-amber-500" /> Suggested Assets</div>
              <div className="grid grid-cols-2 gap-3">
                <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center gap-2 text-[10px] font-bold dark:text-slate-300 transition-colors hover:bg-emerald-50"><Play className="w-3 h-3 text-blue-500" /> Highlights</button>
                <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center gap-2 text-[10px] font-bold dark:text-slate-300 transition-colors hover:bg-emerald-50"><Share2 className="w-3 h-3 text-emerald-500" /> Share</button>
              </div>
            </div>
          </div>
          <div className="bg-emerald-600 rounded-3xl p-6 text-white shadow-xl shadow-emerald-500/20">
            <h4 className="font-bold flex items-center gap-2 mb-2"><Mic className="w-5 h-5" /> Live Commentary</h4>
            <p className="text-emerald-50 text-xs mb-4 leading-relaxed">AI-generated commentary in Kiswahili or English.</p>
            <div className="flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full animate-ping"></div><span className="text-[10px] font-bold uppercase tracking-widest">Active</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgents;
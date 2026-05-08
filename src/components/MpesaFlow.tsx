import React, { useState } from 'react';
import { 
  Wallet, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  History, 
  CreditCard, 
  DollarSign,
  Lock,
  Zap,
  Ticket
} from 'lucide-react';
import { toast } from 'sonner';

const MpesaFlow: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const MPESA_UI = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/904edff3-f020-4462-9f03-6f1a7e353a35/m-pesa-payment-ui-ad1e20aa-1778211735899.webp";

  const handlePayment = () => {
    if (!amount || !phoneNumber) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsProcessing(true);
    toast.info("Sending M-Pesa STK Push...");
    
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Payment Received Successfully!");
      setAmount('');
      setPhoneNumber('');
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-emerald-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-emerald-500/20">
        <div>
          <h2 className="text-3xl font-black mb-2 flex items-center gap-3">
            <Wallet className="w-8 h-8" />
            LamuHub Wallet
          </h2>
          <p className="text-emerald-100 opacity-80">Manage tournament fees, tickets, and team contributions.</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 text-center">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Current Balance</p>
          <p className="text-3xl font-black">KES 4,250</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Payment Form */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold">M-Pesa Express</h3>
              <p className="text-xs text-slate-500">Pay directly from your phone</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">Phone Number</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">+254</span>
                <input 
                  type="text" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="712345678" 
                  className="w-full pl-14 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none font-bold"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block mb-2">Amount (KES)</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00" 
                className="w-full px-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-emerald-500 outline-none font-black text-2xl"
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[500, 1000, 2000].map(val => (
                <button 
                  key={val} 
                  onClick={() => setAmount(val.toString())}
                  className="py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:border-emerald-200 transition-colors"
                >
                  KES {val}
                </button>
              ))}
            </div>

            <button 
              onClick={handlePayment}
              disabled={isProcessing}
              className={`
                w-full py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all
                ${isProcessing ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/20 active:scale-[0.98]'}
              `}
            >
              {isProcessing ? 'Processing...' : 'Pay with M-Pesa'}
              {!isProcessing && <ArrowRight className="w-5 h-5" />}
            </button>
            
            <p className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-medium">
              <Lock className="w-3 h-3" />
              Secure payments powered by Daraja API
            </p>
          </div>
        </div>

        {/* Info & History */}
        <div className="space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-700/50">
            <h4 className="font-bold flex items-center gap-2 mb-4">
              <History className="w-4 h-4 text-emerald-600" />
              Recent Transactions
            </h4>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <Ticket className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold">Match Ticket: Lamu vs Shela</p>
                      <p className="text-[10px] text-slate-400">Oct 18 • M-Pesa</p>
                    </div>
                  </div>
                  <span className="text-sm font-black text-red-500">-500</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
            <h4 className="font-extrabold text-xl mb-4">Sponsorship Marketplace</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
              Are you a local business? Sponsor a tournament or a team directly through LamuHub and get your brand featured on match clips.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                <Zap className="w-6 h-6 text-amber-500" />
                <div>
                  <p className="text-xs font-bold text-amber-700 dark:text-amber-400">Merchant Program</p>
                  <p className="text-[10px] text-amber-600/80">Sell tickets at your shop</p>
                </div>
              </div>
              <button className="w-full mt-2 py-3 bg-slate-900 dark:bg-emerald-600 text-white rounded-2xl text-sm font-bold active:scale-95 transition-transform">
                Apply as Sponsor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MpesaFlow;
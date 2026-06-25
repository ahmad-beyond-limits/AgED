"use client";

import { Flame, Shield, Heart, Target } from "lucide-react";

export function RightPanel() {
  return (
    <aside className="w-[320px] fixed right-6 top-6 bottom-6 hidden xl:flex flex-col gap-6 z-40">
      
      {/* Premium Stats HUD Card */}
      <div className="flex items-center justify-between gap-2 bg-white/95 backdrop-blur-3xl p-4 rounded-[28px] border border-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)]">
        <div className="flex items-center gap-2 text-slate-800 font-bold hover:bg-slate-100 p-2.5 rounded-2xl cursor-pointer transition-colors group">
          <Flame className="text-orange-500 group-hover:scale-110 transition-transform" fill="currentColor" size={22} />
          <span className="text-[15px] tracking-wide">12</span>
        </div>
        <div className="flex items-center gap-2 text-slate-800 font-bold hover:bg-slate-100 p-2.5 rounded-2xl cursor-pointer transition-colors group">
          <Shield className="text-blue-500 group-hover:scale-110 transition-transform" fill="currentColor" size={22} />
          <span className="text-[15px] tracking-wide">450</span>
        </div>
        <div className="flex items-center gap-2 text-slate-800 font-bold hover:bg-slate-100 p-2.5 rounded-2xl cursor-pointer transition-colors group">
          <Heart className="text-rose-500 group-hover:scale-110 transition-transform" fill="currentColor" size={22} />
          <span className="text-[15px] tracking-wide">5</span>
        </div>
      </div>

      {/* Sleek Daily Quests Box */}
      <div className="bg-white/95 backdrop-blur-3xl rounded-[32px] p-7 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-extrabold text-slate-900 text-xl tracking-tight">Daily Quests</h3>
          <Target className="text-slate-300" size={24} />
        </div>
        
        <div className="flex flex-col gap-8">
          {/* Quest 1 */}
          <div className="flex items-start gap-5">
            <div className="bg-orange-50 p-3 rounded-2xl border border-orange-100 shrink-0">
               <Target className="text-orange-500" size={28} />
            </div>
            <div className="flex-1 pt-1">
              <h4 className="font-bold text-slate-800 text-[15px] mb-3">Complete 3 lessons</h4>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                <div className="bg-orange-500 h-full rounded-full w-2/3 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
              </div>
            </div>
          </div>

          {/* Quest 2 */}
          <div className="flex items-start gap-5">
            <div className="bg-blue-50 p-3 rounded-2xl border border-blue-100 shrink-0">
               <Target className="text-blue-500" size={28} />
            </div>
            <div className="flex-1 pt-1">
              <h4 className="font-bold text-slate-800 text-[15px] mb-3">Score 100% in a quiz</h4>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
                <div className="bg-blue-500 h-full rounded-full w-0" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </aside>
  );
}

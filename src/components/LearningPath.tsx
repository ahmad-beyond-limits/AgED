"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Star, Lock, Crown } from "lucide-react";

export function LearningPath() {
  const nodes = [
    { id: 1, type: "current", title: "Soil Basics" },
    { id: 2, type: "locked", title: "Compost 101" },
    { id: 3, type: "locked", title: "PH Levels" },
    { id: 4, type: "locked", title: "Mulching" },
    { id: 5, type: "locked", title: "Cover Crops" },
    { id: 6, type: "locked", title: "No-Till Method" },
    { id: 7, type: "locked", title: "Fungus King" },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto py-32 px-4 flex flex-col items-center relative min-h-[1200px]">
      
      {/* Sleek White Floating Header */}
      <div className="bg-white/95 backdrop-blur-3xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] rounded-full px-12 py-5 mb-24 relative overflow-hidden inline-flex flex-col items-center">
        <span className="text-emerald-500 font-extrabold tracking-widest uppercase text-[11px] mb-1">Chapter 1</span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Soil Foundations</h2>
      </div>

      {/* Premium UI Nodes positioned over the background */}
      <div className="relative flex flex-col items-center w-full gap-12 pb-32">
        {nodes.map((node, index) => {
          // Slight meandering offset
          const amplitude = 40; 
          const frequency = 1;
          const xOffset = Math.sin(index * frequency) * amplitude;
          
          return (
            <motion.div 
              key={node.id} 
              style={{ x: xOffset }}
              className="relative z-10 flex flex-col items-center group"
            >
              {/* Premium Glass UI Node */}
              <Link href={`/lesson/${node.id}`}>
                <button
                  className={`
                    relative rounded-full flex items-center justify-center transition-all duration-300 outline-none
                    ${node.type === 'boss' ? 'w-24 h-24' : 'w-20 h-20'}
                    ${node.type === 'completed' ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-white/50 hover:scale-105' : ''}
                    ${node.type === 'current' ? 'bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.5)] border-2 border-emerald-300 hover:scale-105' : ''}
                    ${node.type === 'locked' ? 'bg-white/20 backdrop-blur-md border border-white/10 shadow-lg hover:scale-105' : ''}
                    ${node.type === 'boss' ? 'bg-gradient-to-br from-slate-800 to-black border border-slate-700 shadow-2xl hover:scale-105' : ''}
                  `}
                >
                  {node.type === 'completed' && <Check size={32} className="text-emerald-500" strokeWidth={3} />}
                  {node.type === 'current' && <Star size={36} className="text-white" fill="currentColor" />}
                  {node.type === 'locked' && <Lock size={28} className="text-white/50" strokeWidth={2} />}
                  {node.type === 'boss' && <Crown size={40} className="text-amber-400" strokeWidth={2} />}
                </button>
              </Link>

              {/* Node Title (Subtle Glass Label) */}
              <div className="absolute top-[100%] mt-3 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs font-medium whitespace-nowrap">{node.title}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}

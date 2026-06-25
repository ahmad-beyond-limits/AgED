"use client";

import { motion } from "framer-motion";
import { Lock, Unlock, Map, Worm, Sprout, Droplets, Bug, Tractor } from "lucide-react";

export function WorldPreviewMap() {
  const worlds = [
    { name: "Soil Kingdom", level: "World 1", unlocked: true, icon: <Worm size={32} strokeWidth={1.5} className="text-white" />, color: "from-amber-500 to-orange-600", shadow: "shadow-orange-500/20" },
    { name: "Seed Valley", level: "World 2", unlocked: false, icon: <Sprout size={32} strokeWidth={1.5} className="text-emerald-400" />, color: "from-emerald-500 to-teal-600", shadow: "shadow-emerald-500/20" },
    { name: "Water Mountains", level: "World 3", unlocked: false, icon: <Droplets size={32} strokeWidth={1.5} className="text-blue-400" />, color: "from-blue-500 to-indigo-600", shadow: "shadow-blue-500/20" },
    { name: "Pest Forest", level: "World 4", unlocked: false, icon: <Bug size={32} strokeWidth={1.5} className="text-purple-400" />, color: "from-purple-500 to-fuchsia-600", shadow: "shadow-purple-500/20" },
    { name: "Harvest Empire", level: "World 5", unlocked: false, icon: <Tractor size={32} strokeWidth={1.5} className="text-rose-400" />, color: "from-rose-500 to-red-600", shadow: "shadow-rose-500/20" },
  ];

  return (
    <section className="py-40 px-4 sm:px-8 bg-slate-900 overflow-hidden relative">
      {/* Dark Gamified Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
        
        {/* Left Side: Typography */}
        <div className="w-full lg:w-1/3 flex flex-col gap-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm w-fit mx-auto lg:mx-0 tracking-wide bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
            <Map size={16} />
            <span className="uppercase">Structured Path</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-serif tracking-tight text-white leading-[1.1]">
            Explore <br className="hidden lg:block"/> The Worlds
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed tracking-wide">
            Progress through carefully designed curriculums. Defeat the Fungus King in a boss battle to unlock the next region.
          </p>
        </div>

        {/* Right Side: Immersive Gamified Map Path */}
        <div className="w-full lg:w-2/3 relative">
          
          {/* Animated Connecting SVG Path (Desktop) */}
          <div className="absolute top-[48px] left-10 w-[calc(100%-80px)] h-0 border-t-2 border-dashed border-slate-700 z-0 hidden sm:block" />
          
          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-10 relative z-10 overflow-x-auto pb-10 snap-x hide-scrollbar px-4 sm:px-0">
            {worlds.map((world, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="flex flex-col items-center gap-6 min-w-[140px] snap-center cursor-pointer group"
              >
                {/* World Node Icon */}
                <div 
                  className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 z-10 ${
                    world.unlocked 
                      ? `bg-gradient-to-br ${world.color} shadow-lg ${world.shadow}` 
                      : `bg-slate-800 border-2 border-slate-700/50 grayscale-[0.8] opacity-70 group-hover:grayscale-[0.5] group-hover:opacity-100`
                  }`}
                >
                  {/* Inner glow for unlocked */}
                  {world.unlocked && (
                    <div className="absolute inset-1 rounded-full border border-white/20" />
                  )}
                  {world.icon}
                </div>
                
                {/* World Node Text */}
                <div className="text-center">
                  <h4 className={`text-lg font-medium tracking-tight mb-2 ${world.unlocked ? 'text-white' : 'text-slate-400'}`}>
                    {world.name}
                  </h4>
                  <div className="flex items-center justify-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700">
                    {world.unlocked ? (
                      <Unlock size={12} className="text-emerald-400" />
                    ) : (
                      <Lock size={12} className="text-slate-500" />
                    )}
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${world.unlocked ? 'text-slate-300' : 'text-slate-500'}`}>
                      {world.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

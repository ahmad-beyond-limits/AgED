"use client";

import { motion } from "framer-motion";
import { Sparkles, Image as ImageIcon, Bot, ArrowRight, ShieldCheck, Camera } from "lucide-react";
import Image from "next/image";

export function ValuePropSection() {
  return (
    <section className="py-32 px-4 sm:px-8 relative z-10 bg-slate-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-serif mb-6 tracking-tight text-slate-900">
            Why Ag<span className="font-light italic">~</span>ED Works
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed tracking-wide">
            We combined the addictive mechanics of modern gaming with real-world agricultural science to help you grow.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-[40px] p-10 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-50 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-orange-400 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-8 text-white">
                <ImageIcon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-medium text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Real-World <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Missions.</span>
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed max-w-md font-medium">
                Plant a real seed, upload a photo, and let our AI verify your sprout to earn massive XP and unlock new worlds.
              </p>
            </div>

            <div className="mt-12 flex gap-4 relative z-10">
              <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 font-medium text-sm text-slate-700">
                <Camera size={18} className="text-orange-500" />
                <span>Snap Photo</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 font-medium text-sm text-slate-700">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>AI Verified</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-[40px] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-50 via-transparent to-transparent opacity-50" />
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6 text-white">
                  <Bot size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">AI Gardening Coach</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Leaves turning yellow? Snap a picture. Your personal AI coach diagnoses diseases and tells you exactly what to do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-900 rounded-[40px] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] flex-1 relative overflow-hidden text-white"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-500/20 via-transparent to-transparent opacity-50" />
              <div className="relative z-10 flex flex-col h-full justify-center">
                <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md mb-6 text-emerald-400 border border-white/10">
                  <Sparkles size={28} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-medium mb-4 tracking-tight">Bite-Sized Lessons</h3>
                <p className="text-slate-300 leading-relaxed font-medium">
                  Learn soil health, plant care, and crop rotation through concise, 5-minute interactive quizzes and games.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Medal, Trophy, Star, Diamond, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen px-4 sm:px-8 pt-32 pb-20 flex items-center justify-center bg-slate-50">
      
      {/* Massive Premium Hero Card Container */}
      <div className="w-full max-w-[1400px] mx-auto rounded-[40px] lg:rounded-[60px] overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-200/50 bg-white">
        
        {/* LEFT SIDE: Gamification Preview */}
        <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-[800px] bg-gradient-to-t from-[#110900] via-[#4a1800] to-[#ff6b00] relative flex flex-col justify-center px-8 sm:px-16 lg:px-20 py-16">
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent pointer-events-none" />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col gap-6 w-full max-w-md mx-auto"
          >
            {/* Glass Card 1: Status */}
            <div className="bg-white/95 backdrop-blur-3xl rounded-[32px] p-6 shadow-2xl flex items-center gap-6">
              <div className="bg-gradient-to-br from-orange-300 to-amber-500 p-4 rounded-2xl shadow-inner">
                <Medal size={32} className="text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-slate-400 font-medium text-sm tracking-wide uppercase mb-1">Your Status</h3>
                <p className="text-slate-900 font-bold text-3xl tracking-tight">Silver</p>
              </div>
            </div>

            {/* Glass Card 2: Progress */}
            <div className="bg-white/95 backdrop-blur-3xl rounded-[32px] p-8 shadow-2xl flex flex-col gap-8 hidden sm:flex">
              <div className="flex justify-between items-center px-2">
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-emerald-100 p-3 rounded-2xl text-emerald-600"><Medal size={24} /></div>
                  <span className="text-xs font-bold text-slate-800">Silver</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-slate-100 p-3 rounded-2xl text-slate-400"><Trophy size={24} /></div>
                  <span className="text-xs font-medium text-slate-400">Gold</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-slate-100 p-3 rounded-2xl text-slate-400"><Star size={24} /></div>
                  <span className="text-xs font-medium text-slate-400">Platinum</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-slate-100 p-3 rounded-2xl text-slate-400"><Diamond size={24} /></div>
                  <span className="text-xs font-medium text-slate-400">Diamond</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-slate-100 rounded-full">
                <div className="absolute top-0 left-0 h-full w-[15%] bg-emerald-500 rounded-full" />
                <div className="absolute top-1/2 left-[15%] -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full shadow-md" />
                <div className="absolute top-1/2 left-[50%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-slate-200 border-4 border-white rounded-full" />
                <div className="absolute top-1/2 left-[75%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-slate-200 border-4 border-white rounded-full" />
                <div className="absolute top-1/2 left-[100%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-slate-200 border-4 border-white rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Call To Action */}
          <div className="mt-16 w-full max-w-md mx-auto flex flex-col items-center gap-4 text-white/80 text-sm font-medium">
            <Link href="/learn" className="w-full">
              <button className="w-full border border-white/40 rounded-full px-8 py-5 text-white uppercase tracking-widest text-sm hover:bg-white hover:text-orange-600 transition-colors">
                Get Started Now
              </button>
            </Link>
            <p className="leading-relaxed text-center opacity-70">Master agriculture around the globe</p>
          </div>
        </div>

        {/* RIGHT SIDE: Typography & Image */}
        <div className="w-full lg:w-1/2 min-h-[500px] lg:min-h-[800px] bg-white relative flex flex-col px-8 sm:px-16 lg:px-20 py-16">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Elegant Serif Title */}
            <div className="border-b border-slate-200 pb-8">
              <h1 className="font-serif text-[50px] lg:text-[70px] leading-[1] text-slate-900 tracking-tight">
                AG <span className="font-serif italic font-light">~</span><br/>
                EDUCATION
              </h1>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 flex-shrink-0">
              <div className="flex flex-col gap-4">
                <Zap className="text-slate-400" size={28} strokeWidth={1.5} />
                <p className="text-slate-800 font-medium text-sm leading-relaxed">Level up in a particular farming community by climbing the leaderboards.</p>
              </div>
              <div className="flex flex-col gap-4 sm:pt-10">
                <p className="text-slate-800 font-medium text-sm leading-relaxed">Keep using the app and unlock real-world agricultural items.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 flex-shrink-0">
              <Trophy className="text-slate-400" size={24} strokeWidth={1.5} />
              <h2 className="text-xl font-serif text-slate-900 max-w-sm">Earn Trophies in Scenarios</h2>
            </div>

            {/* Tractor Image contained beautifully at the bottom */}
            <div className="relative w-full flex-1 min-h-[240px] mt-10 rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-slate-100">
              <Image 
                src="/hero_image.png" 
                alt="AgED Student" 
                fill 
                className="object-cover object-center"
                priority
              />
            </div>

          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}

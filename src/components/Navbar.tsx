"use client";

import Link from "next/link";
import { Leaf } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-slate-200/50 px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-emerald-500 to-teal-400 p-2 rounded-xl text-white shadow-sm">
            <Leaf size={20} strokeWidth={2} />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900">AgED</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">
          <Link href="#paths" className="hover:text-emerald-600 transition-colors">Learning Paths</Link>
          <Link href="#missions" className="hover:text-emerald-600 transition-colors">Missions</Link>
          <Link href="#ai-coach" className="hover:text-emerald-600 transition-colors">AI Coach</Link>
          <Link href="#community" className="hover:text-emerald-600 transition-colors">Community</Link>
        </div>

        <Link href="/learn">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium text-sm tracking-wide shadow-sm hover:shadow-md transition-all"
          >
            Dashboard
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}

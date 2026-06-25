"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Home, Compass, Trophy, User, Settings } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Learn", href: "/learn", icon: <Home size={22} strokeWidth={2.5} /> },
    { name: "Missions", href: "/learn/missions", icon: <Compass size={22} strokeWidth={2.5} /> },
    { name: "Leaderboard", href: "/learn/leaderboard", icon: <Trophy size={22} strokeWidth={2.5} /> },
    { name: "Profile", href: "/learn/profile", icon: <User size={22} strokeWidth={2.5} /> },
    { name: "Settings", href: "/learn/settings", icon: <Settings size={22} strokeWidth={2.5} /> },
  ];

  return (
    <aside className="w-64 fixed left-6 top-6 bottom-6 bg-white/95 backdrop-blur-3xl rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-white flex flex-col p-6 hidden md:flex z-50">
      
      {/* Premium Logo */}
      <Link href="/" className="flex items-center gap-3 mb-10 px-2 group">
        <div className="bg-emerald-500 p-2.5 rounded-2xl text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
          <Leaf size={24} strokeWidth={3} />
        </div>
        <span className="text-2xl font-extrabold tracking-tight text-slate-900">AgED</span>
      </Link>

      <nav className="flex flex-col gap-1.5 flex-1 mt-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isClickable = item.href === '/learn';
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all ${
                isActive 
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20" 
                  : "text-slate-500 hover:bg-slate-100/80 hover:text-slate-900"
              } ${!isClickable ? "pointer-events-none opacity-50" : ""}`}
            >
              <div className={isActive ? "text-white" : "text-slate-400"}>
                {item.icon}
              </div>
              <span className="text-[15px] tracking-wide">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
    </aside>
  );
}

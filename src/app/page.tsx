import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ValuePropSection } from "@/components/ValuePropSection";
import { WorldPreviewMap } from "@/components/WorldPreviewMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans overflow-x-hidden relative">
      <Navbar />
      
      {/* Soft Light Decorative Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-300/20 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300/20 rounded-full blur-[150px] pointer-events-none z-0" />

      <HeroSection />
      <ValuePropSection />
      <WorldPreviewMap />
      
      <footer className="py-12 text-center text-slate-400 font-medium relative z-10">
        <p>© 2026 AgED. Grow your knowledge.</p>
      </footer>
    </main>
  );
}

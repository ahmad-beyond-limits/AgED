import { Sidebar } from "@/components/Sidebar";
import { RightPanel } from "@/components/RightPanel";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen relative overflow-hidden bg-slate-900">
      
      {/* Immersive Game Map Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/hero_image.png)' }}
      />
      
      {/* Dark gradient overlay to ensure UI legibility on edges */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />

      {/* Floating HUD Sidebar */}
      <Sidebar />

      {/* Main Content Area (Scrollable Map) */}
      <main className="flex-1 md:pl-64 xl:pr-[320px] h-screen overflow-y-auto hide-scrollbar relative z-10">
        <div className="w-full max-w-5xl mx-auto min-h-full">
          {children}
        </div>
      </main>

      {/* Floating HUD Right Panel */}
      <RightPanel />
    </div>
  );
}

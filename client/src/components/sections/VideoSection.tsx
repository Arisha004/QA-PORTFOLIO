import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">My QA Workflow Explained</h2>
        
        <div className="relative aspect-video bg-muted rounded-xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-left">
            <h3 className="text-white font-bold text-lg">From Requirement to Release</h3>
            <p className="text-white/70 text-sm">A 2-minute walkthrough of how I analyze, test, and automate.</p>
          </div>
          
          <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur rounded text-xs font-mono text-white">
            Video Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}

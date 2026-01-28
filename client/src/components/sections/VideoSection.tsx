import { Play, Video, Terminal, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="section-padding bg-secondary/50 relative overflow-hidden">
      {/* 3D Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-full opacity-10 pointer-events-none">
        <img src="/assets/3d-shapes.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Learning in Public</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-6 uppercase leading-none">
              How I'm <br />
              <span className="text-muted-foreground/40">Learning</span> <br />
              QA Step by Step
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
              Transparency is key. In this short video, I walk through how I analyze requirements, my bug hunting process, and how I use simple tools to improve software quality every day.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-background border border-border rounded-lg">
                <Terminal className="h-5 w-5 text-primary mb-2" />
                <div className="text-xs font-bold uppercase tracking-widest">Manual Testing</div>
              </div>
              <div className="p-4 bg-background border border-border rounded-lg">
                <Sparkles className="h-5 w-5 text-primary mb-2" />
                <div className="text-xs font-bold uppercase tracking-widest">Growth Mindset</div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative aspect-video bg-background border border-border overflow-hidden shadow-2xl"
            >
              {/* Eye catching placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-flex mb-4">
                    <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 animate-pulse"></div>
                    <div className="relative h-20 w-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest opacity-40">Coming Soon</div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-background via-background/80 to-transparent">
                 <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                   <Video className="h-3 w-3" />
                   Workflow Breakdown
                 </div>
                 <div className="text-xl font-bold font-display uppercase tracking-tight">Requirement Analysis to Bug Report</div>
              </div>
            </motion.div>
            
            {/* Corner Accent */}
            <div className="absolute -top-4 -right-4 h-12 w-12 border-t-2 border-r-2 border-primary/20"></div>
            <div className="absolute -bottom-4 -left-4 h-12 w-12 border-b-2 border-l-2 border-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Gauge, Trophy, MousePointer2, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { BugHunterGame } from "@/components/ui/BugHunterGame";

export function Hero() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const RESUME_LINK = "#"; // Placeholder for actual link

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Background Decor - Enhanced for top-tier feel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[100%] h-[80%] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-500/5 rounded-full blur-[120px]" />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, var(--color-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
        
        <img 
          src="/assets/hero-bg-v2.png" 
          alt="" 
          role="presentation"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 mix-blend-overlay"
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.3em] mb-10 shadow-sm backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                Precision in Every Byte
              </div>
              
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-black leading-[0.8] tracking-tighter mb-10 uppercase">
                QUALITY <br className="hidden sm:block" />
                <span className="text-muted-foreground/20">WITHOUT</span> <br className="hidden sm:block" />
                LIMITS.
              </h1>
              
              <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Arisha Mumtaz. Engineering excellence through rigorous validation. I transform complex software challenges into verified, high-performance solutions.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-5 md:gap-8 justify-center lg:justify-start items-center">
                <Link href="/projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto rounded-none px-12 h-16 md:h-20 text-base md:text-lg font-black tracking-[0.1em] bg-primary text-primary-foreground hover:bg-primary/90 group relative overflow-hidden shadow-2xl shadow-primary/20">
                    <span className="relative z-10 flex items-center">
                      EXPLORE MY WORK
                      <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </Link>
                
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-none px-12 h-16 md:h-20 text-base md:text-lg font-black tracking-[0.1em] border-primary/20 text-primary hover:bg-primary/5 transition-all">
                    DOWNLOAD RESUME
                    <Download className="ml-4 h-6 w-6" />
                  </Button>
                </a>

                <button 
                  onClick={() => setIsGameOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-5 px-10 h-16 md:h-20 border border-border/50 group cursor-pointer hover:bg-secondary/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-primary/20 rounded-full blur-md"
                    />
                    <MousePointer2 className="h-6 w-6 text-primary relative z-10" />
                  </div>
                  <span className="text-xs font-black text-muted-foreground uppercase tracking-[0.3em] group-hover:text-primary transition-colors">Start Protocol</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[4rem] blur-3xl opacity-50" />
              <div 
                className="relative aspect-[4/5] bg-secondary/30 border border-white/10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] backdrop-blur-sm rounded-[3rem] group"
              >
                {/* Visual Eye-Catcher: Corporate Tech Vibe */}
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <div className="p-5 bg-primary/10 rounded-3xl border border-white/10 backdrop-blur-xl">
                        <ShieldCheck className="h-10 w-10 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="text-right">
                        <div className="text-5xl font-black font-display tracking-tighter text-foreground">
                          QA<span className="text-primary">.PRO</span>
                        </div>
                        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mt-1">Status: Active</div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full bg-secondary border-4 border-background flex items-center justify-center font-black text-xs text-muted-foreground">
                              {i}
                            </div>
                          ))}
                        </div>
                        <div className="h-px flex-1 bg-border/50" />
                      </div>
                      
                      <div className="grid grid-cols-12 gap-2 h-24 items-end px-2">
                        {[40, 70, 45, 90, 65, 30, 85, 50, 95, 60, 40, 80].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05, duration: 1 }}
                            className="bg-primary/20 hover:bg-primary transition-colors col-span-1 rounded-full"
                          />
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-border/50 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                          Live Validation
                        </div>
                        <div>2026.REL.V4</div>
                      </div>
                    </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />
              </div>
              
              {/* Floating Metric Card */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 hidden lg:block glass-card p-8 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-30 rounded-3xl"
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-primary text-primary-foreground rounded-2xl shadow-lg shadow-primary/20">
                    <Trophy className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-1">Expertise level</div>
                    <div className="text-2xl font-black tracking-tight">VERIFIED</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <BugHunterGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </section>
  );
}

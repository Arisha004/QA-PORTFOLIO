import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Gauge, Trophy, MousePointer2, Download, Sparkles, Shield, Cpu, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { BugHunterGame } from "@/components/ui/BugHunterGame";

export function Hero() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const RESUME_LINK = "#"; 

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[100%] h-[80%] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-500/10 rounded-full blur-[120px]" />
        
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} 
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
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.3em] mb-10 shadow-[0_0_20px_rgba(0,255,255,0.2)] backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Next-Gen Quality Engineering
              </div>
              
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-10 uppercase text-black">
  ELITE <br className="hidden sm:block" />
  <span className="text-primary font-outline-2">QUALITY</span> <br className="hidden sm:block" />
  SYSTEMS.
</h1>

              
              <p className="text-lg md:text-md text-black/60 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold tracking-tight">
                Arisha Mumtaz. Redefining software reliability through high-precision validation and advanced test architectures.
              </p>

             <div className="flex flex-col sm:flex-row flex-wrap gap-5 md:gap-8 justify-center lg:justify-start items-center">
  
  <Link href="/projects" className="w-full sm:w-auto">
    <Button
      size="lg"
      className="w-full sm:w-auto rounded-none m  px-8 h-14 md:h-16 text-sm md:text-base font-black tracking-[0.1em] bg-primary text-white hover:bg-black transition-all group relative overflow-hidden shadow-2xl shadow-primary/30"
    >
      <span className="relative z-10 flex items-center">
       EXPLORE WORK
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />  </span>
                  </Button>
                </Link>
                
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-none px-12 h-16 md:h-20 text-base md:text-lg font-black tracking-[0.1em] border-black text-black hover:bg-black hover:text-white transition-all backdrop-blur-sm">
                    RESUME.PDF
                    <Download className="ml-4 h-6 w-6" />
                  </Button>
                </a>

                <button 
                  onClick={() => setIsGameOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-5 px-10 h-16 md:h-20 border border-black/20 group cursor-pointer hover:bg-black/10 transition-all duration-300 backdrop-blur-md rounded-lg shadow-xl"
                >
                  <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.8, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="absolute inset-0 bg-primary rounded-full blur-md"
                    />
                    <Target className="h-6 w-6 text-black relative z-10" />
                  </div>
                  <span className="text-xs font-black text-black uppercase tracking-[0.3em] group-hover:text-primary transition-colors">START MISSION</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/10 rounded-[4rem] blur-[100px] opacity-50" />
              <div 
                className="relative aspect-[4/5] bg-gradient-to-br from-white to-gray-50 border border-black/10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] backdrop-blur-md rounded-[4rem] group"
              >
                <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <div className="p-5 bg-primary rounded-3xl border border-black/10 shadow-[0_0_30px_rgba(0,255,255,0.4)]">
                        <ShieldCheck className="h-10 w-10 text-white" strokeWidth={2} />
                      </div>
                      <div className="text-right">
                        <div className="text-5xl font-black font-display tracking-tighter text-black">
                          QA<span className="text-primary">.V4</span>
                        </div>
                        <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mt-2">STATUS: ELITE</div>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                          {[Shield, Cpu, Target].map((Icon, i) => (
                            <div key={i} className="w-14 h-14 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-lg">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                          ))}
                        </div>
                        <div className="h-1 flex-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
                      </div>
                      
                      <div className="grid grid-cols-12 gap-3 h-28 items-end px-2">
                        {[60, 90, 55, 100, 75, 40, 95, 60, 100, 70, 50, 90].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05, duration: 1.5, ease: "easeOut" }}
                            className="bg-primary/30 group-hover:bg-primary transition-all duration-500 col-span-1 rounded-t-full shadow-[0_0_15px_rgba(0,255,255,0.1)]"
                          />
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-6 border-t border-black/10 text-[10px] font-black uppercase tracking-[0.3em] text-black/60">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                          REAL-TIME OPS
                        </div>
                        <div className="text-primary font-bold">NODE: ARISHA_SEC_01</div>
                      </div>
                    </div>
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-12 hidden lg:block glass-card p-10 border border-primary/30 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] z-30 rounded-[3rem] bg-white/80 backdrop-blur-2xl"
              >
                <div className="flex items-center gap-6">
                  <div className="p-5 bg-primary text-white rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.4)]">
                    <Trophy className="h-10 w-10" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">VALIDATION LEVEL</div>
                    <div className="text-3xl font-black tracking-tight text-black uppercase">TOP TIER</div>
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

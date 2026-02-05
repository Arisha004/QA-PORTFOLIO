import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Gauge, Trophy, MousePointer2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { BugHunterGame } from "@/components/ui/BugHunterGame";

export function Hero() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const RESUME_LINK = "https://drive.google.com/your-resume-link-here"; // Placeholder

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/5 rounded-full blur-[100px]" />
        <img 
          src="/assets/hero-bg-v2.png" 
          alt="" 
          role="presentation"
          className="w-full h-full object-cover opacity-40 dark:opacity-20 mix-blend-overlay"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <ShieldCheck className="h-3.5 w-3.5" />
                Aspiring Quality Engineer
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8">
                LEARNING <br />
                <span className="text-muted-foreground/30">QUALITY</span> <br />
                CONTROL.
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium">
                Arisha Mumtaz. I am currently learning the art of software testing, exploring how to find bugs, and understanding the foundations of quality assurance.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <Link href="/projects">
                  <Button size="lg" className="rounded-none px-10 h-16 text-base font-bold tracking-tight bg-primary text-primary-foreground hover:bg-primary/90">
                    EXPLORE MY WORK
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </Link>
                
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="lg" className="rounded-none px-10 h-16 text-base font-bold tracking-tight border-primary text-primary hover:bg-primary/5">
                    DOWNLOAD RESUME
                    <Download className="ml-3 h-5 w-5" />
                  </Button>
                </a>

                <button 
                  onClick={() => setIsGameOpen(true)}
                  className="flex items-center gap-4 px-8 h-16 border border-border group cursor-pointer hover:bg-secondary transition-all duration-300"
                >
                  <motion.div 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-primary"
                  >
                    <MousePointer2 className="h-5 w-5" />
                  </motion.div>
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors">Launch Protocol</span>
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
              style={{ perspective: 1000 }}
              className="relative aspect-[4/5] bg-secondary border border-border overflow-hidden group cursor-crosshair shadow-2xl transition-all duration-500"
            >
               {/* Visual Eye-Catcher: Dynamic Grid */}
               <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    >
                      <Trophy className="h-12 w-12 text-primary" strokeWidth={1.5} />
                    </motion.div>
                    <div className="text-right">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-4xl font-black font-display tracking-tighter"
                      >
                        LEARNER
                      </motion.div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Growth Mindset</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-[1px] w-full bg-border" />
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">
                      <span>Interactive_Mode</span>
                      <span>Hover_To_Explore</span>
                      <span>v1.0.4</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1 h-20 items-end">
                      {[40, 70, 45, 90, 65, 30, 85, 50, 95, 60, 40, 80].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileHover={{ height: '100%', backgroundColor: 'var(--color-primary)' }}
                          animate={{ height: `${h}%` }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="bg-primary/20 col-span-1"
                        />
                      ))}
                    </div>
                  </div>
               </div>

               {/* Dynamic Floating Elements */}
               <motion.div 
                 animate={{ 
                   y: [0, -20, 0],
                   x: [0, 10, 0]
                 }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 className="absolute top-1/4 left-1/4 w-12 h-12 border border-primary/20 rounded-full z-10"
               />
               <motion.div 
                 animate={{ 
                   y: [0, 20, 0],
                   x: [0, -15, 0]
                 }}
                 transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                 className="absolute bottom-1/3 right-1/4 w-8 h-8 border border-secondary/20 rotate-45 z-10"
               />

               {/* Overlay with image hint or pattern */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            </motion.div>
            
            {/* Floating Metric */}
            <motion.div 
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              className="absolute -bottom-8 -left-8 glass-card p-6 border border-border shadow-2xl z-30 cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary text-primary-foreground">
                  <Gauge className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Knowledge Base</div>
                  <div className="text-xl font-black">EXPANDING</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <BugHunterGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </section>
  );
}

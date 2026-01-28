import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Gauge, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
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
                Certified Quality Engineer
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8">
                ELEVATING <br />
                <span className="text-muted-foreground/30">DIGITAL</span> <br />
                TRUST.
              </h1>
              
              <p className="text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium">
                Arisha Mumtaz. Specialist in precision testing, AI-driven automation, and building resilient software infrastructures that scale.
              </p>

              <div className="flex flex-wrap gap-6">
                <Button size="lg" className="rounded-none px-10 h-14 text-base font-bold tracking-tight bg-primary text-primary-foreground hover:bg-primary/90">
                  EXPLORE WORK
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <div className="flex items-center gap-4 px-6 h-14 border-l border-border">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Global Rank</span>
                  <span className="text-2xl font-black font-display tracking-tighter">TOP 1%</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] bg-secondary border border-border overflow-hidden group"
            >
               {/* Visual Eye-Catcher: High contrast grid/data visualization */}
               <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Trophy className="h-12 w-12 text-primary" strokeWidth={1.5} />
                    <div className="text-right">
                      <div className="text-4xl font-black font-display tracking-tighter">99.9%</div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Uptime Validated</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-[1px] w-full bg-border" />
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-muted-foreground">
                      <span>Ref_01</span>
                      <span>Automated_Scan</span>
                      <span>Verified</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1 h-20 items-end">
                      {[40, 70, 45, 90, 65, 30, 85, 50, 95, 60, 40, 80].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + (i * 0.05), duration: 1 }}
                          className="bg-primary/20 col-span-1"
                        />
                      ))}
                    </div>
                  </div>
               </div>

               {/* Overlay with image hint or pattern */}
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
            </motion.div>
            
            {/* Floating Metric */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-8 -left-8 glass-card p-6 border border-border shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary text-primary-foreground">
                  <Gauge className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">System Health</div>
                  <div className="text-xl font-black">OPTIMIZED</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

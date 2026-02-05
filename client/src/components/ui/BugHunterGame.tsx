import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Play, ShieldAlert, Cpu, Layers, Activity, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

type ComponentState = {
  id: number;
  x: number;
  y: number;
  type: "vulnerability" | "optimization" | "bug";
  status: "active" | "resolved";
};

export function BugHunterGame({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [gameState, setGameState] = useState<"idle" | "playing" | "finished">("idle");
  const [components, setComponents] = useState<ComponentState[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25);
  const [difficulty, setDifficulty] = useState(1);

  const spawnComponent = useCallback(() => {
    const id = Date.now() + Math.random();
    const types: ("vulnerability" | "optimization" | "bug")[] = ["vulnerability", "optimization", "bug"];
    const newComp: ComponentState = {
      id,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      type: types[Math.floor(Math.random() * types.length)],
      status: "active"
    };
    setComponents((prev) => [...prev, newComp]);

    const lifespan = Math.max(1200, 2500 - (difficulty * 200));
    setTimeout(() => {
      setComponents((prev) => prev.filter((c) => c.id !== id));
    }, lifespan);
  }, [difficulty]);

  useEffect(() => {
    let timer: any;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        if (timeLeft % 5 === 0) setDifficulty(d => d + 0.5);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameState("finished");
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  useEffect(() => {
    let spawnInterval: any;
    if (gameState === "playing") {
      const rate = Math.max(300, 800 - (difficulty * 100));
      spawnInterval = setInterval(spawnComponent, rate);
    }
    return () => clearInterval(spawnInterval);
  }, [gameState, spawnComponent, difficulty]);

  const handleResolution = (id: number, type: string) => {
    const points = type === "vulnerability" ? 50 : type === "optimization" ? 30 : 20;
    setScore((prev) => prev + points);
    setComponents((prev) => prev.filter((c) => c.id !== id));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(25);
    setDifficulty(1);
    setComponents([]);
    setGameState("playing");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/98 backdrop-blur-2xl"
        >
          <div className="relative w-full max-w-5xl bg-card border border-border shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden rounded-none">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20" />
            
            <div className="p-6 md:p-8 border-b border-border flex justify-between items-center bg-secondary/30">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <ShieldCheck className="h-6 w-6 text-primary" strokeWidth={2.5} />
                  <span className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase">Infrastructure Validator</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Arisha's Precision Suite</div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-none h-12 w-12 hover:bg-primary hover:text-primary-foreground">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-secondary/10 overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }} />

              {gameState === "idle" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-background/40">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 6 }}
                    className="mb-8"
                  >
                    <Cpu className="h-24 w-24 text-primary opacity-20" strokeWidth={1} />
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">Validate System Integrity</h3>
                  <p className="text-muted-foreground text-base mb-10 max-w-lg font-medium leading-relaxed">
                    Identify and resolve system anomalies in real-time. High-threat vulnerabilities require immediate intervention.
                  </p>
                  <Button onClick={startGame} className="rounded-none px-12 h-16 font-black tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                    <Play className="mr-3 h-5 w-5 fill-current" /> Initialize Protocol
                  </Button>
                </div>
              )}

              {gameState === "playing" && (
                <>
                  <div className="absolute top-8 left-8 flex gap-16 z-20">
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Integrity Index</div>
                      <div className="text-4xl font-display font-black tracking-tighter text-primary">{score.toString().padStart(4, '0')}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">System Clock</div>
                      <div className="text-4xl font-display font-black tracking-tighter">{timeLeft}s</div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {components.map((comp) => (
                      <motion.button
                        key={comp.id}
                        initial={{ scale: 0, opacity: 0, rotate: -45 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 0, opacity: 0, filter: "blur(10px)" }}
                        onClick={() => handleResolution(comp.id, comp.type)}
                        className="absolute p-4 group/item"
                        style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                      >
                        <div className="relative">
                          <div className={`p-5 border-2 transition-all duration-300 group-hover/item:scale-110 shadow-lg ${
                            comp.type === "vulnerability" ? "border-red-500 bg-red-500/10 shadow-red-500/20" :
                            comp.type === "optimization" ? "border-primary bg-primary/10 shadow-primary/20" :
                            "border-white/20 bg-white/5"
                          }`}>
                            {comp.type === "vulnerability" ? <ShieldAlert className="h-10 w-10 text-red-500" /> :
                             comp.type === "optimization" ? <Layers className="h-10 w-10 text-primary" /> :
                             <Search className="h-10 w-10 text-muted-foreground" />}
                          </div>
                          <div className="absolute -top-3 -right-3 px-2 py-0.5 bg-background border border-border text-[8px] font-black uppercase tracking-widest">
                            {comp.type}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </>
              )}

              {gameState === "finished" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-background/95 z-30">
                  <Trophy className="h-24 w-24 text-primary mb-6" strokeWidth={1} />
                  <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-2">Protocol Verified</h3>
                  <div className="text-8xl font-display font-black tracking-tighter text-primary mb-12">
                    {score} <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-black">Points</span>
                  </div>
                  <Button onClick={startGame} className="rounded-none px-12 h-16 font-black tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all">
                    Initialize Next Scan
                  </Button>
                </div>
              )}
            </div>

            <div className="p-8 bg-secondary/20 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap justify-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-none shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Threat (50pts)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-none shadow-[0_0_8px_rgba(0,255,255,0.5)]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Optim (30pts)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-muted-foreground rounded-none" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Anomaly (20pts)</span>
                </div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 italic">System Health: 99.9% Reliable</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

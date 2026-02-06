import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Play, ShieldAlert, Cpu, Layers, Activity, Search, ShieldCheck, AlertTriangle } from "lucide-react";
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
  const [timeLeft, setTimeLeft] = useState(30);
  const [difficulty, setDifficulty] = useState(1);
  const [history, setHistory] = useState<string[]>([]);

  const spawnComponent = useCallback(() => {
    const id = Date.now() + Math.random();
    const types: ("vulnerability" | "optimization" | "bug")[] = ["vulnerability", "optimization", "bug"];
    const newComp: ComponentState = {
      id,
      x: Math.random() * 85 + 5,
      y: Math.random() * 80 + 10,
      type: types[Math.floor(Math.random() * types.length)],
      status: "active"
    };
    setComponents((prev) => [...prev, newComp]);

    const lifespan = Math.max(1000, 3000 - (difficulty * 300));
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
    } else if (timeLeft === 0 && gameState === "playing") {
      setGameState("finished");
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  useEffect(() => {
    let spawnInterval: any;
    if (gameState === "playing") {
      const rate = Math.max(400, 1000 - (difficulty * 150));
      spawnInterval = setInterval(spawnComponent, rate);
    }
    return () => clearInterval(spawnInterval);
  }, [gameState, spawnComponent, difficulty]);

  const handleResolution = (id: number, type: string) => {
    const points = type === "vulnerability" ? 50 : type === "optimization" ? 30 : 20;
    setScore((prev) => prev + points);
    setComponents((prev) => prev.filter((c) => c.id !== id));
    
    const messages = {
      vulnerability: "Critical security breach patched.",
      optimization: "System performance enhanced.",
      bug: "Functional defect eliminated."
    };
    setHistory(prev => [messages[type as keyof typeof messages], ...prev].slice(0, 5));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setDifficulty(1);
    setComponents([]);
    setHistory([]);
    setGameState("playing");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/98 backdrop-blur-3xl"
        >
          <div className="relative w-full max-w-6xl bg-card border border-white/10 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.8)] overflow-hidden rounded-[3rem]">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <div className="p-8 md:p-12 border-b border-white/5 flex justify-between items-center bg-secondary/20 relative">
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-primary/10 rounded-2xl border border-primary/20">
                    <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="font-display font-black text-2xl md:text-4xl tracking-tighter uppercase">Infrastructure Validator</span>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mt-1 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Protocol: Verifier_v5.4
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="relative z-10 rounded-full h-16 w-16 hover:bg-white/5 hover:text-white transition-all">
                <X className="h-8 w-8" />
              </Button>
            </div>

            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-background/50 overflow-hidden group">
              {/* Animated Scan Line */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-primary/20 z-10 pointer-events-none"
              />
              
              <div className="absolute inset-0 opacity-[0.03]" 
                style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
              />

              {gameState === "idle" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-background/40 backdrop-blur-sm z-30">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 8 }}
                    className="mb-10 relative"
                  >
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-50" />
                    <Cpu className="h-32 w-32 text-primary opacity-30 relative z-10" strokeWidth={1} />
                  </motion.div>
                  <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 max-w-2xl leading-[0.9]">VALIDATE SYSTEM INTEGRITY.</h3>
                  <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl font-medium leading-relaxed uppercase tracking-widest">
                    Identify and neutralize system anomalies in real-time. Failure to react leads to infrastructure collapse.
                  </p>
                  <Button onClick={startGame} className="rounded-2xl px-16 h-20 md:h-24 font-black text-xl tracking-[0.3em] uppercase bg-primary text-black hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-primary/20">
                    <Play className="mr-4 h-8 w-8 fill-current" /> Initialize Protocol
                  </Button>
                </div>
              )}

              {gameState === "playing" && (
                <>
                  <div className="absolute top-10 left-10 flex gap-20 z-20">
                    <div className="space-y-2">
                      <div className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">Integrity Index</div>
                      <div className="text-5xl md:text-7xl font-display font-black tracking-tighter text-primary tabular-nums">{score.toString().padStart(4, '0')}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">Clock Cycles</div>
                      <div className="text-5xl md:text-7xl font-display font-black tracking-tighter tabular-nums">{timeLeft}S</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-10 right-10 z-20 hidden lg:block text-right space-y-3">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-4">Activity Log</div>
                    {history.map((msg, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: 20 }} 
                        animate={{ opacity: 1 - (i * 0.2), x: 0 }}
                        className="text-[10px] font-bold text-primary uppercase tracking-widest"
                      >
                        {msg}
                      </motion.div>
                    ))}
                  </div>

                  <AnimatePresence>
                    {components.map((comp) => (
                      <motion.button
                        key={comp.id}
                        initial={{ scale: 0, opacity: 0, rotate: -90, filter: "blur(10px)" }}
                        animate={{ scale: 1, opacity: 1, rotate: 0, filter: "blur(0px)" }}
                        exit={{ scale: 1.5, opacity: 0, filter: "blur(20px)" }}
                        onClick={() => handleResolution(comp.id, comp.type)}
                        className="absolute p-6 group/item"
                        style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                      >
                        <div className="relative">
                          <div className={`p-6 border-4 transition-all duration-300 group-hover/item:scale-110 shadow-2xl rounded-[1.5rem] ${
                            comp.type === "vulnerability" ? "border-red-500 bg-red-500/10 shadow-red-500/30" :
                            comp.type === "optimization" ? "border-primary bg-primary/10 shadow-primary/30" :
                            "border-white/20 bg-white/5"
                          }`}>
                            {comp.type === "vulnerability" ? <AlertTriangle className="h-12 w-12 text-red-500" /> :
                             comp.type === "optimization" ? <Layers className="h-12 w-12 text-primary" /> :
                             <Activity className="h-12 w-12 text-muted-foreground" />}
                          </div>
                          <div className="absolute -top-4 -right-4 px-3 py-1 bg-background border border-border text-[9px] font-black uppercase tracking-[0.3em] rounded-lg">
                            {comp.type}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </>
              )}

              {gameState === "finished" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-background/98 z-30 backdrop-blur-xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="p-8 bg-primary/10 rounded-full mb-10 border border-primary/20"
                  >
                    <Trophy className="h-28 w-28 text-primary" strokeWidth={1} />
                  </motion.div>
                  <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4 leading-none">PROTOCOL VERIFIED.</h3>
                  <div className="text-9xl font-display font-black tracking-tighter text-primary mb-16 tabular-nums">
                    {score} <span className="text-xl uppercase tracking-[0.4em] text-muted-foreground font-black ml-4">XP</span>
                  </div>
                  <Button onClick={startGame} className="rounded-2xl px-20 h-24 font-black text-2xl tracking-[0.3em] uppercase bg-white text-black hover:bg-primary transition-all shadow-2xl shadow-white/10">
                    RE-INITIALIZE SCAN
                  </Button>
                </div>
              )}
            </div>

            <div className="p-10 md:p-14 bg-secondary/30 flex flex-col lg:row-row justify-between items-center gap-10 border-t border-white/5">
              <div className="flex flex-wrap justify-center gap-16">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-md shadow-[0_0_15px_#ef4444]" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Critical Threat (50)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-primary rounded-md shadow-[0_0_15px_#00ffff]" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Optimization (30)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-white/20 rounded-md" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Anomaly (20)</span>
                </div>
              </div>
              <div className="text-xs font-black uppercase tracking-[0.5em] text-white/10 flex items-center gap-4">
                <ShieldCheck className="h-5 w-5" />
                Infrastructure Reliable
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Trophy, Play, ShieldAlert, Cpu, Layers, Activity } from "lucide-react";
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
  const [timeLeft, setTimeLeft] = useState(20);

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

    setTimeout(() => {
      setComponents((prev) => prev.filter((c) => c.id !== id));
    }, 2500);
  }, []);

  useEffect(() => {
    let timer: any;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setGameState("finished");
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  useEffect(() => {
    let spawnInterval: any;
    if (gameState === "playing") {
      spawnInterval = setInterval(spawnComponent, 600);
    }
    return () => clearInterval(spawnInterval);
  }, [gameState, spawnComponent]);

  const handleResolution = (id: number, type: string) => {
    const points = type === "vulnerability" ? 50 : type === "optimization" ? 30 : 20;
    setScore((prev) => prev + points);
    setComponents((prev) => prev.filter((c) => c.id !== id));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(20);
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
          <div className="relative w-full max-w-4xl bg-card border border-border shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden rounded-none">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20" />
            
            <div className="p-8 border-b border-border flex justify-between items-center bg-secondary/30">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Activity className="h-5 w-5 text-primary" strokeWidth={2.5} />
                  <span className="font-display font-black text-2xl tracking-tighter uppercase">Protocol Validator</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">Arisha's Quality Interface</div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-none h-12 w-12 hover:bg-primary hover:text-primary-foreground">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="relative aspect-[21/9] bg-secondary/10 overflow-hidden group">
              {/* Grid Overlay */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }} />

              {gameState === "idle" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-background/40">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="mb-8"
                  >
                    <Cpu className="h-20 w-20 text-primary opacity-20" strokeWidth={1} />
                  </motion.div>
                  <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">Validate the System</h3>
                  <p className="text-muted-foreground text-sm mb-10 max-w-md font-medium leading-relaxed">
                    Identify and resolve system anomalies. Prioritize high-threat vulnerabilities to maximize infrastructure integrity.
                  </p>
                  <Button onClick={startGame} className="rounded-none px-12 h-16 font-black tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:scale-105 transition-transform">
                    <Play className="mr-3 h-5 w-5 fill-current" /> Initialize Test
                  </Button>
                </div>
              )}

              {gameState === "playing" && (
                <>
                  <div className="absolute top-8 left-8 flex gap-16 z-20">
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Integrity Score</div>
                      <div className="text-4xl font-display font-black tracking-tighter text-primary">{score.toString().padStart(4, '0')}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Time Remaining</div>
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
                          <div className={`p-4 border-2 transition-all duration-300 group-hover/item:scale-110 ${
                            comp.type === "vulnerability" ? "border-red-500 bg-red-500/10" :
                            comp.type === "optimization" ? "border-primary bg-primary/10" :
                            "border-white/20 bg-white/5"
                          }`}>
                            {comp.type === "vulnerability" ? <ShieldAlert className="h-8 w-8 text-red-500" /> :
                             comp.type === "optimization" ? <Layers className="h-8 w-8 text-primary" /> :
                             <Target className="h-8 w-8 text-muted-foreground" />}
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-background/90 z-30">
                  <Trophy className="h-20 w-20 text-primary mb-6" strokeWidth={1} />
                  <h3 className="text-4xl font-display font-black uppercase tracking-tighter mb-2">Validation Complete</h3>
                  <div className="text-7xl font-display font-black tracking-tighter text-primary mb-12">
                    {score} <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-black">Points</span>
                  </div>
                  <Button onClick={startGame} className="rounded-none px-12 h-16 font-black tracking-[0.2em] uppercase">
                    Re-Initialize Protocol
                  </Button>
                </div>
              )}
            </div>

            <div className="p-8 bg-secondary/20 flex justify-between items-center">
              <div className="flex gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Vulnerability (50pts)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Optimization (30pts)</span>
                </div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 italic">System Stability Verified</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

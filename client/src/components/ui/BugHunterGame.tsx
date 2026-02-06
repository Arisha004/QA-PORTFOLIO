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
  const [lastAction, setLastAction] = useState<string | null>(null);

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
      vulnerability: "Security Breach Patched!",
      optimization: "Performance Boosted!",
      bug: "Bug Eliminated!"
    };
    const msg = messages[type as keyof typeof messages];
    setLastAction(msg);
    setHistory(prev => [msg, ...prev].slice(0, 5));
    
    setTimeout(() => setLastAction(null), 1000);
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
                    <span className="font-display font-black text-2xl md:text-4xl tracking-tighter uppercase">Bug Hunter Lab</span>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mt-1 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      Status: Ready for testing
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="relative z-10 rounded-full h-16 w-16 hover:bg-white/5 hover:text-white transition-all">
                <X className="h-8 w-8" />
              </Button>
            </div>

            <div className="relative aspect-[16/9] md:aspect-[21/9] bg-background/50 overflow-hidden group">
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
                  <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 max-w-2xl leading-[0.9]">CATCH THE BUGS!</h3>
                  <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl font-medium leading-relaxed uppercase tracking-widest">
                    Help Arisha find all the hidden bugs and security issues. Click them as fast as you can!
                  </p>
                  <Button onClick={startGame} className="rounded-2xl px-16 h-20 md:h-24 font-black text-xl tracking-[0.3em] uppercase bg-primary text-black hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-primary/20">
                    <Play className="mr-4 h-8 w-8 fill-current" /> START GAME
                  </Button>
                </div>
              )}

              {gameState === "playing" && (
                <>
                  <div className="absolute top-10 left-10 flex gap-20 z-20">
                    <div className="space-y-2">
                      <div className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">Score</div>
                      <div className="text-5xl md:text-7xl font-display font-black tracking-tighter text-primary tabular-nums">{score.toString().padStart(4, '0')}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">Time Left</div>
                      <div className="text-5xl md:text-7xl font-display font-black tracking-tighter tabular-nums">{timeLeft}S</div>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {lastAction && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 bg-primary/90 text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-lg"
                      >
                        {lastAction}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {components.map((comp) => (
                      <motion.button
                        key={comp.id}
                        initial={{ scale: 0, opacity: 0, rotate: -90 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        onClick={() => handleResolution(comp.id, comp.type)}
                        className="absolute p-6 group/item"
                        style={{ left: `${comp.x}%`, top: `${comp.y}%` }}
                      >
                        <div className="relative">
                          <div className={`p-6 border-4 transition-all duration-300 group-hover/item:scale-110 shadow-2xl rounded-[1.5rem] ${
                            comp.type === "vulnerability" ? "border-red-500 bg-red-500/10 shadow-red-500/30" :
                            comp.type === "optimization" ? "border-green-500 bg-green-500/10 shadow-green-500/30" :
                            "border-blue-500 bg-blue-500/10 shadow-blue-500/30"
                          }`}>
                            {comp.type === "vulnerability" ? <AlertTriangle className="h-12 w-12 text-red-500" /> :
                             comp.type === "optimization" ? <ShieldCheck className="h-12 w-12 text-green-500" /> :
                             <Bug className="h-12 w-12 text-blue-500" />}
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
                  <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4 leading-none">TEST COMPLETE!</h3>
                  <div className="text-9xl font-display font-black tracking-tighter text-primary mb-16 tabular-nums">
                    {score} <span className="text-xl uppercase tracking-[0.4em] text-muted-foreground font-black ml-4">PTS</span>
                  </div>
                  <Button onClick={startGame} className="rounded-2xl px-20 h-24 font-black text-2xl tracking-[0.3em] uppercase bg-white text-black hover:bg-primary transition-all shadow-2xl shadow-white/10">
                    PLAY AGAIN
                  </Button>
                </div>
              )}
            </div>

            <div className="p-10 md:p-14 bg-secondary/30 flex flex-col lg:row-row justify-between items-center gap-10 border-t border-white/5">
              <div className="flex flex-wrap justify-center gap-16">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-red-500 rounded-md shadow-[0_0_15px_#ef4444]" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Security Bug (50)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-green-500 rounded-md shadow-[0_0_15px_#22c55e]" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Success (30)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-md shadow-[0_0_15px_#3b82f6]" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Normal Bug (20)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Bug(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  );
}

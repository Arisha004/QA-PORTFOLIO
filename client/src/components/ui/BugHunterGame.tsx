import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Play, ShieldAlert, Cpu, Layers, Search, ShieldCheck, AlertTriangle, BugIcon } from "lucide-react";
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
    
    setTimeout(() => setLastAction(null), 1000);
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
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
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
        >
          <div className="relative w-full max-w-6xl bg-white border border-black/10 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.8)] overflow-hidden rounded-[3rem] flex flex-col max-h-[90vh]">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <div className="p-8 md:p-12 border-b border-black/5 flex justify-between items-center bg-gray-50 relative shrink-0">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-primary/20 rounded-2xl border border-primary/30">
                    <ShieldCheck className="h-8 w-8 text-primary" strokeWidth={2.5} />
                  </div>
                  <div>
                    <span className="font-display font-black text-2xl md:text-4xl tracking-tighter uppercase text-black">Bug Hunter Lab</span>
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mt-1 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      SYSTEM STATUS: ENGAGED
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="relative z-10 rounded-full h-16 w-16 text-black hover:bg-black/5 transition-all">
                <X className="h-8 w-8" />
              </Button>
            </div>

            <div className="relative flex-1 overflow-y-auto min-h-0 bg-white">
              <div className="relative aspect-[16/9] md:aspect-[21/9] bg-white overflow-hidden group min-h-[400px]">
                {gameState === "idle" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white/90 backdrop-blur-sm z-30">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 8 }}
                      className="mb-10 relative"
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-50" />
                      <Cpu className="h-32 w-32 text-primary opacity-50 relative z-10" strokeWidth={1} />
                    </motion.div>
                    <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-6 max-w-2xl leading-[0.9] text-black">CATCH THE BUGS!</h3>
                    <p className="text-black/80 text-lg md:text-xl mb-12 max-w-xl font-black uppercase tracking-widest leading-relaxed">
                      Identify and neutralize system anomalies. Failure to react leads to infrastructure collapse.
                    </p>
                    <Button onClick={startGame} className="rounded-2xl px-16 h-20 md:h-24 font-black text-xl tracking-[0.3em] uppercase bg-primary text-white hover:bg-black transition-all shadow-2xl shadow-primary/40 border-none">
                      <Play className="mr-4 h-8 w-8 fill-current" /> START MISSION
                    </Button>
                  </div>
                )}

                {gameState === "playing" && (
                  <>
                    <div className="absolute top-10 left-10 flex gap-20 z-20">
                      <div className="space-y-2">
                        <div className="text-xs font-black uppercase tracking-[0.4em] text-primary">Score</div>
                        <div className="text-5xl md:text-7xl font-display font-black tracking-tighter text-black tabular-nums">{score.toString().padStart(4, '0')}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-xs font-black uppercase tracking-[0.4em] text-primary">Timer</div>
                        <div className="text-5xl md:text-7xl font-display font-black tracking-tighter text-black tabular-nums">{timeLeft}S</div>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {lastAction && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, y: 50 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 1.5 }}
                          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-white px-12 py-5 rounded-full font-black uppercase tracking-[0.3em] text-xl shadow-[0_0_50px_rgba(0,255,255,0.5)]"
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
                            <div className={`p-6 border-4 transition-all duration-300 group-hover/item:scale-110 shadow-2xl rounded-[1.5rem] bg-white border-black/10 ${
                              comp.type === "vulnerability" ? "border-red-500 shadow-red-500/50" :
                              comp.type === "optimization" ? "border-green-500 shadow-green-500/50" :
                              "border-blue-500 shadow-blue-500/50"
                            }`}>
                              {comp.type === "vulnerability" ? <AlertTriangle className="h-12 w-12 text-red-500" /> :
                               comp.type === "optimization" ? <ShieldCheck className="h-12 w-12 text-green-500" /> :
                               <BugIcon className="h-12 w-12 text-blue-500" />}
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </>
                )}

                {gameState === "finished" && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white/95 z-30 backdrop-blur-xl">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="p-8 bg-primary/20 rounded-full mb-10 border border-primary/40 shadow-[0_0_50px_rgba(0,255,255,0.2)]"
                    >
                      <Trophy className="h-28 w-28 text-primary" strokeWidth={1} />
                    </motion.div>
                    <h3 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter mb-4 leading-none text-black">MISSION COMPLETED.</h3>
                    <div className="text-9xl font-display font-black tracking-tighter text-primary mb-16 tabular-nums drop-shadow-[0_0_30px_rgba(0,255,255,0.5)]">
                      {score} <span className="text-xl uppercase tracking-[0.4em] text-black/40 font-black ml-4">PTS</span>
                    </div>
                    <Button onClick={startGame} className="rounded-2xl px-20 h-24 font-black text-2xl tracking-[0.3em] uppercase bg-black text-white hover:bg-primary transition-all shadow-2xl mb-12">
                      RE-INITIALIZE
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

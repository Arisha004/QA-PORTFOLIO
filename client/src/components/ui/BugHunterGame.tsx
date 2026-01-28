import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, X, Target, Trophy, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type BugPosition = {
  id: number;
  x: number;
  y: number;
  type: "critical" | "major" | "minor";
};

export function BugHunterGame({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [gameState, setGameState] = useState<"idle" | "playing" | "finished">("idle");
  const [bugs, setBugs] = useState<BugPosition[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === "playing" && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setGameState("finished");
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  useEffect(() => {
    let bugInterval: NodeJS.Timeout;
    if (gameState === "playing") {
      bugInterval = setInterval(() => {
        const id = Date.now();
        const types: ("critical" | "major" | "minor")[] = ["critical", "major", "minor"];
        const newBug: BugPosition = {
          id,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          type: types[Math.floor(Math.random() * types.length)]
        };
        setBugs((prev) => [...prev, newBug]);

        // Remove bug after 2 seconds if not caught
        setTimeout(() => {
          setBugs((prev) => prev.filter((b) => b.id !== id));
        }, 2000);
      }, 800);
    }
    return () => clearInterval(bugInterval);
  }, [gameState]);

  const catchBug = (id: number, type: string) => {
    const points = type === "critical" ? 30 : type === "major" ? 20 : 10;
    setScore((prev) => prev + points);
    setBugs((prev) => prev.filter((b) => b.id !== id));
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(15);
    setBugs([]);
    setGameState("playing");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
        >
          <div className="relative w-full max-w-2xl bg-card border border-border p-8 rounded-none shadow-2xl overflow-hidden">
            {/* Game Header */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Target className="h-5 w-5 text-primary" />
                <span className="font-display font-black text-xl tracking-tighter uppercase">BUG HUNTER v1.0</span>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-none hover:bg-primary hover:text-primary-foreground">
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Game Area */}
            <div className="relative aspect-video bg-secondary/50 border border-border overflow-hidden cursor-crosshair">
              {gameState === "idle" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Bug className="h-16 w-16 text-muted-foreground mb-4 opacity-20" />
                  <h3 className="text-2xl font-black font-display uppercase tracking-tight mb-2">Ready to Catch Bugs?</h3>
                  <p className="text-muted-foreground text-sm mb-8 max-w-xs">Bugs will appear randomly. Catch as many as you can before the time runs out!</p>
                  <Button onClick={startGame} size="lg" className="rounded-none px-10 h-14 font-black tracking-widest uppercase">
                    <Play className="mr-2 h-4 w-4" /> START MISSION
                  </Button>
                </div>
              )}

              {gameState === "playing" && (
                <>
                  <div className="absolute top-4 left-4 flex gap-8 z-10">
                    <div>
                      <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Score</div>
                      <div className="text-2xl font-black font-display tracking-tighter text-primary">{score}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Time</div>
                      <div className="text-2xl font-black font-display tracking-tighter">{timeLeft}s</div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {bugs.map((bug) => (
                      <motion.button
                        key={bug.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        onClick={() => catchBug(bug.id, bug.type)}
                        className="absolute p-2 transition-transform hover:scale-125"
                        style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
                      >
                        <Bug className={`h-8 w-8 ${
                          bug.type === "critical" ? "text-red-500" :
                          bug.type === "major" ? "text-orange-500" :
                          "text-yellow-500"
                        }`} />
                        <div className="absolute -top-2 -right-2 text-[8px] font-black bg-background border border-border px-1 uppercase">
                          {bug.type}
                        </div>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </>
              )}

              {gameState === "finished" && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-background/80">
                  <Trophy className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-3xl font-black font-display uppercase tracking-tight mb-2">MISSION COMPLETE</h3>
                  <div className="text-5xl font-black font-display tracking-tighter text-primary mb-8">
                    {score} <span className="text-sm uppercase tracking-widest text-muted-foreground">Points</span>
                  </div>
                  <Button onClick={startGame} className="rounded-none px-10 h-14 font-black tracking-widest uppercase">
                    TRY AGAIN
                  </Button>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="mt-6 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <span>Catch bugs to earn points</span>
              <div className="flex gap-4">
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500"></div> Critical (30pts)</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-500"></div> Major (20pts)</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-yellow-500"></div> Minor (10pts)</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

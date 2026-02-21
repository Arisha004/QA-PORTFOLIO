import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy, Play, Cpu, ShieldCheck, AlertTriangle, BugIcon } from "lucide-react";
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

    const types: ("vulnerability" | "optimization" | "bug")[] =
      ["vulnerability", "optimization", "bug"];

    const newComp: ComponentState = {
      id,
      x: Math.random() * 85 + 5,
      y: Math.random() * 80 + 10,
      type: types[Math.floor(Math.random() * types.length)],
      status: "active"
    };

    setComponents(prev => [...prev, newComp]);

    const lifespan = Math.max(1000, 3000 - (difficulty * 300));

    setTimeout(() => {
      setComponents(prev => prev.filter(c => c.id !== id));
    }, lifespan);

  }, [difficulty]);

  /* ---------------- TIMER (FIXED REACT BUG) ---------------- */

  useEffect(() => {

    let timer: any;

    if (gameState === "playing" && timeLeft > 0) {

      timer = setInterval(() => {

        setTimeLeft(prev => {

          const next = prev - 1;

          if (next > 0 && next % 5 === 0) {
            setDifficulty(d => d + 0.5);
          }

          return next;
        });

      }, 1000);

    }
    else if (timeLeft === 0 && gameState === "playing") {
      setGameState("finished");
    }

    return () => clearInterval(timer);

  }, [gameState, timeLeft]);

  /* ---------------- SPAWN ---------------- */

  useEffect(() => {

    let spawnInterval: any;

    if (gameState === "playing") {

      const rate = Math.max(400, 1000 - (difficulty * 150));
      spawnInterval = setInterval(spawnComponent, rate);

    }

    return () => clearInterval(spawnInterval);

  }, [gameState, spawnComponent, difficulty]);

  /* ---------------- CLICK ---------------- */

  const handleResolution = (id: number, type: string) => {

    const points =
      type === "vulnerability" ? 50 :
      type === "optimization" ? 30 : 20;

    setScore(prev => prev + points);
    setComponents(prev => prev.filter(c => c.id !== id));

    const messages = {
      vulnerability: "Security Breach Patched!",
      optimization: "Performance Boosted!",
      bug: "Bug Eliminated!"
    };

    setLastAction(messages[type as keyof typeof messages]);
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
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 bg-black/95 backdrop-blur-3xl"
        >

          <div className="relative w-full max-w-6xl bg-white border border-black/10 shadow-[0_100px_200px_-50px_rgba(0,0,0,0.8)] overflow-hidden rounded-2xl sm:rounded-[3rem] flex flex-col max-h-[95vh]">

            {/* HEADER */}

            <div className="p-4 sm:p-6 md:p-12 border-b border-black/5 flex justify-between items-center bg-gray-50 shrink-0">

              <div className="flex items-center gap-3 sm:gap-4">

                <div className="p-2 sm:p-3 bg-primary/20 rounded-2xl border border-primary/30">
                  <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-primary"/>
                </div>

                <div>
                  <span className="font-display font-black text-lg sm:text-2xl md:text-4xl uppercase">
                    Bug Hunter Lab
                  </span>

                  <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-primary mt-1 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"/>
                    SYSTEM STATUS: ENGAGED
                  </div>
                </div>

              </div>

              <Button variant="ghost" size="icon" onClick={onClose}
                className="rounded-full h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                <X className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"/>
              </Button>

            </div>

            {/* GAME AREA */}

            <div className="relative flex-1 overflow-y-auto bg-white">

              <div className="relative aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/9] min-h-[320px] sm:min-h-[400px]">

                {/* ---------------- IDLE ---------------- */}

                {gameState === "idle" && (

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 md:p-12">

                    <Cpu className="h-20 w-20 sm:h-28 sm:w-28 md:h-32 md:w-32 text-primary opacity-50 mb-8"/>

                    <h3 className="text-3xl sm:text-5xl md:text-7xl font-display font-black uppercase mb-4">
                      CATCH THE BUGS!
                    </h3>

                    <p className="text-black/80 text-sm sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-xl font-black uppercase">
                      Identify and neutralize system anomalies.
                    </p>

                    <Button onClick={startGame}
                      className="rounded-2xl px-8 sm:px-12 md:px-16 h-16 sm:h-20 md:h-24 font-black text-base sm:text-xl uppercase bg-primary text-white">
                      <Play className="mr-3 h-6 w-6 sm:h-8 sm:w-8"/> START MISSION
                    </Button>

                  </div>
                )}

                {/* ---------------- PLAYING ---------------- */}

                {gameState === "playing" && (
                  <>

                    {/* MESSAGE RESTORED */}
                    <AnimatePresence>
                      {lastAction && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, y: 40 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 1.4 }}
                          className="absolute bottom-14 sm:bottom-20 left-1/2 -translate-x-1/2 z-50
                          bg-primary text-white px-6 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5
                          rounded-full font-black uppercase tracking-[0.25em]
                          text-xs sm:text-lg md:text-xl whitespace-nowrap
                          shadow-[0_0_40px_rgba(0,255,255,0.45)]"
                        >
                          {lastAction}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* SCORE */}
                    <div className="absolute top-4 left-4 sm:top-10 sm:left-10 flex gap-6 sm:gap-12 md:gap-20 z-20">

                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Score</div>
                        <div className="text-3xl sm:text-5xl md:text-7xl font-display font-black">
                          {score.toString().padStart(4,'0')}
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Timer</div>
                        <div className="text-3xl sm:text-5xl md:text-7xl font-display font-black">
                          {timeLeft}S
                        </div>
                      </div>

                    </div>

                    {/* BUGS */}
                    <AnimatePresence>
                      {components.map(comp=>(
                        <motion.button
                          key={comp.id}
                          initial={{scale:0,opacity:0}}
                          animate={{scale:1,opacity:1}}
                          exit={{scale:1.5,opacity:0}}
                          onClick={()=>handleResolution(comp.id,comp.type)}
                          className="absolute p-2 sm:p-4 md:p-6"
                          style={{left:`${comp.x}%`,top:`${comp.y}%`}}
                        >
                          <div className={`p-3 sm:p-5 md:p-6 border-4 rounded-[1.5rem] bg-white shadow-2xl
                          ${comp.type==="vulnerability"?"border-red-500":
                          comp.type==="optimization"?"border-green-500":"border-blue-500"}`}>

                            {comp.type==="vulnerability"
                              ? <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-red-500"/>
                              : comp.type==="optimization"
                              ? <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-green-500"/>
                              : <BugIcon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-blue-500"/>}

                          </div>
                        </motion.button>
                      ))}
                    </AnimatePresence>

                  </>
                )}

                {/* ---------------- FINISHED ---------------- */}

                {gameState === "finished" && (

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-12">

                    <Trophy className="h-20 w-20 sm:h-28 sm:w-28 text-primary mb-6"/>

                    <h3 className="text-3xl sm:text-5xl md:text-7xl font-display font-black mb-4">
                      MISSION COMPLETED.
                    </h3>

                    <div className="text-6xl sm:text-8xl md:text-9xl font-display font-black text-primary mb-10">
                      {score}
                    </div>

                    <Button onClick={startGame}
                      className="rounded-2xl px-10 sm:px-16 md:px-20 h-16 sm:h-20 md:h-24 font-black text-lg sm:text-xl md:text-2xl bg-black text-white">
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
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "bot";
  content: string;
};

const INITIAL_MESSAGE = "Greetings. I am Arisha's Professional Liaison. I can provide detailed insights into her QA trajectory, educational background, and her methodology for continuous quality improvement.";

const KNOWLEDGE_BASE = {
  education: "Arisha is currently pursuing her academic degree with a specialization in software quality principles. Her academic journey is focused on theoretical foundations of testing and computational logic.",
  learning: "Her learning protocol follows a structured 'Manual-First' philosophy. She masters requirement analysis and exploratory testing before scaling to Python-based automation and AI-augmented verification.",
  profession: "As an aspiring Quality Engineer, Arisha focuses on 'Resilient QA'—building testing infrastructures that ensure software stability and user trust at scale.",
  skills: "Current technical stack in development: Test Case Architecture, Structured Bug Documentation, JIRA Lifecycle Management, and Python Selenium Frameworks.",
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: INITIAL_MESSAGE }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.toLowerCase();
    const newMessages = [...messages, { role: "user", content: input } as Message];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      let botResponse = "That is an insightful inquiry. While I am primarily configured to discuss her QA journey, Arisha's core focus remains on engineering robust software quality through disciplined learning.";
      
      if (userMsg.includes("education") || userMsg.includes("study") || userMsg.includes("college") || userMsg.includes("university")) {
        botResponse = KNOWLEDGE_BASE.education;
      } else if (userMsg.includes("learn") || userMsg.includes("improve") || userMsg.includes("how")) {
        botResponse = KNOWLEDGE_BASE.learning;
      } else if (userMsg.includes("profession") || userMsg.includes("job") || userMsg.includes("work") || userMsg.includes("career")) {
        botResponse = KNOWLEDGE_BASE.profession;
      } else if (userMsg.includes("skill") || userMsg.includes("tool") || userMsg.includes("stack")) {
        botResponse = KNOWLEDGE_BASE.skills;
      }

      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    }, 800);
  };

  return (
    <>
      <div className="fixed bottom-20 right-4 md:bottom-24 md:right-6 w-[calc(100vw-32px)] sm:w-[320px] md:w-[360px] h-[420px] md:h-[460px] glass-card z-[100] flex flex-col overflow-hidden rounded-2xl border border-white/20 shadow-xl bg-white/95 dark:bg-black/95 backdrop-blur-2xl"
   <Button 
          onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 border border-white/20 p-0 overflow-hidden group"

          >
          {isOpen ? (
            <X className="h-8 w-8 relative z-10" />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/80 to-blue-500 opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center">
              <Bot className="h-5 w-5 mb-0.5" />

              <span className="text-[8px] font-black uppercase tracking-[0.2em] leading-none">QA BOT</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          )}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 100, scale: 0.8, filter: "blur(20px)" }}
            className="fixed bottom-24 right-4 md:bottom-32 md:right-8 w-[calc(100vw-32px)] sm:w-[400px] md:w-[450px] lg:w-[500px] h-[500px] md:h-[600px] glass-card z-[100] flex flex-col overflow-hidden rounded-3xl border border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-white/95 dark:bg-black/95 backdrop-blur-3xl"
          >
            <div className="p-6 md:p-8 bg-primary text-primary-foreground flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-display font-black text-sm md:text-lg uppercase tracking-[0.2em]">Professional Liaison</div>
                  <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    System Online
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="relative z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
              <X className="h-5 w-5 relative z-10" />
 
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-5 md:p-6 text-sm md:text-base leading-relaxed ${
                    m.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-[2rem] rounded-tr-none shadow-xl" 
                      : "bg-secondary/80 text-foreground rounded-[2rem] rounded-tl-none border border-border/50 shadow-sm font-medium"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 md:p-10 border-t border-border/50 bg-white/40 dark:bg-black/40">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-3 md:gap-4"
              >
                <Input 
                  placeholder="Inquire about Arisha..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="rounded-2xl h-14 md:h-16 border-border/50 bg-background/50 focus:ring-2 focus:ring-primary text-base px-6"
                />
                <Button type="submit" size="icon" className="h-14 w-14 md:h-16 md:w-16 shrink-0 rounded-2xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Send className="h-6 w-6" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot, Sparkles } from "lucide-react";
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
  }, [messages]);

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
      <div className="fixed bottom-8 right-8 z-[100]">
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className="h-16 w-16 rounded-full shadow-2xl bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 border border-white/10"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 40, scale: 0.9, filter: "blur(10px)" }}
            className="fixed bottom-28 right-8 w-[400px] h-[600px] glass-card z-[100] flex flex-col overflow-hidden rounded-2xl border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] bg-white/80 dark:bg-black/80 backdrop-blur-2xl"
          >
            <div className="p-6 bg-primary text-primary-foreground flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-black text-xs uppercase tracking-[0.2em]">Liaison Bot</div>
                  <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Arisha's QA Assistant</div>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                    m.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-none shadow-lg" 
                      : "bg-secondary/50 text-foreground rounded-2xl rounded-tl-none border border-border shadow-sm font-medium"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border bg-white/40 dark:bg-black/40">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-3"
              >
                <Input 
                  placeholder="Inquire about Arisha's QA trajectory..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="rounded-none h-12 border-border bg-background/50 focus:ring-1 focus:ring-primary"
                />
                <Button type="submit" size="icon" className="h-12 w-12 shrink-0 rounded-none bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

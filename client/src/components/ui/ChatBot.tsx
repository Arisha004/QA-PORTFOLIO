import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "bot";
  content: string;
};

const INITIAL_MESSAGE = "Hi! I'm Arisha's QA Assistant. Ask me about her education, how she's learning QA, or her journey!";

const KNOWLEDGE_BASE = {
  education: "Arisha is currently pursuing her degree and focusing on software quality principles. She believes in continuous learning!",
  learning: "She is learning QA through hands-on practice, focusing on Manual testing first, then moving to Python automation and AI tools.",
  profession: "She is an aspiring QA Engineer dedicated to finding bugs and ensuring software works perfectly for everyone.",
  skills: "Currently mastering: Test Case writing, Bug Reporting, JIRA basics, and Python for automation.",
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
      let botResponse = "That's a great question! I'm still learning about that, but Arisha is mostly focused on her QA journey right now.";
      
      if (userMsg.includes("education") || userMsg.includes("study") || userMsg.includes("college")) {
        botResponse = KNOWLEDGE_BASE.education;
      } else if (userMsg.includes("learn") || userMsg.includes("improve") || userMsg.includes("how")) {
        botResponse = KNOWLEDGE_BASE.learning;
      } else if (userMsg.includes("profession") || userMsg.includes("job") || userMsg.includes("work")) {
        botResponse = KNOWLEDGE_BASE.profession;
      } else if (userMsg.includes("skill") || userMsg.includes("tool")) {
        botResponse = KNOWLEDGE_BASE.skills;
      }

      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    }, 600);
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-[100]">
        <Button 
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full shadow-2xl bg-primary text-primary-foreground hover:scale-110 transition-transform"
        >
          {isOpen ? <X /> : <MessageSquare />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 w-[350px] h-[500px] glass-card z-[100] flex flex-col overflow-hidden rounded-xl border border-border shadow-2xl"
          >
            <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span className="font-bold text-sm tracking-tight">QA ASSISTANT</span>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    m.role === "user" 
                      ? "bg-primary text-primary-foreground rounded-tr-none" 
                      : "bg-secondary text-foreground rounded-tl-none border border-border"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-border bg-card">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <Input 
                  placeholder="Ask me anything..." 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="text-xs h-10 border-border"
                />
                <Button type="submit" size="icon" className="h-10 w-10 shrink-0">
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

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "bot";
  content: string;
};

const INITIAL_MESSAGE =
  "Greetings. I am Arisha's Professional Liaison. I can provide detailed insights into her QA trajectory, educational background, and her methodology for continuous quality improvement.";

const KNOWLEDGE_BASE = {
  education:
    "Arisha is currently pursuing her academic degree with a specialization in software quality principles. Her academic journey is focused on theoretical foundations of testing and computational logic.",
  learning:
    "Her learning protocol follows a structured 'Manual-First' philosophy. She masters requirement analysis and exploratory testing before scaling to Python-based automation and AI-augmented verification.",
  profession:
    "As an aspiring Quality Engineer, Arisha focuses on 'Resilient QA'—building testing infrastructures that ensure software stability and user trust at scale.",
  skills:
    "Current technical stack in development: Test Case Architecture, Structured Bug Documentation, JIRA Lifecycle Management, and Python Selenium Frameworks.",
};

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: INITIAL_MESSAGE },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.toLowerCase();
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      let botResponse =
        "That is an insightful inquiry. While I am primarily configured to discuss her QA journey, Arisha's core focus remains on engineering robust software quality through disciplined learning.";

      if (
        userMsg.includes("education") ||
        userMsg.includes("study") ||
        userMsg.includes("college") ||
        userMsg.includes("university")
      ) {
        botResponse = KNOWLEDGE_BASE.education;
      } else if (
        userMsg.includes("learn") ||
        userMsg.includes("improve") ||
        userMsg.includes("how")
      ) {
        botResponse = KNOWLEDGE_BASE.learning;
      } else if (
        userMsg.includes("profession") ||
        userMsg.includes("job") ||
        userMsg.includes("work") ||
        userMsg.includes("career")
      ) {
        botResponse = KNOWLEDGE_BASE.profession;
      } else if (
        userMsg.includes("skill") ||
        userMsg.includes("tool") ||
        userMsg.includes("stack")
      ) {
        botResponse = KNOWLEDGE_BASE.skills;
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
    {/* Floating 3D Robot CTA */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="fixed bottom-6 right-4 z-[100] flex flex-col items-end"
>
  {!isOpen && (
    <motion.div
      animate={{ y: [0, -4, 0] }}
      transition={{ repeat: Infinity, duration: 1.8 }}
      onClick={() => setIsOpen(true)}
      className="relative cursor-pointer group"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-black/20 blur-lg group-hover:blur-xl transition-all duration-300" />

      {/* Robot Image */}
      <img
        src="/assets/robot-3d.png"
        alt="Chat with Arisha"
        className="relative w-14 sm:w-16 md:w-18 drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
      />

      {/* CTA Text Bubble */}
      <div className="absolute -top-10 right-0 bg-white text-black border border-gray-300 px-3 py-1 rounded-full text-sm shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
        Want to know more about me? <br />
        Click here 👆
      </div>
    </motion.div>
  )}
</motion.div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="fixed bottom-20 right-4 w-[calc(100vw-32px)] sm:w-[320px] md:w-[360px] h-[420px] md:h-[460px] bg-white dark:bg-black rounded-2xl border border-border shadow-xl flex flex-col overflow-hidden z-[100]"
          >
            {/* Header */}
              <div className="p-6 md:p-8 bg-primary text-primary-foreground flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                <div className="font-bold text-sm uppercase tracking-wide">
                  Professional Liaison
                </div>
                <div className="text-[10px] opacity-70 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Online
                </div>
              </div>
              <X
                className="ml-auto cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-xl rounded-tr-none"
                        : "bg-secondary text-foreground rounded-xl rounded-tl-none"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="text-xs text-muted-foreground animate-pulse">
                  Assistant is typing...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-background">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  placeholder="Inquire about Arisha..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="h-11 rounded-xl text-sm"
                />
                <button
                  type="submit"
                  className="h-11 w-11 rounded-xl bg-primary hover:bg-primary/90 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 text-white" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

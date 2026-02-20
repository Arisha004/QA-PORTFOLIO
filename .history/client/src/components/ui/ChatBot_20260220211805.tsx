import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  role: "user" | "bot";
  content: string;
};

type Intent =
  | "education"
  | "learning"
  | "profession"
  | "skills"
  | "automation"
  | "projects"
  | "goals"
  | "strengths"
  | "availability"
  | "contact"
  | "linkedin"
  | "resume"
  | "recruiter"
  | "unknown";

const INITIAL_MESSAGE =
  "Hello — I’m Arisha’s AI QA Assistant. I can provide detailed insight into her education, technical stack, automation expertise, projects, hiring availability, and contact information. How may I assist you today?";

const CONTACT_EMAIL = "arishamumtaz340@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/arisha-mumtaz-788b16288/";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: INITIAL_MESSAGE },
  ]);
  const [lastIntent, setLastIntent] = useState<Intent | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // --- Intent Detection Engine ---
  const detectIntent = (text: string): Intent => {
    const msg = text.toLowerCase();

    if (/hire|recruit|position|candidate|interview/.test(msg)) return "recruiter";
    if (/education|degree|college|university|study/.test(msg)) return "education";
    if (/learn|improve|approach|growth/.test(msg)) return "learning";
    if (/career|profession|role|engineer/.test(msg)) return "profession";
    if (/skills?|tools?|stack|technology|framework/.test(msg)) return "skills";
    if (/automation|selenium|python|ai/.test(msg)) return "automation";
    if (/project|portfolio|experience/.test(msg)) return "projects";
    if (/goal|future|vision|plan/.test(msg)) return "goals";
    if (/strength|why you|why hire/.test(msg)) return "strengths";
    if (/available|open to work|internship/.test(msg)) return "availability";
    if (/resume|cv/.test(msg)) return "resume";
    if (/contact|email|mail|reach/.test(msg)) return "contact";
    if (/linkedin|profile/.test(msg)) return "linkedin";

    return "unknown";
  };

  // --- Response Generator ---
  const generateResponse = (userInput: string): string => {
    const intent = detectIntent(userInput);
    setLastIntent(intent);

    switch (intent) {
      case "education":
        return "Arisha is pursuing her academic degree with specialization in software quality engineering. Her studies emphasize testing theory, system reliability, and structured validation methodologies.";

      case "learning":
        return "Her growth model follows a 'Manual-First, Automation-Next' philosophy. She prioritizes deep requirement analysis and exploratory testing before building automation frameworks.";

      case "profession":
        return "She is building toward becoming a Resilient Quality Engineer — designing scalable QA systems that protect long-term product stability and user trust.";

      case "skills":
        return "Her technical stack includes: structured test case design, advanced bug documentation, JIRA workflows, regression strategy planning, Python fundamentals, Selenium WebDriver, and AI-assisted testing methodologies.";

      case "automation":
        return "She is actively developing Python-Selenium automation frameworks with focus on maintainability, modular architecture, and AI-augmented validation systems.";

      case "projects":
        return "Her portfolio includes structured QA documentation systems, simulated production bug lifecycle environments, and automation framework prototypes.";

      case "goals":
        return "Her long-term objective is to work in high-reliability engineering environments where she can architect scalable QA infrastructures and AI-driven validation pipelines.";

      case "strengths":
        return "Her strengths include analytical reasoning, systems thinking, structured documentation discipline, and deep defect investigation methodology.";

      case "availability":
        return "Arisha is open to internship and junior QA opportunities — remote or hybrid — where she can contribute to structured engineering teams.";

      case "resume":
        return `You may request her resume directly via email: ${CONTACT_EMAIL}`;

      case "contact":
        return `You can contact Arisha at: ${CONTACT_EMAIL}`;

      case "linkedin":
        return `Her LinkedIn profile: ${LINKEDIN_URL}`;

      case "recruiter":
        return "Thank you for your interest. Arisha is actively building her QA engineering trajectory and is open to structured opportunities. For further discussion or resume requests, please contact her directly via email.";

case "unknown":
default:
  if (lastIntent) {
    switch (lastIntent) {
      case "education":
        return "In addition to her academic focus on software quality engineering, she actively bridges theory with practical QA simulations and structured validation exercises.";

      case "skills":
        return "Beyond her core QA stack, she is continuously strengthening her automation architecture skills and refining documentation precision to industry standards.";

      case "automation":
        return "Her automation approach prioritizes maintainable frameworks, reusable test modules, and AI-assisted test optimization rather than short-term scripting.";

      case "projects":
        return "Her projects emphasize structured bug lifecycle environments, regression planning systems, and scalable QA documentation workflows.";

      case "profession":
        return "She is intentionally shaping herself into a long-term reliability-focused Quality Engineer — not just a tester, but a systems-level quality architect.";

      case "goals":
        return "Her roadmap includes deeper automation expertise, AI-integrated validation pipelines, and working within high-discipline engineering teams.";

      default:
        break;
    }
  }


  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    setTimeout(() => {
      const botResponse = generateResponse(userMessage);
      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
    }, 400);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[100]">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 rounded-full shadow-lg bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 p-0"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="fixed bottom-20 right-4 w-[calc(100vw-32px)] sm:w-[320px] md:w-[360px] h-[420px] md:h-[460px] bg-white dark:bg-black rounded-2xl border border-border shadow-xl flex flex-col overflow-hidden z-[100]"
          >
            <div className="p-4 bg-primary text-primary-foreground flex items-center gap-3">
              <Bot className="h-5 w-5" />
              <div>
                <div className="font-bold text-sm uppercase tracking-wide">
                  AI QA Assistant
                </div>
                <div className="text-[10px] opacity-70 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Online
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
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
            </div>

            <div className="p-4 border-t bg-background">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  placeholder="Ask anything about Arisha..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="h-11 rounded-xl text-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-11 w-11 rounded-xl bg-primary hover:bg-primary/90"
                >
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
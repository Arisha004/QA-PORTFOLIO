import { motion } from "framer-motion";
import { Bot, Sparkles, Terminal, FileCode2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const tools = [
  {
    name: "ChatGPT / Gemini",
    role: "Test Case Generation",
    icon: Bot,
    description: "Leveraging LLMs to generate edge-case scenarios and semantic test data instantly.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    name: "TestCraft",
    role: "AI Automation",
    icon: Sparkles,
    description: "Self-healing test scripts that adapt to UI changes automatically.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    name: "Selenium + Python",
    role: "Core Automation",
    icon: Terminal,
    description: "Building robust, custom automation frameworks for complex web applications.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20"
  },
  {
    name: "Axe Core",
    role: "Accessibility AI",
    icon: FileCode2,
    description: "Automated WCAG compliance scanning integrated into the CI/CD pipeline.",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20"
  }
];

export function AITools() {
  return (
    <section id="ai-tools" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">AI-Powered Testing Arsenal</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I don't just find bugs; I engineer intelligence into the testing process using the latest AI and automation tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full p-6 glass-panel transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] ${tool.border} border`}>
                <div className={`w-12 h-12 rounded-lg ${tool.bg} flex items-center justify-center mb-4`}>
                  <tool.icon className={`h-6 w-6 ${tool.color}`} />
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{tool.name}</h3>
                <p className={`text-xs font-mono mb-3 ${tool.color} uppercase tracking-wider`}>{tool.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
}

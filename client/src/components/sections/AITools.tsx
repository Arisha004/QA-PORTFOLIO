import { motion } from "framer-motion";
import { Bot, Zap, Code2, Search, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const tools = [
  {
    name: "AI Test Synthesis",
    role: "Heuristic Generation",
    icon: Bot,
    description: "Utilizing Large Language Models to architect complex test scenarios that human analysis might overlook.",
    metric: "4x Faster"
  },
  {
    name: "Self-Healing Scripts",
    role: "Dynamic Selectors",
    icon: Zap,
    description: "Intelligent automation frameworks that adapt to DOM mutations in real-time, reducing maintenance overhead.",
    metric: "90% Stability"
  },
  {
    name: "Python Automation",
    role: "Framework Design",
    icon: Code2,
    description: "Bespoke Selenium and Playwright architectures built for scalability and CI/CD integration.",
    metric: "0% False Positives"
  },
  {
    name: "Continuous Audit",
    role: "Accessibility & Perf",
    icon: Search,
    description: "Automated regression suites monitoring Web Vitals and WCAG compliance at every commit.",
    metric: "Grade A"
  }
];

export function AITools() {
  return (
    <section id="ai-tools" className="section-padding bg-card border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-6 uppercase">
              THE <span className="text-muted-foreground">ENGINE</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-8">
              My methodology integrates artificial intelligence into the core of the quality lifecycle, transforming testing from a bottleneck into a competitive advantage.
            </p>
            <div className="h-1 w-20 bg-primary" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-card p-10 group relative hover:bg-secondary transition-colors"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <tool.icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{tool.metric}</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-2 uppercase tracking-tight">{tool.name}</h3>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">{tool.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-8">
                  {tool.description}
                </p>

                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

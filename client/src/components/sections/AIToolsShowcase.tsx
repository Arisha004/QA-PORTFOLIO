import { motion } from "framer-motion";
import { Bot, Sparkles, Terminal, FileCode2, ArrowUpRight } from "lucide-react";

const tools = [
  {
    name: "Lighthouse",
    role: "Performance & SEO",
    icon: FileCode2,
    description: "Automated auditing tool for improving the quality of web pages, covering performance, accessibility, and SEO.",
    label: "Audit"
  },
  {
    name: "TestCraft",
    role: "AI Test Automation",
    icon: Sparkles,
    description: "AI-powered test automation platform that allows for rapid creation and execution of resilient test cases.",
    label: "AI Suite"
  },
  {
    name: "TestRigor",
    role: "No-Code AI Testing",
    icon: Bot,
    description: "AI-driven tool that allows anyone to create complex end-to-end tests in plain English without coding.",
    label: "Generative"
  },
  {
    name: "AI-Assisted Analysis",
    role: "Intelligence",
    icon: Terminal,
    description: "Leveraging AI agents to analyze test results, predict failures, and generate comprehensive quality reports.",
    label: "Insight"
  }
];

export function AIToolsShowcase() {
  return (
    <section id="ai-showcase" className="section-padding bg-card border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Advanced Toolset</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-6 uppercase">
              AI Tools for <br className="hidden lg:block" /> <span className="text-muted-foreground/40">Testing</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Exploring the frontier of Quality Engineering with intelligent tools that redefine how we validate software reliability.
            </p>
            <div className="h-1 w-20 bg-primary mx-auto lg:mx-0" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-card p-8 md:p-12 group relative hover:bg-secondary transition-colors"
              >
                <div className="flex justify-between items-start mb-12 md:mb-16">
                  <div className="p-4 bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <tool.icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{tool.label}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2 uppercase tracking-tight">{tool.name}</h3>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-6 md:mb-8">{tool.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium mb-8">
                  {tool.description}
                </p>

                <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 opacity-40 group-hover:opacity-100 transition-opacity">
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

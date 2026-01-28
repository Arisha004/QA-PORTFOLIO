import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Bug, Cpu, Zap } from "lucide-react";

const cases = [
  {
    title: "FinTech Transaction Engine",
    description: "Ensured 99.99% reliability for a high-frequency trading platform through hybrid testing strategies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Playwright", "Python", "Load Testing"],
    stats: [
      { label: "Bugs Prevented", value: "14 Critical" },
      { label: "Test Coverage", value: "98%" },
      { label: "Perf Gain", value: "40%" }
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "Healthcare AI Diagnostic Tool",
    description: "Validated AI model outputs against medical datasets while ensuring HIPAA compliance and accessibility.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["AI Verification", "Accessibility", "Manual QA"],
    stats: [
      { label: "False Positives", value: "< 0.1%" },
      { label: "WCAG Level", value: "AAA" },
      { label: "Regression", value: "0%" }
    ],
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dives into complex quality engineering challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
              
              <div className={`relative bg-card border border-white/10 ${project.border} rounded-2xl overflow-hidden transition-colors duration-300 h-full flex flex-col`}>
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-black/50 backdrop-blur border-white/10 text-white hover:bg-black/70">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-white/5">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold font-mono text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full group/btn hover:bg-white/5 justify-between">
                    Read Case Study
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

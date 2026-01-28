import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Search, Sparkles } from "lucide-react";

const cases = [
  {
    title: "Testing Practice: Login Flow",
    description: "I practiced writing test cases for a login system, focusing on edge cases like empty fields and invalid emails.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["Manual Testing", "Test Cases", "Practice"],
    stats: [
      { label: "Scenarios", value: "12+" },
      { label: "Bugs Found", value: "3" },
      { label: "Status", value: "Done" }
    ],
    color: "from-blue-500/10 to-cyan-500/10",
    border: "group-hover:border-primary/50"
  },
  {
    title: "My First Bug Report",
    description: "In this practice project, I learned how to document bugs clearly using steps to reproduce and expected vs actual results.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Bug Reporting", "Learning", "JIRA"],
    stats: [
      { label: "Detail", value: "High" },
      { label: "Tool", value: "Trello" },
      { label: "Quality", value: "A+" }
    ],
    color: "from-purple-500/10 to-pink-500/10",
    border: "group-hover:border-primary/50"
  }
];

export function CaseStudies() {
  return (
    <section className="section-padding bg-background relative">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Practice Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter uppercase">Learning by Doing</h2>
          </div>
          <p className="text-muted-foreground max-w-sm font-medium">
            Here are some of the first projects where I applied my QA learning to find bugs and write test plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`relative bg-secondary border border-border ${project.border} rounded-none overflow-hidden transition-all duration-300 h-full flex flex-col`}>
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} className="rounded-none bg-black/80 border-none text-[10px] uppercase font-bold tracking-widest px-3 py-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-display font-black mb-4 uppercase tracking-tight">{project.title}</h3>
                  <p className="text-muted-foreground mb-8 flex-1 leading-relaxed font-medium">{project.description}</p>

                  <div className="grid grid-cols-3 gap-8 mb-8 py-6 border-y border-border">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</div>
                        <div className="text-lg font-black font-display text-foreground">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground justify-between rounded-none h-12 border border-border">
                    <span className="text-[10px] font-black uppercase tracking-widest">View Report</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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

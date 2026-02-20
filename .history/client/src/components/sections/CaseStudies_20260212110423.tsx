import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Search, Sparkles, ShieldCheck, Cpu, Code2 } from "lucide-react";

const cases = [
  {
    title: "High-Precision Authentication Validation",
    description: "Architected a comprehensive test suite for enterprise-level login flows. Meticulously identified 15+ edge cases including polymorphic input vulnerabilities and session synchronization anomalies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["System Architecture", "Security Audit", "UX Validation"],
    stats: [
      { label: "Scenarios", value: "48+" },
      { label: "Coverage", value: "100%" },
      { label: "Complexity", value: "Elite" }
    ],
    icon: ShieldCheck
  },
  {
    title: "Global Infrastructure Bug Documentation",
    description: "Engineered a next-gen defect reporting protocol. Streamlined communication between dev and QA teams by implementing high-fidelity visual documentation and multi-layered reproduction steps.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Strategic Reporting", "Defect Lifecycle", "Team Ops"],
    stats: [
      { label: "Clarity", value: "Absolute" },
      { label: "MTTR", value: "-40%" },
      { label: "Efficiency", value: "Peak" }
    ],
    icon: Terminal
  }
];

export function CaseStudies() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">Strategic Validations</span>
            </motion.div>
            <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-10">
              ELITE <br />
              <span className="text-black/10 font-outline-4">OPERATIONS.</span>
            </h2>
          </div>
          <p className="text-black/60 text-xl font-bold max-w-md leading-tight uppercase tracking-widest border-l-4 border-primary pl-10 py-4">
            Translating complex system requirements into flawless user experiences through relentless testing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-black/5 border border-black/10 rounded-[4rem] overflow-hidden transition-all duration-700 h-full flex flex-col hover:border-primary/50 hover:bg-white hover:shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="absolute top-10 left-10 z-20 flex flex-wrap gap-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] uppercase font-black tracking-[0.3em] text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-10 left-10 z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-10 group-hover:translate-y-0 duration-700">
                    <project.icon className="h-16 w-16 text-primary" strokeWidth={1} />
                  </div>
                </div>

                <div className="p-12 md:p-16 flex-1 flex flex-col">
                  <h3 className="text-3xl md:text-5xl font-display font-black mb-8 uppercase tracking-tighter leading-none">{project.title}</h3>
                  <p className="text-black/60 text-lg mb-12 flex-1 leading-relaxed font-bold uppercase tracking-tight">{project.description}</p>

                  <div className="grid grid-cols-3 gap-10 mb-12 py-10 border-y border-black/10">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center md:text-left">
                        <div className="text-[10px] font-black text-black/40 uppercase tracking-[0.4em] mb-2">{stat.label}</div>
                        <div className="text-2xl font-black font-display text-black">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-white justify-between rounded-[2rem] h-20 border-black transition-all duration-500">
                    <span className="text-xs font-black uppercase tracking-[0.4em] ml-6">Access Validation Report</span>
                    <ArrowRight className="h-6 w-6 mr-6 transition-transform group-hover/btn:translate-x-3" />
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

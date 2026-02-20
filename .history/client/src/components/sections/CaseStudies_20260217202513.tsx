import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Database, Globe, Layers } from "lucide-react";

const cases = [
  {
    title: "Cypress Automation Framework",
    description: "Architected a high-performance end-to-end testing suite with intelligent wait strategies and custom commands.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    tags: ["Cypress", "E2E", "JavaScript"],
    stats: [
      { label: "Reliability", value: "99.9%" },
      { label: "Execution", value: "Fast" },
      { label: "Coverage", value: "Full" }
    ],
    icon: Globe,
    link: "https://github.com/Arisha004/Cypress-Automation-Assignment"
  },
  {
    title: "JMeter API Performance Lab",
    description: "Engineered high-concurrency load testing protocols to validate system stability under extreme traffic spikes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["JMeter", "Performance", "Load"],
    stats: [
      { label: "Throughput", value: "High" },
      { label: "Latency", value: "Minimal" },
      { label: "Stability", value: "Solid" }
    ],
    icon: Zap,
    link: "https://github.com/Arisha004/Jmeter-api-testing-assignment"
  },
  {
    title: "Postman API Validation",
    description: "Developed a comprehensive API contract testing suite for multi-environment data validation.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2066&auto=format&fit=crop",
    tags: ["Postman", "REST", "Testing"],
    stats: [
      { label: "Assertions", value: "200+" },
      { label: "Automation", value: "Scripts" },
      { label: "Accuracy", value: "Peak" }
    ],
    icon: Database,
    link: "https://github.com/Arisha004/Postman_Assignment4"
  },
  {
    title: "SauceDemo SQA Blueprint",
    description: "Executed a full-lifecycle SQA project with high-fidelity test plans and rigorous manual suites.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Manual QA", "Test Plans", "Agile"],
    stats: [
      { label: "Bugs Found", value: "High" },
      { label: "Docs", value: "Elite" },
      { label: "Quality", value: "A+" }
    ],
    icon: ShieldCheck,
    link: "https://github.com/Arisha004/saucedemo-qa-testing"
  }
];

export function CaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Strategic Validations</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-10 text-black">
              ELITE <br />
              <span className="text-black/10 font-outline-2">PROJECTS.</span>
            </h2>
          </div>
          <p className="text-black/60 text-lg md:text-xl font-bold max-w-md leading-tight uppercase tracking-widest border-l-4 border-primary pl-10 py-4 text-left">
            Translating complex system requirements into flawless user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-[#fafafa] border border-black/5 rounded-[2rem] overflow-hidden transition-all duration-500 h-full flex flex-col hover:shadow-2xl hover:border-primary/20">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md border border-black/5 text-[8px] uppercase font-black tracking-widest text-black rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-10 flex-1 flex flex-col text-left">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="text-2xl font-display font-black uppercase tracking-tight leading-none text-black">{project.title}</h3>
                    <project.icon className="h-6 w-6 text-primary shrink-0 ml-4" />
                  </div>
                  
                  <p className="text-black/60 text-sm mb-10 flex-1 leading-relaxed font-bold uppercase tracking-tight">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-6 mb-10 py-6 border-y border-black/5">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[8px] font-black text-black/30 uppercase tracking-widest mb-1">{stat.label}</span>
                        <span className="text-sm font-black text-black leading-none">{stat.value}</span>
                      </div>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-auto">
                    <Button variant="outline" className="w-full group/btn hover:bg-black hover:text-white justify-between rounded-xl h-14 border-black/10 transition-all duration-300">
                      <span className="text-[10px] font-black uppercase tracking-widest">GITHUB ARCHIVE</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Search, Sparkles, ShieldCheck, Cpu, Code2, Bot, Globe, Zap, Database } from "lucide-react";

const cases = [
  {
    title: "Cypress Automation Framework",
    description: "Architected a high-performance end-to-end testing suite using Cypress. Engineered robust custom commands and intelligent wait strategies to eliminate flakiness in complex web applications.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop",
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
    description: "Engineered high-concurrency load testing protocols using JMeter. Validated system stability under extreme traffic spikes and optimized API response latency for global scale.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2020&auto=format&fit=crop",
    tags: ["JMeter", "Performance", "Load Testing"],
    stats: [
      { label: "Throughput", value: "High" },
      { label: "Latency", value: "Minimal" },
      { label: "Stability", value: "Solid" }
    ],
    icon: Zap,
    link: "https://github.com/Arisha004/Jmeter-api-testing-assignment"
  },
  {
    title: "Postman API Validation Suite",
    description: "Developed a comprehensive API contract testing suite using Postman. Implemented advanced pre-request scripts and test assertions for multi-environment data validation.",
    image: "https://images.unsplash.com/photo-1623282066230-01111c73950c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Postman", "REST API", "Testing"],
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
    description: "Executed a full-lifecycle SQA project on SauceDemo. Created high-fidelity test plans, executed rigorous manual suites, and documented critical UI/UX defects with precision.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Manual QA", "Test Plans", "UI/UX"],
    stats: [
      { label: "Bugs Found", value: "Significant" },
      { label: "Documentation", value: "Elite" },
      { label: "Methodology", value: "Agile" }
    ],
    icon: ShieldCheck,
    link: "https://github.com/Arisha004/saucedemo-qa-testing"
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 md:mb-32 gap-10 md:gap-12 text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6 md:mb-8"
            >
              <div className="h-px w-8 md:w-12 bg-primary"></div>
              <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-primary">Strategic Validations</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.8] mb-8 md:mb-10 text-black">
              QA <br className="hidden sm:block" />
              <span className="text-black/10 font-outline-2 md:font-outline-4">PORTFOLIO.</span>
            </h2>
          </div>
          <p className="text-black/60 text-lg md:text-xl font-bold max-w-md leading-tight uppercase tracking-widest border-l-0 lg:border-l-4 border-primary pl-0 lg:pl-10 py-4 mx-auto lg:mx-0">
            Showcasing a diverse range of quality engineering expertise from automated engines to performance labs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
          {cases.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative bg-black/[0.02] border border-black/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden transition-all duration-700 h-full flex flex-col hover:border-primary/50 hover:bg-white hover:shadow-2xl">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-700" />
                  
                  <div className="absolute top-6 md:top-10 left-6 md:left-10 z-20 flex flex-wrap gap-2 md:gap-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 md:px-5 py-1.5 md:py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-[8px] md:text-[10px] uppercase font-black tracking-[0.2em] md:tracking-[0.3em] text-white rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-6 md:translate-y-10 group-hover:translate-y-0 duration-700">
                    <project.icon className="h-10 w-10 md:h-16 md:w-16 text-primary" strokeWidth={1} />
                  </div>
                </div>

                <div className="p-8 md:p-12 lg:p-16 flex-1 flex flex-col">
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-black mb-6 md:mb-8 uppercase tracking-tighter leading-none text-black">{project.title}</h3>
                  <p className="text-black/60 text-base md:text-lg mb-8 md:mb-12 flex-1 leading-relaxed font-bold uppercase tracking-tight">{project.description}</p>

                  <div className="grid grid-cols-3 gap-4 md:gap-10 mb-8 md:mb-12 py-6 md:py-10 border-y border-black/10">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center md:text-left">
                        <div className="text-[8px] md:text-[10px] font-black text-black/40 uppercase tracking-[0.2em] md:tracking-[0.4em] mb-1 md:mb-2">{stat.label}</div>
                        <div className="text-lg md:text-2xl font-black font-display text-black">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-white justify-between rounded-[1.5rem] md:rounded-[2rem] h-16 md:h-20 border-black transition-all duration-500">
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] ml-2 md:ml-6 text-black group-hover/btn:text-white transition-colors">Access GitHub Repository</span>
                      <ArrowRight className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-6 transition-transform group-hover/btn:translate-x-3 text-black group-hover/btn:text-white" />
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

import { motion } from "framer-motion";
import { Terminal, Search, Bug, Code2, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

const tools = [
  {
    name: "Writing Test Cases",
    role: "Planning",
    icon: Terminal,
    description: "I'm learning how to break down features into simple steps to check every possible way a user might interact with them.",
    label: "Step 01",
    id: "test-cases"
  },
  {
    name: "Bug Documentation",
    role: "Reporting",
    icon: Bug,
    description: "I practice documenting bugs so clearly that any developer can understand exactly what happened and how to fix it.",
    label: "Step 02",
    id: "bug-reporting"
  },
  {
    name: "Python Basics",
    role: "Automation",
    icon: Code2,
    description: "I'm starting my journey into automation by learning the fundamentals of Python to write my first test scripts.",
    label: "Step 03",
    id: "python"
  },
  {
    name: "Manual Analysis",
    role: "Quality",
    icon: Search,
    description: "I use simple browser tools to check for accessibility and performance errors as part of my manual routine.",
    label: "Step 04",
    id: "manual-analysis"
  }
];

export function AITools() {
  return (
    <section id="ai-tools" className="section-padding bg-card border-y border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Skills in Progress</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-6 uppercase">
              What I'm <br className="hidden lg:block" /> <span className="text-muted-foreground/40">Learning</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              My learning journey is focused on the core pillars of quality assurance. I'm building a strong foundation in manual testing before scaling up to complex systems.
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
                <Link href={`/learning/${tool.id}`}>
                  <a className="block h-full">
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
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

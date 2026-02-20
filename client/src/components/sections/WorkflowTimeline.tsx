import { motion } from "framer-motion";

const steps = [
  {
    year: "Step 1",
    title: "Manual Testing Foundation",
    description: "Mastered the art of exploratory testing, bug hunting, and creating comprehensive test plans.",
    skills: ["Test Case Design", "JIRA", "Bug Reporting"]
  },
  {
    year: "Step 2",
    title: "SQL & API Verification",
    description: "Moved beyond the UI to verify data integrity and API responses directly.",
    skills: ["Postman", "MySQL", "Request"]
  },
  {
    year: "Step 3",
    title: "Python & Automation",
    description: "Started automating repetitive tasks using Python and Selenium.",
    skills: ["Python", "Selenium WebDriver", "PyTest"]
  },
  {
    year: "Step 4",
    title: "AI-Enhanced QA",
    description: "Integrating LLMs and AI agents to generate test data and self-healing scripts.",
    skills: ["Prompt Engineering", "AI Test Generation", "Future Tech"]
  }
];

export function WorkflowTimeline() {
  return (
    <section id="workflow" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">The Evolution of Quality</h2>
          <p className="text-muted-foreground">My journey from manual precision to automated excellence.</p>
        </div>

        <div className="relative">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full text-center md:text-left">
                  <div className={`glass-panel p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="text-primary font-mono text-sm mb-2 block">{step.year}</span>
                    <h3 className="text-xl font-bold font-display mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                      {step.skills.map(skill => (
                        <span key={skill} className="px-2 py-1 bg-white/5 rounded text-xs font-mono border border-white/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-card border-2 border-primary shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>

                <div className="flex-1 w-full hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

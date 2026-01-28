import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Bot, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px] z-10"></div>
        <img 
          src="/assets/hero-bg.png" 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Hire
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Quality Assurance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Reimagined</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              I'm Arisha Mumtaz. I blend manual precision with AI-driven automation to build bug-free, high-performance digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 px-8">
                Explore Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 h-12 px-8">
                View GitHub
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-display font-bold text-2xl">500+</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono">Test Cases Executed</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-secondary mb-1">
                  <Bot className="h-5 w-5" />
                  <span className="font-display font-bold text-2xl">AI</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono">Powered Testing</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-accent mb-1">
                  <Gauge className="h-5 w-5" />
                  <span className="font-display font-bold text-2xl">99%</span>
                </div>
                <p className="text-sm text-muted-foreground font-mono">Performance Score</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass-panel p-2 rounded-2xl neon-border">
              <div className="bg-card rounded-xl overflow-hidden aspect-video relative group">
                {/* Simulated Terminal/Dashboard UI */}
                <div className="absolute inset-0 bg-background/90 p-6 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-muted-foreground">qa-test-runner — bash</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <span className="text-primary">➜</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-foreground">run-test-suite --mode=ai-enhanced</span>
                    </div>
                    <div className="text-muted-foreground">Initializing test environment...</div>
                    <div className="text-green-400">✓ AI Test Agents connected</div>
                    <div className="text-green-400">✓ Generative scenarios loaded</div>
                    <div className="text-muted-foreground">Running 42 test cases...</div>
                    
                    <div className="mt-4 p-3 bg-white/5 rounded border border-white/5">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>100%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decor elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

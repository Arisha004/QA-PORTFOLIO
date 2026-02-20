import { motion } from "framer-motion";
import { Award, ShieldCheck, Sparkles, Cpu, Bot, CheckCircle2, ExternalLink } from "lucide-react";
const CERTIFICATE_LINK = ""; // 👈 paste your link here

export function CertificationSection() {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary font-display">Specialized Accreditation</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.85] mb-12 text-black"
            >
              AI DRIVEN <br />
              <span className="text-black/10 font-outline-2 md:font-outline-4">TESTING.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-black/60 text-xl font-bold max-w-xl leading-tight uppercase tracking-widest border-l-4 border-primary pl-8 py-2 text-left">
                Certified specialist in integrating machine learning models and predictive analytics into the software quality lifecycle.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                {[
                  { title: "Predictive Analysis", desc: "Modeling bug patterns" },
                  { title: "LLM Validation", desc: "Testing generative AI" },
                  { title: "Auto-Healing", desc: "Self-correcting scripts" },
                  { title: "Anomaly Detection", desc: "ML-based monitoring" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xs font-black uppercase tracking-widest text-black">{item.title}</h4>
                      <p className="text-[9px] font-bold text-black/40 uppercase tracking-tighter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group perspective-1000"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* This is where you can easily add your actual certificate image */}
              <div className="relative bg-white border border-black/10 p-8 md:p-12 rounded-[3rem] shadow-2xl overflow-hidden aspect-[3/4] flex flex-col justify-between group-hover:border-primary/30 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary/5 opacity-50" />
                
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                  <Cpu className="h-64 w-64 text-black rotate-12" />
                </div>

                <div className="flex justify-between items-start relative z-10">
                  <div className="p-4 bg-primary text-white rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <Award className="h-10 w-10" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black font-display tracking-tighter text-black">CREDENTIAL</div>
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">VERIFIED V.2026</div>
                  </div>
                </div>

                <div className="relative z-10 text-left">
                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tighter leading-tight text-black mb-4">
                    AI in Software <br /> Testing Course
                  </h3>
                  <div className="h-1.5 w-24 bg-primary mb-8 rounded-full" />
                  <p className="text-black/40 text-[10px] font-black uppercase tracking-[0.3em] mb-12 max-w-[80%]">
                    Advanced curriculum focused on neural network validation and automated quality orchestration.
                  </p>
                  
                 <a 
  href={CERTIFICATE_LINK}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-between gap-4 p-6 bg-black/5 rounded-2xl border border-dashed border-black/10 group-hover:bg-white group-hover:border-primary/30 group-hover:shadow-lg transition-all duration-500"
>

                  <div className="flex items-center gap-4">
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] font-black uppercase tracking-[0.5em] text-black/60">VALID CERTIFICATE</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-black/20 group-hover:text-primary transition-colors" />
                  </div>
                </a>


                {/* Optional Placeholder for actual certificate image overlay */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none">
                   <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
              </div>
              
              {/* Instructional label for user */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full text-center">
                <p className="text-[8px] font-black text-black/20 uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Interactive Showcase Prototype
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

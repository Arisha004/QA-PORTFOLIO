import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Award, CheckCircle2, Zap } from "lucide-react";

const experience = [
  {
    type: "Career Launch",
    title: "QA Engineering Specialist",
    provider: "Elite QA Systems",
    date: "2024 - Present",
    description: "Architecting robust test strategies for high-precision validation. Specialized in manual testing lifecycle, detailed bug documentation, and cross-functional quality syncs.",
    icon: Zap,
    skills: ["Test Strategy", "Agile QA", "Defect Management"]
  },
  {
    type: "Learning Journey",
    title: "Advanced Manual Testing Lab",
    provider: "Professional Certification Path",
    date: "2023 - 2024",
    description: "Mastered the art of exploratory testing and rigorous edge-case analysis. Successfully identified and documented critical vulnerabilities in complex web infrastructures.",
    icon: GraduationCap,
    skills: ["UAT", "STLC", "Bug Reporting"]
  }
];

const courses = [
  {
    title: "Enterprise Quality Architecture",
    platform: "Certification",
    status: "Verified",
    id: "QA-999-X",
    color: "bg-primary"
  },
  {
    title: "Software Reliability Foundations",
    platform: "Coursera",
    status: "Completed",
    id: "REL-2024",
    color: "bg-green-500"
  },
  {
    title: "Manual Test Case Design Elite",
    platform: "LinkedIn Learning",
    status: "Completed",
    id: "DES-456",
    color: "bg-primary"
  },
  {
    title: "Modern Security Protocols",
    platform: "Udemy",
    status: "In Progress",
    id: "SEC-789",
    color: "bg-yellow-500"
  }
];

export function ExperienceSection() {
  return (
    <section id="workflow" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-xs font-black uppercase tracking-[0.5em] text-primary">Experience Matrix</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-20 uppercase leading-[0.85]">
              SYSTEM <br />
              <span className="text-black/10 font-outline-4">EVOLUTION.</span>
            </h2>

            <div className="space-y-16 relative">
              <div className="absolute left-[20px] md:left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent" />
              
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-16 md:pl-24 group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    className="absolute left-0 top-0 p-4 bg-black text-white rounded-2xl shadow-xl z-10 group-hover:bg-primary transition-colors duration-500"
                  >
                    <item.icon className="h-6 w-6 md:h-8 md:w-8" />
                  </motion.div>
                  
                  <div className="flex flex-col mb-4">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2">{item.type}</span>
                    <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-8 text-[10px] font-black uppercase tracking-widest text-black/40">
                    <span className="flex items-center gap-2"><Briefcase className="h-3 w-3" /> {item.provider}</span>
                    <span className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {item.date}</span>
                  </div>
                  
                  <p className="text-lg text-black/60 font-medium leading-relaxed mb-8 max-w-xl uppercase tracking-tight">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-black/5 border border-black/10 rounded-full text-[8px] font-black uppercase tracking-widest hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black/5 border border-black/10 p-10 md:p-14 rounded-[4rem] backdrop-blur-3xl sticky top-32 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                <Award className="h-48 w-48 text-black" />
              </div>

              <div className="flex items-center gap-6 mb-16 relative z-10">
                <div className="p-4 bg-primary text-white rounded-2xl shadow-2xl">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-display font-black uppercase tracking-tight">Credentials</h3>
              </div>

              <div className="space-y-6 relative z-10">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 15 }}
                    className="p-8 bg-white border border-black/10 rounded-[2.5rem] shadow-xl flex items-center justify-between group/card hover:border-primary transition-all duration-500"
                  >
                    <div className="min-w-0">
                      <h4 className="font-black uppercase tracking-tight text-sm md:text-base mb-2 group-hover/card:text-primary transition-colors">{course.title}</h4>
                      <div className="flex items-center gap-4 text-[9px] font-black text-black/40 uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                          <Zap className="h-3 w-3 text-primary" /> {course.platform}
                        </span>
                      </div>
                    </div>
                    <div className={`w-3 h-12 rounded-full ${course.color} opacity-20 group-hover/card:opacity-100 transition-all shadow-2xl`} />
                  </motion.div>
                ))}
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-16 p-10 border-4 border-dotted border-black/10 rounded-[3rem] flex flex-col items-center text-center justify-center opacity-40 hover:opacity-100 hover:border-primary/50 transition-all duration-500 cursor-pointer"
              >
                <div className="h-16 w-16 rounded-full bg-black/5 flex items-center justify-center mb-6">
                   <Plus className="h-8 w-8 font-black" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.5em]">System Upgrade Pending</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 4v16m8-8H4" />
    </svg>
  );
}

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Award } from "lucide-react";

const experience = [
  {
    type: "Learning",
    title: "QA Fundamentals & Manual Testing",
    provider: "Self-Paced / Online Courses",
    date: "2024 - Present",
    description: "Intensive study of test case design, bug lifecycle, and exploratory testing methodologies.",
    icon: GraduationCap
  },
  {
    type: "Practice",
    title: "Beta Testing Participant",
    provider: "Community Projects",
    date: "2024",
    description: "Volunteered to test various web applications, reporting over 20+ usability and functional bugs.",
    icon: Briefcase
  }
];

const courses = [
  {
    title: "AI in Software Testing",
    platform: "Certification",
    status: "Completed",
    id: "AI-777"
  },
  {
    title: "Software Testing Foundations",
    platform: "Coursera",
    status: "Completed",
    id: "C-123"
  },
  {
    title: "Python for Beginners",
    platform: "Udemy",
    status: "In Progress",
    id: "U-456"
  },
  {
    title: "Modern QA Methodologies",
    platform: "LinkedIn Learning",
    status: "Completed",
    id: "L-789"
  }
];

export function ExperienceSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-primary"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Resume</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-12 uppercase">
              EXPERIENCE & <br className="hidden lg:block" />
              <span className="text-muted-foreground/40">EDUCATION</span>
            </h2>

            <div className="space-y-8 text-left">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 md:pl-12 pb-8 border-l border-border group"
                >
                  <div className="absolute left-[-13px] md:left-[-17px] top-0 p-1.5 md:p-2 bg-background border border-border group-hover:border-primary transition-colors">
                    <item.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1 sm:gap-4 mb-2">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight leading-tight">{item.title}</h3>
                    <span className="text-[8px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest whitespace-nowrap">{item.date}</span>
                  </div>
                  <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4">{item.provider}</p>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 w-full max-w-2xl mx-auto">
            <div className="glass-card p-6 md:p-10 border border-border h-full text-left">
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-black uppercase tracking-tight">Certification Tracking</h3>
              </div>

              <div className="space-y-4">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="p-4 md:p-6 bg-secondary border border-border flex items-center justify-between group cursor-default gap-4"
                  >
                    <div className="min-w-0">
                      <h4 className="font-bold uppercase tracking-tight text-xs md:text-sm mb-1 truncate">{course.title}</h4>
                      <div className="flex items-center gap-3 md:gap-4 text-[8px] md:text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        <span className="flex items-center gap-1 whitespace-nowrap">
                          <Calendar className="h-3 w-3" /> {course.platform}
                        </span>
                        <span className="hidden sm:inline">ID: {course.id}</span>
                      </div>
                    </div>
                    <div className={`px-2 md:px-3 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest whitespace-nowrap shrink-0 ${
                      course.status === "Completed" ? "bg-primary text-primary-foreground" : "bg-border text-muted-foreground"
                    }`}>
                      {course.status}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 md:mt-12 p-6 border-2 border-dashed border-border flex flex-col items-center text-center justify-center grayscale hover:grayscale-0 transition-all opacity-40 hover:opacity-100">
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                   <span className="text-xl font-black">+</span>
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest">Next Achievement Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Award, Cpu, CheckCircle2, ExternalLink } from "lucide-react";

const CERTIFICATE_LINK = "/assets/Arisha.jpg";

export function CertificationSection() {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">

      {/* subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* soft glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">

            {/* recruiter magnet badge */}
            <div className="inline-flex items-center gap-3 mb-6 
            px-4 py-2 bg-green-50 text-green-700 rounded-full 
            text-xs font-bold tracking-widest uppercase">

              ✔ Verified AI Testing Certification
            </div>

            <motion.h2
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              className="text-5xl md:text-8xl font-display font-black 
              tracking-tighter uppercase leading-[0.85] mb-12 text-black"
            >
              AI POWERED <br/>
              <span className="text-black/10 font-outline-2 md:font-outline-4">
                QA SKILLS.
              </span>
            </motion.h2>


            {/* SIMPLE RECRUITER WORDING */}
          <p className="mt-6 text-sm font-bold text-black/60">
  Instructor:{" "}
  <a 
    href="https://www.linkedin.com/in/imahmedhassan/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-primary hover:underline"
  >
    Ahmed Hassan
  </a>{" "} 
  (LinkedIn Certified Trainer)

              Completed certification in AI tools for Software Testing.  
              Learned how to generate test cases faster, detect bugs early,
              and improve QA workflow using modern AI testing tools.

            </p>



            {/* RECRUITER SEARCH KEYWORDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">

              {[
                {title:"AI Test Case Generation",desc:"Faster scenario coverage"},
                {title:"Bug Detection Workflow",desc:"Early issue discovery"},
                {title:"Automation Support",desc:"Helps Selenium testing"},
                {title:"QA Productivity",desc:"Speeds manual testing"}
              ].map((item,i)=>(
                <div key={i} className="flex items-center gap-4 group">

                  <div className="h-10 w-10 rounded-xl bg-white border border-black/5 
                  flex items-center justify-center shadow-sm
                  group-hover:bg-primary group-hover:text-white transition-all">

                    <CheckCircle2 className="h-5 w-5"/>

                  </div>

                  <div className="text-left">
                    <h4 className="text-xs font-black uppercase tracking-widest text-black">
                      {item.title}
                    </h4>
                    <p className="text-[10px] font-bold text-black/40 uppercase">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>



          {/* RIGHT CERTIFICATE CARD */}
          <div className="lg:col-span-5">

            <motion.div
              initial={{opacity:0,scale:0.92}}
              whileInView={{opacity:1,scale:1}}
              viewport={{once:true}}
              transition={{duration:0.8}}
              className="relative group"
            >

              {/* glow hover */}
              <div className="absolute -inset-6 bg-primary/20 rounded-[3rem] 
              blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"/>


              <div className="relative bg-white border border-black/10 
              p-8 md:p-12 rounded-[3rem] shadow-2xl overflow-hidden 
              aspect-[3/4] flex flex-col justify-between 
              group-hover:border-primary/30 transition duration-500">

                {/* animated shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                transition duration-700 pointer-events-none">

                  <div className="absolute -left-40 top-0 w-40 h-full 
                  bg-white/40 rotate-12 blur-2xl 
                  group-hover:translate-x-[600px] transition duration-1000"/>
                </div>


                <div className="flex justify-between items-start">

                  <div className="p-4 bg-primary text-white rounded-2xl shadow-xl">
                    <Award className="h-10 w-10"/>
                  </div>

                  <div className="text-right">
                    <div className="text-3xl font-black font-display">
                      CERTIFIED
                    </div>
                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                      VERIFIED 2026
                    </div>
                  </div>

                </div>



                <div className="text-left">

                  <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-4">
                    AI Tools for <br/> Software Testing
                  </h3>

                  <div className="h-1.5 w-24 bg-primary mb-8 rounded-full"/>

                  <p className="text-black/40 text-[11px] font-bold uppercase tracking-wide mb-12 max-w-[85%]">
                    Certification focused on practical AI testing tools,
                    QA workflows, automation support and real project testing.
                  </p>


                  {/* VERIFIED BUTTON */}
                  <a
                    href={CERTIFICATE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 p-6 
                    bg-black/5 rounded-2xl border border-dashed border-black/10
                    hover:bg-white hover:border-primary hover:shadow-xl
                    transition duration-500"
                  >

                    <div className="flex items-center gap-4">

                      {/* pulse verification */}
                      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>

                      <span className="text-[11px] font-black uppercase tracking-widest">
                        View Verified Certificate
                      </span>

                    </div>

                    <ExternalLink className="h-4 w-4 opacity-40"/>

                  </a>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

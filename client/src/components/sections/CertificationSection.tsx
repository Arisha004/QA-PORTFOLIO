import { motion } from "framer-motion";
import { Award, Cpu, CheckCircle2, ExternalLink } from "lucide-react";

const CERTIFICATE_LINK = "/assets/Arisha.jpg";

const certs = [
  {

    id: "ai-testing",
    title: "AI Tools",
    certificateLink: "/assets/Arisha.jpg",
    badge: "Verified AI Testing",
    instructor: "Ahmed Hassan",
    instructorLink: "https://www.linkedin.com/in/imahmedhassan/",
    description: "Completed certification in AI tools for Software Testing. Learned how to generate test cases faster, detect bugs early, and improve QA workflow using modern AI testing tools.",
    highlights: [
      { title: "AI Test Case Generation", desc: "Faster scenario coverage" },
      { title: "Bug Detection Workflow", desc: "Early issue discovery" },
      { title: "Automation Support", desc: "Helps Selenium testing" },
      { title: "QA Productivity", desc: "Speeds manual testing" }
    ]
  },
  {
    id: "manual-testing",
    title: "QA Fundamentals",
    certificateLink: "/assets/qa.jpg",
    provider: "10Pearls",
    badge: "Certified Manual QA",
    instructor: "10Pearls Academy",
    description: "Mastered the end-to-end manual testing lifecycle. Focused on rigorous requirement analysis, edge-case discovery, and professional defect reporting for enterprise software.",
    highlights: [
      { title: "Manual Testing", desc: "Finding hidden vulnerabilities" },
      { title: "Requirement Analysis", desc: "Ensuring 100% coverage" },
      { title: "Defect Lifecycle", desc: "Professional Jira tracking" },
      { title: "User Experience QA", desc: "Validating user journeys" }
    ]
  },
  {
    id: "api-testing",
    title: "API Testing",
    certificateLink: "/assets/api.jpg",
    provider: "10Pearls",
     badge: "Api Tester",
    instructor: "10Pearls Academy",
    description: "Specialized certification in validating backend systems. Learned to test API endpoints for security, reliability, and high-load performance using industry-standard tools.",
    highlights: [
      { title: "Postman Validation", desc: "Automated API assertions" },
      { title: "Load Testing by Jmeter", desc: "High-traffic simulation" },
      { title: "Security Testing", desc: "Endpoint vulnerability checks" },
      { title: "Data Integrity", desc: "Database state validation" }
    ]
  },
   {
  id: "test-case-management",
  title: "Test Case Management with TestWorthy",
  certificateLink: "/assets/test.jpg",
  provider: "TestWorthy",
  badge: "Certified Test Case Designer",
  instructor: "10Pearls Academy",
  description: "Professional certification focused on structured test case design, requirement traceability, and test execution management. Gained hands-on experience in writing clear, reusable, and scalable test cases aligned with industry QA standards.",
  highlights: [
    { title: "Test Case Design", desc: "Structured & reusable test scenarios" },
    { title: "RTM Creation", desc: "Requirement traceability mapping" },
    { title: "Test Execution", desc: "Planned & tracked execution cycles" },
    { title: "Defect Reporting", desc: "Clear severity & priority tagging" }
  ]
},
  {
  id: "10p-shine-internship",
  title: "QA Fullstack Internship",
  certificateLink: "/assets/10pshine.jpg",
  provider: "10Pearls",
  badge: "10P Shine Intern 2025",
  instructor: "Maheen Sumera Alavi",
  description: "Successfully completed the 10P Shine Internship Program 2025 in QA Fullstack domain. Gained practical exposure to real-world software testing workflows, cross-functional collaboration, and enterprise-level quality assurance practices.",
  highlights: [
    { title: "QA Fullstack Exposure", desc: "Frontend & backend validation" },
    { title: "Industry Workflow", desc: "Agile sprint collaboration" },
    { title: "Enterprise Testing", desc: "Real project validation" },
    { title: "Professional Growth", desc: "Structured QA execution" }
  ]
},
  {
  id: "szabist-merit-scholarship",
  title: "Merit Scholarship 1st Position",
  certificateLink: "/assets/scholarship.jpg",
  provider: "SZABIST",
  badge: "Academic Excellence Award",
  instructor: "Vice President Academics",
  description: "Awarded Merit Scholarship – 1st Position for outstanding academic performance in BSCS III G. Recognized for academic excellence, consistency, and top ranking performance in the semester.",
  highlights: [
    { title: "1st Position", desc: "Top of BSCS III G" },
    { title: "Academic Excellence", desc: "High GPA performance" },
    { title: "Merit Recognition", desc: "Official scholarship award" },
    { title: "Consistent Achievement", desc: "Strong academic standing" }
  ]
}
];

export function CertificationSection() {
  return (
    <section className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
      {/* subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* soft glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="space-y-32">
          {certs.map((cert, index) => (
            <div key={cert.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* LEFT CONTENT */}
              <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                {/* recruiter magnet badge */}
                <div className="inline-flex items-center gap-3 mb-6 
                px-4 py-2 bg-green-50 text-green-700 rounded-full 
                text-xs font-bold tracking-widest uppercase">
                  ✔ {cert.badge}
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl sm:text-5xl md:text-8xl font-display font-black 
                  tracking-tighter uppercase leading-[0.9] md:leading-[0.85] mb-8 md:mb-12 text-black"
                >
                  {cert.title.split(' ').slice(0, 2).join(' ')} <br/>
                  <span className="text-black/10 font-outline-2 md:font-outline-4">
                    {cert.title.split(' ').slice(2).join(' ')}
                  </span>
                </motion.h2>

                {/* SIMPLE RECRUITER WORDING */}
                <div className="mt-4 md:mt-6 space-y-4">
                  <p className="text-xs md:text-sm font-bold text-black/60">
                    Instructor:{" "}
                    {cert.instructorLink ? (
                      <a 
                        href={cert.instructorLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline"
                      >
                        {cert.instructor}
                      </a>
                    ) : (
                      <span className="text-primary">{cert.instructor}</span>
                    )}
                    {" "}({cert.provider} Certified)
                  </p>
                  <p className="text-xs md:text-sm font-bold text-black/60 max-w-xl">
                    {cert.description}
                  </p>
                </div>

                {/* RECRUITER SEARCH KEYWORDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-8 md:pt-10">
                  {cert.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 md:gap-4 group">
                      <div className="h-9 w-9 md:h-10 md:w-10 shrink-0 rounded-xl bg-white border border-black/5 
                      flex items-center justify-center shadow-sm
                      group-hover:bg-primary group-hover:text-white transition-all">
                        <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5"/>
                      </div>
                      <div className="text-left">
                        <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black">
                          {item.title}
                        </h4>
                        <p className="text-[9px] md:text-[10px] font-bold text-black/40 uppercase">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT CERTIFICATE CARD */}
              <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative group w-full max-w-[400px] lg:max-w-none mx-auto"
                >
                  {/* glow hover */}
                  <div className="absolute -inset-4 md:-inset-6 bg-primary/20 rounded-[2.5rem] md:rounded-[3rem] 
                  blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"/>

                  <div className="relative bg-white border border-black/10 
                  p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden 
                  aspect-[3/4] flex flex-col justify-between 
                  group-hover:border-primary/30 transition duration-500">

                    {/* animated shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
                    transition duration-700 pointer-events-none">
                      <div className="absolute -left-40 top-0 w-40 h-full 
                      bg-white/40 rotate-12 blur-2xl 
                      group-hover:translate-x-[600px] transition duration-1000"/>
                    </div>

                    <div className="flex justify-between items-start relative z-10">
                      <div className="p-4 bg-primary text-white rounded-2xl shadow-xl">
                        <Award className="h-10 w-10"/>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black font-display text-black">
                          CERTIFIED
                        </div>
                        <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">
                          VERIFIED 2026
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 text-left">
                      <h3 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight mb-4 text-black">
                        {cert.title.split(' ').slice(0, 2).join(' ')} <br/>
                        {cert.title.split(' ').slice(2).join(' ')}
                      </h3>

                      <div className="h-1.5 w-24 bg-primary mb-8 rounded-full"/>

                      <p className="text-black/40 text-[11px] font-bold uppercase tracking-wide mb-12 max-w-[85%]">
                        Professional certification from {cert.provider} focusing on 
                        practical industry workflows.
                      </p>

                      {/* VERIFIED BUTTON */}
                      <a
                     href={cert.certificateLink}   target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-4 p-6 
                        bg-black/5 rounded-2xl border border-dashed border-black/10
                        hover:bg-white hover:border-primary hover:shadow-xl
                        transition duration-500"
                      >
                        <div className="flex items-center gap-4">
                          {/* pulse verification */}
                          <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"/>
                          <span className="text-[11px] font-black uppercase tracking-widest text-black">
                            View Verified Certificate
                          </span>
                        </div>
                        <ExternalLink className="h-4 w-4 text-black/40"/>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

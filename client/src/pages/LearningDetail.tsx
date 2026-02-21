import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";

const details = {
  "test-cases": {
    title: "Writing Test Cases",
    content: "My approach to test case design involves breaking down features into atomic actions. I focus on positive flows, negative scenarios, and edge cases to ensure full coverage.",
    topics: ["Equivalence Partitioning", "Boundary Value Analysis", "Decision Tables"]
  },
  "bug-reporting": {
    title: "Bug Documentation",
    content: "A good bug report is half the fix. I use a structured format: Summary, Steps to Reproduce, Expected vs Actual Result, and Severity/Priority levels.",
    topics: ["Severity vs Priority", "Reproducibility", "Evidence Collection"]
  },
  "python": {
    title: "Python Basics",
    content: "I am learning Python to automate repetitive manual checks. I start with variables and logic, progressing towards Selenium scripts for web automation.",
    topics: ["Syntax & Types", "Control Flow", "Functions & Modules"]
  },
  "manual-analysis": {
    title: "Manual Analysis",
    content: "Beyond just clicking buttons, I perform deep dives into browser consoles, network logs, and accessibility trees to ensure a high-quality user experience.",
    topics: ["DevTools usage", "Network Inspection", "Accessibility Audits"]
  }
};

export default function LearningDetail() {
  const [, params] = useRoute("/learning/:id");
  const id = params?.id as keyof typeof details;
  const data = details[id];

  if (!data) return <div>Not Found</div>;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Reduced padding on small screens */}
      <main className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container-custom px-4 sm:px-6">

          <Link href="/">
            <a className="inline-flex items-center gap-2 text-xs sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-8 sm:mb-12 transition-colors">
              <ArrowLeft className="h-3 w-3" /> Back to Journey
            </a>
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

            {/* Responsive title scaling ONLY */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-black tracking-tighter uppercase mb-6 sm:mb-8 leading-tight break-words">
              {data.title.split(' ')[0]}
              <span className="text-primary">
                .{data.title.split(' ')[1] || 'LOG'}
              </span>
            </h1>

            {/* smaller gap on mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 mt-10 sm:mt-14 lg:mt-20">

              <div className="lg:col-span-8">

                {/* responsive paragraph size */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed mb-8 sm:mb-10 md:mb-12">
                  {data.content}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {data.topics.map((topic, i) => (
                    <div key={i}
                      className="p-5 sm:p-6 md:p-8 bg-secondary border border-border flex items-center gap-4">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-bold uppercase tracking-tight text-sm sm:text-base">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              <div className="lg:col-span-4">

                {/* sticky ONLY on desktop */}
                <div className="glass-card p-6 sm:p-8 md:p-10 border border-border lg:sticky lg:top-32">
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span className="font-black text-xs uppercase tracking-widest">
                      Resources
                    </span>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-bold uppercase tracking-tight text-muted-foreground">
                    <li className="flex items-center gap-2"><div className="h-1 w-1 bg-primary"></div> Official Documentation</li>
                    <li className="flex items-center gap-2"><div className="h-1 w-1 bg-primary"></div> Practice Sandboxes</li>
                    <li className="flex items-center gap-2"><div className="h-1 w-1 bg-primary"></div> Community Forums</li>
                  </ul>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

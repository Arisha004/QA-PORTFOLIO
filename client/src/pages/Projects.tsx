import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, Terminal } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Test Suite",
    description: "A comprehensive manual test plan and bug report for a mockup e-commerce platform. Focused on checkout flow and payment validation.",
    tags: ["Manual Testing", "JIRA", "Test Cases"],
    github: "https://github.com/arishamumtaz",
    live: "#"
  },
  {
    title: "Login Security Practice",
    description: "Testing various security vulnerabilities in login forms, including brute force simulation and input validation.",
    tags: ["Security", "Manual QA", "Bug Reporting"],
    github: "https://github.com/arishamumtaz",
    live: "#"
  },
  {
    title: "Responsive UI Audit",
    description: "A detailed report of layout shifts and responsiveness bugs found across different device screen sizes.",
    tags: ["UI/UX", "Mobile Testing", "Lighthouse"],
    github: "https://github.com/arishamumtaz",
    live: "#"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-12 transition-colors">
              <ArrowLeft className="h-3 w-3" /> Back to Base
            </a>
          </Link>

          <div className="mb-20">
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase mb-8">
              PROJECTS<span className="text-primary">.LOG</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              A detailed record of my QA practice projects, test plans, and learning milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border border border-border">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-12 group hover:bg-secondary transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="rounded-none text-[10px] font-black uppercase tracking-widest px-3">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-3xl font-display font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-row md:flex-col gap-4 shrink-0">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="rounded-none h-14 px-8 border-primary font-black text-[10px] tracking-widest uppercase hover:bg-primary hover:text-primary-foreground w-full">
                        <Github className="h-4 w-4 mr-2" /> GitHub Repo
                      </Button>
                    </a>
                    <Button className="rounded-none h-14 px-8 font-black text-[10px] tracking-widest uppercase">
                      <ExternalLink className="h-4 w-4 mr-2" /> View Report
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

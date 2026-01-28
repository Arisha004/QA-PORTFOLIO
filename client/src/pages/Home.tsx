import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QAPlayground } from "@/components/sections/QAPlayground";
import { AITools } from "@/components/sections/AITools";
import { PerformanceObservatory } from "@/components/sections/PerformanceObservatory";
import { WorkflowTimeline } from "@/components/sections/WorkflowTimeline";
import { VideoSection } from "@/components/sections/VideoSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ChatBot } from "@/components/ui/ChatBot";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <AITools />
        <QAPlayground />
        <CaseStudies />
        <WorkflowTimeline />
        <PerformanceObservatory />
        <VideoSection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

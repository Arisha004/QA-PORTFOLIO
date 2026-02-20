import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  // Click outside to close video
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isPlaying &&
        videoWrapperRef.current &&
        !videoWrapperRef.current.contains(event.target as Node)
      ) {
        setIsPlaying(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPlaying]);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="h-px w-6 sm:w-8 bg-primary"></div>
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-primary">
              Media Channel
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black tracking-tight sm:tracking-tighter uppercase text-black mb-4 sm:mb-6">
            QA <span className="text-black/20">VLOGS</span> &{" "}
            <span className="text-primary font-outline-2">DEMOS</span>
          </h2>
          <p className="text-[12px] sm:text-sm md:text-lg lg:text-xl font-medium max-w-full sm:max-w-2xl mx-auto uppercase tracking-wide sm:tracking-widest text-black/60">
            Visual breakdown of my testing workflows, tool configurations, and bug documentation sessions.
          </p>
        </div>

        {/* Video Wrapper */}
        <div
          className="relative group max-w-6xl mx-auto px-4 sm:px-0"
          ref={videoWrapperRef}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video bg-gray-50 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-black/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] cursor-pointer group"
            onClick={() => !isPlaying && setIsPlaying(true)}
          >

        </div>
      </div>
    </section>
  );
}

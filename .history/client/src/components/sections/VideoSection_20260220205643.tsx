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
) : (
  <div className="absolute inset-0">

    {/* Blurred Thumbnail */}
    <img
      src="/assets/videos/thumbnail.jpg"
      alt="QA Video Thumbnail"
      className="w-full h-full object-cover scale-110 blur-md"
    />

    {/* Dark Glass Overlay */}
    <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center text-center px-6 sm:px-12">

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_60%)]" />

      {/* Play Button */}
      <div className="relative mb-8 sm:mb-12 z-10">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute inset-0 bg-primary rounded-full blur-3xl"
        />
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
          <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white fill-current ml-1 group-hover:text-black" />
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 space-y-4 max-w-4xl">
        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.6em] text-primary">
          Watch Session 01
        </div>

        <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black uppercase leading-[0.95] text-white">
          The Art of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">
            Testing
          </span>{" "}
          With AI Tools
        </h3>

        <div className="flex items-center justify-center gap-6 pt-6 text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">
          <div className="h-px w-12 bg-white/20" />
          <div>ARISHA.QA / 2026</div>
          <div className="h-px w-12 bg-white/20" />
        </div>
      </div>

    </div>
  </div>
</
  );
}

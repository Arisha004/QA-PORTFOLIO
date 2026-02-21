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
            {/* Background */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-white" />

    {/* Video / Thumbnail */}
<AnimatePresence>
  {isPlaying ? (
    <motion.div
      key="video-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 w-full h-full"
    >
      {/* Close Button */}
      <button
        className="absolute top-2 sm:top-4 right-2 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition"
        onClick={(e) => {
          e.stopPropagation();
          setIsPlaying(false);
        }}
      >
        <X className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Video */}
      <video
        src="/assets/videos/video.mp4"
        controls
        autoPlay
        className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[3rem]"
      />
    </motion.div>
  ) : (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-12">
      {/* Animated Play Button */}
      <div className="mb-4 sm:mb-8 relative flex justify-center">
        {/* Glowing background */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute rounded-full bg-primary blur-[20px] sm:blur-[50px] w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24"
        />

        {/* Play button */}
        <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,255,255,0.4)] group-hover:scale-105 transition-transform">
          <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white fill-current" />
        </div>
      </div>

      {/* Text */}
      <div className="text-center space-y-2 sm:space-y-4 max-w-full sm:max-w-xl px-2 sm:px-0">
        <div className="text-[7px] sm:text-[10px] font-black uppercase tracking-[0.35em] sm:tracking-[0.5em] text-primary">
          WATCH SESSION 01
        </div>
        <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black text-black tracking-tight sm:tracking-tighter uppercase leading-snug sm:leading-[0.9]">
          THE ART OF <br />
          <span className="text-primary font-outline-2">TESTING</span> WITH AI TOOLS
        </h3>
        <div className="flex items-center justify-center gap-2 sm:gap-8 pt-2 sm:pt-4 opacity-20 text-[7px] sm:text-[10px] uppercase font-black tracking-[0.25em] sm:tracking-[0.4em]">
          <div className="h-px flex-1 bg-black" />
          <div>ARISHA.QA / 2026</div>
          <div className="h-px flex-1 bg-black" />
        </div>
      </div>
    </div>
  )}
</AnimatePresence>

            {/* Overlay (only when not playing) */}
            {!isPlaying && (
              <>
                <div className="absolute top-4 sm:top-12 left-4 sm:left-12 p-2 sm:p-4 bg-white/40 border border-black/10 backdrop-blur-md rounded-xl sm:rounded-2xl hidden md:block">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <div className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-black">
                      RECORDING LIVE
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 sm:bottom-12 right-4 sm:right-12 hidden md:flex items-center gap-2 sm:gap-4 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-black/40">
                  <span>BITRATE: 45MBPS</span>
                  <div className="w-1 h-1 bg-black/20 rounded-full" />
                  <span>CODEC: AV1</span>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { X } from "lucide-react";
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              Media Channel
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase text-black mb-6">
            QA <span className="text-black/20">VLOGS</span> &{" "}
            <span className="text-primary font-outline-2">DEMOS</span>
          </h2>
          <p className="text-black/60 text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest">
            Visual breakdown of my testing workflows, tool configurations, and
            bug documentation sessions.
          </p>
        </div>

        {/* Video Container */}
        <div
          ref={videoWrapperRef}
          className="relative max-w-6xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-lg cursor-pointer"
          onClick={() => !isPlaying && setIsPlaying(true)}
        >
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                key="video-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(false);
                  }}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Video */}
                <video
                  src="/assets/videos/my-video.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}

            {!isPlaying && (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full flex items-center justify-center bg-black/5 rounded-3xl"
              >
                <span className="text-black/30 uppercase tracking-widest text-sm">
                  Click to Play Video
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

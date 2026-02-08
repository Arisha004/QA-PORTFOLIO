import { Play } from "lucide-react";
import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="section-padding bg-[#05070a] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-primary"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Media Channel</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase text-white mb-6">
            QA <span className="text-white/20">VLOGS</span> & <span className="text-primary font-outline-2">DEMOS</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium max-w-2xl mx-auto uppercase tracking-widest">
            Visual breakdown of my testing workflows, tool configurations, and bug documentation sessions.
          </p>
        </div>

        <div className="relative group max-w-6xl mx-auto">
          {/* Custom High-Fidelity Thumbnail */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video bg-black rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] cursor-pointer group"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black" />
            
            {/* Thumbnail Graphics */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12">
               <div className="mb-12 relative">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute inset-0 bg-primary rounded-full blur-[80px]"
                  />
                  <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,255,255,0.4)] group-hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 md:h-12 md:w-12 text-black fill-current ml-2" />
                  </div>
               </div>
               
               <div className="text-center space-y-4 max-w-3xl">
                  <div className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">WATCH SESSION 01</div>
                  <h3 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase leading-[0.9]">
                    THE ART OF <br /> <span className="text-primary font-outline-2">MANUAL</span> VALIDATION
                  </h3>
                  <div className="flex items-center justify-center gap-8 pt-8 opacity-40">
                    <div className="h-px flex-1 bg-white" />
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white">ARISHA.QA / 2026</div>
                    <div className="h-px flex-1 bg-white" />
                  </div>
               </div>
            </div>

            {/* UI Overlay Elements */}
            <div className="absolute top-12 left-12 p-4 bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white">RECORDING LIVE</div>
              </div>
            </div>

            <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
               <span>BITRATE: 45MBPS</span>
               <div className="w-1 h-1 bg-white/20 rounded-full" />
               <span>CODEC: AV1</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

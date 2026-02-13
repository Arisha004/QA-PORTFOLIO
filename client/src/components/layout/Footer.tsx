import { Github, Linkedin, Mail, Shield, Lock, Cpu, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="bg-white text-black py-16 md:py-24 relative overflow-hidden border-t border-black/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-6 mb-12"
          >
            <motion.div 
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="p-4 bg-primary/10 border border-primary/20 rounded-2xl shadow-sm backdrop-blur-sm"
            >
              <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 text-primary" strokeWidth={1.5} />
            </motion.div>
            <span className="font-display font-black text-4xl md:text-6xl tracking-tighter uppercase text-black">
              ARISHA<span className="text-primary/60">.QA</span>
            </span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-12 leading-[0.8] uppercase max-w-4xl"
          >
            LET'S <br />
            <span className="text-black/10 font-outline-2 hover:text-primary/40 transition-all duration-700 cursor-default">VALIDATE</span> <br />
            TOGETHER.
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-black/40 text-lg md:text-xl font-bold mb-16 max-w-2xl leading-tight uppercase tracking-[0.2em]"
          >
            Strategic test architecture and quality pursuit.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-20">
             {[
               { icon: Github, href: "https://github.com/arishamumtaz", label: "GitHub" },
               { icon: Linkedin, href: "#", label: "LinkedIn" },
               { icon: Mail, href: "mailto:arishamumtaz340@gmail.com", label: "Email" }
             ].map((social, i) => (
               <motion.a 
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 + (i * 0.1) }}
                 whileHover={{ y: -8, scale: 1.05 }}
                 href={social.href} 
                 target={social.href.startsWith('http') ? "_blank" : undefined}
                 rel={social.href.startsWith('http') ? "noopener" : undefined}
                 className="group relative"
               >
                 <div className="relative p-6 bg-black/5 border border-black/10 rounded-2xl transition-all duration-300 text-black/60 shadow-sm backdrop-blur-md group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white">
                   <social.icon className="h-7 w-7 group-hover:rotate-6 transition-transform" />
                 </div>
               </motion.a>
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 p-5 bg-black/[0.02] border border-black/5 rounded-2xl backdrop-blur-sm"
          >
            <div className="relative">
              <div className="h-3 w-3 rounded-full bg-green-500/80 animate-pulse" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Accepting Projects</span>
          </motion.div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[9px] font-black uppercase tracking-[0.5em] text-black/20 text-center md:text-left">
            © {new Date().getFullYear()} ARISHA MUMTAZ
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { name: "Privacy", href: "/privacy", icon: Shield },
              { name: "Security", href: "/security", icon: Lock },
              { name: "System", href: "/system", icon: Cpu }
            ].map((link, i) => (
              <Link key={i} href={link.href} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-[9px] font-black uppercase tracking-[0.4em] text-black/40 hover:text-primary transition-all flex items-center gap-3 group">
                <link.icon className="h-4 w-4 opacity-30 group-hover:opacity-100 transition-all" />
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

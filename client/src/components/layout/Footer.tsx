import { Github, Linkedin, Mail, Shield, Lock, Cpu, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="contact" className="bg-white text-black py-24 md:py-48 relative overflow-hidden border-t border-black/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-12 mb-24"
          >
            <motion.div 
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="p-6 bg-primary/20 border border-primary/30 rounded-[2.5rem] shadow-2xl backdrop-blur-sm"
            >
              <ShieldCheck className="h-16 w-16 md:h-20 md:w-20 text-primary" strokeWidth={1.5} />
            </motion.div>
            <span className="font-display font-black text-6xl md:text-9xl tracking-tighter uppercase text-black drop-shadow-2xl">
              ARISHA<span className="text-primary">.QA</span>
            </span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[12rem] font-display font-black tracking-tighter mb-20 leading-[0.75] uppercase max-w-5xl"
          >
            LET'S <br />
            <span className="text-black/20 font-outline-4 hover:text-primary transition-all duration-1000 cursor-default">VALIDATE</span> <br />
            TOGETHER.
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-black/60 text-2xl md:text-3xl font-bold mb-24 max-w-3xl leading-tight uppercase tracking-[0.2em]"
          >
            Strategic test architecture and relentless quality pursuit.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-14 mb-32">
             {[
               { icon: Github, href: "https://github.com/arishamumtaz", label: "GitHub" },
               { icon: Linkedin, href: "#", label: "LinkedIn" },
               { icon: Mail, href: "mailto:arishamumtaz340@gmail.com", label: "Email" }
             ].map((social, i) => (
               <motion.a 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 + (i * 0.1) }}
                 whileHover={{ y: -15, scale: 1.05 }}
                 href={social.href} 
                 target={social.href.startsWith('http') ? "_blank" : undefined}
                 rel={social.href.startsWith('http') ? "noopener" : undefined}
                 className="group relative"
               >
                 <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                 <div className="relative p-10 bg-black/5 border border-black/10 rounded-[2.5rem] transition-all duration-500 text-black shadow-2xl backdrop-blur-md group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                   <social.icon className="h-12 w-12 group-hover:rotate-12 transition-transform duration-500" />
                 </div>
                 <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.4em] opacity-0 group-hover:opacity-100 transition-all duration-500 text-primary">
                   {social.label}
                 </span>
               </motion.a>
             ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-8 p-10 bg-black/5 border border-black/10 rounded-[3rem] backdrop-blur-md shadow-2xl border-dashed"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full blur-md animate-pulse" />
              <div className="relative h-5 w-5 rounded-full bg-green-500 border-2 border-white" />
            </div>
            <span className="text-sm font-black uppercase tracking-[0.5em] text-black/90">Systems Online: Accepting New Projects</span>
          </motion.div>
        </div>
        
        <div className="mt-48 pt-20 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-[10px] font-black uppercase tracking-[0.8em] text-black/30">
            © {new Date().getFullYear()} ARISHA MUMTAZ — ARCHITECTING QUALITY
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {[
              { name: "Privacy", href: "/privacy", icon: Shield },
              { name: "Security", href: "/security", icon: Lock },
              { name: "System", href: "/system", icon: Cpu }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="text-[10px] font-black uppercase tracking-[0.5em] text-black hover:text-primary transition-all flex items-center gap-5 group">
                <link.icon className="h-6 w-6 opacity-40 group-hover:opacity-100 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

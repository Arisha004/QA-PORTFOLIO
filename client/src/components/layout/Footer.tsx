import { Terminal, Github, Linkedin, Mail, Send, Shield, Lock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link } from "wouter";

export function Footer() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Transmission Data:", data);

    setTimeout(() => {
      toast({
        title: "SUCCESS: MESSAGE TRANSMITTED",
        description: `Confirmation sent to arishamumtaz340@gmail.com. I will respond shortly.`,
        className: "bg-green-600 text-white border-none",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <footer className="bg-[#05070a] text-white py-20 md:py-40 relative overflow-hidden border-t border-white/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-start">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-10">
              <div className="p-3 bg-primary/20 border border-primary/30 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                <Terminal className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <span className="font-display font-black text-3xl md:text-4xl tracking-tighter uppercase text-white">ARISHA<span className="text-primary">.QA</span></span>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-10 leading-[0.8] uppercase max-w-md mx-auto lg:mx-0">
              SECURE <br />
              <span className="text-white/40 font-outline-2">YOUR</span> <br />
              SYSTEMS.
            </h3>
            
            <p className="text-white/70 text-sm md:text-base font-medium mb-12 max-w-sm mx-auto lg:mx-0 leading-relaxed uppercase tracking-[0.2em]">
              Available for full-cycle quality assurance and strategic test architecture.
            </p>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-12 lg:mb-16">
               <a href="https://github.com/arishamumtaz" target="_blank" rel="noopener" className="p-5 bg-white/10 border border-white/20 rounded-2xl hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 text-white"><Github className="h-6 w-6" /></a>
               <a href="#" className="p-5 bg-white/10 border border-white/20 rounded-2xl hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 text-white"><Linkedin className="h-6 w-6" /></a>
               <a href="mailto:arishamumtaz340@gmail.com" className="p-5 bg-white/10 border border-white/20 rounded-2xl hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 text-white"><Mail className="h-6 w-6" /></a>
            </div>

            <div className="hidden lg:block">
              <div className="inline-flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90 whitespace-nowrap">Global QA Infrastructure Verified</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 w-full">
            <div className="bg-white/5 border border-white/20 p-8 md:p-14 rounded-[3rem] backdrop-blur-xl relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Lock className="h-12 w-12 text-primary" />
              </div>
              
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-primary text-center lg:text-left">Inquiry Transmission Protocol</h4>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90 ml-1">Identity</label>
                    <Input name="name" required className="rounded-2xl bg-white/10 border-white/40 h-16 text-white placeholder:text-white/50 focus:ring-primary focus:border-primary px-6 text-base" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90 ml-1">Encrypted Mail</label>
                    <Input name="email" required type="email" className="rounded-2xl bg-white/10 border-white/40 h-16 text-white placeholder:text-white/50 focus:ring-primary focus:border-primary px-6 text-base" placeholder="email@address.com" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90 ml-1">Message Payload</label>
                  <Textarea name="message" required className="rounded-[2rem] bg-white/10 border-white/40 min-h-[180px] text-white placeholder:text-white/50 focus:ring-primary focus:border-primary px-6 py-6 text-base" placeholder="Describe your quality requirements..." />
                </div>
                
                <Button disabled={isSubmitting} className="w-full h-20 rounded-[2rem] bg-primary text-white font-black text-lg uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 shadow-2xl shadow-primary/20 group">
                  {isSubmitting ? "TRANSMITTING..." : "EXECUTE SEND"}
                  <Send className="ml-4 h-6 w-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-24 md:mt-40 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">
            © {new Date().getFullYear()} ARISHA MUMTAZ — ALL RIGHTS RESERVED
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-16">
            <Link href="/privacy" className="text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-primary transition-colors flex items-center gap-3 group">
              <Shield className="h-4 w-4 opacity-80 group-hover:opacity-100" />
              Privacy
            </Link>
            <Link href="/security" className="text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-primary transition-colors flex items-center gap-3 group">
              <Lock className="h-4 w-4 opacity-80 group-hover:opacity-100" />
              Security
            </Link>
            <Link href="/system" className="text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-primary transition-colors flex items-center gap-3 group">
              <Cpu className="h-4 w-4 opacity-80 group-hover:opacity-100" />
              System
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

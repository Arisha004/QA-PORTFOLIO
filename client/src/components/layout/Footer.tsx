import { Terminal, Activity, Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function Footer() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating EmailJS integration
    setTimeout(() => {
      toast({
        title: "Message Transmitted",
        description: "Your inquiry has been routed to Arisha's inbox (arishamumtaz340@gmail.com).",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <footer className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8 md:mb-12">
              <Terminal className="h-6 w-6 md:h-8 md:w-8" />
              <span className="font-display font-black text-2xl md:text-3xl tracking-tighter uppercase">ARISHA.QA</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-8 md:mb-12 leading-[0.9] uppercase">
              READY TO <br />
              <span className="opacity-40 text-primary-foreground">VALIDATE</span> YOUR <br />
              SYSTEM?
            </h3>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-12 md:mb-16">
               <a href="https://github.com/arishamumtaz" target="_blank" rel="noopener" className="p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-colors"><Github className="h-5 w-5 md:h-6 md:w-6" /></a>
               <a href="#" className="p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-colors"><Linkedin className="h-5 w-5 md:h-6 md:w-6" /></a>
               <a href="mailto:arishamumtaz340@gmail.com" className="p-3 md:p-4 border border-white/10 hover:bg-white/10 transition-colors"><Mail className="h-5 w-5 md:h-6 md:w-6" /></a>
            </div>

            <div className="p-6 md:p-8 border border-white/10 bg-white/5 rounded-sm max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-xs font-bold uppercase tracking-widest mb-4">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                Systems Operational
              </div>
              <p className="text-[10px] md:text-xs font-medium text-white/60 leading-relaxed uppercase tracking-tight">
                Building the future of quality through disciplined testing and AI integration.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-6 md:p-10 border border-white/10 bg-white/5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 md:mb-10 text-white/40 text-center md:text-left">Direct Communication Protocol</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/60">Full Name</label>
                    <Input required className="rounded-none bg-white/5 border-white/10 h-12 text-white placeholder:text-white/20" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/60">Email Address</label>
                    <Input required type="email" className="rounded-none bg-white/5 border-white/10 h-12 text-white placeholder:text-white/20" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/60">Message Payload</label>
                  <Textarea required className="rounded-none bg-white/5 border-white/10 min-h-[120px] md:min-h-[150px] text-white placeholder:text-white/20" placeholder="How can Arisha assist your QA requirements?" />
                </div>
                <Button disabled={isSubmitting} className="w-full h-14 md:h-16 rounded-none bg-white text-primary font-black uppercase tracking-[0.2em] hover:bg-white/90">
                  {isSubmitting ? "TRANSMITTING..." : "EXECUTE SEND"}
                  <Send className="ml-3 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/30 text-center">
          <div>© {new Date().getFullYear()} Arisha Mumtaz — Protocol V1.0.4</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Terminal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

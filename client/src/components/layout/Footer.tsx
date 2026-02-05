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
    <footer className="bg-primary text-primary-foreground py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-12">
              <Terminal className="h-8 w-8" />
              <span className="font-display font-black text-3xl tracking-tighter uppercase">ARISHA.QA</span>
            </div>
            <h3 className="text-5xl font-display font-black tracking-tighter mb-12 leading-[0.9] uppercase">
              READY TO <br />
              <span className="opacity-40 text-primary-foreground">VALIDATE</span> YOUR <br />
              SYSTEM?
            </h3>
            
            <div className="flex gap-4 mb-16">
               <a href="https://github.com/arishamumtaz" target="_blank" rel="noopener" className="p-4 border border-white/10 hover:bg-white/10 transition-colors"><Github className="h-6 w-6" /></a>
               <a href="#" className="p-4 border border-white/10 hover:bg-white/10 transition-colors"><Linkedin className="h-6 w-6" /></a>
               <a href="mailto:arishamumtaz340@gmail.com" className="p-4 border border-white/10 hover:bg-white/10 transition-colors"><Mail className="h-6 w-6" /></a>
            </div>

            <div className="p-8 border border-white/10 bg-white/5 rounded-sm max-w-sm">
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest mb-4">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                Systems Operational
              </div>
              <p className="text-xs font-medium text-white/60 leading-relaxed uppercase tracking-tight">
                Building the future of quality through disciplined testing and AI integration.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="glass-card p-10 border border-white/10 bg-white/5">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-white/40">Direct Communication Protocol</h4>
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
                  <Textarea required className="rounded-none bg-white/5 border-white/10 min-h-[150px] text-white placeholder:text-white/20" placeholder="How can Arisha assist your QA requirements?" />
                </div>
                <Button disabled={isSubmitting} className="w-full h-16 rounded-none bg-white text-primary font-black uppercase tracking-[0.2em] hover:bg-white/90">
                  {isSubmitting ? "TRANSMITTING..." : "EXECUTE SEND"}
                  <Send className="ml-3 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
          <div>© {new Date().getFullYear()} Arisha Mumtaz — Protocol V1.0.4</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Terminal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

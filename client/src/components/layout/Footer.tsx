import { Terminal, Activity, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <Terminal className="h-6 w-6" />
              <span className="font-display font-black text-2xl tracking-tighter uppercase">ARISHA.QA</span>
            </div>
            <h3 className="text-4xl font-display font-black tracking-tighter mb-8 leading-none">
              READY TO <br />
              <span className="opacity-40 text-primary-foreground">VALIDATE</span> YOUR <br />
              NEXT BIG THING?
            </h3>
            <div className="flex gap-4">
               <a href="#" className="p-3 border border-white/10 hover:bg-white/10 transition-colors"><Github className="h-5 w-5" /></a>
               <a href="#" className="p-3 border border-white/10 hover:bg-white/10 transition-colors"><Linkedin className="h-5 w-5" /></a>
               <a href="#" className="p-3 border border-white/10 hover:bg-white/10 transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-white/40">Services</h4>
              <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                <li><a href="#" className="hover:opacity-60">Automation Strategy</a></li>
                <li><a href="#" className="hover:opacity-60">Performance Engineering</a></li>
                <li><a href="#" className="hover:opacity-60">AI Testing Audit</a></li>
                <li><a href="#" className="hover:opacity-60">Manual Verification</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-white/40">Status</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  Systems Operational
                </div>
                <div className="p-4 border border-white/10 bg-white/5 rounded-sm">
                   <div className="text-[10px] font-black opacity-40 mb-2">LAST UPDATE</div>
                   <div className="text-xs font-mono">{new Date().toISOString().split('T')[0]} @ 14:22 GMT</div>
                </div>
              </div>
            </div>

            <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-white/40">Legal</h4>
               <ul className="space-y-4 text-xs font-bold uppercase tracking-tight opacity-40">
                  <li>© {new Date().getFullYear()} Arisha Mumtaz</li>
                  <li>Privacy Protocol</li>
                  <li>Security Policy</li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Terminal, Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/5 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-display font-bold text-lg">ARISHA.QA</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building the future of Quality Assurance through AI, automation, and rigorous testing methodologies.
            </p>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground font-mono">
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">Status</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                System Operational
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <Activity className="h-4 w-4 text-primary" />
                Latest Build: Passing
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Arisha Mumtaz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

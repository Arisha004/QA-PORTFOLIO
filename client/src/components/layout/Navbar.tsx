import { Link } from "wouter";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Playground", href: "#playground" },
    { name: "AI Tools", href: "#ai-tools" },
    { name: "Workflow", href: "#workflow" },
    { name: "Performance", href: "#performance" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/">
              <a className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
                <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground">ARISHA<span className="text-primary">.QA</span></span>
              </a>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm font-mono"
                >
                  {item.name}
                </a>
              ))}
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium font-mono"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

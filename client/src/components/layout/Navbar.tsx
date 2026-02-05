import { Link } from "wouter";
import { Terminal, LayoutGrid, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "MY JOURNEY", href: "#workflow" },
    { name: "TESTING TOOLS", href: "#ai-tools" },
    { name: "PRACTICE LAB", href: "#playground" },
    { name: "REPORTS", href: "#performance" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-md border-b border-border py-4" : "py-6 md:py-8"}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 md:gap-3 group">
            <div className="p-1.5 md:p-2 bg-primary text-primary-foreground group-hover:rotate-12 transition-transform">
              <Terminal className="h-4 w-4 md:h-5 md:h-5" />
            </div>
            <span className="font-display font-black text-lg md:text-xl tracking-tighter uppercase">Arisha<span className="text-muted-foreground">.QA</span></span>
          </a>
        </Link>
        
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] font-black tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase"
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button variant="outline" className="rounded-none border-primary font-black text-[10px] tracking-widest uppercase hover:bg-primary hover:text-primary-foreground px-8">
            CONTACT ME
          </Button>
        </div>

        <button 
          className="lg:hidden p-2 text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-background border-b border-border transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0"}`}>
        <div className="container-custom flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-black tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button className="rounded-none border-primary font-black text-[10px] tracking-widest uppercase h-12 w-full">
            CONTACT ME
          </Button>
        </div>
      </div>
    </nav>
  );
}

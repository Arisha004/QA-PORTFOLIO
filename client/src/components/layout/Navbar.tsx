import { Link } from "wouter";
import { Terminal, Menu, X, ShieldCheck } from "lucide-react";
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
    { name: "MY JOURNEY", href: "/#workflow" },
    { name: "TESTING TOOLS", href: "/#ai-tools" },
    { name: "PRACTICE LAB", href: "/#playground" },
    { name: "REPORTS", href: "/#performance" },
    { name: "CONNECT", href: "/#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      } else {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-md border-b border-black/10 py-3 shadow-sm" : "py-5 md:py-6 bg-white/50 backdrop-blur-sm"}`}>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} 
      />
      <div className="container-custom relative flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 md:gap-3 group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative p-1.5 md:p-2 bg-primary text-white transition-all duration-500 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:rotate-[360deg] group-hover:scale-110">
              <ShieldCheck className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2.5} />
              <div className="absolute inset-0 bg-white/10 rounded-xl animate-pulse" />
            </div>
            <span className={`font-display font-black text-lg md:text-xl tracking-tighter uppercase transition-colors text-black`}>ARISHA<span className="text-primary/60">.QA</span></span>
          </a>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-[9px] font-black tracking-[0.2em] uppercase transition-colors hover:text-primary text-black/70`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <button 
          className={`lg:hidden p-2 transition-colors text-black`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-black/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-screen opacity-100 py-8" : "max-h-0 opacity-0"}`}>
        <div className="container-custom flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-xs font-black tracking-[0.2em] text-black hover:text-primary transition-colors uppercase"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

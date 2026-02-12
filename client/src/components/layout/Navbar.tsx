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
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-white/20 backdrop-blur-md border-b border-black/10 py-4 shadow-sm" : "py-6 md:py-8"}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 md:gap-3 group">
            <div className="p-1.5 md:p-2 bg-primary text-black group-hover:rotate-12 transition-transform rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              <ShieldCheck className="h-4 w-4 md:h-5 md:h-5" />
            </div>
            <span className={`font-display font-black text-xl md:text-2xl tracking-tighter uppercase transition-colors ${isScrolled || isMobileMenuOpen ? "text-black" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}`}>ARISHA<span className="text-primary">.QA</span></span>
          </a>
        </Link>
        
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-colors hover:text-primary ${isScrolled ? "text-black" : "text-white drop-shadow-sm"}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <Button 
            variant="outline" 
            onClick={(e) => scrollToSection(e, "/#contact")}
            className={`rounded-none border-primary font-black text-[10px] tracking-widest uppercase px-8 transition-all hidden ${isScrolled ? "text-primary hover:bg-primary/10" : "text-primary border-primary hover:bg-primary/10"}`}
          >
            CONTACT ME
          </Button>
        </div>

        <button 
          className={`lg:hidden p-2 transition-colors ${isScrolled || isMobileMenuOpen ? "text-black" : "text-white"}`} 
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
          <Button 
            onClick={(e) => scrollToSection(e, "/#contact")}
            className="rounded-none border-primary bg-primary text-black font-black text-[10px] tracking-widest uppercase h-12 w-full hover:bg-transparent hover:text-primary transition-colors hidden"
          >
            CONTACT ME
          </Button>
        </div>
      </div>
    </nav>
  );
}

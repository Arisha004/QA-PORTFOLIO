import { Link } from "wouter";
import { Terminal, LayoutGrid } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ENGINE", href: "#ai-tools" },
    { name: "LAB", href: "#playground" },
    { name: "HISTORY", href: "#workflow" },
    { name: "AUDIT", href: "#performance" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "py-8"}`}>
      <div className="container-custom flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <div className="p-2 bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
              <Terminal className="h-5 w-5" />
            </div>
            <span className="font-display font-black text-xl tracking-tighter uppercase">Arisha<span className="text-muted-foreground">.QA</span></span>
          </a>
        </Link>
        
        <div className="hidden md:flex items-center gap-12">
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
            Get Protocol
          </Button>
        </div>

        <button className="md:hidden p-2">
          <LayoutGrid className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}

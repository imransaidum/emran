import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
        data-testid="scroll-progress"
      />
      
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3" : "bg-transparent py-5"
        }`}
        data-testid="navigation-header"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-display font-extrabold tracking-tight text-primary" data-testid="link-logo">
              Em Ran<span className="text-accent">.</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-${link.name.toLowerCase().replace(" ", "-")}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-4 border-l border-border pl-6">
                <button 
                  onClick={toggleTheme} 
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-theme-toggle"
                  aria-label="Toggle dark mode"
                >
                  {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <Button asChild size="sm" className="font-semibold rounded-md bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="#booking" data-testid="button-nav-cta">Book Consultation</a>
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center space-x-4 lg:hidden">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full text-muted-foreground hover:bg-muted"
                data-testid="button-mobile-theme-toggle"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-foreground"
                data-testid="button-mobile-menu-toggle"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background border-l border-border shadow-2xl p-6 lg:hidden flex flex-col"
            data-testid="mobile-menu-drawer"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-display font-extrabold text-primary">Em Ran<span className="text-accent">.</span></span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2" data-testid="button-close-mobile-menu">
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            
            <ul className="flex flex-col space-y-4 flex-1">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-foreground py-2 border-b border-border/50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button asChild className="w-full bg-primary" size="lg">
                  <a href="#booking" onClick={() => setMobileMenuOpen(false)}>Book Consultation</a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

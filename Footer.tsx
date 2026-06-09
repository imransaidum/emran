import React from "react";
import { Linkedin } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiTiktok, SiYoutube } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block text-3xl font-display font-extrabold tracking-tight mb-4">
              Em Ran<span className="text-accent">.</span>
            </a>
            <p className="text-muted-foreground/80 max-w-sm text-lg">
              Copy That Converts. Marketing That Grows.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-muted-foreground/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground/80 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-muted-foreground/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Socials</h4>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"><SiX className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/imransaidum" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"><SiFacebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"><SiInstagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"><SiYoutube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60">
          <p>© {currentYear} Em Ran. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

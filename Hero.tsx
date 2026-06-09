import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react";

function Counter({ end, suffix = "", prefix = "", duration = 2 }: { end: number, suffix?: string, prefix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      // easeOutQuart
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-extrabold text-foreground">
      {prefix}{count}{suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-muted px-3 py-1.5 rounded-full border border-border">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                <span className="text-sm font-medium text-muted-foreground">Available for new projects</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground leading-[1.1]">
                Helping Businesses <span className="text-primary">Attract Customers.</span><br />
                Through Strategic <span className="text-accent">Copywriting & Digital Marketing.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
                I'm Em Ran, a professional Copywriter and Digital Marketing Expert helping brands generate leads, increase sales, and build stronger customer relationships through persuasive marketing strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                <a href="#booking" data-testid="button-hero-primary-cta">
                  Schedule a Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-border hover:bg-muted">
                <a href="#portfolio" data-testid="button-hero-secondary-cta">
                  View My Work
                </a>
              </Button>
            </div>

            <div className="pt-8 border-t border-border flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium text-foreground">Certified Digital Marketer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium text-foreground">Google Ads Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm font-medium text-foreground">Meta Blueprint Certified</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Elegant Portrait Placeholder */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-gradient-to-br from-sidebar to-muted flex flex-col items-center justify-center group" data-testid="hero-portrait-placeholder">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-60 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              
              <div className="w-32 h-32 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white/20 mb-6 group-hover:scale-105 transition-transform duration-500">
                <span className="text-5xl font-display font-bold text-foreground">ER</span>
              </div>
              <div className="text-center z-10">
                <h3 className="text-2xl font-display font-bold text-foreground">Em Ran</h3>
                <p className="text-muted-foreground font-medium">Marketing Authority</p>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:left-0 bg-background rounded-2xl p-6 shadow-xl border border-border flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <Counter end={50} suffix="+" />
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-1">Projects Completed</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-12 -right-6 md:-right-4 bg-background rounded-2xl p-6 shadow-xl border border-border flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-baseline">
                  <Counter end={20} suffix="+" />
                </div>
                <p className="text-sm font-medium text-muted-foreground mt-1">Happy Clients</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

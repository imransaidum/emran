import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    form.reset();
    toast({
      title: "Subscribed successfully!",
      description: "Welcome to the weekly marketing insights.",
      variant: "default",
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4">
                Get Weekly Marketing Insights
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6">
                Join 2,000+ marketers and business owners getting actionable tips every Tuesday.
              </p>
              
              <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>No spam. Unsubscribe anytime.</span>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-6 shadow-lg border border-border">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="nl-name" className="text-sm font-medium text-foreground">First Name</label>
                    <Input id="nl-name" required placeholder="Jane" className="bg-muted text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="nl-email" className="text-sm font-medium text-foreground">Email Address</label>
                    <Input id="nl-email" type="email" required placeholder="jane@example.com" className="bg-muted text-foreground" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 font-bold text-base mt-2">
                    Subscribe Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

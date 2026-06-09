import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileCheck, Magnet, Search, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const resources = [
  {
    title: "Copywriting Checklist",
    description: "The 25-point checklist I use before publishing any piece of copy",
    icon: FileCheck,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Lead Generation Guide",
    description: "Step-by-step guide to building a lead gen system that runs on autopilot",
    icon: Magnet,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Marketing Audit Template",
    description: "Find the gaps in your marketing and fix them with this free audit",
    icon: Search,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Conversion Optimization Checklist",
    description: "50 things to test on your landing pages to boost conversions",
    icon: LayoutTemplate,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export function LeadMagnet() {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [activeResource, setActiveResource] = useState(resources[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOpen(false);
    toast({
      title: "Resource Sent!",
      description: `Check your email for the ${activeResource.title}.`,
      variant: "default",
    });
  };

  return (
    <section className="py-24 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4"
          >
            Free Marketing Growth Resources
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Download these proven resources and start growing your business today — no strings attached.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={i}
              className="bg-card rounded-2xl border border-border p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`w-16 h-16 rounded-2xl ${resource.bg} flex items-center justify-center ${resource.color} mb-6`}>
                <resource.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{resource.description}</p>
              
              <Dialog open={isOpen && activeResource.title === resource.title} onOpenChange={(open) => {
                setActiveResource(resource);
                setIsOpen(open);
              }}>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="w-full relative z-10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="w-4 h-4 mr-2" /> Download Free
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="font-display font-bold">Get Your Free Resource</DialogTitle>
                    <DialogDescription>
                      Enter your details below to receive the <span className="font-semibold text-foreground">{resource.title}</span> directly in your inbox.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">First Name</Label>
                      <Input id="name" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                    <Button type="submit" className="w-full bg-primary font-semibold mt-4">
                      Send Me This Resource
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

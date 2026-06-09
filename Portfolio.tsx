import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BarChart3, Mail, Megaphone, MonitorPlay, MousePointerClick, Target } from "lucide-react";

const categories = ["All", "Copywriting", "Digital Marketing", "Email", "Social Media"];

const projects = [
  {
    title: "E-commerce Sales Page Rewrite",
    client: "Retail Brand",
    category: "Copywriting",
    challenge: "Low conversion rates on hero product",
    result: "+340% conversion rate",
    icon: MousePointerClick
  },
  {
    title: "SaaS Lead Gen Campaign",
    client: "B2B Software Co",
    category: "Digital Marketing",
    challenge: "High CAC and low lead quality",
    result: "500+ qualified leads in 30 days",
    icon: Target
  },
  {
    title: "Email Drip Sequence",
    client: "Online Course Creator",
    category: "Email",
    challenge: "Poor onboarding engagement",
    result: "45% open rate, 12% CTR",
    icon: Mail
  },
  {
    title: "Real Estate Landing Pages",
    client: "Property Developer",
    category: "Copywriting",
    challenge: "Ineffective paid traffic destination",
    result: "3x more enquiries",
    icon: MonitorPlay
  },
  {
    title: "Facebook Ads Campaign",
    client: "Health Brand",
    category: "Social Media",
    challenge: "Scaling ad spend profitably",
    result: "8x ROAS",
    icon: Megaphone
  },
  {
    title: "Brand Voice & Website Copy",
    client: "Professional Services",
    category: "Copywriting",
    challenge: "Generic, uninspiring messaging",
    result: "+180% website engagement",
    icon: BarChart3
  }
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6"
            >
              Results That <span className="text-primary">Speak For Themselves</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              A selection of recent projects where strategic marketing delivered measurable business outcomes.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-foreground text-background" 
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(" ", "-")}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="group rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all"
                data-testid={`portfolio-item-${i}`}
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-sidebar to-muted relative flex items-center justify-center overflow-hidden border-b border-border">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                  <div className="w-16 h-16 rounded-full bg-background shadow-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">{project.client}</div>
                  <h4 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Challenge</span>
                      <p className="text-sm font-medium text-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Result</span>
                      <p className="text-sm font-bold text-success flex items-center gap-1">
                        {project.result}
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full justify-between group/btn">
                    View Case Study <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

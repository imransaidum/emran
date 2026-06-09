import React from "react";
import { motion } from "framer-motion";
import { PenTool, Target, Globe, Mail, Megaphone, ShoppingCart, Share2, FileText, Magnet, BarChart, Lightbulb, Zap } from "lucide-react";

const copyServices = [
  { title: "Sales Pages", description: "High-converting sales page copy that drives action", icon: Target },
  { title: "Landing Pages", description: "Focused landing pages built to capture leads", icon: Magnet },
  { title: "Website Copy", description: "Brand-aligned website copy that builds trust and converts", icon: Globe },
  { title: "Email Marketing", description: "Sequences and campaigns that nurture and sell", icon: Mail },
  { title: "Ad Copy", description: "Scroll-stopping ad copy for Facebook, Google, and more", icon: Megaphone },
  { title: "Product Descriptions", description: "Persuasive descriptions that sell features as benefits", icon: ShoppingCart },
];

const marketingServices = [
  { title: "Social Media Marketing", description: "Strategy and content that grows your audience", icon: Share2 },
  { title: "Content Marketing", description: "Authority-building content that attracts your ideal clients", icon: FileText },
  { title: "Lead Generation", description: "Multi-channel funnels that fill your pipeline", icon: Magnet },
  { title: "Funnel Strategy", description: "End-to-end funnel design that maximizes conversions", icon: Zap },
  { title: "Marketing Consulting", description: "Expert guidance on your marketing strategy", icon: Lightbulb },
  { title: "Campaign Management", description: "Done-for-you campaign execution and optimization", icon: BarChart },
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="w-14 h-14 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center text-foreground group-hover:text-primary transition-colors mb-6">
        <service.icon className="w-6 h-6" />
      </div>
      
      <h4 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h4>
      <p className="text-muted-foreground mb-6">{service.description}</p>
      
      <a href="#contact" className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
        Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6"
          >
            Services Designed To <span className="text-primary">Drive Growth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Comprehensive marketing solutions tailored to your business goals. From words that sell to strategies that scale.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <PenTool className="w-8 h-8 text-accent" />
              <h3 className="text-3xl font-display font-bold text-foreground">Copywriting</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {copyServices.map((s, i) => (
                <ServiceCard key={i} service={s} index={i} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <BarChart className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-display font-bold text-foreground">Digital Marketing</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {marketingServices.map((s, i) => (
                <ServiceCard key={i} service={s} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

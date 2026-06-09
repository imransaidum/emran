import React from "react";
import { motion } from "framer-motion";
import { Briefcase, DollarSign, Users, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-sidebar to-muted" data-testid="about-profile-placeholder">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-display font-bold text-muted-foreground/30">ER</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6">Meet Your Growth Partner</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                    Em Ran is a professional copywriter and digital marketing expert who helps businesses attract qualified leads, increase conversions, and grow revenue through persuasive messaging and strategic marketing campaigns.
                </p>
                <p>
                  By combining consumer psychology, conversion-focused copywriting, and data-driven marketing strategies, Em Ran helps brands strengthen their online presence, improve customer engagement, and achieve measurable business growth across multiple industries.
                </p>
                <p>
                  The approach is always data-driven, client-focused, and results-oriented.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <p className="text-xl font-display font-bold text-foreground italic relative z-10">
                "Every word I write has a purpose. Every campaign I run is built on strategy. My goal is simple — help your business grow, measurably."
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "Projects Completed", value: "10+", icon: Briefcase },
                { label: "Marketing Skills", value: "15+", icon: DollarSign },
                { label: "Industries Researched", value: "5+", icon: Users },
                { label: "Campaign Concepts", value: "20+", icon: Award },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col space-y-2">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

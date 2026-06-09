import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Conversion-Focused Strategies",
  "Persuasive Copywriting",
  "Data-Driven Marketing",
  "Strategic Thinking",
  "Clear Communication",
  "Client-Centered Approach",
  "ROI-Focused Execution",
  "Results-Oriented Mindset"
];

export function WhyMe() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-6"
          >
            Why Businesses Choose Em Ran
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {benefits.map((benefit, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl p-4 flex items-start gap-3 backdrop-blur-sm"
              >
                <div className="mt-0.5 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="font-semibold text-sm leading-tight">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary-foreground/5 rounded-2xl p-8 md:p-12 border border-primary-foreground/10 backdrop-blur-md"
          >
            <p className="text-2xl md:text-3xl font-display font-bold italic">
              "I don't just deliver work. I deliver measurable business outcomes."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

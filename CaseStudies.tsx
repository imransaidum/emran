import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "E-commerce Revenue Scale",
    challenge: "Low conversion rate (0.8%) on primary product pages despite high traffic.",
    strategy: "Full sales page rewrite focusing on emotional triggers + automated email sequences to recover abandoned carts.",
    result: "Conversion rate jumped to 3.5%, generating $180K in additional revenue over 90 days.",
    metrics: [
      { label: "Conversion Rate", value: "+337%" },
      { label: "Revenue", value: "$180K" },
      { label: "Timeframe", value: "90 Days" }
    ]
  },
  {
    title: "B2B Lead Generation Machine",
    challenge: "Inconsistent lead flow, high Customer Acquisition Cost (CAC), and low lead quality.",
    strategy: "Implemented a LinkedIn content strategy paired with a highly targeted lead magnet and automated nurturing funnel.",
    result: "500+ qualified leads generated, CAC reduced by 60%, resulting in a $1.2M pipeline built.",
    metrics: [
      { label: "Qualified Leads", value: "500+" },
      { label: "CAC Reduction", value: "-60%" },
      { label: "Pipeline Value", value: "$1.2M" }
    ]
  },
  {
    title: "Brand Awareness Campaign",
    challenge: "Unknown brand struggling to stand out in a highly competitive market.",
    strategy: "Integrated content marketing, social media presence, and PR-focused copywriting to establish authority.",
    result: "10K+ new followers, 300% increase in organic traffic, and the brand was featured in 5 major industry publications.",
    metrics: [
      { label: "New Followers", value: "10K+" },
      { label: "Organic Traffic", value: "+300%" },
      { label: "Features", value: "5 Pubs" }
    ]
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold mb-6"
          >
            Deep-Dive Into <span className="text-primary">Real Results</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground/80"
          >
            How strategic marketing solves complex business problems.
          </motion.p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={index}
              className="bg-card text-card-foreground rounded-3xl border border-border overflow-hidden flex flex-col lg:flex-row shadow-2xl"
              data-testid={`case-study-${index}`}
            >
              <div className="p-8 lg:p-12 lg:w-2/3 flex flex-col justify-center">
                <h3 className="text-3xl font-display font-bold mb-6">{study.title}</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-destructive mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-destructive"></div>
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      The Strategy
                    </h4>
                    <p className="text-muted-foreground">{study.strategy}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-success mb-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      The Result
                    </h4>
                    <p className="text-muted-foreground font-medium">{study.result}</p>
                  </div>
                </div>

                <div>
                  <Button variant="link" className="px-0 text-primary hover:text-primary/80 font-bold group">
                    Read Full Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
              
              <div className="lg:w-1/3 bg-muted p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border">
                <h4 className="font-display font-bold text-xl mb-8">Key Metrics</h4>
                <div className="space-y-8">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-sm text-primary">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-3xl font-display font-extrabold text-foreground">{metric.value}</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

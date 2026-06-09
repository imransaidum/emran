import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What industries do you work with?",
    answer: "E-commerce, SaaS, real estate, finance, health & wellness, education, professional services, and more. If your business needs more customers, I can help."
  },
  {
    question: "How much do your services cost?",
    answer: "Pricing is project-based and depends on scope, complexity, and timeline. Most clients invest between $500–$5,000 per project. Contact me for a custom quote."
  },
  {
    question: "How long do projects take?",
    answer: "A typical sales page takes 5–7 days. Landing pages 3–5 days. Full website copy 10–14 days. Email sequences vary by length. Timelines are discussed upfront."
  },
  {
    question: "Do you work internationally?",
    answer: "Yes. I work with clients across Africa, Europe, North America, and beyond. All work is delivered remotely via Zoom, email, and collaborative workspaces."
  },
  {
    question: "How does onboarding work?",
    answer: "After an initial consultation call, I send a brief questionnaire to understand your business, audience, and goals. Once I have what I need, I begin deep research and writing."
  },
  {
    question: "What results can I expect?",
    answer: "Results vary by project and industry, but my clients typically see 30–300% improvements in conversion rates, engagement, or qualified leads within the first 90 days."
  },
  {
    question: "How do we get started?",
    answer: 'Fill out the contact form below or click "Book a Consultation" to schedule a free 30-minute strategy call. We\'ll discuss your goals and see if we\'re a good fit.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-4"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about working together.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-border">
                <AccordionTrigger className="text-left font-display font-bold text-lg hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

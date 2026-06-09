import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/emran";

export function Booking() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="booking" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Free Strategy Call
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-5">
            Book Your Free <span className="text-primary">Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick a time that works for you. We'll spend 30 minutes discussing your business goals and how strategic copywriting and marketing can get you there faster.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
              <h3 className="text-xl font-display font-bold text-foreground">What to expect</h3>
              {[
                {
                  icon: Clock,
                  title: "30-minute strategy call",
                  desc: "No fluff — a focused conversation about your business and goals.",
                },
                {
                  icon: Video,
                  title: "Video or phone",
                  desc: "Join via Google Meet, Zoom, or a simple phone call — your choice.",
                },
                {
                  icon: CheckCircle,
                  title: "Tailored recommendations",
                  desc: "You'll leave with clear ideas on how to improve your marketing.",
                },
                {
                  icon: Calendar,
                  title: "Zero obligation",
                  desc: "This is a get-to-know-you call, not a hard sales pitch.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{title}</p>
                    <p className="text-muted-foreground text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-sm text-muted-foreground italic">
                "The strategy call alone gave me more clarity on my marketing than 6 months of trial and error."
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">— James Okonkwo, Founder, TechStack Africa</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              <div
                className="calendly-inline-widget"
                data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2563eb`}
                style={{ minWidth: "320px", height: "700px" }}
                data-testid="calendly-widget"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Powered by Calendly. All times shown in your local timezone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

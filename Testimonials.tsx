import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Em Ran completely transformed our email marketing. Our open rates went from 15% to 45% in just 60 days. The copy is brilliant and genuinely speaks to our customers.",
    author: "Sarah Adeyemi",
    title: "CEO, LuxFashion Nigeria",
    initials: "SA"
  },
  {
    quote: "The sales page Em Ran wrote for our software product generated $80,000 in its first month. Pure ROI from day one.",
    author: "James Okonkwo",
    title: "Founder, TechStack Africa",
    initials: "JO"
  },
  {
    quote: "Our Facebook ads were hemorrhaging money before Em Ran stepped in. Within 2 weeks, our ROAS went from 1.5x to 7.8x. Phenomenal results.",
    author: "Amaka Eze",
    title: "Marketing Director, HealthPlus",
    initials: "AE"
  },
  {
    quote: "The website copy Em Ran wrote finally explained what we do in a way our clients understand — and buy from us. Enquiries tripled.",
    author: "David Mensah",
    title: "MD, Apex Realty Group",
    initials: "DM"
  },
  {
    quote: "Working with Em Ran was the best investment we made this year. The lead generation campaign brought in more qualified leads in 30 days than we had all last quarter.",
    author: "Fatima Bello",
    title: "Head of Growth, EduTech Co.",
    initials: "FB"
  },
  {
    quote: "Em Ran's strategic thinking goes beyond copywriting. They understand business, not just words. Our brand has a completely different market position now.",
    author: "Chukwuemeka Obi",
    title: "Entrepreneur & Coach",
    initials: "CO"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (!emblaApi) return;
    
    // Auto play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-foreground">
          What <span className="text-primary">Clients Say</span>
        </h2>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-4" data-testid="testimonial-carousel">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 py-8">
            {testimonials.map((t, i) => (
              <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4" key={i}>
                <div className="bg-card border border-border rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow relative">
                  <div className="flex text-accent mb-6">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-foreground mb-8 line-clamp-4">
                    "{t.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{t.author}</div>
                      <div className="text-sm text-muted-foreground">{t.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

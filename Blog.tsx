import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Copywriting", "Digital Marketing", "Strategy"];

const posts = [
  {
    title: "7 Copywriting Secrets That Doubled My Clients' Conversion Rates",
    category: "Copywriting",
    excerpt: "Discover the psychological triggers and structural tweaks that turn average copy into a high-converting asset.",
    readTime: "5 min read",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "The Ultimate Guide to Lead Generation Funnels in 2025",
    category: "Digital Marketing",
    excerpt: "Stop wasting money on random ads. Learn how to build a cohesive funnel that predictably generates qualified leads.",
    readTime: "8 min read",
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Why 90% of Email Campaigns Fail (And How to Fix Yours)",
    category: "Digital Marketing",
    excerpt: "If your open rates are below 20%, you're making one of these three critical email marketing mistakes.",
    readTime: "4 min read",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Customer Psychology: The Science Behind High-Converting Copy",
    category: "Copywriting",
    excerpt: "People don't buy products, they buy better versions of themselves. Here's how to tap into that desire.",
    readTime: "6 min read",
    color: "from-rose-500/20 to-red-500/20"
  },
  {
    title: "How to Build a Marketing Strategy That Actually Generates Revenue",
    category: "Strategy",
    excerpt: "A strategy without execution is a hallucination. Learn the framework I use to build actionable, revenue-focused plans.",
    readTime: "7 min read",
    color: "from-indigo-500/20 to-cyan-500/20"
  },
  {
    title: "From Unknown to Authority: A Brand Building Blueprint",
    category: "Strategy",
    excerpt: "The exact steps required to position yourself or your company as the premium authority in your niche.",
    readTime: "5 min read",
    color: "from-fuchsia-500/20 to-pink-500/20"
  }
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = posts.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-extrabold text-foreground mb-6"
          >
            Marketing Insights & <span className="text-primary">Growth Strategies</span>
          </motion.h2>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post, i) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={post.title}
                className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`aspect-[16/9] bg-gradient-to-br ${post.color} relative overflow-hidden flex items-center justify-center border-b border-border`}>
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <div className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full text-sm font-bold text-foreground shadow-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center text-xs font-medium text-muted-foreground mb-4 gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <Button variant="link" className="px-0 font-semibold text-primary group-hover:text-primary/80">
                      Read Article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

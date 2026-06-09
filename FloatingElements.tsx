import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookie, setShowCookie] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading screen
    const timer = setTimeout(() => setLoading(false), 1500);

    // Cookie consent check
    if (!localStorage.getItem("cookieConsent")) {
      setShowCookie(true);
    }

    // Scroll listener for back to top
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowCookie(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
            data-testid="loading-screen"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-6xl font-display font-extrabold tracking-tighter text-foreground"
            >
              ER<span className="text-primary animate-pulse">.</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/2347039300206" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl"
        data-testid="button-whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp className="w-8 h-8" />
      </a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-40 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors"
            data-testid="button-back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookie && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 md:max-w-md bg-card border border-border p-4 rounded-xl shadow-2xl flex flex-col sm:flex-row gap-4 items-center justify-between"
            data-testid="cookie-banner"
          >
            <p className="text-sm text-muted-foreground">
              We use cookies to improve your experience and analyze site traffic.
            </p>
            <div className="flex gap-2 w-full sm:w-auto">
              <button onClick={() => setShowCookie(false)} className="p-2 text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
              <button 
                onClick={acceptCookies}
                className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-md whitespace-nowrap hover:bg-primary/90 flex-1 sm:flex-none"
              >
                Accept
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

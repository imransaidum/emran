import React from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/ThemeProvider";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { CaseStudies } from "@/components/CaseStudies";
import { WhyMe } from "@/components/WhyMe";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { LeadMagnet } from "@/components/LeadMagnet";
import { Newsletter } from "@/components/Newsletter";
import { FAQ } from "@/components/FAQ";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingElements } from "@/components/FloatingElements";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <div className="w-full min-h-[100dvh] bg-background flex flex-col relative">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <CaseStudies />
        <WhyMe />
        <Testimonials />
        <Blog />
        <LeadMagnet />
        <Newsletter />
        <FAQ />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold">404 Not Found</h1>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="emran-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

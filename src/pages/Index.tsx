import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsLogoStrip from "@/components/ProjectsLogoStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import NewsSection from "@/components/NewsSection";
import MemberCenterSection from "@/components/MemberCenterSection";
import MembershipCTASection from "@/components/MembershipCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      
      <main>
        <Hero />
        <ProjectsLogoStrip currentLang={currentLang} />
        <AboutSection currentLang={currentLang} />
        <ServicesSection currentLang={currentLang} />
        <EventsSection currentLang={currentLang} />
        <NewsSection currentLang={currentLang} />
        <MemberCenterSection currentLang={currentLang} />
        <MembershipCTASection currentLang={currentLang} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;

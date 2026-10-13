import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  AboutActivitiesSection,
  AboutContactSection,
  AboutGoalsSection,
  AboutHeroSection,
  AboutHistorySection,
  AboutOverviewSection,
  AboutServicesSection,
  AboutValuesSection,
  AboutVisionMissionSection,
} from "@/components/about/AboutBlueprintSections";
import "@/styles/bse-blueprint.css";

const AboutUs = () => {
  const { lang: currentLang, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />
      <main className="bse-blueprint">
        <AboutHeroSection currentLang={currentLang} />
        <AboutOverviewSection currentLang={currentLang} />
        <AboutHistorySection currentLang={currentLang} />
        <AboutVisionMissionSection currentLang={currentLang} />
        <AboutGoalsSection currentLang={currentLang} />
        <AboutValuesSection currentLang={currentLang} />
        <AboutActivitiesSection currentLang={currentLang} />
        <AboutServicesSection currentLang={currentLang} />
        <AboutContactSection currentLang={currentLang} />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;

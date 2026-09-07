import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSidebar, { SidebarSection } from "@/components/FloatingSidebar";
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

const sidebarSections: SidebarSection[] = [
  { id: "hero", icon: "home", label: "Home", labelAr: "الرئيسية" },
  { id: "stats", icon: "trendingUp", label: "Overview", labelAr: "التعريف" },
  { id: "milestones", icon: "calendar", label: "Milestones", labelAr: "إنجازاتنا" },
  { id: "vision", icon: "eye", label: "Our Vision", labelAr: "رؤيتنا" },
  { id: "mission", icon: "target", label: "Our Mission", labelAr: "رسالتنا" },
  { id: "values", icon: "heart", label: "Our Values", labelAr: "قيمنا" },
  { id: "goals", icon: "rocket", label: "Our Goals", labelAr: "أهدافنا" },
  { id: "services", icon: "award", label: "Our Services", labelAr: "خدماتنا" },
  { id: "contact", icon: "messageSquare", label: "Contact", labelAr: "تواصل معنا" },
];

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
      <FloatingSidebar sections={sidebarSections} currentLang={currentLang} />
      <Footer />
    </div>
  );
};

export default AboutUs;

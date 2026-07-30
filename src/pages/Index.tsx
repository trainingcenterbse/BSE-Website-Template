import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeSections from "@/components/home/HomeSections";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { dir } = useLanguage();

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />
      <main>
        <Hero />
        <HomeSections />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

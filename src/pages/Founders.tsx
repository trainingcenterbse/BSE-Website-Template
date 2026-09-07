import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FoundersHeroSection,
  FoundingStorySection,
  FoundationJourneySection,
  FoundersNamesSection,
  FoundersLegacySection,
} from "@/components/founders/FoundersBlueprintSections";
import "@/styles/bse-blueprint.css";

const Founders = () => {
  const { lang: currentLang, dir } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  const foundingStory = {
    year: '1978',
    title: currentLang === 'ar' ? 'قصة التأسيس' : 'The Founding Story',
    description: currentLang === 'ar'
      ? 'في عام 1978، اجتمع مجموعة من المهندسين الطموحين في البحرين لتحقيق حلم مشترك: إنشاء منظمة مهنية تجمع كل المهندسين البحرينيين. بدأ الأمر بمحادثات في مقهى صغير في المنامة، حيث كانوا يتبادلون الأفكار حول كيفية تطوير المهنة الهندسية في البلاد. بعد أشهر من التخطيط والعمل الدؤوب، تم تأسيس جمعية المهندسين البحرينية رسمياً في 15 نوفمبر 1978، لتصبح أول منظمة مهنية للمهندسين في مملكة البحرين.'
      : 'In 1978, a group of ambitious engineers in Bahrain gathered to achieve a shared dream: creating a professional organization that would unite all Bahraini engineers. It began with conversations in a small café in Manama, where they exchanged ideas about how to develop the engineering profession in the country. After months of planning and hard work, the Bahrain Society of Engineers was officially established on November 15, 1978, becoming the first professional organization for engineers in the Kingdom of Bahrain.',
    keyMoments: [
      {
        date: currentLang === 'ar' ? 'يناير 1978' : 'January 1978',
        event: currentLang === 'ar' ? 'أول اجتماع للمؤسسين' : 'First meeting of founders'
      },
      {
        date: currentLang === 'ar' ? 'يونيو 1978' : 'June 1978',
        event: currentLang === 'ar' ? 'إعداد النظام الأساسي' : 'Preparation of bylaws'
      },
      {
        date: currentLang === 'ar' ? 'نوفمبر 1978' : 'November 1978',
        event: currentLang === 'ar' ? 'التأسيس الرسمي للجمعية' : 'Official establishment of the society'
      },
      {
        date: currentLang === 'ar' ? 'ديسمبر 1978' : 'December 1978',
        event: currentLang === 'ar' ? 'انتخاب أول مجلس إدارة' : 'Election of first board of directors'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />
      
      <main className="bse-blueprint">
        <FoundersHeroSection currentLang={currentLang} />
        <FoundingStorySection currentLang={currentLang} foundingStory={foundingStory} />
        <FoundationJourneySection currentLang={currentLang} />
        <FoundersNamesSection currentLang={currentLang} />
        <FoundersLegacySection currentLang={currentLang} />
      </main>

      <Footer />
    </div>
  );
};

export default Founders;

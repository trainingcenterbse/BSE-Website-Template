import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, ArrowLeft, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CoinLogo3D from '@/components/CoinLogo3D';
import heroSkyline from '@/assets/hero-skyline.jpg';
import heroConference from '@/assets/hero-conference.jpg';
import heroTraining from '@/assets/hero-training.jpg';
import heroAward from '@/assets/hero-award.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { lang, t } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  const slides = [
    {
      id: 1,
      titleAr: 'جمعية المهندسين البحرينية',
      titleEn: 'Bahrain Society of Engineers',
      subAr: 'Bahrain Society of Engineers',
      subEn: 'جمعية المهندسين البحرينية',
      descAr: 'المنظمة المهنية الرائدة في مملكة البحرين، تأسست عام 1972 وتضم آلاف المهندسين من مختلف التخصصات.',
      descEn: 'The leading professional organisation in the Kingdom of Bahrain, founded in 1972 and home to thousands of engineers across all disciplines.',
      background: heroSkyline,
      dateAr: 'منذ عام 1972', dateEn: 'Since 1972',
      locAr: 'مملكة البحرين', locEn: 'Kingdom of Bahrain',
      hlAr: ['+5000 عضو', '+50 شريك', '+200 فعالية', '50 سنة خبرة'],
      hlEn: ['5000+ members', '50+ partners', '200+ events', '50 years of expertise'],
      ctaAr: 'اعرف المزيد', ctaEn: 'Learn more', href: '/about-us',
    },
    {
      id: 2,
      titleAr: 'مؤتمر MAINTCON الدولي',
      titleEn: 'MAINTCON International Conference',
      subAr: 'International Maintenance Conference',
      subEn: 'المؤتمر الدولي للصيانة',
      descAr: 'المؤتمر الدولي للصيانة والموثوقية وإدارة الأصول، بمشاركة خبراء عالميين وورش عمل متخصصة.',
      descEn: 'The international conference on maintenance, reliability and asset management, with global experts and specialised workshops.',
      background: heroConference,
      dateAr: 'مارس 2026', dateEn: 'March 2026',
      locAr: 'مركز الخليج للمؤتمرات', locEn: 'Gulf Convention Centre',
      hlAr: ['مؤتمر دولي', 'خبراء عالميون', 'ورش عمل', 'شبكات مهنية'],
      hlEn: ['International', 'Global experts', 'Workshops', 'Networking'],
      ctaAr: 'سجّل الآن', ctaEn: 'Register now', href: '/#events',
    },
    {
      id: 3,
      titleAr: 'مركز التدريب المعتمد',
      titleEn: 'The Accredited Training Center',
      subAr: 'Accredited Training Center',
      subEn: 'مركز التدريب المعتمد',
      descAr: 'برامج تدريبية معتمدة دولياً لتطوير المهارات الهندسية ورفع الكفاءة المهنية للمهندسين.',
      descEn: 'Internationally accredited programs that develop engineering skills and raise professional competence.',
      background: heroTraining,
      dateAr: 'برامج مستمرة', dateEn: 'Year-round programs',
      locAr: 'مقر الجمعية', locEn: 'Society headquarters',
      hlAr: ['دورات معتمدة', 'شهادات مهنية', 'تدريب عملي', 'مدربون خبراء'],
      hlEn: ['Accredited courses', 'Certifications', 'Hands-on training', 'Expert trainers'],
      ctaAr: 'استعرض الدورات', ctaEn: 'Browse courses', href: '/training-courses',
    },
    {
      id: 4,
      titleAr: 'يوم المهندس البحريني',
      titleEn: "Bahraini Engineer's Day",
      subAr: "Bahraini Engineer's Day",
      subEn: 'يوم المهندس البحريني',
      descAr: 'احتفاء سنوي بالمهندسين المتميزين والمشاريع الريادية التي تسهم في نهضة المملكة.',
      descEn: 'An annual celebration of outstanding engineers and pioneering projects contributing to the Kingdom’s progress.',
      background: heroAward,
      dateAr: 'أبريل من كل عام', dateEn: 'Every April',
      locAr: 'مملكة البحرين', locEn: 'Kingdom of Bahrain',
      hlAr: ['تكريم المهندسين', 'مشاريع ريادية', 'تواصل مهني', 'خدمة المجتمع'],
      hlEn: ['Honouring engineers', 'Pioneering projects', 'Networking', 'Community impact'],
      ctaAr: 'تفاصيل الفعالية', ctaEn: 'Event details', href: '/#events',
    },
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const s = slides[currentSlide];

  return (
    <section
      className="relative min-h-[92vh] overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={s.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img src={s.background} alt="" aria-hidden="true" className="w-full h-full object-cover brightness-[0.35]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)}
        aria-label={t('الشريحة السابقة', 'Previous slide')}
        className="absolute start-3 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-8 h-8 rtl:rotate-180" />
      </button>
      <button
        onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
        aria-label={t('الشريحة التالية', 'Next slide')}
        className="absolute end-3 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white transition-colors"
      >
        <ChevronRight className="w-8 h-8 rtl:rotate-180" />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 min-h-[92vh] grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7 }}
            className="text-white text-start"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{t(s.titleAr, s.titleEn)}</h1>
            <h2 className="text-xl md:text-2xl mb-4 text-blue-200 font-semibold">{t(s.subAr, s.subEn)}</h2>
            <p className="text-base md:text-xl mb-8 max-w-2xl text-gray-200">{t(s.descAr, s.descEn)}</p>

            <div className="flex flex-wrap gap-6 mb-6 text-sm md:text-base">
              <span className="flex items-center gap-2"><Calendar className="w-5 h-5" />{t(s.dateAr, s.dateEn)}</span>
              <span className="flex items-center gap-2"><MapPin className="w-5 h-5" />{t(s.locAr, s.locEn)}</span>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {(lang === 'ar' ? s.hlAr : s.hlEn).map((h) => (
                <span key={h} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm">
                  {h}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                <a href={s.href} className="flex items-center gap-2">
                  {t(s.ctaAr, s.ctaEn)}
                  <Arrow className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-2 border-white/40 bg-transparent text-white hover:bg-white hover:text-blue-900">
                <a href="/about-us" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  {t('فيديو تعريفي', 'Watch the intro')}
                </a>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3D spinning coin with the society emblem */}
        <div className="hidden lg:flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <CoinLogo3D size={320} />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-20 flex gap-2">
        {slides.map((sl, i) => (
          <button
            key={sl.id}
            onClick={() => setCurrentSlide(i)}
            aria-label={`${t('الشريحة', 'Slide')} ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/70'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

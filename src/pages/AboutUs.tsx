import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Building, Award, TrendingUp, Calendar, Target, Shield, Globe, ArrowRight, ArrowLeft, MapPin, Phone, Mail, Clock, Rocket, Eye, Heart, Star, CheckCircle, BookOpen, FileText, Briefcase, Radio, Handshake, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingSidebar, { SidebarSection } from "@/components/FloatingSidebar";

const AboutUs = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Note: FloatingSidebar handles its own intersection observers

  // Define sidebar sections for the AboutUs page
  const sidebarSections: SidebarSection[] = [
    { id: 'hero', icon: 'home', label: 'Home', labelAr: 'الرئيسية' },
    { id: 'stats', icon: 'trendingUp', label: 'Statistics', labelAr: 'إحصائيات' },
    { id: 'about', icon: 'info', label: 'About Us', labelAr: 'من نحن' },
    { id: 'milestones', icon: 'calendar', label: 'Milestones', labelAr: 'إنجازاتنا' },
    { id: 'vision', icon: 'eye', label: 'Our Vision', labelAr: 'رؤيتنا' },
    { id: 'mission', icon: 'target', label: 'Our Mission', labelAr: 'رسالتنا' },
    { id: 'values', icon: 'heart', label: 'Our Values', labelAr: 'قيمنا' },
    { id: 'goals', icon: 'rocket', label: 'Our Goals', labelAr: 'أهدافنا' },
    { id: 'services', icon: 'award', label: 'Our Services', labelAr: 'خدماتنا' },
    { id: 'contact', icon: 'messageSquare', label: 'Contact', labelAr: 'تواصل معنا' }
  ];

  // useInView for Framer Motion animations (separate from FloatingSidebar)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Users, value: "5000+", label: currentLang === 'ar' ? 'عضو' : 'Members' },
    { icon: Building, value: "50+", label: currentLang === 'ar' ? 'شريك' : 'Partners' },
    { icon: Award, value: "200+", label: currentLang === 'ar' ? 'حدث' : 'Events' },
    { icon: TrendingUp, value: "45", label: currentLang === 'ar' ? 'سنة' : 'Years' }
  ];

  const milestones = [
    {
      year: "1972",
      title: currentLang === 'ar' ? 'تأسيس الجمعية' : 'Society Foundation',
      description: currentLang === 'ar' 
        ? 'تأسست جمعية المهندسين البحرينية في سنة 1972'
        : 'Bahrain Society of Engineers was founded in 1972'
    },
    {
      year: "1992",
      title: currentLang === 'ar' ? 'إعادة التسجيل' : 'Re-registration',
      description: currentLang === 'ar'
        ? 'تم إعادة تسجيلها بتاريخ 15-3-92 تحت قيد م/ج/76 بمقتضى قانون الجمعيات و الأندية الاجتماعية والثقافية الخاضعة لإشراف وزارة العمل و الشئون الاجتماعية'
        : 'Re-registered on 15-3-92 under registration m/j/76 according to the law of societies, clubs and cultural associations under the supervision of the Ministry of Labor and Social Affairs'
    },
    {
      year: "1972",
      title: currentLang === 'ar' ? 'الإشهار الرسمي' : 'Official Registration',
      description: currentLang === 'ar'
        ? 'تم إشهار الجمعية رسمياً بالجريدة الرسمية بتاريخ 1 يوليو 1972'
        : 'Officially registered in the Official Gazette on July 1, 1972'
    }
  ];

  const services = [
    {
      icon: Award,
      title: currentLang === 'ar' ? 'الشهادات المهنية' : 'Professional Certifications',
      description: currentLang === 'ar'
        ? 'نقدم شهادات مهنية معتمدة عالمياً لتطوير مسيرتك المهنية'
        : 'We offer globally recognized professional certifications to advance your career'
    },
    {
      icon: Users,
      title: currentLang === 'ar' ? 'التطوير المهني' : 'Professional Development',
      description: currentLang === 'ar'
        ? 'برامج تدريبية وورش عمل لتطوير مهاراتك الهندسية'
        : 'Training programs and workshops to develop your engineering skills'
    },
    {
      icon: Globe,
      title: currentLang === 'ar' ? 'الشراكات الدولية' : 'International Partnerships',
      description: currentLang === 'ar'
        ? 'نتعاون مع منظمات هندسية عالمية لتوسيع فرص أعضائنا'
        : 'We collaborate with global engineering organizations to expand opportunities for our members'
    }
  ];

  const strategicGoals = [
    {
      icon: <Rocket className="w-8 h-8" />,
      goal: currentLang === 'ar' 
        ? 'توفير أعلى الخدمات لأعضاء الجمعية لضمان الفائدة القصوى للمهندسين.' 
        : 'Provide the highest services to society members to ensure maximum benefit for engineers.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      goal: currentLang === 'ar' 
        ? 'تمكين المهندس الوطني لأن يكون الخيار الأول لدعم الاقتصاد الوطني والتنمية المستدامة.' 
        : 'Empower the national engineer to be the first choice to support the national economy and sustainable development.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Award className="w-8 h-8" />,
      goal: currentLang === 'ar' 
        ? 'ريادة المهندس البحريني نحو مجتمع هندسي تنافسي عالمي.' 
        : 'Lead the Bahraini engineer towards a globally competitive engineering society.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Users className="w-8 h-8" />,
      goal: currentLang === 'ar' 
        ? 'كسب الاحترام والاعتراف من حيث الالتزام نحو المهنة والأعضاء والمجتمع.' 
        : 'Gain respect and recognition through commitment to the profession, members, and society.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Target className="w-8 h-8" />,
      goal: currentLang === 'ar' 
        ? 'رفع مستوى العمل الهندسي في القطاعين العام والخاص.' 
        : 'Raise the level of engineering work in the public and private sectors.',
      color: 'from-blue-600 to-blue-700'
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: currentLang === 'ar' ? 'النزاهة' : 'Integrity',
      description: currentLang === 'ar'
        ? 'نلتزم بأعلى معايير الأخلاق المهنية والشفافية في جميع تعاملاتنا'
        : 'We adhere to the highest standards of professional ethics and transparency in all our dealings'
    },
    {
      icon: Users,
      title: currentLang === 'ar' ? 'التعاون' : 'Collaboration',
      description: currentLang === 'ar'
        ? 'نعمل معاً كفريق واحد لتحقيق أهدافنا المشتركة'
        : 'We work together as one team to achieve our common goals'
    },
    {
      icon: Target,
      title: currentLang === 'ar' ? 'التميز' : 'Excellence',
      description: currentLang === 'ar'
        ? 'نسعى دائماً لتقديم أفضل الخدمات والبرامج الممكنة'
        : 'We always strive to provide the best possible services and programs'
    },
    {
      icon: Heart,
      title: currentLang === 'ar' ? 'الخدمة' : 'Service',
      description: currentLang === 'ar'
        ? 'نكرس أنفسنا لخدمة أعضائنا ومجتمعنا المهني'
        : 'We dedicate ourselves to serving our members and professional community'
    }
  ];

  const keyObjectives = [
    {
      title: currentLang === 'ar' ? 'تطوير المهارات' : 'Skills Development',
      description: currentLang === 'ar'
        ? 'توفير برامج تدريبية متقدمة وشهادات مهنية لتطوير قدرات المهندسين'
        : 'Provide advanced training programs and professional certifications to develop engineers\' capabilities'
    },
    {
      title: currentLang === 'ar' ? 'الشراكات الاستراتيجية' : 'Strategic Partnerships',
      description: currentLang === 'ar'
        ? 'بناء علاقات قوية مع المؤسسات الحكومية والخاصة والمنظمات الدولية'
        : 'Build strong relationships with government institutions, private sector, and international organizations'
    },
    {
      title: currentLang === 'ar' ? 'الابتكار والتقنية' : 'Innovation and Technology',
      description: currentLang === 'ar'
        ? 'تبني أحدث التقنيات والحلول المبتكرة في قطاع الهندسة'
        : 'Adopt the latest technologies and innovative solutions in the engineering sector'
    },
    {
      title: currentLang === 'ar' ? 'الاستدامة البيئية' : 'Environmental Sustainability',
      description: currentLang === 'ar'
        ? 'تعزيز الممارسات الهندسية المستدامة وحماية البيئة'
        : 'Promote sustainable engineering practices and environmental protection'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: currentLang === 'ar' ? 'العنوان' : 'Address',
      details: currentLang === 'ar' 
        ? 'مبنى جمعية المهندسين البحرينية، المنامة، مملكة البحرين'
        : 'Bahrain Society of Engineers Building, Manama, Kingdom of Bahrain'
    },
    {
      icon: Phone,
      title: currentLang === 'ar' ? 'الهاتف' : 'Phone',
      details: '+973 1722 0000'
    },
    {
      icon: Mail,
      title: currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email',
      details: 'info@bse.org.bh'
    },
    {
      icon: Clock,
      title: currentLang === 'ar' ? 'ساعات العمل' : 'Working Hours',
      details: currentLang === 'ar' 
        ? 'الأحد - الخميس: 8:00 ص - 5:00 م'
        : 'Sunday - Thursday: 8:00 AM - 5:00 PM'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir={currentLang === 'ar' ? 'rtl' : 'ltr'} ref={ref}>
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Bahrain Engineers Society Building" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-slate-900/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentLang === 'ar' ? 'من نحن' : 'About Us'}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {currentLang === 'ar'
                  ? 'جمعية المهندسين البحرينية - رائدة في دعم المهنة الهندسية منذ عام 1972'
                  : 'Bahrain Society of Engineers - Leading the engineering profession since 1972'
                }
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="relative py-10 lg:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-48 h-48 bg-gradient-to-br from-blue-600/10 to-slate-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-slate-600/10 to-blue-600/10 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                {currentLang === 'ar' ? 'إنجازاتنا' : 'Our Achievements'}
              </div>
            </motion.div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {currentLang === 'ar' ? 'أرقامنا تتحدث' : 'Our Numbers Speak'}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-4"
            />
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? '45+ عاماً من الخبرة والتميز في خدمة المهنة الهندسية'
                : '45+ years of experience and excellence in serving the engineering profession'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { value: '45+', label: currentLang === 'ar' ? 'سنة من الخبرة' : 'Years of Experience' },
              { value: '5000+', label: currentLang === 'ar' ? 'عضو نشط' : 'Active Members' },
              { value: '200+', label: currentLang === 'ar' ? 'فعالية سنوياً' : 'Annual Events' },
              { value: '50+', label: currentLang === 'ar' ? 'شريك استراتيجي' : 'Strategic Partners' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                className="relative text-center"
              >
                {/* Simple divider */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"></div>
                )}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-blue-100">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}

      {/* Society Nature Section */}
      <section id="about" className="relative py-20 lg:py-32 bg-white overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute inset-0">
          {/* Abstract Wave Shapes */}
          <motion.div
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-32"
          >
            <svg viewBox="0 0 1440 128" className="w-full h-full">
              <path
                d="M0,64 C360,96 720,32 1440,64 L1440,0 L0,0 Z"
                fill="url(#gradient1)"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          <motion.div
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-full h-32"
          >
            <svg viewBox="0 0 1440 128" className="w-full h-full">
              <path
                d="M0,64 C360,32 720,96 1440,64 L1440,128 L0,128 Z"
                fill="url(#gradient2)"
              />
              <defs>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#1e3a8a" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          
          {/* Floating Geometric Elements */}
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 15 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1
              }}
              className={`absolute w-16 h-16 border-2 ${index % 2 === 0 ? 'border-blue-900/20' : 'border-blue-600/20'} rounded-lg`}
              style={{
                left: `${15 + index * 18}%`,
                top: `${20 + index * 12}%`,
                transform: `rotate(${index * 45}deg)`
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                {currentLang === 'ar' ? 'هويتنا' : 'Our Identity'}
              </div>
            </motion.div>
            <h2 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 bg-clip-text text-transparent mb-8">
              {currentLang === 'ar' ? 'طبيعة الجمعية' : 'Society Nature'}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-900 to-blue-600 mx-auto mb-8"
            />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {currentLang === 'ar'
                ? 'هوية الجمعية ودورها في المجتمع الهندسي'
                : 'The identity of the society and its role in the engineering community'
              }
            </p>
          </motion.div>
          
          {/* Creative Split Layout Design */}
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative"
            >
              {/* Main Content Area with Split Design */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Diagonal Split Background */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-blue-900/5 to-blue-600/5"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-blue-600/5 to-blue-900/5"></div>
                </div>
                
                {/* Content Grid */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left Side - Visual Representation */}
                  <div className="relative p-12 lg:p-16 flex items-center justify-center">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileInView={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="relative w-48 h-48"
                    >
                      {/* Concentric Circles */}
                      {[3, 2, 1].map((level, index) => (
                        <motion.div
                          key={level}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                          className={`absolute inset-${4 - level} border-2 ${level === 1 ? 'border-blue-900' : level === 2 ? 'border-blue-700' : 'border-blue-500'} rounded-full`}
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          style={{
                            animation: `pulse ${3 + index}s ease-in-out infinite`
                          }}
                        />
                      ))}
                      
                      {/* Center Text */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 1, type: "spring" }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
                            BSE
                          </div>
                          <div className="text-sm text-gray-600 mt-1">
                            {currentLang === 'ar' ? '1972' : 'Since 1972'}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Right Side - Text Content */}
                  <div className="relative p-12 lg:p-16 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="space-y-6"
                    >
                      {/* Main Description */}
                      <div className="relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "60px" }}
                          transition={{ duration: 1, delay: 0.8 }}
                          className="h-1 bg-gradient-to-r from-blue-900 to-blue-600 mb-6"
                        />
                        <p className="text-2xl lg:text-3xl text-gray-800 leading-relaxed font-medium">
                          {currentLang === 'ar'
                            ? 'جمعية مهنية تطوعية تعنى بشئون قطاع المهندسين في البحرين وترعى مصالحهم وتسعى لتطوير قدراتهم من خلال برامجها الفنية والاجتماعية.'
                            : 'A voluntary professional association concerned with the affairs of the engineering sector in Bahrain, cares for their interests, and seeks to develop their capabilities through its technical and social programs.'
                          }
                        </p>
                      </div>
                      
                      {/* Key Values as Typography Elements */}
                      <div className="space-y-4 mt-8">
                        {[
                          {
                            ar: 'مهنية',
                            en: 'Professional',
                            color: 'from-blue-900 to-blue-700'
                          },
                          {
                            ar: 'تطوعية',
                            en: 'Voluntary',
                            color: 'from-blue-700 to-blue-600'
                          },
                          {
                            ar: 'تطوير',
                            en: 'Development',
                            color: 'from-blue-600 to-blue-500'
                          }
                        ].map((value, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                            whileHover={{ x: 10 }}
                            className="flex items-center space-x-4 space-x-reverse cursor-pointer"
                          >
                            <motion.div
                              animate={{ 
                                scale: [1, 1.2, 1],
                              }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                              className={`w-3 h-3 bg-gradient-to-r ${value.color} rounded-full`}
                            />
                            <span className={`text-lg font-semibold bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                              {currentLang === 'ar' ? value.ar : value.en}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Animated Progress Line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, delay: 1.8 }}
                        className="mt-8 h-1 bg-gradient-to-r from-blue-900/20 to-blue-600/20 rounded-full origin-left"
                      />
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 w-16 h-16 border-4 border-blue-900/10 rounded-full"
                />
                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-8 left-8 w-12 h-12 border-4 border-blue-600/10 rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section id="milestones" className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-br from-blue-600 to-slate-800" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.1) 35px, rgba(59, 130, 246, 0.1) 70px)' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-slate-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                {currentLang === 'ar' ? 'تاريخنا' : 'Our History'}
              </div>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent mb-6">
              {currentLang === 'ar' ? 'تأسيس الجمعية' : 'Society Foundation'}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-slate-600 to-blue-600 mx-auto mb-6"
            />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'رحلة تأسيس الجمعية وتطورها عبر الزمن'
                : 'The journey of founding the society and its development over time'
              }
            </p>
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Main Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-slate-600 via-blue-600 to-slate-600 origin-top"
            />
            
            {/* Timeline Glow Effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-20 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent blur-xl"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2"></div>
                
                {/* Enhanced Timeline Node */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.2, type: "spring" }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="relative z-20 w-16 h-16 bg-gradient-to-br from-slate-700 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-2xl border-4 border-white"
                >
                  <span className="text-sm">{milestone.year}</span>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-blue-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </motion.div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-100 hover:border-blue-200 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "60px" }}
                      transition={{ duration: 0.8, delay: index * 0.3 + 0.6 }}
                      className={`h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-600 to-slate-600' : 'from-slate-600 to-blue-600'} mb-4 ${index % 2 === 0 ? 'ml-auto' : ''}`}
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                {currentLang === 'ar' ? 'رؤيتنا ورسالتنا' : 'Our Vision & Mission'}
              </div>
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {currentLang === 'ar' ? 'مستقبلنا' : 'Our Future'}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "150px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-6"
            />
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'نحو مستقبل هندسي مشرق ومستدام'
                : 'Towards a bright and sustainable engineering future'
              }
            </p>
          </motion.div>

          {/* Professional Vision & Mission Section */}
          <div className="relative max-w-6xl mx-auto">
            <div className="space-y-8">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ y: -5 }}
                className="relative bg-gradient-to-r from-blue-600/10 to-slate-600/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="h-full w-full bg-gradient-to-r from-blue-600 to-slate-600" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.1) 35px, rgba(59, 130, 246, 0.1) 70px)' }}></div>
                </div>
                
                <div className="relative z-10 flex items-start gap-8">
                  {/* Vision Number */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                    className="flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-3xl font-bold text-white">01</span>
                    </div>
                  </motion.div>
                  
                  {/* Vision Content */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-3xl lg:text-4xl font-bold text-white mb-6"
                    >
                      {currentLang === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="text-lg lg:text-xl text-blue-50 leading-relaxed mb-6"
                    >
                      {currentLang === 'ar'
                        ? 'تحقيق التميز والتفوق بصفتنا هيئة مهنية هندسية رائدة تسعى وتعمل لكسب الاعتراف والسمعة الطيبة على المستوى الأقليمي والعالمي.'
                        : 'Achieving excellence and superiority as a leading professional engineering body that seeks and works to gain recognition and good reputation at the regional and global level.'
                      }
                    </motion.p>
                    
                    {/* Vision Pillars */}
                    <div className="flex flex-wrap gap-3">
                      {[
                        { text: currentLang === 'ar' ? 'تميز' : 'Excellence', color: 'bg-blue-500/20 border-blue-400/30' },
                        { text: currentLang === 'ar' ? 'ريادة' : 'Leadership', color: 'bg-slate-500/20 border-slate-400/30' },
                        { text: currentLang === 'ar' ? 'اعتراف عالمي' : 'Global Recognition', color: 'bg-blue-400/20 border-blue-300/30' }
                      ].map((pillar, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 ${pillar.color} backdrop-blur-sm rounded-full border text-white font-medium`}
                        >
                          {pillar.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ y: -5 }}
                className="relative bg-gradient-to-r from-slate-600/10 to-blue-600/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="h-full w-full bg-gradient-to-r from-slate-600 to-blue-600" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(71, 85, 105, 0.1) 35px, rgba(71, 85, 105, 0.1) 70px)' }}></div>
                </div>
                
                <div className="relative z-10 flex items-start gap-8">
                  {/* Mission Number */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                    className="flex-shrink-0"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-3xl font-bold text-white">02</span>
                    </div>
                  </motion.div>
                  
                  {/* Mission Content */}
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="text-3xl lg:text-4xl font-bold text-white mb-6"
                    >
                      {currentLang === 'ar' ? 'رسالتنا' : 'Our Mission'}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-lg lg:text-xl text-slate-50 leading-relaxed mb-6"
                    >
                      {currentLang === 'ar'
                        ? 'الجمعية الوطنية الرائدة التي تحتضن المهندسين من جميع التخصصات وتعمل على الإرتقاء بالمستوى المهني والتقني والعلمي للمهندسين.'
                        : 'The leading national society that embraces engineers from all disciplines and works to raise the professional, technical and scientific level of engineers.'
                      }
                    </motion.p>
                    
                    {/* Mission Pillars */}
                    <div className="flex flex-wrap gap-3">
                      {[
                        { text: currentLang === 'ar' ? 'احتضان' : 'Embrace', color: 'bg-slate-500/20 border-slate-400/30' },
                        { text: currentLang === 'ar' ? 'تطوير' : 'Development', color: 'bg-blue-500/20 border-blue-400/30' },
                        { text: currentLang === 'ar' ? 'تمكين' : 'Empowerment', color: 'bg-slate-400/20 border-blue-300/30' }
                      ].map((pillar, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-4 py-2 ${pillar.color} backdrop-blur-sm rounded-full border text-white font-medium`}
                        >
                          {pillar.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="mt-12 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-center"
            />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {currentLang === 'ar' ? 'رسالتنا' : 'Our Mission'}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'الجمعية الوطنية الرائدة التي تحتضن المهندسين من جميع التخصصات وتعمل على الإرتقاء بالمستوى المهني والتقني والعلمي للمهندسين.'
                : 'The leading national society that embraces engineers from all disciplines and works to raise the professional, technical and scientific level of engineers.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Goals Section */}
      <section id="goals" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50/30 overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-slate-900/5"></div>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-slate-500/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3 shadow-lg">
                {currentLang === 'ar' ? 'منصتنا الاستراتيجية' : 'Our Strategic Platform'}
              </div>
            </motion.div>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 to-slate-800 bg-clip-text text-transparent mb-4">
              {currentLang === 'ar' ? 'أهدافنا واستراتيجيتنا' : 'Our Goals & Strategy'}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-4"
            />
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'منصة متكاملة تعرض أهدافنا ورؤيتنا المستقبلية بطريقة عصرية وتفاعلية'
                : 'An integrated platform displaying our goals and future vision in a modern and interactive way'
              }
            </p>
          </motion.div>

          {/* Key Objectives - Top Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                {currentLang === 'ar' ? 'أهدافنا الرئيسية' : 'Our Key Objectives'}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {keyObjectives.map((objective, index) => (
                <motion.div
                  key={`key-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px -15px rgba(34, 197, 94, 0.3)"
                  }}
                  className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50 cursor-pointer group overflow-hidden"
                >
                  {/* Success Indicator */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.2 }}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 pr-12">{objective.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Orbital Display */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative mb-16"
          >
            {/* Central Hub */}
            <div className="relative h-96 flex items-center justify-center">
              {/* Central Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full shadow-2xl flex items-center justify-center z-20"
              >
                <div className="text-white text-center">
                  <div className="text-2xl font-bold mb-1">
                    {currentLang === 'ar' ? 'أهدافنا' : 'Our Goals'}
                  </div>
                  <div className="text-xs opacity-80">
                    {currentLang === 'ar' ? 'مركز التميز' : 'Excellence Hub'}
                  </div>
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0">
                {/* Society Objectives Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {[
                    { angle: 0, title: currentLang === 'ar' ? 'الصناعية' : 'Industrial' },
                    { angle: 60, title: currentLang === 'ar' ? 'الهندسة' : 'Engineering' },
                    { angle: 120, title: currentLang === 'ar' ? 'الحقوق' : 'Rights' },
                    { angle: 180, title: currentLang === 'ar' ? 'الزمالة' : 'Fellowship' },
                    { angle: 240, title: currentLang === 'ar' ? 'التعاون' : 'Cooperation' },
                    { angle: 300, title: currentLang === 'ar' ? 'الأبحاث' : 'Research' }
                  ].map((item, index) => (
                    <motion.div
                      key={`society-orbit-${index}`}
                      className="absolute w-20 h-20"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${item.angle}deg) translateX(140px) rotate(-${item.angle}deg)`
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
                        className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                      >
                        <span className="text-white text-xs font-bold text-center px-1">
                          {item.title}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Strategic Goals Orbit */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {strategicGoals.map((goal, index) => (
                    <motion.div
                      key={`strategic-orbit-${index}`}
                      className="absolute w-16 h-16"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${index * 72}deg) translateX(100px) rotate(-${index * 72}deg)`
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.3, boxShadow: "0 10px 30px -10px rgba(71, 85, 105, 0.5)" }}
                        className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                      >
                        <div className="text-white/80 transform scale-75">
                          {goal.icon}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Glow Effects */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {currentLang === 'ar' ? 'أهداف الجمعية' : 'Society Objectives'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full"></div>
                <span className="text-sm text-gray-600">
                  {currentLang === 'ar' ? 'أهداف استراتيجية' : 'Strategic Goals'}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Detailed Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Society Objectives - Accordion Style */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                <h3 className="text-white font-bold text-lg text-center">
                  {currentLang === 'ar' ? 'أهداف الجمعية' : 'Society Objectives'}
                </h3>
              </div>

              <div className="p-6 space-y-3">
                {[
                  {
                    title: currentLang === 'ar' ? 'تطوير النهضة الصناعية' : 'Industrial Development',
                    description: currentLang === 'ar'
                      ? 'المساهمة في تطوير النهضة الصناعية و العمرانية في البحرين.'
                      : 'Contribute to the development of industrial and urban renaissance in Bahrain.',
                    color: 'from-blue-500 to-blue-600'
                  },
                  {
                    title: currentLang === 'ar' ? 'تنظيم مهنة الهندسة' : 'Engineering Organization',
                    description: currentLang === 'ar'
                      ? 'المساهمة في تنظيم قواعد مهنة الهندسة و رفع مستواها بالتعاون مع الجهات الأخرى المختصة.'
                      : 'Contribute to organizing the rules of the engineering profession and raising its level in cooperation with other concerned authorities.',
                    color: 'from-purple-500 to-purple-600'
                  },
                  {
                    title: currentLang === 'ar' ? 'الحقوق المهنية' : 'Professional Rights',
                    description: currentLang === 'ar'
                      ? 'التعبير عن المصالح و الحقوق المهنية لأعضائها.'
                      : 'Express the professional interests and rights of its members.',
                    color: 'from-cyan-500 to-cyan-600'
                  },
                  {
                    title: currentLang === 'ar' ? 'روابط الود والزمالة' : 'Friendship and Fellowship',
                    description: currentLang === 'ar'
                      ? 'توثيق روابط الود و الزمالة بين أعضائها.'
                      : 'Strengthen bonds of friendship and fellowship among its members.',
                    color: 'from-green-500 to-green-600'
                  },
                  {
                    title: currentLang === 'ar' ? 'التعاون العلمي' : 'Scientific Cooperation',
                    description: currentLang === 'ar'
                      ? 'العمل علي توطيد الصلات و توثيق التعاون العلمي و الفني بين المهندسين في البحرين وبينهم و بين زملائهم في الدول العربية وباقي دول العالم.'
                      : 'Work to strengthen relations and enhance scientific and technical cooperation between engineers in Bahrain and their colleagues in Arab countries and other countries of the world.',
                    color: 'from-orange-500 to-orange-600'
                  },
                  {
                    title: currentLang === 'ar' ? 'الأبحاث الهندسية' : 'Engineering Research',
                    description: currentLang === 'ar'
                      ? 'القيام بالأبحاث الهندسية العلمية و العملية وتشجيعها عن طريق النشر والمسابقات والمؤتمرات والمحاضرات والزيارات العلمية.'
                      : 'Conduct scientific and practical engineering research and encourage it through publication, competitions, conferences, lectures, and scientific visits.',
                    color: 'from-pink-500 to-pink-600'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={`society-accordion-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="group cursor-pointer"
                  >
                    <div className={`bg-gradient-to-r ${item.color} p-0.5 rounded-lg`}>
                      <div className="bg-white rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <motion.div
                            animate={{ rotate: 0 }}
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300"
                          >
                            <ChevronDown className="w-full h-full" />
                          </motion.div>
                        </div>
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          whileHover={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-gray-600 leading-relaxed mt-2">
                            {item.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Goals - Grid Style */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4">
                <h3 className="text-white font-bold text-lg text-center">
                  {currentLang === 'ar' ? 'أهدافنا الاستراتيجية' : 'Our Strategic Goals'}
                </h3>
              </div>

              <div className="p-6 grid grid-cols-2 gap-4">
                {strategicGoals.map((goal, index) => (
                  <motion.div
                    key={`strategic-grid-${index}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)"
                    }}
                    className="relative group cursor-pointer rounded-xl overflow-hidden border border-slate-200/50 hover:border-slate-400/50 transition-all duration-300"
                  >
                    <div className="h-20 w-full relative bg-gradient-to-br from-slate-600 to-blue-600">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/30 transform scale-125">
                          {goal.icon}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white/90 backdrop-blur-sm">
                      <p className="text-xs font-medium text-gray-900 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                        {goal.goal}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Progress Indicator */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2.4 }}
            className="mt-16 h-px bg-gradient-to-r from-transparent via-blue-600/50 to-transparent origin-center"
          />
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Dark Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {currentLang === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'المبادئ التي توجهنا في كل ما نفعله'
                : 'The principles that guide us in everything we do'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-8 h-8" />, title: currentLang === 'ar' ? 'النزاهة' : 'Integrity', desc: currentLang === 'ar' ? 'الالتزام بأعلى معايير الأخلاق المهنية' : 'Commitment to highest professional ethics' },
              { icon: <Users className="w-8 h-8" />, title: currentLang === 'ar' ? 'التعاون' : 'Collaboration', desc: currentLang === 'ar' ? 'العمل معاً لتحقيق أهداف مشتركة' : 'Working together to achieve common goals' },
              { icon: <Rocket className="w-8 h-8" />, title: currentLang === 'ar' ? 'الابتكار' : 'Innovation', desc: currentLang === 'ar' ? 'تبني الأفكار الجديدة والحلول المبتكرة' : 'Embracing new ideas and innovative solutions' },
              { icon: <Globe className="w-8 h-8" />, title: currentLang === 'ar' ? 'الاستدامة' : 'Sustainability', desc: currentLang === 'ar' ? 'حماية البيئة وتعزيز التنمية المستدامة' : 'Protecting the environment and promoting sustainable development' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-blue-300 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-blue-100 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Society Activities Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Dark Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-600/20 to-slate-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1.3, 1, 1.3],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-slate-600/20 to-blue-600/20 rounded-full blur-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-blue-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                {currentLang === 'ar' ? 'أنشطتنا' : 'Our Activities'}
              </div>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {currentLang === 'ar' ? 'أنشطة الجمعية' : 'Society Activities'}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-6"
            />
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'الأنشطة والبرامج التي تقدمها الجمعية لأعضائها'
                : 'Activities and programs offered by the society to its members'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: currentLang === 'ar' ? 'المؤتمرات والندوات' : 'Conferences and Seminars',
                description: currentLang === 'ar'
                  ? 'تنظيم المؤتمرات و الندوات والمعارض الهندسية بصفة دورية.'
                  : 'Organize conferences, seminars and engineering exhibitions periodically.',
                bgImage: 'https://images.unsplash.com/photo-1540575471933-785c312c6e5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              },
              {
                title: currentLang === 'ar' ? 'دورات تدريبية' : 'Training Courses',
                description: currentLang === 'ar'
                  ? 'إعداد وتنفيذ دورات هندسية وإدارية لتدريب وتطوير الأعضاء.'
                  : 'Prepare and implement engineering and administrative courses to train members.',
                bgImage: 'https://images.unsplash.com/photo-1517486808955-946c240544a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              },
              {
                title: currentLang === 'ar' ? 'محاضرات وزيارات' : 'Lectures and Visits',
                description: currentLang === 'ar'
                  ? 'تنظيم المحاضر والزيارات الميدانية للأعضاء.'
                  : 'Organize lectures and field visits for members.',
                bgImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              },
              {
                title: currentLang === 'ar' ? 'النشرات والكتيبات' : 'Publications',
                description: currentLang === 'ar'
                  ? 'إعداد وتوزيع النشرات والتعميمات والكتيبات على الأعضاء.'
                  : 'Prepare and distribute bulletins and publications to members.',
                bgImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              },
              {
                title: currentLang === 'ar' ? 'خدمات التوظيف' : 'Employment Services',
                description: currentLang === 'ar'
                  ? 'تقديم خدمات التوظيف للأعضاء حسب العروض المتاحة.'
                  : 'Provide employment services to members according to available offers.',
                bgImage: 'https://images.unsplash.com/photo-1556761175-b413da4baf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              },
              {
                title: currentLang === 'ar' ? 'النشاط الإعلامي' : 'Media Activity',
                description: currentLang === 'ar'
                  ? 'إصدار مجلة دورية والنشرة الإلكترونية ونشر أخبار الجمعية.'
                  : 'Issue periodic magazine and electronic newsletter and publish society news.',
                bgImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  boxShadow: "0 40px 80px -20px rgba(0, 0, 0, 0.5)"
                }}
                className="relative group h-80 rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Full Background Image */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    backgroundImage: `url(${activity.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                
                {/* Content Area with Shadow */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <motion.h4 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
                    >
                      {activity.title}
                    </motion.h4>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="text-gray-200 text-sm leading-relaxed"
                    >
                      {activity.description}
                    </motion.p>
                  </div>
                </div>
                
                {/* Top Accent */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* Services Section */}
      <section id="services" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50/30 overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-slate-900/5"></div>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-slate-500/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3 shadow-lg">
                {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
              </div>
            </motion.div>
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 to-slate-800 bg-clip-text text-transparent mb-4">
              {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-4"
            />
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'كل ما تحتاجه لتطوير مسيرتك المهنية'
                : 'Everything you need to advance your professional career'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.3)"
                }}
                className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 text-center border border-blue-100/50 hover:border-blue-300/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-5">
                  <motion.div
                    animate={{ 
                      x: [0, 20, 0],
                      y: [0, -20, 0],
                    }}
                    transition={{ duration: 8 + index * 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-full bg-gradient-to-br from-blue-600 to-slate-800" 
                    style={{ 
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(59, 130, 246, 0.1) 15px, rgba(59, 130, 246, 0.1) 30px)' 
                    }}
                  ></motion.div>
                </div>
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto"
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-slate-600 text-white rounded-full text-sm font-medium hover:from-blue-700 hover:to-slate-700 transition-all duration-300 shadow-lg"
                  >
                    {currentLang === 'ar' ? 'المزيد' : 'Learn More'}
                    <ArrowRight className="w-4 h-4 mr-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'نحن هنا لمساعدتك والإجابة على استفساراتك'
                : 'We are here to help you and answer your inquiries'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/20 transition-all duration-300"
              >
                <info.icon className="w-8 h-8 text-blue-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-blue-100">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Sidebar Navigation */}
      <FloatingSidebar 
        sections={sidebarSections}
        currentLang={currentLang as 'ar' | 'en'}
      />

      <Footer />
    </div>
  );
};

export default AboutUs;

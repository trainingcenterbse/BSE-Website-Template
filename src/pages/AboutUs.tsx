import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Building, Award, TrendingUp, Calendar, Target, Shield, Globe, ArrowRight, MapPin, Phone, Mail, Clock, Rocket, Eye, Heart, Star, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      year: "1978",
      title: currentLang === 'ar' ? 'تأسيس الجمعية' : 'Society Foundation',
      description: currentLang === 'ar' 
        ? 'تأسست جمعية المهندسين البحرينية كأول جمعية مهنية للمهندسين في مملكة البحرين'
        : 'Bahrain Society of Engineers was founded as the first professional engineering society in the Kingdom of Bahrain'
    },
    {
      year: "1990",
      title: currentLang === 'ar' ? 'الاعتماد الرسمي' : 'Official Recognition',
      description: currentLang === 'ar'
        ? 'حصلت الجمعية على الاعتماد الرسمي من وزارة التنمية الاجتماعية'
        : 'The society received official recognition from the Ministry of Social Development'
    },
    {
      year: "2000",
      title: currentLang === 'ar' ? 'التوسع الدولي' : 'International Expansion',
      description: currentLang === 'ar'
        ? 'انضمت الجمعية إلى الاتحادات الهندسية الدولية وبدأت في بناء شراكات عالمية'
        : 'Joined international engineering federations and began building global partnerships'
    },
    {
      year: "2023",
      title: currentLang === 'ar' ? 'التحول الرقمي' : 'Digital Transformation',
      description: currentLang === 'ar'
        ? 'أطلقت الجمعية منصتها الرقمية الجديدة لخدمات الأعضاء والتدريب عبر الإنترنت'
        : 'Launched new digital platform for member services and online training'
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
        ? 'تمكين المهندس الوطني لأن يكون الخيار الأول لدعم الاقتصاد الوطني والتنمية المستدامة.' 
        : 'Empower the national engineer to be the first choice to support the national economy and sustainable development.',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      goal: currentLang === 'ar' 
        ? 'ريادة المهندس البحريني نحو مجتمع هندسي تنافسي عالمي.' 
        : 'Lead the Bahraini engineer towards a globally competitive engineering society.',
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: <Award className="w-8 h-8" />,
      goal: currentLang === 'ar' 
        ? 'كسب الاحترام والاعتراف من حيث الالتزام نحو المهنة والأعضاء والمجتمع.' 
        : 'Gain respect and recognition through commitment to the profession, members, and society.',
      color: 'from-green-600 to-green-700'
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
    <div className="min-h-screen bg-white" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {currentLang === 'ar' ? 'من نحن' : 'About Us'}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {currentLang === 'ar'
                ? 'جمعية المهندسين البحرينية - الرائدة في تطوير المهنة الهندسية منذ عام 1978'
                : 'Bahrain Society of Engineers - Leading engineering profession development since 1978'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentLang === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? '45 عاماً من الخدمة المتميزة لمجتمع الهندسة البحريني'
                : '45 years of distinguished service to the Bahraini engineering community'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentLang === 'ar' ? 'رؤيتنا ورسالتنا' : 'Our Vision & Mission'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'نحو مستقبل هندسي مشرق ومستدام'
                : 'Towards a bright and sustainable engineering future'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentLang === 'ar' ? 'رؤيتنا' : 'Our Vision'}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {currentLang === 'ar'
                  ? 'أن نكون الجمعية الهندسية الرائدة إقليمياً والمتميزة عالمياً في دعم وتطوير المهندسين والمساهمة في بناء اقتصاد معرفي مستدام.'
                  : 'To be the regionally leading and globally distinguished engineering society in supporting and developing engineers and contributing to building a sustainable knowledge economy.'
                }
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  {currentLang === 'ar' ? 'رسالتنا' : 'Our Mission'}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {currentLang === 'ar'
                  ? 'تمكين المهندسين من خلال التطوير المهني المستمر والشهادات المعتمدة والشراكات الاستراتيجية، مع الحفاظ على معايير الأخلاق المهنية والابتكار.'
                  : 'Empower engineers through continuous professional development, accredited certifications, and strategic partnerships while maintaining professional ethics and innovation standards.'
                }
              </p>
            </motion.div>
          </div>

          {/* Strategic Goals */}
          <div className="mb-20">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              {currentLang === 'ar' ? 'أهدافنا الاستراتيجية' : 'Our Strategic Goals'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategicGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${goal.color} rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="mb-6">{goal.icon}</div>
                  <p className="text-lg leading-relaxed">{goal.goal}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
              {currentLang === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300"
                >
                  <value.icon className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentLang === 'ar' ? 'رحلتنا عبر الزمن' : 'Our Journey Through Time'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? '45 عاماً من التميز في خدمة المهنة الهندسية'
                : '45 years of excellence in serving the engineering profession'
              }
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                  {milestone.year}
                </div>
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Objectives Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentLang === 'ar' ? 'أهدافنا الرئيسية' : 'Our Key Objectives'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'ما نسعى لتحقيقه لمجتمعنا المهني'
                : 'What we aim to achieve for our professional community'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyObjectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{objective.title}</h3>
                <p className="text-gray-600 leading-relaxed">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'كل ما تحتاجه لتطوير مسيرتك المهنية'
                : 'Everything you need to advance your professional career'
              }
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300"
              >
                <service.icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  {currentLang === 'ar' ? 'المزيد' : 'Learn More'}
                  <ArrowRight className="w-4 h-4 mr-2" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 to-blue-900">
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

      <Footer />
    </div>
  );
};

export default AboutUs;

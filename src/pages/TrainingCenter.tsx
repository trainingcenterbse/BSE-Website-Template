import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Target, Users, Award, BookOpen, Briefcase, Globe, Clock, CheckCircle, ArrowRight, Star, TrendingUp, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TrainingCenter = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: currentLang === 'ar' ? 'برامج معتمدة' : 'Accredited Programs',
      description: currentLang === 'ar' 
        ? 'برامج تدريبية معتمدة ومعترف بها من قبل أكبر المؤسسات التعليمية في العالم'
        : 'Training programs accredited and recognized by major educational institutions worldwide'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: currentLang === 'ar' ? 'تجهيزات متقدمة' : 'Advanced Facilities',
      description: currentLang === 'ar'
        ? 'تم تجهيز المركز بأحدث الأجهزة المتقدمة والضرورية لتسهيل عملية التعلم'
        : 'The center is equipped with the latest advanced devices necessary to facilitate learning'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: currentLang === 'ar' ? 'تدريب إقليمي' : 'Regional Training',
      description: currentLang === 'ar'
        ? 'يقدم مركز التدريب الدورات في البحرين وفي دول الخليج حسب أحدث المتطلبات'
        : 'The training center offers courses in Bahrain and Gulf countries according to latest requirements'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: currentLang === 'ar' ? 'اعتمادات دولية' : 'International Accreditations',
      description: currentLang === 'ar'
        ? 'اعتمادات من وزارة الأشغال واتحاد المهندسين العرب ومنظمات عالمية'
        : 'Accreditations from Ministry of Works, Arab Engineers Union, and international organizations'
    }
  ];

  const stats = [
    {
      number: '2003',
      label: currentLang === 'ar' ? 'سنة التأسيس' : 'Established',
      icon: <Clock className="w-6 h-6" />
    },
    {
      number: '1000+',
      label: currentLang === 'ar' ? 'متدرب سنوياً' : 'Trainees Yearly',
      icon: <Users className="w-6 h-6" />
    },
    {
      number: '50+',
      label: currentLang === 'ar' ? 'برنامج تدريبي' : 'Training Programs',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      number: '20+',
      label: currentLang === 'ar' ? 'اعتماد دولي' : 'International Accreditations',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const programs = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'تدريب الأفراد' : 'Individual Training',
      description: currentLang === 'ar'
        ? 'تدريب كافة إدارات المؤسسات والأفراد بما يضمن تأهيل الكوادر'
        : 'Training all departments and individuals to ensure qualification of cadres'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'البرامج التعاقدية' : 'Contract Programs',
      description: currentLang === 'ar'
        ? 'تصميم وتنفيذ برامج تدريبية متخصصة للمنظمات الحكومية والخاصة'
        : 'Designing and implementing specialized training programs for government and private organizations'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'برامج خاصة' : 'Special Programs',
      description: currentLang === 'ar'
        ? 'برنامج تمهيد ومشاريع بيئية واستراتيجيات وطنية'
        : 'Tamheed program and environmental projects and national strategies'
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
      
      <main>
        {/* Hero Section */}
        <section className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Training Center" 
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
                className="text-center"
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  {currentLang === 'ar' ? 'مركز التدريب' : 'Training Center'}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'تطوير المهارات الهندسية وبناء المستقبل المهني'
                    : 'Developing engineering skills and building professional futures'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-slate-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'عن المركز' : 'About the Center'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    {currentLang === 'ar'
                      ? 'قامت جمعية المهندسين البحرينية بتأسيس مركز التدريب لتنظيم دورات وورش عمل حول العديد من المواضيع الهامة في مجال الهندسة والأمور المتعلقة بالأمور الفنية والإدارية وتطوير الموارد البشرية.'
                      : 'The Bahrain Society of Engineers established the Training Center to organize courses and workshops on many important topics in the field of engineering and related technical, administrative, and human resources development matters.'
                    }
                  </p>
                  <p className="mb-6">
                    {currentLang === 'ar'
                      ? 'قد تم الترخيص له رسمياً من قبل وزارة العمل والشئون الاجتماعية بمملكة البحرين خلال عام 2003.'
                      : 'It was officially licensed by the Ministry of Labor and Social Affairs of the Kingdom of Bahrain during 2003.'
                    }
                  </p>
                  <p>
                    {currentLang === 'ar'
                      ? 'تم تجهيز المركز بأحدث الأجهزة المتقدمة والضرورية لتسهيل عملية التعلم والتكيف مع أحدث التقنيات.'
                      : 'The center has been equipped with the latest advanced devices necessary to facilitate the learning process and adapt to the latest technologies.'
                    }
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-slate-300/30 to-blue-300/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-slate-300/30 rounded-full blur-3xl animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'البرامج التدريبية' : 'Training Programs'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="text-white">
                        {program.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{program.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentLang === 'ar' ? 'انضم إلى برامجنا التدريبية' : 'Join Our Training Programs'}
              </h2>
              <p className="text-xl text-slate-100 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar'
                  ? 'اكتشف الفرص المتاحة لتطوير مهاراتك المهنية والارتقاء بمسيرتك الوظيفية'
                  : 'Discover available opportunities to develop your professional skills and advance your career path'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-slate-700 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {currentLang === 'ar' ? 'استعرض البرامج' : 'Browse Programs'}
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center">
                  {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrainingCenter;

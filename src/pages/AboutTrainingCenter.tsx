import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Target, Users, Award, BookOpen, Briefcase, Globe, Clock, CheckCircle, ArrowRight, Star, TrendingUp, Building, Calendar, Lightbulb, Eye, Handshake } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutTrainingCenter = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const establishmentInfo = {
    year: '2001',
    licensed: '2003',
    description: currentLang === 'ar'
      ? 'منذ نشأة جمعية المهندسين البحرينية، كان أحد أهدافها هو إعادة تأهيل المهارات المهنية للمهندسين، من خلال توفير الدورات التدريبية، الندوات، المؤتمرات، وغيرها، وكانت الزيادة المستمرة في عدد المهندسين العاملين في المملكة هو العامل الرئيسي الذي سبب القناعة لدى الجمعية لضرورة إنشاء مركز للتدريب في الجمعية والذي تم افتتاحه في العام 2001 م.'
      : 'Since the establishment of Bahrain Society of Engineers, one of its goals was to rehabilitate professional skills of engineers through providing training courses, seminars, conferences, and others. The continuous increase in the number of engineers working in the Kingdom was the main factor that convinced the Society of the necessity of establishing a training center in the Society, which was opened in 2001.'
  };

  const objectives = [
    {
      icon: <Users className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'العمل الجماعي' : 'Teamwork',
      description: currentLang === 'ar' ? 'تعزيز التعاون والعمل المشترك بين المتدربين' : 'Enhancing cooperation and joint work among trainees'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'الإبداع' : 'Creativity',
      description: currentLang === 'ar' ? 'تحفيز التفكير الإبداعي وحل المشكلات' : 'Stimulating creative thinking and problem solving'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'حل المشكلات' : 'Problem Solving',
      description: currentLang === 'ar' ? 'تطوير مهارات تحليل وحل المشكلات' : 'Developing analysis and problem solving skills'
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'الالتزام والتواصل' : 'Commitment & Communication',
      description: currentLang === 'ar' ? 'بناء علاقات قوية والتواصل الفعال' : 'Building strong relationships and effective communication'
    }
  ];

  const missionVision = {
    mission: currentLang === 'ar'
      ? 'تقديم برامج تطوير مهني عالية الجودة تمكن المشاركين من التقدم في حياتهم المهنية وتقديم مساهمات إيجابية لمجتمعاتهم.'
      : 'Providing high-quality professional development programs that enable participants to advance in their professional lives and make positive contributions to their communities.',
    vision: currentLang === 'ar'
      ? 'أن يكون المركز الرائد في التدريب المهني الهندسي في المنطقة.'
      : 'To be the leading center for engineering professional training in the region.'
  };

  const targetSectors = [
    { name: currentLang === 'ar' ? 'القطاع الخاص والعام' : 'Private and Public Sector', icon: <Building className="w-5 h-5" /> },
    { name: currentLang === 'ar' ? 'الاستشارات الهندسية' : 'Engineering Consulting', icon: <Briefcase className="w-5 h-5" /> },
    { name: currentLang === 'ar' ? 'الاتصالات وتكنولوجيا المعلومات' : 'Telecommunications & IT', icon: <Globe className="w-5 h-5" /> },
    { name: currentLang === 'ar' ? 'البترول والغاز' : 'Oil & Gas', icon: <TrendingUp className="w-5 h-5" /> },
    { name: currentLang === 'ar' ? 'الإنشاءات والتشييد' : 'Construction & Building', icon: <Building className="w-5 h-5" /> },
    { name: currentLang === 'ar' ? 'الصناعات الكيميائية' : 'Chemical Industries', icon: <Star className="w-5 h-5" /> },
    { name: currentLang === 'ar' ? 'الصناعات التحويلية' : 'Manufacturing Industries', icon: <Award className="w-5 h-5" /> },
    { name: currentLang === 'ar' ? 'الجامعات الحكومية والخاصة' : 'Public & Private Universities', icon: <GraduationCap className="w-5 h-5" /> }
  ];

  const trainingMethodology = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'محاضرات موجزة' : 'Brief Lectures',
      description: currentLang === 'ar' ? 'محاضرات مركزة وموجزة تغطي المفاهيم الأساسية' : 'Focused and brief lectures covering basic concepts'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'تمارين فردية وجماعية' : 'Individual & Group Exercises',
      description: currentLang === 'ar' ? 'تمارين عملية لتطبيق المفاهيم النظرية' : 'Practical exercises to apply theoretical concepts'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'أداء الأدوار' : 'Role Playing',
      description: currentLang === 'ar' ? 'محاكاة سيناريوهات واقعية للتطبيق العملي' : 'Simulating realistic scenarios for practical application'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'مناقشات جماعية' : 'Group Discussions',
      description: currentLang === 'ar' ? 'حوار وتبادل الأفكار بين المتدربين' : 'Dialogue and exchange of ideas among trainees'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'دراسة الحالات' : 'Case Studies',
      description: currentLang === 'ar' ? 'تحليل حالات واقعية من بيئة العمل' : 'Analysis of real cases from work environment'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'مشاريع عملية' : 'Practical Projects',
      description: currentLang === 'ar' ? 'تنفيذ مشاريع تطبيقية خلال التدريب' : 'Implementing applied projects during training'
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
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb74f289b3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="About Training Center" 
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
                  {currentLang === 'ar' ? 'عن مركز التدريب' : 'About Training Center'}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'تأسيس ورؤية ورسالة مركز التدريب'
                    : 'Establishment, Vision and Mission of Training Center'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Establishment Section */}
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
                {currentLang === 'ar' ? 'تأسيس المركز' : 'Center Establishment'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{establishmentInfo.year}</h3>
                <p className="text-gray-600">{currentLang === 'ar' ? 'سنة التأسيس' : 'Establishment Year'}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-3xl p-8 shadow-xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{establishmentInfo.licensed}</h3>
                <p className="text-gray-600">{currentLang === 'ar' ? 'سنة الترخيص' : 'Licensing Year'}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-xl text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentLang === 'ar' ? 'وزارة العمل' : 'Ministry of Labor'}</h3>
                <p className="text-gray-600">{currentLang === 'ar' ? 'جهة الترخيص' : 'Licensing Authority'}</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-3xl p-12 shadow-xl"
            >
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                {establishmentInfo.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Objectives Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'الأهداف' : 'Objectives'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {objectives.map((objective, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {objective.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-slate-300/30 to-blue-300/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-slate-300/30 rounded-full blur-3xl animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-10 shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentLang === 'ar' ? 'المهمة' : 'Mission'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {missionVision.mission}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-10 shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-slate-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentLang === 'ar' ? 'الرؤية' : 'Vision'}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {missionVision.vision}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Target Sectors Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'القطاعات المستهدفة' : 'Target Sectors'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetSectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-xl flex items-center justify-center ml-4 text-white flex-shrink-0">
                    {sector.icon}
                  </div>
                  <span className="text-gray-900 font-medium">{sector.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Methodology Section */}
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
                {currentLang === 'ar' ? 'منهجية التدريب' : 'Training Methodology'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar'
                  ? 'يعمل المركز من خلال منهج التكامل والشمولية لضمان أقصى درجات الفعالية في التدريب'
                  : 'The center works through integration and comprehensiveness methodology to ensure maximum training effectiveness'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainingMethodology.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="text-white">
                        {method.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutTrainingCenter;

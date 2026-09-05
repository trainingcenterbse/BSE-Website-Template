import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Calendar, BookOpen, Star, Heart, ArrowRight, Mail, Phone, MapPin, GraduationCap, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Founders = () => {
  const { lang, t } = useLanguage();
  const currentLang = lang;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const founders = [
    {
      id: 1,
      name: currentLang === 'ar' ? 'د. إبراهيم محمد العريض' : 'Dr. Ibrahim Mohammed Al-Araidh',
      title: currentLang === 'ar' ? 'رئيس الجمعية المؤسس' : 'Founding President',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'د. إبراهيم العريض هو أحد رواد الهندسة المدنية في البحرين، قاد جهود تأسيس الجمعية عام 1978 وكان أول رئيس لها. عمل على تطوير البنية التحتية في البحرين لأكثر من 40 عاماً.'
        : 'Dr. Ibrahim Al-Araidh is one of the pioneers of civil engineering in Bahrain, led the efforts to establish the society in 1978 and was its first president. He worked on developing infrastructure in Bahrain for over 40 years.',
      achievements: [
        currentLang === 'ar' ? 'تأسيس جمعية المهندسين البحرينية' : 'Establishing the Bahrain Society of Engineers',
        currentLang === 'ar' ? 'قيادة مشاريع البنية التحتية الوطنية' : 'Leading national infrastructure projects',
        currentLang === 'ar' ? 'تدريب جيل من المهندسين البحرينيين' : 'Training a generation of Bahraini engineers',
        currentLang === 'ar' ? 'المساهمة في تطوير معايير السلامة' : 'Contributing to safety standards development'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في الهندسة المدنية - جامعة لندن' : 'PhD in Civil Engineering - University of London',
        currentLang === 'ar' ? 'ماجستير في هندسة الإنشاءات - جامعة البحرين' : 'Master in Construction Engineering - University of Bahrain',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية - جامعة البحرين' : 'Bachelor in Civil Engineering - University of Bahrain'
      ],
      contact: {
        email: 'ibraheem.alaraidth@bse.org.bh',
        phone: '+973 1722 0001',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain',
      }
    },
    {
      id: 2,
      name: currentLang === 'ar' ? 'د. خالد أحمد الخليفة' : 'Dr. Khalid Ahmed Al-Khalifa',
      title: currentLang === 'ar' ? 'نائب الرئيس المؤسس' : 'Founding Vice President',
      specialization: currentLang === 'ar' ? 'هندسة كهربائية' : 'Electrical Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'د. خالد الخليفة هو خبير في مجال هندسة الطاقة، ساهم في تطوير قطاع الكهرباء في البحرين وكان من أبرز المؤسسين للجمعية. شغل مناصب قيادية في شركات الطاقة الوطنية.'
        : 'Dr. Khalid Al-Khalifa is an expert in energy engineering, contributed to the development of the electricity sector in Bahrain and was one of the prominent founders of the society. Held leadership positions in national energy companies.',
      achievements: [
        currentLang === 'ar' ? 'تطوير شبكة الكهرباء الوطنية' : 'Developing national electricity grid',
        currentLang === 'ar' ? 'تأسيس قسم الهندسة الكهربائية في الجامعة' : 'Establishing electrical engineering department at university',
        currentLang === 'ar' ? 'قيادة مشاريع الطاقة المتجددة' : 'Leading renewable energy projects',
        currentLang === 'ar' ? 'المشاركة في تأسيس الجمعية' : 'Participating in society establishment'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في هندسة الطاقة - جامعة مانشستر' : 'PhD in Energy Engineering - University of Manchester',
        currentLang === 'ar' ? 'ماجستير في الهندسة الكهربائية - جامعة الخليج' : 'Master in Electrical Engineering - Gulf University',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة الكهربائية - جامعة البحرين' : 'Bachelor in Electrical Engineering - University of Bahrain'
      ],
      contact: {
        email: 'khalid.alkhalifa@bse.org.bh',
        phone: '+973 1722 0002',
        location: currentLang === 'ar' ? 'المحرق، البحرين' : 'Muharraq, Bahrain',
      }
    },
    {
      id: 3,
      name: currentLang === 'ar' ? 'أ. فاطمة عبدالله المحمود' : 'Eng. Fatima Abdullah Al-Mahmoud',
      title: currentLang === 'ar' ? 'أمين السر المؤسس' : 'Founding Secretary',
      specialization: currentLang === 'ar' ? 'هندسة معمارية' : 'Architectural Engineering',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'أ. فاطمة المحمود هي أول مهندسة معمارية انضمت إلى الجمعية، ساهمت في تطوير معايير التصميم المعماري في البحرين. عملت على تصميم العديد من المشاريع المميزة.'
        : 'Eng. Fatima Al-Mahmoud is the first female architect to join the society, contributed to developing architectural design standards in Bahrain. Worked on designing many distinguished projects.',
      achievements: [
        currentLang === 'ar' ? 'تصميم مبنى الجمعية الرئيسي' : 'Designing the society main building',
        currentLang === 'ar' ? 'تطوير معايير التصميم المعماري' : 'Developing architectural design standards',
        currentLang === 'ar' ? 'تمكين المرأة في قطاع الهندسة' : 'Empowering women in engineering sector',
        currentLang === 'ar' ? 'المشاركة في تأسيس الجمعية' : 'Contributing to society establishment'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في الهندسة المعمارية - جامعة الكويت' : 'Master in Architectural Engineering - Kuwait University',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المعمارية - جامعة البحرين' : 'Bachelor in Architectural Engineering - University of Bahrain',
        currentLang === 'ar' ? 'شهادة في التصميم الحضري - معهد MIT' : 'Certificate in Urban Design - MIT Institute'
      ],
      contact: {
        email: 'fatima.almahmoud@bse.org.bh',
        phone: '+973 1722 0003',
        location: currentLang === 'ar' ? 'الرفاع، البحرين' : 'Riffa, Bahrain'
      }
    },
    {
      id: 4,
      name: currentLang === 'ar' ? 'د. علي حسن الشيراوي' : 'Dr. Ali Hassan Al-Shirawi',
      title: currentLang === 'ar' ? 'أمين الصندوق المؤسس' : 'Founding Treasurer',
      specialization: currentLang === 'ar' ? 'هندسة ميكانيكية' : 'Mechanical Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'د. علي الشيراوي هو خبير في الهندسة الميكانيكية، ساهم في تطوير الصناعات البحرينية. كان مسؤولاً عن إدارة شؤون الجمعية المالية في سنواتها الأولى.'
        : 'Dr. Ali Al-Shirawi is an expert in mechanical engineering, contributed to the development of Bahraini industries. Was responsible for managing the society\'s financial affairs in its early years.',
      achievements: [
        currentLang === 'ar' ? 'تطوير الصناعات التحويلية' : 'Developing manufacturing industries',
        currentLang === 'ar' ? 'إدارة شؤون الجمعية المالية' : 'Managing society financial affairs',
        currentLang === 'ar' ? 'تأسيس قسم الهندسة الميكانيكية' : 'Establishing mechanical engineering department',
        currentLang === 'ar' ? 'المشاركة في تأسيس الجمعية' : 'Participating in society establishment'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في الهندسة الميكانيكية - جامعة تكساس' : 'PhD in Mechanical Engineering - University of Texas',
        currentLang === 'ar' ? 'ماجستير في الهندسة الصناعية - جامعة البحرين' : 'Master in Industrial Engineering - University of Bahrain',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة الميكانيكية - جامعة البحرين' : 'Bachelor in Mechanical Engineering - University of Bahrain'
      ],
      contact: {
        email: 'ali.alshirawi@bse.org.bh',
        phone: '+973 1722 0004',
        location: currentLang === 'ar' ? 'عالي، البحرين' : 'Al Muharraq, Bahrain'
      }
    }
  ];

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
              src="/Founders.jpg" 
              alt="Bahrain Engineers Society Founders" 
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
                  {currentLang === 'ar' ? 'المؤسسون الأوائل' : 'The First Founders'}
                </h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-6"
                />
                <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'قصة تأسيس جمعية المهندسين البحرينية و الذين أسهموا في تأسيس هذا الصرح'
                    : 'The story of establishing the Bahrain Society of Engineers and the men who accomplished this great work'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founding Story Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50/30 overflow-hidden">
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
                  {currentLang === 'ar' ? 'قصة التأسيس' : 'Foundation Story'}
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-900 to-slate-800 bg-clip-text text-transparent mb-4">
                {foundingStory.title}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-blue-600 to-slate-600 mx-auto mb-4"
              />
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar'
                  ? 'الظروف والعوامل التي أدت إلى تأسيس جمعية المهندسين البحرينية'
                  : 'The circumstances and factors that led to the establishment of the Bahrain Society of Engineers'
                }
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl font-bold text-blue-700 mb-4">{foundingStory.year}</div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {foundingStory.description}
                  </p>
                </div>
                
                <div className="space-y-4">
                  {foundingStory.keyMoments.map((moment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className="flex items-center bg-blue-50 rounded-xl p-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-blue-700 mb-1">{moment.date}</div>
                        <div className="text-gray-700">{moment.event}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Foundation Journey Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
          {/* Dark Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.3, 1, 1.3],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
              className="absolute bottom-20 right-20 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-slate-900/40"></div>
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
                <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3 shadow-lg backdrop-blur-sm">
                  {currentLang === 'ar' ? 'رحلة التأسيس' : 'Foundation Journey'}
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                {currentLang === 'ar' ? 'رحلة التأسيس' : 'The Foundation Journey'}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-4"
              />
              <p className="text-sm text-blue-100 max-w-2xl mx-auto">
                {currentLang === 'ar'
                  ? 'التفاصيل الكاملة لرحلة تأسيس جمعية المهندسين البحرينية'
                  : 'Complete details of the Bahrain Society of Engineers foundation journey'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center text-white mb-4"
                >
                  <Users className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {currentLang === 'ar' ? 'قبل التأسيس' : 'Before Foundation'}
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  قبل العام 1972 م، كان مجتمع الهندسة أو المهندسين في البحرين يشكلان مجموعتين منفصلتين، واحدة تضم في الغالب المهندسين الأوروبيين العاملين في شركة نفط البحرين المحدودة (بابكو) والتي تأسست في العام 1929 م وبدأت بإنتاج النفط بكميات تجارية من حقل البحرين منذ يونيو 1932 م، ومجموعة ثانية تضم 22 من المهندسين البحرينيين، وكانت هذه المجموعة تجتمع من وقت لآخر في نادي الخريجين الذي كان يستقطب خريجي الجامعات من البحرينيين بمختلف تخصصاتهم العلمية، ومنها تخصص الهندسة بمختلف فروعها.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center text-white mb-4"
                >
                  <Award className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {currentLang === 'ar' ? 'عوامل التأسيس' : 'Foundation Factors'}
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  ومما لا شك فيه أن عوامل عديدة أثرت في ظهور الحاجة لتأسيس الجمعية، ومن تلك العوامل الشعور الوطني الذي عمّ البلاد بعد الاستقلال عن بريطانيا في العام 1971 م، وكذلك الشعور بالحاجة للتمثيل المِهْني لهذا المجتمع الهندسي الصغير والذي بدأ يتنامى في البلاد مع عودة العديد من خريجي التخصصات الهندسية المختلفة إلى البلاد من المهندسين البحرينيين الذين شعروا بالحاجة إلى التمثيل المهني، من خلال إنشاء جمعية غير سياسية لتمثيل احتياجاتهم المهنية.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center text-white mb-4"
                >
                  <Shield className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {currentLang === 'ar' ? 'المباركة الرسمية' : 'Official Blessing'}
                </h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  استطاع المؤسسون في الأشهر التي سبقت تأسيس الجمعية، الحصول على مباركة القيادة والحكومة، لتأسيس الجمعية وتأمين الدعم عالي المستوى والصادق لمساعي التأسيس، فحصلوا على التشجيع والتحفيز لتشكيل الجمعية، وقد صدر التصريح الأول من وزير العمل والشؤون الاجتماعية وكان الوزير آنذاك سعادة الأستاذ جواد سالم العريض، فأصبحت جمعية المهندسين البحرينية جمعيةً مرخصاً لها اعتباراً من الأول من يوليو 1972 م، وهو تاريخ إعلان الإشهار.
                </p>
              </motion.div>
            </div>

            {/* Foundation Date Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-12 bg-gradient-to-r from-blue-800 to-slate-800 rounded-3xl p-8 shadow-2xl border border-white/10"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="inline-block"
                >
                  <div className="text-6xl font-bold text-white mb-2">1 يوليو 1972</div>
                  <p className="text-xl text-blue-200">
                    {currentLang === 'ar' 
                      ? 'تاريخ إعلان الإشهار الرسمي لجمعية المهندسين البحرينية'
                      : 'Official declaration date of the Bahrain Society of Engineers'
                    }
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founders Names Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50/30 overflow-hidden">
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
            {/* Large Founders Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/Founders.jpg" 
                  alt="BSE Founders" 
                  className="w-full h-auto object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-32"></div>
                <div className="absolute bottom-8 left-0 right-0 text-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {currentLang === 'ar' ? 'أسماء المؤسسين' : 'Founders Names'}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {currentLang === 'ar' ? 'مؤسسو جمعية المهندسين البحرينية - 1972' : 'Bahrain Society of Engineers Founders - 1972'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Names Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Standing Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 shadow-2xl border border-blue-700/30"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentLang === 'ar' ? 'الوقوف من اليمين' : 'Standing from Right'}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'سيف عيسى البنعلي',
                    'عيسى سيد خلف',
                    'سالم عبداالله المناعي',
                    'عبداالله محمد جمعة',
                    'جميل كاظم العلوي',
                    'إبراهيم خليل المؤيد',
                    'الدكتور عصام عبد الله فخرو',
                    'فاروق يوسف المؤيد',
                    'كاظم الهاشمي',
                    'سامي كيكسو'
                  ].map((name, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full ml-3"></div>
                        <span className="text-white text-sm font-medium">{name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Sitting Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/30"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {currentLang === 'ar' ? 'الجلوس من اليمين' : 'Sitting from Right'}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'عبد الرحمن أحمد فخرو',
                    'خالد بن عبداالله آل خليفة',
                    'علي محمد مراد',
                    'ماجد جواد الجشي',
                    'الدكتور عبداللطيف جاسم كانو',
                    'فويسفا فخرو',
                    'خالد عبد الرحمن المؤيد'
                  ].map((name, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-full ml-3"></div>
                        <span className="text-white text-sm font-medium">{name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
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
                <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-3 shadow-lg backdrop-blur-sm">
                  {currentLang === 'ar' ? 'إرثنا' : 'Our Legacy'}
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                {currentLang === 'ar' ? 'إرث المؤسسين' : 'The Founders\' Legacy'}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-4"
              />
              <p className="text-sm text-blue-100 max-w-2xl mx-auto">
                {currentLang === 'ar' 
                  ? 'القيم والمبادئ التي أسسوا عليها الجمعية لا تزال توجهنا اليوم'
                  : 'The values and principles they founded the society on still guide us today'
                }
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: currentLang === 'ar' ? 'الالتزام بالمهنة' : 'Commitment to Profession',
                  description: currentLang === 'ar'
                    ? 'وضعوا أسس المهنة الهندسية في البحرين وأرسوا معاييرها الأخلاقية'
                    : 'They laid the foundations of the engineering profession in Bahrain and established its ethical standards'
                },
                {
                  icon: Users,
                  title: currentLang === 'ar' ? 'تمكين الأجيال' : 'Empowering Generations',
                  description: currentLang === 'ar'
                    ? 'بنوا جسوراً للأجيال القادمة من المهندسين'
                    : 'They built bridges for future generations of engineers'
                },
                {
                  icon: Award,
                  title: currentLang === 'ar' ? 'التميز والريادة' : 'Excellence and Leadership',
                  description: currentLang === 'ar'
                    ? 'أرسوا قواعد التميز والريادة في المهنة الهندسية'
                    : 'They established the foundations of excellence and leadership in the engineering profession'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20"
                >
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: [0, 360] }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
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

export default Founders;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Calendar, BookOpen, Star, Heart, ArrowRight, Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Founders = () => {
  const [currentLang, setCurrentLang] = useState('ar');
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
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-600 via-blue-700 to-purple-800 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentLang === 'ar' ? 'المؤسسون' : 'The Founders'}
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                {currentLang === 'ar'
                  ? 'الرواد الذين وضعوا أساس جمعية المهندسين البحرينية ومهدوا الطريق للأجيال القادمة'
                  : 'The pioneers who laid the foundation of the Bahrain Society of Engineers and paved the way for future generations'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founding Story Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                <div className="mx-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {foundingStory.title}
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl font-bold text-purple-600 mb-4">{foundingStory.year}</div>
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
                      className="flex items-center bg-purple-50 rounded-xl p-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-purple-600 mb-1">{moment.date}</div>
                        <div className="text-gray-700">{moment.event}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founders Grid */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-blue-300/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'المؤسسون الأوائل' : 'The First Founders'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'القادة الذين وضعوا أساس نجاح الجمعية' : 'The leaders who laid the foundation for the society\'s success'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {founders.map((founder) => (
                <motion.div
                  key={founder.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.6, delay: founder.id * 0.2 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Profile Header */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-600 to-blue-600">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white">
                        {founder.specialization}
                      </span>
                    </div>
                  </div>
                  
                  {/* Profile Content */}
                  <div className="p-8 pt-20">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                      <p className="text-purple-600 font-medium mb-1">{founder.title}</p>
                      <div className="flex items-center justify-center text-gray-600 text-sm">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        {founder.specialization}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        {currentLang === 'ar' ? 'الإنجازات الرئيسية' : 'Key Achievements'}
                      </h4>
                      <div className="space-y-2">
                        {founder.achievements.slice(0, 3).map((achievement, index) => (
                          <div key={index} className="flex items-center text-gray-700 text-sm">
                            <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Education */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        {currentLang === 'ar' ? 'التعليم' : 'Education'}
                      </h4>
                      <div className="space-y-1">
                        {founder.education.slice(0, 2).map((edu, index) => (
                          <div key={index} className="flex items-center text-gray-700 text-sm">
                            <BookOpen className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{edu}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Contact */}
                    <div className="border-t pt-4">
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          <span className="line-clamp-1">{founder.contact.email}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{founder.contact.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{founder.contact.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentLang === 'ar' ? 'إرث المؤسسين' : 'The Founders\' Legacy'}
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
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
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-purple-100 leading-relaxed">{item.description}</p>
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

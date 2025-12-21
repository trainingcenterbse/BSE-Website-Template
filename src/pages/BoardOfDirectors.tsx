import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Calendar, Mail, Phone, MapPin, Briefcase, GraduationCap, Shield, ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BoardOfDirectors = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const boardMembers = [
    {
      id: 1,
      name: currentLang === 'ar' ? 'د. أحمد محمد الفارس' : 'Dr. Ahmed Mohammed Al-Faris',
      position: currentLang === 'ar' ? 'رئيس مجلس الإدارة' : 'Board President',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'د. أحمد الفارس هو مهندس مدني بارز بأكثر من 25 عاماً من الخبرة في مشاريع البنية التحتية الكبرى. يشغل منصب رئيس مجلس الإدارة منذ عام 2020 ويركز على تطوير المهنة الهندسية في البحرين.'
        : 'Dr. Ahmed Al-Faris is a prominent civil engineer with over 25 years of experience in major infrastructure projects. Has served as Board President since 2020 and focuses on developing the engineering profession in Bahrain.',
      experience: currentLang === 'ar' ? '25+ سنة' : '25+ years',
      achievements: [
        currentLang === 'ar' ? 'قيادة مشاريع البنية التحتية الوطنية' : 'Leading national infrastructure projects',
        currentLang === 'ar' ? 'تطوير برامج التدريب المهني' : 'Developing professional training programs',
        currentLang === 'ar' ? 'تعزيز الشراكات الدولية' : 'Enhancing international partnerships'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في الهندسة المدنية - جامعة لندن' : 'PhD in Civil Engineering - University of London',
        currentLang === 'ar' ? 'ماجستير في إدارة المشاريع - جامعة البحرين' : 'Master in Project Management - University of Bahrain'
      ],
      contact: {
        email: 'ahmed.alfaris@bse.org.bh',
        phone: '+973 1722 0101',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 2,
      name: currentLang === 'ar' ? 'أ. سارة عبدالله الحسن' : 'Eng. Sarah Abdullah Al-Hasan',
      position: currentLang === 'ar' ? 'نائبة الرئيس' : 'Vice President',
      specialization: currentLang === 'ar' ? 'هندسة معمارية' : 'Architectural Engineering',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'أ. سارة الحسن هي مهندسة معمارية رائدة في مجال التصميم المستدام. عملت على تصميم العديد من المشاريع الحائزة على جوائز وتساهم في تطوير معايير البناء الأخضر في البحرين.'
        : 'Eng. Sarah Al-Hasan is a leading architect in sustainable design. Has worked on designing many award-winning projects and contributes to developing green building standards in Bahrain.',
      experience: currentLang === 'ar' ? '18 سنة' : '18 years',
      achievements: [
        currentLang === 'ar' ? 'تصميم مشاريع مستدامة مبتكرة' : 'Designing innovative sustainable projects',
        currentLang === 'ar' ? 'تمكين المرأة في الهندسة' : 'Empowering women in engineering',
        currentLang === 'ar' ? 'تطوير معايير البناء الأخضر' : 'Developing green building standards'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في العمارة المستدامة - جامعة كولومبيا' : 'Master in Sustainable Architecture - Columbia University',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المعمارية - جامعة البحرين' : 'Bachelor in Architectural Engineering - University of Bahrain'
      ],
      contact: {
        email: 'sarah.alhasan@bse.org.bh',
        phone: '+973 1722 0102',
        location: currentLang === 'ar' ? 'المحرق، البحرين' : 'Muharraq, Bahrain'
      }
    },
    {
      id: 3,
      name: currentLang === 'ar' ? 'د. خالد أحمد النعيمي' : 'Dr. Khalid Ahmed Al-Naimi',
      position: currentLang === 'ar' ? 'أمين السر' : 'Secretary',
      specialization: currentLang === 'ar' ? 'هندسة كهربائية' : 'Electrical Engineering',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'د. خالد النعيمي هو خبير في هندسة الطاقة والأنظمة الكهربائية. عمل في تطوير شبكة الطاقة الوطنية ويساهم في مشاريع الطاقة المتجددة في البحرين.'
        : 'Dr. Khalid Al-Naimi is an expert in energy engineering and electrical systems. Has worked on developing the national power grid and contributes to renewable energy projects in Bahrain.',
      experience: currentLang === 'ar' ? '20 سنة' : '20 years',
      achievements: [
        currentLang === 'ar' ? 'تطوير شبكة الطاقة الوطنية' : 'Developing national power grid',
        currentLang === 'ar' ? 'مشاريع الطاقة المتجددة' : 'Renewable energy projects',
        currentLang === 'ar' ? 'تحديث معايير السلامة الكهربائية' : 'Updating electrical safety standards'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في هندسة الطاقة - جامعة مانشستر' : 'PhD in Energy Engineering - University of Manchester',
        currentLang === 'ar' ? 'ماجستير في الهندسة الكهربائية - جامعة البحرين' : 'Master in Electrical Engineering - University of Bahrain'
      ],
      contact: {
        email: 'khalid.alnaimi@bse.org.bh',
        phone: '+973 1722 0103',
        location: currentLang === 'ar' ? 'الرفاع، البحرين' : 'Riffa, Bahrain'
      }
    },
    {
      id: 4,
      name: currentLang === 'ar' ? 'أ. محمد علي الشمري' : 'Eng. Mohammed Ali Al-Shammari',
      position: currentLang === 'ar' ? 'أمين الصندوق' : 'Treasurer',
      specialization: currentLang === 'ar' ? 'هندسة ميكانيكية' : 'Mechanical Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'أ. محمد الشمري هو مهندس ميكانيكي متخصص في الصناعات التحويلية. يدير الشؤون المالية للجمعية ويشرف على الميزانية والمشاريع الاستثمارية.'
        : 'Eng. Mohammed Al-Shammari is a mechanical engineer specializing in manufacturing industries. Manages the society\'s financial affairs and oversees the budget and investment projects.',
      experience: currentLang === 'ar' ? '22 سنة' : '22 years',
      achievements: [
        currentLang === 'ar' ? 'إدارة الشؤون المالية للجمعية' : 'Managing society financial affairs',
        currentLang === 'ar' ? 'تطوير الصناعات التحويلية' : 'Developing manufacturing industries',
        currentLang === 'ar' ? 'تحسين كفاءة العمليات الصناعية' : 'Improving industrial operations efficiency'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في الهندسة الصناعية - جامعة البحرين' : 'Master in Industrial Engineering - University of Bahrain',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة الميكانيكية - جامعة البحرين' : 'Bachelor in Mechanical Engineering - University of Bahrain'
      ],
      contact: {
        email: 'mohammed.alshammari@bse.org.bh',
        phone: '+973 1722 0104',
        location: currentLang === 'ar' ? 'عالي، البحرين' : 'Al Muharraq, Bahrain'
      }
    },
    {
      id: 5,
      name: currentLang === 'ar' ? 'أ. فاطمة حسين الكواري' : 'Eng. Fatima Hussein Al-Kawari',
      position: currentLang === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member',
      specialization: currentLang === 'ar' ? 'هندسة كيميائية' : 'Chemical Engineering',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'أ. فاطمة الكواري هي مهندسة كيميائية متخصصة في معالجة المياه والبيئة. تعمل على تطوير حلول مستدامة لمعالجة المياه في البحرين.'
        : 'Eng. Fatima Al-Kawari is a chemical engineer specializing in water treatment and environmental engineering. Works on developing sustainable water treatment solutions in Bahrain.',
      experience: currentLang === 'ar' ? '15 سنة' : '15 years',
      achievements: [
        currentLang === 'ar' ? 'تطوير حلول معالجة المياه' : 'Developing water treatment solutions',
        currentLang === 'ar' ? 'المشاريع البيئية المستدامة' : 'Sustainable environmental projects',
        currentLang === 'ar' ? 'تحسين معايير جودة المياه' : 'Improving water quality standards'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في الهندسة البيئية - جامعة الخليج' : 'Master in Environmental Engineering - Gulf University',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة الكيميائية - جامعة البحرين' : 'Bachelor in Chemical Engineering - University of Bahrain'
      ],
      contact: {
        email: 'fatima.alkawari@bse.org.bh',
        phone: '+973 1722 0105',
        location: currentLang === 'ar' ? 'السوق، البحرين' : 'Souq, Bahrain'
      }
    },
    {
      id: 6,
      name: currentLang === 'ar' ? 'د. إبراهيم يوسف المحمود' : 'Dr. Ibrahim Youssef Al-Mahmoud',
      position: currentLang === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member',
      specialization: currentLang === 'ar' ? 'هندسة بترولية' : 'Petroleum Engineering',
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=face',
      bio: currentLang === 'ar'
        ? 'د. إبراهيم المحمود هو خبير في هندسة البترول والغاز. يعمل في تطوير تقنيات استكشاف وإنتاج النفط والغاز في البحرين.'
        : 'Dr. Ibrahim Al-Mahmoud is an expert in petroleum and gas engineering. Works on developing exploration and production technologies for oil and gas in Bahrain.',
      experience: currentLang === 'ar' ? '28 سنة' : '28 years',
      achievements: [
        currentLang === 'ar' ? 'تطوير تقنيات استكشاف النفط' : 'Developing oil exploration technologies',
        currentLang === 'ar' ? 'تحسين كفاءة الإنتاج' : 'Improving production efficiency',
        currentLang === 'ar' ? 'المشاريع البترولية الكبرى' : 'Major petroleum projects'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في هندسة البترول - جامعة تكساس' : 'PhD in Petroleum Engineering - University of Texas',
        currentLang === 'ar' ? 'ماجستير في الهندسة البترولية - جامعة البحرين' : 'Master in Petroleum Engineering - University of Bahrain'
      ],
      contact: {
        email: 'ibrahim.almahmoud@bse.org.bh',
        phone: '+973 1722 0106',
        location: currentLang === 'ar' ? 'الجفير، البحرين' : 'Juffair, Bahrain'
      }
    }
  ];

  const committees = [
    {
      name: currentLang === 'ar' ? 'لجنة التدريب والتطوير المهني' : 'Training and Professional Development Committee',
      chair: currentLang === 'ar' ? 'أ. سارة الحسن' : 'Eng. Sarah Al-Hasan',
      members: 5,
      focus: currentLang === 'ar' 
        ? 'تطوير برامج التدريب والشهادات المهنية للمهندسين'
        : 'Developing training programs and professional certifications for engineers'
    },
    {
      name: currentLang === 'ar' ? 'لجنة العلاقات الدولية' : 'International Relations Committee',
      chair: currentLang === 'ar' ? 'د. أحمد الفارس' : 'Dr. Ahmed Al-Faris',
      members: 4,
      focus: currentLang === 'ar'
        ? 'بناء الشراكات مع المنظمات الهندسية الدولية'
        : 'Building partnerships with international engineering organizations'
    },
    {
      name: currentLang === 'ar' ? 'لجنة الشؤون المالية' : 'Financial Affairs Committee',
      chair: currentLang === 'ar' ? 'أ. محمد الشمري' : 'Eng. Mohammed Al-Shammari',
      members: 3,
      focus: currentLang === 'ar'
        ? 'إدارة ميزانية الجمعية والمشاريع الاستثمارية'
        : 'Managing the society budget and investment projects'
    },
    {
      name: currentLang === 'ar' ? 'لجنة المعايير الأخلاقية' : 'Ethics Standards Committee',
      chair: currentLang === 'ar' ? 'د. خالد النعيمي' : 'Dr. Khalid Al-Naimi',
      members: 4,
      focus: currentLang === 'ar'
        ? 'وضع ومراقبة معايير الأخلاق المهنية للمهندسين'
        : 'Establishing and monitoring professional ethics standards for engineers'
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
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                {currentLang === 'ar'
                  ? 'القادة الذين يوجهون جمعية المهندسين البحرينية نحو مستقبل مشرق'
                  : 'The leaders guiding the Bahrain Society of Engineers towards a bright future'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'أعضاء مجلس الإدارة' : 'Board Members'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'فريق من القادة المتخصصين من مختلف التخصصات الهندسية' : 'A team of specialized leaders from various engineering disciplines'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.6, delay: member.id * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Profile Header */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-600 to-indigo-600">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 rounded-full border-4 border-white shadow-xl"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 pyyin-1.
                        
                        
                        
                        
                        
izu

                        py-iena
                        rounded-full.
                        full text-xs font-bold 
            
                        bold bg-white/20 backdrop-blur-sm text-white">
                        {member.specialization}
                      </span>
                    </div>
                  </div>
                  
                  {/* Profile Content */}
                  <div className="p-8 pt-20">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-blue-600 font-medium mb-1">{member.position}</p>
                      <div className="flex items-center justify-center text-gray-600 text-sm">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {member.experience}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">{member.bio}</p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">
                        {currentLang === 'ar' ? 'الإنجازات الرئيسية' : 'Key Achievements'}
                      </h4>
                      <div className="space-y-2">
                        {member.achievements.slice(0, 2).map((achievement, index) => (
                          <div key={index} className="flex items-center text-gray-700 text-xs">
                            <Award className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Education */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3 text-sm">
                        {currentLang === 'ar' ? 'التعليم' : 'Education'}
                      </h4>
                      <div className="space-y-2">
                        {member.education.map((edu, index) => (
                          <div key={index} className="flex items-start text-xs text-gray-600">
                            <BookOpen className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{edu}</span>
                          </div>
                        ))}
                      </div>
                    
                    {/* Contact */}
                    <div className="border-t pt-4">
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-600 text-xs">
                          <Mail className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{member.contact.email}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-xs">
                          <Phone className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{member.contact.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600 text-xs">
                          <MapPin className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          <span>{member.contact.location}</span>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Committees Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-indigo-300/30 to-blue-300/30 rounded-full blur-3xl animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'اللجان الدائمة' : 'Standing Committees'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'اللجان المتخصصة التي تدعم عمل مجلس الإدارة' : 'Specialized committees supporting the board\'s work'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {committees.map((committee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{committee.name}</h3>
                      <div className="flex items-center text-blue-600 text-sm mb-3">
                        <Shield className="w-4 h-4 mr-2" />
                        <span>{currentLang === 'ar' ? 'الرئيس:' : 'Chair:'} {committee.chair}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-3">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{committee.members} {currentLang === 'ar' ? 'أعضاء' : 'members'}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm">{committee.focus}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Meetings Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentLang === 'ar' ? 'اجتماعات مجلس الإدارة' : 'Board Meetings'}
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                {currentLang === 'ar' 
                  ? 'نلتزم بانتظام وشفافية في اجتماعاتنا لضمان أفضل أداء للجمعية'
                  : 'We are committed to regularity and transparency in our meetings to ensure the best performance of the society'
                }
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: currentLang === 'ar' ? 'الاجتماعات الشهرية' : 'Monthly Meetings',
                  description: currentLang === 'ar'
                    ? 'نعقد اجتماعات منتظمة لمناقشة التقدم والمبادرات الجديدة'
                    : 'We hold regular meetings to discuss progress and new initiatives'
                },
                {
                  icon: Users,
                  title: currentLang === 'ar' ? 'الاجتماعات السنوية' : 'Annual Meetings',
                  description: currentLang === 'ar'
                    ? 'نراجع أداء السنة ونخطط للأهداف المستقبلية'
                    : 'We review the year\'s performance and plan for future goals'
                },
                {
                  icon: Shield,
                  title: currentLang === 'ar' ? 'الاجتماعات الطارئة' : 'Emergency Meetings',
                  description: currentLang === 'ar'
                    ? 'نعقد اجتماعات خاصة عند الحاجة لمعالجة القضايا العاجلة'
                    : 'We hold special meetings when needed to address urgent issues'
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
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                {currentLang === 'ar' ? 'تواصل مع مجلس الإدارة' : 'Contact the Board'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar' 
                  ? 'نحن هنا للاستماع إلى أفكارك ومقترحاتك لتطوير الجمعية'
                  : 'We are here to listen to your ideas and suggestions for developing the society'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </button>
                <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                  {currentLang === 'ar' ? 'جدول الاجتماعات' : 'Meeting Schedule'}
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

export default BoardOfDirectors;

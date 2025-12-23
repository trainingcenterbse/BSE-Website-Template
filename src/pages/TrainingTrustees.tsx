import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Shield, Award, Calendar, Briefcase, CheckCircle, Star, Target, BookOpen, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TrainingTrustees = () => {
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
    date: 'أكتوبر 2020',
    description: currentLang === 'ar'
      ? 'في أكتوبر من العام 2020 م اعتمد مجلس الإدارة تشكيل مجلس أمناء مركز التدريب وفقاً للائحة حوكمة ونظام عمل مركز التدريب.'
      : 'In October 2020, the Board of Directors approved the formation of the Training Center Board of Trustees according to the governance regulations and training center work system.'
  };

  const boardMembers = [
    {
      id: 1,
      name: 'د. أحمد محمد علي',
      position: currentLang === 'ar' ? 'رئيس مجلس الأمناء' : 'Chairman of Board of Trustees',
      role: currentLang === 'ar' ? 'رئيس مجلس إدارة الجمعية' : 'Chairman of Society Board',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      background: currentLang === 'ar' ? 'خبير في هندسة البترول مع 25 عام خبرة' : 'Petroleum engineering expert with 25 years experience'
    },
    {
      id: 2,
      name: 'م. فاطمة عبدالله',
      position: currentLang === 'ar' ? 'نائب الرئيس' : 'Vice Chairman',
      role: currentLang === 'ar' ? 'مديرة مركز التدريب' : 'Training Center Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      background: currentLang === 'ar' ? 'خبيرة في تطوير الموارد البشرية والتدريب' : 'Expert in human resources development and training'
    },
    {
      id: 3,
      name: 'م. خالد إبراهيم',
      position: currentLang === 'ar' ? 'عضو' : 'Member',
      role: currentLang === 'ar' ? 'مستشار تقني' : 'Technical Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      background: currentLang === 'ar' ? 'متخصص في هندسة الاتصالات وتكنولوجيا المعلومات' : 'Specialized in communications engineering and IT'
    },
    {
      id: 4,
      name: 'د. مريم أحمد',
      position: currentLang === 'ar' ? 'عضو' : 'Member',
      role: currentLang === 'ar' ? 'أكاديمية واستشارية تدريب' : 'Academic and Training Consultant',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      background: currentLang === 'ar' ? 'خبيرة في المناهج التعليمية وتطوير البرامج' : 'Expert in educational curricula and program development'
    },
    {
      id: 5,
      name: 'م. علي حسن',
      position: currentLang === 'ar' ? 'عضو' : 'Member',
      role: currentLang === 'ar' ? 'مدير مالي' : 'Financial Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      background: currentLang === 'ar' ? 'متخصص في الإدارة المالية والتخطيط الاستراتيجي' : 'Specialized in financial management and strategic planning'
    },
    {
      id: 6,
      name: 'د. سارة محمد',
      position: currentLang === 'ar' ? 'عضو' : 'Member',
      role: currentLang === 'ar' ? 'خبيرة جودة وتطوير مؤسسي' : 'Quality and Institutional Development Expert',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      background: currentLang === 'ar' ? 'خبيرة في أنظمة الجودة والاعتماد المؤسسي' : 'Expert in quality systems and institutional accreditation'
    }
  ];

  const responsibilities = [
    {
      icon: <Target className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'وضع الاستراتيجيات' : 'Setting Strategies',
      description: currentLang === 'ar' ? 'وضع الاستراتيجيات والسياسات العامة لمركز التدريب' : 'Setting general strategies and policies for the training center'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'الرقابة والإشراف' : 'Oversight and Supervision',
      description: currentLang === 'ar' ? 'الرقابة على أداء المركز وضمان جودة البرامج' : 'Monitoring center performance and ensuring program quality'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'الاعتماد والجودة' : 'Accreditation and Quality',
      description: currentLang === 'ar' ? 'ضمان حصول البرامج على الاعتمادات المطلوبة' : 'Ensuring programs obtain required accreditations'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'تطوير الموارد البشرية' : 'Human Resources Development',
      description: currentLang === 'ar' ? 'تطوير فريق العمل والموظفين بالمركز' : 'Developing the work team and center employees'
    }
  ];

  const achievements = [
    {
      number: '2020',
      label: currentLang === 'ar' ? 'سنة التأسيس' : 'Establishment Year',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      number: '6',
      label: currentLang === 'ar' ? 'أعضاء المجلس' : 'Board Members',
      icon: <Users className="w-6 h-6" />
    },
    {
      number: '15+',
      label: currentLang === 'ar' ? 'اعتماد جديد' : 'New Accreditations',
      icon: <Award className="w-6 h-6" />
    },
    {
      number: '100%',
      label: currentLang === 'ar' ? 'نسبة رضا المتدربين' : 'Trainee Satisfaction',
      icon: <Star className="w-6 h-6" />
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
              alt="Board of Trustees" 
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
                  {currentLang === 'ar' ? 'مجلس الأمناء' : 'Board of Trustees'}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'قيادة رشيدة لتطوير التدريب المهني'
                    : 'Wise leadership for professional training development'
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
                {currentLang === 'ar' ? 'تأسيس المجلس' : 'Board Establishment'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-10 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center ml-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{establishmentInfo.date}</h3>
                    <p className="text-gray-600">{currentLang === 'ar' ? 'تاريخ التأسيس' : 'Establishment Date'}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {establishmentInfo.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-slate-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      {achievement.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Board Members Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'أعضاء مجلس الأمناء' : 'Board Members'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-1">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                  <div className="bg-white rounded-2xl p-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{member.background}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Responsibilities Section */}
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
                {currentLang === 'ar' ? 'مسؤوليات المجلس' : 'Board Responsibilities'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {responsibilities.map((responsibility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {responsibility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{responsibility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{responsibility.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                {currentLang === 'ar' ? 'تواصل مع مجلس الأمناء' : 'Contact Board of Trustees'}
              </h2>
              <p className="text-xl text-slate-100 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar'
                  ? 'نرحب باستفساراتكم واقتراحاتكم لتطوير أداء المركز'
                  : 'We welcome your inquiries and suggestions to develop the center\'s performance'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-slate-700 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  {currentLang === 'ar' ? 'إرسال استفسار' : 'Send Inquiry'}
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center">
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

export default TrainingTrustees;

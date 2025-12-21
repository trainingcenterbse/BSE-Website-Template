import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Download, Shield, BookOpen, Scale, Users, Award, Calendar, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SystemsRegulations = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const regulations = [
    {
      id: 1,
      title: currentLang === 'ar' ? 'النظام الأساسي للجمعية' : 'Society Bylaws',
      description: currentLang === 'ar'
        ? 'النظام الأساسي الذي ينظم عمل الجمعية ويحدد أهدافها واختصاصاتها وهياكلها الإدارية'
        : 'The basic system that regulates the society\'s work and determines its objectives, competencies, and administrative structures',
      category: currentLang === 'ar' ? 'أساسي' : 'Fundamental',
      lastUpdated: currentLang === 'ar' ? '15 نوفمبر 2023' : 'November 15, 2023',
      size: '2.5 MB',
      pages: 45,
      downloadUrl: '/documents/bylaws.pdf',
      icon: <FileText className="w-8 h-8" />
    },
    {
      id: 2,
      title: currentLang === 'ar' ? 'اللائحة الداخلية للجمعية' : 'Internal Regulations',
      description: currentLang === 'ar'
        ? 'اللوائح الداخلية التي تفصل إجراءات العمل اليومي ومسؤوليات الأقسام المختلفة'
        : 'Internal regulations that detail daily work procedures and responsibilities of different departments',
      category: currentLang === 'ar' ? 'تنظيمي' : 'Organizational',
      lastUpdated: currentLang === 'ar' ? '20 أكتوبر 2023' : 'October 20, 2023',
      size: '1.8 MB',
      pages: 32,
      downloadUrl: '/documents/internal-regulations.pdf',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 3,
      title: currentLang === 'ar' ? 'مدونة قواعد السلوك المهني' : 'Professional Code of Conduct',
      description: currentLang === 'ar'
        ? 'المبادئ والمعايير الأخلاقية التي يجب على المهندسين الالتزام بها في ممارساتهم المهنية'
        : 'Ethical principles and standards that engineers must adhere to in their professional practices',
      category: currentLang === 'ar' ? 'أخلاقي' : 'Ethical',
      lastUpdated: currentLang === 'ar' ? '5 سبتمبر 2023' : 'September 5, 2023',
      size: '1.2 MB',
      pages: 28,
      downloadUrl: '/documents/code-of-conduct.pdf',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 4,
      title: currentLang === 'ar' ? 'لائحة العضوية وشروط القبول' : 'Membership Regulations',
      description: currentLang === 'ar'
        ? 'الشروط والإجراءات لانضمام المهندسين كأعضاء في الجمعية وفئات العضوية المختلفة'
        : 'Conditions and procedures for engineers to join the society as members and different membership categories',
      category: currentLang === 'ar' ? 'عضوية' : 'Membership',
      lastUpdated: currentLang === 'ar' ? '10 أغسطس 2023' : 'August 10, 2023',
      size: '980 KB',
      pages: 18,
      downloadUrl: '/documents/membership-regulations.pdf',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 5,
      title: currentLang === 'ar' ? 'الائحة المالية والميزانية' : 'Financial Regulations',
      description: currentLang === 'ar'
        ? 'القواعد والإجراءات المالية التي تحكم إدارة أموال الجمعية وإعداد الميزانية'
        : 'Financial rules and procedures that govern the management of society funds and budget preparation',
      category: currentLang === 'ar' ? 'مالي' : 'Financial',
      lastUpdated: currentLang === 'ar' ? '25 يوليو 2023' : 'July 25, 2023',
      size: '1.5 MB',
      pages: 22,
      downloadUrl: '/documents/financial-regulations.pdf',
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 6,
      title: currentLang === 'ar' ? 'لائحة المسؤولية المهنية' : 'Professional Liability Regulations',
      description: currentLang === 'ar'
        ? 'القواعد التي تحدد مسؤوليات المهندسين تجاه العملاء والمجتمع والإجراءات في حالات الأخطاء المهنية'
        : 'Rules that determine engineers\' responsibilities towards clients and society and procedures in cases of professional errors',
      category: currentLang === 'ar' ? 'قانوني' : 'Legal',
      lastUpdated: currentLang === 'ar' ? '15 يونيو 2023' : 'June 15, 2023',
      size: '2.1 MB',
      pages: 38,
      downloadUrl: '/documents/liability-regulations.pdf',
      icon: <Scale className="w-8 h-8" />
    }
  ];

  const procedures = [
    {
      title: currentLang === 'ar' ? 'إجراءات تقديم الشكاوى' : 'Complaint Submission Procedures',
      description: currentLang === 'ar'
        ? 'الخطوات الواجب اتباعها لتقديم شكوى رسمية ضد مهندس أو الجمعية'
        : 'Steps to follow to submit an official complaint against an engineer or the society',
      steps: [
        currentLang === 'ar' ? 'تعبئة نموذج الشكوى الرسمي' : 'Fill out the official complaint form',
        currentLang === 'ar' ? 'تقديم المستندات الداعمة' : 'Submit supporting documents',
        currentLang === 'ar' ? 'مراجعة اللجنة المختصة' : 'Review by the concerned committee',
        currentLang === 'ar' ? 'البت في الشكوى خلال 30 يوماً' : 'Decision on complaint within 30 days'
      ]
    },
    {
      title: currentLang === 'ar' ? 'إجراءات التجديد السنوي' : 'Annual Renewal Procedures',
      description: currentLang === 'ar'
        ? 'الخطوات اللازمة لتجديد العضوية السنوية والحفاظ على الحالة المهنية'
        : 'Necessary steps for annual membership renewal and maintaining professional status',
      steps: [
        currentLang === 'ar' ? 'تسجيل الدخول إلى البوابة الإلكترونية' : 'Login to the electronic portal',
        currentLang === 'ar' ? 'تحديث المعلومات الشخصية' : 'Update personal information',
        currentLang === 'ar' ? 'سداد رسوم التجديد' : 'Pay renewal fees',
        currentLang === 'ar' ? 'الحصول على شهادة التجديد' : 'Receive renewal certificate'
      ]
    },
    {
      title: currentLang === 'ar' ? 'إجراءات التسجيل في الدورات' : 'Course Registration Procedures',
      description: currentLang === 'ar'
        ? 'كيفية التسجيل في الدورات التدريبية والبرامج المهنية التي تقدمها الجمعية'
        : 'How to register for training courses and professional programs offered by the society',
      steps: [
        currentLang === 'ar' ? 'استعراض الدورات المتاحة' : 'Browse available courses',
        currentLang === 'ar' ? 'التحقق من شروط القبول' : 'Check admission requirements',
        currentLang === 'ar' ? 'إكمال نموذج التسجيل' : 'Complete registration form',
        currentLang === 'ar' ? 'تأكيد الدفع والحصول على التذاكر' : 'Confirm payment and receive tickets'
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case currentLang === 'ar' ? 'أساسي' : 'Fundamental':
        return 'bg-blue-600/90 text-white';
      case currentLang === 'ar' ? 'تنظيمي' : 'Organizational':
        return 'bg-purple-600/90 text-white';
      case currentLang === 'ar' ? 'أخلاقي' : 'Ethical':
        return 'bg-green-600/90 text-white';
      case currentLang === 'ar' ? 'عضوية' : 'Membership':
        return 'bg-orange-600/90 text-white';
      case currentLang === 'ar' ? 'مالي' : 'Financial':
        return 'bg-yellow-600/90 text-white';
      case currentLang === 'ar' ? 'قانوني' : 'Legal':
        return 'bg-red-600/90 text-white';
      default:
        return 'bg-gray-600/90 text-white';
    }
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
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-indigo-600 via-blue-700 to-indigo-800 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
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
                {currentLang === 'ar' ? 'الأنظمة واللوائح' : 'Systems and Regulations'}
              </h1>
              <p className="text-xl lg:text-2xl text-indigo-100 max-w-3xl rivals mx-auto leading-relaxed">
                {currentLang === 'ar'
                  ? 'القوانين واللوائح التي تنظم عمل الجمعية وتضمن الشفافية والعدالة'
                  : 'The laws and regulations that govern the society\'s work and ensure transparency and justice'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Regulations Grid */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-indigo-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'اللوائح والأنظمة' : 'Regulations and Systems'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'جميع الوثائق التنظيمية للجمعية متاحة للتحميل' : 'All organizational documents of the society are available for download'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regulations.map((regulation) => (
                <motion.div
                  key={regulation.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.6, delay: regulation.id * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Header */}
                  <div className="relative h-32 bg-gradient-to-br from-indigo-600 to-blue-600">
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(regulation.category)}`}>
                        {regulation.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <div className="text-white">
                          {regulation.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{regulation.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{regulation.description}</p>
                    
                    {/* Metadata */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{currentLang === 'ar' ? 'آخر تحديث:' : 'Last updated:'} {regulation.lastUpdated}</span>
                      </div>
                      <div className="flex items-center text-gray-500 text-xs">
                        <FileText className="w-4 h-4 mr-2" />
                        <span>{regulation.size} • {regulation.pages} {currentLang === 'ar' ? 'صفحة' : 'pages'}</span>
                      </div>
                    </div>
                    
                    {/* Download Button */}
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-xl font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                      <Download className="w-5 h-5 mr-2" />
                      {currentLang === 'ar' ? 'تحميل PDF' : 'Download PDF'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Procedures Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-indigo-300/30 to-blue-300/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'الإجراءات والعمليات' : 'Procedures and Operations'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'الخطوات والإرشادات للتعامل مع الجمعية' : 'Steps and guidelines for dealing with the society'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {procedures.map((procedure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{procedure.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">{procedure.description}</p>
                  
                  <div className="space-y-3">
                    {procedure.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-start">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"></div>
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
                {currentLang === 'ar' ? 'ملاحظات هامة' : 'Important Notes'}
              </h2>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                {currentLang === 'ar' 
                  ? 'معلومات أساسية يجب على جميع الأعضاء معرفتها'
                  : 'Essential information that all members should know'
                }
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <AlertCircle className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'التحديثات الدورية' : 'Regular Updates',
                  description: currentLang === 'ar'
                    ? 'يتم تحديث اللوائح والأنظمة بشكل دوري. يرجى مراجعة الموقع بانتظام للحصول على أحدث الإصدارات.'
                    : 'Regulations and systems are updated periodically. Please check the website regularly for the latest versions.'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'الالتزام الإلزامي' : 'Mandatory Compliance',
                  description: currentLang === 'ar'
                    ? 'جميع الأعضاء ملزمون بالالتزام باللوائح والأنظمة المعمول بها في الجمعية.'
                    : 'All members are required to comply with the regulations and systems in effect at the society.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'الدعم الفني' : 'Technical Support',
                  description: currentLang === 'ar'
                    ? 'للاستفسارات حول اللوائح والإجراءات، يمكن التواصل مع إدارة الجمعية خلال ساعات العمل الرسمية.'
                    : 'For inquiries about regulations and procedures, you can contact the society administration during official working hours.'
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'النسخ الرسمية' : 'Official Copies',
                  description: currentLang === 'ar'
                    ? 'النسخ الرسمية من اللوائح متاحة في مقر الجمعية. النسخ الإلكترونية للمرجعية فقط.'
                    : 'Official copies of regulations are available at the society headquarters. Electronic copies are for reference only.'
                }
              ].map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white">
                      {note.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{note.title}</h3>
                  <p className="text-indigo-100 leading-relaxed">{note.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-6">
                {currentLang === 'ar' ? 'تحتاج إلى مساعدة؟' : 'Need Assistance?'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar' 
                  ? 'فريقنا جاهز لمساعدتك في أي استفسارات حول اللوائح والأنظمة'
                  : 'Our team is ready to help you with any inquiries about regulations and systems'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </button>
                <button className="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                  {currentLang === 'ar' ? 'أسئلة شائعة' : 'FAQ'}
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

export default SystemsRegulations;

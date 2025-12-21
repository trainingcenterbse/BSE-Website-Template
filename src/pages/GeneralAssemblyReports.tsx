import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Download, Calendar, Users, TrendingUp, Award, BarChart3, Eye, Clock, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GeneralAssemblyReports = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reports = [
    {
      id: 1,
      year: '2023',
      title: currentLang === 'ar' ? 'تقرير الجمعية العمومية السنوي 2023' : 'Annual General Assembly Report 2023',
      description: currentLang === 'ar'
        ? 'تقرير شامل عن أنشطة الجمعية وإنجازاتها ومشاريعها للعام المالي 2023'
        : 'Comprehensive report on the society\'s activities, achievements, and projects for fiscal year 2023',
      meetingDate: currentLang === 'ar' ? '15 ديسمبر 2023' : 'December 15, 2023',
      attendees: 1250,
      decisions: 15,
      budget: currentLang === 'ar' ? '2.5 مليون دينار' : '2.5 million BHD',
      size: '4.8 MB',
      pages: 85,
      downloadUrl: '/reports/assembly-2023.pdf',
      highlights: [
        currentLang === 'ar' ? 'إطلاق 25 دورة تدريبية جديدة' : 'Launching 25 new training courses',
        currentLang === 'ar' ? 'زيادة عدد الأعضاء بنسبة 15%' : 'Increasing membership by 15%',
        currentLang === 'ar' ? 'توقيع 8 شراكات دولية' : 'Signing 8 international partnerships',
        currentLang === 'ar' ? 'تنظيم 12 مؤتمراً وفعالية' : 'Organizing 12 conferences and events'
      ],
      status: 'published'
    },
    {
      id: 2,
      year: '2022',
      title: currentLang === 'ar' ? 'تقرير الجمعية العمومية السنوي 2022' : 'Annual General Assembly Report 2022',
      description: currentLang === 'ar'
        ? 'تقرير مفصل عن أداء الجمعية وتطوراتها خلال عام 2022 والخطط المستقبلية'
        : 'Detailed report on the society\'s performance and developments during 2022 and future plans',
      meetingDate: currentLang === 'ar' ? '18 ديسمبر 2022' : 'December 18, 2022',
      attendees: 1180,
      decisions: 12,
      budget: currentLang === 'ar' ? '2.2 مليون دينار' : '2.2 million BHD',
      size: '4.2 MB',
      pages: 78,
      downloadUrl: '/reports/assembly-2022.pdf',
      highlights: [
        currentLang === 'ar' ? 'تطوير المنصة الرقمية للجمعية' : 'Developing the society\'s digital platform',
        currentLang === 'ar' ? 'إطلاق برنامج الشهادات المهنية' : 'Launching professional certification program',
        currentLang === 'ar' ? 'توسيع شراكات مع الجامعات' : 'Expanding partnerships with universities',
        currentLang === 'ar' ? 'تحديث معايير العضوية' : 'Updating membership standards'
      ],
      status: 'published'
    },
    {
      id: 3,
      year: '2021',
      title: currentLang === 'ar' ? 'تقرير الجمعية العمومية السنوي 2021' : 'Annual General Assembly Report 2021',
      description: currentLang === 'ar'
        ? 'تقرير عن تحديات وإنجازات الجمعية خلال عام 2021 في ظل الظروف الاستثنائية'
        : 'Report on the society\'s challenges and achievements during 2021 under exceptional circumstances',
      meetingDate: currentLang === 'ar' ? '20 ديسمبر 2021' : 'December 20, 2021',
      attendees: 980,
      decisions: 18,
      budget: currentLang === 'ar' ? '1.8 مليون دينار' : '1.8 million BHD',
      size: '3.9 MB',
      pages: 72,
      downloadUrl: '/reports/assembly-2021.pdf',
      highlights: [
        currentLang === 'ar' ? 'التحول إلى التعليم عبر الإنترنت' : 'Transition to online education',
        currentLang === 'ar' ? 'دعم المهندسين خلال الجائحة' : 'Supporting engineers during the pandemic',
        currentLang === 'ar' ? 'إطلاق مبادرات الشباب' : 'Launching youth initiatives',
        currentLang === 'ar' ? 'تقديم برامج دعم للأعضاء' : 'Providing support programs for members'
      ],
      status: 'published'
    },
    {
      id: 4,
      year: '2020',
      title: currentLang === 'ar' ? 'تقرير الجمعية العمومية السنوي 2020' : 'Annual General Assembly Report 2020',
      description: currentLang === 'ar'
        ? 'تقرير عن استجابة الجمعية لجائحة كورونا والتكيف مع الوضع الجديد'
        : 'Report on the society\'s response to the COVID-19 pandemic and adaptation to the new situation',
      meetingDate: currentLang === 'ar' ? '22 ديسمبر 2020' : 'December 22, 2020',
      attendees: 750,
      decisions: 20,
      budget: currentLang === 'ar' ? '1.5 مليون دينار' : '1.5 million BHD',
      size: '3.5 MB',
      pages: 68,
      downloadUrl: '/reports/assembly-2020.pdf',
      highlights: [
        currentLang === 'ar' ? 'تنظيم مؤتمرات افتراضية' : 'Organizing virtual conferences',
        currentLang === 'ar' ? 'تقديم دورات عبر الإنترنت' : 'Offering online courses',
        currentLang === 'ar' ? 'دعم القطاع الصحي' : 'Supporting the healthcare sector',
        currentLang === 'ar' ? 'تعزيز التواصل الرقمي' : 'Enhancing digital communication'
      ],
      status: 'published'
    }
  ];

  const financialHighlights = [
    {
      year: '2023',
      revenue: currentLang === 'ar' ? '2.8 مليون دينار' : '2.8 million BHD',
      expenses: currentLang === 'ar' ? '2.3 مليون دينار' : '2.3 million BHD',
      surplus: currentLang === 'ar' ? '0.5 مليون دينار' : '0.5 million BHD',
      growth: '+15%'
    },
    {
      year: '2022',
      revenue: currentLang === 'ar' ? '2.4 مليون دينار' : '2.4 million BHD',
      expenses: currentLang === 'ar' ? '2.0 مليون دينار' : '2.0 million BHD',
      surplus: currentLang === 'ar' ? '0.4 مليون دينار' : '0.4 million BHD',
      growth: '+12%'
    },
    {
      year: '2021',
      revenue: currentLang === 'ar' ? '2.1 مليون دينار' : '2.1 million BHD',
      expenses: currentLang === 'ar' ? '1.8 مليون دينار' : '1.8 million BHD',
      surplus: currentLang === 'ar' ? '0.3 مليون دينار' : '0.3 million BHD',
      growth: '+8%'
    }
  ];

  const upcomingMeetings = [
    {
      date: currentLang === 'ar' ? '15 ديسمبر 2024' : 'December 15, 2024',
      title: currentLang === 'ar' ? 'الجمعية العمومية السنوية 2024' : 'Annual General Assembly 2024',
      location: currentLang === 'ar' ? 'فندق الدلماين، المنامة' : 'Dilmun Hotel, Manama',
      agenda: [
        currentLang === 'ar' ? 'مناقشة تقرير العام 2024' : 'Discussing the 2024 annual report',
        currentLang === 'ar' ? 'اعتماد الميزانية المقترحة 2025' : 'Approving the proposed 2025 budget',
        currentLang === 'ar' ? 'انتخاب مجلس إدارة جديد' : 'Electing a new board of directors',
        currentLang === 'ar' ? 'مناقشة المبادرات المستقبلية' : 'Discussing future initiatives'
      ]
    },
    {
      date: currentLang === 'ar' ? '20 مارس 2025' : 'March 20, 2025',
      title: currentLang === 'ar' ? 'اجتماع طارئ للجمعية العمومية' : 'Emergency General Assembly Meeting',
      location: currentLang === 'ar' ? 'مقر الجمعية، المنامة' : 'Society Headquarters, Manama',
      agenda: [
        currentLang === 'ar' ? 'مناقشة تعديلات النظام الأساسي' : 'Discussing bylaws amendments',
        currentLang === 'ar' ? 'اعتماد سياسات جديدة' : 'Adopting new policies',
        currentLang === 'ar' ? 'مشاريع استثمارية مقترحة' : 'Proposed investment projects'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-600/90 text-white';
      case 'draft':
        return 'bg-yellow-600/90 text-white';
      case 'pending':
        return 'bg-orange-600/90 text-white';
      default:
        return 'bg-gray-600/90 text-white';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published':
        return currentLang === 'ar' ? 'منشور' : 'Published';
      case 'draft':
        return currentLang === 'ar' ? 'مسودة' : 'Draft';
      case 'pending':
        return currentLang === 'ar' ? 'معلق' : 'Pending';
      default:
        return currentLang === 'ar' ? 'غير معروف' : 'Unknown';
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
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-600 via-blue-700 to-green-800 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
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
                {currentLang === 'ar' ? 'تقارير الجمعية العمومية' : 'General Assembly Reports'}
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                {currentLang === 'ar'
                  ? 'التقارير السنوية والاجتماعات التي تعكس شفافية و accountability الجمعية'
                  : 'Annual reports and meetings that reflect the society\'s transparency and accountability'
                }
              </p>
            </motion.div>
          </div>
        </section>

        {/* Reports Grid */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-green-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-green-100/20 rounded-full blur-3xl"></div>
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
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'التقارير السنوية' : 'Annual Reports'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'جميع تقارير الجمعية العمومية متاحة للتحميل والمراجعة' : 'All general assembly reports are available for download and review'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {reports.map((report) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6, delay: report.id * 0.1 }}
                  className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Header */}
                  <div className="relative h-32 bg-gradient-to-br from-green-600 to-blue-600">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(report.status)}`}>
                        {getStatusLabel(report.status)}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-sm text-white">
                        {report.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{report.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{report.description}</p>
                    
                    {/* Meeting Info */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-gray-600 text-xs">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{currentLang === 'ar' ? 'التاريخ:' : 'Date:'} {report.meetingDate}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-xs">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{report.attendees} {currentLang === 'ar' ? 'حضور' : 'attendees'}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-xs">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>{report.decisions} {currentLang === 'ar' ? 'قرار' : 'decisions'}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-xs">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        <span>{report.budget}</span>
                      </div>
                    </div>
                    
                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">
                        {currentLang === 'ar' ? 'أبرز النقاط' : 'Key Highlights'}
                      </h4>
                      <div className="space-y-1">
                        {report.highlights.slice(0, 2).map((highlight, index) => (
                          <div key={index} className="flex items-center text-gray-700 text-xs">
                            <Award className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metadata and Download */}
                    <div className="flex items-center justify-between border-t pt-4">
                      <div className="text-xs text-gray-500">
                        <span>{report.size} • {report.pages} {currentLang === 'ar' ? 'صفحة' : 'pages'}</span>
                      </div>
                      <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
                        <Download className="w-4 h-4 mr-2" />
                        {currentLang === 'ar' ? 'تحميل' : 'Download'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Highlights Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-green-300/30 to-blue-300/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-green-300/30 rounded-full blur-3xl animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'الملخص المالي' : 'Financial Summary'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'نظرة عامة على الأداء المالي للجمعية خلال السنوات الأخيرة' : 'Overview of the society\'s financial performance in recent years'}
              </p>
            </motion.div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-3xl shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'السنة' : 'Year'}</th>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'الإيرادات' : 'Revenue'}</th>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'المصروفات' : 'Expenses'}</th>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'الفائض' : 'Surplus'}</th>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'النمو' : 'Growth'}</th>
                  </tr>
                </thead>
                <tbody>
                  {financialHighlights.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b hover:bg-green-50 transition-colors duration-300"
                    >
                      <td className="px-6 py-4 font-bold text-gray-900">{item.year}</td>
                      <td className="px-6 py-4 text-gray-700">{item.revenue}</td>
                      <td className="px-6 py-4 text-gray-700">{item.expenses}</td>
                      <td className="px-6 py-4 text-green-600 font-bold">{item.surplus}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                          {item.growth}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Upcoming Meetings Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-green-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'الاجتماعات القادمة' : 'Upcoming Meetings'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'جدول اجتماعات الجمعية العمومية القادمة' : 'Schedule of upcoming general assembly meetings'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingMeetings.map((meeting, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{meeting.title}</h3>
                      <div className="flex items-center text-green-600 text-sm mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{meeting.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{meeting.location}</span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2 text-sm">
                          {currentLang === 'ar' ? 'جدول الأعمال' : 'Agenda'}
                        </h4>
                        <div className="space-y-2">
                          {meeting.agenda.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Information Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-green-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
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
                {currentLang === 'ar' ? 'معلومات هامة' : 'Important Information'}
              </h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                {currentLang === 'ar' 
                  ? 'كل ما تحتاج معرفته عن اجتماعات الجمعية العمومية'
                  : 'Everything you need to know about general assembly meetings'
                }
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <AlertCircle className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'الحقوق والواجبات' : 'Rights and Responsibilities',
                  description: currentLang === 'ar'
                    ? 'لجميع الأعضاء الحق في حضور الجمعية العمومية والتصويت على القرارات والمشاركة في صنع القرار.'
                    : 'All members have the right to attend the general assembly, vote on decisions, and participate in decision-making.'
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'الشفافية والنزاهة' : 'Transparency and Integrity',
                  description: currentLang === 'ar'
                    ? 'جميع قرارات الجمعية العمومية يتم توثيقها ونشرها لضمان الشفافية الكاملة.'
                    : 'All general assembly decisions are documented and published to ensure complete transparency.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'المشاركة الفعالة' : 'Active Participation',
                  description: currentLang === 'ar'
                    ? 'نشجع جميع الأعضاء على المشاركة الفعالة في اجتماعات الجمعية العمومية لإثراء النقاش.'
                    : 'We encourage all members to actively participate in general assembly meetings to enrich the discussion.'
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'الوثائق الرسمية' : 'Official Documents',
                  description: currentLang === 'ar'
                    ? 'يمكن الحصول على نسخ رسمية من تقارير الجمعية العمومية من مقر الجمعية.'
                    : 'Official copies of general assembly reports can be obtained from the society headquarters.'
                }
              ].map((info, index) => (
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
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                  <p className="text-green-100 leading-relaxed">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-green-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
                {currentLang === 'ar' ? 'للمزيد من المعلومات' : 'For More Information'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar' 
                  ? 'تواصل معنا للحصول على أي معلومات إضافية حول تقارير الجمعية العمومية'
                  : 'Contact us for any additional information about general assembly reports'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </button>
                <button className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                  {currentLang === 'ar' ? 'الأرشيف الكامل' : 'Full Archive'}
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

export default GeneralAssemblyReports;

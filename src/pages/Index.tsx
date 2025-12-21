import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building, Users, Award, TrendingUp, Calendar, Mail, ChevronRight, Sparkles, Globe, Target, Shield, Zap, BookOpen, Briefcase, GraduationCap, Heart, Star, Clock, MapPin, Phone, MessageSquare, Facebook, Twitter, Linkedin, Instagram, Youtube, FileText, CheckCircle, ArrowUpRight, Lightbulb, Rocket, Building2, CalendarDays } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { icon: Users, value: "5000+", label: currentLang === 'ar' ? 'عضو' : 'Members' },
    { icon: Building, value: "50+", label: currentLang === 'ar' ? 'شريك' : 'Partners' },
    { icon: Award, value: "200+", label: currentLang === 'ar' ? 'حدث' : 'Events' },
    { icon: TrendingUp, value: "45", label: currentLang === 'ar' ? 'سنة' : 'Years' }
  ];

  const news = [
    {
      id: 1,
      title: currentLang === 'ar' ? 'إطلاق برنامج التدريب المهني الجديد' : 'Launch of New Professional Training Program',
      description: currentLang === 'ar' ? 'برنامج تدريبي متطور يهدف إلى تطوير المهارات الهندسية للشباب' : 'Advanced training program aimed at developing engineering skills for youth',
      date: '2024-12-15',
      image: '/api/placeholder/400/250',
      category: currentLang === 'ar' ? 'تدريب' : 'Training'
    },
    {
      id: 2,
      title: currentLang === 'ar' ? 'شراكة استراتيجية مع وزارة الأشغال' : 'Strategic Partnership with Ministry of Works',
      description: currentLang === 'ar' ? 'تعاون لتطوير المعايير الهندسية الوطنية' : 'Cooperation to develop national engineering standards',
      date: '2024-12-10',
      image: '/api/placeholder/400/250',
      category: currentLang === 'ar' ? 'شراكات' : 'Partnerships'
    },
    {
      id: 3,
      title: currentLang === 'ar' ? 'توقيع اتفاقية تعاون مع جامعة البحرين' : 'Cooperation Agreement with University of Bahrain',
      description: currentLang === 'ar' ? 'برنامج مشترك للأبحاث الهندسية المبتكرة' : 'Joint program for innovative engineering research',
      date: '2024-12-08',
      image: '/api/placeholder/400/250',
      category: currentLang === 'ar' ? 'أبحاث' : 'Research'
    },
    {
      id: 4,
      title: currentLang === 'ar' ? 'تكريم الفائزين في مسابقة الابتكار الهندسي' : 'Awarding Winners of Engineering Innovation Competition',
      description: currentLang === 'ar' ? 'تكريم المشاريع المبتكرة للمهندسين الشباب' : 'Honoring innovative projects by young engineers',
      date: '2024-12-05',
      image: '/api/placeholder/400/250',
      category: currentLang === 'ar' ? 'جوائز' : 'Awards'
    }
  ];

  const events = [
    {
      id: 1,
      title: currentLang === 'ar' ? 'المؤتمر الهندسي السنوي 2024' : 'Annual Engineering Conference 2024',
      description: currentLang === 'ar' ? 'أكبر تجمع للمهندسين في البحرين لمناقشة أحدث التوجهات' : 'Largest gathering of engineers in Bahrain to discuss latest trends',
      date: '2024-12-20',
      time: '09:00 AM',
      location: currentLang === 'ar' ? 'فندق ريتز كارلتون المنامة' : 'Ritz-Carlton Manama',
      image: '/api/placeholder/600/400',
      type: 'conference'
    },
    {
      id: 2,
      title: currentLang === 'ar' ? 'ورشة عمل: الهندسة المستدامة' : 'Workshop: Sustainable Engineering',
      description: currentLang === 'ar' ? 'تعلم أحدث التقنيات في الهندسة الخضراء' : 'Learn latest techniques in green engineering',
      date: '2024-12-18',
      time: '02:00 PM',
      location: currentLang === 'ar' ? 'مقر الجمعية' : 'BSE Headquarters',
      image: '/api/placeholder/600/400',
      type: 'workshop'
    },
    {
      id: 3,
      title: currentLang === 'ar' ? 'حفل تكريم المهندسين المتميزين' : 'Excellence Engineers Awards Ceremony',
      description: currentLang === 'ar' ? 'تكريم أفضل المهندسين في البحرين لعام 2024' : 'Honoring the best engineers in Bahrain for 2024',
      date: '2024-12-25',
      time: '07:00 PM',
      location: currentLang === 'ar' ? 'مركز البحرين للمؤتمرات' : 'Bahrain International Exhibition Center',
      image: '/api/placeholder/600/400',
      type: 'ceremony'
    }
  ];

  const memberServices = [
    {
      icon: Briefcase,
      title: currentLang === 'ar' ? 'العضوية الاحترافية' : 'Professional Membership',
      description: currentLang === 'ar' ? 'احصل على اعتماد مهني معترف به عالمياً' : 'Get internationally recognized professional accreditation',
      features: [
        currentLang === 'ar' ? 'شهادة عضوية معتمدة' : 'Certified membership certificate',
        currentLang === 'ar' ? 'فرص توظيف حصرية' : 'Exclusive job opportunities',
        currentLang === 'ar' ? 'دورات تدريبية مجانية' : 'Free training courses'
      ]
    },
    {
      icon: GraduationCap,
      title: currentLang === 'ar' ? 'التطوير المهني' : 'Professional Development',
      description: currentLang === 'ar' ? 'برامج متخصصة لتطوير مسيرتك المهنية' : 'Specialized programs to develop your career path',
      features: [
        currentLang === 'ar' ? 'ورش عمل متقدمة' : 'Advanced workshops',
        currentLang === 'ar' ? 'شهادات مهنية' : 'Professional certificates',
        currentLang === 'ar' ? 'إرشاد مهني' : 'Career guidance'
      ]
    },
    {
      icon: Building2,
      title: currentLang === 'ar' ? 'الشبكات المهنية' : 'Professional Networking',
      description: currentLang === 'ar' ? 'تواصل مع خبراء الصناعة والزملاء' : 'Connect with industry experts and colleagues',
      features: [
        currentLang === 'ar' ? 'فعاليات شبكية' : 'Networking events',
        currentLang === 'ar' ? 'منتديات متخصصة' : 'Specialized forums',
        currentLang === 'ar' ? 'مجموعات مهنية' : 'Professional groups'
      ]
    }
  ];

  const societyInfo = {
    vision: currentLang === 'ar' ? 'الريادة في الهندسة والابتكار' : 'Leadership in Engineering and Innovation',
    mission: currentLang === 'ar' ? 'تمكين المهندسين وتطوير المهنة' : 'Empowering Engineers and Advancing the Profession',
    values: [
      currentLang === 'ar' ? 'التميز' : 'Excellence',
      currentLang === 'ar' ? 'النزاهة' : 'Integrity',
      currentLang === 'ar' ? 'الابتكار' : 'Innovation',
      currentLang === 'ar' ? 'الاستدامة' : 'Sustainability'
    ],
    achievements: [
      currentLang === 'ar' ? '45 عاماً من الريادة' : '45 Years of Leadership',
      currentLang === 'ar' ? '5000+ عضو نشط' : '5000+ Active Members',
      currentLang === 'ar' ? '200+ حدث سنوياً' : '200+ Annual Events',
      currentLang === 'ar' ? '50+ شريك استراتيجي' : '50+ Strategic Partners'
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      
      <main className="relative -mt-20">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section with Creative Cards */}
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? '45 عاماً من التميز والريادة الهندسية' : '45 Years of Excellence and Engineering Leadership'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative News Grid Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'أحدث الأخبار' : 'Latest News'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'تابع آخر أخبار الجمعية وإنجازاتنا' : 'Follow the latest news and our achievements'}
              </p>
            </motion.div>
            
            {/* Creative Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured News - Large Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop" alt="Featured News" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full text-sm font-bold bg-yellow-400 text-yellow-900">
                      {currentLang === 'ar' ? 'خبر رئيسي' : 'Featured'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                      {news[0].title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{news[0].date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{news[0].description}</p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="font-semibold">
                      {currentLang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                    </span>
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
              
              {/* Side News - Three Smaller Cards */}
              <div className="space-y-4">
                {news.slice(1, 4).map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
                  >
                    <div className="flex h-32">
                      <div className="w-32 h-32 flex-shrink-0">
                        <img src={
                          index === 0 ? "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop" : 
                          index === 1 ? "https://images.unsplash.com/photo-1559028012-cad4cdaa89f1?w=200&h=200&fit=crop" :
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop"
                        } 
                             alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-center mb-2">
                          <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-600">
                            {item.category}
                          </span>
                          <span className="text-xs text-gray-500 mr-auto">{item.date}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex items-center text-blue-600 text-sm group-hover:text-blue-700 transition-colors">
                          <span>{currentLang === 'ar' ? 'اقرأ' : 'Read'}</span>
                          <ArrowRight className="w-3 h-3 mr-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Events Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-slate-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Professional Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full"></div>
                <div className="mx-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full"></div>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-slate-700 to-blue-600 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? 'الفعاليات القادمة' : 'Upcoming Events'}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                {currentLang === 'ar' 
                  ? 'انضم إلى فعالياتنا الحصرية ووسع شبكتك المهنية مع الخبراء والقادة في مجال الهندسة'
                  : 'Join our exclusive events and expand your professional network with engineering experts and leaders'
                }
              </p>
            </motion.div>
            
            {/* Professional Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={
                          index === 0 ? "https://images.unsplash.com/photo-1540575137025-b6d2fb829119?w=600&h=400&fit=crop" : 
                          index === 1 ? "https://images.unsplash.com/photo-1559028012-cad4cdaa89f1?w=600&h=400&fit=crop" :
                          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop"
                        } 
                        alt={event.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      
                      {/* Event Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm ${
                          event.type === 'conference' ? 'bg-blue-600/90 text-white' :
                          event.type === 'workshop' ? 'bg-slate-700/90 text-white' :
                          'bg-blue-500/90 text-white'
                        }`}>
                          {event.type === 'conference' ? (currentLang === 'ar' ? 'مؤتمر' : 'Conference') :
                           event.type === 'workshop' ? (currentLang === 'ar' ? 'ورشة عمل' : 'Workshop') :
                           (currentLang === 'ar' ? 'حفل' : 'Ceremony')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {event.description}
                      </p>
                      
                      {/* Event Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-700">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <Calendar className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <Clock className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="font-medium">{event.time}</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                            <MapPin className="w-5 h-5 text-blue-600" />
                          </div>
                          <span className="font-medium">{event.location}</span>
                        </div>
                      </div>
                      
                      {/* CTA Button */}
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white rounded-xl font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        <span className="flex items-center justify-center">
                          {currentLang === 'ar' ? 'سجل الآن' : 'Register Now'}
                          <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* View All Events Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <span className="flex items-center">
                  {currentLang === 'ar' ? 'عرض جميع الفعاليات' : 'View All Events'}
                  <ArrowRight className="w-5 h-5 mr-2" />
                </span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Creative Services Grid Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-purple-300/30 to-indigo-300/30 rounded-full blur-3xl animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'حلول هندسية متكاملة تلبي احتياجاتك المهنية' : 'Integrated engineering solutions to meet your professional needs'}
              </p>
            </motion.div>
            
            {/* Simple Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Building, 
                  title: currentLang === 'ar' ? 'الاستشارات الهندسية' : 'Engineering Consulting', 
                  desc: currentLang === 'ar' ? 'خبراء في جميع التخصصات الهندسية' : 'Experts in all engineering disciplines',
                  color: 'blue'
                },
                { 
                  icon: GraduationCap, 
                  title: currentLang === 'ar' ? 'التدريب المعتمد' : 'Accredited Training', 
                  desc: currentLang === 'ar' ? 'برامج معتمدة عالمياً' : 'Internationally accredited programs',
                  color: 'slate'
                },
                { 
                  icon: Award, 
                  title: currentLang === 'ar' ? 'الشهادات المهنية' : 'Professional Certifications', 
                  desc: currentLang === 'ar' ? 'اعتمادات مهنية معترف بها' : 'Recognized professional accreditations',
                  color: 'blue'
                },
                { 
                  icon: Users, 
                  title: currentLang === 'ar' ? 'الشبكات المهنية' : 'Professional Networks', 
                  desc: currentLang === 'ar' ? 'تواصل مع المهندسين المحترفين' : 'Connect with professional engineers',
                  color: 'slate'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${service.color}-100 rounded-2xl flex items-center justify-center`}>
                    <service.icon className={`w-8 h-8 text-${service.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                  <Button className={`mt-4 bg-${service.color}-600 hover:bg-${service.color}-700 text-white px-4 py-2 rounded-lg text-sm font-medium`}>
                    {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Member Center Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-bounce"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'مركز الأعضاء' : 'Member Center'}
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'بوابتك الشاملة لجميع خدمات الأعضاء' : 'Your comprehensive gateway for all member services'}
              </p>
            </motion.div>
            
            {/* Simple Member Center Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: BookOpen, 
                  title: currentLang === 'ar' ? 'المكتبة الرقمية' : 'Digital Library', 
                  desc: currentLang === 'ar' ? 'وصول لآلاف المصادر الهندسية' : 'Access to thousands of engineering resources'
                },
                { 
                  icon: Briefcase, 
                  title: currentLang === 'ar' ? 'فرص عمل' : 'Job Opportunities', 
                  desc: currentLang === 'ar' ? 'وظائف حصرية للأعضاء' : 'Exclusive jobs for members'
                },
                { 
                  icon: GraduationCap, 
                  title: currentLang === 'ar' ? 'التطوير المهني' : 'Professional Development', 
                  desc: currentLang === 'ar' ? 'دورات وورش عمل متقدمة' : 'Advanced courses and workshops'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-white/20"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium w-full">
                    {currentLang === 'ar' ? 'استكشف الآن' : 'Explore Now'}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Society in Brief Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-slate-50 relative overflow-hidden">
          {/* Professional Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Professional Title Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full"></div>
                <div className="mx-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full"></div>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-slate-700 to-blue-600 bg-clip-text text-transparent">
                  {currentLang === 'ar' ? 'الجمعية في سطور' : 'Society in Brief'}
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                {currentLang === 'ar' 
                  ? 'خمسة وأربعون عاماً من الريادة الهندسية والتميز في خدمة المهندسين البحرينيين'
                  : 'Forty-five years of engineering leadership and excellence serving Bahraini engineers'
                }
              </p>
            </motion.div>
            
            {/* Creative Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Vision & Mission Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Vision Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-gradient-to-br from-blue-600 to-slate-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-white/10"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{societyInfo.vision}</h3>
                    <p className="text-blue-100 leading-relaxed">
                      {currentLang === 'ar' 
                        ? 'الجمعية الوطنية الرائدة التي تحتضن المهندسين من جميع التخصصات وتعمل على الإرتقاء بالمستوى المهني والتقني والعلمي للمهندسين وتطوير كفاءتهم من خلال تعزيز القيم والممارسات الأخلاقية السليمة والإبداعية لمهنة الهندسة.'
                        : 'The leading national society that embraces engineers from all disciplines and works to elevate the professional, technical, and scientific level of engineers and develop their competencies through promoting sound and creative ethical values and practices for the engineering profession.'
                      }
                    </p>
                  </div>
                </motion.div>
                
                {/* Mission Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-gradient-to-br from-slate-700 to-blue-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-white/10"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{societyInfo.mission}</h3>
                    <p className="text-blue-100 leading-relaxed">
                      {currentLang === 'ar'
                        ? 'توفير أعلى الخدمات لأعضاء الجمعية لضمان الفائدة القصوى للمهندسين. رفع مستوى العمل الهندسي في القطاعين العام والخاص.'
                        : 'Provide the highest services to society members to ensure maximum benefit for engineers. Raise the level of engineering work in both public and private sectors.'
                      }
                    </p>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Values & Achievements with Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Image Section */}
                <div className="relative h-64 rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop" 
                       alt="BSE Team" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentLang === 'ar' ? 'فريق العمل المتميز' : 'Outstanding Team'}
                    </h3>
                    <p className="text-blue-100">
                      {currentLang === 'ar' ? 'مهندسون محترفون يخدمون المجتمع' : 'Professional engineers serving the community'}
                    </p>
                  </div>
                </div>
                
                {/* Values Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {currentLang === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {societyInfo.values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center space-x-3 space-x-reverse bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800 text-sm">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Professional Strategic Goals Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-blue-700 via-slate-800 to-blue-900 rounded-3xl p-16 shadow-2xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  {/* Professional Title */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-6">
                      <div className="h-0.5 w-16 bg-white/30"></div>
                      <div className="mx-8">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Target className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="h-0.5 w-16 bg-white/30"></div>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4">
                      {currentLang === 'ar' ? 'أهدافنا الاستراتيجية' : 'Our Strategic Goals'}
                    </h3>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                      {currentLang === 'ar' 
                        ? 'رؤيتنا المستقبلية لتمكين المهندسين البحرينيين'
                        : 'Our future vision for empowering Bahraini engineers'
                      }
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: <Rocket className="w-8 h-8" />,
                        goal: currentLang === 'ar' 
                          ? 'تمكين المهندس الوطني لأن يكون الخيار الأول لدعم الاقتصاد الوطني والتنمية المستدامة.' 
                          : 'Empower the national engineer to be the first choice to support the national economy and sustainable development.'
                      },
                      {
                        icon: <Globe className="w-8 h-8" />,
                        goal: currentLang === 'ar' 
                          ? 'ريادة المهندس البحريني نحو مجتمع هندسي تنافسي عالمي.' 
                          : 'Lead the Bahraini engineer towards a globally competitive engineering society.'
                      },
                      {
                        icon: <Award className="w-8 h-8" />,
                        goal: currentLang === 'ar' 
                          ? 'كسب الاحترام والاعتراف من حيث الالتزام نحو المهنة والأعضاء والمجتمع.' 
                          : 'Gain respect and recognition through commitment to the profession, members, and society.'
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4 space-x-reverse">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                            <div className="text-white">
                              {item.icon}
                            </div>
                          </div>
                          <p className="text-blue-100 leading-relaxed text-sm">{item.goal}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Membership CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-700 via-slate-800 to-blue-900 relative overflow-hidden">
          {/* Background Pattern - Same as Member Center */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-bounce"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <h2 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {currentLang === 'ar' ? 'أبدأ رحلتك الهندسية' : 'Start Your Engineering Journey'}
                  </h2>
                  <p className="text-2xl lg:text-3xl font-semibold text-blue-100 mb-6">
                    {currentLang === 'ar' ? 'بالتقديم على العضوية' : 'By Applying for Membership'}
                  </p>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-blue-100 mb-8 leading-relaxed"
                >
                  {currentLang === 'ar' 
                    ? 'انضم إلى مجتمع المهندسين المحترفين في البحرين واحصل على فرص تطوير مهني لا محدودة، شبكة علاقات قوية، ووصول إلى موارد حصرية.'
                    : 'Join the professional engineering community in Bahrain and get unlimited career development opportunities, strong networking, and access to exclusive resources.'
                  }
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    {currentLang === 'ar' ? 'قدم الآن' : 'Apply Now'}
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                    {currentLang === 'ar' ? 'المزيد من المعلومات' : 'Learn More'}
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Right Content - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {memberServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-blue-100 mb-3">{service.description}</p>
                        <ul className="space-y-2">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-blue-100 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/favicon.ico" alt="BSE Logo" className="w-10 h-10" />
                <h3 className="text-xl font-bold text-blue-900">
                  {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'Bahrain Society of Engineers'}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {currentLang === 'ar' 
                  ? 'الريادة في الهندسة منذ عام 1972. نقدم خدمات مهنية متكاملة للمهندسين في البحرين.' 
                  : 'Leadership in Engineering Since 1972. We provide comprehensive professional services for engineers in Bahrain.'
                }
              </p>
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <a href="https://facebook.com/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 00-4.241 2.937 4.958 4.958 0 00-.432-2.229 10 10 0 012.825-.775 4.958 4.958 0 001.553 1.779 4.958 4.958 0 003.688-1.779 10 10 0 002.825.775 4.958 4.958 0 00-.432 2.229 4.958 4.958 0 00-4.241-2.937 4.958 4.958 0 00-4.241 2.937 4.958 4.958 0 00-.432 2.229 10 10 0 002.825.775 4.958 4.958 0 001.553-1.779 4.958 4.958 0 003.688 1.779 10 10 0 002.825-.775 4.958 4.958 0 00-.432-2.229 4.958 4.958 0 00-4.241 2.937 4.958 4.958 0 00-4.241-2.937 4.958 4.958 0 00-.432 2.229 10 10 0 002.825.775 4.958 4.958 0 001.553 1.779 4.958 4.958 0 003.688-1.779 10 10 0 002.825-.775 4.958 4.958 0 00-.432 2.229 4.958 4.958 0 00-4.241 2.937 4.958 4.958 0 00-4.241-2.937 4.958 4.958 0 00-.432 2.229 10 10 0 002.825.775 4.958 4.958 0 001.553 1.779 4.958 4.958 0 003.688 1.779 10 10 0 002.825-.775z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 2.612.051.323.072.658.072 1.985 0 3.496-1.724 4.826-4.799 4.826-.785 0-1.622-.215-2.421-.659 1.603-.281 2.834-1.704 2.834-3.754 0-.027 0-.055 0-.082a4.02 4.02 0 00.692-2.874c-1.729-.152-3.134-.932-3.134-3.746 0-.698.099-1.383.317-2.008-.764 1.484-.149 2.834-.787 2.834-1.804 0-.416-.081-.813-.23-1.169 2.466-.277 4.048-2.412 4.048-4.851 0-2.863-2.322-5.186-5.186-5.186-3.064 0-5.186 2.322-5.186 5.186 0 1.093.353 2.115.951 2.75 1.977 1.834 1.657 3.769.465 3.769-.465 0 0 1.823 1.801 1.823 3.787 0 2.746-2.081 5.004-4.768 5.004z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{currentLang === 'ar' ? 'من نحن' : 'About Us'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'من نحن' : 'About Us'}</a></li>
                <li><a href="/vision-mission" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'المهمة والرؤية' : 'Vision & Mission'}</a></li>
                <li><a href="/founders" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'المؤسسون' : 'Founders'}</a></li>
                <li><a href="/board" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}</a></li>
                <li><a href="/executive" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'الإدارة التنفيذية' : 'Executive Management'}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{currentLang === 'ar' ? 'العضوية' : 'Membership'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/membership-categories" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'أنواع العضوية' : 'Membership Types'}</a></li>
                <li><a href="/membership-terms" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'شروط العضوية' : 'Membership Terms'}</a></li>
                <li><a href="/membership-fees" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'رسوم العضوية' : 'Membership Fees'}</a></li>
                <li><a href="/membership-application" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'طلب العضوية' : 'Membership Application'}</a></li>
                <li><a href="/membership-statistics" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'إحصائيات' : 'Statistics'}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{currentLang === 'ar' ? 'التواصل' : 'Contact'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</a></li>
                <li><a href="/conferences" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'المؤتمرات' : 'Conferences'}</a></li>
                <li><a href="/training" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'مركز التدريب' : 'Training Center'}</a></li>
                <li><a href="/news" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'الأخبار' : 'News'}</a></li>
                <li><a href="/events" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'فعاليات' : 'Events'}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {currentLang === 'ar' ? 'جمعية المهندسين البحرينية. جميع الحقوق محفوظة.' : 'Bahrain Society of Engineers. All rights reserved.'}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="/privacy" className="hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
                <a href="/terms" className="hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
                </a>
                <a href="/sitemap" className="hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

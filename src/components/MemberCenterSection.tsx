import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, Lightbulb, Building2, CheckCircle, ArrowRight, BookOpen, Users, Award, Target, Shield, Zap, Rocket, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface MemberCenterSectionProps {
  currentLang: string;
}

const MemberCenterSection = ({ currentLang }: MemberCenterSectionProps) => {
  const memberServices = [
    {
      icon: Briefcase,
      title: currentLang === 'ar' ? 'العضوية الاحترافية' : 'Professional Membership',
      description: currentLang === 'ar' ? 'احصل على اعتماد مهني معترف به عالمياً' : 'Get internationally recognized professional accreditation',
      features: [
        currentLang === 'ar' ? 'شهادة عضوية معتمدة' : 'Certified membership certificate',
        currentLang === 'ar' ? 'فرص توظيف حصرية' : 'Exclusive job opportunities',
        currentLang === 'ar' ? 'دورات تدريبية مجانية' : 'Free training courses',
        currentLang === 'ar' ? 'شبكة مهنيين واسعة' : 'Extensive professional network'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      title: currentLang === 'ar' ? 'التعليم المستمر' : 'Continuing Education',
      description: currentLang === 'ar' ? 'برامج تعليمية متقدمة لتطوير مسيرتك المهنية' : 'Advanced educational programs to develop your career',
      features: [
        currentLang === 'ar' ? 'برامج ماجستير مهنية' : 'Professional master programs',
        currentLang === 'ar' ? 'ورش عمل متخصصة' : 'Specialized workshops',
        currentLang === 'ar' ? 'مؤتمرات دولية' : 'International conferences',
        currentLang === 'ar' ? 'شهادات متقدمة' : 'Advanced certificates'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: currentLang === 'ar' ? 'خدمات المجتمع' : 'Community Services',
      description: currentLang === 'ar' ? 'ساهم في تطوير المجتمع الهندسي' : 'Contribute to developing the engineering community',
      features: [
        currentLang === 'ar' ? 'برامج تطوعية' : 'Volunteer programs',
        currentLang === 'ar' ? 'مشاريع مجتمعية' : 'Community projects',
        currentLang === 'ar' ? 'إرشاد المهندسين الشباب' : 'Mentoring young engineers',
        currentLang === 'ar' ? 'فعاليات خيرية' : 'Charity events'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Lightbulb,
      title: currentLang === 'ar' ? 'الاستشارات الهندسية' : 'Engineering Consulting',
      description: currentLang === 'ar' ? 'احصل على استشارات من خبراء المجال' : 'Get consultations from field experts',
      features: [
        currentLang === 'ar' ? 'استشارات فنية' : 'Technical consultations',
        currentLang === 'ar' ? 'تقييم المشاريع' : 'Project evaluation',
        currentLang === 'ar' ? 'دراسات جدوى' : 'Feasibility studies',
        currentLang === 'ar' ? 'حلول مبتكرة' : 'Innovative solutions'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Building2,
      title: currentLang === 'ar' ? 'التطوير المهني' : 'Professional Development',
      description: currentLang === 'ar' ? 'خطط تطوير مهنية مخصصة لك' : 'Personalized professional development plans',
      features: [
        currentLang === 'ar' ? 'تقييم المهارات' : 'Skills assessment',
        currentLang === 'ar' ? 'خطط مسار وظيفي' : 'Career path planning',
        currentLang === 'ar' ? 'تدريب قيادي' : 'Leadership training',
        currentLang === 'ar' ? 'إرشاد مهني' : 'Career guidance'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: BookOpen,
      title: currentLang === 'ar' ? 'المكتبة الرقمية' : 'Digital Library',
      description: currentLang === 'ar' ? 'وصول لمصادر المعرفة الهندسية' : 'Access to engineering knowledge resources',
      features: [
        currentLang === 'ar' ? 'مجلات علمية' : 'Scientific journals',
        currentLang === 'ar' ? 'كتب مرجعية' : 'Reference books',
        currentLang === 'ar' ? 'أبحاث ودراسات' : 'Research and studies',
        currentLang === 'ar' ? 'قواعد بيانات' : 'Databases'
      ],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Users,
      title: currentLang === 'ar' ? 'لجان الجمعية' : 'Association Committees',
      description: currentLang === 'ar' ? 'انضم إلى اللجان المتخصصة وساهم في تطوير القطاع' : 'Join specialized committees and contribute to sector development',
      features: [
        currentLang === 'ar' ? 'لجان داخلية متخصصة' : 'Specialized internal committees',
        currentLang === 'ar' ? 'فرق عمل حكومية' : 'Government task forces',
        currentLang === 'ar' ? 'فرص تطوعية' : 'Volunteer opportunities',
        currentLang === 'ar' ? 'تطوير مهني' : 'Professional development'
      ],
      color: 'from-teal-500 to-teal-600',
      link: '/committees'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: currentLang === 'ar' ? 'شبكة واسعة' : 'Extensive Network',
      description: currentLang === 'ar' ? 'انضم إلى مجتمع من 5000+ مهندس' : 'Join a community of 5000+ engineers'
    },
    {
      icon: Award,
      title: currentLang === 'ar' ? 'اعتماد مهني' : 'Professional Accreditation',
      description: currentLang === 'ar' ? 'شهادات معترف بها عالمياً' : 'Internationally recognized certificates'
    },
    {
      icon: Target,
      title: currentLang === 'ar' ? 'تطوير المهارات' : 'Skills Development',
      description: currentLang === 'ar' ? 'برامج تدريبية متقدمة' : 'Advanced training programs'
    },
    {
      icon: Shield,
      title: currentLang === 'ar' ? 'دعم وحماية' : 'Support & Protection',
      description: currentLang === 'ar' ? 'دعم قانوني ومهني' : 'Legal and professional support'
    }
  ];

  const societyInfo = {
    values: [
      currentLang === 'ar' ? 'التميز' : 'Excellence',
      currentLang === 'ar' ? 'النزاهة' : 'Integrity',
      currentLang === 'ar' ? 'الابتكار' : 'Innovation',
      currentLang === 'ar' ? 'الاستدامة' : 'Sustainability'
    ]
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-white/30"></div>
            <div className="mx-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="h-px w-16 bg-white/30"></div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            {currentLang === 'ar' ? 'مركز الأعضاء' : 'Member Center'}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {currentLang === 'ar' 
              ? 'اكتشف جميع المزايا والخدمات الحصرية المتاحة لأعضاء جمعية المهندسين البحرينية'
              : 'Discover all the exclusive benefits and services available to members of the Bahrain Society of Engineers'
            }
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-blue-200 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {memberServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-blue-100 mb-4">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-blue-100">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center text-blue-300 mt-6 cursor-pointer group">
                  {service.link ? (
                    <Link to={service.link} className="flex items-center font-semibold hover:text-blue-200 transition-colors">
                      {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  ) : (
                    <>
                      <span className="font-semibold">
                        {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                      </span>
                      <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
                    icon: <Star className="w-8 h-8" />,
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
  );
};

export default MemberCenterSection;

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, GraduationCap, Heart, Lightbulb, Building2, CheckCircle, Users, Award, Target, Shield, Zap, Rocket, Globe, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MembershipCTASectionProps {
  currentLang: string;
}

const MembershipCTASection = ({ currentLang }: MembershipCTASectionProps) => {
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
    }
  ];

  return (
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
  );
};

export default MembershipCTASection;

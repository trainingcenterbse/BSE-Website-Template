import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, Heart, Lightbulb, Building2, ChevronRight, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  currentLang: string;
}

const ServicesSection = ({ currentLang }: ServicesSectionProps) => {
  const services = [
    {
      icon: BookOpen,
      title: currentLang === 'ar' ? 'التدريب المهني' : 'Professional Training',
      description: currentLang === 'ar' 
        ? 'برامج تدريبية معتمدة لتطوير المهارات الهندسية'
        : 'Accredited training programs to develop engineering skills',
      features: [
        currentLang === 'ar' ? 'دورات معتمدة دولياً' : 'Internationally accredited courses',
        currentLang === 'ar' ? 'مدربون خبراء' : 'Expert trainers',
        currentLang === 'ar' ? 'شهادات مهنية' : 'Professional certificates'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Briefcase,
      title: currentLang === 'ar' ? 'العضوية الاحترافية' : 'Professional Membership',
      description: currentLang === 'ar' 
        ? 'انضم إلى مجتمع المهندسين المحترفين'
        : 'Join the community of professional engineers',
      features: [
        currentLang === 'ar' ? 'اعتماد مهني' : 'Professional accreditation',
        currentLang === 'ar' ? 'شبكة علاقات واسعة' : 'Extensive network',
        currentLang === 'ar' ? 'فرص وظيفية' : 'Job opportunities'
      ],
      color: 'from-slate-500 to-slate-600'
    },
    {
      icon: GraduationCap,
      title: currentLang === 'ar' ? 'التعليم المستمر' : 'Continuing Education',
      description: currentLang === 'ar' 
        ? 'برامج تعليمية متقدمة للمهندسين'
        : 'Advanced educational programs for engineers',
      features: [
        currentLang === 'ar' ? 'برامج ماجستير' : 'Master programs',
        currentLang === 'ar' ? 'ورش عمل متخصصة' : 'Specialized workshops',
        currentLang === 'ar' ? 'مؤتمرات دولية' : 'International conferences'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Heart,
      title: currentLang === 'ar' ? 'خدمات المجتمع' : 'Community Services',
      description: currentLang === 'ar' 
        ? 'مبادرات خدمية للمجتمع الهندسي'
        : 'Service initiatives for the engineering community',
      features: [
        currentLang === 'ar' ? 'برامج تطوعية' : 'Volunteer programs',
        currentLang === 'ar' ? 'مشاريع مجتمعية' : 'Community projects',
        currentLang === 'ar' ? 'دعم الشباب' : 'Youth support'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Lightbulb,
      title: currentLang === 'ar' ? 'الاستشارات الهندسية' : 'Engineering Consulting',
      description: currentLang === 'ar' 
        ? 'خبراء استشاريون في جميع التخصصات'
        : 'Consulting experts in all specializations',
      features: [
        currentLang === 'ar' ? 'استشارات فنية' : 'Technical consultations',
        currentLang === 'ar' ? 'تقييم المشاريع' : 'Project evaluation',
        currentLang === 'ar' ? 'دراسات جدوى' : 'Feasibility studies'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Building2,
      title: currentLang === 'ar' ? 'التطوير العقاري' : 'Real Estate Development',
      description: currentLang === 'ar' 
        ? 'خدمات هندسية للمشاريع العقارية'
        : 'Engineering services for real estate projects',
      features: [
        currentLang === 'ar' ? 'تصميم معماري' : 'Architectural design',
        currentLang === 'ar' ? 'إشراف فني' : 'Technical supervision',
        currentLang === 'ar' ? 'إدارة مشاريع' : 'Project management'
      ],
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-600"></div>
            <div className="mx-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent mb-6">
            {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentLang === 'ar' 
              ? 'نقدم مجموعة شاملة من الخدمات المهنية لتلبية احتياجات المهندسين والمؤسسات الهندسية'
              : 'We offer a comprehensive range of professional services to meet the needs of engineers and engineering organizations'
            }
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors cursor-pointer">
                  <span className="font-semibold">
                    {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                  </span>
                  <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-slate-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentLang === 'ar' ? 'هل لديك احتياجات خاصة؟' : 'Have Special Requirements?'}
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {currentLang === 'ar' 
                ? 'نحن هنا لتقديم حلول هندسية مخصصة تناسب احتياجاتك الفريدة'
                : 'We are here to provide customized engineering solutions that fit your unique needs'
              }
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

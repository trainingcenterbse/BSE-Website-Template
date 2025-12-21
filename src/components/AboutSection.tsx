import { motion } from "framer-motion";
import { Users, Building, Award, TrendingUp, Sparkles, Globe, Target, Shield, Zap } from "lucide-react";

interface AboutSectionProps {
  currentLang: string;
}

const AboutSection = ({ currentLang }: AboutSectionProps) => {
  const stats = [
    { icon: Users, value: "5000+", label: currentLang === 'ar' ? 'عضو' : 'Members' },
    { icon: Building, value: "50+", label: currentLang === 'ar' ? 'شريك' : 'Partners' },
    { icon: Award, value: "200+", label: currentLang === 'ar' ? 'حدث' : 'Events' },
    { icon: TrendingUp, value: "45", label: currentLang === 'ar' ? 'سنة' : 'Years' }
  ];

  const societyInfo = {
    mission: currentLang === 'ar' 
      ? 'تمكين المهندسين البحرينيين وتطوير المهنة الهندسية من خلال التدريب والشراكات والتميز'
      : 'Empower Bahraini engineers and develop the engineering profession through training, partnerships, and excellence',
    vision: currentLang === 'ar'
      ? 'أن نكون المنظمة الهندسية الرائدة في المنطقة والمحرك الرئيسي للتطوير المستدامة'
      : 'To be the leading engineering organization in the region and the main driver of sustainable development',
    values: [
      currentLang === 'ar' ? 'التميز' : 'Excellence',
      currentLang === 'ar' ? 'النزاهة' : 'Integrity',
      currentLang === 'ar' ? 'الابتكار' : 'Innovation',
      currentLang === 'ar' ? 'الاستدامة' : 'Sustainability'
    ]
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-600"></div>
            <div className="mx-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-blue-600 to-transparent"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent mb-6"
          >
            {currentLang === 'ar' ? 'من نحن' : 'About Us'}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {currentLang === 'ar' 
              ? 'جمعية المهندسين البحرينية هي المنظمة المهنية الرائدة في مملكة البحرين، تعمل على تطوير المهنة الهندسية وتمكين المهندسين منذ عام 1972'
              : 'Bahrain Society of Engineers is the leading professional organization in the Kingdom of Bahrain, working to develop the engineering profession and empower engineers since 1972'
            }
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {currentLang === 'ar' ? 'رؤيتنا' : 'Our Vision'}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {societyInfo.vision}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {currentLang === 'ar' ? 'مهمتنا' : 'Our Mission'}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {societyInfo.mission}
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-600 via-slate-700 to-blue-800 rounded-3xl p-12 shadow-2xl text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/5"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center mb-6">
                <div className="h-px w-16 bg-white/30"></div>
                <div className="mx-8">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="h-px w-16 bg-white/30"></div>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {currentLang === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {societyInfo.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-yellow-300" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">{value}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Globe, CheckCircle, Star, Building, FileText, Target, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TrainingAccreditations = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const accreditations = [
    {
      icon: <Building className="w-8 h-8" />,
      title: currentLang === 'ar' ? 'وزارة الأشغال' : 'Ministry of Works',
      description: currentLang === 'ar' ? 'اعتماد رسمي من وزارة الأشغال لمملكة البحرين' : 'Official accreditation from Ministry of Works of Kingdom of Bahrain',
      type: 'government'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: currentLang === 'ar' ? 'اتحاد المهندسين العرب' : 'Arab Engineers Union',
      description: currentLang === 'ar' ? 'مركز تدريب هندسي إقليمي عربي معتمد' : 'Accredited regional Arab engineering training center',
      type: 'regional'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'FIDIC',
      description: currentLang === 'ar' ? 'اتفاقية في مجال التدريب على العقود والمطالبات والتسويات' : 'Agreement in training on contracts, claims and settlements',
      type: 'international'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'IPM Australia',
      description: currentLang === 'ar' ? 'اتفاقية في مجالات إدارة المشاريع' : 'Agreement in project management fields',
      type: 'international'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'AIQS',
      description: currentLang === 'ar' ? 'اتفاقية في مجال الكميات والتكاليف الهندسية' : 'Agreement in engineering quantities and costs',
      type: 'international'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'اعتراف عالمي' : 'Global Recognition',
      description: currentLang === 'ar' ? 'شهادات معترف بها عالمياً' : 'Globally recognized certificates'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'فرص عمل' : 'Job Opportunities',
      description: currentLang === 'ar' ? 'فتح آفاق جديدة للمهندسين' : 'Opening new horizons for engineers'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: currentLang === 'ar' ? 'جودة عالية' : 'High Quality',
      description: currentLang === 'ar' ? 'برامج تدريبية ذات جودة عالية' : 'High quality training programs'
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
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="International Accreditations" 
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
                  {currentLang === 'ar' ? 'الاعتمادات الدولية' : 'International Accreditations'}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'اعتمادات محلية وإقليمية ودولية معتمدة'
                    : 'Accredited local, regional and international accreditations'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Accreditations Section */}
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
                {currentLang === 'ar' ? 'الاعتمادات المعتمدة' : 'Accredited Institutions'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accreditations.map((accreditation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {accreditation.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{accreditation.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{accreditation.description}</p>
                  <div className="mt-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      accreditation.type === 'government' ? 'bg-green-100 text-green-700' :
                      accreditation.type === 'regional' ? 'bg-blue-100 text-blue-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {accreditation.type === 'government' ? (currentLang === 'ar' ? 'حكومي' : 'Government') :
                       accreditation.type === 'regional' ? (currentLang === 'ar' ? 'إقليمي' : 'Regional') :
                       (currentLang === 'ar' ? 'دولي' : 'International')}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'فوائد الاعتمادات' : 'Benefits of Accreditations'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-600 to-blue-700 relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentLang === 'ar' ? 'انضم إلى برامجنا المعتمدة' : 'Join Our Accredited Programs'}
              </h2>
              <p className="text-xl text-slate-100 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar'
                  ? 'احصل على شهادات معترف بها عالمياً'
                  : 'Get globally recognized certificates'
                }
              </p>
              <button className="bg-white text-slate-700 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                {currentLang === 'ar' ? 'استعرض البرامج' : 'Browse Programs'}
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrainingAccreditations;

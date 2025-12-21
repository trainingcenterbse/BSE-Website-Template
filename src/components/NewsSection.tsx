import { motion } from "framer-motion";
import { Calendar, ArrowRight, FileText, MessageSquare } from "lucide-react";

interface NewsSectionProps {
  currentLang: string;
}

const NewsSection = ({ currentLang }: NewsSectionProps) => {
  const news = [
    {
      id: 1,
      title: currentLang === 'ar' ? 'إطلاق برنامج التدريب المهني الجديد' : 'Launch of New Professional Training Program',
      description: currentLang === 'ar' ? 'برنامج تدريبي متطور يهدف إلى تطوير المهارات الهندسية للشباب' : 'Advanced training program aimed at developing engineering skills for youth',
      date: '2024-12-15',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
      category: currentLang === 'ar' ? 'تدريب' : 'Training',
      featured: true
    },
    {
      id: 2,
      title: currentLang === 'ar' ? 'شراكة استراتيجية مع وزارة الأشغال' : 'Strategic Partnership with Ministry of Works',
      description: currentLang === 'ar' ? 'تعاون لتطوير المعايير الهندسية الوطنية' : 'Cooperation to develop national engineering standards',
      date: '2024-12-10',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      category: currentLang === 'ar' ? 'شراكات' : 'Partnerships',
      featured: false
    },
    {
      id: 3,
      title: currentLang === 'ar' ? 'توقيع اتفاقية تعاون مع جامعة البحرين' : 'Cooperation Agreement with University of Bahrain',
      description: currentLang === 'ar' ? 'برنامج مشترك للأبحاث الهندسية المبتكرة' : 'Joint program for innovative engineering research',
      date: '2024-12-08',
      image: 'https://images.unsplash.com/photo-1559028012-cad4cdaa89f1?w=800&h=400&fit=crop',
      category: currentLang === 'ar' ? 'أبحاث' : 'Research',
      featured: false
    },
    {
      id: 4,
      title: currentLang === 'ar' ? 'تكريم الفائزين في مسابقة الابتكار الهندسي' : 'Awarding Winners of Engineering Innovation Competition',
      description: currentLang === 'ar' ? 'تكريم المشاريع المبتكرة للمهندسين الشباب' : 'Honoring innovative projects by young engineers',
      date: '2024-12-05',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      category: currentLang === 'ar' ? 'جوائز' : 'Awards',
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'تدريب':
      case 'Training':
        return 'bg-blue-100 text-blue-600';
      case 'شراكات':
      case 'Partnerships':
        return 'bg-green-100 text-green-600';
      case 'أبحاث':
      case 'Research':
        return 'bg-purple-100 text-purple-600';
      case 'جوائز':
      case 'Awards':
        return 'bg-yellow-100 text-yellow-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>
          
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
              <img src={news[0].image} alt="Featured News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(item.category)}`}>
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

        {/* All News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {currentLang === 'ar' ? 'جميع الأخبار' : 'All News'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center text-blue-600 text-sm group-hover:text-blue-700 transition-colors">
                      <span>{currentLang === 'ar' ? 'اقرأ' : 'Read'}</span>
                      <ArrowRight className="w-3 h-3 mr-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-slate-600 rounded-3xl p-12 shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {currentLang === 'ar' ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
              </h3>
              <p className="text-blue-100 mb-8">
                {currentLang === 'ar' 
                  ? 'احصل على آخر الأخبار والفعاليات مباشرة في بريدك الإلكتروني'
                  : 'Get the latest news and events directly in your email'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={currentLang === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                  className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {currentLang === 'ar' ? 'اشترك' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;

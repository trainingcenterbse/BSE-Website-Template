import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, Clock, Users, Star, Filter, Search, ChevronDown, BookOpen, Target, Award, Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TrainingCourses = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    {
      id: 1,
      title: currentLang === 'ar' ? 'إدارة المشاريع الاحترافية' : 'Professional Project Management',
      description: currentLang === 'ar' 
        ? 'دورة متقدمة في إدارة المشاريع باستخدام معايير PMI وPMP'
        : 'Advanced course in project management using PMI and PMP standards',
      category: 'management',
      level: 'advanced',
      duration: currentLang === 'ar' ? '40 ساعة' : '40 hours',
      price: currentLang === 'ar' ? '500 د.ب' : '500 BHD',
      rating: 4.8,
      students: 245,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: currentLang === 'ar' ? 'د. أحمد محمد' : 'Dr. Ahmed Mohammed',
      certificate: 'PMP',
      startDate: currentLang === 'ar' ? '15 يناير 2024' : 'January 15, 2024',
      accreditation: 'PMI'
    },
    {
      id: 2,
      title: currentLang === 'ar' ? 'هندسة السلامة والصحة المهنية' : 'Occupational Health and Safety Engineering',
      description: currentLang === 'ar'
        ? 'دورة معتمدة في سلامة المهنة والصحة حسب معايير OSHA'
        : 'Accredited course in occupational safety and health according to OSHA standards',
      category: 'safety',
      level: 'intermediate',
      duration: currentLang === 'ar' ? '30 ساعة' : '30 hours',
      price: currentLang === 'ar' ? '350 د.ب' : '350 BHD',
      rating: 4.6,
      students: 189,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: currentLang === 'ar' ? 'م. فاطمة علي' : 'Eng. Fatima Ali',
      certificate: 'OSHA',
      startDate: currentLang === 'ar' ? '20 يناير 2024' : 'January 20, 2024',
      accreditation: 'OSHA'
    },
    {
      id: 3,
      title: currentLang === 'ar' ? 'التصميم باستخدام AutoCAD المتقدم' : 'Advanced AutoCAD Design',
      description: currentLang === 'ar'
        ? 'دورة متقدمة في التصميم الهندسي باستخدام برنامج AutoCAD'
        : 'Advanced course in engineering design using AutoCAD software',
      category: 'technical',
      level: 'beginner',
      duration: currentLang === 'ar' ? '25 ساعة' : '25 hours',
      price: currentLang === 'ar' ? '200 د.ب' : '200 BHD',
      rating: 4.7,
      students: 312,
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: currentLang === 'ar' ? 'م. خالد إبراهيم' : 'Eng. Khalid Ibrahim',
      certificate: 'AutoCAD',
      startDate: currentLang === 'ar' ? '25 يناير 2024' : 'January 25, 2024',
      accreditation: 'Autodesk'
    },
    {
      id: 4,
      title: currentLang === 'ar' ? 'إدارة الجودة الشاملة' : 'Total Quality Management',
      description: currentLang === 'ar'
        ? 'دورة في إدارة الجودة الشاملة و ISO 9001'
        : 'Course in total quality management and ISO 9001',
      category: 'quality',
      level: 'intermediate',
      duration: currentLang === 'ar' ? '35 ساعة' : '35 hours',
      price: currentLang === 'ar' ? '400 د.ب' : '400 BHD',
      rating: 4.9,
      students: 156,
      image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: currentLang === 'ar' ? 'د. مريم أحمد' : 'Dr. Mariam Ahmed',
      certificate: 'ISO 9001',
      startDate: currentLang === 'ar' ? '1 فبراير 2024' : 'February 1, 2024',
      accreditation: 'ISO'
    },
    {
      id: 5,
      title: currentLang === 'ar' ? 'الهندسة المدنية المتقدمة' : 'Advanced Civil Engineering',
      description: currentLang === 'ar'
        ? 'دورة متخصصة في التصميم والتنفيذ للمشاريع المدنية'
        : 'Specialized course in design and implementation of civil projects',
      category: 'technical',
      level: 'advanced',
      duration: currentLang === 'ar' ? '45 ساعة' : '45 hours',
      price: currentLang === 'ar' ? '600 د.ب' : '600 BHD',
      rating: 4.8,
      students: 98,
      image: 'https://images.unsplash.com/photo-1581094792469-8b9ede0c4e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: currentLang === 'ar' ? 'م. علي حسن' : 'Eng. Ali Hassan',
      certificate: 'Civil Eng.',
      startDate: currentLang === 'ar' ? '5 فبراير 2024' : 'February 5, 2024',
      accreditation: 'BSE'
    },
    {
      id: 6,
      title: currentLang === 'ar' ? 'تطوير الموارد البشرية' : 'Human Resources Development',
      description: currentLang === 'ar'
        ? 'دورة في تخطيط وتطوير الموارد البشرية في الشركات'
        : 'Course in planning and developing human resources in companies',
      category: 'management',
      level: 'intermediate',
      duration: currentLang === 'ar' ? '30 ساعة' : '30 hours',
      price: currentLang === 'ar' ? '300 د.ب' : '300 BHD',
      rating: 4.5,
      students: 267,
      image: 'https://images.unsplash.com/photo-1515189029135-783ea4bc4247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      instructor: currentLang === 'ar' ? 'د. سارة محمد' : 'Dr. Sara Mohammed',
      certificate: 'HRM',
      startDate: currentLang === 'ar' ? '10 فبراير 2024' : 'February 10, 2024',
      accreditation: 'SHRM'
    }
  ];

  const categories = [
    { value: 'all', label: currentLang === 'ar' ? 'جميع الفئات' : 'All Categories' },
    { value: 'technical', label: currentLang === 'ar' ? 'هندسية' : 'Technical' },
    { value: 'management', label: currentLang === 'ar' ? 'إدارية' : 'Management' },
    { value: 'safety', label: currentLang === 'ar' ? 'سلامة' : 'Safety' },
    { value: 'quality', label: currentLang === 'ar' ? 'جودة' : 'Quality' }
  ];

  const levels = [
    { value: 'all', label: currentLang === 'ar' ? 'جميع المستويات' : 'All Levels' },
    { value: 'beginner', label: currentLang === 'ar' ? 'مبتدئ' : 'Beginner' },
    { value: 'intermediate', label: currentLang === 'ar' ? 'متوسط' : 'Intermediate' },
    { value: 'advanced', label: currentLang === 'ar' ? 'متقدم' : 'Advanced' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

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
        <section className="relative h-96 lg:h-[500px] bg-gradient-to-br from-red-900 via-red-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb74f289b3f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Training Courses" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/60 to-slate-900/80"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">
                  {currentLang === 'ar' ? 'الدورات التدريبية' : 'Training Courses'}
                </h1>
                <p className="text-xl lg:text-2xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'دورات معتمدة لتطوير مهاراتك المهنية'
                    : 'Accredited courses to develop your professional skills'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-white via-slate-50 to-red-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-6 lg:p-8">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${currentLang === 'ar' ? 'right-4' : 'left-4'}`} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={currentLang === 'ar' ? 'ابحث عن دورة تدريبية...' : 'Search for training course...'}
                    className={`w-full ${currentLang === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all duration-300 text-lg`}
                  />
                </div>
              </div>

              {/* Filter Toggle */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-2xl transition-colors duration-300"
                >
                  <Filter className="w-4 h-4" />
                  {currentLang === 'ar' ? 'الفلاتر' : 'Filters'}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                </button>
                <div className="text-gray-600">
                  {filteredCourses.length} {currentLang === 'ar' ? 'دورة متاحة' : 'courses available'}
                </div>
              </div>

              {/* Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-gray-200"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentLang === 'ar' ? 'الفئة' : 'Category'}
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentLang === 'ar' ? 'المستوى' : 'Level'}
                    </label>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    >
                      {levels.map(level => (
                        <option key={level.value} value={level.value}>{level.label}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => window.location.href = `/course/${course.id}`}
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {course.level}
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                        {course.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Course Meta */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{course.students} {currentLang === 'ar' ? 'طالب' : 'students'}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{course.startDate}</span>
                      </div>
                    </div>

                    {/* Instructor */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{course.instructor}</span>
                      </div>
                      <div className="text-lg font-bold text-red-600">
                        {course.price}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {currentLang === 'ar' ? 'لا توجد دورات مطابقة' : 'No matching courses found'}
                </h3>
                <p className="text-gray-500">
                  {currentLang === 'ar' ? 'حاول تعديل معايير البحث' : 'Try adjusting your search criteria'}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-red-600 to-slate-700 relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-red-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'هل أنت مستعد للتطوير؟' : 'Ready to Develop?'}
              </h2>
              <p className="text-2xl text-red-200 font-medium max-w-2xl mx-auto mb-8">
                {currentLang === 'ar'
                  ? 'انضم إلى آلاف المهنيين الذين طوروا مهاراتهم معنا'
                  : 'Join thousands of professionals who developed their skills with us'
                }
              </p>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-2xl font-bold transition-all duration-300 transform group-hover:scale-105">
                {currentLang === 'ar' ? 'ابدأ الآن' : 'Start Now'}
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TrainingCourses;

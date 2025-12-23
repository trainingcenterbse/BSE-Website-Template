import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useParams, useNavigate } from "react-router-dom";
import { 
  Clock, 
  Users, 
  Star, 
  Calendar, 
  Award, 
  Target, 
  BookOpen, 
  CheckCircle, 
  ArrowLeft,
  Globe,
  Play,
  Download,
  Share2,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Mock course data - in real app, this would come from API
  const course = {
    id: parseInt(id || '1'),
    title: currentLang === 'ar' ? 'إدارة المشاريع الاحترافية' : 'Professional Project Management',
    description: currentLang === 'ar' 
      ? 'دورة متقدمة في إدارة المشاريع باستخدام معايير PMI وPMP. تغطي هذه الدورة جميع جوانب إدارة المشاريع من التخطيط إلى التنفيذ والمراقبة والإنهاء.'
      : 'Advanced course in project management using PMI and PMP standards. This course covers all aspects of project management from planning to execution, monitoring, and closure.',
    fullDescription: currentLang === 'ar'
      ? `هذه الدورة الشاملة مصممة للمهنيين الذين يسعون إلى الحصول على شهادة PMP وتطوير مهاراتهم في إدارة المشاريع. 
      
      **ما ستتعلمه:**
      - مبادئ إدارة المشاريع حسب معايير PMI
      - تخطيط المشاريع وتحديد النطاق
      - إدارة الجودة والمخاطر والوقت
      - إدارة المشاريع الدولية
      - إعداد لامتحان PMP
      
      **المتطلبات:**
      - خبرة 3 سنوات في إدارة المشاريع (أو 5 سنوات بدون شهادة جامعية)
      - 35 ساعة تدريب معتمدة في إدارة المشاريع`
      : `This comprehensive course is designed for professionals seeking PMP certification and developing their project management skills.
      
      **What you will learn:**
      - Project management principles according to PMI standards
      - Project planning and scope definition
      - Quality, risk, and time management
      - International project management
      - PMP exam preparation
      
      **Requirements:**
      - 3 years of project management experience (or 5 years without a degree)
      - 35 hours of accredited project management training`,
    category: 'management',
    level: 'advanced',
    duration: currentLang === 'ar' ? '40 ساعة' : '40 hours',
    price: currentLang === 'ar' ? '500 د.ب' : '500 BHD',
    originalPrice: currentLang === 'ar' ? '650 د.ب' : '650 BHD',
    rating: 4.8,
    reviews: 156,
    students: 245,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    instructor: {
      name: currentLang === 'ar' ? 'د. أحمد محمد' : 'Dr. Ahmed Mohammed',
      title: currentLang === 'ar' ? 'خبير إدارة مشاريع معتمد' : 'Certified Project Management Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      experience: currentLang === 'ar' ? '15 عام خبرة' : '15 years experience',
      students: currentLang === 'ar' ? '5000+ طالب' : '5000+ students'
    },
    certificate: 'PMP',
    accreditation: 'PMI',
    startDate: currentLang === 'ar' ? '15 يناير 2024' : 'January 15, 2024',
    endDate: currentLang === 'ar' ? '15 مارس 2024' : 'March 15, 2024',
    schedule: currentLang === 'ar' ? 'السبت والأحد 6-9 مساءً' : 'Saturday & Sunday 6-9 PM',
    location: currentLang === 'ar' ? 'مركز التدريب - جمعية المهندسين البحرينية' : 'Training Center - Bahrain Society of Engineers',
    language: currentLang === 'ar' ? 'العربية' : 'Arabic',
    format: currentLang === 'ar' ? 'حضوري + أونلاين' : 'In-person + Online',
    materials: [
      currentLang === 'ar' ? 'كتاب دورة PDF' : 'PDF course book',
      currentLang === 'ar' ? 'فيديوهات مسجلة' : 'Recorded videos',
      currentLang === 'ar' ? 'اختبارات تجريبية' : 'Practice tests',
      currentLang === 'ar' ? 'شهادة إتمام' : 'Completion certificate'
    ],
    outcomes: [
      currentLang === 'ar' ? 'فهم عميق لإدارة المشاريع' : 'Deep understanding of project management',
      currentLang === 'ar' ? 'الاستعداد لامتحان PMP' : 'Preparation for PMP exam',
      currentLang === 'ar' ? 'مهارات قيادة الفرق' : 'Team leadership skills',
      currentLang === 'ar' ? 'إدارة المشاريع الدولية' : 'International project management'
    ],
    requirements: [
      currentLang === 'ar' ? 'خلفية هندسية أو إدارية' : 'Engineering or administrative background',
      currentLang === 'ar' ? 'خبرة عملية 3 سنوات' : '3 years practical experience',
      currentLang === 'ar' ? 'مهارات استخدام الحاسوب' : 'Computer skills'
    ]
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In real app, this would handle enrollment logic
  };

  const handleShare = () => {
    // In real app, this would open share dialog
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
        {/* Hero Section with Course Image */}
        <section className="relative h-96 lg:h-[500px] bg-gradient-to-br from-green-900 via-green-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/60 to-slate-900/80"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <button
                  onClick={() => navigate('/training-courses')}
                  className="flex items-center gap-2 text-white mb-6 hover:text-green-200 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  {currentLang === 'ar' ? 'العودة للدورات' : 'Back to Courses'}
                </button>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                  {course.title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-lg">{course.rating}</span>
                    <span className="text-green-200">({course.reviews} {currentLang === 'ar' ? 'تقييم' : 'reviews'})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span className="text-lg">{course.students} {currentLang === 'ar' ? 'طالب' : 'students'}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Course Content */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-green-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {currentLang === 'ar' ? 'عن الدورة' : 'About the Course'}
                  </h2>
                  <div className="prose prose-lg text-gray-600 leading-relaxed">
                    <p>{course.description}</p>
                    <div className="mt-6 whitespace-pre-line">{course.fullDescription}</div>
                  </div>
                </motion.div>

                {/* What You'll Learn */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {currentLang === 'ar' ? 'ما ستتعلمه' : 'What You\'ll Learn'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Requirements */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {currentLang === 'ar' ? 'المتطلبات' : 'Requirements'}
                  </h2>
                  <div className="space-y-3">
                    {course.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Materials */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {currentLang === 'ar' ? 'مواد الدورة' : 'Course Materials'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.materials.map((material, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md">
                        <Download className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{material}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Course Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-3xl shadow-xl p-8 sticky top-8"
                >
                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">{course.price}</div>
                    <div className="text-lg text-gray-400 line-through">{course.originalPrice}</div>
                    <div className="text-sm text-green-600 font-medium">
                      {currentLang === 'ar' ? 'خصم 23%' : '23% OFF'}
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm">{course.startDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Globe className="w-5 h-5" />
                      <span className="text-sm">{course.language}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Award className="w-5 h-5" />
                      <span className="text-sm">{course.certificate}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleEnroll}
                      className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                        isEnrolled
                          ? 'bg-green-100 text-green-700 border-2 border-green-300'
                          : 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isEnrolled
                        ? (currentLang === 'ar' ? 'تم التسجيل' : 'Enrolled')
                        : (currentLang === 'ar' ? 'سجل الآن' : 'Enroll Now')
                      }
                    </button>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={`py-3 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                          isFavorite
                            ? 'bg-red-100 text-red-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                        {currentLang === 'ar' ? 'مفضل' : 'Favorite'}
                      </button>
                      <button
                        onClick={handleShare}
                        className="py-3 rounded-2xl font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Share2 className="w-4 h-4" />
                        {currentLang === 'ar' ? 'مشاركة' : 'Share'}
                      </button>
                    </div>
                  </div>
                </motion.div>

                {/* Instructor Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-3xl shadow-xl p-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {currentLang === 'ar' ? 'المدرب' : 'Instructor'}
                  </h3>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{course.instructor.name}</h4>
                      <p className="text-sm text-gray-600">{course.instructor.title}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{course.instructor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{course.instructor.students}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-green-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'دورات مشابهة' : 'Related Courses'}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: item * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/course/${item + 10}`)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-${1550000000 + item * 1000}-0000-000000000000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={`Related course ${item}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {currentLang === 'ar' ? `دورة مشابهة ${item}` : `Related Course ${item}`}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm">4.7</span>
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        {currentLang === 'ar' ? '400 د.ب' : '400 BHD'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;

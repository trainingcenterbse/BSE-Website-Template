import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Award, ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Hero slides data
  const slides = [
    {
      id: 1,
      title: 'عن الجمعية',
      subtitle: 'Bahrain Society of Engineers',
      description: 'جمعية المهندسين البحرينية هي المنظمة المهنية الرائدة في البحرين، تأسست عام 1972 وتضم آلاف المهندسين',
      image: '/api/placeholder/1920/1080',
      date: 'منذ عام 1972',
      location: 'مملكة البحرين',
      highlights: ['5000+ عضو', '50+ شريك', '200+ حدث', '45 سنة خبرة']
    },
    {
      id: 2,
      title: 'المؤتمرات',
      subtitle: 'Conferences & Events',
      description: 'ننظم مؤتمرات وفعاليات متخصصة تجمع الخبراء والمتخصصين من جميع أنحاء المنطقة',
      image: '/api/placeholder/1920/1080',
      date: 'فعاليات سنوية',
      location: 'مراكز المؤتمرات',
      highlights: ['مؤتمر التآكل', 'ورش عمل', 'ندوات تقنية', 'شبكات مهنية']
    },
    {
      id: 3,
      title: 'مركز التدريب',
      subtitle: 'Training Center',
      description: 'نقدم برامج تدريبية معتمدة لتطوير المهارات الهندسية وزيادة الكفاءة المهنية',
      image: '/api/placeholder/1920/1080',
      date: 'برامج مستمرة',
      location: 'مقر الجمعية',
      highlights: ['دورات معتمدة', 'شهادات مهنية', 'تدريب عملي', 'خبراء متخصصون']
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered, slides.length]);

  return (
    <div 
      ref={ref} 
      className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              filter: 'brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Navigation Arrows - Edges without boxes */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-blue-300 transition-colors duration-300"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:text-blue-300 transition-colors duration-300"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Hero Content - Left/Right aligned based on language */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-right"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.h2 
                className="text-xl md:text-2xl lg:text-3xl mb-4 text-blue-200 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 max-w-3xl text-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Event Details */}
              <motion.div 
                className="flex flex-wrap gap-6 mb-8 text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-5 h-5" />
                  <span>{slides[currentSlide].date}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <span>{slides[currentSlide].location}</span>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {slides[currentSlide].highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/20"
                  >
                    {highlight}
                  </motion.div>
                ))}
              </motion.div>

              {/* Professional CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    {currentSlide === 0 ? 'اعرف المزيد' : currentSlide === 1 ? 'سجل الآن' : 'استعرض الدورات'}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
                  size="lg"
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    فيديو تعريفي
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <motion.div 
            className="flex justify-end gap-2 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

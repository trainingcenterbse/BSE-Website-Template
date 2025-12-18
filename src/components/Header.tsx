import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Menu, X, Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentLang, setCurrentLang] = useState('ar');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isLangSwitching, setIsLangSwitching] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  
  // React Spring for dropdown animations
  const dropdownSpring = useSpring({
    opacity: activeDropdown ? 1 : 0,
    transform: activeDropdown ? 'translateY(0)' : 'translateY(-10px)',
    config: { tension: 300, friction: 30 },
  });
  
  // Framer Motion variants for header
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleLanguage = () => {
    if (isLangSwitching) return;
    
    setIsLangSwitching(true);
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    
    // Framer Motion animation for language switch will be handled by the motion.button
    setCurrentLang(newLang);
    localStorage.setItem('language', newLang);
    
    setTimeout(() => {
      setIsLangSwitching(false);
    }, 600);
    
    // In a real app, you would use i18next to change language
    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      {/* Animated Background Elements */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 z-50"
      />
      
      <motion.header 
        ref={headerRef}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="sticky top-4 z-40"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Header with Glassmorphism */}
          <div className="bg-white/90 dark:bg-blue-900/90 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 dark:border-blue-700/50 my-4 relative overflow-hidden">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700/10 via-blue-600/10 to-blue-700/10 animate-pulse"></div>
            
            <div className="relative flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
              {/* Logo with Glow Effect */}
              <div className="flex items-center min-w-0">
                <motion.a 
                  href="/" 
                  className="flex items-center gap-1.5 sm:gap-2 group relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Logo Glow */}
                  <motion.div 
                    className="absolute inset-0 bg-blue-700/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.img 
                    src="/favicon.ico" 
                    alt="BSE Logo" 
                    className="w-7 h-7 sm:w-8 sm:h-8 relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <div className="flex flex-col leading-tight min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-blue-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                      جمعية
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-blue-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                      المهندسين
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-blue-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                      البحرينية
                    </span>
                  </div>
                </motion.a>
              </div>

              {/* Desktop Navigation with Floating Effects */}
              <nav className="hidden md:flex items-center gap-1 relative flex-shrink-0">
                <a href="/training" className="text-xs sm:text-sm font-medium relative group overflow-hidden rounded-full px-3 py-1.5 transition-all duration-300">
                  <span className="relative z-10">{currentLang === 'ar' ? 'مركز العضوية' : 'Membership Center'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                </a>
                
                {/* About Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter('about')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="text-xs sm:text-sm font-medium relative group overflow-hidden rounded-full px-3 py-1.5 transition-all duration-300 flex items-center gap-1 whitespace-nowrap">
                    <span className="relative z-10">{currentLang === 'ar' ? 'من نحن' : 'About Us'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 relative z-10 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Membership Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter('membership')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="text-xs sm:text-sm font-medium relative group overflow-hidden rounded-full px-3 py-1.5 transition-all duration-300 flex items-center gap-1 whitespace-nowrap">
                    <span className="relative z-10">{currentLang === 'ar' ? 'العضوية' : 'Membership'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 relative z-10 ${activeDropdown === 'membership' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Services Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter('services')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="text-xs sm:text-sm font-medium relative group overflow-hidden rounded-full px-3 py-1.5 transition-all duration-300 flex items-center gap-1 whitespace-nowrap">
                    <span className="relative z-10">{currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 relative z-10 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Conferences Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter('conferences')}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="text-xs sm:text-sm font-medium relative group overflow-hidden rounded-full px-3 py-1.5 transition-all duration-300 flex items-center gap-1 whitespace-nowrap">
                    <span className="relative z-10">{currentLang === 'ar' ? 'المؤتمرات' : 'Conferences'}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                    <ChevronDown className={`h-3 w-3 transition-transform duration-200 relative z-10 ${activeDropdown === 'conferences' ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <a href="/contact" className="text-xs sm:text-sm font-medium relative group overflow-hidden rounded-full px-3 py-1.5 transition-all duration-300 whitespace-nowrap">
                  <span className="relative z-10">{currentLang === 'ar' ? 'تواصل معنا' : 'Contact'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                </a>
              </nav>

              {/* Actions with Floating Effects */}
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <motion.button
                  ref={langButtonRef}
                  onClick={toggleLanguage}
                  className="p-1.5 sm:p-2 rounded-full relative group overflow-hidden"
                  aria-label="Toggle language"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={isLangSwitching}
                >
                  <span className="relative z-10 flex items-center">
                    <motion.div
                      animate={{ rotate: isLangSwitching ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                    </motion.div>
                    <motion.span 
                      className="text-xs font-medium ml-1 lang-text"
                      key={currentLang}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {currentLang === 'ar' ? 'EN' : 'AR'}
                    </motion.span>
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 rounded-full"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
                <button
                  onClick={toggleTheme}
                  className="p-1.5 sm:p-2 rounded-full relative group overflow-hidden transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  <span className="relative z-10">
                    {isDark ? (
                      <Sun className="h-3 w-3 sm:h-4 sm:w-4" />
                    ) : (
                      <Moon className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                </button>
                
                <Button className="hidden md:flex bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 dark:from-blue-800 dark:to-blue-700 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group">
                  <span className="relative z-10">{currentLang === 'ar' ? 'انضم معنا' : 'Join Now'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </Button>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-1.5 sm:p-2 rounded-full relative group overflow-hidden transition-all duration-300"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <span className="relative z-10">
                    {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Overlay with Enhanced Effects */}
        <AnimatePresence>
          {activeDropdown && (
            <animated.div 
              style={dropdownSpring}
              className="fixed top-20 left-0 right-0 bg-white/95 dark:bg-blue-900/95 backdrop-blur-2xl shadow-2xl z-30"
            >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* About Dropdown */}
                {activeDropdown === 'about' && (
                  <div className="space-y-4 transform animate-fade-in">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-6 relative">
                      <span className="relative z-10">{currentLang === 'ar' ? 'من نحن' : 'About Us'}</span>
                      <div className="absolute inset-0 bg-blue-700/10 blur-xl rounded-lg"></div>
                    </h3>
                    <div className="flex flex-wrap gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-all duration-300 group relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300 relative z-10"></div>
                      <span className="text-sm font-medium relative z-10">{currentLang === 'ar' ? 'من نحن' : 'About Us'}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/5 to-blue-600/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    </div>
                    <div className="flex flex-wrap gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-all duration-300 group relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300 relative z-10"></div>
                      <span className="text-sm font-medium relative z-10">{currentLang === 'ar' ? 'المهمة والرؤية' : 'Vision & Mission'}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/5 to-blue-600/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    </div>
                    <div className="flex flex-wrap gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-all duration-300 group relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300 relative z-10"></div>
                      <span className="text-sm font-medium relative z-10">{currentLang === 'ar' ? 'المؤسسون' : 'Founders'}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/5 to-blue-600/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    </div>
                    <div className="flex flex-wrap gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-all duration-300 group relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300 relative z-10"></div>
                      <span className="text-sm font-medium relative z-10">{currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/5 to-blue-600/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    </div>
                    <div className="flex flex-wrap gap-3 p-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-all duration-300 group relative">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-700 to-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300 relative z-10"></div>
                      <span className="text-sm font-medium relative z-10">{currentLang === 'ar' ? 'الإدارة التنفيذية' : 'Executive Management'}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/5 to-blue-600/5 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                    </div>
                  </div>
                )}

                {/* Membership Dropdown */}
                {activeDropdown === 'membership' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">
                      {currentLang === 'ar' ? 'العضوية' : 'Membership'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'أنواع العضوية' : 'Membership Types'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'شروط العضوية' : 'Membership Terms'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'رسوم العضوية' : 'Membership Fees'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'طلب العضوية' : 'Membership Application'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'إحصائيات' : 'Statistics'}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Conferences Dropdown */}
                {activeDropdown === 'conferences' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">
                      {currentLang === 'ar' ? 'المؤتمرات' : 'Conferences'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'المؤتمرات القادمة' : 'Upcoming Conferences'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'المؤتمرات السابقة' : 'Past Conferences'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'مؤتمرات أخرى' : 'Other Conferences'}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Services Dropdown */}
                {activeDropdown === 'services' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">
                      {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'خدمات العضوية' : 'Membership Services'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'خدمات التدريب' : 'Training Services'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'الاستشارات الهندسية' : 'Engineering Consulting'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'الشهادات المهنية' : 'Professional Certification'}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-800/50 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'إدارة الفعاليات' : 'Events Management'}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </animated.div>
        )}
        </AnimatePresence>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-border overflow-hidden"
            >
              <nav className="flex flex-col space-y-4">
                <a href="/training" className="text-sm font-medium hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'مركز العضوية' : 'Membership Center'}
                </a>
                <a href="/about" className="text-sm font-medium hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'من نحن' : 'About Us'}
                </a>
                <a href="/membership" className="text-sm font-medium hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'العضوية' : 'Membership'}
                </a>
                <a href="/services" className="text-sm font-medium hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
                </a>
                <a href="/conferences" className="text-sm font-medium hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'المؤتمرات' : 'Conferences'}
                </a>
                <a href="/contact" className="text-sm font-medium hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'تواصل معنا' : 'Contact'}
                </a>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full">
                  {currentLang === 'ar' ? 'انضم معنا' : 'Join Now'}
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { Menu, X, Moon, Sun, Globe, Search, ArrowLeft, User, Award, Calendar, Briefcase, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import MegaMenu from "@/components/MegaMenu";
import bseLogo from "@/assets/bse-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const { lang: currentLang, toggleLang } = useLanguage();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [activeSubItem, setActiveSubItem] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLangSwitching, setIsLangSwitching] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const langButtonRef = useRef<HTMLButtonElement>(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  
  // Tab configurations
  const tabs = {
    about: {
      title: currentLang === 'ar' ? 'عن الجمعية' : 'About Society',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-600',
      logo: bseLogo,
      items: [
        { title: currentLang === 'ar' ? 'من نحن' : 'About Us' },
        { title: currentLang === 'ar' ? 'المؤسسون' : 'Founders' },
        { title: currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors' },
        { title: currentLang === 'ar' ? 'الأنظمة واللوائح' : 'Systems & Regulations' },
        { title: currentLang === 'ar' ? 'تقارير الجمعية العمومية' : 'General Assembly Reports' }
      ]
    },
    conferences: {
      title: currentLang === 'ar' ? 'المؤتمرات' : 'Conferences',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-600',
      logo: bseLogo,
      items: [
        { title: currentLang === 'ar' ? 'المؤتمرات القادمة' : 'Upcoming Conferences' },
        { title: currentLang === 'ar' ? 'المؤتمرات السابقة' : 'Past Conferences' },
        { title: currentLang === 'ar' ? 'مؤتمرات أخرى' : 'Other Conferences' }
      ]
    },
    training: {
      title: currentLang === 'ar' ? 'مركز التدريب' : 'Training Center',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-600',
      logo: bseLogo,
      items: [
        { title: currentLang === 'ar' ? 'عن المركز' : 'About the Center' },
        { title: currentLang === 'ar' ? 'مجلس الأمناء' : 'Board of Trustees' },
        { title: currentLang === 'ar' ? 'الاعتمادات الدولية' : 'International Accreditations' },
        { title: currentLang === 'ar' ? 'الدورات التدريبية' : 'Training Courses' }
      ]
    },
    committees: {
      title: currentLang === 'ar' ? 'لجان الجمعية' : 'Society Committees',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-600',
      logo: bseLogo,
      items: [
        { title: currentLang === 'ar' ? 'جميع اللجان' : 'All Committees' }
      ]
    }
  };

  // Spring animations
  const headerSpring = useSpring({
    background: activeTab 
      ? `linear-gradient(to right, ${tabs[activeTab as keyof typeof tabs]?.color || 'from-blue-600 to-blue-700'})`
      : 'linear-gradient(to right, from-blue-600 to-blue-700)',
    config: { tension: 280, friction: 60 }
  });

  const searchSpring = useSpring({
    width: isSearchOpen ? '100%' : '0%',
    opacity: isSearchOpen ? 1 : 0,
    config: { tension: 300, friction: 30 }
  });

  // Framer Motion variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const tabVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  };

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
    toggleLang();
    setTimeout(() => setIsLangSwitching(false), 600);
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

  const handleTabClick = (tab: string) => {
    // Define navigation routes for specific pages
    const pageRoutes: { [key: string]: string } = {
      [currentLang === 'ar' ? 'من نحن' : 'About Us']: '/about-us',
      [currentLang === 'ar' ? 'المؤسسون' : 'Founders']: '/founders',
      [currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors']: '/board-of-directors',
      [currentLang === 'ar' ? 'الأنظمة واللوائح' : 'Systems & Regulations']: '/systems-regulations',
      [currentLang === 'ar' ? 'تقارير الجمعية العمومية' : 'General Assembly Reports']: '/general-assembly-reports',
      // Training Center Routes
      [currentLang === 'ar' ? 'مركز التدريب' : 'Training Center']: '/training-center',
      [currentLang === 'ar' ? 'عن المركز' : 'About the Center']: '/about-training-center',
      [currentLang === 'ar' ? 'مجلس الأمناء' : 'Board of Trustees']: '/training-trustees',
      [currentLang === 'ar' ? 'الاعتمادات الدولية' : 'International Accreditations']: '/training-accreditations',
      [currentLang === 'ar' ? 'الدورات التدريبية' : 'Training Courses']: '/training-courses',
      // Committees Routes
      [currentLang === 'ar' ? 'جميع اللجان' : 'All Committees']: '/committees'
    };

    // Check if it's a sub-item (from the items array) or main tab
    const isSubItem = Object.values(tabs).some(t => 
      t.items.some(item => item.title === tab)
    );
    
    // Check if this tab has a direct route
    const hasDirectRoute = pageRoutes[tab];
    
    if (hasDirectRoute) {
      // Direct navigation for tabs with routes
      window.location.href = pageRoutes[tab];
    } else if (isSubItem) {
      // Find which tab this sub-item belongs to
      const parentTab = Object.keys(tabs).find(t => 
        tabs[t as keyof typeof tabs].items.some(item => item.title === tab)
      );
      if (parentTab) {
        setActiveTab(parentTab);
        setActiveSubItem(tab);
        
        // Navigate to the specific page if route exists
        const route = pageRoutes[tab];
        if (route) {
          window.location.href = route;
        }
      }
    } else {
      // It's a main tab without direct route
      setActiveTab(tab);
      setActiveSubItem(null);
    }
    setIsSearchOpen(false);
  };

  const handleBack = () => {
    setActiveTab(null);
    setActiveSubItem(null);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setActiveTab(null);
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
          {/* Main Header with Glassmorphism - Preserving Original Rounded Shape */}
          <motion.div
            layout
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`bg-white/95 dark:bg-blue-900/95 backdrop-blur-xl shadow-2xl border border-white/20 dark:border-blue-700/50 my-4 relative overflow-hidden transition-[border-radius] duration-500 ${isMegaOpen ? 'rounded-[2rem]' : 'rounded-full'}`}
          >
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 via-blue-600/10 to-blue-700/10 animate-pulse"></div>
            
            <div className="relative flex items-center justify-between h-16 sm:h-18 lg:h-20 px-4 sm:px-6">
              {/* Left Section - Logo and Back Button */}
              <div className="flex items-center gap-2 min-w-0">
                {/* Back Button - Only visible when tab is active */}
                <AnimatePresence mode="wait">
                  {activeTab && (
                    <motion.button
                      key="back-button"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={handleBack}
                      className="p-1.5 rounded-full relative group overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <ArrowLeft className={`w-4 h-4 text-gray-600 dark:text-gray-300 relative z-10 transform ${currentLang === 'ar' ? 'rotate-180' : ''}`} />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Logo */}
                <motion.button
                  type="button"
                  onClick={() => setIsMegaOpen((p) => !p)}
                  aria-expanded={isMegaOpen}
                  aria-label={currentLang === 'ar' ? 'فتح قائمة الموقع الكاملة' : 'Open full site menu'}
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
                    src={bseLogo} 
                    alt="BSE Logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 relative z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  
                  {/* Dynamic Text Container - Fixed positioning */}
                  <div className="flex flex-col leading-tight min-w-0 relative w-24 sm:w-28 lg:w-32">
                    {/* Original Association Name - Scales back when tab is active */}
                    <AnimatePresence mode="wait">
                      {!activeTab && (
                        <motion.div
                          key="association-name"
                          initial={{ opacity: 1, scale: 1 }}
                          exit={{ 
                            opacity: 0, 
                            scale: 0.3,
                            transition: { duration: 0.8, ease: "easeInOut" }
                          }}
                          className="flex flex-col"
                        >
                          <span className="text-xs sm:text-xs lg:text-sm font-bold text-blue-600 dark:text-blue-100 truncate group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                            {currentLang === 'ar' ? 'جمعية' : 'Bahrain'}
                          </span>
                          <span className="text-xs sm:text-xs lg:text-sm font-bold text-blue-600 dark:text-blue-100 truncate group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                            {currentLang === 'ar' ? 'المهندسين' : 'Society'}
                          </span>
                          <span className="text-xs sm:text-xs lg:text-sm font-bold text-blue-600 dark:text-blue-100 truncate group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                            {currentLang === 'ar' ? 'البحرينية' : 'Engineers'}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tab Name - Replaces association name completely */}
                    <AnimatePresence mode="wait">
                      {activeTab && (
                        <motion.div
                          key={`tab-name-${activeTab}-${activeSubItem}`}
                          initial={{ 
                            opacity: 0, 
                            scale: 0.3,
                            transition: { duration: 0.8, ease: "easeInOut" }
                          }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { duration: 0.8, ease: "easeInOut" }
                          }}
                          exit={{ 
                            opacity: 0, 
                            scale: 0.3,
                            transition: { duration: 0.8, ease: "easeInOut" }
                          }}
                          className="flex flex-col"
                        >
                          <span className="text-xs sm:text-xs lg:text-sm font-bold text-blue-600 dark:text-blue-100 truncate group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                            {activeSubItem || tabs[activeTab as keyof typeof tabs]?.title}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              </div>

              {/* Center Navigation - Only visible in normal state */}
              <AnimatePresence mode="wait">
                {!activeTab && !isSearchOpen && (
                  <motion.nav
                    key="normal-nav"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex items-center gap-1 relative flex-shrink-0"
                  >
                    {/* Tab Buttons - Single element that transforms from text to button on hover */}
                    <div className="hidden md:flex items-center gap-2">
                      {Object.keys(tabs).map((tab) => (
                        <motion.button
                          key={tab}
                          onClick={() => handleTabClick(tab)}
                          className="px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer bg-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 dark:hover:from-white dark:hover:to-gray-100 hover:text-white dark:hover:text-blue-600 rounded-full hover:shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="relative z-10">
                            {tabs[tab as keyof typeof tabs].title}
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.nav>
                )}

                {/* Tab Items Navigation - Single element that transforms from text to button on hover */}
                {activeTab && !isSearchOpen && (
                  <motion.nav
                    key="tab-nav"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex items-center gap-2"
                  >
                    {tabs[activeTab as keyof typeof tabs].items.map((item, index) => (
                      <motion.button
                        key={index}
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleTabClick(item.title)}
                        className="px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer bg-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 dark:hover:from-white dark:hover:to-gray-100 hover:text-white dark:hover:text-blue-600 rounded-full hover:shadow-lg hover:shadow-2xl hover:scale-105 relative overflow-hidden flex items-center gap-1.5"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10 flex items-center gap-1.5">
                          {item.title}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      </motion.button>
                    ))}
                  </motion.nav>
                )}

                {/* Search Bar - Full width when search is open */}
                {isSearchOpen && (
                  <motion.div
                    key="search-bar"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 mx-4"
                  >
                    <div className="relative">
                      <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 ${currentLang === 'ar' ? 'right-3' : 'left-3'}`} />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={currentLang === 'ar' ? 'ابحث في الموقع...' : 'Search website...'}
                        className={`w-full ${currentLang === 'ar' ? 'pr-4 pl-10' : 'pl-4 pr-10'} py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm`}
                        autoFocus
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Right Actions */}
              <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                {/* Search Button - Only visible in normal state */}
                <AnimatePresence mode="wait">
                  {!activeTab && !isSearchOpen && (
                    <motion.button
                      key="search-btn"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={toggleSearch}
                      className="p-1.5 sm:p-2 rounded-full relative group overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <Search className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300 relative z-10" />
                    </motion.button>
                  )}

                  {/* Close Search Button - Only visible when search is open */}
                  {isSearchOpen && (
                    <motion.button
                      key="close-search"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={toggleSearch}
                      className="p-1.5 sm:p-2 rounded-full relative group overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gray-200 dark:bg-gray-700 rounded-full"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <X className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300 relative z-10" />
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Language Toggle - Hidden in search mode */}
                <AnimatePresence mode="wait">
                  {!isSearchOpen && (
                    <motion.button
                      key="lang-toggle"
                      ref={langButtonRef}
                      onClick={toggleLanguage}
                      className="p-1.5 sm:p-2 rounded-full relative group overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 rounded-full"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.2 }}
                      />
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
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Theme Toggle - Hidden in search mode */}
                <AnimatePresence mode="wait">
                  {!isSearchOpen && (
                    <motion.button
                      key="theme-toggle"
                      onClick={toggleTheme}
                      className="p-1.5 sm:p-2 rounded-full relative group overflow-hidden transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="relative z-10">
                        {isDark ? (
                          <Sun className="h-3 w-3 sm:h-4 sm:w-4" />
                        ) : (
                          <Moon className="h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                    </motion.button>
                  )}
                </AnimatePresence>
                
                {/* Membership Center Button - Hidden in search mode */}
                <AnimatePresence mode="wait">
                  {!isSearchOpen && (
                    <motion.div
                      key="membership-btn"
                      className="hidden md:flex"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button className="bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 dark:from-blue-800 dark:to-blue-700 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group">
                        <span className="relative z-10 flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {currentLang === 'ar' ? 'مركز العضوية' : 'Membership Center'}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-1.5 sm:p-2 rounded-full relative group overflow-hidden transition-all duration-300"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="relative z-10">
                    {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700/10 to-blue-600/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 rounded-full"></div>
                </button>
              </div>
            </div>
            <MegaMenu open={isMegaOpen} onClose={() => setIsMegaOpen(false)} />
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-blue-900/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col space-y-2 px-4">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    handleTabClick(tab);
                    setIsMenuOpen(false);
                  }}
                  className="text-right text-sm font-medium py-2 px-4 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  {tabs[tab as keyof typeof tabs].title}
                </button>
              ))}
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full w-full mt-2">
                <span className="flex items-center gap-2 justify-center">
                  <Users className="w-4 h-4" />
                  {currentLang === 'ar' ? 'مركز العضوية' : 'Membership Center'}
                </span>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

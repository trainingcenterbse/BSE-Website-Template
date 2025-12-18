import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentLang, setCurrentLang] = useState('ar');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

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
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    setCurrentLang(newLang);
    localStorage.setItem('language', newLang);
    // In a real app, you would use i18next to change language
    window.location.reload();
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
    <header className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-100 dark:border-gray-800 my-4">
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
            {/* Logo */}
            <div className="flex items-center min-w-0">
              <a href="/" className="flex items-center gap-1.5 sm:gap-2 group">
                <img src="/favicon.ico" alt="BSE Logo" className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    جمعية
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    المهندسين
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    البحرينية
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 relative flex-shrink-0">
              <a href="/training" className="text-xs sm:text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-full px-3 py-1.5 transition-all whitespace-nowrap">
                {currentLang === 'ar' ? 'مركز العضوية' : 'Membership Center'}
              </a>
              
              {/* About Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('about')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="text-xs sm:text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-full px-3 py-1.5 transition-all flex items-center gap-1 whitespace-nowrap">
                  {currentLang === 'ar' ? 'من نحن' : 'About Us'}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Membership Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('membership')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="text-xs sm:text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-full px-3 py-1.5 transition-all flex items-center gap-1 whitespace-nowrap">
                  {currentLang === 'ar' ? 'العضوية' : 'Membership'}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'membership' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('services')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="text-xs sm:text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-full px-3 py-1.5 transition-all flex items-center gap-1 whitespace-nowrap">
                  {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* Conferences Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleDropdownEnter('conferences')}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="text-xs sm:text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-full px-3 py-1.5 transition-all flex items-center gap-1 whitespace-nowrap">
                  {currentLang === 'ar' ? 'المؤتمرات' : 'Conferences'}
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === 'conferences' ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <a href="/contact" className="text-xs sm:text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded-full px-3 py-1.5 transition-all whitespace-nowrap">
                {currentLang === 'ar' ? 'تواصل معنا' : 'Contact'}
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <button
                onClick={toggleLanguage}
                className="p-1.5 sm:p-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                aria-label="Toggle language"
              >
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs font-medium ml-1">{currentLang === 'ar' ? 'EN' : 'AR'}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="p-1.5 sm:p-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <Moon className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </button>
              
              <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium hover:scale-105 transition-all shadow-md hover:shadow-lg">
                {currentLang === 'ar' ? 'انضم معنا' : 'Join Now'}
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-1.5 sm:p-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu Overlay */}
        {activeDropdown && (
          <div 
            className="relative bg-white dark:bg-gray-900 rounded-full shadow-xl border border-gray-100 dark:border-gray-800 z-40 animate-fade-in mt-2"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* About Dropdown */}
                {activeDropdown === 'about' && (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {currentLang === 'ar' ? 'من نحن' : 'About Us'}
                    </h3>
                    <div className="space-y-2">
                      <a href="/about" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'من نحن' : 'About Us'}</span>
                      </a>
                      <a href="/vision-mission" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'المهمة والرؤية' : 'Vision & Mission'}</span>
                      </a>
                      <a href="/founders" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'المؤسسون' : 'Founders'}</span>
                      </a>
                      <a href="/board" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}</span>
                      </a>
                      <a href="/executive" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'الإدارة التنفيذية' : 'Executive Management'}</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Membership Dropdown */}
                {activeDropdown === 'membership' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">
                      {currentLang === 'ar' ? 'العضوية' : 'Membership'}
                    </h3>
                    <div className="space-y-2">
                      <a href="/membership-categories" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'أنواع العضوية' : 'Membership Types'}</span>
                      </a>
                      <a href="/membership-terms" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'شروط العضوية' : 'Membership Terms'}</span>
                      </a>
                      <a href="/membership-fees" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'رسوم العضوية' : 'Membership Fees'}</span>
                      </a>
                      <a href="/membership-application" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'طلب العضوية' : 'Membership Application'}</span>
                      </a>
                      <a href="/membership-statistics" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'إحصائيات' : 'Statistics'}</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Conferences Dropdown */}
                {activeDropdown === 'conferences' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">
                      {currentLang === 'ar' ? 'المؤتمرات' : 'Conferences'}
                    </h3>
                    <div className="space-y-2">
                      <a href="/conferences" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'المؤتمرات القادمة' : 'Upcoming Conferences'}</span>
                      </a>
                      <a href="/past-conferences" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'المؤتمرات السابقة' : 'Past Conferences'}</span>
                      </a>
                      <a href="/other-conferences" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'مؤتمرات أخرى' : 'Other Conferences'}</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* Services Dropdown */}
                {activeDropdown === 'services' && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-600 mb-4">
                      {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
                    </h3>
                    <div className="space-y-2">
                      <a href="/membership-services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'خدمات العضوية' : 'Membership Services'}</span>
                      </a>
                      <a href="/training-services" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'خدمات التدريب' : 'Training Services'}</span>
                      </a>
                      <a href="/consulting" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'الاستشارات الهندسية' : 'Engineering Consulting'}</span>
                      </a>
                      <a href="/certification" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'الشهادات المهنية' : 'Professional Certification'}</span>
                      </a>
                      <a href="/events-management" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-sm">{currentLang === 'ar' ? 'إدارة الفعاليات' : 'Events Management'}</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
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
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

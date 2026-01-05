import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Info, Target, Eye, Heart, TrendingUp, Award, 
  Calendar, Rocket, MessageSquare, Shield, Users, Globe 
} from "lucide-react";

// Icon mapping
const iconMap = {
  home: <Home className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />,
  target: <Target className="w-5 h-5" />,
  eye: <Eye className="w-5 h-5" />,
  heart: <Heart className="w-5 h-5" />,
  trendingUp: <TrendingUp className="w-5 h-5" />,
  award: <Award className="w-5 h-5" />,
  calendar: <Calendar className="w-5 h-5" />,
  rocket: <Rocket className="w-5 h-5" />,
  messageSquare: <MessageSquare className="w-5 h-5" />,
  shield: <Shield className="w-5 h-5" />,
  users: <Users className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />
};

interface SidebarSection {
  id: string;
  icon: keyof typeof iconMap;
  label: string;
  labelAr: string;
}

interface FloatingSidebarProps {
  sections: SidebarSection[];
  currentLang?: 'ar' | 'en';
  className?: string;
  offset?: number;
  threshold?: number;
  showOnMobile?: boolean;
}

const FloatingSidebar = ({
  sections,
  currentLang = 'ar',
  className = '',
  offset = 80,
  threshold = 0.3,
  showOnMobile = false
}: FloatingSidebarProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
      setIsDark(shouldBeDark);
    };

    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  // Setup intersection observer
  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionRefs.current[section.id] = element as HTMLElement;
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sections, threshold]);

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Get label based on language
  const getLabel = (section: SidebarSection) => {
    return currentLang === 'ar' ? section.labelAr : section.label;
  };

  return (
    <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 ${showOnMobile ? '' : 'hidden lg:block'} ${className}`}>
      <div className="relative">
        {/* Main Container - Header Style */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`backdrop-blur-xl rounded-full shadow-2xl border overflow-hidden transition-all duration-300 ${
            isDark 
              ? 'bg-slate-900/90 border-slate-700/50' 
              : 'bg-white/90 border-white/20'
          }`}
          style={{ width: '80px' }}
        >
          {/* Animated Gradient Background - Like Header */}
          <div className={`absolute inset-0 animate-pulse ${
            isDark
              ? 'bg-gradient-to-br from-blue-600/20 via-blue-500/20 to-slate-600/20'
              : 'bg-gradient-to-br from-blue-600/10 via-blue-500/10 to-slate-600/10'
          }`}></div>
          
          {/* Navigation Items */}
          <div className="relative z-10 py-4">
            {sections.map((section, index) => (
              <div key={section.id} className="relative">
                <motion.button
                  onClick={() => scrollToSection(section.id)}
                  onMouseEnter={() => setHoveredItem(section.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`w-full flex items-center justify-center px-4 py-3 transition-all duration-300 relative group ${
                    isDark 
                      ? 'hover:bg-slate-800/50' 
                      : 'hover:bg-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active Indicator - Header Style */}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute inset-0 rounded-full ${
                        isDark
                          ? 'bg-gradient-to-r from-blue-600/40 to-blue-700/40'
                          : 'bg-gradient-to-r from-blue-600/20 to-slate-600/20'
                      }`}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                  
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: activeSection === section.id ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`flex-shrink-0 relative z-10 transition-colors duration-300 ${
                      activeSection === section.id
                        ? isDark ? 'text-blue-400' : 'text-blue-600'
                        : isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {iconMap[section.icon]}
                  </motion.div>
                </motion.button>
                
                {/* Tooltip Bubble - Header Style */}
                <AnimatePresence>
                  {hoveredItem === section.id && (
                    <motion.div
                      initial={{ opacity: 0, x: 20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap z-[60] ${
                        isDark
                          ? 'bg-gradient-to-r from-blue-600 to-slate-700 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-slate-700 text-white'
                      }`}
                    >
                      <div className="text-sm font-medium">{getLabel(section)}</div>
                      {/* Arrow */}
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-blue-600"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Glow Effect - Dark Mode Aware */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: isDark ? [0.3, 0.4, 0.3] : [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute inset-0 rounded-full blur-xl ${
            isDark
              ? 'bg-gradient-to-r from-blue-600/30 to-slate-600/30'
              : 'bg-gradient-to-r from-blue-600/20 to-slate-600/20'
          }`}
        />
      </div>
    </div>
  );
};

export default FloatingSidebar;
export type { SidebarSection, FloatingSidebarProps };

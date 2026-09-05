import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Calendar, Mail, Phone, Briefcase, GraduationCap, Shield, ChevronLeft, ChevronRight, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { currentBoardMembers, presidentsTimeline, previousBoards, PresidentRecord, BoardMember } from "@/data/bseOfficialData";

// Fallback image helper
const DEFAULT_AVATAR = "/placeholder.svg";
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = DEFAULT_AVATAR;
};

// Timeline Item Component
interface TimelineItemProps {
  president: PresidentRecord;
  index: number;
  currentLang: string;
  onSelect: (p: PresidentRecord) => void;
}

const TimelineItem = ({ president, index, currentLang, onSelect }: TimelineItemProps) => {
  const presidentName = currentLang === 'ar' ? president.presidentAr : president.presidentEn;
  const period = currentLang === 'ar' ? president.periodAr : president.periodEn;
  const yearDisplay = president.startYear;

  return (
    <div className="absolute top-1/2 transform -translate-y-1/2">
      {/* Timeline Point */}
      <motion.div
        className="absolute w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-lg"
        style={{
          left: `${index * 180}px`,
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: [
            '0 0 0 0 rgba(59, 130, 246, 0.7)',
            '0 0 0 8px rgba(59, 130, 246, 0)',
            '0 0 0 0 rgba(59, 130, 246, 0)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.3
        }}
      />
      
      {/* Year Label */}
      <motion.div
        className="absolute bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-blue-200"
        style={{
          left: `${index * 180}px`,
          top: '50%',
          transform: 'translate(-50%, 35px)'
        }}
        animate={{
          y: ['35px', '40px', '35px']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.3
        }}
      >
        <div className="text-xs font-bold text-blue-900 whitespace-nowrap">{period || yearDisplay}</div>
      </motion.div>

      {/* President Bubble - Top with Circular Image */}
      <motion.div
        className="absolute cursor-pointer group"
        style={{
          left: `${index * 180}px`,
          top: '50%',
          transform: 'translate(-50%, -100px)',
          width: '120px'
        }}
        animate={{
          y: ['-100px', '-105px', '-100px'],
          scale: [1, 1.03, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: index * 0.3
        }}
        whileHover={{ scale: 1.1, y: -110 }}
        onClick={() => onSelect(president)}
      >
        <div className="flex flex-col items-center gap-2">
          {/* Circular Image */}
          <div className="relative">
            <motion.img
              src={president.image || DEFAULT_AVATAR}
              alt={presidentName}
              onError={handleImageError}
              referrerPolicy="no-referrer"
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-xl bg-slate-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            {president.isCurrent && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white shadow-md"></div>
            )}
          </div>
          
          {/* Name Bubble */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full px-3 py-1.5 shadow-lg max-w-[130px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-white font-semibold text-xs text-center truncate">
              {presidentName}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Connecting Line */}
      <svg
        className="absolute pointer-events-none"
        style={{
          left: `${index * 180 - 40}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          width: '80px',
          height: '160px'
        }}
      >
        <motion.line
          x1="40"
          y1="80"
          x2="40"
          y2="50"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="2"
          strokeDasharray="4 4"
          animate={{
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3
          }}
        />
      </svg>
    </div>
  );
};

const BoardOfDirectors = () => {
  const { lang: currentLang } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewMode, setViewMode] = useState<'current' | 'previous'>('current');
  const [selectedPresident, setSelectedPresident] = useState<PresidentRecord | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [timelinePosition, setTimelinePosition] = useState(0);
  const [selectedDecade, setSelectedDecade] = useState<string>('all');
  const [boardSearch, setBoardSearch] = useState<string>('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handlePrevious = () => {
    setTimelinePosition(prev => Math.min(prev + 200, 0));
  };

  const handleNext = () => {
    const maxPosition = -(presidentsTimeline.length * 180 - 600);
    setTimelinePosition(prev => Math.max(prev - 200, maxPosition));
  };

  const handlePresidentClick = (president: PresidentRecord) => {
    setSelectedPresident(president);
  };

  const presidentMember = currentBoardMembers.find(m => m.isPresident) || currentBoardMembers[0];
  const otherMembers = currentBoardMembers.filter(m => m.id !== presidentMember?.id);

  const filteredPreviousBoards = previousBoards.filter(board => {
    const year = board.year || board.startYear || 0;
    if (selectedDecade !== 'all') {
      if (selectedDecade === '2020s' && (year < 2020 || year > 2029)) return false;
      if (selectedDecade === '2010s' && (year < 2010 || year > 2019)) return false;
      if (selectedDecade === '2000s' && (year < 2000 || year > 2009)) return false;
      if (selectedDecade === '1990s' && (year < 1990 || year > 1999)) return false;
      if (selectedDecade === '1980s' && (year < 1980 || year > 1989)) return false;
      if (selectedDecade === '1970s' && (year < 1970 || year > 1979)) return false;
    }
    if (!boardSearch.trim()) return true;
    const query = boardSearch.toLowerCase().trim();
    const yearMatch = year.toString().includes(query);
    const presMatch = (board.presidentAr || board.presidentEn || '').toLowerCase().includes(query);
    const memberMatch = board.members.some(m => 
      (m.nameAr || m.name || '').toLowerCase().includes(query) ||
      (m.positionAr || m.position || '').toLowerCase().includes(query)
    );
    return yearMatch || presMatch || memberMatch;
  });

  const committees = [
    {
      name: currentLang === 'ar' ? 'لجنة شؤون الأعضاء والمهنة' : 'Membership and Profession Committee',
      chair: currentLang === 'ar' ? 'م. بدر سالمين' : 'Eng. Badr Salmeen',
      members: 4,
      focus: currentLang === 'ar'
        ? 'إدارة عضوية المهندسين وتطوير معايير المهنة الهندسية'
        : 'Managing engineer membership and developing engineering profession standards'
    },
    {
      name: currentLang === 'ar' ? 'لجنة المؤتمرات والمعارض' : 'Conferences and Exhibitions Committee',
      chair: currentLang === 'ar' ? 'م. حبيب الجبوري' : 'Eng. Habeeb Al Juboori',
      members: 5,
      focus: currentLang === 'ar'
        ? 'تنظيم المؤتمرات الهندسية والمعارض المتخصصة والفعاليات العلمية'
        : 'Organizing engineering conferences, specialized exhibitions, and scientific events'
    },
    {
      name: currentLang === 'ar' ? 'لجنة الإعلام والعلاقات العامة' : 'Media and Public Relations Committee',
      chair: currentLang === 'ar' ? 'م. خالد الشيخ' : 'Eng. Khalid Al Sheikh',
      members: 5,
      focus: currentLang === 'ar'
        ? 'إدارة التواصل المؤسسي والإعلامي وإبراز أنشطة الجمعية'
        : 'Managing institutional and media communications and showcasing Society activities'
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
        {/* Hero Section with Interactive Timeline */}
        <section className="relative h-[650px] lg:h-[720px] bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Bahrain Society of Engineers Building" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-between py-8">
            {/* Header */}
            <div className="text-center px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <div className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-semibold mb-3 backdrop-blur-md">
                  {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'Bahrain Society of Engineers'}
                </div>
                <h1 className="text-3xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">
                  {currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}
                </h1>
                <p className="text-base lg:text-lg text-blue-200/90 max-w-2xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'رؤساء الجمعية على مر السنوات ومجلس الإدارة الحالي'
                    : 'Society Presidents Through the Years & Current Board of Directors'
                  }
                </p>
              </motion.div>

              {/* Selected President Details - Modal/Popup banner */}
              <AnimatePresence>
                {selectedPresident && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-4 max-w-2xl mx-auto"
                  >
                    <div className="bg-gradient-to-br from-slate-800/90 to-blue-950/90 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-4 shadow-2xl relative overflow-hidden text-right">
                      <div className="relative z-10 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={selectedPresident.image || DEFAULT_AVATAR} 
                            alt={currentLang === 'ar' ? selectedPresident.presidentAr : selectedPresident.presidentEn}
                            onError={handleImageError}
                            referrerPolicy="no-referrer"
                            className="w-14 h-14 rounded-full object-cover border-2 border-blue-400 shadow-md bg-slate-800 flex-shrink-0"
                          />
                          <div>
                            <h3 className="text-white font-bold text-base">
                              {currentLang === 'ar' ? selectedPresident.presidentAr : selectedPresident.presidentEn}
                            </h3>
                            <p className="text-blue-300 text-xs font-medium">
                              {currentLang === 'ar' ? selectedPresident.periodAr : selectedPresident.periodEn}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="hidden sm:flex flex-wrap gap-1 max-w-xs justify-end">
                            {(currentLang === 'ar' ? selectedPresident.achievementsAr : selectedPresident.achievementsEn)?.slice(0, 2).map((achievement, idx) => (
                              <span key={idx} className="bg-blue-500/20 text-blue-200 text-[11px] px-2.5 py-1 rounded-full border border-blue-400/20">
                                {achievement}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={() => setSelectedPresident(null)}
                            className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all text-white/80 hover:text-white"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Continuous Timeline */}
            <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-7xl mx-auto">
                <div className="relative">
                  {/* Timeline Controls */}
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={handlePrevious}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all border border-white/10"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {currentLang === 'ar' ? 'السابق' : 'Previous'}
                    </button>
                    
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-600 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all shadow-lg"
                    >
                      {isPaused ? (
                        <>
                          <span>{currentLang === 'ar' ? 'تشغيل الحركة' : 'Play Timeline'}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        </>
                      ) : (
                        <>
                          <span>{currentLang === 'ar' ? 'إيقاف مؤقت' : 'Pause'}</span>
                          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-semibold transition-all border border-white/10"
                    >
                      {currentLang === 'ar' ? 'التالي' : 'Next'}
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Timeline Container */}
                  <div className="relative h-64 overflow-hidden rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-white/5">
                    {/* Timeline Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/20 via-blue-500/60 to-blue-400/20 transform -translate-y-1/2"></div>
                    
                    {/* Timeline Items */}
                    <div
                      className="absolute inset-0"
                      style={{ 
                        transform: `translateX(${timelinePosition}px)`,
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      {!isPaused && (
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            x: currentLang === 'ar' ? [0, -presidentsTimeline.length * 180] : [0, presidentsTimeline.length * 180]
                          }}
                          transition={{
                            x: {
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 80,
                              ease: "linear"
                            }
                          }}
                        >
                          {[...presidentsTimeline, ...presidentsTimeline].map((president, index) => (
                            <TimelineItem
                              key={`${president.startYear}-${index}`}
                              president={president}
                              index={index}
                              currentLang={currentLang}
                              onSelect={handlePresidentClick}
                            />
                          ))}
                        </motion.div>
                      )}
                      
                      {/* Static Timeline Items */}
                      {isPaused && (
                        <div className="absolute inset-0">
                          {presidentsTimeline.map((president, index) => (
                            <TimelineItem
                              key={president.startYear}
                              president={president}
                              index={index}
                              currentLang={currentLang}
                              onSelect={handlePresidentClick}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline Info */}
                  <div className="mt-3 text-center">
                    <p className="text-blue-300/80 text-xs">
                      {currentLang === 'ar' 
                        ? 'انقر على صورة أي رئيس لعرض التفاصيل والإنجازات'
                        : 'Click on any president to view details and achievements'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 relative overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-xs font-bold mb-4">
                {currentLang === 'ar' ? 'فريق القيادة 2026' : 'Leadership Team 2026'}
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
                {currentLang === 'ar' ? 'أعضاء مجلس الإدارة' : 'Board Members'}
              </h2>
              <div className="h-1.5 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
              <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar' ? 'فريق من القادة والخبراء من مختلف التخصصات الهندسية' : 'A distinguished team of leaders across various engineering disciplines'}
              </p>
              
              {/* View Mode Toggle */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex bg-white rounded-full shadow-md p-1.5 border border-slate-200">
                  <button
                    onClick={() => setViewMode('current')}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                      viewMode === 'current'
                        ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {currentLang === 'ar' ? 'المجلس الحالي' : 'Current Board'}
                  </button>
                  <button
                    onClick={() => setViewMode('previous')}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                      viewMode === 'previous'
                        ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {currentLang === 'ar' ? 'المجالس السابقة' : 'Previous Boards'}
                  </button>
                </div>
              </div>
            </motion.div>
            
            {viewMode === 'current' ? (
              <>
                {/* President Card - Featured */}
                {presidentMember && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                  >
                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
                      <div className="flex flex-col lg:flex-row">
                        {/* Left Side - President Image */}
                        <div className="lg:w-2/5 relative min-h-[380px] lg:min-h-[480px] bg-slate-900 overflow-hidden">
                          <img 
                            src={presidentMember.image || DEFAULT_AVATAR} 
                            alt={currentLang === 'ar' ? presidentMember.nameAr : presidentMember.nameEn}
                            onError={handleImageError}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 start-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full shadow-lg text-xs font-bold">
                            {currentLang === 'ar' ? presidentMember.positionAr : presidentMember.positionEn}
                          </div>
                          <div className="absolute bottom-4 end-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg">
                            <Award className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                        
                        {/* Right Side - President Info */}
                        <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50/30">
                          <div className="space-y-6">
                            <div>
                              <div className="inline-block text-blue-600 font-semibold text-sm mb-1">
                                {currentLang === 'ar' ? presidentMember.positionAr : presidentMember.positionEn}
                              </div>
                              <h3 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-2">
                                {currentLang === 'ar' ? presidentMember.nameAr : presidentMember.nameEn}
                              </h3>
                              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                            </div>
                            
                            {/* President Message */}
                            <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100">
                              <h4 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                                {currentLang === 'ar' ? 'كلمة رئيس مجلس الإدارة' : "President's Message"}
                              </h4>
                              <p className="text-slate-700 leading-relaxed text-sm lg:text-base">
                                {currentLang === 'ar' 
                                  ? 'يسعدني أن أرحب بكم في جمعية المهندسين البحرينية. نعمل بجد وإخلاص لمواصلة مسيرة التطوير الهندسي ودعم الكفاءات الوطنية وتمكين المهندسين في مملكة البحرين.'
                                  : 'I am delighted to welcome you to the Bahrain Society of Engineers. We are committed to advancing the engineering profession, empowering national talent, and serving the community.'
                                }
                              </p>
                            </div>
                            
                            {/* Specialization & Contact */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                                <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <div>
                                  <div className="text-[11px] text-slate-500">{currentLang === 'ar' ? 'التخصص' : 'Specialization'}</div>
                                  <div className="text-sm font-bold text-slate-800">
                                    {currentLang === 'ar' ? presidentMember.specialization : presidentMember.specializationEn}
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                                <Briefcase className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <div>
                                  <div className="text-[11px] text-slate-500">{currentLang === 'ar' ? 'الدورة' : 'Term'}</div>
                                  <div className="text-sm font-bold text-slate-800">2026 - 2028</div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-4 pt-2">
                              <a 
                                href={`mailto:${presidentMember.email}`} 
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg"
                              >
                                <Mail className="w-4 h-4" />
                                {currentLang === 'ar' ? 'تواصل مع الرئيس' : 'Contact President'}
                              </a>
                              <div className="inline-flex items-center gap-2 text-slate-600 text-sm px-5 py-3 bg-slate-100 rounded-full font-medium">
                                <Phone className="w-4 h-4 text-blue-600" />
                                <span>{presidentMember.phone || '+973 1772 7100'}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Other Board Members Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {otherMembers.map((member: BoardMember) => (
                    <motion.div
                      key={member.id}
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col"
                    >
                      {/* Member Image */}
                      <div className="relative h-72 bg-slate-100 overflow-hidden">
                        <img 
                          src={member.image || DEFAULT_AVATAR} 
                          alt={currentLang === 'ar' ? member.nameAr : member.nameEn}
                          onError={handleImageError}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80"></div>
                        <div className="absolute bottom-3 start-3 end-3 text-white">
                          <span className="inline-block bg-blue-600/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-1 backdrop-blur-sm">
                            {currentLang === 'ar' ? member.positionAr : member.positionEn}
                          </span>
                          <h3 className="text-base font-bold truncate leading-tight">
                            {currentLang === 'ar' ? member.nameAr : member.nameEn}
                          </h3>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                        <div className="text-xs text-slate-600 flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span className="truncate">{currentLang === 'ar' ? member.specialization : member.specializationEn}</span>
                        </div>
                        
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <a 
                            href={`mailto:${member.email}`} 
                            className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center gap-1"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>{currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span>
                          </a>
                          <span className="text-slate-400 text-[11px]">BSE 2026</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : (
              /* Previous Boards Section */
              <div className="space-y-6">
                {/* Search & Decade Filters */}
                <div className="bg-white rounded-2xl shadow-md p-4 border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
                  {/* Decade Pills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      { id: 'all', labelAr: 'الكل (1972 - 2025)', labelEn: 'All (1972 - 2025)' },
                      { id: '2020s', labelAr: '2020 - 2025', labelEn: '2020s' },
                      { id: '2010s', labelAr: '2010 - 2019', labelEn: '2010s' },
                      { id: '2000s', labelAr: '2000 - 2009', labelEn: '2000s' },
                      { id: '1990s', labelAr: '1990 - 1999', labelEn: '1990s' },
                      { id: '1980s', labelAr: '1980 - 1989', labelEn: '1980s' },
                      { id: '1970s', labelAr: '1972 - 1979', labelEn: '1970s' },
                    ].map(dec => (
                      <button
                        key={dec.id}
                        onClick={() => setSelectedDecade(dec.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                          selectedDecade === dec.id
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {currentLang === 'ar' ? dec.labelAr : dec.labelEn}
                      </button>
                    ))}
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full md:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute start-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={boardSearch}
                      onChange={(e) => setBoardSearch(e.target.value)}
                      placeholder={currentLang === 'ar' ? 'بحث بالاسم أو السنة...' : 'Search by name or year...'}
                      className="w-full ps-9 pe-4 py-2 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Boards List */}
                {filteredPreviousBoards.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-8">
                    <p className="text-slate-500 text-sm">
                      {currentLang === 'ar' ? 'لم يتم العثور على نتائج مطابقة للبحث' : 'No matching boards found'}
                    </p>
                  </div>
                ) : (
                  filteredPreviousBoards.map((board, index) => {
                    const boardTitle = board.year
                      ? (currentLang === 'ar' ? `مجلس الإدارة لعام ${board.year}` : `Board of Directors ${board.year}`)
                      : (currentLang === 'ar' ? (board.periodAr || 'مجلس الإدارة') : (board.periodEn || 'Board of Directors'));
                    
                    const presidentName = board.presidentAr || 
                      board.members?.find(m => (m.positionAr || m.position || '').includes('الرئيس'))?.nameAr || 
                      board.members?.find(m => (m.positionAr || m.position || '').includes('الرئيس'))?.name;

                    return (
                      <motion.div
                        key={board.year || board.startYear || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-slate-100 overflow-hidden"
                      >
                        {/* Board Period Header */}
                        <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <div className="text-[11px] text-blue-300 font-semibold mb-0.5">
                              {currentLang === 'ar' ? 'الدورة السنوية' : 'Annual Term'}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold">
                              {boardTitle}
                            </h3>
                          </div>
                          {presidentName && (
                            <div className="bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-blue-200 border border-white/10 flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                              <span>{currentLang === 'ar' ? `الرئيس: ${presidentName}` : `President: ${presidentName}`}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Members List */}
                        <div className="p-4 sm:p-6">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {board.members.map((member, memberIndex) => {
                              const mName = currentLang === 'ar' 
                                ? (member.nameAr || member.name) 
                                : (member.nameEn || member.nameAr || member.name);
                              const mPos = currentLang === 'ar' 
                                ? (member.positionAr || member.position) 
                                : (member.positionEn || member.positionAr || member.position);

                              const isPresidentRole = (member.positionAr || member.position || '').includes('الرئيس');

                              return (
                                <div
                                  key={memberIndex}
                                  className={`rounded-xl p-3 border flex items-center gap-3 transition-colors ${
                                    isPresidentRole 
                                      ? 'bg-blue-50/70 border-blue-200' 
                                      : 'bg-slate-50/80 border-slate-100 hover:bg-blue-50/40'
                                  }`}
                                >
                                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${
                                    isPresidentRole ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                                  }`}>
                                    {memberIndex + 1}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-bold text-slate-900 truncate">
                                      {mName}
                                    </h4>
                                    <p className={`text-xs font-medium truncate ${isPresidentRole ? 'text-blue-700 font-semibold' : 'text-slate-500'}`}>
                                      {mPos}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </section>

        {/* Committees Section */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden text-white">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-block bg-blue-500/20 text-blue-300 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-semibold mb-3">
                {currentLang === 'ar' ? 'الهيكل التنظيمي' : 'Organizational Structure'}
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
                {currentLang === 'ar' ? 'اللجان الدائمة' : 'Standing Committees'}
              </h2>
              <p className="text-blue-200/80 text-sm lg:text-base max-w-xl mx-auto">
                {currentLang === 'ar' ? 'اللجان المتخصصة التي تدعم أنشطة ومبادرات مجلس الإدارة' : 'Specialized committees that support the activities and initiatives of the Board'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {committees.map((committee, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center text-blue-400 mb-4 border border-blue-400/20">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{committee.name}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed mb-4">{committee.focus}</p>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{currentLang === 'ar' ? 'رئيس اللجنة:' : 'Chair:'}</span>
                    <span className="font-bold text-blue-300">{committee.chair}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Meetings & Communication */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-blue-100/60 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {currentLang === 'ar' ? 'تواصل معنا' : 'Get in Touch'}
                </span>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
                  {currentLang === 'ar' ? 'تواصل مع أمانة سر مجلس الإدارة' : 'Contact the Board Secretariat'}
                </h3>
                <p className="text-slate-600 text-sm max-w-xl">
                  {currentLang === 'ar' 
                    ? 'يمكنكم التواصل مع أمانة سر مجلس الإدارة للاستفسارات والمقترحات عبر البريد الإلكتروني الرسمي.'
                    : 'You can contact the Board Secretariat for inquiries and proposals via official email.'
                  }
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:board.secretary@bse.bh"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-sm shadow-md hover:shadow-lg transition-all"
                >
                  board.secretary@bse.bh
                </a>
                <a 
                  href="tel:+97317727100"
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3 rounded-full text-sm border border-slate-200 shadow-sm transition-all"
                >
                  +973 1772 7100
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BoardOfDirectors;

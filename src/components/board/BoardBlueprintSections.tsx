import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Calendar, Mail, Phone, Briefcase, GraduationCap, Shield, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { currentBoardMembers, presidentsTimeline, previousBoards, PresidentRecord, BoardMember } from "@/data/bseOfficialData";

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

// Hero Section with Timeline
interface BoardHeroSectionProps {
  currentLang: string;
  selectedPresident: PresidentRecord | null;
  setSelectedPresident: (p: PresidentRecord | null) => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
  timelinePosition: number;
  setTimelinePosition: (pos: number) => void;
}

export const BoardHeroSection = ({
  currentLang,
  selectedPresident,
  setSelectedPresident,
  isPaused,
  setIsPaused,
  timelinePosition,
  setTimelinePosition
}: BoardHeroSectionProps) => {
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

  return (
    <section id="hero" className="bp-hero" style={{ minHeight: '720px' }}>
      <div className="bp-hero-grid" aria-hidden="true" />
      <figure className="bp-hero-art">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt={currentLang === 'ar' ? 'مجلس إدارة جمعية المهندسين البحرينية' : 'Bahrain Society of Engineers Board'}
        />
      </figure>

      {/* Hero top: Title & Meta */}
      <div className="bp-shell bp-hero-content" style={{ minHeight: 'auto', paddingBottom: '20px' }}>
        <motion.div
          className="bp-hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="bp-eyebrow">
            {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'BAHRAIN SOCIETY OF ENGINEERS'}
          </span>
          <h1>
            {currentLang === 'ar' ? 'مجلس' : 'Board of'}
            <br />
            {currentLang === 'ar' ? 'الإدارة' : 'Directors'}
          </h1>
          <p className="bp-hero-lead">
            {currentLang === 'ar'
              ? 'رؤساء الجمعية عبر السنوات ومجلس الإدارة الحالي المنتخب لقيادة الجمعية نحو المستقبل.'
              : 'Society Presidents through the years and the current elected Board of Directors leading the society forward.'}
          </p>
          <div className="bp-hero-rule" aria-hidden="true" />
          <div className="bp-hero-meta">
            <span>
              <strong>1972</strong>
              {currentLang === 'ar' ? 'تأسيس الجمعية' : 'Founded'}
            </span>
            <span>
              <strong>13+</strong>
              {currentLang === 'ar' ? 'رئيساً' : 'Presidents'}
            </span>
            <span>
              <strong>11</strong>
              {currentLang === 'ar' ? 'عضو في المجلس الحالي' : 'Current Members'}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Presidents timeline - preserved inside the hero */}
      <div className="relative z-10" style={{ paddingInline: '36px', paddingBottom: '24px' }}>
        {/* Selected president info card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={selectedPresident ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-4"
        >
          {selectedPresident && (
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
          )}
        </motion.div>

        {/* Timeline navigation and scroll */}
        <div className="relative">
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

          <div className="relative h-64 overflow-hidden rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-white/5">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/20 via-blue-500/60 to-blue-400/20 transform -translate-y-1/2"></div>
            
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

      <div className="bp-hero-bottom">
        <span>ENGINEERING · SERVICE · COMMUNITY</span>
        <span>{currentLang === 'ar' ? 'مجلس الإدارة / 01' : 'Board of Directors / 01'}</span>
      </div>
    </section>
  );
};

export const CurrentBoardSection = ({ currentLang, presidentMember, otherMembers }: CurrentBoardSectionProps) => {
  return (
    <section id="current-board" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <div className="mb-12">
          <span className="bp-eyebrow">
            02 / {currentLang === 'ar' ? 'فريق القيادة' : 'LEADERSHIP TEAM'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'أعضاء مجلس الإدارة' : 'Board of Directors'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' 
              ? 'فريق من القادة والخبراء من مختلف التخصصات الهندسية، يديرون دفة الجمعية ويحققون أهدافها للدورة 2026 - 2028.'
              : 'A distinguished team of leaders across various engineering disciplines directing the Society for the 2026 - 2028 term.'}
          </p>
        </div>

        {/* President Card - Blueprint Architecture */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bp-compare-card mb-12 bg-white !p-0 overflow-hidden border border-[var(--bse-line)] shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="bp-card-index p-4 sm:px-8 border-b border-[var(--bse-line)] bg-[var(--bse-sky)]/50 flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-wider text-[var(--bse-blue)]">
              01 — {currentLang === 'ar' ? 'رئيس مجلس الإدارة' : 'PRESIDENT OF THE BOARD'}
            </span>
            <span className="text-[11px] px-2.5 py-0.5 rounded border border-[var(--bse-line)] bg-white text-[var(--bse-navy)] font-mono font-bold">
              TERM 2026 - 2028
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 relative bg-[var(--bse-navy)] min-h-[360px] lg:min-h-[440px] overflow-hidden border-b lg:border-b-0 lg:border-e border-[var(--bse-line)]">
              <img 
                src={presidentMember.image || DEFAULT_AVATAR} 
                alt={currentLang === 'ar' ? presidentMember.nameAr : presidentMember.nameEn}
                onError={handleImageError}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bse-navy)]/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 start-4 end-4">
                <span className="inline-block bg-[var(--bse-blue-bright)] text-white text-xs font-bold px-3 py-1 rounded shadow">
                  {currentLang === 'ar' ? presidentMember.positionAr : presidentMember.positionEn}
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div className="space-y-6">
                <div>
                  <span className="bp-eyebrow text-xs">
                    {currentLang === 'ar' ? 'رئاسة الجمعية' : 'SOCIETY PRESIDENCY'}
                  </span>
                  <h3 className="mt-2 text-2xl lg:text-3xl font-extrabold text-[var(--bse-navy)]">
                    {currentLang === 'ar' ? presidentMember.nameAr : presidentMember.nameEn}
                  </h3>
                  <p className="text-[var(--bse-blue)] font-medium text-sm mt-1">
                    {currentLang === 'ar' ? presidentMember.positionAr : presidentMember.positionEn}
                  </p>
                </div>

                <div className="p-5 rounded-lg border border-[var(--bse-line)] bg-[var(--bse-paper)] relative">
                  <div className="text-xs font-bold font-mono text-[var(--bse-blue)] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--bse-blue)]"></span>
                    {currentLang === 'ar' ? 'كلمة رئيس مجلس الإدارة' : "PRESIDENT'S MESSAGE"}
                  </div>
                  <p className="text-[var(--bse-ink)]/85 text-sm leading-relaxed">
                    {currentLang === 'ar'
                      ? 'يسعدني أن أرحب بكم في جمعية المهندسين البحرينية. نعمل بجد وإخلاص لمواصلة مسيرة التطوير الهندسي ودعم الكفاءات الوطنية وتمكين المهندسين في مملكة البحرين.'
                      : 'I am delighted to welcome you to the Bahrain Society of Engineers. We are committed to advancing the engineering profession, empowering national talent, and serving the community.'}
                  </p>
                </div>

                <div className="bp-card-tags">
                  <span>{currentLang === 'ar' ? 'التخصص:' : 'Spec:'} {currentLang === 'ar' ? presidentMember.specialization : presidentMember.specializationEn}</span>
                  <span>{currentLang === 'ar' ? 'الدورة: 2026 - 2028' : 'Term: 2026 - 2028'}</span>
                  <span>BSE / COUNCIL 2026</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--bse-line)] flex flex-wrap gap-4 items-center justify-between">
                <a 
                  href={`mailto:${presidentMember.email}`} 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[var(--bse-navy)] text-white text-xs font-bold hover:bg-[var(--bse-blue)] transition-colors shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{currentLang === 'ar' ? 'مراسلة الرئيس' : 'Contact President'}</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-[var(--bse-muted)] font-mono">
                  <Phone className="w-3.5 h-3.5 text-[var(--bse-blue)]" />
                  <span>{presidentMember.phone || '+973 1772 7100'}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Members Cards - Blueprint Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherMembers.map((member: BoardMember, idx: number) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bp-service-card !p-0 flex flex-col overflow-hidden bg-white border border-[var(--bse-line)] hover:border-[var(--bse-blue)] transition-all duration-300 group"
            >
              <div className="bp-card-index p-3 border-b border-[var(--bse-line)] bg-[var(--bse-paper)] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--bse-blue)]">
                  {String(idx + 2).padStart(2, '0')} — MEMBER
                </span>
                <span className="text-[10px] font-mono text-[var(--bse-muted)]">BSE 2026</span>
              </div>

              <div className="relative h-64 bg-slate-100 overflow-hidden border-b border-[var(--bse-line)]">
                <img 
                  src={member.image || DEFAULT_AVATAR} 
                  alt={currentLang === 'ar' ? member.nameAr : member.nameEn}
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 start-3">
                  <span className="inline-block bg-[var(--bse-navy)] text-white text-[10px] font-bold px-2.5 py-1 rounded shadow">
                    {currentLang === 'ar' ? member.positionAr : member.positionEn}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                  <h3 className="text-base font-extrabold text-[var(--bse-navy)] truncate leading-tight">
                    {currentLang === 'ar' ? member.nameAr : member.nameEn}
                  </h3>
                  <p className="text-xs text-[var(--bse-blue)] font-medium mt-1 truncate">
                    {currentLang === 'ar' ? member.positionAr : member.positionEn}
                  </p>
                </div>

                <div className="bp-card-tags !mt-2">
                  <span className="truncate max-w-full text-[10px]">
                    {currentLang === 'ar' ? member.specialization : member.specializationEn}
                  </span>
                </div>

                <div className="pt-3 border-t border-[var(--bse-line)] flex items-center justify-between text-xs">
                  <a 
                    href={`mailto:${member.email}`}
                    className="bp-service-link text-xs !m-0"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</span>
                  </a>
                  <span className="text-[10px] font-mono text-[var(--bse-muted)]">2026-2028</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PreviousBoardsSection = ({
  currentLang,
  selectedDecade,
  setSelectedDecade,
  boardSearch,
  setBoardSearch,
  filteredPreviousBoards
}: PreviousBoardsSectionProps) => {
  return (
    <section id="previous-boards" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <div className="mb-10">
          <span className="bp-eyebrow">
            02 / {currentLang === 'ar' ? 'الأرشيف التاريخي' : 'HISTORICAL ARCHIVE'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'مجالس الإدارة المتعاقبة' : 'Previous Boards of Directors'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' 
              ? 'سجل توثيقي شامل لمجالس إدارة جمعية المهندسين البحرينية منذ التأسيس عام 1972 وحتى اليوم.'
              : 'A comprehensive archive of BSE Boards of Directors from foundation in 1972 until today.'}
          </p>
        </div>

        <div className="space-y-6">
          {/* Blueprint Filter Bar */}
          <div className="bg-white p-4 border border-[var(--bse-line)] flex flex-col md:flex-row gap-4 items-center justify-between">
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
                  className={`px-3.5 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                    selectedDecade === dec.id
                      ? 'bg-[var(--bse-navy)] text-white shadow-sm'
                      : 'bg-[var(--bse-paper)] text-[var(--bse-ink)] hover:bg-[var(--bse-sky)] border border-[var(--bse-line)]'
                  }`}
                >
                  {currentLang === 'ar' ? dec.labelAr : dec.labelEn}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[var(--bse-muted)] absolute start-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={boardSearch}
                onChange={(e) => setBoardSearch(e.target.value)}
                placeholder={currentLang === 'ar' ? 'بحث بالاسم أو السنة...' : 'Search by name or year...'}
                className="w-full ps-9 pe-4 py-2 text-xs rounded border border-[var(--bse-line)] focus:outline-none focus:border-[var(--bse-blue)] bg-[var(--bse-paper)] focus:bg-white transition-colors"
              />
            </div>
          </div>

          {filteredPreviousBoards.length === 0 ? (
            <div className="text-center py-16 bg-white border border-[var(--bse-line)] p-8">
              <p className="text-[var(--bse-muted)] text-sm">
                {currentLang === 'ar' ? 'لم يتم العثور على نتائج مطابقة للبحث' : 'No matching boards found'}
              </p>
            </div>
          ) : (
            filteredPreviousBoards.map((board, index) => {
              const boardTitle = board.year
                ? (currentLang === 'ar' ? `مجلس الإدارة لعام ${board.year}` : `Board of Directors ${board.year}`)
                : (currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors');
              
              const presidentName = board.presidentAr || 
                board.members?.find(m => (m.positionAr || m.position || '').includes('الرئيس'))?.nameAr || 
                board.members?.find(m => (m.positionAr || m.position || '').includes('الرئيس'))?.name;

              return (
                <motion.div
                  key={board.year || index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.3) }}
                  className="bp-service-card !p-0 overflow-hidden bg-white border border-[var(--bse-line)] hover:border-[var(--bse-blue)] transition-all"
                >
                  <div className="bp-card-index p-4 border-b border-[var(--bse-line)] bg-[var(--bse-sky)]/30 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-xs text-[var(--bse-blue)]">
                        COUNCIL / {board.year}
                      </span>
                      <h3 className="text-sm font-bold text-[var(--bse-navy)]">
                        {boardTitle}
                      </h3>
                    </div>
                    {presidentName && (
                      <div className="bg-white px-3 py-1 rounded text-xs font-semibold text-[var(--bse-navy)] border border-[var(--bse-line)] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span>{currentLang === 'ar' ? `الرئيس: ${presidentName}` : `President: ${presidentName}`}</span>
                      </div>
                    )}
                  </div>
                  
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
                            className={`rounded p-3 border flex items-center gap-3 transition-colors ${
                              isPresidentRole 
                                ? 'bg-[var(--bse-sky)]/50 border-[var(--bse-blue)]/40' 
                                : 'bg-[var(--bse-paper)] border-[var(--bse-line)] hover:bg-[var(--bse-sky)]/30'
                            }`}
                          >
                            <div className="w-7 h-7 rounded bg-[var(--bse-navy)] text-white flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                              {memberIndex + 1}
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="text-xs font-bold text-[var(--bse-navy)] truncate">
                                {mName}
                              </h4>
                              <p className="text-[11px] text-[var(--bse-blue)] font-medium truncate">
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
      </div>
    </section>
  );
};

export const CommitteesSection = ({ currentLang }: CommitteesSectionProps) => {
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

  return (
    <section id="committees" className="bp-section bp-section--dark">
      <div className="bp-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="bp-eyebrow">
            03 / {currentLang === 'ar' ? 'اللجان الدائمة' : 'STANDING COMMITTEES'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'الهيكل التنظيمي للجان' : 'Committees Structure'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' 
              ? 'اللجان المتخصصة التي تدعم أنشطة ومبادرات مجلس الإدارة وتسهم في خدمة المجتمع الهندسي.'
              : 'Specialized committees supporting Board activities and initiatives serving the engineering community.'}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bp-service-card !bg-[var(--bse-navy)] !border-[var(--bse-line-dark)] text-white p-6 flex flex-col justify-between"
            >
              <div>
                <div className="bp-service-icon !bg-blue-500/20 !border-blue-400/30 !text-[var(--bse-blue-bright)] mb-5">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="bp-card-index text-[10px] font-mono text-[var(--bse-ring)] mb-2">
                  <span>0{index + 1} — COMMITTEE</span>
                  <span>{committee.members} {currentLang === 'ar' ? 'أعضاء' : 'Members'}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{committee.name}</h3>
                <p className="text-white/70 text-xs leading-relaxed mb-6">{committee.focus}</p>
              </div>

              <div className="pt-4 border-t border-[var(--bse-line-dark)] flex items-center justify-between text-xs">
                <span className="text-white/50 font-mono text-[11px]">{currentLang === 'ar' ? 'رئيس اللجنة:' : 'Chair:'}</span>
                <span className="font-bold text-[var(--bse-ring)]">{committee.chair}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BoardContactSection = ({ currentLang }: BoardContactSectionProps) => {
  return (
    <section id="contact" className="bp-section bp-contact">
      <div className="bp-shell">
        <div className="bp-compare-card !bg-[var(--bse-navy-2)] !border-[var(--bse-line-dark)] text-white p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="bp-eyebrow text-xs">
              {currentLang === 'ar' ? 'أمانة السر' : 'BOARD SECRETARIAT'}
            </span>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mt-2 mb-3">
              {currentLang === 'ar' ? 'تواصل مع أمانة سر مجلس الإدارة' : 'Contact the Board Secretariat'}
            </h3>
            <p className="text-white/70 text-sm max-w-xl leading-relaxed">
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
  );
};

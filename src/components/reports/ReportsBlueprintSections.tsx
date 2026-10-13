import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Download, Calendar, Users, TrendingUp, Award, BarChart3, Eye, Clock, CheckCircle, AlertCircle, Search, Filter, Globe, X, ChevronDown, FileDown, Languages } from "lucide-react";

// ─── Shared Reveal Utility ────────────────────────────────────────────────────
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => (
  <motion.div
    initial={false}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.16 }}
    transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

// Hero Section
interface ReportsHeroSectionProps {
  currentLang: string;
}

export const ReportsHeroSection = ({ currentLang }: ReportsHeroSectionProps) => {
  return (
    <section id="hero" className="bp-hero">
      <div className="bp-hero-grid" aria-hidden="true" />
      <figure className="bp-hero-art">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt={currentLang === 'ar' ? 'تقارير الجمعية العمومية' : 'Annual Reports and Business Meeting'}
        />
      </figure>

      <div className="bp-shell bp-hero-content">
        <Reveal className="bp-hero-copy">
          <span className="bp-eyebrow">
            {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'BAHRAIN SOCIETY OF ENGINEERS'}
          </span>
          <h1>
            {currentLang === 'ar' ? 'تقارير' : 'General'}
            <br />
            {currentLang === 'ar' ? 'الجمعية العمومية' : 'Assembly Reports'}
          </h1>
          <p className="bp-hero-lead">
            {currentLang === 'ar'
              ? 'التقارير السنوية التي تعكس شفافية ومساءلة الجمعية أمام أعضائها والمجتمع الهندسي في مملكة البحرين.'
              : 'Annual reports that reflect the society\'s transparency and accountability to its members and the engineering community.'}
          </p>
          <div className="bp-hero-rule" aria-hidden="true" />
          <div className="bp-hero-meta">
            <span>
              <strong>20+</strong>
              {currentLang === 'ar' ? 'تقرير سنوي' : 'Annual Reports'}
            </span>
            <span>
              <strong>2025</strong>
              {currentLang === 'ar' ? 'آخر إصدار' : 'Latest Issue'}
            </span>
            <span>
              <strong>2</strong>
              {currentLang === 'ar' ? 'لغة' : 'Languages'}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="bp-hero-bottom">
        <span>ENGINEERING · SERVICE · COMMUNITY</span>
        <span>{currentLang === 'ar' ? 'التقارير / 01' : 'Reports / 01'}</span>
      </div>
    </section>
  );
};

// Search and Filter Section
interface SearchFilterSectionProps {
  currentLang: string;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filterYear: string;
  setFilterYear: (value: string) => void;
  filterLanguage: string;
  setFilterLanguage: (value: string) => void;
  showAdvancedFilters: boolean;
  setShowAdvancedFilters: (value: boolean) => void;
  isSearchFocused: boolean;
  setIsSearchFocused: (value: boolean) => void;
  filteredReportsCount: number;
  reports: { year: string }[];
}

export const SearchFilterSection = ({
  currentLang,
  searchTerm,
  setSearchTerm,
  filterYear,
  setFilterYear,
  filterLanguage,
  setFilterLanguage,
  showAdvancedFilters,
  setShowAdvancedFilters,
  isSearchFocused,
  setIsSearchFocused,
  filteredReportsCount,
  reports
}: SearchFilterSectionProps) => {
  return (
    <section id="search" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <Reveal className="mb-12">
          <h2>
            {currentLang === 'ar' ? 'التقارير السنوية' : 'Annual Reports'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' ? 'جميع تقارير الجمعية العمومية متاحة للتحميل والمراجعة' : 'All general assembly reports are available for download and review'}
          </p>
        </Reveal>

        <div className="bp-compare-card !p-6 mb-12">
          <div className="mb-6">
            <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <Search className={`w-5 h-5 transition-colors duration-300 ${isSearchFocused ? 'text-[var(--bse-blue)]' : 'text-[var(--bse-muted)]'}`} />
              </div>
              <input
                type="text"
                placeholder={currentLang === 'ar' ? 'ابحث عن تقرير بالسنة أو بالاسم...' : 'Search by year or report name...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`w-full pr-12 pl-4 py-3 text-sm border transition-all duration-300 ${
                  isSearchFocused 
                    ? 'border-[var(--bse-blue)] bg-[var(--bse-sky)]/30 shadow-sm' 
                    : 'border-[var(--bse-line)] bg-[var(--bse-paper)] hover:border-[var(--bse-blue)]/50'
                } focus:outline-none focus:border-[var(--bse-blue)] rounded`}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-[var(--bse-line)] hover:bg-[var(--bse-muted)]/20 transition-colors duration-200"
                >
                  <X className="w-3.5 h-3.5 text-[var(--bse-muted)]" />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-[var(--bse-navy)] hover:bg-[var(--bse-blue)] text-white text-xs font-bold rounded transition-all shadow-sm"
            >
              <Filter className="w-4 h-4" />
              <span>{currentLang === 'ar' ? 'الفلاتر المتقدمة' : 'Advanced Filters'}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showAdvancedFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bse-sky)]/50 rounded border border-[var(--bse-line)]">
              <span className="text-[var(--bse-blue)] font-mono text-xs font-bold">
                {filteredReportsCount} {currentLang === 'ar' ? 'نتيجة' : 'results'}
              </span>
            </div>
          </div>

          {showAdvancedFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-[var(--bse-paper)] rounded border border-[var(--bse-line)]"
            >
              <div>
                <label className="block text-xs font-bold text-[var(--bse-muted)] mb-2 font-mono">
                  {currentLang === 'ar' ? 'السنة' : 'YEAR'}
                </label>
                <select
                  value={filterYear}
                  onChange={(e) => setFilterYear(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[var(--bse-line)] rounded focus:outline-none focus:border-[var(--bse-blue)] bg-white"
                >
                  <option value="all">{currentLang === 'ar' ? 'جميع السنوات' : 'All Years'}</option>
                  {reports.map(report => (
                    <option key={report.year} value={report.year}>{report.year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--bse-muted)] mb-2 font-mono">
                  {currentLang === 'ar' ? 'اللغة' : 'LANGUAGE'}
                </label>
                <select
                  value={filterLanguage}
                  onChange={(e) => setFilterLanguage(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-[var(--bse-line)] rounded focus:outline-none focus:border-[var(--bse-blue)] bg-white"
                >
                  <option value="all">{currentLang === 'ar' ? 'جميع اللغات' : 'All Languages'}</option>
                  <option value="english">{currentLang === 'ar' ? 'الإنجليزية' : 'English'}</option>
                  <option value="arabic">{currentLang === 'ar' ? 'العربية' : 'Arabic'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[var(--bse-muted)] mb-2 font-mono">
                  {currentLang === 'ar' ? 'إجراءات' : 'ACTIONS'}
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setFilterYear('all');
                      setFilterLanguage('all');
                    }}
                    className="flex-1 px-3 py-2 bg-[var(--bse-paper)] hover:bg-[var(--bse-sky)]/30 text-[var(--bse-ink)] text-xs font-bold rounded border border-[var(--bse-line)] transition-colors duration-200"
                  >
                    {currentLang === 'ar' ? 'مسح' : 'Clear'}
                  </button>
                  <button
                    onClick={() => setShowAdvancedFilters(false)}
                    className="flex-1 px-3 py-2 bg-[var(--bse-blue)] hover:bg-[var(--bse-navy)] text-white text-xs font-bold rounded transition-colors duration-200"
                  >
                    {currentLang === 'ar' ? 'تطبيق' : 'Apply'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

// Reports List Section
interface Report {
  id: number;
  year: string;
  englishUrl: string | null;
  arabicUrl: string | null;
  englishTitle: string;
  arabicTitle: string;
  status: string;
}

interface ReportsListSectionProps {
  currentLang: string;
  filteredReports: Report[];
  showLanguageMenu: boolean;
  setShowLanguageMenu: (value: boolean) => void;
  filterLanguage: string;
  setFilterLanguage: (value: string) => void;
  onClearFilters: () => void;
}

export const ReportsListSection = ({
  currentLang,
  filteredReports,
  showLanguageMenu,
  setShowLanguageMenu,
  filterLanguage,
  setFilterLanguage,
  onClearFilters
}: ReportsListSectionProps) => {
  return (
    <section id="reports-list" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <Reveal className="mb-10">
          <h2>
            {currentLang === 'ar' ? 'قائمة التقارير' : 'Reports List'}
          </h2>
          <p className="bp-section-intro">
            {filteredReports.length} {currentLang === 'ar' ? 'تقرير متاح للتحميل' : 'reports available for download'}
          </p>
        </Reveal>

        <div className="bp-compare-card !p-0 overflow-hidden">
          <div className="bg-[var(--bse-navy)] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">
                  {currentLang === 'ar' ? 'الأرشيف الكامل' : 'Full Archive'}
                </h3>
                <p className="text-white/60 text-xs">
                  {currentLang === 'ar' ? 'من 1972 إلى 2025' : 'From 1972 to 2025'}
                </p>
              </div>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white text-xs font-bold transition-all"
              >
                <Languages className="w-4 h-4" />
                <span>{currentLang === 'ar' ? 'اللغة' : 'Language'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${showLanguageMenu ? 'rotate-180' : ''}`} />
              </button>

              {showLanguageMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-[var(--bse-line)] overflow-hidden z-50"
                >
                  <button
                    onClick={() => {
                      setFilterLanguage('all');
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left hover:bg-[var(--bse-sky)]/30 transition-colors duration-200 flex items-center gap-2 text-xs ${
                      filterLanguage === 'all' ? 'bg-[var(--bse-sky)]/30 text-[var(--bse-blue)] font-bold' : 'text-[var(--bse-ink)]'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>{currentLang === 'ar' ? 'الكل' : 'All'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setFilterLanguage('english');
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left hover:bg-[var(--bse-sky)]/30 transition-colors duration-200 flex items-center gap-2 text-xs ${
                      filterLanguage === 'english' ? 'bg-[var(--bse-sky)]/30 text-[var(--bse-blue)] font-bold' : 'text-[var(--bse-ink)]'
                    }`}
                  >
                    <div className="w-3 h-3 bg-[var(--bse-blue)] rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">E</span>
                    </div>
                    <span>{currentLang === 'ar' ? 'إنجليزي' : 'English'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setFilterLanguage('arabic');
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-3 py-2 text-left hover:bg-[var(--bse-sky)]/30 transition-colors duration-200 flex items-center gap-2 text-xs ${
                      filterLanguage === 'arabic' ? 'bg-[var(--bse-sky)]/30 text-[var(--bse-blue)] font-bold' : 'text-[var(--bse-ink)]'
                    }`}
                  >
                    <div className="w-3 h-3 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">ع</span>
                    </div>
                    <span>{currentLang === 'ar' ? 'عربي' : 'Arabic'}</span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--bse-paper)] border-b border-[var(--bse-line)]">
                <tr>
                  <th className="px-4 py-3 text-center font-bold text-[var(--bse-navy)] text-xs font-mono">
                    {currentLang === 'ar' ? 'السنة' : 'YEAR'}
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-[var(--bse-navy)] text-xs font-mono">
                    {currentLang === 'ar' ? 'تقرير إنجليزي' : 'ENGLISH'}
                  </th>
                  <th className="px-4 py-3 text-center font-bold text-[var(--bse-navy)] text-xs font-mono">
                    {currentLang === 'ar' ? 'تقرير عربي' : 'ARABIC'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredReports.length > 0 ? (
                  filteredReports.map((report, index) => (
                    <motion.tr
                      key={report.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ backgroundColor: 'var(--bse-sky)/20' }}
                      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
                      className="border-b border-[var(--bse-line)] hover:bg-[var(--bse-sky)]/20 transition-colors duration-200"
                    >
                      <td className="px-4 py-4 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--bse-navy)] text-white rounded-lg font-mono font-bold text-sm">
                          {report.year}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {report.englishUrl ? (
                          <motion.a
                            href={report.englishUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bse-blue)] hover:bg-[var(--bse-navy)] text-white text-xs font-bold rounded-lg transition-all duration-200"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                            <span>{currentLang === 'ar' ? 'تحميل' : 'Download'}</span>
                          </motion.a>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bse-paper)] text-[var(--bse-muted)] text-xs font-bold rounded-lg cursor-not-allowed">
                            <FileDown className="w-3.5 h-3.5" />
                            <span>{currentLang === 'ar' ? 'غير متوفر' : 'N/A'}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 text-center">
                        {report.arabicUrl ? (
                          <motion.a
                            href={report.arabicUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-all duration-200"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                            <span>{currentLang === 'ar' ? 'تحميل' : 'Download'}</span>
                          </motion.a>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bse-paper)] text-[var(--bse-muted)] text-xs font-bold rounded-lg cursor-not-allowed">
                            <FileDown className="w-3.5 h-3.5" />
                            <span>{currentLang === 'ar' ? 'غير متوفر' : 'N/A'}</span>
                          </div>
                        )}
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-6 py-12 text-center text-[var(--bse-muted)]">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center max-w-md mx-auto"
                      >
                        <div className="w-16 h-16 bg-[var(--bse-paper)] rounded-2xl flex items-center justify-center mb-4 border border-[var(--bse-line)]">
                          <FileText className="w-8 h-8 text-[var(--bse-muted)]" />
                        </div>
                        <h3 className="text-base font-bold text-[var(--bse-navy)] mb-2">
                          {currentLang === 'ar' ? 'لا توجد تقارير مطابقة' : 'No matching reports found'}
                        </h3>
                        <p className="text-[var(--bse-muted)] text-sm mb-4">
                          {currentLang === 'ar' 
                            ? 'حاول تعديل معايير البحث أو الفلترة' 
                            : 'Try adjusting your search or filter criteria'
                          }
                        </p>
                        <button
                          onClick={onClearFilters}
                          className="px-4 py-2 bg-[var(--bse-blue)] hover:bg-[var(--bse-navy)] text-white text-xs font-bold rounded-lg transition-colors duration-200"
                        >
                          {currentLang === 'ar' ? 'مسح الفلاتر' : 'Clear Filters'}
                        </button>
                      </motion.div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

// Financial Highlights Section
interface FinancialHighlight {
  year: string;
  revenue: string;
  expenses: string;
  surplus: string;
  growth: string;
}

interface FinancialHighlightsSectionProps {
  currentLang: string;
  financialHighlights: FinancialHighlight[];
}

export const FinancialHighlightsSection = ({ currentLang, financialHighlights }: FinancialHighlightsSectionProps) => {
  return (
    <section id="financial-highlights" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <Reveal className="mb-10">
          <h2>
            {currentLang === 'ar' ? 'الأداء المالي' : 'Financial Performance'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' ? 'نظرة عامة على الأداء المالي للجمعية خلال السنوات الأخيرة' : 'Overview of the society\'s financial performance in recent years'}
          </p>
        </Reveal>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg border border-[var(--bse-line)] overflow-hidden">
            <thead className="bg-[var(--bse-navy)] text-white">
              <tr>
                <th className="px-4 py-3 text-right text-xs font-mono font-bold">{currentLang === 'ar' ? 'السنة' : 'YEAR'}</th>
                <th className="px-4 py-3 text-right text-xs font-mono font-bold">{currentLang === 'ar' ? 'الإيرادات' : 'REVENUE'}</th>
                <th className="px-4 py-3 text-right text-xs font-mono font-bold">{currentLang === 'ar' ? 'المصروفات' : 'EXPENSES'}</th>
                <th className="px-4 py-3 text-right text-xs font-mono font-bold">{currentLang === 'ar' ? 'الفائض' : 'SURPLUS'}</th>
                <th className="px-4 py-3 text-right text-xs font-mono font-bold">{currentLang === 'ar' ? 'النمو' : 'GROWTH'}</th>
              </tr>
            </thead>
            <tbody>
              {financialHighlights.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border-b border-[var(--bse-line)] hover:bg-[var(--bse-sky)]/20 transition-colors duration-300"
                >
                  <td className="px-4 py-3 font-bold text-[var(--bse-navy)] text-sm">{item.year}</td>
                  <td className="px-4 py-3 text-[var(--bse-ink)] text-sm">{item.revenue}</td>
                  <td className="px-4 py-3 text-[var(--bse-ink)] text-sm">{item.expenses}</td>
                  <td className="px-4 py-3 text-[var(--bse-blue)] font-bold text-sm">{item.surplus}</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 rounded text-xs font-bold bg-[var(--bse-sky)]/50 text-[var(--bse-blue)]">
                      {item.growth}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Upcoming Meetings Section
interface Meeting {
  date: string;
  title: string;
  location: string;
  agenda: string[];
}

interface UpcomingMeetingsSectionProps {
  currentLang: string;
  upcomingMeetings: Meeting[];
}

export const UpcomingMeetingsSection = ({ currentLang, upcomingMeetings }: UpcomingMeetingsSectionProps) => {
  return (
    <section id="upcoming-meetings" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <Reveal className="mb-10">
          <h2>
            {currentLang === 'ar' ? 'الاجتماعات القادمة' : 'Upcoming Meetings'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' ? 'جدول اجتماعات الجمعية العمومية القادمة' : 'Schedule of upcoming general assembly meetings'}
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingMeetings.map((meeting, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bp-service-card !p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--bse-navy)] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[var(--bse-navy)] mb-2">{meeting.title}</h3>
                  <div className="flex items-center text-[var(--bse-blue)] text-xs mb-2">
                    <Clock className="w-3.5 h-3.5 mr-2" />
                    <span>{meeting.date}</span>
                  </div>
                  <div className="flex items-center text-[var(--bse-muted)] text-xs mb-3">
                    <Users className="w-3.5 h-3.5 mr-2" />
                    <span>{meeting.location}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-[var(--bse-navy)] mb-2 text-xs font-mono">
                      {currentLang === 'ar' ? 'جدول الأعمال' : 'AGENDA'}
                    </h4>
                    <div className="space-y-1.5">
                      {meeting.agenda.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-[var(--bse-blue)] rounded-full mr-2 mt-1 flex-shrink-0"></div>
                          <span className="text-[var(--bse-ink)] text-xs">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Important Information Section
interface ImportantInfoSectionProps {
  currentLang: string;
}

export const ImportantInfoSection = ({ currentLang }: ImportantInfoSectionProps) => {
  const infoItems = [
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: currentLang === 'ar' ? 'الحقوق والواجبات' : 'Rights and Responsibilities',
      description: currentLang === 'ar'
        ? 'لجميع الأعضاء الحق في حضور الجمعية العمومية والتصويت على القرارات والمشاركة في صنع القرار.'
        : 'All members have the right to attend the general assembly, vote on decisions, and participate in decision-making.'
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: currentLang === 'ar' ? 'الشفافية والنزاهة' : 'Transparency and Integrity',
      description: currentLang === 'ar'
        ? 'جميع قرارات الجمعية العمومية يتم توثيقها ونشرها لضمان الشفافية الكاملة.'
        : 'All general assembly decisions are documented and published to ensure complete transparency.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: currentLang === 'ar' ? 'المشاركة الفعالة' : 'Active Participation',
      description: currentLang === 'ar'
        ? 'نشجع جميع الأعضاء على المشاركة الفعالة في اجتماعات الجمعية العمومية لإثراء النقاش.'
        : 'We encourage all members to actively participate in general assembly meetings to enrich the discussion.'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: currentLang === 'ar' ? 'الوثائق الرسمية' : 'Official Documents',
      description: currentLang === 'ar'
        ? 'يمكن الحصول على نسخ رسمية من تقارير الجمعية العمومية من مقر الجمعية.'
        : 'Official copies of general assembly reports can be obtained from the society headquarters.'
    }
  ];

  return (
    <section id="important-info" className="bp-section bp-section--dark">
      <div className="bp-shell">
        <Reveal className="mb-10">
          <h2>
            {currentLang === 'ar' ? 'معلومات هامة' : 'Important Information'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' 
              ? 'كل ما تحتاج معرفته عن اجتماعات الجمعية العمومية'
              : 'Everything you need to know about general assembly meetings'
            }
          </p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoItems.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bp-service-card !bg-[var(--bse-navy)] !border-[var(--bse-line-dark)] text-white !p-6"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <div className="text-white">
                  {info.icon}
                </div>
              </div>
              <h3 className="text-base font-bold text-white mb-3">{info.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
interface ReportsContactSectionProps {
  currentLang: string;
}

export const ReportsContactSection = ({ currentLang }: ReportsContactSectionProps) => {
  return (
    <section id="contact" className="bp-section bp-contact">
      <div className="bp-shell">
        <Reveal className="bp-compare-card !bg-[var(--bse-navy-2)] !border-[var(--bse-line-dark)] text-white p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
              {currentLang === 'ar' ? 'تواصل معنا للحصول على أي معلومات إضافية' : 'Contact us for any additional information'}
            </h3>
            <p className="text-white/70 text-sm max-w-xl leading-relaxed">
              {currentLang === 'ar' 
                ? 'نحن هنا لمساعدتك في الحصول على أي معلومات حول تقارير الجمعية العمومية'
                : 'We are here to help you with any information about general assembly reports'
              }
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:info@bse.bh"
              className="bg-[var(--bse-blue)] hover:bg-[var(--bse-navy)] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md hover:shadow-lg transition-all"
            >
              {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </a>
            <a 
              href="tel:+97317727100"
              className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3 rounded-full text-sm border border-slate-200 shadow-sm transition-all"
            >
              +973 1772 7100
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

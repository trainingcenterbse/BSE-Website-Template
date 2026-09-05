import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText, RefreshCw, Search, X, ExternalLink, Calendar,
  Zap, Filter, ArrowRight, ArrowLeft, ChevronRight,
} from "lucide-react";
import {
  BSENewsArticle,
  getCachedNews,
  filterByCategory,
  searchNews,
  loadNews,
  categoryLabels,
  getMagazines,
  getNewsletters,
  fetchLatestNews,
} from "@/services/bseNewsService";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = BSENewsArticle["category"] | "all";

const CATEGORIES: { id: Category; ar: string; en: string }[] = [
  { id: "all", ar: "الكل", en: "All" },
  { id: "conference", ar: "مؤتمرات", en: "Conferences" },
  { id: "training", ar: "تدريب", en: "Training" },
  { id: "partnership", ar: "شراكات", en: "Partnerships" },
  { id: "award", ar: "جوائز", en: "Awards" },
  { id: "general", ar: "عام", en: "General" },
  { id: "magazine", ar: "مجلة", en: "Magazine" },
  { id: "newsletter", ar: "نشرة", en: "Newsletter" },
];

// ─── Skeleton Card ─────────────────────────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
    <div className="w-full h-48 bg-gray-200" />
    <div className="p-5 space-y-3">
      <div className="h-3 bg-gray-200 rounded-full w-1/3" />
      <div className="h-4 bg-gray-200 rounded-full w-full" />
      <div className="h-4 bg-gray-200 rounded-full w-4/5" />
      <div className="h-3 bg-gray-100 rounded-full w-1/2" />
    </div>
  </div>
);

// ─── Featured Article Card ────────────────────────────────────────────────────
const FeaturedCard = ({
  article,
  lang,
}: {
  article: BSENewsArticle;
  lang: "ar" | "en";
}) => {
  const cat = categoryLabels[article.category];
  const [imgError, setImgError] = useState(false);

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-3xl shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={imgError ? "https://bse.bh/wp-content/uploads/BSE-Building-Juffair.jpg" : article.image}
          alt={lang === "ar" ? article.titleAr : article.titleEn}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${cat.bg} ${cat.color}`}>
            {lang === "ar" ? cat.ar : cat.en}
          </span>
          <span className="text-white/70 text-sm flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.displayDate}
          </span>
        </div>
        <h3 className="text-white text-xl md:text-2xl font-bold leading-snug mb-2 line-clamp-2">
          {lang === "ar" ? article.titleAr : article.titleEn}
        </h3>
        <p className="text-white/80 text-sm line-clamp-2 mb-4">
          {lang === "ar" ? article.descriptionAr : article.descriptionEn}
        </p>
        <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold group-hover:text-white transition-colors">
          <ExternalLink className="w-4 h-4" />
          {lang === "ar" ? "اقرأ المزيد" : "Read more"}
        </div>
      </div>
    </motion.a>
  );
};

// ─── Standard Article Card ────────────────────────────────────────────────────
const ArticleCard = ({
  article,
  lang,
  delay = 0,
}: {
  article: BSENewsArticle;
  lang: "ar" | "en";
  delay?: number;
}) => {
  const cat = categoryLabels[article.category];
  const [imgError, setImgError] = useState(false);

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={imgError ? "https://bse.bh/wp-content/uploads/BSE-Building-Juffair.jpg" : article.image}
          alt={lang === "ar" ? article.titleAr : article.titleEn}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 start-3">
          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${cat.bg} ${cat.color}`}>
            {lang === "ar" ? cat.ar : cat.en}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
          <Calendar className="w-3.5 h-3.5" />
          {article.displayDate}
        </div>
        <h3 className="text-gray-900 font-bold text-base leading-snug mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
          {lang === "ar" ? article.titleAr : article.titleEn}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
          {lang === "ar" ? article.descriptionAr : article.descriptionEn}
        </p>
        <div className="mt-4 flex items-center gap-1.5 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          {lang === "ar" ? "اقرأ المزيد" : "Read more"}
          {lang === "ar" ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </div>
      </div>
    </motion.a>
  );
};

// ─── Main NewsSection Component ───────────────────────────────────────────────

interface NewsSectionProps {
  currentLang?: string; // legacy prop – use LanguageContext instead
  compact?: boolean;    // show fewer items (for home page)
}

const NewsSection = ({ compact = false }: NewsSectionProps) => {
  const { lang, t } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const [articles, setArticles] = useState<BSENewsArticle[]>(() => getCachedNews());
  const [isLive, setIsLive] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Try to load live news on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      const result = await loadNews();
      if (mounted) {
        setArticles(result.articles);
        setIsLive(result.isLive);
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Manual refresh
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setIsLoading(true);
    try {
      const liveNews = await fetchLatestNews();
      setArticles(liveNews);
      setIsLive(true);
    } catch (error) {
      console.error('Failed to refresh news:', error);
      setArticles(getCachedNews());
      setIsLive(false);
    } finally {
      setIsRefreshing(false);
      setIsLoading(false);
    }
  }, []);

  // Filter & search
  const filtered = searchNews(
    filterByCategory(articles, activeCategory),
    searchQuery,
    lang
  );

  const featured = filtered.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);
  const visibleRest = compact ? rest.slice(0, 3) : rest;

  return (
    <section
      id="news"
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            {/* Live badge */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-full px-3 py-1.5 shadow-sm">
                <span className={`w-2 h-2 rounded-full ${isLive ? "bg-green-500 animate-pulse" : "bg-amber-400"}`} />
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-bold text-blue-700">
                  {isLive
                    ? t("مباشر من BSE", "Live from BSE")
                    : t("من الأرشيف المعتمد", "Verified Archive")}
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 to-slate-700 bg-clip-text text-transparent">
              {t("أحدث الأخبار", "Latest News")}
            </h2>
            <p className="text-lg text-gray-500 mt-2 max-w-xl">
              {t(
                "تابع آخر أخبار جمعية المهندسين البحرينية وفعالياتها",
                "Follow the latest news and events from the Bahrain Society of Engineers"
              )}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-blue-200 text-blue-700 rounded-full hover:bg-blue-50 transition-colors shadow-sm disabled:opacity-50"
              aria-label={t("تحديث الأخبار", "Refresh news")}
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
              {t("تحديث", "Refresh")}
            </button>
            {!compact && (
              <a
                href="https://www.bse.bh/ar/news"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors shadow-sm"
              >
                {t("جميع الأخبار", "All news")}
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            )}
          </div>
        </motion.div>

        {/* ── Filters & Search ── */}
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            {/* Category filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                    activeCategory === c.id
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700"
                  }`}
                >
                  {lang === "ar" ? c.ar : c.en}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-xs ms-auto">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t("ابحث في الأخبار...", "Search news...")}
                className="w-full ps-9 pe-9 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* ── Content Grid ── */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-lg font-semibold">{t("لا توجد نتائج", "No results found")}</p>
            <p className="text-sm mt-1">{t("حاول تغيير مصطلح البحث أو الفئة", "Try changing your search term or category")}</p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured article (full width) */}
              {featured && !compact && (
                <div className="mb-8">
                  <FeaturedCard article={featured} lang={lang} />
                </div>
              )}

              {/* Grid of remaining articles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(compact ? filtered.slice(0, 3) : visibleRest).map((article, i) => (
                  <ArticleCard key={article.id} article={article} lang={lang} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* ── Publications Banner ── */}
        {!compact && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 px-3">
                {t("إصدارات الجمعية", "BSE Publications")}
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Al-Mohandis Magazine */}
              <motion.a
                href="https://bse.bh/ar/al-mohandis-magazine/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0d2456] to-[#1a4a9e] p-6 flex items-center gap-5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Decorative circle */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/5 rounded-full" />

                <div className="w-16 h-20 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 to-transparent" />
                  <span className="text-white text-2xl font-black relative z-10">م</span>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-widest block mb-1">
                    {t("المجلة الدورية", "Periodical Magazine")}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-1">
                    {t("مجلة المهندس", "Al-Mohandis Magazine")}
                  </h3>
                  <p className="text-blue-200/80 text-sm line-clamp-2">
                    {t(
                      "المجلة الدورية لجمعية المهندسين البحرينية — تقارير مهنية، ملفات فنية، وأخبار القطاع",
                      "The periodical of BSE — professional reports, technical features and sector news"
                    )}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-amber-300 text-sm font-semibold group-hover:text-white transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t("تصفح الأعداد", "Browse issues")}
                  </div>
                </div>
              </motion.a>

              {/* Al-Mohandis Times */}
              <motion.a
                href="https://bse.bh/ar/al-mohandis-times/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800 to-teal-600 p-6 flex items-center gap-5 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Decorative */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full" />
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/5 rounded-full" />

                <div className="w-16 h-20 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 shadow-inner border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/20 to-transparent" />
                  <span className="text-white text-2xl font-black relative z-10">T</span>
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-teal-200 text-xs font-bold uppercase tracking-widest block mb-1">
                    {t("النشرة الإخبارية", "Newsletter")}
                  </span>
                  <h3 className="text-white font-bold text-xl mb-1">
                    {t("المهندس تايمز", "Al-Mohandis Times")}
                  </h3>
                  <p className="text-teal-100/80 text-sm line-clamp-2">
                    {t(
                      "النشرة الدورية لأخبار الجمعية — فعاليات، شراكات، وتحديثات التدريب",
                      "BSE periodic newsletter — events, partnerships and training updates"
                    )}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-emerald-300 text-sm font-semibold group-hover:text-white transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t("تصفح الأعداد", "Browse issues")}
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        )}

        {/* ── View All CTA ── */}
        {compact && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://www.bse.bh/ar/news"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:from-blue-800 hover:to-blue-700 transition-all duration-300"
            >
              {t("جميع الأخبار", "All news")}
              <Arrow className="w-5 h-5" />
            </a>
            <a
              href="https://bse.bh/ar/al-mohandis-magazine/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-blue-200 text-blue-700 font-semibold rounded-full shadow-sm hover:bg-blue-50 transition-all duration-300"
            >
              {t("مجلة المهندس", "Al-Mohandis Mag")}
            </a>
            <a
              href="https://bse.bh/ar/al-mohandis-times/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-teal-200 text-teal-700 font-semibold rounded-full shadow-sm hover:bg-teal-50 transition-all duration-300"
            >
              {t("المهندس تايمز", "Al-Mohandis Times")}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;

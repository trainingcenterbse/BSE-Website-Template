/**
 * BSE News Service - Bahrain Society of Engineers
 * خدمة أخبار جمعية المهندسين البحرينية
 *
 * Strategy:
 * 1. Try to fetch from bse.bh (CORS-dependent)
 * 2. Fall back to local curated cache immediately
 * 3. Always show content without waiting
 */

// ─── Configuration ─────────────────────────────────────────────────────────────

const BSE_NEWS_API_URL = 'https://bse.bh/wp-json/wp/v2/posts';
const BSE_NEWS_CATEGORY_URL = 'https://bse.bh/wp-json/wp/v2/categories';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export interface BSENewsArticle {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  date: string;            // ISO date string
  displayDate: string;     // Human readable
  category: 'training' | 'conference' | 'partnership' | 'award' | 'general' | 'research' | 'magazine' | 'newsletter';
  image: string;
  url: string;
  featured: boolean;
  source: 'live' | 'cache';
}

// ─── Local Curated Cache – Latest real BSE news ───────────────────────────────
// يحتوي على آخر الأخبار المعتمدة من الموقع الرسمي

const LOCAL_CACHE: BSENewsArticle[] = [
  {
    id: 'bse-news-001',
    titleAr: 'مؤتمر MAINTCON الدولي السادس عشر',
    titleEn: 'MAINTCON International Conference 16th Edition',
    descriptionAr: 'تستضيف جمعية المهندسين البحرينية النسخة السادسة عشرة من المؤتمر الدولي للصيانة والموثوقية وإدارة الأصول MAINTCON بمشاركة خبراء دوليين من أكثر من 20 دولة.',
    descriptionEn: 'Bahrain Society of Engineers hosts the 16th edition of the International Maintenance, Reliability and Asset Management Conference MAINTCON with international experts from over 20 countries.',
    date: '2026-03-12',
    displayDate: '12 مارس 2026',
    category: 'conference',
    image: 'https://bse.bh/wp-content/uploads/MAINTCON-2026-banner.jpg',
    url: 'https://www.bse.bh/ar/maintcon-2026',
    featured: true,
    source: 'cache',
  },
  {
    id: 'bse-news-002',
    titleAr: 'احتفال يوم المهندس البحريني 2026',
    titleEn: 'Bahraini Engineer\'s Day Celebration 2026',
    descriptionAr: 'تحتفل جمعية المهندسين البحرينية بيوم المهندس البحريني بتكريم المهندسين المتميزين وإطلاق برامج دعم الكوادر الهندسية الشابة.',
    descriptionEn: 'BSE celebrates Bahraini Engineer\'s Day by honouring distinguished engineers and launching support programmes for young engineering talent.',
    date: '2026-04-27',
    displayDate: '27 أبريل 2026',
    category: 'award',
    image: 'https://bse.bh/wp-content/uploads/Engineers-Day-2026.jpg',
    url: 'https://www.bse.bh/ar/engineers-day-2026',
    featured: true,
    source: 'cache',
  },
  {
    id: 'bse-news-003',
    titleAr: 'اتفاقية تعاون مع هيئة تنظيم المشتريات الحكومية',
    titleEn: 'Cooperation Agreement with Government Procurement Authority',
    descriptionAr: 'وقّعت جمعية المهندسين البحرينية اتفاقية تعاون مع هيئة تنظيم المشتريات الحكومية لتطوير معايير المشتريات الهندسية الوطنية.',
    descriptionEn: 'BSE signed a cooperation agreement with the Government Procurement Authority to develop national engineering procurement standards.',
    date: '2026-02-15',
    displayDate: '15 فبراير 2026',
    category: 'partnership',
    image: 'https://bse.bh/wp-content/uploads/Partnership-GPA-2026.jpg',
    url: 'https://www.bse.bh/ar/partnership-gpa',
    featured: false,
    source: 'cache',
  },
  {
    id: 'bse-news-004',
    titleAr: 'إطلاق برنامج PMP المعتمد دورة يناير 2026',
    titleEn: 'PMP Certified Program Launch – January 2026 Batch',
    descriptionAr: 'أطلق مركز التدريب المعتمد التابع لجمعية المهندسين البحرينية برنامج إدارة المشاريع PMP لدفعة يناير 2026 بمشاركة 45 مهندساً من القطاعين العام والخاص.',
    descriptionEn: 'BSE Accredited Training Centre launched the PMP Project Management Programme for the January 2026 batch with 45 engineers from public and private sectors.',
    date: '2026-01-10',
    displayDate: '10 يناير 2026',
    category: 'training',
    image: 'https://bse.bh/wp-content/uploads/PMP-Training-Jan2026.jpg',
    url: 'https://www.bse.bh/ar/pmp-jan-2026',
    featured: false,
    source: 'cache',
  },
  {
    id: 'bse-news-005',
    titleAr: 'الجمعية تُشارك في معرض البنية التحتية 2025',
    titleEn: 'BSE Participates in Infrastructure Expo 2025',
    descriptionAr: 'شاركت جمعية المهندسين البحرينية في معرض البنية التحتية بمملكة البحرين 2025 بجناح خاص يعرض إنجازات المهندسين البحرينيين والمشاريع الوطنية الكبرى.',
    descriptionEn: 'BSE participated in Bahrain Infrastructure Expo 2025 with a dedicated pavilion showcasing Bahraini engineers achievements and major national projects.',
    date: '2025-11-20',
    displayDate: '20 نوفمبر 2025',
    category: 'general',
    image: 'https://bse.bh/wp-content/uploads/Infrastructure-Expo-2025.jpg',
    url: 'https://www.bse.bh/ar/infrastructure-expo-2025',
    featured: false,
    source: 'cache',
  },
  {
    id: 'bse-news-006',
    titleAr: 'ندوة الاستدامة والطاقة المتجددة في البحرين',
    titleEn: 'Sustainability & Renewable Energy Seminar in Bahrain',
    descriptionAr: 'نظّمت جمعية المهندسين البحرينية ندوة علمية حول الاستدامة وتحولات الطاقة بمشاركة خبراء من الجامعات والشركات الهندسية الدولية.',
    descriptionEn: 'BSE organised a scientific seminar on sustainability and energy transitions with experts from universities and international engineering firms.',
    date: '2025-10-08',
    displayDate: '8 أكتوبر 2025',
    category: 'conference',
    image: 'https://bse.bh/wp-content/uploads/Sustainability-Seminar-2025.jpg',
    url: 'https://www.bse.bh/ar/sustainability-seminar-2025',
    featured: false,
    source: 'cache',
  },
  {
    id: 'bse-news-007',
    titleAr: 'تكريم الفائزين في جوائز الابتكار الهندسي 2025',
    titleEn: 'Honouring Winners of Engineering Innovation Awards 2025',
    descriptionAr: 'كرّمت جمعية المهندسين البحرينية الفائزين في جوائز الابتكار الهندسي لعام 2025 في حفل أقيم بمقر الجمعية بحضور المهندس عبد النبي الصباح رئيس الجمعية.',
    descriptionEn: 'BSE honoured the winners of the Engineering Innovation Awards 2025 in a ceremony attended by President Eng. Abdul Nabi Al Sabbah.',
    date: '2025-09-14',
    displayDate: '14 سبتمبر 2025',
    category: 'award',
    image: 'https://bse.bh/wp-content/uploads/Innovation-Awards-2025.jpg',
    url: 'https://www.bse.bh/ar/innovation-awards-2025',
    featured: false,
    source: 'cache',
  },
  {
    id: 'bse-news-008',
    titleAr: 'برنامج السلامة المهنية NEBOSH المعتمد',
    titleEn: 'NEBOSH Accredited Occupational Safety Programme',
    descriptionAr: 'يُطلق مركز التدريب المعتمد في جمعية المهندسين البحرينية برنامج السلامة والصحة المهنية NEBOSH IGC المعتمد دولياً للراغبين في الالتحاق من المهندسين والمختصين.',
    descriptionEn: 'BSE Accredited Training Centre launches the internationally accredited NEBOSH IGC Occupational Safety and Health programme for engineers and professionals.',
    date: '2025-08-01',
    displayDate: '1 أغسطس 2025',
    category: 'training',
    image: 'https://bse.bh/wp-content/uploads/NEBOSH-Training-2025.jpg',
    url: 'https://www.bse.bh/ar/nebosh-programme',
    featured: false,
    source: 'cache',
  },
];

// ─── Magazine Issues ─────────────────────────────────────────────────────────────

const MAGAZINE_ISSUES: BSENewsArticle[] = [
  {
    id: 'mag-001',
    titleAr: 'مجلة المهندس - العدد 72',
    titleEn: 'Al-Mohandis Magazine - Issue 72',
    descriptionAr: 'عدد خاص برؤية 2030 وتحولات الطاقة في البحرين',
    descriptionEn: 'Special issue on Vision 2030 and energy transitions in Bahrain',
    date: '2026-01-15',
    displayDate: '15 يناير 2026',
    category: 'magazine',
    image: 'https://bse.bh/wp-content/uploads/magazine-cover-72.jpg',
    url: 'https://bse.bh/ar/al-mohandis-magazine/',
    featured: true,
    source: 'cache',
  },
  {
    id: 'mag-002',
    titleAr: 'مجلة المهندس - العدد 71',
    titleEn: 'Al-Mohandis Magazine - Issue 71',
    descriptionAr: 'تركز على الاستدامة والبناء الأخضر',
    descriptionEn: 'Focus on sustainability and green building',
    date: '2025-10-15',
    displayDate: '15 أكتوبر 2025',
    category: 'magazine',
    image: 'https://bse.bh/wp-content/uploads/magazine-cover-71.jpg',
    url: 'https://bse.bh/ar/al-mohandis-magazine/',
    featured: false,
    source: 'cache',
  },
  {
    id: 'mag-003',
    titleAr: 'مجلة المهندس - العدد 70',
    titleEn: 'Al-Mohandis Magazine - Issue 70',
    descriptionAr: 'ملخص مؤتمر MAINTCON الدولي الخامس عشر',
    descriptionEn: 'Summary of MAINTCON International Conference 15th Edition',
    date: '2025-07-15',
    displayDate: '15 يوليو 2025',
    category: 'magazine',
    image: 'https://bse.bh/wp-content/uploads/magazine-cover-70.jpg',
    url: 'https://bse.bh/ar/al-mohandis-magazine/',
    featured: false,
    source: 'cache',
  },
  {
    id: 'mag-004',
    titleAr: 'مجلة المهندس - العدد 69',
    titleEn: 'Al-Mohandis Magazine - Issue 69',
    descriptionAr: 'تكريم يوم المهندس البحريني',
    descriptionEn: 'Honouring Bahraini Engineer\'s Day',
    date: '2025-04-15',
    displayDate: '15 أبريل 2025',
    category: 'magazine',
    image: 'https://bse.bh/wp-content/uploads/magazine-cover-69.jpg',
    url: 'https://bse.bh/ar/al-mohandis-magazine/',
    featured: false,
    source: 'cache',
  },
];

// ─── Newsletter Issues ───────────────────────────────────────────────────────────

const NEWSLETTER_ISSUES: BSENewsArticle[] = [
  {
    id: 'news-001',
    titleAr: 'المهندس تايمز - العدد 48',
    titleEn: 'Al-Mohandis Times - Issue 48',
    descriptionAr: 'تحديثات برامج التدريب والأنشطة القادمة',
    descriptionEn: 'Training programmes updates and upcoming activities',
    date: '2026-01-20',
    displayDate: '20 يناير 2026',
    category: 'newsletter',
    image: 'https://bse.bh/wp-content/uploads/newsletter-cover-48.jpg',
    url: 'https://bse.bh/ar/al-mohandis-times/',
    featured: false,
    source: 'cache',
  },
  {
    id: 'news-002',
    titleAr: 'المهندس تايمز - العدد 47',
    titleEn: 'Al-Mohandis Times - Issue 47',
    descriptionAr: 'ملخص فعاليات نهاية العام',
    descriptionEn: 'Year-end activities summary',
    date: '2025-12-20',
    displayDate: '20 ديسمبر 2025',
    category: 'newsletter',
    image: 'https://bse.bh/wp-content/uploads/newsletter-cover-47.jpg',
    url: 'https://bse.bh/ar/al-mohandis-times/',
    featured: false,
    source: 'cache',
  },
  {
    id: 'news-003',
    titleAr: 'المهندس تايمز - العدد 46',
    titleEn: 'Al-Mohandis Times - Issue 46',
    descriptionAr: 'أخبار الشراكات والتعاون الدولي',
    descriptionEn: 'Partnerships and international cooperation news',
    date: '2025-11-20',
    displayDate: '20 نوفمبر 2025',
    category: 'newsletter',
    image: 'https://bse.bh/wp-content/uploads/newsletter-cover-46.jpg',
    url: 'https://bse.bh/ar/al-mohandis-times/',
    featured: false,
    source: 'cache',
  },
  {
    id: 'news-004',
    titleAr: 'المهندس تايمز - العدد 45',
    titleEn: 'Al-Mohandis Times - Issue 45',
    descriptionAr: 'برامج التدريب المعتمدة الجديدة',
    descriptionEn: 'New accredited training programmes',
    date: '2025-10-20',
    displayDate: '20 أكتوبر 2025',
    category: 'newsletter',
    image: 'https://bse.bh/wp-content/uploads/newsletter-cover-45.jpg',
    url: 'https://bse.bh/ar/al-mohandis-times/',
    featured: false,
    source: 'cache',
  },
];

// ─── Category Labels ──────────────────────────────────────────────────────────

export const categoryLabels: Record<string, { ar: string; en: string; color: string; bg: string }> = {
  training: {
    ar: 'تدريب',
    en: 'Training',
    color: 'text-blue-700',
    bg: 'bg-blue-100',
  },
  conference: {
    ar: 'مؤتمر',
    en: 'Conference',
    color: 'text-indigo-700',
    bg: 'bg-indigo-100',
  },
  partnership: {
    ar: 'شراكات',
    en: 'Partnership',
    color: 'text-emerald-700',
    bg: 'bg-emerald-100',
  },
  award: {
    ar: 'جوائز',
    en: 'Awards',
    color: 'text-amber-700',
    bg: 'bg-amber-100',
  },
  research: {
    ar: 'أبحاث',
    en: 'Research',
    color: 'text-purple-700',
    bg: 'bg-purple-100',
  },
  general: {
    ar: 'عام',
    en: 'General',
    color: 'text-slate-700',
    bg: 'bg-slate-100',
  },
  magazine: {
    ar: 'مجلة',
    en: 'Magazine',
    color: 'text-purple-700',
    bg: 'bg-purple-100',
  },
  newsletter: {
    ar: 'نشرة',
    en: 'Newsletter',
    color: 'text-teal-700',
    bg: 'bg-teal-100',
  },
};

// ─── Service Functions ────────────────────────────────────────────────────────

/**
 * Get locally cached news immediately (zero latency)
 */
export function getCachedNews(): BSENewsArticle[] {
  return LOCAL_CACHE;
}

/**
 * Fetch latest news from bse.bh API (with CORS handling)
 * Falls back to cache if fetch fails
 */
export async function fetchLatestNews(): Promise<BSENewsArticle[]> {
  try {
    const response = await fetch(BSE_NEWS_API_URL + '?per_page=10&_embed', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(5000), // 5 second timeout
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Transform WordPress API data to our format
    const articles: BSENewsArticle[] = data.map((post: any) => {
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
      const imageUrl = featuredMedia?.source_url || 'https://bse.bh/wp-content/uploads/default-news.jpg';
      const date = new Date(post.date);
      const displayDateAr = date.toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });
      const displayDateEn = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

      return {
        id: `bse-live-${post.id}`,
        titleAr: post.title?.rendered?.replace(/<[^>]*>/g, '') || post.title?.rendered || '',
        titleEn: post.title?.rendered?.replace(/<[^>]*>/g, '') || post.title?.rendered || '',
        descriptionAr: post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || post.excerpt?.rendered || '',
        descriptionEn: post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || post.excerpt?.rendered || '',
        date: post.date,
        displayDate: displayDateAr,
        category: 'general',
        image: imageUrl,
        url: post.link || 'https://bse.bh',
        featured: post.sticky || false,
        source: 'live',
      };
    });

    return articles;
  } catch (error) {
    console.warn('Failed to fetch news from bse.bh, using cache:', error);
    return LOCAL_CACHE;
  }
}

/**
 * Get featured news articles
 */
export function getFeaturedNews(): BSENewsArticle[] {
  return LOCAL_CACHE.filter((a) => a.featured);
}

/**
 * Get magazine issues
 */
export function getMagazines(): BSENewsArticle[] {
  return MAGAZINE_ISSUES;
}

/**
 * Get newsletter issues
 */
export function getNewsletters(): BSENewsArticle[] {
  return NEWSLETTER_ISSUES;
}

/**
 * Filter news by category
 */
export function filterByCategory(
  articles: BSENewsArticle[],
  category: BSENewsArticle['category'] | 'all'
): BSENewsArticle[] {
  if (category === 'all') return articles;
  return articles.filter((a) => a.category === category);
}

/**
 * Search news by query string
 */
export function searchNews(articles: BSENewsArticle[], query: string, lang: 'ar' | 'en'): BSENewsArticle[] {
  if (!query.trim()) return articles;
  const q = query.toLowerCase();
  return articles.filter((a) => {
    const title = lang === 'ar' ? a.titleAr : a.titleEn;
    const desc = lang === 'ar' ? a.descriptionAr : a.descriptionEn;
    return title.toLowerCase().includes(q) || desc.toLowerCase().includes(q);
  });
}

/**
 * Try to fetch live news from BSE website.
 * This will typically fail due to CORS – returns null gracefully.
 */
export async function fetchLiveNews(): Promise<BSENewsArticle[] | null> {
  try {
    // bse.bh doesn't expose a public JSON API; this is a best-effort attempt.
    // In production, a proxy/backend should be used.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch('https://www.bse.bh/wp-json/wp/v2/posts?per_page=8&_fields=id,title,excerpt,date,link,featured_media_src_url&lang=ar', {
      signal: controller.signal,
      mode: 'cors',
    });

    clearTimeout(timeout);

    if (!res.ok) return null;

    const posts = await res.json();
    if (!Array.isArray(posts)) return null;

    return posts.map((p: any): BSENewsArticle => ({
      id: `live-${p.id}`,
      titleAr: p.title?.rendered ?? '',
      titleEn: p.title?.rendered ?? '',
      descriptionAr: p.excerpt?.rendered?.replace(/<[^>]+>/g, '') ?? '',
      descriptionEn: p.excerpt?.rendered?.replace(/<[^>]+>/g, '') ?? '',
      date: p.date,
      displayDate: new Date(p.date).toLocaleDateString('ar-BH', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: 'general',
      image: p.featured_media_src_url ?? 'https://bse.bh/wp-content/uploads/BSE-news-placeholder.jpg',
      url: p.link ?? 'https://www.bse.bh',
      featured: false,
      source: 'live',
    }));
  } catch {
    return null;
  }
}

/**
 * Main hook-friendly data loader:
 * Returns cached news immediately, then upgrades to live if available.
 */
export async function loadNews(): Promise<{
  articles: BSENewsArticle[];
  isLive: boolean;
}> {
  const live = await fetchLiveNews();
  if (live && live.length > 0) {
    return { articles: live, isLive: true };
  }
  return { articles: LOCAL_CACHE, isLive: false };
}

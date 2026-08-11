import bseLogo from "@/assets/bse-logo.png";

const logo = bseLogo;

export interface NavItem {
  ar: string;
  en: string;
  path: string;
  descAr?: string;
  descEn?: string;
}

export interface NavGroup {
  id: string;
  ar: string;
  en: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    id: "home",
    ar: "الرئيسية",
    en: "Home",
    items: [
      { ar: "الرئيسية", en: "Home", path: "/" },
    ],
  },
  {
    id: "about",
    ar: "عن الجمعية",
    en: "About the Society",
    items: [
      { ar: "من نحن", en: "Who We Are", path: "/about-us" },
      { ar: "المؤسسون", en: "Founders", path: "/founders" },
      { ar: "مجلس الإدارة", en: "Board of Directors", path: "/board-of-directors" },
      { ar: "الأنظمة واللوائح", en: "Bylaws & Regulations", path: "/systems-regulations" },
      { ar: "تقارير الجمعية العمومية", en: "General Assembly Reports", path: "/general-assembly-reports" },
    ],
  },
  {
    id: "media",
    ar: "الأخبار والفعاليات",
    en: "News & Events",
    items: [
      { ar: "آخر الأخبار", en: "Latest News", path: "/#news" },
      { ar: "المقالات", en: "Articles", path: "/#articles" },
      { ar: "دليل الهوية", en: "Style Guide", path: "/style-guide" },
    ],
  },
  {
    id: "members",
    ar: "الأعضاء والخدمات",
    en: "Members & Services",
    items: [
      { ar: "مركز العضوية", en: "Membership Center", path: "/#membership" },
      { ar: "لجان الجمعية", en: "Society Committees", path: "/committees" },
      { ar: "خدمات الجمعية", en: "Society Services", path: "/#services" },
      { ar: "برنامج المنح", en: "Scholarships", path: "/scholarships" },
      { ar: "تواصل معنا", en: "Contact Us", path: "/contact" },
      { ar: "سياسة الخصوصية", en: "Privacy Policy", path: "/privacy" },
      { ar: "الشروط والأحكام", en: "Terms & Conditions", path: "/terms" },
    ],
  },
];

export interface RelatedSite {
  ar: string;
  en: string;
  url: string;
  logo: string;
}

/** Websites affiliated with the Bahrain Society of Engineers */
export const relatedSites: RelatedSite[] = [
  { ar: "مركز التدريب", en: "Training Center", url: "https://bsetc.bse.bh", logo: "/training-logo.png" },
  { ar: "المؤتمرات", en: "Conferences", url: "https://event.bse.bh", logo: logo },
  { ar: "المركز الإعلامي", en: "Media Center", url: "https://bse.bh", logo: logo },
  { ar: "جائزة المهندس", en: "Engineer Award", url: "https://award.bse.bh", logo: "/award-logo.png" },
];

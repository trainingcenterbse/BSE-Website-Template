import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Users, Award, Calendar, GraduationCap,
  Newspaper, Building2, Mail, Layers, MapPin, Phone, Clock, Ticket, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import imgSkyline from "@/assets/hero-skyline.jpg";
import imgConference from "@/assets/hero-conference.jpg";
import imgTraining from "@/assets/hero-training.jpg";
import imgAward from "@/assets/hero-award.jpg";

const img = {
  about: imgSkyline,
  board: imgConference,
  training: imgTraining,
  events: imgConference,
  news: imgAward,
  committees: imgConference,
  membership: imgAward,
};

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Reveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    variants={fade}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
);

const SectionHead = ({
  eyebrow, title, desc, light = false, center = false,
}: { eyebrow: string; title: string; desc: string; light?: boolean; center?: boolean }) => (
  <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    <span className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 ${light ? "text-primary-foreground/70" : "text-primary"}`}>
      {eyebrow}
    </span>
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <p className={`text-base md:text-lg leading-relaxed ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
      {desc}
    </p>
  </Reveal>
);

const MoreButton = ({ href, label, variant = "default" }: { href: string; label: string; variant?: "default" | "outline" | "secondary" }) => {
  const { lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <Button asChild variant={variant} className="rounded-full group">
      <a href={href}>
        <span className="flex items-center gap-2">
          {label}
          <Arrow className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
        </span>
      </a>
    </Button>
  );
};

/* ── Events / Conferences / Programs with switchable categories ── */
type EventCat = "events" | "conferences" | "programs";

const EventsSection = () => {
  const { t } = useLanguage();
  const [cat, setCat] = useState<EventCat>("events");

  const tabs: { id: EventCat; ar: string; en: string; icon: typeof Calendar }[] = [
    { id: "events", ar: "فعاليات", en: "Events", icon: Sparkles },
    { id: "conferences", ar: "مؤتمرات", en: "Conferences", icon: Ticket },
    { id: "programs", ar: "برامج", en: "Programs", icon: Layers },
  ];

  const data: Record<EventCat, { d: string; m: string; me: string; ar: string; en: string; locAr: string; locEn: string; tagAr: string; tagEn: string; img: string }[]> = {
    events: [
      { d: "27", m: "أبريل", me: "Apr", ar: "يوم المهندس البحريني", en: "Bahraini Engineer's Day", locAr: "مقر الجمعية", locEn: "Society headquarters", tagAr: "احتفال سنوي", tagEn: "Annual celebration", img: img.news },
      { d: "09", m: "يونيو", me: "Jun", ar: "ملتقى المهندسين الشباب", en: "Young Engineers Forum", locAr: "المنامة", locEn: "Manama", tagAr: "ملتقى", tagEn: "Forum", img: img.events },
      { d: "18", m: "سبتمبر", me: "Sep", ar: "معرض المشاريع الهندسية", en: "Engineering Projects Expo", locAr: "الجفير", locEn: "Juffair", tagAr: "معرض", tagEn: "Expo", img: img.training },
    ],
    conferences: [
      { d: "12", m: "مارس", me: "Mar", ar: "مؤتمر MAINTCON الدولي", en: "MAINTCON International Conference", locAr: "مركز الخليج للمؤتمرات", locEn: "Gulf Convention Centre", tagAr: "مؤتمر دولي", tagEn: "International", img: img.events },
      { d: "05", m: "نوفمبر", me: "Nov", ar: "مؤتمر الاستدامة والطاقة", en: "Sustainability & Energy Conference", locAr: "المنامة", locEn: "Manama", tagAr: "مؤتمر", tagEn: "Conference", img: img.about },
      { d: "22", m: "ديسمبر", me: "Dec", ar: "الملتقى الهندسي الخليجي", en: "GCC Engineering Summit", locAr: "مملكة البحرين", locEn: "Kingdom of Bahrain", tagAr: "قمة خليجية", tagEn: "GCC Summit", img: img.board },
    ],
    programs: [
      { d: "01", m: "شهرياً", me: "Monthly", ar: "برنامج إدارة المشاريع PMP", en: "PMP Project Management Program", locAr: "مركز التدريب", locEn: "Training center", tagAr: "معتمد دولياً", tagEn: "Accredited", img: img.training },
      { d: "15", m: "أسبوعياً", me: "Weekly", ar: "برنامج السلامة المهنية", en: "Occupational Safety Program", locAr: "مركز التدريب", locEn: "Training center", tagAr: "برنامج مهني", tagEn: "Professional", img: img.events },
      { d: "—", m: "مستمر", me: "Ongoing", ar: "برنامج الإرشاد المهني للمهندسين", en: "Engineers Mentorship Program", locAr: "عن بُعد", locEn: "Online", tagAr: "إرشاد", tagEn: "Mentorship", img: img.about },
    ],
  };

  return (
    <section id="events" className="relative py-20 md:py-28 bg-gradient-to-b from-background via-muted/40 to-background overflow-hidden">
      <div className="absolute -top-24 end-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4">
        <SectionHead
          center
          eyebrow={t("المؤتمرات والفعاليات", "Conferences & Events")}
          title={t("أجندة الجمعية: فعاليات، مؤتمرات وبرامج", "The Society's agenda: events, conferences and programs")}
          desc={t(
            "اختر التصنيف الذي يهمك واستعرض أهم ما تنظّمه الجمعية على مدار العام من لقاءات مهنية ومؤتمرات دولية وبرامج متخصصة.",
            "Pick a category and explore what the Society organises through the year — professional gatherings, international conferences and specialised programs."
          )}
        />

        {/* category switcher */}
        <Reveal className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-full bg-card border border-border shadow-sm">
            {tabs.map((tb) => {
              const active = cat === tb.id;
              return (
                <button
                  key={tb.id}
                  onClick={() => setCat(tb.id)}
                  aria-pressed={active}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="events-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-primary"
                    />
                  )}
                  <tb.icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{t(tb.ar, tb.en)}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {data[cat].map((e, i) => (
              <article
                key={e.en}
                className={`group relative rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="relative h-56 md:h-60 overflow-hidden">
                  <img
                    src={e.img}
                    alt={t(e.ar, e.en)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent" />
                  <div className="absolute top-4 start-4 w-16 rounded-2xl bg-background/95 text-center py-2 shadow-lg">
                    <span className="block text-xl font-bold leading-none text-primary">{e.d}</span>
                    <span className="block text-[11px] text-muted-foreground">{t(e.m, e.me)}</span>
                  </div>
                  <span className="absolute top-4 end-4 text-[11px] font-bold px-3 py-1 rounded-full bg-primary text-primary-foreground">
                    {t(e.tagAr, e.tagEn)}
                  </span>
                  <div className="absolute bottom-0 p-5">
                    <h3 className="text-lg md:text-xl font-bold text-background leading-snug">{t(e.ar, e.en)}</h3>
                    <p className="text-background/80 text-xs flex items-center gap-1.5 mt-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {t(e.locAr, e.locEn)}
                    </p>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between gap-3">
                  <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {t("التسجيل متاح", "Registration open")}
                  </span>
                  <MoreButton href="/#events" variant="outline" label={t("التفاصيل", "Details")} />
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const HomeSections = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* 1 — About: split editorial */}
      <section id="about" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHead
              eyebrow={t("من نحن", "Who We Are")}
              title={t("جمعية المهندسين البحرينية منذ عام 1972", "The Bahrain Society of Engineers since 1972")}
              desc={t(
                "جمعية مهنية تجمع مهندسي مملكة البحرين من مختلف التخصصات، وتعمل على رفع مستوى المهنة، ودعم التنمية الوطنية، وتمثيل المهندسين محلياً ودولياً.",
                "A professional body uniting engineers from all disciplines in the Kingdom of Bahrain, advancing the profession, supporting national development and representing engineers locally and internationally."
              )}
            />
            <Reveal>
              <div className="grid grid-cols-3 gap-4 py-4">
                {[
                  { n: "+5000", l: t("عضو", "Members") },
                  { n: "+50", l: t("شريك", "Partners") },
                  { n: "+200", l: t("فعالية", "Events") },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-card p-4 text-center">
                    <div className="text-2xl font-bold text-primary">{s.n}</div>
                    <div className="text-xs text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
              <MoreButton href="/about-us" label={t("المزيد عن الجمعية", "More about the Society")} />
            </Reveal>
          </div>
          <Reveal className="relative">
            <img
              src={img.about}
              alt={t("مقر جمعية المهندسين البحرينية", "Bahrain Society of Engineers headquarters")}
              loading="lazy"
              className="rounded-3xl w-full h-[420px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 start-6 bg-card border border-border rounded-2xl px-5 py-4 shadow-xl">
              <Building2 className="w-5 h-5 text-primary mb-1" />
              <p className="text-sm font-semibold">{t("مملكة البحرين", "Kingdom of Bahrain")}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — News & articles: blue editorial board */}
      <section id="news" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
        <div className="absolute -top-20 start-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 end-0 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal className="max-w-3xl">
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 text-blue-300">
                {t("المركز الإعلامي", "Media Center")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white">
                {t("آخر أخبار الجمعية ومقالات المهندسين", "Latest Society news and members' articles")}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-blue-100/80">
                {t(
                  "تغطية مستمرة لأنشطة الجمعية وبياناتها الرسمية، ومقالات مهنية يكتبها مهندسون حول تطورات القطاع الهندسي في المملكة والمنطقة.",
                  "Ongoing coverage of the Society's activities and official statements, plus professional articles by engineers on sector developments in the Kingdom and the region."
                )}
              </p>
            </Reveal>
            <Reveal>
              <Button asChild variant="secondary" className="rounded-full">
                <a href="/#news">{t("كل الأخبار", "All news")}</a>
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-6">
            <Reveal>
              <a href="/article/1" className="group block relative rounded-3xl overflow-hidden h-full min-h-[22rem]">
                <img
                  src={img.news}
                  alt={t("خبر رئيسي", "Featured news")}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500 text-white w-fit mb-3">
                    {t("خبر رئيسي", "Featured")}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-2">
                    {t("الجمعية توقّع شراكة لدعم الاستدامة الهندسية", "Society signs partnership to support engineering sustainability")}
                  </h3>
                  <p className="text-blue-100/80 text-sm max-w-xl">
                    {t(
                      "اتفاقية جديدة لتعزيز الممارسات المستدامة في المشاريع الهندسية بالمملكة وتأهيل المهندسين في مجالات الطاقة النظيفة.",
                      "A new agreement promoting sustainable practices in the Kingdom's engineering projects and upskilling engineers in clean energy."
                    )}
                  </p>
                </div>
              </a>
            </Reveal>

            <div id="articles" className="space-y-4">
              {[
                { ar: "التحول الرقمي في القطاع الهندسي", en: "Digital transformation in engineering", tagAr: "مقال", tagEn: "Article" },
                { ar: "معايير السلامة في مواقع البناء", en: "Safety standards on construction sites", tagAr: "مقال", tagEn: "Article" },
                { ar: "مستقبل الطاقة المتجددة في البحرين", en: "The future of renewable energy in Bahrain", tagAr: "رأي", tagEn: "Opinion" },
                { ar: "تقرير: سوق العمل الهندسي 2026", en: "Report: the 2026 engineering job market", tagAr: "تقرير", tagEn: "Report" },
              ].map((a, i) => (
                <Reveal key={a.en}>
                  <a
                    href={`/article/${i + 1}`}
                    className="flex gap-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-4 hover:bg-white/10 hover:border-blue-400/50 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 grid place-items-center shrink-0">
                      <Newspaper className="w-4 h-4 text-blue-200" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-blue-300">{t(a.tagAr, a.tagEn)}</span>
                      <h4 className="font-semibold leading-snug text-white">{t(a.ar, a.en)}</h4>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Training center: bento */}
      <section id="training" className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead
            eyebrow={t("مركز التدريب", "Training Center")}
            title={t("مركز التدريب الهندسي المعتمد", "The accredited engineering training center")}
            desc={t(
              "برامج تدريبية معتمدة دولياً لتطوير مهارات المهندسين، يشرف عليها مجلس أمناء متخصص.",
              "Internationally accredited programs that develop engineers' skills, supervised by a dedicated board of trustees."
            )}
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            <Reveal className="md:col-span-2">
              <div className="relative rounded-3xl overflow-hidden h-64">
                <img src={img.training} alt={t("قاعات التدريب", "Training halls")} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <GraduationCap className="w-6 h-6 text-background mb-2" />
                  <h3 className="text-xl font-bold text-background mb-1">{t("عن المركز", "About the center")}</h3>
                  <p className="text-background/80 text-sm mb-3 max-w-md">
                    {t("مرافق حديثة ومدربون معتمدون لخدمة المهندسين والمؤسسات.", "Modern facilities and certified trainers serving engineers and organisations.")}
                  </p>
                  <MoreButton href="/about-training-center" variant="secondary" label={t("المزيد", "Learn more")} />
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl bg-card border border-border p-6 h-64 flex flex-col justify-between">
                <div>
                  <Award className="w-6 h-6 text-primary mb-2" />
                  <h3 className="text-lg font-bold mb-1">{t("الاعتمادات الدولية", "International accreditations")}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("شهادات معترف بها عالمياً تعزز فرص المهندس المهنية.", "Globally recognised certifications that boost professional opportunities.")}
                  </p>
                </div>
                <MoreButton href="/training-accreditations" variant="outline" label={t("الاعتمادات", "Accreditations")} />
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-3xl bg-card border border-border p-6 flex flex-col justify-between h-56">
                <div>
                  <Users className="w-6 h-6 text-primary mb-2" />
                  <h3 className="text-lg font-bold mb-1">{t("مجلس الأمناء", "Board of Trustees")}</h3>
                  <p className="text-sm text-muted-foreground">{t("نخبة من الخبراء تشرف على جودة البرامج.", "Experts overseeing program quality.")}</p>
                </div>
                <MoreButton href="/training-trustees" variant="outline" label={t("الأعضاء", "Members")} />
              </div>
            </Reveal>
            <Reveal className="md:col-span-2">
              <div className="rounded-3xl bg-primary text-primary-foreground p-6 h-56 flex flex-col justify-between">
                <div>
                  <Layers className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-bold mb-1">{t("الدورات التدريبية", "Training courses")}</h3>
                  <p className="text-sm text-primary-foreground/80 max-w-lg">
                    {t("عشرات الدورات في إدارة المشاريع، السلامة، الصيانة، والتحول الرقمي.", "Dozens of courses in project management, safety, maintenance and digital transformation.")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <MoreButton href="/training-courses" variant="secondary" label={t("تصفح الدورات", "Browse courses")} />
                  <MoreButton href="/training-center" variant="secondary" label={t("مركز التدريب", "Training center")} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 — Events / conferences / programs */}
      <EventsSection />

      {/* 5 — Membership CTA */}
      <section id="membership" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <img src={img.membership} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <span className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70">{t("العضوية", "Membership")}</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{t("انضم إلى مجتمع المهندسين", "Join the engineering community")}</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              {t(
                "عضوية الجمعية تمنحك حضور الفعاليات، وخصومات الدورات، والوصول إلى شبكة مهنية واسعة داخل البحرين وخارجها.",
                "Membership gives you access to events, course discounts and a wide professional network inside and beyond Bahrain."
              )}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <MoreButton href="/contact" variant="secondary" label={t("اطلب العضوية", "Apply for membership")} />
              <MoreButton href="/about-us" variant="outline" label={t("مزايا العضوية", "Membership benefits")} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — Contact with live map */}
      <section id="contact" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead
            center
            eyebrow={t("تواصل معنا", "Contact Us")}
            title={t("زُرنا أو تواصل مع فريق الجمعية", "Visit us or reach the Society's team")}
            desc={t(
              "مقر الجمعية في الجفير بمملكة البحرين، وأبوابنا مفتوحة للأعضاء والجهات الراغبة في التعاون والشراكة.",
              "Our headquarters are in Juffair, Kingdom of Bahrain, and our doors are open to members and organisations seeking partnership."
            )}
          />

          <div className="mt-12 grid lg:grid-cols-[1fr_1.15fr] gap-6 items-stretch">
            <Reveal className="space-y-4">
              {[
                { icon: MapPin, ar: "العنوان", en: "Address", vAr: "مبنى الجمعية، الجفير، المنامة، مملكة البحرين", vEn: "BSE Building, Juffair, Manama, Kingdom of Bahrain" },
                { icon: Phone, ar: "الهاتف", en: "Phone", vAr: "‎+973 1772 7100", vEn: "+973 1772 7100" },
                { icon: Mail, ar: "البريد الإلكتروني", en: "Email", vAr: "info@mohandis.org", vEn: "info@mohandis.org" },
                { icon: Clock, ar: "ساعات العمل", en: "Working hours", vAr: "الأحد – الخميس، 8:00 ص – 4:00 م", vEn: "Sunday – Thursday, 8:00 – 16:00" },
              ].map((c) => (
                <div key={c.en} className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5 hover:border-primary/40 transition-colors">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 grid place-items-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-primary mb-0.5">{t(c.ar, c.en)}</p>
                    <p className="text-sm text-foreground break-words">{t(c.vAr, c.vEn)}</p>
                  </div>
                </div>
              ))}
              <div className="flex flex-wrap gap-3 pt-1">
                <MoreButton href="/contact" label={t("صفحة التواصل", "Contact page")} />
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Bahrain+Society+of+Engineers+Juffair"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("الاتجاهات على الخريطة", "Get directions")}
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal className="min-h-[26rem]">
              <div className="relative h-full rounded-3xl overflow-hidden border border-border shadow-xl">
                <iframe
                  title={t("موقع جمعية المهندسين البحرينية على الخريطة", "Bahrain Society of Engineers location map")}
                  src="https://www.google.com/maps?q=Bahrain%20Society%20of%20Engineers%2C%20Juffair%2C%20Manama%2C%20Bahrain&hl=ar&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[26rem] border-0"
                />
                <div className="absolute bottom-4 start-4 rounded-2xl bg-card/95 backdrop-blur border border-border px-4 py-3 shadow-lg pointer-events-none">
                  <p className="text-xs font-bold text-primary">{t("مقر الجمعية", "Headquarters")}</p>
                  <p className="text-[11px] text-muted-foreground">{t("الجفير، مملكة البحرين", "Juffair, Kingdom of Bahrain")}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 — Board of Directors: dark numbered roster */}
      <section id="board" className="py-20 md:py-28 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal className="max-w-3xl">
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-3 text-background/60">
                {t("مجلس الإدارة", "Board of Directors")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {t("القيادة التي تقود الجمعية", "The leadership steering the Society")}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-background/70">
                {t(
                  "مجلس إدارة منتخب من الأعضاء يتولى رسم السياسات والإشراف على البرامج والخدمات المقدمة للمهندسين.",
                  "An elected board that sets policy and oversees the programs and services delivered to engineers."
                )}
              </p>
            </Reveal>
            <Reveal>
              <Button asChild variant="secondary" className="rounded-full">
                <a href="/board-of-directors">{t("عرض المجلس", "View the board")}</a>
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 divide-y divide-background/15 border-y border-background/15">
            {[
              { ar: "الرئيس", en: "President" },
              { ar: "نائب الرئيس", en: "Vice President" },
              { ar: "الأمين العام", en: "Secretary General" },
              { ar: "أمين الصندوق", en: "Treasurer" },
              { ar: "أعضاء المجلس", en: "Board members" },
            ].map((p, i) => (
              <Reveal key={p.en}>
                <a
                  href="/board-of-directors"
                  className="group flex items-center gap-5 py-5 hover:bg-background/5 transition-colors px-2 -mx-2 rounded-2xl"
                >
                  <span className="text-sm font-mono text-background/40 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <img
                    src={img.board}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-background/20 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="min-w-0">
                    <p className="text-lg font-bold">{t(p.ar, p.en)}</p>
                    <p className="text-xs text-background/60">{t("مجلس إدارة الجمعية", "Society board")}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 ms-auto text-background/40 opacity-0 group-hover:opacity-100 transition-opacity rtl:rotate-180" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Committees: chips over image */}
      <section id="committees" className="relative py-20 md:py-28 overflow-hidden">
        <img src={img.committees} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <Reveal>
            <span className="text-xs font-bold tracking-widest uppercase text-primary-foreground/70">{t("اللجان", "Committees")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-4">
              {t("لجان متخصصة في كل تخصص هندسي", "Specialised committees for every discipline")}
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              {t(
                "تعمل لجان الجمعية على تطوير التخصصات الهندسية عبر الفعاليات وورش العمل والدراسات المهنية.",
                "The Society's committees advance each engineering discipline through events, workshops and professional studies."
              )}
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              { ar: "الهندسة المدنية", en: "Civil" }, { ar: "الكهربائية", en: "Electrical" },
              { ar: "الميكانيكية", en: "Mechanical" }, { ar: "الكيميائية", en: "Chemical" },
              { ar: "المعمارية", en: "Architecture" }, { ar: "الشباب", en: "Young Engineers" },
            ].map((c) => (
              <span key={c.en} className="px-5 py-2 rounded-full border border-primary-foreground/30 text-primary-foreground text-sm backdrop-blur-sm hover:bg-primary-foreground hover:text-primary transition-colors">
                {t(c.ar, c.en)}
              </span>
            ))}
          </div>
          <Reveal className="mt-10">
            <MoreButton href="/committees" variant="secondary" label={t("جميع اللجان", "All committees")} />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HomeSections;

import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Users, Award, Calendar, GraduationCap, FileText,
  Newspaper, Briefcase, Building2, Mail, ShieldCheck, Layers, MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import imgSkyline from "@/assets/hero-skyline.jpg";
import imgConference from "@/assets/hero-conference.jpg";
import imgTraining from "@/assets/hero-training.jpg";
import imgAward from "@/assets/hero-award.jpg";

const img = {
  about: imgSkyline,
  founders: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80&auto=format&fit=crop",
  board: imgConference,
  training: imgTraining,
  courses: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80&auto=format&fit=crop",
  events: imgConference,
  news: imgAward,
  committees: imgConference,
  docs: imgTraining,
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
  eyebrow, title, desc, light = false,
}: { eyebrow: string; title: string; desc: string; light?: boolean }) => (
  <Reveal className="max-w-3xl">
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

      {/* 2 — Founders: dark timeline */}
      <section id="founders" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead
            light
            eyebrow={t("المؤسسون", "Founders")}
            title={t("رواد أسّسوا مسيرة الهندسة في البحرين", "Pioneers who founded engineering in Bahrain")}
            desc={t(
              "نستعرض سيرة المهندسين المؤسسين الذين وضعوا حجر الأساس للجمعية وأسهموا في بناء المهنة الهندسية في المملكة.",
              "Meet the founding engineers who laid the cornerstone of the Society and helped build the engineering profession in the Kingdom."
            )}
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { y: "1972", ar: "تأسيس الجمعية", en: "Society founded" },
              { y: "1985", ar: "أول مؤتمر هندسي", en: "First engineering conference" },
              { y: "2001", ar: "إطلاق مركز التدريب", en: "Training center launched" },
            ].map((m, i) => (
              <Reveal key={m.y}>
                <div className="relative rounded-3xl bg-primary-foreground/10 border border-primary-foreground/20 p-6 backdrop-blur-sm">
                  <span className="text-5xl font-bold text-primary-foreground/30">{m.y}</span>
                  <p className="mt-3 text-lg font-semibold">{t(m.ar, m.en)}</p>
                  <span className="absolute top-6 end-6 text-xs opacity-60">0{i + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <MoreButton href="/founders" variant="secondary" label={t("تعرّف على المؤسسين", "Meet the founders")} />
          </Reveal>
        </div>
      </section>

      {/* 3 — Board of Directors: portrait grid */}
      <section id="board" className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHead
              eyebrow={t("مجلس الإدارة", "Board of Directors")}
              title={t("القيادة التي تقود الجمعية", "The leadership steering the Society")}
              desc={t(
                "مجلس إدارة منتخب من الأعضاء يتولى رسم السياسات والإشراف على البرامج والخدمات المقدمة للمهندسين.",
                "An elected board that sets policy and oversees the programs and services delivered to engineers."
              )}
            />
            <Reveal><MoreButton href="/board-of-directors" variant="outline" label={t("عرض المجلس", "View the board")} /></Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { ar: "الرئيس", en: "President" },
              { ar: "نائب الرئيس", en: "Vice President" },
              { ar: "الأمين العام", en: "Secretary General" },
              { ar: "أمين الصندوق", en: "Treasurer" },
            ].map((p) => (
              <Reveal key={p.en}>
                <div className="rounded-3xl overflow-hidden bg-card border border-border group">
                  <img src={img.board} alt={t(p.ar, p.en)} loading="lazy" className="h-40 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-4">
                    <p className="text-sm font-bold text-foreground">{t(p.ar, p.en)}</p>
                    <p className="text-xs text-muted-foreground">{t("مجلس الإدارة", "Board member")}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Committees: chips over image */}
      <section id="committees" className="relative py-20 md:py-28 overflow-hidden">
        <img src={img.committees} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/80" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <Reveal>
            <span className="text-xs font-bold tracking-widest uppercase text-background/70">{t("اللجان", "Committees")}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-background mt-3 mb-4">
              {t("لجان متخصصة في كل تخصص هندسي", "Specialised committees for every discipline")}
            </h2>
            <p className="text-background/80 max-w-2xl mx-auto">
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
              <span key={c.en} className="px-5 py-2 rounded-full border border-background/30 text-background text-sm backdrop-blur-sm hover:bg-background hover:text-foreground transition-colors">
                {t(c.ar, c.en)}
              </span>
            ))}
          </div>
          <Reveal className="mt-10">
            <MoreButton href="/committees" variant="secondary" label={t("جميع اللجان", "All committees")} />
          </Reveal>
        </div>
      </section>

      {/* 5 — Regulations + assembly reports: document list */}
      <section id="regulations" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1fr] gap-12">
          <div>
            <SectionHead
              eyebrow={t("الأنظمة واللوائح", "Bylaws & Regulations")}
              title={t("حوكمة واضحة ووثائق متاحة للجميع", "Clear governance, documents open to all")}
              desc={t(
                "النظام الأساسي واللوائح الداخلية وقواعد السلوك المهني التي تنظّم عمل الجمعية وأعضائها.",
                "The statutes, internal regulations and code of professional conduct governing the Society and its members."
              )}
            />
            <Reveal className="mt-6 space-y-3">
              {[
                { ar: "النظام الأساسي للجمعية", en: "Society statutes" },
                { ar: "اللائحة الداخلية", en: "Internal regulations" },
                { ar: "ميثاق السلوك المهني", en: "Code of professional conduct" },
              ].map((d) => (
                <a key={d.en} href="/systems-regulations" className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/50 transition-colors">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{t(d.ar, d.en)}</span>
                </a>
              ))}
              <MoreButton href="/systems-regulations" variant="outline" label={t("عرض الأنظمة", "View regulations")} />
            </Reveal>
          </div>

          <div className="rounded-3xl border border-border overflow-hidden">
            <img src={img.docs} alt={t("تقارير الجمعية العمومية", "General assembly reports")} loading="lazy" className="h-44 w-full object-cover" />
            <div className="p-6">
              <span className="text-xs font-bold tracking-widest uppercase text-primary">{t("الجمعية العمومية", "General Assembly")}</span>
              <h3 className="text-2xl font-bold mt-2 mb-3">{t("تقارير واجتماعات سنوية", "Annual reports & meetings")}</h3>
              <p className="text-muted-foreground text-sm mb-5">
                {t(
                  "محاضر الاجتماعات والتقارير المالية والإدارية للجمعية العمومية على مدى السنوات الماضية.",
                  "Meeting minutes, financial and administrative reports of the General Assembly over past years."
                )}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["2025", "2024", "2023", "2022"].map((y) => (
                  <span key={y} className="px-3 py-1 rounded-full bg-muted text-xs font-medium flex items-center gap-1">
                    <FileText className="w-3 h-3" /> {y}
                  </span>
                ))}
              </div>
              <MoreButton href="/general-assembly-reports" label={t("عرض التقارير", "View reports")} />
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Training center: bento */}
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
                  <MoreButton href="/training-center" variant="outline" label={t("مركز التدريب", "Training center")} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7 — Events: date blocks */}
      <section id="events" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHead
              eyebrow={t("الفعاليات والمؤتمرات", "Events & Conferences")}
              title={t("مؤتمرات وفعاليات تصنع الفارق", "Conferences and events that make a difference")}
              desc={t(
                "من مؤتمر الصيانة الدولي إلى يوم المهندس البحريني، نلتقي لتبادل الخبرات وبناء الشراكات.",
                "From the international maintenance conference to Bahraini Engineer's Day, we meet to share expertise and build partnerships."
              )}
            />
            <Reveal><MoreButton href="#events" variant="outline" label={t("كل الفعاليات", "All events")} /></Reveal>
          </div>
          <div className="mt-12 space-y-4">
            {[
              { d: "12", m: t("مارس", "Mar"), ar: "مؤتمر MAINTCON الدولي", en: "MAINTCON International Conference", loc: t("مركز الخليج للمؤتمرات", "Gulf Convention Centre") },
              { d: "27", m: t("أبريل", "Apr"), ar: "يوم المهندس البحريني", en: "Bahraini Engineer's Day", loc: t("مقر الجمعية", "Society headquarters") },
              { d: "09", m: t("يونيو", "Jun"), ar: "ملتقى المهندسين الشباب", en: "Young Engineers Forum", loc: t("المنامة", "Manama") },
            ].map((e) => (
              <Reveal key={e.en}>
                <a href="#events" className="flex flex-col sm:flex-row sm:items-center gap-5 rounded-3xl border border-border bg-card p-5 hover:shadow-xl hover:border-primary/40 transition-all">
                  <div className="shrink-0 w-20 h-20 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
                    <span className="text-2xl font-bold leading-none">{e.d}</span>
                    <span className="text-xs">{e.m}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold">{t(e.ar, e.en)}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {e.loc}
                    </p>
                  </div>
                  <Calendar className="w-5 h-5 text-primary ms-auto hidden sm:block" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — News & articles: magazine */}
      <section id="news" className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead
            eyebrow={t("الأخبار والمقالات", "News & Articles")}
            title={t("آخر أخبار الجمعية ومقالات المهندسين", "Latest Society news and members' articles")}
            desc={t(
              "تغطية مستمرة لأنشطة الجمعية، ومقالات مهنية يكتبها مهندسون حول تطورات القطاع.",
              "Ongoing coverage of the Society's activities plus professional articles written by engineers about industry developments."
            )}
          />
          <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-6">
            <Reveal>
              <article className="rounded-3xl overflow-hidden bg-card border border-border h-full">
                <img src={img.news} alt={t("خبر رئيسي", "Featured news")} loading="lazy" className="h-64 w-full object-cover" />
                <div className="p-6">
                  <span className="text-xs font-bold text-primary">{t("خبر رئيسي", "Featured")}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-2">
                    {t("الجمعية توقّع شراكة لدعم الاستدامة الهندسية", "Society signs partnership to support engineering sustainability")}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t("اتفاقية جديدة لتعزيز الممارسات المستدامة في المشاريع الهندسية بالمملكة.", "A new agreement to promote sustainable practices in the Kingdom's engineering projects.")}
                  </p>
                  <MoreButton href="/article/1" label={t("اقرأ الخبر", "Read the story")} />
                </div>
              </article>
            </Reveal>
            <div id="articles" className="space-y-4">
              {[
                { ar: "التحول الرقمي في القطاع الهندسي", en: "Digital transformation in engineering" },
                { ar: "معايير السلامة في مواقع البناء", en: "Safety standards on construction sites" },
                { ar: "مستقبل الطاقة المتجددة في البحرين", en: "The future of renewable energy in Bahrain" },
              ].map((a, i) => (
                <Reveal key={a.en}>
                  <a href={`/article/${i + 1}`} className="flex gap-4 rounded-2xl bg-card border border-border p-4 hover:border-primary/40 transition-colors">
                    <Newspaper className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold leading-snug">{t(a.ar, a.en)}</h4>
                      <span className="text-xs text-muted-foreground">{t("مقال مهني", "Professional article")}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
              <Reveal><MoreButton href="/article/1" variant="outline" label={t("كل المقالات", "All articles")} /></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 9 — Services: icon grid */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHead
            eyebrow={t("الخدمات", "Services")}
            title={t("خدمات تدعم المهندس في كل مرحلة", "Services supporting engineers at every stage")}
            desc={t(
              "من التسجيل المهني إلى الاستشارات وفرص العمل والفعاليات، نوفّر منظومة متكاملة للمهندسين.",
              "From professional registration to consultancy, career opportunities and events — an integrated ecosystem for engineers."
            )}
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Briefcase, ar: "فرص العمل", en: "Career opportunities" },
              { icon: ShieldCheck, ar: "التسجيل المهني", en: "Professional registration" },
              { icon: GraduationCap, ar: "التدريب المستمر", en: "Continuous training" },
              { icon: Users, ar: "الشبكات المهنية", en: "Professional networking" },
            ].map((s) => (
              <Reveal key={s.en}>
                <div className="rounded-3xl border border-border bg-card p-6 h-full hover:-translate-y-1 hover:shadow-xl transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-primary/10 grid place-items-center mb-4">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{t(s.ar, s.en)}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t("خدمة متاحة لجميع أعضاء الجمعية.", "Available to all Society members.")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <MoreButton href="/about-us" variant="outline" label={t("كل الخدمات", "All services")} />
          </Reveal>
        </div>
      </section>

      {/* 10 — Membership CTA */}
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

      {/* 11 — Contact */}
      <section id="contact" className="py-20 md:py-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <SectionHead
            eyebrow={t("تواصل معنا", "Contact")}
            title={t("نحن هنا للإجابة على استفساراتك", "We're here to answer your questions")}
            desc={t(
              "فريق الجمعية جاهز لاستقبال استفسارات الأعضاء والجهات الراغبة في التعاون والشراكة.",
              "Our team is ready to receive enquiries from members and organisations seeking collaboration."
            )}
          />
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">info@mohandis.org</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">{t("الجفير، مملكة البحرين", "Juffair, Kingdom of Bahrain")}</span>
              </div>
              <MoreButton href="/contact" label={t("صفحة التواصل", "Contact page")} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default HomeSections;

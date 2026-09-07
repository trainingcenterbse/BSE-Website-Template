import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Building,
  Calendar,
  Globe,
  Handshake,
  Heart,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Network,
  Phone,
  Rocket,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CoinLogo3D from "@/components/CoinLogo3D";
import AboutSealMotif from "@/components/about/AboutSealMotif";
import heroAward from "@/assets/hero-award.jpg";
import heroConference from "@/assets/hero-conference.jpg";
import heroSkyline from "@/assets/hero-skyline.jpg";
import heroTraining from "@/assets/hero-training.jpg";
import { bseInfo } from "@/data/bseOfficialData";

export type AboutLanguage = "ar" | "en";

interface LanguageProps {
  currentLang: AboutLanguage;
}

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

const copy = (lang: AboutLanguage, ar: string, en: string) => (lang === "ar" ? ar : en);

const SectionKicker = ({ children }: { children: React.ReactNode }) => (
  <span className="bp-eyebrow">{children}</span>
);

const AboutHeroSection = ({ currentLang }: LanguageProps) => (
  <section id="hero" className="bp-hero">
    <div className="bp-hero-grid" aria-hidden="true" />
    <figure className="bp-hero-art">
      <img
        src={heroSkyline}
        alt={copy(currentLang, "مشهد معماري لمدينة البحرين", "Bahrain city architecture")}
      />
    </figure>

    <div className="bp-shell bp-hero-content">
      <Reveal className="bp-hero-copy">
        <SectionKicker>ABOUT THE SOCIETY</SectionKicker>
        <h1>
          {copy(currentLang, "هندسةٌ", "Engineering")}
          <br />
          {copy(currentLang, "تراكم الأثر", "that compounds impact")}
        </h1>
        <p className="bp-hero-lead">
          {copy(
            currentLang,
            "جمعية مهنية تطوعية تعنى بشؤون قطاع المهندسين في البحرين، وترعى مصالحهم، وتطوّر قدراتهم لخدمة المهنة والمجتمع منذ عام 1972.",
            "A voluntary professional society serving Bahrain’s engineers, advancing their capabilities and turning knowledge into lasting impact since 1972."
          )}
        </p>
        <div className="bp-hero-rule" aria-hidden="true" />
        <div className="bp-hero-meta">
          <span>
            <strong>1972</strong>
            {copy(currentLang, "تاريخ التأسيس", "Founded")}
          </span>
          <span>
            <strong>{bseInfo.membersCount}+</strong>
            {copy(currentLang, "عضو", "Members")}
          </span>
          <span>
            <strong>{bseInfo.yearsCount}</strong>
            {copy(currentLang, "عاماً من الأثر", "Years of impact")}
          </span>
        </div>
      </Reveal>

      <div className="bp-hero-seal" aria-hidden="true">
        <AboutSealMotif tone="dark" size="hero" showLogo />
        <div className="absolute inset-x-0 bottom-0 text-center text-[10px] tracking-[0.22em] text-slate-300/70" dir="ltr">
          BSE / EST. 1972
        </div>
      </div>
    </div>

    <div className="bp-hero-bottom">
      <span>ENGINEERING · SERVICE · COMMUNITY</span>
      <span>{copy(currentLang, "ملف الجمعية / 01", "Society profile / 01")}</span>
    </div>
  </section>
);

const AboutOverviewSection = ({ currentLang }: LanguageProps) => {
  const metrics = [
    { value: `+${bseInfo.membersCount}`, label: copy(currentLang, "عضو في المجتمع الهندسي", "Engineering community members"), note: "MEMBERS" },
    { value: `+${bseInfo.partnersCount}`, label: copy(currentLang, "شريك استراتيجي", "Strategic partners"), note: "PARTNERS" },
    { value: `+${bseInfo.eventsCount}`, label: copy(currentLang, "فعالية وبرنامج سنوي", "Annual events and programmes"), note: "PROGRAMMES" },
    { value: String(bseInfo.foundedYear), label: copy(currentLang, "عام تأسيس الجمعية", "Society foundation year"), note: "ESTABLISHED" },
  ];

  const indexItems = [
    ["01", copy(currentLang, "التعريف", "Overview"), "#stats"],
    ["02", copy(currentLang, "من نحن", "Our history"), "#milestones"],
    ["03", copy(currentLang, "الرؤية والرسالة", "Vision and mission"), "#vision"],
    ["04", copy(currentLang, "الأهداف الاستراتيجية", "Strategic goals"), "#goals"],
    ["05", copy(currentLang, "القيم", "Values"), "#values"],
  ];

  return (
    <section id="stats" className="bp-section bp-section--paper bp-section--overview">
      <AboutSealMotif tone="light" size="section" className="end-[-150px] top-16 opacity-60" />
      <div className="bp-shell relative z-10">
        <div className="bp-overview-head">
          <Reveal className="bp-overview-copy">
            <SectionKicker>01 / {copy(currentLang, "التعريف", "OVERVIEW")}</SectionKicker>
            <h2>
              {copy(currentLang, "نصنع مساحة", "A space to")}
              <br />
              {copy(currentLang, "ينمو فيها المهندس.", "grow as an engineer.")}
            </h2>
            <p>
              {copy(
                currentLang,
                "تجمع الجمعية مهندسي مملكة البحرين من مختلف التخصصات، وتعمل على رفع مستوى المهنة، ودعم التنمية الوطنية، وتمثيل المهندسين محلياً ودولياً من خلال المعرفة والشراكات والعمل المهني.",
                "The Society brings together Bahrain’s engineers across disciplines, raising professional standards, supporting national development and representing engineers locally and internationally through knowledge, partnerships and service."
              )}
            </p>
          </Reveal>

          <Reveal className="bp-overview-index" delay={0.1}>
            <ul className="bp-index-list">
              {indexItems.map(([number, label, href]) => (
                <li key={number}>
                  <a href={href}>
                    <span>{number}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="bp-metrics" delay={0.12}>
          {metrics.map((metric) => (
            <div className="bp-metric" key={metric.note}>
              <div className="bp-metric-value">{metric.value}</div>
              <div className="bp-metric-label">{metric.label}</div>
              <div className="bp-metric-note">{metric.note}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

const AboutHistorySection = ({ currentLang }: LanguageProps) => {
  const milestones = [
    {
      year: "1972",
      title: copy(currentLang, "تأسيس الجمعية", "Society foundation"),
      description: copy(currentLang, "انطلاقة جمعية المهندسين البحرينية كجمعية مهنية تطوعية تخدم قطاع المهندسين.", "The Bahrain Society of Engineers begins as a voluntary professional society serving engineers."),
    },
    {
      year: "1992",
      title: copy(currentLang, "إعادة التسجيل", "Re-registration"),
      description: copy(currentLang, "إعادة التسجيل بتاريخ 15-3-1992 تحت قيد م/ج/76 وفق قانون الجمعيات والأندية.", "Re-registered on 15 March 1992 under registration M/J/76 according to the societies and clubs law."),
    },
    {
      year: copy(currentLang, "اليوم", "Today"),
      title: copy(currentLang, "أثر مهني مستمر", "Continuing professional impact"),
      description: copy(currentLang, "برامج فنية واجتماعية وشراكات توسّع أثر المهندس في المجتمع محلياً وإقليمياً.", "Technical and social programmes and partnerships continue to extend the engineer’s impact locally and regionally."),
    },
  ];

  return (
    <section id="milestones" className="bp-section bp-section--dark">
      <div className="bp-shell">
        <div className="bp-history-top">
          <Reveal>
            <SectionKicker>02 / {copy(currentLang, "المسيرة", "HISTORY")}</SectionKicker>
            <h2>{copy(currentLang, "ثلاث محطات تبني ذاكرة المهنة.", "Three milestones build a professional memory.")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              {copy(
                currentLang,
                "من التأسيس إلى العمل المؤسسي المستمر، تطورت الجمعية مع احتياجات المهندس والقطاع الهندسي في مملكة البحرين.",
                "From its founding to sustained institutional work, the Society has evolved alongside the needs of engineers and Bahrain’s engineering sector."
              )}
            </p>
          </Reveal>
        </div>

        <div className="bp-timeline">
          {milestones.map((milestone, index) => (
            <Reveal className="bp-timeline-item" delay={index * 0.08} key={milestone.year}>
              <div className="bp-timeline-dot" aria-hidden="true" />
              <div className="bp-timeline-year">{milestone.year}</div>
              <h3 className="bp-timeline-title">{milestone.title}</h3>
              <p className="bp-timeline-copy">{milestone.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutVisionMissionSection = ({ currentLang }: LanguageProps) => (
  <section id="vision" className="bp-section bp-section--white">
    <AboutSealMotif tone="light" size="section" className="start-[-180px] top-16 opacity-50" />
    <div className="bp-shell relative z-10">
      <div className="bp-vision-layout">
        <Reveal className="bp-vision-head">
          <SectionKicker>03 / {copy(currentLang, "الرؤية والرسالة", "VISION & MISSION")}</SectionKicker>
          <h2>
            {copy(currentLang, "اتجاه واضح.", "A clear direction.")}
            <br />
            {copy(currentLang, "وعمل قابل للقياس.", "Measurable work.")}
          </h2>
          <p>
            {copy(
              currentLang,
              "نحو قطاع هندسي بحريني أكثر تأثيراً وتنافسية؛ نربط تطوير المهندس بخدمة المجتمع، ونحوّل المعرفة والشراكات إلى أثر مهني مستدام.",
              "Toward a more influential and competitive Bahraini engineering sector—connecting engineer development with community service and turning knowledge and partnerships into lasting professional impact."
            )}
          </p>
          <div className="bp-vision-line" aria-hidden="true" />
        </Reveal>

        <div className="bp-compare">
          <Reveal className="bp-compare-card" delay={0.08}>
            <div className="bp-card-index">
              <span>01 — VISION</span>
              <span>{copy(currentLang, "الرؤية", "Vision")}</span>
            </div>
            <h3>
              {copy(currentLang, "التميز والتفوق", "Excellence and distinction")}
              <br />
              {copy(currentLang, "باعتراف إقليمي وعالمي.", "with regional and global recognition.")}
            </h3>
            <p>
              {copy(
                currentLang,
                "تحقيق التميز والتفوق بصفتنا هيئة مهنية هندسية رائدة تسعى وتعمل لكسب الاعتراف والسمعة الطيبة على المستوى الإقليمي والعالمي.",
                "Achieve excellence as a leading professional engineering body that earns recognition and a strong reputation regionally and globally."
              )}
            </p>
            <div className="bp-card-tags">
              {["تميز", "ريادة", "اعتراف عالمي"].map((tag) => <span key={tag}>{currentLang === "ar" ? tag : ({ "تميز": "Excellence", "ريادة": "Leadership", "اعتراف عالمي": "Global recognition" } as Record<string, string>)[tag]}</span>)}
            </div>
          </Reveal>

          <Reveal className="bp-compare-card bp-compare-card--dark" delay={0.16}>
            <div className="bp-card-index">
              <span>02 — MISSION</span>
              <span>{copy(currentLang, "الرسالة", "Mission")}</span>
            </div>
            <h3>
              {copy(currentLang, "احتضان كل تخصص", "Embrace every discipline")}
              <br />
              {copy(currentLang, "والارتقاء بكل مهندس.", "and elevate every engineer.")}
            </h3>
            <p>
              {copy(
                currentLang,
                "الجمعية الوطنية التي تحتضن المهندسين من جميع التخصصات وتعمل على الارتقاء بالمستوى المهني والتقني والعلمي للمهندسين.",
                "The national society that embraces engineers from every discipline and raises their professional, technical and scientific level."
              )}
            </p>
            <div id="mission" className="bp-card-tags">
              {["احتضان", "تطوير", "تمكين"].map((tag) => <span key={tag}>{currentLang === "ar" ? tag : ({ "احتضان": "Embrace", "تطوير": "Development", "تمكين": "Empowerment" } as Record<string, string>)[tag]}</span>)}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

const AboutGoalsSection = ({ currentLang }: LanguageProps) => {
  const goals = [
    [Building, "تطوير النهضة الصناعية والعمرانية", "Industrial and urban development", "المساهمة في تطوير النهضة الصناعية والعمرانية في مملكة البحرين.", "Contribute to Bahrain’s industrial and urban development."],
    [Shield, "تنظيم مهنة الهندسة", "Engineering profession standards", "المساهمة في تنظيم قواعد مهنة الهندسة ورفع مستواها بالتعاون مع الجهات المختصة.", "Help organize and advance engineering standards with relevant authorities."],
    [Handshake, "حماية المصالح والحقوق المهنية", "Professional interests and rights", "التعبير عن المصالح والحقوق المهنية لأعضاء الجمعية.", "Represent the professional interests and rights of Society members."],
    [Users, "تعزيز روابط الزمالة", "Professional fellowship", "توثيق روابط الود والزمالة بين أعضاء الجمعية.", "Strengthen friendship and fellowship among Society members."],
    [Network, "توسيع التعاون العلمي والفني", "Scientific and technical cooperation", "توطيد التعاون بين مهندسي البحرين وزملائهم عربياً ودولياً.", "Build cooperation between Bahrain’s engineers and peers regionally and globally."],
    [Lightbulb, "دعم الأبحاث الهندسية", "Engineering research", "إجراء وتشجيع الأبحاث عبر النشر والمسابقات والمؤتمرات والمحاضرات والزيارات العلمية.", "Conduct and encourage research through publishing, competitions, conferences, lectures and scientific visits."],
  ] as const;

  const pathways = [
    ["01", "المعرفة والتطوير المهني", "Knowledge and professional development"],
    ["02", "الشراكات والتمثيل المؤسسي", "Partnerships and institutional representation"],
    ["03", "المجتمع والعضوية", "Community and membership"],
    ["04", "الابتكار والاستدامة", "Innovation and sustainability"],
  ];

  return (
    <section id="goals" className="bp-section bp-section--goals">
      <AboutSealMotif tone="light" size="section" className="end-[-180px] bottom-0 opacity-40" />
      <div className="bp-shell relative z-10">
        <div className="bp-goals-head">
          <Reveal>
            <SectionKicker>04 / {copy(currentLang, "الإطار الاستراتيجي", "STRATEGIC FRAMEWORK")}</SectionKicker>
            <h2>
              {copy(currentLang, "أهداف تتحول", "Goals that become")}
              <br />
              {copy(currentLang, "إلى ممارسة.", "practice.")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              {copy(
                currentLang,
                "ستة مسارات عملية تحفظ دور الجمعية في تطوير المهنة، وحماية مصالح أعضائها، وربط المعرفة بالنهضة الوطنية.",
                "Six practical paths that protect the Society’s role in advancing the profession, supporting members and connecting knowledge to national progress."
              )}
            </p>
          </Reveal>
        </div>

        <div className="bp-goals-layout">
          <ol className="bp-goal-list">
            {goals.map(([Icon, titleAr, titleEn, descriptionAr, descriptionEn], index) => (
              <Reveal key={titleEn} className="bp-goal-row" delay={index * 0.04}>
                <span className="bp-goal-no">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{copy(currentLang, titleAr, titleEn)}</h3>
                  <p>{copy(currentLang, descriptionAr, descriptionEn)}</p>
                </div>
                <span className="bp-goal-mark" aria-hidden="true"><Icon className="sr-only" /></span>
              </Reveal>
            ))}
          </ol>

          <Reveal className="bp-pathways" delay={0.1}>
            <div className="bp-pathways-top">
              <div>
                <small>STRATEGIC PATHWAYS</small>
                <h3>{copy(currentLang, "مسارات العمل", "Ways of working")}</h3>
              </div>
              <span className="bp-pathways-code">BSE / 06</span>
            </div>
            <ul className="bp-pathway-list">
              {pathways.map(([number, ar, en]) => (
                <li key={number}>
                  <span>{number}</span>
                  <p>{copy(currentLang, ar, en)}</p>
                </li>
              ))}
            </ul>
            <p className="bp-pathways-foot">
              {copy(currentLang, "كل مسار يربط هدفاً واضحاً بخدمة ملموسة للمهندس والمجتمع.", "Each path connects a clear goal with tangible service for engineers and society.")}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const AboutValuesSection = ({ currentLang }: LanguageProps) => {
  const values = [
    ["النزاهة", "Integrity", "الالتزام بأعلى معايير الأخلاق المهنية والشفافية.", "Commitment to the highest standards of professional ethics and transparency."],
    ["التعاون", "Collaboration", "العمل معاً كفريق واحد لتحقيق أهدافنا المشتركة.", "Working together as one team to achieve shared goals."],
    ["التميز", "Excellence", "السعي الدائم لتقديم أفضل الخدمات والبرامج الممكنة.", "Always striving to provide the best services and programmes possible."],
    ["الخدمة", "Service", "تكريس العمل لخدمة أعضائنا ومجتمعنا المهني.", "Dedicating our work to serving members and the professional community."],
  ];

  return (
    <section id="values" className="bp-section bp-section--white">
      <AboutSealMotif tone="light" size="section" className="start-[-190px] bottom-[-100px] opacity-40" />
      <div className="bp-shell relative z-10">
        <div className="bp-values-layout">
          <Reveal className="bp-values-intro">
            <SectionKicker>05 / {copy(currentLang, "القيم", "VALUES")}</SectionKicker>
            <h2>
              {copy(currentLang, "مبادئ قصيرة.", "Short principles.")}
              <br />
              {copy(currentLang, "أثر طويل.", "Long impact.")}
            </h2>
            <p>
              {copy(currentLang, "القيم التي توجه قراراتنا، وتحدد الطريقة التي نخدم بها أعضاء الجمعية والمجتمع الهندسي.", "The values that guide our decisions and define how we serve members and the engineering community.")}
            </p>
          </Reveal>

          <div className="bp-values-list">
            {values.map(([ar, en, descAr, descEn], index) => (
              <Reveal className="bp-value" delay={index * 0.05} key={en}>
                <span className="bp-value-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{copy(currentLang, ar, en)}</h3>
                  <p>{copy(currentLang, descAr, descEn)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutActivitiesSection = ({ currentLang }: LanguageProps) => {
  const activities = [
    [heroConference, "المؤتمرات والندوات", "Conferences and seminars", "تنظيم المؤتمرات والندوات والمعارض الهندسية بصفة دورية.", "Organising conferences, seminars and engineering exhibitions periodically."],
    [heroTraining, "الدورات التدريبية", "Training courses", "إعداد وتنفيذ دورات هندسية وإدارية لتدريب وتطوير الأعضاء.", "Delivering engineering and management courses for member development."],
    [heroAward, "المحاضرات والزيارات", "Lectures and visits", "تنظيم المحاضرات والزيارات الميدانية للأعضاء.", "Organising lectures and field visits for members."],
    [heroSkyline, "النشرات والكتيبات", "Publications", "إعداد وتوزيع النشرات والتعميمات والكتيبات على الأعضاء.", "Preparing and distributing bulletins and publications to members."],
    [heroConference, "خدمات التوظيف", "Employment services", "تقديم خدمات التوظيف للأعضاء حسب العروض المتاحة.", "Providing employment services to members according to available opportunities."],
    [heroAward, "النشاط الإعلامي", "Media activity", "إصدار مجلة دورية ونشرة إلكترونية ونشر أخبار الجمعية.", "Publishing a periodic magazine, digital newsletter and Society news."],
  ];

  return (
    <section className="bp-section bp-section--activities">
      <div className="bp-shell">
        <Reveal>
          <SectionKicker>06 / {copy(currentLang, "الأنشطة", "ACTIVITIES")}</SectionKicker>
          <h2>{copy(currentLang, "مساحات للمعرفة والعمل.", "Spaces for knowledge and action.")}</h2>
          <p className="bp-section-intro">
            {copy(currentLang, "أنشطة وبرامج الجمعية التي تترجم دورها المهني إلى تجربة ملموسة للأعضاء والمجتمع.", "Programmes and activities that turn the Society’s professional role into tangible experiences for members and society.")}
          </p>
        </Reveal>

        <div className="bp-activities-grid">
          {activities.map(([image, titleAr, titleEn, descAr, descEn], index) => (
            <Reveal className="bp-activity-card" delay={index * 0.04} key={titleEn}>
              <img className="bp-activity-card__image" src={image} alt="" loading="lazy" />
              <div className="bp-activity-card__content">
                <h3>{copy(currentLang, titleAr, titleEn)}</h3>
                <p>{copy(currentLang, descAr, descEn)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutServicesSection = ({ currentLang }: LanguageProps) => {
  const services = [
    [Award, "الشهادات المهنية", "Professional certifications", "شهادات مهنية معتمدة عالمياً لتطوير مسيرتك.", "Globally recognised professional certifications to advance your career."],
    [Users, "التطوير المهني", "Professional development", "برامج تدريبية وورش عمل لتطوير مهاراتك الهندسية.", "Training programmes and workshops to develop engineering skills."],
    [Globe, "الشراكات الدولية", "International partnerships", "تعاون مع منظمات هندسية عالمية لتوسيع الفرص.", "Collaboration with global engineering organisations to expand opportunities."],
  ] as const;

  return (
    <section id="services" className="bp-section bp-section--services">
      <AboutSealMotif tone="light" size="section" className="end-[-170px] top-12 opacity-45" />
      <div className="bp-shell relative z-10">
        <div className="bp-services-head">
          <Reveal>
            <SectionKicker>07 / {copy(currentLang, "الخدمات", "SERVICES")}</SectionKicker>
            <h2>{copy(currentLang, "دعم يواكب مسيرة المهندس.", "Support for every engineering journey.")}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="bp-section-intro">{copy(currentLang, "خدمات عملية تجمع بين المعرفة، التطوير، والشراكات التي تمنح أعضاء الجمعية مساحة أوسع للنمو.", "Practical services combining knowledge, development and partnerships that give members more room to grow.")}</p>
          </Reveal>
        </div>

        <div className="bp-services-grid">
          {services.map(([Icon, titleAr, titleEn, descAr, descEn], index) => (
            <Reveal className="bp-service-card" delay={index * 0.06} key={titleEn}>
              <div className="bp-service-icon"><Icon className="h-6 w-6" /></div>
              <h3>{copy(currentLang, titleAr, titleEn)}</h3>
              <p>{copy(currentLang, descAr, descEn)}</p>
              <a href="#contact" className="bp-service-link">
                {copy(currentLang, "اعرف المزيد", "Learn more")}
                {currentLang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutContactSection = ({ currentLang }: LanguageProps) => {
  const contactItems = [
    [MapPin, "العنوان", "Address", "مبنى جمعية المهندسين البحرينية، الجفير، المنامة", "Bahrain Society of Engineers Building, Juffair, Manama"],
    [Phone, "الهاتف", "Phone", bseInfo.phone, bseInfo.phone],
    [Mail, "البريد الإلكتروني", "Email", bseInfo.email, bseInfo.email],
    [Calendar, "ساعات العمل", "Working hours", "الأحد – الخميس، 8:00 ص – 4:00 م", "Sunday – Thursday, 08:00 – 16:00"],
  ] as const;

  return (
    <section id="contact" className="bp-section bp-contact">
      <div className="bp-shell">
        <div className="bp-contact-grid">
          <Reveal>
            <SectionKicker>08 / {copy(currentLang, "تواصل معنا", "CONTACT")}</SectionKicker>
            <h2>
              {copy(currentLang, "لنحوّل المعرفة", "Let’s turn knowledge")}
              <br />
              {copy(currentLang, "إلى أثر مشترك.", "into shared impact.")}
            </h2>
            <p className="bp-contact-copy">
              {copy(currentLang, "أبواب الجمعية مفتوحة للأعضاء والجهات الراغبة في التعاون والشراكة وبناء مستقبل هندسي أكثر تأثيراً في مملكة البحرين.", "The Society is open to members and organisations seeking collaboration, partnership and a more influential engineering future in Bahrain.")}
            </p>
            <Button asChild className="bp-contact-action rounded-none">
              <a href="/contact">
                {copy(currentLang, "ابدأ محادثة", "Start a conversation")}
                {currentLang === "ar" ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </a>
            </Button>
          </Reveal>

          <Reveal className="bp-contact-panel" delay={0.1}>
            <dl>
              {contactItems.map(([Icon, labelAr, labelEn, valueAr, valueEn]) => (
                <div className="bp-contact-row" key={labelEn}>
                  <dt className="flex items-center gap-2"><Icon className="h-4 w-4 text-[var(--bse-ring)]" />{copy(currentLang, labelAr, labelEn)}</dt>
                  <dd>{copy(currentLang, valueAr, valueEn)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export {
  AboutHeroSection,
  AboutOverviewSection,
  AboutHistorySection,
  AboutVisionMissionSection,
  AboutGoalsSection,
  AboutValuesSection,
  AboutActivitiesSection,
  AboutServicesSection,
  AboutContactSection,
};

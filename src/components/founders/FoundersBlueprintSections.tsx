import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Calendar, Heart, Shield } from "lucide-react";

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
interface FoundersHeroSectionProps {
  currentLang: string;
}

export const FoundersHeroSection = ({ currentLang }: FoundersHeroSectionProps) => {
  return (
    <section id="hero" className="bp-hero">
      <div className="bp-hero-grid" aria-hidden="true" />
      <figure className="bp-hero-art">
        <img
          src="/Founders.jpg"
          alt={currentLang === 'ar' ? 'مؤسسو جمعية المهندسين البحرينية' : 'Bahrain Society of Engineers Founders'}
        />
      </figure>

      <div className="bp-shell bp-hero-content">
        <Reveal className="bp-hero-copy">
          <span className="bp-eyebrow">
            {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'BAHRAIN SOCIETY OF ENGINEERS'}
          </span>
          <h1>
            {currentLang === 'ar' ? 'المؤسسون' : 'The'}
            <br />
            {currentLang === 'ar' ? 'الأوائل' : 'First Founders'}
          </h1>
          <p className="bp-hero-lead">
            {currentLang === 'ar'
              ? 'قصة تأسيس جمعية المهندسين البحرينية، والرجال الذين أسهموا في بناء هذا الصرح المهني منذ عام 1978.'
              : 'The story of establishing the Bahrain Society of Engineers and the visionaries who built this professional institution since 1978.'}
          </p>
          <div className="bp-hero-rule" aria-hidden="true" />
          <div className="bp-hero-meta">
            <span>
              <strong>1978</strong>
              {currentLang === 'ar' ? 'عام التأسيس' : 'Founded'}
            </span>
            <span>
              <strong>17+</strong>
              {currentLang === 'ar' ? 'مؤسساً' : 'Founders'}
            </span>
            <span>
              <strong>47+</strong>
              {currentLang === 'ar' ? 'عاماً من الإرث' : 'Years of Legacy'}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="bp-hero-bottom">
        <span>ENGINEERING · SERVICE · COMMUNITY</span>
        <span>{currentLang === 'ar' ? 'المؤسسون / 01' : 'Founders / 01'}</span>
      </div>
    </section>
  );
};

// Founding Story Section
interface FoundingStorySectionProps {
  currentLang: string;
  foundingStory: {
    year: string;
    title: string;
    description: string;
    keyMoments: { date: string; event: string }[];
  };
}

export const FoundingStorySection = ({ currentLang, foundingStory }: FoundingStorySectionProps) => {
  return (
    <section id="founding-story" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <div className="mb-12">
          <span className="bp-eyebrow">
            01 / {currentLang === 'ar' ? 'قصة التأسيس' : 'FOUNDING STORY'}
          </span>
          <h2 className="mt-3">
            {foundingStory.title}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar'
              ? 'الظروف والعوامل الوطنية والمهنية التي أدت إلى تأسيس جمعية المهندسين البحرينية عام 1978.'
              : 'The national and professional factors that led to establishing the Bahrain Society of Engineers.'}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bp-compare-card bg-white !p-0 overflow-hidden border border-[var(--bse-line)] shadow-sm"
        >
          <div className="bp-card-index p-4 sm:px-8 border-b border-[var(--bse-line)] bg-[var(--bse-sky)]/40 flex items-center justify-between">
            <span className="font-mono text-xs text-[var(--bse-blue)]">
              01 — {currentLang === 'ar' ? 'البداية والمحطات' : 'GENESIS & MILESTONES'}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded border border-[var(--bse-line)] bg-white text-[var(--bse-navy)] font-mono font-bold">
              EST. 1978
            </span>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-5xl lg:text-6xl font-extrabold font-mono text-[var(--bse-navy)]">
                {foundingStory.year}
              </div>
              <p className="text-[var(--bse-ink)]/85 text-base leading-relaxed">
                {foundingStory.description}
              </p>
              <div className="bp-card-tags pt-2">
                <span>15 {currentLang === 'ar' ? 'نوفمبر 1978' : 'November 1978'}</span>
                <span>{currentLang === 'ar' ? 'أول جمعية مهنية' : 'First Professional Society'}</span>
                <span>BSE / ARCHIVE</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-bold font-mono text-[var(--bse-blue)] uppercase tracking-wider mb-2">
                {currentLang === 'ar' ? 'المحطات الرئيسية في عام التأسيس' : 'KEY FOUNDATION MILESTONES'}
              </div>
              {foundingStory.keyMoments.map((moment, index) => (
                <div
                  key={index}
                  className="p-4 rounded border border-[var(--bse-line)] bg-[var(--bse-paper)] flex items-center gap-4 hover:border-[var(--bse-blue)] transition-colors"
                >
                  <div className="w-10 h-10 rounded bg-[var(--bse-sky)] border border-[var(--bse-line)] flex items-center justify-center text-[var(--bse-blue)] flex-shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[var(--bse-blue)]">
                      {moment.date}
                    </div>
                    <div className="text-sm font-bold text-[var(--bse-navy)] mt-0.5">
                      {moment.event}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Foundation Journey Section
interface FoundationJourneySectionProps {
  currentLang: string;
}

export const FoundationJourneySection = ({ currentLang }: FoundationJourneySectionProps) => {
  const journeyItems = [
    {
      icon: Users,
      title: currentLang === 'ar' ? 'قبل التأسيس' : 'Before Foundation',
      stage: '01',
      description: currentLang === 'ar'
        ? 'قبل العام 1972 م، كان مجتمع الهندسة في البحرين يشكل مجموعتين منفصلتين: واحدة تضم المهندسين الأوروبيين العاملين في شركة نفط البحرين (بابكو)، ومجموعة ثانية تضم 22 من المهندسين البحرينيين تجتمع من وقت لآخر في نادي الخريجين.'
        : 'Before 1972, the engineering community in Bahrain consisted of two separate groups: European engineers at BAPCO, and a second group of 22 Bahraini engineers who met periodically at the Graduates Club.'
    },
    {
      icon: Award,
      title: currentLang === 'ar' ? 'عوامل التأسيس' : 'Foundation Factors',
      stage: '02',
      description: currentLang === 'ar'
        ? 'أثرت عوامل عديدة في ظهور الحاجة للجمعية، منها الشعور الوطني بعد الاستقلال عام 1971 م، والحاجة الماسة للتمثيل المهني للمهندسين البحرينيين العائدين من دراستهم في الخارج عبر إطار مؤسسي مهني غير سياسي.'
        : 'Many factors influenced the need to establish the society, including national sentiment after independence in 1971 and the necessity for professional representation of returning Bahraini engineers.'
    },
    {
      icon: Shield,
      title: currentLang === 'ar' ? 'المباركة الرسمية' : 'Official Blessing',
      stage: '03',
      description: currentLang === 'ar'
        ? 'حصل المؤسسون على مباركة القيادة والحكومة وصدر التصريح الأول من وزير العمل والشؤون الاجتماعية آنذاك سعادة الأستاذ جواد سالم العريض، فأصبحت الجمعية مرخصة رسمياً اعتباراً من 1 يوليو 1972 م.'
        : 'Founders secured government blessing, and the initial license was granted by Minister of Labor and Social Affairs Jawad Salem Al-Araidh, officially declaring the Society on July 1, 1972.'
    }
  ];

  return (
    <section id="foundation-journey" className="bp-section bp-section--dark">
      <div className="bp-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="bp-eyebrow">
            02 / {currentLang === 'ar' ? 'مسار التأسيس' : 'FOUNDATION JOURNEY'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'رحلة التأسيس التاريخية' : 'The Foundation Journey'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar'
              ? 'المراحل التاريخية الثلاث التي شهدت ولادة الصرح الهندسي الأول في مملكة البحرين.'
              : 'The three historical stages that witnessed the birth of Bahrain\'s foremost engineering body.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {journeyItems.map((item, index) => (
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
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="bp-card-index text-[10px] font-mono text-[var(--bse-ring)] mb-2">
                  <span>STAGE / {item.stage}</span>
                  <span>BSE 1972</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proclamation Banner */}
        <div className="bp-compare-card !bg-[var(--bse-navy-2)] !border-[var(--bse-line-dark)] p-8 text-center text-white">
          <div className="text-xs font-mono tracking-widest text-[var(--bse-ring)] uppercase mb-2">
            OFFICIAL DECLARATION DATE
          </div>
          <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
            {currentLang === 'ar' ? '1 يوليو 1972 م' : 'July 1, 1972'}
          </div>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            {currentLang === 'ar' 
              ? 'تاريخ إعلان الإشهار الرسمي لجمعية المهندسين البحرينية كمنظمة مهنية وطنية رائدة'
              : 'The official declaration date of the Bahrain Society of Engineers as a leading national engineering body'}
          </p>
        </div>
      </div>
    </section>
  );
};

// Founders Names Section
interface FoundersNamesSectionProps {
  currentLang: string;
}

export const FoundersNamesSection = ({ currentLang }: FoundersNamesSectionProps) => {
  const standingNames = [
    'سيف عيسى البنعلي',
    'عيسى سيد خلف',
    'سالم عبداالله المناعي',
    'عبداالله محمد جمعة',
    'جميل كاظم العلوي',
    'إبراهيم خليل المؤيد',
    'الدكتور عصام عبد الله فخرو',
    'فاروق يوسف المؤيد',
    'كاظم الهاشمي',
    'سامي كيكسو'
  ];

  const sittingNames = [
    'عبد الرحمن أحمد فخرو',
    'خالد بن عبداالله آل خليفة',
    'علي محمد مراد',
    'ماجد جواد الجشي',
    'الدكتور عبداللطيف جاسم كانو',
    'فويسفا فخرو',
    'خالد عبد الرحمن المؤيد'
  ];

  return (
    <section id="founders-names" className="bp-section bp-section--white">
      <div className="bp-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="bp-eyebrow">
            03 / {currentLang === 'ar' ? 'الهيئة التأسيسية' : 'FOUNDING ROLL'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'أسماء المؤسسين الأوائل' : 'Names of First Founders'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar'
              ? 'المهندسون الرواد الذين وضعوا اللبنة الأولى لجمعية المهندسين البحرينية في الصورة التاريخية لعام 1972.'
              : 'The pioneer engineers who laid the first stone of the Bahrain Society of Engineers in the 1972 historic portrait.'}
          </p>
        </motion.div>

        {/* Historical Photo Card */}
        <div className="bp-compare-card !p-0 overflow-hidden mb-12 border border-[var(--bse-line)] bg-white shadow-sm">
          <div className="relative overflow-hidden bg-slate-900">
            <img 
              src="/Founders.jpg" 
              alt="BSE Founders 1972" 
              className="w-full h-auto max-h-[560px] object-contain mx-auto"
            />
          </div>
          <div className="p-4 sm:px-6 bg-[var(--bse-paper)] border-t border-[var(--bse-line)] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="font-bold text-[var(--bse-navy)]">
              {currentLang === 'ar' ? 'الصورة التذكارية للمؤسسين — 1972' : 'Historic Founders Portrait — 1972'}
            </div>
            <span className="font-mono text-[var(--bse-muted)]">BSE HISTORICAL ARCHIVE / 1972</span>
          </div>
        </div>

        {/* Names Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Standing Column */}
          <div className="bp-compare-card bg-[var(--bse-paper)] border border-[var(--bse-line)] p-6 sm:p-8">
            <div className="bp-card-index pb-4 border-b border-[var(--bse-line)] mb-6 flex items-center justify-between">
              <span className="font-mono font-bold text-xs text-[var(--bse-blue)]">
                01 — {currentLang === 'ar' ? 'الوقوف من اليمين' : 'STANDING FROM RIGHT'}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded border border-[var(--bse-line)] bg-white font-mono text-[var(--bse-navy)]">
                10 {currentLang === 'ar' ? 'مؤسسين' : 'Founders'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {standingNames.map((name, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded border border-[var(--bse-line)] hover:border-[var(--bse-blue)] transition-colors flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded bg-[var(--bse-sky)] text-[var(--bse-blue)] font-mono font-bold text-[11px] flex items-center justify-center flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-bold text-[var(--bse-navy)] truncate">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sitting Column */}
          <div className="bp-compare-card bg-[var(--bse-paper)] border border-[var(--bse-line)] p-6 sm:p-8">
            <div className="bp-card-index pb-4 border-b border-[var(--bse-line)] mb-6 flex items-center justify-between">
              <span className="font-mono font-bold text-xs text-[var(--bse-blue)]">
                02 — {currentLang === 'ar' ? 'الجلوس من اليمين' : 'SITTING FROM RIGHT'}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded border border-[var(--bse-line)] bg-white font-mono text-[var(--bse-navy)]">
                7 {currentLang === 'ar' ? 'مؤسسين' : 'Founders'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sittingNames.map((name, index) => (
                <div
                  key={index}
                  className="bg-white p-3 rounded border border-[var(--bse-line)] hover:border-[var(--bse-blue)] transition-colors flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded bg-[var(--bse-sky)] text-[var(--bse-blue)] font-mono font-bold text-[11px] flex items-center justify-center flex-shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs font-bold text-[var(--bse-navy)] truncate">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Legacy Section
interface FoundersLegacySectionProps {
  currentLang: string;
}

export const FoundersLegacySection = ({ currentLang }: FoundersLegacySectionProps) => {
  const legacyItems = [
    {
      icon: Heart,
      title: currentLang === 'ar' ? 'الالتزام بالمهنة' : 'Commitment to Profession',
      index: '01',
      description: currentLang === 'ar'
        ? 'وضعوا أسس المهنة الهندسية في البحرين وأرسوا معاييرها الأخلاقية والمهنية السامية.'
        : 'They laid the foundations of the engineering profession in Bahrain and established high ethical standards.'
    },
    {
      icon: Users,
      title: currentLang === 'ar' ? 'تمكين الأجيال' : 'Empowering Generations',
      index: '02',
      description: currentLang === 'ar'
        ? 'بنوا جسوراً متينة للأجيال القادمة من المهندسين ودعموا حضورهم الوطني والدولي.'
        : 'They built solid bridges for future generations of engineers and supported their national and global presence.'
    },
    {
      icon: Award,
      title: currentLang === 'ar' ? 'التميز والريادة' : 'Excellence and Leadership',
      index: '03',
      description: currentLang === 'ar'
        ? 'أرسوا قواعد التميز والريادة في الممارسة الهندسية والعمل التطوعي المؤسسي.'
        : 'They established principles of excellence and leadership in engineering practice and voluntary institutional service.'
    }
  ];

  return (
    <section id="legacy" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="bp-eyebrow">
            04 / {currentLang === 'ar' ? 'الإرث المستمر' : 'ENDURING LEGACY'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'إرث المؤسسين الأوائل' : 'The Founders\' Legacy'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' 
              ? 'القيم والمبادئ التي غرسها المؤسسون لا تزال تنير مسار العمل الهندسي في مملكة البحرين.'
              : 'The values and principles planted by the founders continue to illuminate the path of engineering in Bahrain.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {legacyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bp-service-card bg-white border border-[var(--bse-line)] p-6 hover:border-[var(--bse-blue)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="bp-service-icon mb-5">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="bp-card-index text-[10px] font-mono text-[var(--bse-blue)] mb-2">
                  <span>LEGACY / {item.index}</span>
                  <span>1972 — PRESENT</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--bse-navy)] mb-2">{item.title}</h3>
                <p className="text-[var(--bse-muted)] text-xs leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Download, Shield, BookOpen, Scale, Users, Award, Calendar, CheckCircle, AlertCircle } from "lucide-react";

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
interface SystemsHeroSectionProps {
  currentLang: string;
}

export const SystemsHeroSection = ({ currentLang }: SystemsHeroSectionProps) => {
  return (
    <section id="hero" className="bp-hero">
      <div className="bp-hero-grid" aria-hidden="true" />
      <figure className="bp-hero-art">
        <img
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt={currentLang === 'ar' ? 'الأنظمة واللوائح القانونية' : 'Legal Documents and Regulations'}
        />
      </figure>

      <div className="bp-shell bp-hero-content">
        <Reveal className="bp-hero-copy">
          <span className="bp-eyebrow">
            {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'BAHRAIN SOCIETY OF ENGINEERS'}
          </span>
          <h1>
            {currentLang === 'ar' ? 'الأنظمة' : 'Systems &'}
            <br />
            {currentLang === 'ar' ? 'واللوائح' : 'Regulations'}
          </h1>
          <p className="bp-hero-lead">
            {currentLang === 'ar'
              ? 'القوانين واللوائح التي تنظم عمل الجمعية وتضمن الشفافية والحوكمة الرشيدة في تقديم الخدمات للمهندسين.'
              : 'The laws and regulations governing the society\'s work to ensure transparency and sound governance in serving engineers.'}
          </p>
          <div className="bp-hero-rule" aria-hidden="true" />
          <div className="bp-hero-meta">
            <span>
              <strong>6+</strong>
              {currentLang === 'ar' ? 'وثيقة رسمية' : 'Official Documents'}
            </span>
            <span>
              <strong>2023</strong>
              {currentLang === 'ar' ? 'آخر تحديث' : 'Last Updated'}
            </span>
            <span>
              <strong>100%</strong>
              {currentLang === 'ar' ? 'شفافية' : 'Transparency'}
            </span>
          </div>
        </Reveal>
      </div>

      <div className="bp-hero-bottom">
        <span>ENGINEERING · SERVICE · COMMUNITY</span>
        <span>{currentLang === 'ar' ? 'الأنظمة واللوائح / 01' : 'Systems & Regulations / 01'}</span>
      </div>
    </section>
  );
};

// Regulations Grid Section
interface Regulations {
  id: number;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  size: string;
  pages: number;
  downloadUrl: string;
  icon: React.ReactNode;
}

interface RegulationsGridSectionProps {
  currentLang: string;
  regulations: Regulations[];
}

export const RegulationsGridSection = ({ currentLang, regulations }: RegulationsGridSectionProps) => {
  return (
    <section id="regulations" className="bp-section bp-section--paper">
      <div className="bp-shell">
        <div className="mb-12">
          <span className="bp-eyebrow">
            01 / {currentLang === 'ar' ? 'الوثائق الرسمية' : 'OFFICIAL DOCUMENTS'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'اللوائح والأنظمة المعتمدة' : 'Official Regulations & Systems'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar'
              ? 'جميع الوثائق التشريعية والتنظيمية التي تحكم عمل الجمعية وتضمن الحوكمة والنزاهة المهنية.'
              : 'All legislative and regulatory documents governing Society operations and ensuring professional governance.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regulations.map((regulation, index) => (
            <motion.div
              key={regulation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bp-service-card bg-white border border-[var(--bse-line)] p-6 hover:border-[var(--bse-blue)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="bp-card-index pb-3 border-b border-[var(--bse-line)] mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[var(--bse-blue)]">
                    REG / {String(regulation.id).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded border border-[var(--bse-line)] font-mono text-[var(--bse-blue)] bg-[var(--bse-sky)]/70 font-bold">
                    {regulation.category}
                  </span>
                </div>

                <div className="bp-service-icon mb-4">
                  {regulation.icon}
                </div>

                <h3 className="text-lg font-bold text-[var(--bse-navy)] mb-2">
                  {regulation.title}
                </h3>
                <p className="text-[var(--bse-muted)] text-xs leading-relaxed mb-6">
                  {regulation.description}
                </p>

                <div className="bp-card-tags mb-6">
                  <span>{regulation.size}</span>
                  <span>{regulation.pages} {currentLang === 'ar' ? 'صفحة' : 'pages'}</span>
                  <span>{regulation.lastUpdated}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--bse-line)]">
                <a
                  href={regulation.downloadUrl}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[var(--bse-navy)] hover:bg-[var(--bse-blue)] text-white text-xs font-bold transition-colors shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>{currentLang === 'ar' ? 'تحميل الوثيقة PDF' : 'Download Document PDF'}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Procedures Section
interface Procedure {
  title: string;
  description: string;
  steps: string[];
}

interface ProceduresSectionProps {
  currentLang: string;
  procedures: Procedure[];
}

export const ProceduresSection = ({ currentLang, procedures }: ProceduresSectionProps) => {
  return (
    <section id="procedures" className="bp-section bp-section--white">
      <div className="bp-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="bp-eyebrow">
            02 / {currentLang === 'ar' ? 'مسارات العمل' : 'WORKFLOW & PROCEDURES'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'الإجراءات والعمليات المعتمدة' : 'Approved Procedures & Operations'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' 
              ? 'الخطوات والإرشادات الرسمية للتفاعل مع أنشطة وعضويات الجمعية بكل يسر وشفافية.'
              : 'Official guidelines and steps for engaging with Society activities and memberships transparently.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {procedures.map((procedure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bp-compare-card bg-[var(--bse-paper)] border border-[var(--bse-line)] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="bp-card-index pb-3 border-b border-[var(--bse-line)] mb-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--bse-blue)]">
                    STEP / 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-[var(--bse-muted)]">BSE SOP</span>
                </div>

                <div className="w-10 h-10 rounded bg-[var(--bse-sky)] border border-[var(--bse-line)] flex items-center justify-center text-[var(--bse-blue)] mb-4">
                  <CheckCircle className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-[var(--bse-navy)] mb-2">
                  {procedure.title}
                </h3>
                <p className="text-[var(--bse-muted)] text-xs leading-relaxed mb-6">
                  {procedure.description}
                </p>

                <div className="space-y-2.5">
                  {procedure.steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className="p-2.5 rounded bg-white border border-[var(--bse-line)] flex items-start gap-2.5 text-xs text-[var(--bse-ink)]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[var(--bse-sky)] text-[var(--bse-blue)] font-mono font-bold text-[10px] flex items-center justify-center flex-shrink-0 mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Important Notes Section
interface ImportantNotesSectionProps {
  currentLang: string;
}

export const ImportantNotesSection = ({ currentLang }: ImportantNotesSectionProps) => {
  const notes = [
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: currentLang === 'ar' ? 'التحديثات الدورية' : 'Regular Updates',
      code: 'NOTE / 01',
      description: currentLang === 'ar'
        ? 'يتم تحديث اللوائح والأنظمة بشكل دوري. يرجى مراجعة البوابة الإلكترونية بانتظام للحصول على أحدث الإصدارات المعتمدة.'
        : 'Regulations and systems are updated periodically. Please check the portal regularly for the latest approved editions.'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: currentLang === 'ar' ? 'الالتزام الإلزامي' : 'Mandatory Compliance',
      code: 'NOTE / 02',
      description: currentLang === 'ar'
        ? 'جميع الأعضاء والمنتسبين ملزمون بالامتثال للوائح الداخلية وقواعد السلوك المهني المعمول بها في الجمعية.'
        : 'All members and associates are required to comply with internal bylaws and professional code of conduct.'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: currentLang === 'ar' ? 'الإرشاد والتوجيه' : 'Guidance & Advice',
      code: 'NOTE / 03',
      description: currentLang === 'ar'
        ? 'للاستفسارات والمشورة القانونية والإدارية حول اللوائح، يرجى التواصل مع إدارة الجمعية خلال ساعات العمل الرسمية.'
        : 'For legal and administrative guidance regarding regulations, please contact Society administration during official hours.'
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: currentLang === 'ar' ? 'النسخ المعتمدة' : 'Official Copies',
      code: 'NOTE / 04',
      description: currentLang === 'ar'
        ? 'النسخ الورقية المودعة والمختومة في مقر الجمعية هي المرجع القانوني النهائي لأي إجراءات رسمية.'
        : 'Sealed hard copies deposited at Society headquarters serve as the ultimate legal reference for official proceedings.'
    }
  ];

  return (
    <section id="important-notes" className="bp-section bp-section--dark">
      <div className="bp-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="bp-eyebrow">
            03 / {currentLang === 'ar' ? 'الحوكمة والامتثال' : 'COMPLIANCE & GOVERNANCE'}
          </span>
          <h2 className="mt-3">
            {currentLang === 'ar' ? 'ملاحظات تنظيمية هامة' : 'Important Regulatory Notes'}
          </h2>
          <p className="bp-section-intro">
            {currentLang === 'ar' 
              ? 'معلومات أساسية حول تطبيق اللوائح والشفافية القانونية للمهندسين والأعضاء.'
              : 'Essential information regarding regulation application and legal transparency for engineers.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bp-service-card !bg-[var(--bse-navy)] !border-[var(--bse-line-dark)] text-white p-6"
            >
              <div className="bp-card-index text-[10px] font-mono text-[var(--bse-ring)] mb-3 pb-2 border-b border-[var(--bse-line-dark)] flex items-center justify-between">
                <span>{note.code}</span>
                <span>BSE LEGAL</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="bp-service-icon !bg-blue-500/20 !border-blue-400/30 !text-[var(--bse-blue-bright)] flex-shrink-0">
                  {note.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">{note.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed">{note.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
interface SystemsContactSectionProps {
  currentLang: string;
}

export const SystemsContactSection = ({ currentLang }: SystemsContactSectionProps) => {
  return (
    <section id="contact" className="bp-section bp-contact">
      <div className="bp-shell">
        <div className="bp-compare-card !bg-[var(--bse-navy-2)] !border-[var(--bse-line-dark)] text-white p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="bp-eyebrow text-xs">
              {currentLang === 'ar' ? 'الاستشارات التنظيمية' : 'REGULATORY INQUIRIES'}
            </span>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-white mt-2 mb-3">
              {currentLang === 'ar' ? 'هل لديك استفسار حول اللوائح والأنظمة؟' : 'Have questions about regulations?'}
            </h3>
            <p className="text-white/70 text-sm max-w-xl leading-relaxed">
              {currentLang === 'ar' 
                ? 'فريق الجمعية القانوني والتنفيذي متاح للإجابة على جميع تساؤلات المهندسين والأعضاء.'
                : 'The Society legal and executive team is available to answer all engineering and membership inquiries.'
              }
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:contact@bse.bh"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[var(--bse-blue)] hover:bg-[var(--bse-blue-bright)] text-white font-bold text-xs transition-colors shadow-md"
            >
              <span>{currentLang === 'ar' ? 'تواصل مع الإدارة' : 'Contact Administration'}</span>
            </a>
            <a 
              href="tel:+97317727100"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              <span>+973 1772 7100</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, Building2, CheckCircle, GraduationCap, Heart, Lightbulb, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutSealMotif from "@/components/about/AboutSealMotif";
import "@/styles/bse-blueprint.css";

interface MembershipCTASectionProps {
  currentLang: string;
}

const MembershipCTASection = ({ currentLang }: MembershipCTASectionProps) => {
  const isArabic = currentLang === "ar";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const memberServices = [
    {
      icon: Briefcase,
      title: isArabic ? "العضوية الاحترافية" : "Professional Membership",
      description: isArabic ? "احصل على اعتماد مهني معترف به عالمياً" : "Get internationally recognised professional accreditation",
      features: isArabic ? ["شهادة عضوية معتمدة", "فرص توظيف حصرية"] : ["Certified membership certificate", "Exclusive job opportunities"],
    },
    {
      icon: GraduationCap,
      title: isArabic ? "التعليم المستمر" : "Continuing Education",
      description: isArabic ? "برامج تعليمية متقدمة لتطوير مسيرتك المهنية" : "Advanced educational programmes to develop your career",
      features: isArabic ? ["ورش عمل متخصصة", "شهادات متقدمة"] : ["Specialised workshops", "Advanced certificates"],
    },
    {
      icon: Heart,
      title: isArabic ? "خدمات المجتمع" : "Community Services",
      description: isArabic ? "ساهم في تطوير المجتمع الهندسي" : "Contribute to developing the engineering community",
      features: isArabic ? ["برامج تطوعية", "إرشاد المهندسين الشباب"] : ["Volunteer programmes", "Mentoring young engineers"],
    },
    {
      icon: Lightbulb,
      title: isArabic ? "الاستشارات الهندسية" : "Engineering Consulting",
      description: isArabic ? "احصل على استشارات من خبراء المجال" : "Get consultations from field experts",
      features: isArabic ? ["استشارات فنية", "حلول مبتكرة"] : ["Technical consultations", "Innovative solutions"],
    },
    {
      icon: Building2,
      title: isArabic ? "التطوير المهني" : "Professional Development",
      description: isArabic ? "خطط تطوير مهنية مخصصة لك" : "Personalised professional development plans",
      features: isArabic ? ["تقييم المهارات", "إرشاد مهني"] : ["Skills assessment", "Career guidance"],
    },
    {
      icon: BookOpen,
      title: isArabic ? "المكتبة الرقمية" : "Digital Library",
      description: isArabic ? "وصول لمصادر المعرفة الهندسية" : "Access to engineering knowledge resources",
      features: isArabic ? ["مجلات علمية", "أبحاث ودراسات"] : ["Scientific journals", "Research and studies"],
    },
  ];

  return (
    <section className="bse-membership-blueprint py-20 lg:py-28">
      <AboutSealMotif tone="dark" size="membership" className="bse-membership-seal--large" />
      <AboutSealMotif tone="dark" size="compact" className="bse-membership-seal--small" />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div initial={false} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="bse-membership-copy text-white">
          <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/70">
            {isArabic ? "العضوية" : "Membership"}
          </span>
          <h2 className="mb-4 text-4xl font-bold leading-tight lg:text-6xl">
            {isArabic ? "ابدأ رحلتك الهندسية" : "Start your engineering journey"}
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            {isArabic ? "انضم إلى مجتمع المهندسين المحترفين في البحرين واحصل على فرص تطوير مهني وشبكة علاقات وموارد حصرية." : "Join Bahrain’s professional engineering community for career development, stronger networks and exclusive resources."}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild className="min-h-11 rounded-none bg-white px-7 font-bold text-[var(--bse-navy)] hover:bg-[var(--bse-sky)]">
              <a href="/contact">{isArabic ? "قدم الآن" : "Apply now"}<Arrow className="ms-2 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" className="min-h-11 rounded-none border-white/50 bg-transparent px-7 font-bold text-white hover:bg-white hover:text-[var(--bse-navy)]">
              <a href="/about-us">{isArabic ? "مزايا العضوية" : "Membership benefits"}</a>
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {memberServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-none border border-white/20 bg-[var(--bse-navy-2)]/80 p-5 transition-colors hover:border-[var(--bse-ring)]/70 hover:bg-[var(--bse-navy-2)]"
              >
                <div className="mb-4 flex items-start gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center border border-[var(--bse-ring)]/40 bg-[var(--bse-blue)]/25 text-[var(--bse-ring)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{service.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-blue-100/75">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-blue-100/80">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[var(--bse-ring)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MembershipCTASection;

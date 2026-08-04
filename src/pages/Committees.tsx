import { motion } from "framer-motion";
import { Users, Target, Award, UserCheck, Plus, ChevronRight, Briefcase, Building, FileText, CheckCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

interface CommitteeMember {
  name: string;
  position: string;
  image?: string;
}

interface Committee {
  id: string;
  name: string;
  description: string;
  objectives: string[];
  members: CommitteeMember[];
  memberCount: number;
  category: 'internal' | 'government' | 'member-affairs' | 'awards' | 'professional-affairs';
}

const Committees = () => {
  const { lang: currentLang } = useLanguage();
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', name: currentLang === 'ar' ? 'عرض الكل' : 'View All', icon: Users },
    { id: 'member-affairs', name: currentLang === 'ar' ? 'شؤون الأعضاء والمهنة' : 'Member Affairs', icon: UserCheck },
    { id: 'awards', name: currentLang === 'ar' ? 'جائزة جمعية المهندسين' : 'Awards', icon: Award },
    { id: 'professional-affairs', name: currentLang === 'ar' ? 'الشؤون المهنية' : 'Professional Affairs', icon: Briefcase },
    { id: 'internal', name: currentLang === 'ar' ? 'اللجان الداخلية' : 'Internal Committees', icon: Target },
    { id: 'government', name: currentLang === 'ar' ? 'اللجان الحكومية' : 'Government Committees', icon: Building }
  ];

  // Member Affairs and Profession Committees
  const memberAffairsCommittees: Committee[] = [
    {
      id: 'member-affairs-committee',
      name: 'لجنة شؤون الأعضاء والمهنة',
      description: 'لجنة متخصصة في متابعة شؤون الأعضاء وتطوير المهنة الهندسية',
      objectives: [
        'تطوير خدمات الأعضاء وزيادة الفوائد المقدمة لهم',
        'تعزيز المعايير المهنية وأخلاقيات المهنة',
        'دعم التطوير المهني المستمر للمهندسين',
        'تمثيل المهندسين في المحافل المهنية'
      ],
      members: [
        { name: 'م. عيسى جناحي', position: 'عضو' },
        { name: 'م. جعفر محمد علي', position: 'عضو' },
        { name: 'د. أسامة تقي البحارنة', position: 'عضو' },
        { name: 'م. جواد الجبل', position: 'عضو' },
        { name: 'م. شيخة سلطان الخلاصي', position: 'عضو' },
        { name: 'م. أحمد الخان', position: 'عضو' },
        { name: 'د. عدنان التميمي', position: 'عضو' },
        { name: 'د. وفاء المنصوري', position: 'عضو' },
        { name: 'م. محمد مبارك', position: 'عضو' }
      ],
      memberCount: 9,
      category: 'member-affairs'
    },
    {
      id: 'scholarships-committee',
      name: 'لجنة المنح',
      description: 'لجنة مسؤولة عن إدارة وتوزيع المنح الدراسية والمهنية',
      objectives: [
        'تقييم طلبات المنح الدراسية',
        'إدارة برامج الدعم المالي',
        'متابعة المتلقين للمنح',
        'تطوير شراكات مع الجهات المانحة'
      ],
      members: [
        { name: 'م. شيخة سلطان الخلاصي', position: 'عضو' },
        { name: 'د. عبد الإمام السماك', position: 'عضو' },
        { name: 'م. عامر علي بن رجب', position: 'عضو' },
        { name: 'م. سيد جميل خلف العلوي', position: 'عضو' },
        { name: 'م. مسعود الهرمي', position: 'عضو' },
        { name: 'م. أحمد الخان', position: 'عضو' }
      ],
      memberCount: 6,
      category: 'member-affairs'
    },
    {
      id: 'income-diversification',
      name: 'لجنة تنويع وتطوير مصادر الدخل',
      description: 'لجنة مهتمة بتطوير مصادر الدخل للجمعية',
      objectives: [
        'تطوير مصادر الدخل الجديدة',
        'الإشراف على الاستثمارات المالية',
        'ضمان الاستدامة المالية',
        'البحث عن شراكات استراتيجية'
      ],
      members: [
        { name: 'د. رائدة العلوي', position: 'عضو' },
        { name: 'م. هدى سلطان', position: 'عضو' },
        { name: 'د. ضياء توفيقي', position: 'عضو' },
        { name: 'م. مسعود الهرمي', position: 'عضو' },
        { name: 'م. محمد عبد الخالق', position: 'عضو' },
        { name: 'د. أسامة البحارنة', position: 'عضو' },
        { name: 'م. جواد الجبل', position: 'عضو' },
        { name: 'د. حميد عبدالله', position: 'عضو' }
      ],
      memberCount: 8,
      category: 'member-affairs'
    },
    {
      id: 'spending-rationalization',
      name: 'لجنة ترشيد الإنفاق',
      description: 'لجنة مسؤولة عن ترشيد الإنفاق في الجمعية',
      objectives: [
        'مراجعة المصاريف والتكاليف',
        'تحسين الكفاءة المالية',
        'تطوير سياسات الإنفاق',
        'ضمان الاستدامة المالية'
      ],
      members: [
        { name: 'م. هدى سلطان', position: 'عضو' },
        { name: 'م. شيخة الخلاصي', position: 'عضو' },
        { name: 'م. حبيب الجبوري', position: 'عضو' }
      ],
      memberCount: 3,
      category: 'member-affairs'
    }
  ];

  // Engineers Association Award Committees
  const awardsCommittees: Committee[] = [
    {
      id: 'award-supreme-committee',
      name: 'جائزة جمعية المهندسين البحرينية',
      description: 'اللجنة العليا المشرفة على جوائز جمعية المهندسين',
      objectives: [
        'وضع استراتيجية الجوائز',
        'الإشراف على جميع فئات الجوائز',
        'التنسيق مع الجهات الراعية',
        'تطوير معايير التقييم'
      ],
      members: [
        { name: 'م. أسامة البحارنة', position: 'الرئيس' },
        { name: 'د. رائدة العلوي', position: 'عضو' },
        { name: 'م. عفت رضا', position: 'عضو' },
        { name: 'م. عبدالنبي الصباح', position: 'عضو' },
        { name: 'د. عبدالإمام السماك', position: 'عضو' },
        { name: 'د. سهيل المصري', position: 'عضو' },
        { name: 'د. حميد عبدالله', position: 'عضو' }
      ],
      memberCount: 7,
      category: 'awards'
    },
    {
      id: 'distinguished-engineer-jury',
      name: 'هيئة تحكيم جائزة جمعية المهندسين البحرينية لفئة المهندس المتميز',
      description: 'هيئة تحكيم متخصصة في جائزة المهندس المتميز',
      objectives: [
        'تقييم إنجازات المهندسين المتميزين',
        'اختيار المهندس المتميز',
        'ضمان معايير الجودة',
        'تقديم التوصيات'
      ],
      members: [
        { name: 'م. محمد عبدالخالق', position: 'عضو' },
        { name: 'م. سيما اللنجاوي', position: 'عضو' },
        { name: 'م. عباس الوطني', position: 'عضو' },
        { name: 'م. صالح طراده', position: 'عضو' }
      ],
      memberCount: 4,
      category: 'awards'
    },
    {
      id: 'graduation-project-jury',
      name: 'هيئة تحكيم جائزة جمعية المهندسين البحرينية لفئة أفضل مشروع تخرج',
      description: 'هيئة تحكيم متخصصة في جائزة أفضل مشروع تخرج',
      objectives: [
        'تقييم مشاريع التخرج',
        'اختيار الفائزين بالجائزة',
        'ضمان معايير الجودة',
        'تقديم التوصيات'
      ],
      members: [
        { name: 'د. رائد أبو زياد', position: 'عضو' },
        { name: 'د. محمد المقدادي', position: 'عضو' },
        { name: 'د. عصمت كمشكي', position: 'عضو' },
        { name: 'م. عادل بن رجب', position: 'عضو' },
        { name: 'م. حسن التميمي', position: 'عضو' },
        { name: 'م. علي لاري', position: 'عضو' },
        { name: 'د. عادل عبدالله', position: 'عضو' },
        { name: 'م. علي كريمي', position: 'عضو' },
        { name: 'د. أحمد الوحوش', position: 'عضو' },
        { name: 'م. محمد العصفور', position: 'عضو' },
        { name: 'م. أحمد الفردان', position: 'عضو' },
        { name: 'م. عبدالحسين محسن', position: 'عضو' },
        { name: 'د. عبدالمجيد عبدالكريم', position: 'عضو' },
        { name: 'د. نجاة إسحاقي', position: 'عضو' },
        { name: 'م. ليلى جناحي', position: 'عضو' },
        { name: 'م. عيسى جناحي', position: 'عضو' },
        { name: 'م. سميح العلوي', position: 'عضو' }
      ],
      memberCount: 17,
      category: 'awards'
    }
  ];

  // Professional Affairs Committees
  const professionalAffairsCommittees: Committee[] = [
    {
      id: 'project-management-association',
      name: 'رابطة إدارة المشاريع',
      description: 'رابطة متخصصة في إدارة المشاريع وتطوير المعرفة المهنية',
      objectives: [
        'إعادة تفعيل دور الرابطة ضمن الجمعية',
        'خدمة المتخصصين في مجال إدارة المشاريع',
        'تنظيم المؤتمرات وورش العمل والفعاليات التخصصية',
        'مواكبة أحدث الممارسات العالمية'
      ],
      members: [
        { name: 'م. عبد المجيد القصاب', position: 'الرئيس' },
        { name: 'م. عبدالنبي الصباح', position: 'نائب الرئيس' },
        { name: 'م. مهدي الجلاوي', position: 'مقرر' }
      ],
      memberCount: 5,
      category: 'professional-affairs'
    },
    {
      id: 'arbitrators-experts-association',
      name: 'رابطة المحكمين والخبراء',
      description: 'رابطة متخصصة في التحكيم والخبرة الهندسية',
      objectives: [
        'تطوير مهارات التحكيم',
        'دعم المحكمين والخبراء',
        'وضع معايير الخبرة',
        'التنسيق مع الجهات القضائية'
      ],
      members: [
        { name: 'م. سعيد العسبول', position: 'الرئيس' },
        { name: 'م. رائد أبو زياد', position: 'المقرر' },
        { name: 'م. شهربان شريف', position: 'عضو إداري' },
        { name: 'م. هاني الخياط', position: 'عضو إداري' },
        { name: 'م. حسن الزبيل', position: 'عضو إداري' }
      ],
      memberCount: 5,
      category: 'professional-affairs'
    },
    {
      id: 'architecture-branch',
      name: 'شعبة الهندسة المعمارية والتخطيط العمراني',
      description: 'شعبة متخصصة في الهندسة المعمارية والتخطيط العمراني',
      objectives: [
        'تطوير التصاميم المعمارية',
        'دعم المهندسين المعماريين',
        'تعزيز الجمالية الحضرية',
        'تنظيم المسابقات المعمارية'
      ],
      members: [
        { name: 'م. حوراء المشيمع', position: 'الرئيس' },
        { name: 'م. إبراهيم عبدالأمير', position: 'نائب الرئيس' },
        { name: 'م. فواز القاسمي', position: 'أمين السر' },
        { name: 'م. مهدي الجلاوي', position: 'عضو إداري' },
        { name: 'م. علي لاري', position: 'عضو إداري' }
      ],
      memberCount: 5,
      category: 'professional-affairs'
    },
    {
      id: 'civil-environment-branch',
      name: 'شعبة الهندسة المدنية والبيئة',
      description: 'شعبة متخصصة في الهندسة المدنية والهندسة البيئية',
      objectives: [
        'تنظيم وإقامة محاضرات علمية تخص الهندسة المدنية والبيئة',
        'إقامة ورق عمل تدريبية للبرامج الهندسية',
        'زيارات مواقع المشاريع الهندسية',
        'استضافة محاضرين من مختلف فروع الهندسة المدنية'
      ],
      members: [
        { name: 'م. حسن عامر التميمي', position: 'الرئيس' },
        { name: 'م. نور محمد مخيمر', position: 'نائب الرئيس والمقرر' },
        { name: 'م. هاني الخياط', position: 'عضو إداري' },
        { name: 'م. محمود المناعي', position: 'عضو إداري' }
      ],
      memberCount: 6,
      category: 'professional-affairs'
    },
    {
      id: 'electrical-branch',
      name: 'شعبة الهندسة الإلكترونية والكهربائية والحاسوب الآلي',
      description: 'شعبة متخصصة في الهندسة الإلكترونية والكهربائية والحاسوب الآلي',
      objectives: [
        'تنظيم الفعاليات الكهربائية',
        'تطوير المعايير الفنية',
        'دعم المهندسين الكهربائيين',
        'نشر المعارف التقنية'
      ],
      members: [
        { name: 'م. أحمد الوحوش', position: 'الرئيس' },
        { name: 'م. يوسف المؤمن', position: 'مقرر' },
        { name: 'م. علي القطان', position: 'عضو إداري' },
        { name: 'م. حبيب الجبوري', position: 'عضو إداري' },
        { name: 'م. محمد مبارك', position: 'عضو إداري' }
      ],
      memberCount: 5,
      category: 'professional-affairs'
    },
    {
      id: 'speaking-club-branch',
      name: 'شعبة نادي الخطابة',
      description: 'شعبة متخصصة في تطوير مهارات الخطابة والتواصل',
      objectives: [
        'تطوير مهارات الخطابة',
        'تنظيم المسابقات الخطابية',
        'دعم التواصل الفعال',
        'بناء الثقة بالنفس'
      ],
      members: [
        { name: 'م. سميح العلوي', position: 'الرئيس' },
        { name: 'م. صالح طراده', position: 'عضو إداري' },
        { name: 'م. آلاء الصفار', position: 'عضو إداري' },
        { name: 'م. أحمد الفردان', position: 'عضو إداري' }
      ],
      memberCount: 4,
      category: 'professional-affairs'
    }
  ];

  const internalCommittees: Committee[] = [
    {
      id: 'conferences-advisory',
      name: 'اللجنة الاستشارية للمؤتمرات',
      description: 'لجنة استشارية لتنظيم المؤتمرات والفعاليات العلمية',
      objectives: [
        'تنظيم المؤتمرات العلمية والفنية',
        'استضافة الخبراء الدوليين',
        'نشر الأبحاث والدراسات العلمية',
        'تعزيز التعاون الأكاديمي والصناعي'
      ],
      members: [
        { name: 'م. عبد المجيد القصاب', position: 'الرئيس' },
        { name: 'د. رائدة العلوي', position: 'عضو' },
        { name: 'د. ضياء توفيقي', position: 'عضو' },
        { name: 'م. فريد بوشهري', position: 'عضو' },
        { name: 'م. جميل خلف العلوي', position: 'عضو' },
        { name: 'م. عبد النبي الصباح', position: 'عضو' },
        { name: 'م. عبد الله جناحي', position: 'عضو' },
        { name: 'م. حبيب جبوري', position: 'عضو' },
        { name: 'م. جواد الجبل', position: 'عضو' }
      ],
      memberCount: 9,
      category: 'internal'
    },
    {
      id: 'public-activities',
      name: 'لجنة الأنشطة العامة وخدمة المجتمع',
      description: 'لجنة مهتمة بالأنشطة العامة ومبادرات خدمة المجتمع',
      objectives: [
        'تنظيم الفعاليات العامة والمجتمعية',
        'تطوير برامج خدمة المجتمع',
        'تعزيز الوعي الهندسي في المجتمع',
        'دعم المبادرات الوطنية'
      ],
      members: [
        { name: 'م. علي القطان', position: 'الرئيس' },
        { name: 'م. حبيب الجبوري', position: 'عضو' },
        { name: 'م. شيخة الخلاصي', position: 'عضو' },
        { name: 'م. محمد مبارك', position: 'عضو' },
        { name: 'م. نور الصقر', position: 'عضو' },
        { name: 'م. حسن المؤمن', position: 'عضو' },
        { name: 'م. عبدالهادي العطار', position: 'عضو' },
        { name: 'م. مروه عبدالله النيرة', position: 'عضو' },
        { name: 'م. مرتضى هاني', position: 'عضو' },
        { name: 'م. سارة الماجد', position: 'عضو' },
        { name: 'م. ولاء حسن', position: 'عضو' },
        { name: 'م. علي سبت', position: 'عضو' },
        { name: 'م. آمنة خلفان', position: 'عضو' },
        { name: 'م. مهدي إبراهيم', position: 'عضو' },
        { name: 'م. ريم نعمة', position: 'عضو' },
        { name: 'م. شاكر عبد العزيز', position: 'عضو' },
        { name: 'م. زهرة سند', position: 'عضو' },
        { name: 'م. مطره دليم', position: 'عضو' },
        { name: 'م. نوف عطاوي', position: 'عضو' },
        { name: 'م. سيد مرتضى علوي', position: 'عضو' },
        { name: 'م. محمد العسبول', position: 'عضو' },
        { name: 'م. عمر سمير', position: 'عضو' },
        { name: 'م. علي محمد', position: 'عضو' },
        { name: 'م. علي جميل السباع', position: 'عضو' },
        { name: 'م. بدر النايف', position: 'عضو' },
        { name: 'م. قطر الندى', position: 'عضو' },
        { name: 'م. حوراء مشيمع', position: 'عضو' },
        { name: 'م. فاطمة الشيخ', position: 'عضو' },
        { name: 'م. دلال كامل', position: 'عضو' },
        { name: 'م. فاطمة جابري', position: 'عضو' },
        { name: 'م. علي نصر المحاري', position: 'عضو' },
        { name: 'م. مريم العبدلله', position: 'عضو' },
        { name: 'م. علي الخاجة', position: 'عضو' },
        { name: 'م. مريم الجزول', position: 'عضو' },
        { name: 'م. طلال جاسم', position: 'عضو' },
        { name: 'م. هيا الهرمي', position: 'عضو' }
      ],
      memberCount: 37,
      category: 'internal'
    },
    {
      id: 'interfaces',
      name: 'لجنة واجهات المباني',
      description: 'لجنة متخصصة في تصميم وتطوير واجهات المباني',
      objectives: [
        'وضع معايير تصميم الواجهات',
        'مراجعة التصاميم المعمارية',
        'تطوير المواد والتقنيات الحديثة',
        'تعزيز الجمالية الحضرية'
      ],
      members: [
        { name: 'م. علي لاري', position: 'عضو' }
      ],
      memberCount: 1,
      category: 'internal'
    },
    {
      id: 'sheikh-khaled-team',
      name: 'لجنة إعداد الكتاب التوثيقي لمعالي الشيخ خالد بن عبدالله آل خليفة',
      description: 'لجنة متخصصة في إعداد الكتاب التوثيقي',
      objectives: [
        'جمع وتوثيق السيرة الذاتية',
        'إعداد المحتوى التاريخي',
        'المراجعة والتحرير',
        'النشر والتوزيع'
      ],
      members: [
        { name: 'د. رائدة العلوي', position: 'عضو' },
        { name: 'م. جعفر محمد علي', position: 'عضو' },
        { name: 'م. سعيد عسبول', position: 'عضو' },
        { name: 'د. ضياء توفيقي', position: 'عضو' },
        { name: 'م. مسعود الهرمي', position: 'عضو' },
        { name: 'م. فائق منديل', position: 'عضو' },
        { name: 'د. حميد عبدالله', position: 'عضو' }
      ],
      memberCount: 7,
      category: 'internal'
    },
    {
      id: 'magazine-editorial',
      name: 'هيئة تحرير مجلة المهندس',
      description: 'هيئة تحرير مسؤولة عن مجلة المهندس',
      objectives: [
        'تحرير المحتوى العلمي',
        'مراجعة الأبحاث والمقالات',
        'تطوير المحتوى الرقمي',
        'نشر المجلة بانتظام'
      ],
      members: [
        { name: 'د. عيسى قمبر', position: 'الرئيس' },
        { name: 'م. خالد سلمان الشيخ', position: 'عضو' },
        { name: 'م. جعفر محمد علي', position: 'عضو' },
        { name: 'م. شيخة الخلاصي', position: 'عضو' },
        { name: 'م. أحمد الوحوش', position: 'عضو' },
        { name: 'م. إبراهيم علي البورشيد', position: 'عضو' },
        { name: 'م. أياء المحل', position: 'عضو' }
      ],
      memberCount: 7,
      category: 'internal'
    },
    {
      id: 'academic-exhibition-committee',
      name: 'اللجنة العليا للمعرض الدولي للدراسات الأكاديمية',
      description: 'اللجنة العليا المشرفة على المعرض الدولي للدراسات الأكاديمية',
      objectives: [
        'تنظيم المعرض الدولي',
        'عرض الدراسات الأكاديمية',
        'تشجيع البحث العلمي',
        'ربط الأكاديميا بالصناعة'
      ],
      members: [
        { name: 'م. هدى سلطان', position: 'الرئيس' },
        { name: 'م. شيخة الخلاصي', position: 'عضو' },
        { name: 'د. عدنان التميمي', position: 'عضو' },
        { name: 'د. رائدة العلوي', position: 'عضو' },
        { name: 'د. حميد عبدالله', position: 'عضو' },
        { name: 'د. عيسى قمبر', position: 'عضو' },
        { name: 'م. جعفر محمد علي', position: 'عضو' },
        { name: 'م. جميل خلف العلوي', position: 'عضو' },
        { name: 'م. ليلى جناحي', position: 'عضو' }
      ],
      memberCount: 9,
      category: 'internal'
    },
    {
      id: 'hpmp',
      name: 'لجنة HPMP',
      description: 'لجنة متخصصة في إدارة مشروع HPMP',
      objectives: [
        'إدارة مشروع HPMP',
        'متابعة التقدم',
        'ضمان الجودة',
        'التنسيق مع الجهات المعنية'
      ],
      members: [
        { name: 'د. حميد عبدالله', position: 'المدير التنفيذي' },
        { name: 'م. عبدالنبي الصباح', position: 'رئيس الفريق' }
      ],
      memberCount: 2,
      category: 'internal'
    },
    {
      id: 'conferences-volunteers',
      name: 'الأعضاء المتطوعين في لجنة المؤتمرات والمعارض',
      description: 'الأعضاء المتطوعين في لجنة المؤتمرات والمعارض',
      objectives: [
        'تنظيم المؤتمرات والمعارض',
        'التنسيق مع الجهات المختلفة',
        'دعم الفعاليات',
        'تطوير المهارات'
      ],
      members: [
        { name: 'د. رائدة العلوي', position: 'متطوع' },
        { name: 'م. فريد بوشهري', position: 'متطوع' },
        { name: 'م. عبدالمجيد القصاب', position: 'متطوع' },
        { name: 'م. جميل خلف العلوي', position: 'متطوع' },
        { name: 'م. عبد النبي الصباح', position: 'متطوع' },
        { name: 'م. هيام المسقطي', position: 'متطوع' },
        { name: 'م. عيسى جناحي', position: 'متطوع' },
        { name: 'م. جواد الجبل', position: 'متطوع' },
        { name: 'البروفيسور عيسى قمبر', position: 'متطوع' },
        { name: 'م. هدى سلطان', position: 'متطوع' },
        { name: 'م. جعفر محمد علي', position: 'متطوع' },
        { name: 'م. شيخة الخلاصي', position: 'متطوع' },
        { name: 'م. حبيب الجبوري', position: 'متطوع' },
        { name: 'م. بدر سالمين', position: 'متطوع' },
        { name: 'م. عبدالهادي العطار', position: 'متطوع' },
        { name: 'م. شاكر عبد العزيز', position: 'متطوع' },
        { name: 'م. علي جابر القطان', position: 'متطوع' },
        { name: 'م. محمد مبارك', position: 'متطوع' },
        { name: 'م. سارة الماجد', position: 'متطوع' },
        { name: 'م. نور الصقر', position: 'متطوع' },
        { name: 'م. أحمد الفردان', position: 'متطوع' },
        { name: 'م. ريم نعمة', position: 'متطوع' },
        { name: 'م. علي النسور', position: 'متطوع' },
        { name: 'م. مطره دليم', position: 'متطوع' },
        { name: 'م. محمد العسبول', position: 'متطوع' },
        { name: 'م. مرتضى هاني', position: 'متطوع' },
        { name: 'م. منى الوزان', position: 'متطوع' },
        { name: 'م. علي محمد علي', position: 'متطوع' },
        { name: 'م. آمنة خلفان', position: 'متطوع' },
        { name: 'م. بدر النايف', position: 'متطوع' },
        { name: 'م. ابراهيم عبد الامير', position: 'متطوع' },
        { name: 'م. حوراء مشيمع', position: 'متطوع' },
        { name: 'م. آياء المحل', position: 'متطوع' },
        { name: 'م. طلال خليفة', position: 'متطوع' },
        { name: 'م. فاطمة الشيخ', position: 'متطوع' },
        { name: 'م. دلال كامل', position: 'متطوع' },
        { name: 'م. فاطمة الياسي', position: 'متطوع' },
        { name: 'م. احمد العوضي', position: 'متطوع' },
        { name: 'م. سيد مرتضى علوي', position: 'متطوع' },
        { name: 'م. علي نصر المحاري', position: 'متطوع' },
        { name: 'م. ليلى رائد ابراهيم', position: 'متطوع' },
        { name: 'م. مريم العوضي', position: 'متطوع' },
        { name: 'م. مهدي ابراهيم', position: 'متطوع' },
        { name: 'م. علي الخاجة', position: 'متطوع' },
        { name: 'م. مريم الجزول', position: 'متطوع' }
      ],
      memberCount: 45,
      category: 'internal'
    },
    {
      id: 'academic-exhibition-volunteers',
      name: 'الأعضاء المتطوعين في المعرض الدولي للدراسات الأكاديمية',
      description: 'الأعضاء المتطوعين في المعرض الدولي للدراسات الأكاديمية',
      objectives: [
        'تنظيم المعرض الدولي',
        'استضافة الزوار',
        'دعم الفعاليات',
        'تطوير المهارات'
      ],
      members: [
        { name: 'م. شذى الوسواسي', position: 'متطوع' },
        { name: 'د. محمد بن شمس', position: 'متطوع' },
        { name: 'د. سلوى باصرة', position: 'متطوع' },
        { name: 'م. سيد مرتضى علوي', position: 'متطوع' },
        { name: 'م. دعاء اسماعيل', position: 'متطوع' },
        { name: 'م. سيد محمد الصفار', position: 'متطوع' },
        { name: 'م. شاكر عبد العزيز', position: 'متطوع' },
        { name: 'م. محمد مبارك', position: 'متطوع' },
        { name: 'م. فاطمة سيد نجاح', position: 'متطوع' },
        { name: 'م. علي نصر المحاري', position: 'متطوع' },
        { name: 'م. فيصل البنا', position: 'متطوع' },
        { name: 'م. محمد فاضل العسبول', position: 'متطوع' },
        { name: 'م. مروة عبدالله النيرة', position: 'متطوع' },
        { name: 'م. رمال بسام النعيمات', position: 'متطوع' },
        { name: 'م. مهدي الجلاوي', position: 'متطوع' },
        { name: 'م. ابراهيم يوسف', position: 'متطوع' },
        { name: 'م. علي محمد الخاجة', position: 'متطوع' },
        { name: 'م. يوسف سلمان المؤمن', position: 'متطوع' },
        { name: 'م. محمد مجيد الحداد', position: 'متطوع' },
        { name: 'م. نورة محمد العتيبي', position: 'متطوع' },
        { name: 'م. شذى الوسواسي', position: 'متطوع' },
        { name: 'م. بدر أحمد النايف', position: 'متطوع' },
        { name: 'م. احسان الحواج', position: 'متطوع' },
        { name: 'م. خليل المهيزع', position: 'متطوع' },
        { name: 'م. ريان ماهر', position: 'متطوع' }
      ],
      memberCount: 25,
      category: 'internal'
    }
  ];

  const governmentCommittees: Committee[] = [
    {
      id: 'official-participations',
      name: 'المشاركات في اللجان الرسمية',
      description: 'المشاركات الرسمية للجمعية في اللجان الحكومية والوطنية',
      objectives: [
        'تمثيل الجمعية في اللجان الحكومية',
        'المساهمة في صنع القرار',
        'تعزيز التعاون مع الجهات الرسمية',
        'رفع مستوى الخدمات الهندسية'
      ],
      members: [
        { name: 'م. هدى سلطان', position: 'المجلس الأعلى للمرأة' },
        { name: 'م. جواد الجبل', position: 'مجلس تنظيم مزاولة المهن الهندسية - مرشح الجمعية' },
        { name: 'د. عيسى قمبر', position: 'مجلس تنظيم مزاولة المهن الهندسية - مرشح الجمعية' },
        { name: 'م. إياد فيصل', position: 'لجنة التظلمات من قرارات تراخيص البناء' },
        { name: 'م. عامر بن رجب', position: 'لجنة التظلمات من قرارات التخطيط العمراني' },
        { name: 'م. عادل بن رجب', position: 'اللجنة الفنية المحلية لمواصفات التشييد ومواد البناء' },
        { name: 'م. عباس الوطني', position: 'لجنة التثمين' },
        { name: 'د. رائدة العلوي', position: 'لجنة الاستراتيجية الوطنية للتعليم العالي والبحث العلمي 2026-2035' },
        { name: 'د. رائدة العلوي', position: 'فريق العمل الحكومي المعني بالتنسيق وتبادل الخبرات في مجالات النقل والاتصالات' },
        { name: 'م. علي لاري', position: 'لجنة واجهات المباني' }
      ],
      memberCount: 10,
      category: 'government'
    },
    {
      id: 'temporary-committees',
      name: 'اللجان المؤقتة',
      description: 'اللجان المؤقتة التي تعمل على مشاريع محددة',
      objectives: [
        'تنفيذ المشاريع المؤقتة',
        'إعداد التقارير والتوصيات',
        'متابعة التنفيذ',
        'تقييم النتائج'
      ],
      members: [
        { name: 'م. سعيد عسبول', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - الرئيس' },
        { name: 'د. عيسى قمبر', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'د. مجيد عبدالكريم حبيب', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'د. محمد موسى مقدادي', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. مجيد القصاب', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. جلال الشروقي', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. عباس الوطني', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. عبدالنبي الصباح', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'د. سلمان شهاب', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. محمد عابدين', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. ريم العتيبي', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. أيمن ناصر', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. نور المطوع', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'م. رائد أبو زياد', position: 'فريق مراجعة المواصفات العامة لوزارة الأشغال - عضو' },
        { name: 'د. رائدة العلوي', position: 'لجنة إعداد الكتاب التوثيقي لمعالي الشيخ خالد بن عبدالله آل خليفة - عضو' },
        { name: 'م. جعفر محمد علي', position: 'لجنة إعداد الكتاب التوثيقي لمعالي الشيخ خالد بن عبدالله آل خليفة - عضو' },
        { name: 'م. سعيد عسبول', position: 'لجنة إعداد الكتاب التوثيقي لمعالي الشيخ خالد بن عبدالله آل خليفة - عضو' },
        { name: 'د. ضياء توفيقي', position: 'لجنة إعداد الكتاب التوثيقي لمعالي الشيخ خالد بن عبدالله آل خليفة - عضو' },
        { name: 'م. مسعود الهرمي', position: 'لجنة إعداد الكتاب التوثيقي لمعالي الشيخ خالد بن عبدالله آل خليفة - عضو' },
        { name: 'م. فائق منديل', position: 'لجنة إعداد الكتاب التوثيقي لمعالي الشيخ خالد بن عبدالله آل خليفة - عضو' },
        { name: 'د. حميد عبدالله', position: 'لجنة إعداد الكتاب التوثيقي لمعالي الشيخ خالد بن عبدالله آل خليفة - عضو' }
      ],
      memberCount: 21,
      category: 'government'
    },
    {
      id: 'training-board',
      name: 'مجلس أمناء مركز التدريب',
      description: 'مجلس أمناء مسؤول عن الإشراف على مركز التدريب',
      objectives: [
        'وضع استراتيجية مركز التدريب',
        'الإشراف على البرامج التدريبية',
        'تطوير الشراكات',
        'ضمان الجودة'
      ],
      members: [
        { name: 'د. رائدة العلوي', position: 'الرئيس' },
        { name: 'م. هيام المسقطي', position: 'الأمين المالي' },
        { name: 'م. علي عاشور', position: 'ممثلاً عن هيئة الكهرباء والماء' },
        { name: 'م. شيخة الأحمد', position: 'ممثلاً عن شركة نفط البحرين – بابكو إنرجيز' },
        { name: 'د. أحمد بوجيري', position: 'ممثلاً عن شركة الخليج لصناعة البتروكيماويات جيبك' },
        { name: 'السيدة دلال العريض', position: 'ممثلاً عن وزارة الأشغال' },
        { name: 'م. عبدالإله القاسمي', position: 'عضو جمعية المهندسين البحرينية' },
        { name: 'د. عيسى قمبر', position: 'عضو جمعية المهندسين البحرينية' },
        { name: 'د. حميد عبدالله', position: 'المدير التنفيذي' }
      ],
      memberCount: 9,
      category: 'government'
    }
  ];

  const sections = [
    {
      id: 'member-affairs',
      name: currentLang === 'ar' ? 'لجنة شؤون الأعضاء والمهنة' : 'Member Affairs and Profession',
      description: currentLang === 'ar' ? 'اللجان المتخصصة في شؤون الأعضاء وتطوير المهنة الهندسية' : 'Committees specialized in member affairs and engineering profession development',
      committees: memberAffairsCommittees,
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: UserCheck
    },
    {
      id: 'awards',
      name: currentLang === 'ar' ? 'جائزة جمعية المهندسين' : 'BSE Awards',
      description: currentLang === 'ar' ? 'اللجان وهيئات التحكيم المتخصصة في جوائز جمعية المهندسين' : 'Committees and juries specialized in BSE awards',
      committees: awardsCommittees,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: Award
    },
    {
      id: 'professional-affairs',
      name: currentLang === 'ar' ? 'الشؤون المهنية' : 'Professional Affairs',
      description: currentLang === 'ar' ? 'اللجان والشعب والروابط المتخصصة في الشؤون المهنية' : 'Committees, branches, and associations specialized in professional affairs',
      committees: professionalAffairsCommittees,
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      icon: Briefcase
    },
    {
      id: 'internal',
      name: currentLang === 'ar' ? 'اللجان الداخلية' : 'Internal Committees',
      description: currentLang === 'ar' ? 'اللجان الداخلية التي تعمل على تطوير الجمعية وخدمة الأعضاء' : 'Internal committees working on developing the association and serving members',
      committees: internalCommittees,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: Target
    },
    {
      id: 'government',
      name: currentLang === 'ar' ? 'اللجان والفرق العمل في الجهات الرسمية' : 'Government Committees',
      description: currentLang === 'ar' ? 'اللجان والفرق العاملة بالتعاون مع الجهات الحكومية والرسمية' : 'Committees and teams working in cooperation with government and official bodies',
      committees: governmentCommittees,
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      icon: Building
    }
  ];

  const allCommittees = [...memberAffairsCommittees, ...awardsCommittees, ...professionalAffairsCommittees, ...internalCommittees, ...governmentCommittees];

  const getFilteredCommittees = () => {
    if (activeTab === 'all') {
      return allCommittees;
    }
    
    switch (activeTab) {
      case 'member-affairs':
        return memberAffairsCommittees;
      case 'awards':
        return awardsCommittees;
      case 'professional-affairs':
        return professionalAffairsCommittees;
      case 'internal':
        return internalCommittees;
      case 'government':
        return governmentCommittees;
      default:
        return allCommittees;
    }
  };

  const getTabColor = (tabId: string) => {
    switch (tabId) {
      case 'member-affairs':
        return 'purple';
      case 'awards':
        return 'yellow';
      case 'professional-affairs':
        return 'indigo';
      case 'internal':
        return 'blue';
      case 'government':
        return 'green';
      default:
        return 'blue';
    }
  };

  const handleJoinCommittee = (committee: Committee) => {
    setSelectedCommittee(committee);
    setShowJoinForm(true);
  };

  const handleSubmitJoinForm = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(currentLang === 'ar' ? 'تم إرسال طلب الانضمام بنجاح! سيتم التواصل معك قريباً.' : 'Your join request has been submitted successfully! We will contact you soon.');
    setShowJoinForm(false);
    setSelectedCommittee(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {currentLang === 'ar' ? 'لجان الجمعية' : 'Association Committees'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {currentLang === 'ar' 
                ? 'اكتشف اللجان المتنوعة في جمعية المهندسين البحرينية وشارك في تطوير القطاع الهندسي'
                : 'Discover the various committees of the Bahrain Society of Engineers and participate in developing the engineering sector'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 space-x-reverse overflow-x-auto py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const color = getTabColor(tab.id);
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? `bg-${color}-100 text-${color}-700 border-${color}-200 border`
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 ml-2" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dynamic Content Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {activeTab === 'all' 
                ? (currentLang === 'ar' ? 'جميع اللجان' : 'All Committees')
                : tabs.find(tab => tab.id === activeTab)?.name || (currentLang === 'ar' ? 'اللجان' : 'Committees')
              }
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {activeTab === 'all' 
                ? (currentLang === 'ar' ? 'استعرض جميع لجان الجمعية المتنوعة منظمة حسب الأقسام' : 'Browse all the various committees of the association organized by sections')
                : (currentLang === 'ar' ? 'اللجان المتخصصة في هذا القسم' : 'Committees specialized in this section')
              }
            </p>
          </div>

          {activeTab === 'all' ? (
            // Show All - Display sections with names and descriptions
            <div className="space-y-12">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                  className={`${section.bgColor} rounded-2xl p-8 border ${section.borderColor}`}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-${section.color}-100 rounded-2xl flex items-center justify-center ml-4`}>
                      <section.icon className={`w-8 h-8 text-${section.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{section.name}</h3>
                      <p className="text-slate-600">{section.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.committees.map((committee, index) => (
                      <motion.div
                        key={committee.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 bg-${section.color}-100 rounded-lg flex items-center justify-center`}>
                            <Users className={`w-5 h-5 text-${section.color}-600`} />
                          </div>
                          <span className="text-xs text-slate-500">{committee.memberCount} {currentLang === 'ar' ? 'عضو' : 'members'}</span>
                        </div>

                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{committee.name}</h4>
                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{committee.description}</p>

                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setSelectedCommittee(committee)}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                          >
                            {currentLang === 'ar' ? 'تفاصيل' : 'Details'}
                            <ChevronRight className={`w-3 h-3 ${currentLang === 'ar' ? 'mr-1' : 'ml-1'}`} />
                          </button>
                          <button
                            onClick={() => handleJoinCommittee(committee)}
                            className={`bg-${section.color}-600 hover:bg-${section.color}-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors`}
                          >
                            {currentLang === 'ar' ? 'انضمام' : 'Join'}
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            // Individual Tab - Show filtered committees
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredCommittees().map((committee, index) => {
                const color = getTabColor(committee.category);
                
                return (
                  <motion.div
                    key={committee.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center`}>
                          {color === 'purple' && <Users className="w-6 h-6 text-purple-600" />}
                          {color === 'yellow' && <Award className="w-6 h-6 text-yellow-600" />}
                          {color === 'indigo' && <Briefcase className="w-6 h-6 text-indigo-600" />}
                          {color === 'blue' && <Target className="w-6 h-6 text-blue-600" />}
                          {color === 'green' && <Building className="w-6 h-6 text-green-600" />}
                        </div>
                        <span className="text-sm text-slate-500">{committee.memberCount} {currentLang === 'ar' ? 'عضو' : 'members'}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2">{committee.name}</h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">{committee.description}</p>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setSelectedCommittee(committee)}
                          className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                        >
                          {currentLang === 'ar' ? 'تفاصيل أكثر' : 'More Details'}
                          <ChevronRight className={`w-4 h-4 ${currentLang === 'ar' ? 'mr-1' : 'ml-1'}`} />
                        </button>
                        <button
                          onClick={() => handleJoinCommittee(committee)}
                          className={`bg-${color}-600 hover:bg-${color}-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
                        >
                          {currentLang === 'ar' ? 'طلب الانضمام' : 'Request to Join'}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

          {getFilteredCommittees().length === 0 && activeTab !== 'all' && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {currentLang === 'ar' ? 'لا توجد لجان حالياً' : 'No committees currently'}
              </h3>
              <p className="text-slate-600">
                {currentLang === 'ar' ? 'سيتم إضافة اللجان لهذا القسم قريباً' : 'Committees will be added to this section soon'}
              </p>
            </div>
          )}
        </motion.section>
      </div>

      {/* Committee Details Modal */}
      {selectedCommittee && !showJoinForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCommittee(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-slate-900">{selectedCommittee.name}</h2>
                <button
                  onClick={() => setSelectedCommittee(null)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <Plus className="w-6 h-6 rotate-45" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                      <FileText className={`w-5 h-5 ${currentLang === 'ar' ? 'mr-2' : 'ml-2'} text-blue-600`} />
                      {currentLang === 'ar' ? 'وصف اللجنة' : 'Committee Description'}
                    </h3>
                    <p className="text-slate-600">{selectedCommittee.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                      <Target className={`w-5 h-5 ${currentLang === 'ar' ? 'mr-2' : 'ml-2'} text-blue-600`} />
                      {currentLang === 'ar' ? 'أهداف اللجنة' : 'Committee Objectives'}
                    </h3>
                    <ul className="space-y-2">
                      {selectedCommittee.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className={`w-4 h-4 text-green-500 ${currentLang === 'ar' ? 'mr-2' : 'ml-2'} mt-1 flex-shrink-0`} />
                          <span className="text-slate-600">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                      <UserCheck className={`w-5 h-5 ${currentLang === 'ar' ? 'mr-2' : 'ml-2'} text-blue-600`} />
                      {currentLang === 'ar' ? 'أعضاء إدارة اللجنة' : 'Committee Management Members'}
                    </h3>
                    <div className="space-y-3">
                      {selectedCommittee.members.map((member, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                          <div>
                            <p className="font-medium text-slate-900">{member.name}</p>
                            <p className="text-sm text-slate-600">{member.position}</p>
                          </div>
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                      <Award className={`w-5 h-5 ${currentLang === 'ar' ? 'mr-2' : 'ml-2'} text-blue-600`} />
                      {currentLang === 'ar' ? 'عدد الأعضاء المنظمين' : 'Total Members'}
                    </h3>
                    <div className="text-3xl font-bold text-blue-600">{selectedCommittee.memberCount}</div>
                    <p className="text-slate-600">{currentLang === 'ar' ? 'عضو منظم' : 'organized members'}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => handleJoinCommittee(selectedCommittee)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <Plus className={`w-5 h-5 ${currentLang === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {currentLang === 'ar' ? 'طلب الانضمام للجنة' : 'Request to Join Committee'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Join Form Modal */}
      {showJoinForm && selectedCommittee && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowJoinForm(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  {currentLang === 'ar' ? 'طلب الانضمام للجنة' : 'Request to Join Committee'}
                </h2>
                <button
                  onClick={() => setShowJoinForm(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <Plus className="w-6 h-6 rotate-45" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900">{currentLang === 'ar' ? 'اللجنة:' : 'Committee:'}</p>
                <p className="text-lg font-semibold text-blue-900">{selectedCommittee.name}</p>
              </div>

              <form onSubmit={handleSubmitJoinForm} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {currentLang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={currentLang === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {currentLang === 'ar' ? 'رقم العضوية *' : 'Membership Number *'}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={currentLang === 'ar' ? 'أدخل رقم عضويتك' : 'Enter your membership number'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {currentLang === 'ar' ? 'البريد الإلكتروني *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={currentLang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {currentLang === 'ar' ? 'رقم الهاتف *' : 'Phone Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={currentLang === 'ar' ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {currentLang === 'ar' ? 'التخصص الهندسي *' : 'Engineering Specialization *'}
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">{currentLang === 'ar' ? 'اختر تخصصك' : 'Select your specialization'}</option>
                    <option value="civil">{currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering'}</option>
                    <option value="electrical">{currentLang === 'ar' ? 'هندسة كهربائية' : 'Electrical Engineering'}</option>
                    <option value="mechanical">{currentLang === 'ar' ? 'هندسة ميكانيكية' : 'Mechanical Engineering'}</option>
                    <option value="chemical">{currentLang === 'ar' ? 'هندسة كيميائية' : 'Chemical Engineering'}</option>
                    <option value="architectural">{currentLang === 'ar' ? 'هندسة معمارية' : 'Architectural Engineering'}</option>
                    <option value="other">{currentLang === 'ar' ? 'أخرى' : 'Other'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {currentLang === 'ar' ? 'سبب الرغبة في الانضمام *' : 'Reason for Joining *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={currentLang === 'ar' ? 'اذكر سبب رغبتك في الانضمام لهذه اللجنة' : 'Mention your reason for joining this committee'}
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label className={`${currentLang === 'ar' ? 'mr-2' : 'ml-2'} text-sm text-slate-700`}>
                    {currentLang === 'ar' ? 'أوافق على الشروط والأحكام وأتعهد بالالتزام بمهام اللجنة' : 'I agree to the terms and conditions and commit to fulfilling committee duties'}
                  </label>
                </div>

                <div className="flex justify-end space-x-4 space-x-reverse">
                  <button
                    type="button"
                    onClick={() => setShowJoinForm(false)}
                    className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    {currentLang === 'ar' ? 'إلغاء' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    {currentLang === 'ar' ? 'إرسال الطلب' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      <Footer />
    </div>
  );
};

export default Committees;

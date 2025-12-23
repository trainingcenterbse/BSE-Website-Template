import { motion } from "framer-motion";
import { Users, Target, Award, UserCheck, Plus, ChevronRight, Briefcase, Building, FileText, CheckCircle, Mail, Phone } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', name: 'عرض الكل', icon: Users },
    { id: 'member-affairs', name: 'شؤون الأعضاء والمهنة', icon: UserCheck },
    { id: 'awards', name: 'جائزة جمعية المهندسين', icon: Award },
    { id: 'professional-affairs', name: 'الشؤون المهنية', icon: Briefcase },
    { id: 'internal', name: 'اللجان الداخلية', icon: Target },
    { id: 'government', name: 'اللجان الحكومية', icon: Building }
  ];

  // Member Affairs and Profession Committees
  const memberAffairsCommittees: Committee[] = [
    {
      id: 'member-affairs-committee',
      name: 'لجنة شؤون الأعضاء',
      description: 'لجنة متخصصة في إدارة شؤون الأعضاء وتقديم الدعم لهم',
      objectives: [
        'معالجة طلبات العضوية الجديدة',
        'تجديد العضويات وتحديث البيانات',
        'حل المشكلات والاستفسارات',
        'تحسين تجربة الأعضاء'
      ],
      members: [
        { name: 'د. أحمد محمد علي', position: 'الرئيس' },
        { name: 'سارة خالد أحمد', position: 'نائبة الرئيس' },
        { name: 'خالد حسن محمد', position: 'أمين السر' }
      ],
      memberCount: 12,
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
        { name: 'أ. فاطمة علي حسن', position: 'رئيسة اللجنة' },
        { name: 'محمد إبراهيم سالم', position: 'نائب الرئيس' },
        { name: 'مريم أحمد خالد', position: 'أمينة السر' }
      ],
      memberCount: 8,
      category: 'member-affairs'
    },
    {
      id: 'rewards-benefits-committee',
      name: 'لجنة الروتويج والمزايا',
      description: 'لجنة مهتمة بتطوير وإدارة المزايا والحوافز للأعضاء',
      objectives: [
        'تطوير برامج المزايا',
        'التفاوض مع الشركاء',
        'إدارة الخصومات والحوافز',
        'تقييم رضا الأعضاء'
      ],
      members: [
        { name: 'د. خالد محمد سالم', position: 'الرئيس' },
        { name: 'نورة حسن علي', position: 'نائبة الرئيس' },
        { name: 'علي أحمد إبراهيم', position: 'أمين السر' }
      ],
      memberCount: 10,
      category: 'member-affairs'
    }
  ];

  // Engineers Association Award Committees
  const awardsCommittees: Committee[] = [
    {
      id: 'award-supreme-committee',
      name: 'اللجنة العليا لجائزة جمعية المهندسين البحرينية',
      description: 'اللجنة العليا المشرفة على جوائز جمعية المهندسين',
      objectives: [
        'وضع استراتيجية الجوائز',
        'الإشراف على جميع فئات الجوائز',
        'التنسيق مع الجهات الراعية',
        'تطوير معايير التقييم'
      ],
      members: [
        { name: 'د. إبراهيم حسن أحمد', position: 'رئيس اللجنة العليا' },
        { name: 'أ. مريم خالد علي', position: 'نائبة الرئيس' },
        { name: 'علي محمد سالم', position: 'أمين السر' }
      ],
      memberCount: 15,
      category: 'awards'
    },
    {
      id: 'mashari-graduation-jury',
      name: 'هيئة التحكيم لفئة جائزة مشاري العليا للتخرج',
      description: 'هيئة تحكيم متخصصة في جائزة مشاري العليا للتخرج',
      objectives: [
        'تقييم مشاريع التخرج',
        'اختيار الفائزين بالجائزة',
        'ضمان معايير الجودة',
        'تقديم التوصيات'
      ],
      members: [
        { name: 'أ. حسن علي محمد', position: 'رئيس الهيئة' },
        { name: 'د. فاطمة سالم أحمد', position: 'نائبة الرئيس' },
        { name: 'خالد إبراهيم حسن', position: 'عضو الهيئة' }
      ],
      memberCount: 7,
      category: 'awards'
    },
    {
      id: 'young-engineer-jury-experienced',
      name: 'هيئة التحكيم لفئة المهندس الشاب - فئة المهندس المتمرس',
      description: 'هيئة تحكيم لفئة المهندس المتمرس ضمن جائزة المهندس الشاب',
      objectives: [
        'تقييم إنجازات المهندسين المتمرسين',
        'اختيار المهندس المتمرس المتميز',
        'ضمان المعايير المهنية',
        'تقديم التوصيات للتطوير'
      ],
      members: [
        { name: 'د. محمد أحمد خالد', position: 'رئيس الهيئة' },
        { name: 'أ. سارة علي حسن', position: 'نائبة الرئيس' },
        { name: 'أحمد سالم إبراهيم', position: 'عضو الهيئة' }
      ],
      memberCount: 6,
      category: 'awards'
    },
    {
      id: 'young-engineer-jury-young',
      name: 'هيئة التحكيم لفئة المهندس الشاب - فئة المهندس الشاب',
      description: 'هيئة تحكيم لفئة المهندس الشاب ضمن جائزة المهندس الشاب',
      objectives: [
        'تقييم إنجازات المهندسين الشباب',
        'اختيار المهندس الشاب المتميز',
        'دعم المواهب الناشئة',
        'تشجيع الابتكار والإبداع'
      ],
      members: [
        { name: 'أ. علي محمد حسن', position: 'رئيس الهيئة' },
        { name: 'د. مريم خالد سالم', position: 'نائبة الرئيس' },
        { name: 'خالد أحمد إبراهيم', position: 'عضو الهيئة' }
      ],
      memberCount: 6,
      category: 'awards'
    }
  ];

  // Professional Affairs Committees
  const professionalAffairsCommittees: Committee[] = [
    {
      id: 'academic-exhibition-committee',
      name: 'اللجنة العليا للمعرض الدائم للدراسات الأكاديمية',
      description: 'اللجنة العليا المشرفة على المعرض الدائم للدراسات الأكاديمية',
      objectives: [
        'تنظيم المعرض الدائم',
        'عرض الدراسات الأكاديمية',
        'تشجيع البحث العلمي',
        'ربط الأكاديميا بالصناعة'
      ],
      members: [
        { name: 'د. فاطمة محمد علي', position: 'رئيسة اللجنة' },
        { name: 'أ. أحمد حسن خالد', position: 'نائب الرئيس' },
        { name: 'سارة إبراهيم سالم', position: 'أمينة السر' }
      ],
      memberCount: 11,
      category: 'professional-affairs'
    },
    {
      id: 'electrical-branch',
      name: 'شعبة الهندسة الكهربائية',
      description: 'شعبة متخصصة في الهندسة الكهربائية وتطبيقاتها',
      objectives: [
        'تنظيم الفعاليات الكهربائية',
        'تطوير المعايير الفنية',
        'دعم المهندسين الكهربائيين',
        'نشر المعارف التقنية'
      ],
      members: [
        { name: 'أ. محمد سالم أحمد', position: 'رئيس الشعبة' },
        { name: 'د. فاطمة علي حسن', position: 'نائبة الرئيس' },
        { name: 'خالد حسن إبراهيم', position: 'أمين السر' }
      ],
      memberCount: 25,
      category: 'professional-affairs'
    },
    {
      id: 'civil-environment-branch',
      name: 'شعبة الهندسة المدنية والبيئة',
      description: 'شعبة متخصصة في الهندسة المدنية والهندسة البيئية',
      objectives: [
        'تطوير ممارسات البناء المستدام',
        'دعم المهندسين المدنيين',
        'تعزيز الوعي البيئي',
        'تنظيم الفعاليات المتخصصة'
      ],
      members: [
        { name: 'أ. إبراهيم محمد علي', position: 'رئيس الشعبة' },
        { name: 'د. مريم أحمد خالد', position: 'نائبة الرئيس' },
        { name: 'علي حسن سالم', position: 'أمين السر' }
      ],
      memberCount: 30,
      category: 'professional-affairs'
    },
    {
      id: 'architecture-branch',
      name: 'شعبة الهندسة المعمارية',
      description: 'شعبة متخصصة في الهندسة المعمارية والتصميم',
      objectives: [
        'تطوير التصاميم المعمارية',
        'دعم المهندسين المعماريين',
        'تعزيز الجمالية الحضرية',
        'تنظيم المسابقات المعمارية'
      ],
      members: [
        { name: 'د. حسن علي محمد', position: 'رئيس الشعبة' },
        { name: 'أ. سارة خالد أحمد', position: 'نائبة الرئيس' },
        { name: 'محمد إبراهيم حسن', position: 'أمين السر' }
      ],
      memberCount: 22,
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
        { name: 'أ. خالد محمد سالم', position: 'رئيس الرابطة' },
        { name: 'د. فاطمة حسن علي', position: 'نائبة الرئيس' },
        { name: 'أحمد علي إبراهيم', position: 'أمين السر' }
      ],
      memberCount: 18,
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
        { name: 'د. مريم محمد أحمد', position: 'رئيسة الشعبة' },
        { name: 'أ. سارة حسن خالد', position: 'نائبة الرئيس' },
        { name: 'فاطمة علي إبراهيم', position: 'أمينة السر' }
      ],
      memberCount: 15,
      category: 'professional-affairs'
    }
  ];

  const internalCommittees: Committee[] = [
    {
      id: 'member-affairs',
      name: 'لجنة شؤون الأعضاء والمهنة',
      description: 'لجنة متخصصة في متابعة شؤون الأعضاء وتطوير المهنة الهندسية',
      objectives: [
        'تطوير خدمات الأعضاء وزيادة الفوائد المقدمة لهم',
        'تعزيز المعايير المهنية وأخلاقيات المهنة',
        'دعم التطوير المهني المستمر للمهندسين',
        'تمثيل المهندسين في المحافل المهنية'
      ],
      members: [
        { name: 'د. أحمد محمد علي', position: 'الرئيس' },
        { name: 'سارة خالد أحمد', position: 'نائب الرئيس' },
        { name: 'خالد حسن محمد', position: 'أمين السر' }
      ],
      memberCount: 15,
      category: 'internal'
    },
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
        { name: 'أ. محمد سالم أحمد', position: 'الرئيس' },
        { name: 'د. فاطمة علي حسن', position: 'نائبة الرئيس' },
        { name: 'عبدالله خالد إبراهيم', position: 'أمين السر' }
      ],
      memberCount: 12,
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
        { name: 'أ. نورة محمد سعيد', position: 'الرئيسة' },
        { name: 'حسن علي خالد', position: 'نائب الرئيس' },
        { name: 'مريم أحمد عبدالله', position: 'أمينة السر' }
      ],
      memberCount: 18,
      category: 'internal'
    },
    {
      id: 'media',
      name: 'لجنة الإعلام',
      description: 'لجنة مسؤولة عن التواصل الإعلامي والتسويق',
      objectives: [
        'تطوير الاستراتيجيات الإعلامية',
        'إدارة وسائل التواصل الاجتماعي',
        'نشر أخبار الجمعية وإنجازاتها',
        'تعزيز صورة الجمعية الإعلامية'
      ],
      members: [
        { name: 'أ. خالد محمد سالم', position: 'الرئيس' },
        { name: 'سارة حسن علي', position: 'نائبة الرئيس' },
        { name: 'أحمد إبراهيم محمد', position: 'أمين السر' }
      ],
      memberCount: 10,
      category: 'internal'
    },
    {
      id: 'financial',
      name: 'اللجنة المالية وتطوير مصادر الدخل',
      description: 'لجنة متخصصة في الشؤون المالية وتطوير المصادر',
      objectives: [
        'إدارة الميزانية السنوية',
        'تطوير مصادر الدخل الجديدة',
        'الإشراف على الاستثمارات المالية',
        'ضمان الاستدامة المالية'
      ],
      members: [
        { name: 'د. إبراهيم حسن أحمد', position: 'الرئيس' },
        { name: 'مريم خالد علي', position: 'نائبة الرئيس' },
        { name: 'علي محمد سالم', position: 'أمين السر' }
      ],
      memberCount: 8,
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
        { name: 'أ. حسن علي محمد', position: 'الرئيس' },
        { name: 'فاطمة سالم أحمد', position: 'نائبة الرئيس' },
        { name: 'خالد إبراهيم حسن', position: 'أمين السر' }
      ],
      memberCount: 14,
      category: 'internal'
    },
    {
      id: 'maritime-logo-jury',
      name: 'هيئة تحكيم مسابقة تصميم شعار يوم المهندس البحري',
      description: 'هيئة تحكيم متخصصة في مسابقة تصميم الشعار',
      objectives: [
        'تقييم المشاركات في المسابقة',
        'اختيار التصميم الفائز',
        'ضمان معايير الجودة والإبداع',
        'الإشراف على عملية التحكيم'
      ],
      members: [
        { name: 'د. محمد أحمد خالد', position: 'رئيس الهيئة' },
        { name: 'سارة علي حسن', position: 'عضو الهيئة' },
        { name: 'أحمد سالم إبراهيم', position: 'عضو الهيئة' }
      ],
      memberCount: 7,
      category: 'internal'
    },
    {
      id: 'sheikh-khaled-team',
      name: 'فريق عمل إعداد الكتاب التوثيقي للشيخ خالد بن عبدالله آل خليفة',
      description: 'فريق عمل متخصص في إعداد الكتاب التوثيقي',
      objectives: [
        'جمع وتوثيق السيرة الذاتية',
        'إعداد المحتوى التاريخي',
        'المراجعة والتحرير',
        'النشر والتوزيع'
      ],
      members: [
        { name: 'أ. علي محمد حسن', position: 'رئيس الفريق' },
        { name: 'مريم خالد سالم', position: 'منسقة الفريق' },
        { name: 'خالد أحمد إبراهيم', position: 'باحث' }
      ],
      memberCount: 6,
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
        { name: 'د. فاطمة محمد علي', position: 'رئيسة التحرير' },
        { name: 'أحمد حسن خالد', position: 'نائب رئيس التحرير' },
        { name: 'سارة إبراهيم سالم', position: 'محررة' }
      ],
      memberCount: 9,
      category: 'internal'
    }
  ];

  const governmentCommittees: Committee[] = [
    {
      id: 'housing-plans',
      name: 'فريق عمل دراسة مدى فعالية الخطط والبرامج الإسكانية',
      description: 'فريق عمل لدراسة وتقييم الخطط الإسكانية',
      objectives: [
        'تحليل الخطط الإسكانية الحالية',
        'تقييم فعالية البرامج المنفذة',
        'اقتراح تحسينات وتطويرات',
        'رفع توصيات للجهات المعنية'
      ],
      members: [
        { name: 'د. محمد سالم أحمد', position: 'رئيس الفريق' },
        { name: 'أ. فاطمة علي حسن', position: 'نائبة الرئيس' },
        { name: 'خالد حسن إبراهيم', position: 'منسق' }
      ],
      memberCount: 11,
      category: 'government'
    },
    {
      id: 'electricity-law',
      name: 'فريق عمل مراجعة إصدار قانون تنظيم قطاع الكهرباء والماء المرافق لمرسوم رقم (37) لسنة 2025',
      description: 'فريق عمل لمراجعة وتحديث قانون تنظيم قطاع الكهرباء والماء',
      objectives: [
        'مراجعة نصوص القانون الحالي',
        'اقتراح تعديلات وتحسينات',
        'التنسيق مع الجهات الحكومية',
        'ضمان التوافق مع المعايير الدولية'
      ],
      members: [
        { name: 'أ. إبراهيم محمد علي', position: 'رئيس الفريق' },
        { name: 'د. مريم أحمد خالد', position: 'نائبة الرئيس' },
        { name: 'علي حسن سالم', position: 'خبير قانوني' }
      ],
      memberCount: 8,
      category: 'government'
    },
    {
      id: 'works-specifications',
      name: 'فريق عمل مراجعة المواصفات العامة لوزارة الأشغال',
      description: 'فريق عمل لمراجعة وتحديث مواصفات الأشغال العامة',
      objectives: [
        'مراجعة المواصفات الحالية',
        'تحديث المعايير الفنية',
        'مواكبة التطورات التقنية',
        'ضمان الجودة والسلامة'
      ],
      members: [
        { name: 'د. حسن علي محمد', position: 'رئيس الفريق' },
        { name: 'أ. سارة خالد أحمد', position: 'نائبة الرئيس' },
        { name: 'محمد إبراهيم حسن', position: 'خبير فني' }
      ],
      memberCount: 10,
      category: 'government'
    },
    {
      id: 'building-law',
      name: 'فريق عمل مراجعة إصدار قانون تنظيم البناء المرافق لمرسوم رقم (53) لسنة 2025',
      description: 'فريق عمل لمراجعة قانون تنظيم البناء',
      objectives: [
        'تحليل قانون البناء الحالي',
        'اقتراح تحسينات وتعديلات',
        'ضمان السلامة الإنشائية',
        'تبسيط الإجراءات'
      ],
      members: [
        { name: 'أ. خالد محمد سالم', position: 'رئيس الفريق' },
        { name: 'د. فاطمة حسن علي', position: 'نائبة الرئيس' },
        { name: 'أحمد علي إبراهيم', position: 'خبير إنشائي' }
      ],
      memberCount: 9,
      category: 'government'
    },
    {
      id: 'women-integration',
      name: 'لجنة إدماج احتياجات المرأة',
      description: 'لجنة متخصصة في إدماج احتياجات المرأة في القطاع الهندسي',
      objectives: [
        'تحليل احتياجات المرأة المهندسة',
        'اقتراح حلول وتحسينات',
        'تعزيز مشاركة المرأة',
        'دعم التوازن بين العمل والحياة'
      ],
      members: [
        { name: 'د. مريم محمد أحمد', position: 'رئيسة اللجنة' },
        { name: 'أ. سارة حسن خالد', position: 'نائبة الرئيسة' },
        { name: 'فاطمة علي إبراهيم', position: 'منسقة' }
      ],
      memberCount: 12,
      category: 'government'
    },
    {
      id: 'space-hackathon',
      name: 'هيئة تحكيم النسخة السادسة من هاكاثون تحدي الفضاء',
      description: 'هيئة تحكيم متخصصة في هاكاثون تحدي الفضاء',
      objectives: [
        'تقييم المشاريع المقدمة',
        'اختيار الفرق الفائزة',
        'ضمان معايير الابتكار',
        'دعم المواهب الشابة'
      ],
      members: [
        { name: 'أ. علي أحمد محمد', position: 'رئيس الهيئة' },
        { name: 'د. نورة خالد حسن', position: 'عضوة الهيئة' },
        { name: 'خالد سالم إبراهيم', position: 'خبير تقني' }
      ],
      memberCount: 7,
      category: 'government'
    }
  ];

  const sections = [
    {
      id: 'member-affairs',
      name: 'لجنة شؤون الأعضاء والمهنة',
      description: 'اللجان المتخصصة في شؤون الأعضاء وتطوير المهنة الهندسية',
      committees: memberAffairsCommittees,
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: UserCheck
    },
    {
      id: 'awards',
      name: 'جائزة جمعية المهندسين',
      description: 'اللجان وهيئات التحكيم المتخصصة في جوائز جمعية المهندسين',
      committees: awardsCommittees,
      color: 'yellow',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: Award
    },
    {
      id: 'professional-affairs',
      name: 'الشؤون المهنية',
      description: 'اللجان والشعب والروابط المتخصصة في الشؤون المهنية',
      committees: professionalAffairsCommittees,
      color: 'indigo',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      icon: Briefcase
    },
    {
      id: 'internal',
      name: 'اللجان الداخلية',
      description: 'اللجان الداخلية التي تعمل على تطوير الجمعية وخدمة الأعضاء',
      committees: internalCommittees,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: Target
    },
    {
      id: 'government',
      name: 'اللجان والفرق العمل في الجهات الرسمية',
      description: 'اللجان والفرق العاملة بالتعاون مع الجهات الحكومية والرسمية',
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
    alert('تم إرسال طلب الانضمام بنجاح! سيتم التواصل معك قريباً.');
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
            <h1 className="text-5xl font-bold mb-4">لجان الجمعية</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              اكتشف اللجان المتنوعة في جمعية المهندسين البحرينية وشارك في تطوير القطاع الهندسي
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
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
                ? 'جميع اللجان' 
                : tabs.find(tab => tab.id === activeTab)?.name || 'اللجان'
              }
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {activeTab === 'all' 
                ? 'استعرض جميع لجان الجمعية المتنوعة منظمة حسب الأقسام' 
                : 'اللجان المتخصصة في هذا القسم'
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
                          <span className="text-xs text-slate-500">{committee.memberCount} عضو</span>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-slate-900 mb-2">{committee.name}</h4>
                        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{committee.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => setSelectedCommittee(committee)}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                          >
                            تفاصيل
                            <ChevronRight className="w-3 h-3 mr-1" />
                          </button>
                          <button
                            onClick={() => handleJoinCommittee(committee)}
                            className={`bg-${section.color}-600 hover:bg-${section.color}-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors`}
                          >
                            انضمام
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
                        <span className="text-sm text-slate-500">{committee.memberCount} عضو</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{committee.name}</h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">{committee.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setSelectedCommittee(committee)}
                          className="text-blue-600 hover:text-blue-700 font-semibold flex items-center"
                        >
                          تفاصيل أكثر
                          <ChevronRight className="w-4 h-4 mr-1" />
                        </button>
                        <button
                          onClick={() => handleJoinCommittee(committee)}
                          className={`bg-${color}-600 hover:bg-${color}-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
                        >
                          طلب الانضمام
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
              <h3 className="text-xl font-semibold text-slate-900 mb-2">لا توجد لجان حالياً</h3>
              <p className="text-slate-600">سيتم إضافة اللجان لهذا القسم قريباً</p>
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
                      <FileText className="w-5 h-5 mr-2 text-blue-600" />
                      وصف اللجنة
                    </h3>
                    <p className="text-slate-600">{selectedCommittee.description}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                      أهداف اللجنة
                    </h3>
                    <ul className="space-y-2">
                      {selectedCommittee.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-slate-600">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center">
                      <UserCheck className="w-5 h-5 mr-2 text-blue-600" />
                      أعضاء إدارة اللجنة
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
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      عدد الأعضاء المنظمين
                    </h3>
                    <div className="text-3xl font-bold text-blue-600">{selectedCommittee.memberCount}</div>
                    <p className="text-slate-600">عضو منظم</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => handleJoinCommittee(selectedCommittee)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center"
                >
                  <Plus className="w-5 h-5 ml-2" />
                  طلب الانضمام للجنة
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
                <h2 className="text-2xl font-bold text-slate-900">طلب الانضمام للجنة</h2>
                <button
                  onClick={() => setShowJoinForm(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <Plus className="w-6 h-6 rotate-45" />
                </button>
              </div>

              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm font-medium text-blue-900">اللجنة:</p>
                <p className="text-lg font-semibold text-blue-900">{selectedCommittee.name}</p>
              </div>

              <form onSubmit={handleSubmitJoinForm} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    رقم العضوية *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="أدخل رقم عضويتك"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    رقم الهاتف *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="أدخل رقم هاتفك"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    التخصص الهندسي *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">اختر تخصصك</option>
                    <option value="civil">هندسة مدنية</option>
                    <option value="electrical">هندسة كهربائية</option>
                    <option value="mechanical">هندسة ميكانيكية</option>
                    <option value="chemical">هندسة كيميائية</option>
                    <option value="architectural">هندسة معمارية</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    سبب الرغبة في الانضمام *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="اذكر سبب رغبتك في الانضمام لهذه اللجنة"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    required
                    className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label className="mr-2 text-sm text-slate-700">
                    أوافق على الشروط والأحكام وأتعهد بالالتزام بمهام اللجنة
                  </label>
                </div>

                <div className="flex justify-end space-x-4 space-x-reverse">
                  <button
                    type="button"
                    onClick={() => setShowJoinForm(false)}
                    className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    إلغاء
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    إرسال الطلب
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

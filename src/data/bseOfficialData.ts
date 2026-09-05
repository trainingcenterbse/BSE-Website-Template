/**
 * BSE Official Data - Bahrain Society of Engineers
 * جمعية المهندسين البحرينية - البيانات الرسمية
 *
 * Sources: bse.bh/ar | president@bse.bh
 * Last Updated: 2026
 */

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BoardMember {
  id: number;
  nameAr: string;
  nameEn: string;
  positionAr: string;
  positionEn: string;
  email: string;
  phone?: string;
  image: string;
  isPresident?: boolean;
  linkedIn?: string;
  specialization?: string;
  specializationEn?: string;
}

export interface PreviousBoard {
  year?: number;
  periodAr?: string;
  periodEn?: string;
  startYear?: number;
  endYear?: number;
  president?: string;
  presidentAr?: string;
  presidentEn?: string;
  members: {
    name?: string;
    nameAr?: string;
    nameEn?: string;
    position?: string;
    positionAr?: string;
    positionEn?: string;
  }[];
}

export interface PresidentRecord {
  periodAr: string;
  periodEn: string;
  startYear: number;
  endYear: number | null;
  presidentAr: string;
  presidentEn: string;
  image: string;
  achievementsAr: string[];
  achievementsEn: string[];
  isCurrent?: boolean;
}

// ─── Current Board of Directors 2026 ─────────────────────────────────────────
// مجلس الإدارة الحالي لعام 2026

export const currentBoardMembers: BoardMember[] = [
  {
    id: 1,
    nameAr: 'م. عبد النبي الصباح',
    nameEn: 'Eng. Abdul Nabi Al Sabbah',
    positionAr: 'رئيس الجمعية',
    positionEn: 'President',
    email: 'president@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%86%D8%A8%D9%8A-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD-%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9-copy-scaled.png',
    isPresident: true,
    specialization: 'الهندسة الكيميائية',
    specializationEn: 'Chemical Engineering',
  },
  {
    id: 2,
    nameAr: 'م. جواد الجبل',
    nameEn: 'Eng. Jawad Al Jabal',
    positionAr: 'نائب الرئيس',
    positionEn: 'Vice President',
    email: 'vice.president@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/%D8%AC%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%AC%D8%A8%D9%84-scaled.jpg',
    specialization: 'الهندسة الميكانيكية',
    specializationEn: 'Mechanical Engineering',
  },
  {
    id: 3,
    nameAr: 'م. هدى سلطان',
    nameEn: 'Eng. Huda Sultan',
    positionAr: 'الأمين المالي',
    positionEn: 'Treasurer',
    email: 'treasurer@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%AF%D8%B3%D8%A9-%D9%87%D8%AF%D9%89-%D8%B3%D9%84%D8%B7%D8%A7%D9%86-%D9%85-.jpg.jpeg',
    specialization: 'الهندسة الكهربائية',
    specializationEn: 'Electrical Engineering',
  },
  {
    id: 4,
    nameAr: 'م. جعفر محمد علي',
    nameEn: 'Eng. Jaffar Mohammed Ali',
    positionAr: 'أمين السر والعلاقات الخارجية',
    positionEn: 'Board Secretary & External Relations',
    email: 'board.secretary@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Media-Jaffar-scaled.jpg',
    specialization: 'الهندسة المدنية',
    specializationEn: 'Civil Engineering',
  },
  {
    id: 5,
    nameAr: 'م. حبيب الجبوري',
    nameEn: 'Eng. Habeeb Al Juboori',
    positionAr: 'مدير المؤتمرات والمعارض',
    positionEn: 'Conferences & Exhibitions Director',
    email: 'conferences@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Activities-Habib-1-scaled.jpg',
    specialization: 'الهندسة الصناعية',
    specializationEn: 'Industrial Engineering',
  },
  {
    id: 6,
    nameAr: 'م. خالد الشيخ',
    nameEn: 'Eng. Khalid Al Sheikh',
    positionAr: 'مدير الإعلام والعلاقات العامة',
    positionEn: 'Media & Public Relations Director',
    email: 'media.director@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%AF%D8%B3-%D8%AE%D8%A7%D9%84%D8%AF-%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D9%85-.jpg.jpeg',
    specialization: 'هندسة الاتصالات',
    specializationEn: 'Telecommunications Engineering',
  },
  {
    id: 7,
    nameAr: 'م. بدر سالمين',
    nameEn: 'Eng. Badr Salmeen',
    positionAr: 'مدير العضوية وخدمة المجتمع',
    positionEn: 'Membership & Community Service Director',
    email: 'membership.director@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%AF%D8%B3-%D8%A8%D8%AF%D8%B1-%D8%B3%D8%A7%D9%84%D9%85%D9%8A%D9%86-%D9%85-.jpg.jpeg',
    specialization: 'الهندسة الإنشائية',
    specializationEn: 'Structural Engineering',
  },
  {
    id: 8,
    nameAr: 'د. نها الزياني',
    nameEn: 'Dr. Nuha Al Zayani',
    positionAr: 'مديرة شؤون تطوير الأعضاء',
    positionEn: 'Professional Development Director',
    email: 'professional.affairs@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/%D9%86%D9%87%D8%A7-%D8%AC%D9%85%D8%A7%D9%84-%D8%A7%D9%84%D8%B2%D9%8A%D8%A7%D9%86%D9%8A-scaled.jpg',
    specialization: 'هندسة المواد',
    specializationEn: 'Materials Engineering',
  },
  {
    id: 9,
    nameAr: 'م. علي القطان',
    nameEn: 'Eng. Ali Al Qattan',
    positionAr: 'مدير الأنشطة الفنية والاجتماعية',
    positionEn: 'Technical & Social Activities Director',
    email: 'activities.director@bse.bh',
    image: 'https://bse.bh/wp-content/uploads/%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%AF%D8%B3-%D8%B9%D9%84%D9%8A-%D8%A7%D9%84%D9%82%D8%B7%D8%A7%D9%86-%D9%85-.jpg-scaled.jpeg',
    specialization: 'الهندسة المعمارية',
    specializationEn: 'Architectural Engineering',
  },
];

// ─── Presidents Timeline (Clean – one entry per term, not per year) ───────────
// الخط الزمني للرؤساء - دورة واحدة لكل مجلس

export const presidentsTimeline: PresidentRecord[] = [
  {
    startYear: 2026,
    endYear: null,
    isCurrent: true,
    periodAr: '2026 – حتى الآن',
    periodEn: '2026 – Present',
    presidentAr: 'م. عبد النبي الصباح',
    presidentEn: 'Eng. Abdul Nabi Al Sabbah',
    image: 'https://bse.bh/wp-content/uploads/%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3-%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%86%D8%A8%D9%8A-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD-%D9%85%D8%B9%D8%AA%D9%85%D8%AF%D8%A9-copy-scaled.png',
    achievementsAr: [
      'قيادة الجمعية نحو رؤية 2030',
      'تعزيز الشراكات الدولية الاستراتيجية',
      'تطوير برامج التدريب والتأهيل المهني',
    ],
    achievementsEn: [
      'Leading BSE toward Vision 2030',
      'Strengthening international strategic partnerships',
      'Developing professional training programmes',
    ],
  },
  {
    startYear: 2021,
    endYear: 2026,
    periodAr: '2021 – 2026',
    periodEn: '2021 – 2026',
    presidentAr: 'د. رائدة العلوي',
    presidentEn: 'Dr. Raida Al Alawi',
    image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-President-Raida-scaled.jpg',
    achievementsAr: [
      'أول رئيسة في تاريخ الجمعية',
      'التحول الرقمي وتطوير الخدمات الإلكترونية',
      'إطلاق برامج الإرشاد المهني للمهندسين',
      'توسيع قاعدة العضوية وخدمات المجتمع',
    ],
    achievementsEn: [
      'First female president in BSE history',
      'Digital transformation & e-services',
      'Launched engineers mentorship programme',
      'Expanded membership base & community services',
    ],
  },
  {
    startYear: 2019,
    endYear: 2021,
    periodAr: '2019 – 2021',
    periodEn: '2019 – 2021',
    presidentAr: 'د. ضياء عبدالعزيز توفيقي',
    presidentEn: 'Dr. Zia Abdulaziz Toufeeqi',
    image: 'https://bse.bh/wp-content/uploads/Dr-Zia-Toufeeqi-President-2020-2021.jpg',
    achievementsAr: [
      'إدارة تحدي جائحة كوفيد-19 باحترافية عالية',
      'ضمان استمرارية الخدمات المهنية',
      'تعزيز دور الجمعية في دعم المهندسين',
    ],
    achievementsEn: [
      'Managed COVID-19 pandemic challenges professionally',
      'Ensured continuity of professional services',
      'Enhanced BSE role in supporting engineers',
    ],
  },
  {
    startYear: 2014,
    endYear: 2019,
    periodAr: '2014 – 2019',
    periodEn: '2014 – 2019',
    presidentAr: 'م. مسعود إبراهيم الهرمي',
    presidentEn: 'Eng. Masoud Ibrahim Al Harmi',
    image: 'https://bse.bh/wp-content/uploads/Eng-Masoud-Harmi-President-2017-2018.jpg',
    achievementsAr: [
      'تطوير البنية التحتية لمقر الجمعية',
      'تحديث المرافق والخدمات',
      'تعزيز مكانة الجمعية إقليمياً ودولياً',
    ],
    achievementsEn: [
      'Developed BSE headquarters infrastructure',
      'Modernised facilities and services',
      'Enhanced BSE regional and international standing',
    ],
  },
  {
    startYear: 2009,
    endYear: 2014,
    periodAr: '2009 – 2014',
    periodEn: '2009 – 2014',
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    presidentEn: 'Eng. Abdul Majeed Bashir Al Ghassab',
    image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
    achievementsAr: [
      'تطوير الهيكل التنظيمي للجمعية',
      'إطلاق مؤتمر MAINTCON الدولي',
      'توسيع شبكة الشراكات المهنية',
    ],
    achievementsEn: [
      'Developed BSE organisational structure',
      'Launched MAINTCON International Conference',
      'Expanded professional partnership network',
    ],
  },
  {
    startYear: 2005,
    endYear: 2009,
    periodAr: '2005 – 2009',
    periodEn: '2005 – 2009',
    presidentAr: 'م. علي جمال الدين',
    presidentEn: 'Eng. Ali Jamal Al Deen',
    image: 'https://bse.bh/wp-content/uploads/placeholder-president.jpg',
    achievementsAr: [
      'تعزيز برامج التدريب والتطوير المهني',
      'تطوير علاقات الجمعية مع الجهات الحكومية',
      'توسيع قاعدة العضوية',
    ],
    achievementsEn: [
      'Enhanced training and professional development',
      'Developed BSE relations with government entities',
      'Expanded membership base',
    ],
  },
  {
    startYear: 1999,
    endYear: 2005,
    periodAr: '1999 – 2005',
    periodEn: '1999 – 2005',
    presidentAr: 'م. إبراهيم الشيخ',
    presidentEn: 'Eng. Ibrahim Al Sheikh',
    image: 'https://bse.bh/wp-content/uploads/placeholder-president.jpg',
    achievementsAr: [
      'قيادة الجمعية في مرحلة التطوير الرقمي الأول',
      'تأسيس مركز التدريب المعتمد',
      'تطوير برامج العضوية',
    ],
    achievementsEn: [
      'Led BSE through first digital development phase',
      'Established the accredited training centre',
      'Developed membership programmes',
    ],
  },
  {
    startYear: 1993,
    endYear: 1999,
    periodAr: '1993 – 1999',
    periodEn: '1993 – 1999',
    presidentAr: 'م. عيسى الشيخ',
    presidentEn: 'Eng. Isa Al Sheikh',
    image: 'https://bse.bh/wp-content/uploads/placeholder-president.jpg',
    achievementsAr: [
      'توسيع نشاطات الجمعية الاجتماعية والمهنية',
      'تعزيز الوحدة بين المهندسين البحرينيين',
      'دعم البرامج الهندسية الوطنية',
    ],
    achievementsEn: [
      'Expanded social and professional activities',
      'Strengthened unity among Bahraini engineers',
      'Supported national engineering programmes',
    ],
  },
  {
    startYear: 1986,
    endYear: 1993,
    periodAr: '1986 – 1993',
    periodEn: '1986 – 1993',
    presidentAr: 'م. عبدالله السيد',
    presidentEn: 'Eng. Abdullah Al Sayed',
    image: 'https://bse.bh/wp-content/uploads/placeholder-president.jpg',
    achievementsAr: [
      'تطوير مرافق الجمعية الدائمة',
      'إطلاق برامج الجوائز والتكريم الهندسي',
      'تأسيس العلاقات مع الجمعيات الهندسية الدولية',
    ],
    achievementsEn: [
      'Developed permanent BSE facilities',
      'Launched engineering awards programmes',
      'Established international engineering society relations',
    ],
  },
  {
    startYear: 1978,
    endYear: 1986,
    periodAr: '1978 – 1986',
    periodEn: '1978 – 1986',
    presidentAr: 'م. محمد علي',
    presidentEn: 'Eng. Mohammed Ali',
    image: 'https://bse.bh/wp-content/uploads/placeholder-president.jpg',
    achievementsAr: [
      'ترسيخ دور الجمعية في المجتمع البحريني',
      'بناء علاقات قوية مع الجهات الحكومية',
      'تطوير برامج رعاية المهندسين',
    ],
    achievementsEn: [
      'Cemented BSE role in Bahraini society',
      'Built strong government relations',
      'Developed engineer welfare programmes',
    ],
  },
  {
    startYear: 1972,
    endYear: 1978,
    periodAr: '1972 – 1978',
    periodEn: '1972 – 1978',
    presidentAr: 'م. عبدالرحمن الباكر',
    presidentEn: 'Eng. Abdulrahman Al Baker',
    image: '/Founders.jpg',
    achievementsAr: [
      'تأسيس جمعية المهندسين البحرينية عام 1972',
      'وضع النظام الأساسي واللوائح التنظيمية',
      'بناء اللبنات الأولى للمؤسسة الهندسية في البحرين',
    ],
    achievementsEn: [
      'Founded the Bahrain Society of Engineers in 1972',
      'Established the founding charter and regulations',
      'Built the first pillars of engineering institution in Bahrain',
    ],
  },
];

// ─── Previous Boards (1972 – 2025) ───────────────────────────────────────────

export const previousBoards: PreviousBoard[] = [
  {
    year: 2025,
    presidentAr: 'د. رائدة العلوي',
    members: [
      { nameAr: 'د. رائدة العلوي', positionAr: 'الرئيس' },
      { nameAr: 'الدكتور عدنان التميمي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. هدى سلطان', positionAr: 'الأمين المالي' },
      { nameAr: 'م. هيام المسقطي', positionAr: 'أمين السر' },
      { nameAr: 'م. شيخة الخلاصي', positionAr: 'مديرة شؤون الأعضاء والمهنة' },
      { nameAr: 'م. عامر علي بن رجب', positionAr: 'مدير مركز التدريب وتقنية المعلومات' },
      { nameAr: 'م. فريد بوشهري', positionAr: 'مدير المؤتمرات والمعارض' },
      { nameAr: 'م. جعفر محمد علي', positionAr: 'مدير الإعلام والعلاقات العامة' },
      { nameAr: 'م. حبيب حسين جبوري', positionAr: 'مدير الأنشطة العامة وخدمة المجتمع' }
    ]
  },
  {
    year: 2024,
    presidentAr: 'د. رائدة العلوي',
    members: [
      { nameAr: 'د. رائدة العلوي', positionAr: 'الرئيس' },
      { nameAr: 'الدكتور عدنان التميمي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. هدى سلطان', positionAr: 'الأمين المالي' },
      { nameAr: 'م. هيام المسقطي', positionAr: 'أمين السر' },
      { nameAr: 'م. شيخة الخلاصي', positionAr: 'مديرة شؤون الأعضاء والمهنة' },
      { nameAr: 'م. عامر علي بن رجب', positionAr: 'مدير مركز التدريب وتقنية المعلومات' },
      { nameAr: 'م. فريد بوشهري', positionAr: 'مدير المؤتمرات والمعارض' },
      { nameAr: 'م. جعفر محمد علي', positionAr: 'مدير الإعلام والعلاقات العامة' },
      { nameAr: 'م. حبيب حسين جبوري', positionAr: 'مدير الأنشطة العامة وخدمة المجتمع' }
    ]
  },
  {
    year: 2023,
    presidentAr: 'د. رائدة العلوي',
    members: [
      { nameAr: 'د. رائدة العلوي', positionAr: 'الرئيس' },
      { nameAr: 'الدكتور عدنان التميمي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. هدى سلطان', positionAr: 'الأمين المالي' },
      { nameAr: 'م. هيام المسقطي', positionAr: 'أمين السر' },
      { nameAr: 'م. شيخة الخلاصي', positionAr: 'مديرة شؤون الأعضاء والمهنة' },
      { nameAr: 'م. عامر علي بن رجب', positionAr: 'مدير مركز التدريب وتقنية المعلومات' },
      { nameAr: 'م. فريد بوشهري', positionAr: 'مدير المؤتمرات والمعارض' },
      { nameAr: 'م. جعفر محمد علي', positionAr: 'مدير الإعلام والعلاقات العامة' },
      { nameAr: 'م. حبيب حسين جبوري', positionAr: 'مدير الأنشطة العامة وخدمة المجتمع' }
    ]
  },
  {
    year: 2022,
    presidentAr: 'د. رائدة العلوي',
    members: [
      { nameAr: 'د. رائدة العلوي', positionAr: 'الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. هدى سلطان', positionAr: 'الأمين المالي' },
      { nameAr: 'م. هيام المسقطي', positionAr: 'أمين السر' },
      { nameAr: 'م. شيخة الخلاصي', positionAr: 'مديرة شؤون الأعضاء والمهنة' },
      { nameAr: 'م. عدنان آل رحمة', positionAr: 'مدير مركز التدريب وتقنية المعلومات' },
      { nameAr: 'م. فريد بوشهري', positionAr: 'مدير المؤتمرات والمعارض' },
      { nameAr: 'م. جعفر محمد علي', positionAr: 'مدير الإعلام والعلاقات العامة' },
      { nameAr: 'م. حبيب حسين جبوري', positionAr: 'مدير الأنشطة العامة وخدمة المجتمع' }
    ]
  },
  {
    year: 2021,
    presidentAr: 'د. رائدة العلوي',
    members: [
      { nameAr: 'د. رائدة العلوي', positionAr: 'الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'نائب الرئيس' },
      { nameAr: 'د. رائدة كاظم العلوي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. ياسر عبدالرحيم العباسي', positionAr: 'أمين السر' },
      { nameAr: 'م. ريم إبراهيم خلفان', positionAr: 'مديرة شؤون الأعضاء والمهنة' },
      { nameAr: 'م. رجاء يوسف الزياني', positionAr: 'مديرة مركز التدريب وتقنية المعلومات' },
      { nameAr: 'د. هيثم عيسى القحطاني', positionAr: 'مدير المؤتمرات والمعارض' },
      { nameAr: 'م. جعفر محمد علي', positionAr: 'مدير الإعلام والعلاقات العامة' },
      { nameAr: 'م. حبيب حسين جبوري', positionAr: 'مدير الأنشطة العامة وخدمة المجتمع' }
    ]
  },
  {
    year: 2020,
    presidentAr: 'د. ضياء عبدالعزيز توفيقي',
    members: [
      { nameAr: 'د. ضياء عبدالعزيز توفيقي', positionAr: 'الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. جواد جعفر الجبل', positionAr: 'أمين السر' },
      { nameAr: 'م. فؤاد أحمد الشيخ', positionAr: 'الأمين المالي ومدير المقر' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات والمعارض' },
      { nameAr: 'د. رائدة كاظم العلوي', positionAr: 'مديرة التدريب وتقنية المعلومات' },
      { nameAr: 'م. ريم إبراهيم خلفان', positionAr: 'مديرة الأنشطة العامة وخدمة المجتمع' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. ريم أحمد العتيبي', positionAr: 'مديرة الإعلام والعلاقات العامة' }
    ]
  },
  {
    year: 2019,
    presidentAr: 'د. ضياء عبدالعزيز توفيقي',
    members: [
      { nameAr: 'د. ضياء عبدالعزيز توفيقي', positionAr: 'الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. جواد جعفر الجبل', positionAr: 'أمين السر' },
      { nameAr: 'م. فؤاد أحمد الشيخ', positionAr: 'الأمين المالي ومدير المقر' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات والمعارض' },
      { nameAr: 'د. رائدة كاظم العلوي', positionAr: 'مديرة مركز التدريب وتقنية المعلومات' },
      { nameAr: 'م. ريم إبراهيم خلفان', positionAr: 'مديرة الأنشطة العامة وخدمة المجتمع' },
      { nameAr: 'م. ريم أحمد العتيبي', positionAr: 'مديرة الإعلام والعلاقات العامة' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير شؤون العضوية والمهنة' }
    ]
  },
  {
    year: 2018,
    presidentAr: 'د. ضياء توفيقي',
    members: [
      { nameAr: 'د. ضياء توفيقي', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. جواد جعفر الجبل', positionAr: 'أمين السر' },
      { nameAr: 'م. فؤاد أحمد الشيخ', positionAr: 'الأمين المالي ومدير المقر' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات والمعارض' },
      { nameAr: 'د. رائدة كاظم العلوي', positionAr: 'مديرة شؤون العضوية والمهنة' },
      { nameAr: 'م. ريم إبراهيم خلفان', positionAr: 'مديرة الأنشطة العامة وخدمة المجتمع' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة الإعلام ولعلاقات العامة' },
      { nameAr: 'م. عبدالهادي جاسم العطار', positionAr: 'مدير مركز التدريب وتقنية المعلومات' }
    ]
  },
  {
    year: 2017,
    presidentAr: 'م. مسعود إبراهيم الهرمي',
    members: [
      { nameAr: 'م. مسعود إبراهيم الهرمي', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. عباس علي الوطني', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جواد جعفر الجبل', positionAr: 'أمين السر والعلاقات الخارجية' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير التدريب وتقنية المعلومات' },
      { nameAr: 'م. ريم أحمد العتيبي', positionAr: 'مديرة الأنشطة العامة' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' }
    ]
  },
  {
    year: 2016,
    presidentAr: 'م. مسعود إبراهيم الهرمي',
    members: [
      { nameAr: 'م. مسعود إبراهيم الهرمي', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. عباس علي الوطني', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جواد جعفر الجبل', positionAr: 'أمين السر والعلاقات الخارجية' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير التدريب وتقنية المعلومات' },
      { nameAr: 'م. ريم أحمد العتيبي', positionAr: 'مديرة الأنشطة العامة' },
      { nameAr: 'م. عامر علي بن رجب', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. ريم إبراهيم خلفان', positionAr: 'مديرة الإعلام والعلاقات العامة' }
    ]
  },
  {
    year: 2015,
    presidentAr: 'م. مسعود إبراهيم الهرمي',
    members: [
      { nameAr: 'م. مسعود إبراهيم الهرمي', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. عباس علي الوطني', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جواد جعفر الجبل', positionAr: 'أمين السر والعلاقات الخارجية' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير التدريب' },
      { nameAr: 'م. ريم أحمد العتيبي', positionAr: 'مديرة الانشطة العامة' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' }
    ]
  },
  {
    year: 2014,
    presidentAr: 'م. مسعود إبراهيم الهرمي',
    members: [
      { nameAr: 'م. مسعود إبراهيم الهرمي', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. عباس علي الوطني', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير العضوية' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. ريم أحمد العتيبي', positionAr: 'مديرة الأنشطة العامة' }
    ]
  },
  {
    year: 2013,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2012,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2011,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2010,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2009,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2008,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2007,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2006,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2005,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2004,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2003,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2002,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2001,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 2000,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1999,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1998,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1997,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1996,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1995,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1994,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1993,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1992,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1991,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1990,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1989,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1988,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1987,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1986,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1985,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1984,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1983,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1982,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1981,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1980,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1979,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1978,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1977,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1976,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1975,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1974,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1973,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  },
  {
    year: 1972,
    presidentAr: 'م. عبدالمجيد بشير القصاب',
    members: [
      { nameAr: 'م. عبدالمجيد بشير القصاب', positionAr: 'الرئيس' },
      { nameAr: 'م. عبدالله أحمد جناحي', positionAr: 'نائب الرئيس' },
      { nameAr: 'م. محمد علي الخزاعي', positionAr: 'أمين السر' },
      { nameAr: 'م. حسين جعفر مكي', positionAr: 'الأمين المالي' },
      { nameAr: 'م. جميل خلف العلوي', positionAr: 'مدير المؤتمرات' },
      { nameAr: 'م. أحمد عبدالرحمن الخان', positionAr: 'مدير شؤون العضوية والمهنة' },
      { nameAr: 'م. هدى سلطان مبارك فرج', positionAr: 'مديرة التدريب' },
      { nameAr: 'م. عبدالنبي عبدالله الصباح', positionAr: 'مدير الإعلام' },
      { nameAr: 'م. أيمن محمد ناصر', positionAr: 'مدير الأنشطة العامة' }
    ]
  }
];

// ─── BSE Organization Info ────────────────────────────────────────────────────

export const bseInfo = {
  nameAr: 'جمعية المهندسين البحرينية',
  nameEn: 'Bahrain Society of Engineers',
  shortNameAr: 'جمعية المهندسين',
  shortNameEn: 'BSE',
  foundedYear: 1972,
  phone: '+973 17727100',
  fax: '+973 17727783',
  email: 'info@bse.bh',
  website: 'https://www.bse.bh',
  addressAr: 'مبنى 247، طريق 1901، الجفير 319، مملكة البحرين',
  addressEn: 'Building 247, Road 1901, Juffair 319, Kingdom of Bahrain',
  poBox: '835 المنامة',
  social: {
    facebook: 'https://www.facebook.com/BSEBahrain',
    twitter: 'https://twitter.com/BSEBahrain',
    instagram: 'https://www.instagram.com/bsebahrain',
    linkedin: 'https://www.linkedin.com/company/bahrain-society-of-engineers',
    youtube: 'https://www.youtube.com/@bsebahrain',
  },
  membersCount: 5000,
  partnersCount: 50,
  eventsCount: 200,
  yearsCount: 54,
};

// ─── BSE Objectives ───────────────────────────────────────────────────────────
// الأهداف العشرة للجمعية من النظام الأساسي

export const bseObjectives = [
  {
    id: 1,
    ar: 'تنمية روح الزمالة والتعاون بين أعضاء الجمعية',
    en: 'Foster fellowship and cooperation among members',
    icon: 'Users',
  },
  {
    id: 2,
    ar: 'تطوير الكفاءات والمهارات الهندسية للأعضاء',
    en: 'Develop engineering competencies and member skills',
    icon: 'GraduationCap',
  },
  {
    id: 3,
    ar: 'المشاركة في وضع المعايير والمقاييس الهندسية الوطنية',
    en: 'Participate in setting national engineering standards',
    icon: 'Shield',
  },
  {
    id: 4,
    ar: 'تعزيز مكانة مهنة الهندسة في المجتمع',
    en: 'Elevate the status of the engineering profession in society',
    icon: 'Award',
  },
  {
    id: 5,
    ar: 'المساهمة في التنمية الاقتصادية والاجتماعية لمملكة البحرين',
    en: 'Contribute to economic & social development of Bahrain',
    icon: 'Building2',
  },
  {
    id: 6,
    ar: 'تعزيز التعاون مع الجمعيات الهندسية الإقليمية والدولية',
    en: 'Strengthen cooperation with regional and international engineering bodies',
    icon: 'Globe',
  },
  {
    id: 7,
    ar: 'توفير برامج تدريب وتطوير مهني معتمدة دولياً',
    en: 'Provide internationally accredited training and professional development',
    icon: 'BookOpen',
  },
  {
    id: 8,
    ar: 'نشر الثقافة العلمية والتقنية والهندسية في المجتمع',
    en: 'Spread scientific, technical and engineering culture in society',
    icon: 'Lightbulb',
  },
  {
    id: 9,
    ar: 'تنظيم المؤتمرات والمعارض والملتقيات الهندسية',
    en: 'Organise engineering conferences, exhibitions and forums',
    icon: 'Calendar',
  },
  {
    id: 10,
    ar: 'رعاية المهندسين البحرينيين وتشجيعهم على الابتكار والتميز',
    en: 'Support Bahraini engineers and encourage innovation and excellence',
    icon: 'Star',
  },
];

// ─── Membership Categories ────────────────────────────────────────────────────

export const membershipCategories = [
  {
    id: 'fellow',
    ar: 'عضو زميل',
    en: 'Fellow Member',
    requirementAr: 'مهندس ذو خبرة لا تقل عن 10 سنوات',
    requirementEn: 'Engineer with at least 10 years of experience',
    fee: 'BD 30/year',
  },
  {
    id: 'full',
    ar: 'عضو أصيل',
    en: 'Full Member',
    requirementAr: 'مهندس مسجل مع خبرة لا تقل عن سنتين',
    requirementEn: 'Registered engineer with at least 2 years experience',
    fee: 'BD 20/year',
  },
  {
    id: 'associate',
    ar: 'عضو منتسب',
    en: 'Associate Member',
    requirementAr: 'حاصل على شهادة هندسية أو في أثناء الدراسة',
    requirementEn: 'Engineering degree holder or current student',
    fee: 'BD 10/year',
  },
  {
    id: 'student',
    ar: 'عضو طالب',
    en: 'Student Member',
    requirementAr: 'طالب هندسة في إحدى الجامعات المعتمدة',
    requirementEn: 'Engineering student at an accredited university',
    fee: 'BD 5/year',
  },
];

// ─── Publications & Magazines ─────────────────────────────────────────────────────

export interface MagazineIssue {
  id: string;
  issueNumber: number;
  year: number;
  monthAr: string;
  monthEn: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  coverImage: string;
  pdfUrl: string;
  url: string;
  type: 'magazine' | 'newsletter';
}

export const magazineIssues: MagazineIssue[] = [
  {
    id: 'mag-001',
    issueNumber: 72,
    year: 2026,
    monthAr: 'يناير',
    monthEn: 'January',
    titleAr: 'مجلة المهندس - العدد 72',
    titleEn: 'Al-Mohandis Magazine - Issue 72',
    descriptionAr: 'عدد خاص برؤية 2030 وتحولات الطاقة في البحرين',
    descriptionEn: 'Special issue on Vision 2030 and energy transitions in Bahrain',
    coverImage: 'https://bse.bh/wp-content/uploads/magazine-cover-72.jpg',
    pdfUrl: 'https://bse.bh/wp-content/uploads/magazine-72.pdf',
    url: 'https://bse.bh/ar/al-mohandis-magazine/',
    type: 'magazine',
  },
  {
    id: 'mag-002',
    issueNumber: 71,
    year: 2025,
    monthAr: 'أكتوبر',
    monthEn: 'October',
    titleAr: 'مجلة المهندس - العدد 71',
    titleEn: 'Al-Mohandis Magazine - Issue 71',
    descriptionAr: 'تركز على الاستدامة والبناء الأخضر',
    descriptionEn: 'Focus on sustainability and green building',
    coverImage: 'https://bse.bh/wp-content/uploads/magazine-cover-71.jpg',
    pdfUrl: 'https://bse.bh/wp-content/uploads/magazine-71.pdf',
    url: 'https://bse.bh/ar/al-mohandis-magazine/',
    type: 'magazine',
  },
  {
    id: 'mag-003',
    issueNumber: 70,
    year: 2025,
    monthAr: 'يوليو',
    monthEn: 'July',
    titleAr: 'مجلة المهندس - العدد 70',
    titleEn: 'Al-Mohandis Magazine - Issue 70',
    descriptionAr: 'ملخص مؤتمر MAINTCON الدولي الخامس عشر',
    descriptionEn: 'Summary of MAINTCON International Conference 15th Edition',
    coverImage: 'https://bse.bh/wp-content/uploads/magazine-cover-70.jpg',
    pdfUrl: 'https://bse.bh/wp-content/uploads/magazine-70.pdf',
    url: 'https://bse.bh/ar/al-mohandis-magazine/',
    type: 'magazine',
  },
  {
    id: 'mag-004',
    issueNumber: 69,
    year: 2025,
    monthAr: 'أبريل',
    monthEn: 'April',
    titleAr: 'مجلة المهندس - العدد 69',
    titleEn: 'Al-Mohandis Magazine - Issue 69',
    descriptionAr: 'تكريم يوم المهندس البحريني',
    descriptionEn: 'Honouring Bahraini Engineer\'s Day',
    coverImage: 'https://bse.bh/wp-content/uploads/magazine-cover-69.jpg',
    pdfUrl: 'https://bse.bh/wp-content/uploads/magazine-69.pdf',
    url: 'https://bse.bh/ar/al-mohandis-magazine/',
    type: 'magazine',
  },
];

export const newsletterIssues: MagazineIssue[] = [
  {
    id: 'news-001',
    issueNumber: 48,
    year: 2026,
    monthAr: 'يناير',
    monthEn: 'January',
    titleAr: 'المهندس تايمز - العدد 48',
    titleEn: 'Al-Mohandis Times - Issue 48',
    descriptionAr: 'تحديثات برامج التدريب والأنشطة القادمة',
    descriptionEn: 'Training programmes updates and upcoming activities',
    coverImage: 'https://bse.bh/wp-content/uploads/newsletter-cover-48.jpg',
    pdfUrl: 'https://bse.bh/wp-content/uploads/newsletter-48.pdf',
    url: 'https://bse.bh/ar/al-mohandis-times/',
    type: 'newsletter',
  },
  {
    id: 'news-002',
    issueNumber: 47,
    year: 2025,
    monthAr: 'ديسمبر',
    monthEn: 'December',
    titleAr: 'المهندس تايمز - العدد 47',
    titleEn: 'Al-Mohandis Times - Issue 47',
    descriptionAr: 'ملخص فعاليات نهاية العام',
    descriptionEn: 'Year-end activities summary',
    coverImage: 'https://bse.bh/wp-content/uploads/newsletter-cover-47.jpg',
    pdfUrl: 'https://bse.bh/wp-content/uploads/newsletter-47.pdf',
    url: 'https://bse.bh/ar/al-mohandis-times/',
    type: 'newsletter',
  },
  {
    id: 'news-003',
    issueNumber: 46,
    year: 2025,
    monthAr: 'نوفمبر',
    monthEn: 'November',
    titleAr: 'المهندس تايمز - العدد 46',
    titleEn: 'Al-Mohandis Times - Issue 46',
    descriptionAr: 'أخبار الشراكات والتعاون الدولي',
    descriptionEn: 'Partnerships and international cooperation news',
    coverImage: 'https://bse.bh/wp-content/uploads/newsletter-cover-46.jpg',
    pdfUrl: 'https://bse.bh/wp-content/uploads/newsletter-46.pdf',
    url: 'https://bse.bh/ar/al-mohandis-times/',
    type: 'newsletter',
  },
  {
    id: 'news-004',
    issueNumber: 45,
    year: 2025,
    monthAr: 'أكتوبر',
    monthEn: 'October',
    titleAr: 'المهندس تايمز - العدد 45',
    titleEn: 'Al-Mohandis Times - Issue 45',
    descriptionAr: 'برامج التدريب المعتمدة الجديدة',
    descriptionEn: 'New accredited training programmes',
    coverImage: 'https://bse.bh/wp-content/uploads/newsletter-cover-45.jpg',
    pdfUrl: 'https://bse.bh/wp-content/uploads/newsletter-45.pdf',
    url: 'https://bse.bh/ar/al-mohandis-times/',
    type: 'newsletter',
  },
];

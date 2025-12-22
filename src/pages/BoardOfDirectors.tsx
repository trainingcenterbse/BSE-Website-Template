import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Calendar, Mail, Phone, MapPin, Briefcase, GraduationCap, Shield, ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BoardOfDirectors = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewMode, setViewMode] = useState('current'); // 'current' or 'previous'

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const previousBoards = [
    {
      year: 2023,
      members: [
        { name: 'د. رائدة العلوي', position: 'الرئيس' },
        { name: 'الدكتور عدنان التميمي', position: 'نائب الرئيس' },
        { name: 'م. هدى سلطان', position: 'الأمين المالي' },
        { name: 'م. هيام المسقطي', position: 'أمين السر' },
        { name: 'م. شيخة الخلاصي', position: 'مديرة شؤون الأعضاء والمهنة' },
        { name: 'م. عامر علي بن رجب', position: 'مدير مركز التدريب وتقنية المعلومات' },
        { name: 'م. فريد بوشهري', position: 'مدير المؤتمرات والمعارض' },
        { name: 'م. جعفر محمد علي', position: 'مدير الإعلام والعلاقات العامة' },
        { name: 'م. حبيب حسين جبوري', position: 'مدير الأنشطة العامة وخدمة المجتمع' }
      ]
    },
    {
      year: 2022,
      members: [
        { name: 'د. رائدة العلوي', position: 'الرئيس' },
        { name: 'م. محمد علي الخزاعي', position: 'نائب الرئيس' },
        { name: 'م. هدى سلطان', position: 'الأمين المالي' },
        { name: 'م. هيام المسقطي', position: 'أمين السر' },
        { name: 'م. شيخة الخلاصي', position: 'مديرة شؤون الأعضاء والمهنة' },
        { name: 'م. عدنان آل رحمة', position: 'مدير مركز التدريب وتقنية المعلومات' },
        { name: 'م. فريد بوشهري', position: 'مدير المؤتمرات والمعارض' },
        { name: 'م. جعفر محمد علي', position: 'مدير الإعلام والعلاقات العامة' },
        { name: 'م. حبيب حسين جبوري', position: 'مدير الأنشطة العامة وخدمة المجتمع' }
      ]
    },
    {
      year: 2021,
      members: [
        { name: 'د. رائدة العلوي', position: 'الرئيس' },
        { name: 'م. محمد علي الخزاعي', position: 'نائب الرئيس' },
        { name: 'د. رائدة كاظم العلوي', position: 'الأمين المالي' },
        { name: 'م. ياسر عبدالرحيم العباسي', position: 'أمين السر' },
        { name: 'م. ريم إبراهيم خلفان', position: 'مديرة شؤون الأعضاء والمهنة' },
        { name: 'م. رجاء يوسف الزياني', position: 'مديرة مركز التدريب وتقنية المعلومات' },
        { name: 'د. هيثم عيسى القحطاني', position: 'مدير المؤتمرات والمعارض' },
        { name: 'م. جعفر محمد علي', position: 'مدير الإعلام والعلاقات العامة' },
        { name: 'م. حبيب حسين جبوري', position: 'مدير الأنشطة العامة وخدمة المجتمع' }
      ]
    },
    {
      year: 2020,
      members: [
        { name: 'د. ضياء عبدالعزيز توفيقي', position: 'الرئيس' },
        { name: 'م. محمد علي الخزاعي', position: 'نائب الرئيس' },
        { name: 'م. جواد جعفر الجبل', position: 'أمين السر' },
        { name: 'م. فؤاد أحمد الشيخ', position: 'الأمين المالي ومدير المقر' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات والمعارض' },
        { name: 'د. رائدة كاظم العلوي', position: 'مديرة التدريب وتقنية المعلومات' },
        { name: 'م. ريم إبراهيم خلفان', position: 'مديرة الأنشطة العامة وخدمة المجتمع' },
        { name: 'م. أيمن محمد ناصر', position: 'مدير شؤون العضوية والمهنة' },
        { name: 'م. ريم أحمد العتيبي', position: 'مديرة الإعلام والعلاقات العامة' }
      ]
    },
    {
      year: 2019,
      members: [
        { name: 'د. ضياء عبدالعزيز توفيقي', position: 'الرئيس' },
        { name: 'م. محمد علي الخزاعي', position: 'نائب الرئيس' },
        { name: 'م. جواد جعفرالجبل', position: 'أمين السر' },
        { name: 'م. فؤاد أحمد الشيخ', position: 'الأمين المالي ومدير المقر' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات والمعارض' },
        { name: 'د. رائدة كاظم العلوي', position: 'مديرة مركز التدريب وتقنية المعلومات' },
        { name: 'م. ريم إبراهيم خلفان', position: 'مديرة الأنشطة العامة وخدمة المجتمع' },
        { name: 'م. ريم أحمد العتيبي', position: 'مديرة الإعلام والعلاقات العامة' },
        { name: 'أيمن محمد ناصر', position: 'مدير شؤون العضوية والمهنة' }
      ]
    },
    {
      year: 2018,
      members: [
        { name: 'د. ضياء توفيقي', position: 'الرئيس' },
        { name: 'م. عبدالنبي عبدالله الصباح', position: 'نائب الرئيس' },
        { name: 'م. جواد جعفر الجبل', position: 'أمين السر' },
        { name: 'م. فؤاد أحمد الشيخ', position: 'الأمين المالي ومدير المقر' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات والمعارض' },
        { name: 'د. رائدة كاظم العلوي', position: 'مديرة شؤون العضوية والمهنة' },
        { name: 'م. ريم إبراهيم خلفان', position: 'مديرة الأنشطة العامة وخدمة المجتمع' },
        { name: 'م. هدى سلطان مبارك فرج', position: 'مديرة الإعلام ولعلاقات العامة' },
        { name: 'م. عبدالهادي جاسم العطار', position: 'مدير مركز التدريب وتقنية المعلومات' }
      ]
    },
    {
      year: 2017,
      members: [
        { name: 'م. مسعود إبراهيم الهرمي', position: 'الرئيس' },
        { name: 'م.عبدالنبي عبدالله الصباح', position: 'نائب الرئيس' },
        { name: 'م. عباس علي الوطني', position: 'الأمين المالي' },
        { name: 'م. جواد جعفرالجبل', position: 'أمين السر والعلاقات الخارجية' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات' },
        { name: 'م. أيمن محمد ناصر', position: 'مدير التدريب وتقنية المعلومات' },
        { name: 'م. ريم أحمد العتيبي', position: 'مديرة الأنشطة العامة' },
        { name: 'م.عبدالنبي عبدالله الصباح', position: 'مديرة الإعلام' },
        { name: 'م. أحمد عبدالرحمن الخان', position: 'مدير شؤون العضوية والمهنة' }
      ]
    },
    {
      year: 2016,
      members: [
        { name: 'م. مسعود إبراهيم الهرمي', position: 'الرئيس' },
        { name: 'م.عبدالنبي عبدالله الصباح', position: 'نائب الرئيس' },
        { name: 'م. عباس علي الوطني', position: 'الأمين المالي' },
        { name: 'م. جواد جعفرالجبل', position: 'أمين السر والعلاقات الخارجية' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات' },
        { name: 'م. أيمن محمد ناصر', position: 'مدير التدريب وتقنية المعلومات' },
        { name: 'م. ريم أحمد العتيبي', position: 'مديرة الأنشطة العامة' },
        { name: 'م. عامر علي بن رجب', position: 'مدير شؤون العضوية والمهنة' },
        { name: 'م. ريم إبراهيم خلفان', position: 'مديرة الإعلام والعلاقات العامة' }
      ]
    },
    {
      year: 2015,
      members: [
        { name: 'م. مسعود إبراهيم الهرمي', position: 'الرئيس' },
        { name: 'م. عبدالله أحمد جناحي', position: 'نائب الرئيس' },
        { name: 'م. عباس علي الوطني', position: 'الأمين المالي' },
        { name: 'م. جواد جعفرالجبل', position: 'أمين السر والعلاقات الخارجية' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات' },
        { name: 'م. أيمن محمد ناصر', position: 'مدير التدريب' },
        { name: 'م. ريم أحمد العتيبي', position: 'مديرة الانشطة العامة' },
        { name: 'م.عبدالنبي عبدالله الصباح', position: 'مديرة الإعلام' },
        { name: 'م. أحمد عبدالرحمن الخان', position: 'مدير شؤون العضوية والمهنة' }
      ]
    },
    {
      year: 2014,
      members: [
        { name: 'م. مسعود إبراهيم الهرمي', position: 'الرئيس' },
        { name: 'م. عبدالله أحمد جناحي', position: 'نائب الرئيس' },
        { name: 'م. محمد علي الخزاعي', position: 'أمين السر' },
        { name: 'م. عباس علي الوطني', position: 'الأمين المالي' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات' },
        { name: 'م. أحمد عبدالرحمن الخان', position: 'مدير العضوية' },
        { name: 'م. أيمن محمد ناصر', position: 'مدير التدريب' },
        { name: 'م. عبدالنبي عبدالله الصباح', position: 'مدير الإعلام' },
        { name: 'م. ريم أحمد العتيبي', position: 'مديرة الأنشطة العامة' }
      ]
    },
    {
      year: 2013,
      members: [
        { name: 'م. عبدالمجيد بشير القصاب', position: 'الرئيس' },
        { name: 'م. عبدالله أحمد جناحي', position: 'نائب الرئيس' },
        { name: 'م. محمد علي الخزاعي', position: 'أمين السر' },
        { name: 'م. حسين جعفر مكي', position: 'الأمين المالي' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات' },
        { name: 'م. أحمد عبدالرحمن الخان', position: 'مدير شؤون العضوية والمهنة' },
        { name: 'م. هدى سلطان مبارك فرج', position: 'مديرة التدريب' },
        { name: 'م. عبدالنبي عبدالله الصباح', position: 'مدير الإعلام' },
        { name: 'م. أيمن محمد ناصر', position: 'مدير الأنشطة العامة' }
      ]
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const boardMembers = [
    {
      id: 1,
      name: currentLang === 'ar' ? 'دكتورة رائدة العلوي' : 'Dr. Raeda Al-Alawi',
      position: currentLang === 'ar' ? 'رئيس الجمعية' : 'President',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-President-Raida-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'دكتورة رائدة العلوي هي رئيسة جمعية المهندسين البحرينية وتتميز بخبرة واسعة في مجال الهندسة المدنية وإدارة المشاريع. تقود الجمعية نحو تحقيق أهدافها في تطوير المهنة الهندسية.'
        : 'Dr. Raeda Al-Alawi is the President of Bahrain Society of Engineers with extensive experience in civil engineering and project management. She leads the society towards achieving its goals in developing the engineering profession.',
      experience: currentLang === 'ar' ? '20+ سنة' : '20+ years',
      achievements: [
        currentLang === 'ar' ? 'قيادة الجمعية نحو التميز' : 'Leading the society towards excellence',
        currentLang === 'ar' ? 'تطوير برامج التدريب المهني' : 'Developing professional training programs',
        currentLang === 'ar' ? 'تعزيز الشراكات الدولية' : 'Enhancing international partnerships'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في الهندسة المدنية' : 'PhD in Civil Engineering',
        currentLang === 'ar' ? 'ماجستير في إدارة المشاريع' : 'Master in Project Management'
      ],
      contact: {
        email: 'president@bse.bh',
        phone: '+973 1772 7100',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 2,
      name: currentLang === 'ar' ? 'الدكتور عدنان التميمي' : 'Dr. Adnan Altamami',
      position: currentLang === 'ar' ? 'نائب الرئيس' : 'Vice President',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/Adnan-Altamami-bse-board-member-Vice-President-2023.jpeg',
      bio: currentLang === 'ar'
        ? 'الدكتور عدنان التميمي هو نائب رئيس جمعية المهندسين البحرينية ويتميز بخبرة واسعة في مجال الهندسة المدنية وإدارة المشاريع الكبرى.'
        : 'Dr. Adnan Altamami is the Vice President of Bahrain Society of Engineers with extensive experience in civil engineering and major project management.',
      experience: currentLang === 'ar' ? '25+ سنة' : '25+ years',
      achievements: [
        currentLang === 'ar' ? 'إدارة المشاريع الكبرى' : 'Managing major projects',
        currentLang === 'ar' ? 'تطوير البنية التحتية' : 'Developing infrastructure',
        currentLang === 'ar' ? 'الخبرة في مجال الهندسة المدنية' : 'Expertise in civil engineering'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في الهندسة المدنية' : 'PhD in Civil Engineering',
        currentLang === 'ar' ? 'ماجستير في إدارة المشاريع' : 'Master in Project Management'
      ],
      contact: {
        email: 'vice.president@bse.bh',
        phone: '+973 1772 7101',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 3,
      name: currentLang === 'ar' ? 'المهندسة هدى سلطان' : 'Eng. Huda Sultan',
      position: currentLang === 'ar' ? 'الأمين المالي' : 'Treasurer',
      specialization: currentLang === 'ar' ? 'هندسة مالية' : 'Financial Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Treasurer-Huda-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'المهندسة هدى سلطان هي الأمين المالي لجمعية المهندسين البحرينية وتتميز بخبرة واسعة في مجال الهندسة المالية وإدارة الميزانيات.'
        : 'Eng. Huda Sultan is the Treasurer of Bahrain Society of Engineers with extensive experience in financial engineering and budget management.',
      experience: currentLang === 'ar' ? '18 سنة' : '18 years',
      achievements: [
        currentLang === 'ar' ? 'إدارة الميزانيات المالية' : 'Managing financial budgets',
        currentLang === 'ar' ? 'التخطيط المالي' : 'Financial planning',
        currentLang === 'ar' ? 'الخبرة في الهندسة المالية' : 'Expertise in financial engineering'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في الإدارة المالية' : 'Master in Financial Management',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المالية' : 'Bachelor in Financial Engineering'
      ],
      contact: {
        email: 'treasurer@bse.bh',
        phone: '+973 1772 7102',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 4,
      name: currentLang === 'ar' ? 'المهندسة هيام المسقطي' : 'Eng. Heyam Al-Muscati',
      position: currentLang === 'ar' ? 'أمين السر والعلاقات الخارجية' : 'Secretary and External Relations',
      specialization: currentLang === 'ar' ? 'هندسة اتصالات' : 'Communications Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Secertary-Heyam-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'المهندسة هيام المسقطي هي أمين السر والعلاقات الخارجية لجمعية المهندسين البحرينية وتتميز بخبرة واسعة في مجال هندسة الاتصالات والعلاقات العامة.'
        : 'Eng. Heyam Al-Muscati is the Secretary and External Relations of Bahrain Society of Engineers with extensive experience in communications engineering and public relations.',
      experience: currentLang === 'ar' ? '15 سنة' : '15 years',
      achievements: [
        currentLang === 'ar' ? 'إدارة العلاقات الخارجية' : 'Managing external relations',
        currentLang === 'ar' ? 'التواصل المؤسسي' : 'Corporate communications',
        currentLang === 'ar' ? 'الخبرة في هندسة الاتصالات' : 'Expertise in communications engineering'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في الاتصالات' : 'Master in Communications',
        currentLang === 'ar' ? 'بكالوريوس في هندسة الاتصالات' : 'Bachelor in Communications Engineering'
      ],
      contact: {
        email: 'board.secretary@bse.bh',
        phone: '+973 1772 7103',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 5,
      name: currentLang === 'ar' ? 'المهندسة شيخة الخلاصي' : 'Eng. Shaikha Al-Khalasi',
      position: currentLang === 'ar' ? 'مديرة شؤون الأعضاء والمهنة' : 'Membership and Profession Director',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Membership-Shaika-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'المهندسة شيخة الخلاصي هي مديرة شؤون الأعضاء والمهنة لجمعية المهندسين البحرينية وتتميز بخبرة واسعة في مجال إدارة العضوية وتطوير المهنة الهندسية.'
        : 'Eng. Shaikha Al-Khalasi is the Membership and Profession Director of Bahrain Society of Engineers with extensive experience in membership management and engineering profession development.',
      experience: currentLang === 'ar' ? '12 سنة' : '12 years',
      achievements: [
        currentLang === 'ar' ? 'إدارة شؤون الأعضاء' : 'Managing membership affairs',
        currentLang === 'ar' ? 'تطوير المهنة الهندسية' : 'Developing engineering profession',
        currentLang === 'ar' ? 'برامج التطوير المهني' : 'Professional development programs'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في إدارة الأعمال' : 'Master in Business Administration',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية' : 'Bachelor in Civil Engineering'
      ],
      contact: {
        email: 'membership.director@bse.bh',
        phone: '+973 1772 7104',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 6,
      name: currentLang === 'ar' ? 'المهندس عامر علي بن رجب' : 'Eng. Aamer Ali bin Rajab',
      position: currentLang === 'ar' ? 'مدير التدريب' : 'Training Director',
      specialization: currentLang === 'ar' ? 'هندسة كهربائية' : 'Electrical Engineering',
      image: 'https://bse.bh/wp-content/uploads/Aamer-bin-rajab-bse-board-member-2023.jpeg',
      bio: currentLang === 'ar'
        ? 'المهندس عامر بن رجب هو مدير التدريب لجمعية المهندسين البحرينية وتتميز بخبرة واسعة في مجال الهندسة الكهربائية وتطوير برامج التدريب.'
        : 'Eng. Aamer bin Rajab is the Training Director of Bahrain Society of Engineers with extensive experience in electrical engineering and training program development.',
      experience: currentLang === 'ar' ? '20 سنة' : '20 years',
      achievements: [
        currentLang === 'ar' ? 'تطوير برامج التدريب' : 'Developing training programs',
        currentLang === 'ar' ? 'الخبرة في الهندسة الكهربائية' : 'Expertise in electrical engineering',
        currentLang === 'ar' ? 'إدارة برامج التطوير المهني' : 'Managing professional development programs'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في الهندسة الكهربائية' : 'Master in Electrical Engineering',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة الكهربائية' : 'Bachelor in Electrical Engineering'
      ],
      contact: {
        email: 'training.director@bse.bh',
        phone: '+973 1772 7105',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 7,
      name: currentLang === 'ar' ? 'المهندس فريد بوشهري' : 'Eng. Fareed Bushehri',
      position: currentLang === 'ar' ? 'مدير المؤتمرات' : 'Conferences Director',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Conference-Fareed-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'المهندس فريد بوشهري هو مدير المؤتمرات لجمعية المهندسين البحرينية وتتميز بخبرة واسعة في تنظيم المؤتمرات الهندسية.'
        : 'Eng. Fareed Bushehri is the Conferences Director of Bahrain Society of Engineers with extensive experience in organizing engineering conferences.',
      experience: currentLang === 'ar' ? '18 سنة' : '18 years',
      achievements: [
        currentLang === 'ar' ? 'تنظيم المؤتمرات الهندسية' : 'Organizing engineering conferences',
        currentLang === 'ar' ? 'الخبرة في إدارة الفعاليات' : 'Expertise in event management',
        currentLang === 'ar' ? 'تطوير برامج المؤتمرات' : 'Developing conference programs'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في إدارة الفعاليات' : 'Master in Event Management',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية' : 'Bachelor in Civil Engineering'
      ],
      contact: {
        email: 'conferences@bse.bh',
        phone: '+973 1772 7106',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 8,
      name: currentLang === 'ar' ? 'المهندس جعفر محمد' : 'Eng. Jaffar Mohammed',
      position: currentLang === 'ar' ? 'مدير الإعلام والعلاقات العامة' : 'Media and Public Relations Director',
      specialization: currentLang === 'ar' ? 'هندسة اتصالات' : 'Communications Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Media-Jaffar-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'المهندس جعفر محمد هو مدير الإعلام والعلاقات العامة لجمعية المهندسين البحرينية وتتميز بخبرة واسعة في مجال الإعلام.'
        : 'Eng. Jaffar Mohammed is the Media and Public Relations Director of Bahrain Society of Engineers with extensive experience in media.',
      experience: currentLang === 'ar' ? '15 سنة' : '15 years',
      achievements: [
        currentLang === 'ar' ? 'إدارة العلاقات العامة' : 'Managing public relations',
        currentLang === 'ar' ? 'الخبرة في الإعلام' : 'Expertise in media',
        currentLang === 'ar' ? 'التواصل المؤسسي' : 'Corporate communications'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في الإعلام' : 'Master in Media',
        currentLang === 'ar' ? 'بكالوريوس في هندسة الاتصالات' : 'Bachelor in Communications Engineering'
      ],
      contact: {
        email: 'media.director@bse.bh',
        phone: '+973 1772 7107',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 9,
      name: currentLang === 'ar' ? 'المهندس حبيب جبوري' : 'Eng. Habib Jubouri',
      position: currentLang === 'ar' ? 'مدير الأنشطة العامة وخدمة المجتمع' : 'General Activities and Community Service Director',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Activities-Habib-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'المهندس حبيب جبوري هو مدير الأنشطة العامة وخدمة المجتمع لجمعية المهندسين البحرينية وتتميز بخبرة واسعة في خدمة المجتمع.'
        : 'Eng. Habib Jubouri is the General Activities and Community Service Director of Bahrain Society of Engineers with extensive experience in community service.',
      experience: currentLang === 'ar' ? '16 سنة' : '16 years',
      achievements: [
        currentLang === 'ar' ? 'تنظيم الأنشطة العامة' : 'Organizing general activities',
        currentLang === 'ar' ? 'خدمة المجتمع' : 'Community service',
        currentLang === 'ar' ? 'تطوير برامج خدمية' : 'Developing service programs'
      ],
      education: [
        currentLang === 'ar' ? 'ماجستير في خدمة المجتمع' : 'Master in Community Service',
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية' : 'Bachelor in Civil Engineering'
      ],
      contact: {
        email: 'activities.director@bse.bh',
        phone: '+973 1772 7108',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    }
  ];

  const committees = [
    {
      name: currentLang === 'ar' ? 'لجنة شؤون الأعضاء والمهنة' : 'Membership and Profession Committee',
      chair: currentLang === 'ar' ? 'المهندسة شيخة الخلاصي' : 'Eng. Shaikha Al-Khalasi',
      members: 4,
      focus: currentLang === 'ar'
        ? 'إدارة عضوية المهندسين وتطوير معايير المهنة الهندسية'
        : 'Managing engineer membership and developing engineering profession standards'
    },
    {
      name: currentLang === 'ar' ? 'لجنة المؤتمرات والمعارض' : 'Conferences and Exhibitions Committee',
      chair: currentLang === 'ar' ? 'المهندس فريد بوشهري' : 'Eng. Fareed Bushehri',
      members: 5,
      focus: currentLang === 'ar'
        ? 'تنظيم المؤتمرات الهندسية والمعارض المتخصصة والفعاليات العلمية'
        : 'Organizing engineering conferences, specialized exhibitions, and scientific events'
    },
    {
      name: currentLang === 'ar' ? 'لجنة الأنشطة العامة وخدمة المجتمع' : 'General Activities and Community Service Committee',
      chair: currentLang === 'ar' ? 'المهندس حبيب جبوري' : 'Eng. Habib Jubouri',
      members: 5,
      focus: currentLang === 'ar'
        ? 'تنظيم الأنشطة العامة والمبادرات الخدمية للمجتمع'
        : 'Organizing general activities and service initiatives for the community'
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-96 lg:h-[500px] bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Bahrain Society of Engineers Building" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  {currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'القادة الذين يوجهون جمعية المهندسين البحرينية نحو مستقبل مشرق'
                    : 'The leaders guiding the Bahrain Society of Engineers towards a bright future'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Board Members Grid */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 left-10 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                  {currentLang === 'ar' ? 'فريق القيادة' : 'Leadership Team'}
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {currentLang === 'ar' ? 'أعضاء مجلس الإدارة' : 'Board Members'}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-4"
              />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar' ? 'فريق من القادة المتخصصين من مختلف التخصصات الهندسية' : 'A team of specialized leaders from various engineering disciplines'}
              </p>
              
              {/* View Mode Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex justify-center mb-12"
              >
                <div className="inline-flex bg-white rounded-full shadow-lg p-1 border border-gray-200">
                  <button
                    onClick={() => setViewMode('current')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      viewMode === 'current'
                        ? 'bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {currentLang === 'ar' ? 'المجلس الحالي' : 'Current Board'}
                  </button>
                  <button
                    onClick={() => setViewMode('previous')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                      viewMode === 'previous'
                        ? 'bg-gradient-to-r from-blue-600 to-slate-700 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {currentLang === 'ar' ? 'المجالس السابقة' : 'Previous Boards'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
            
            {viewMode === 'current' ? (
              <>
                {/* President Card - Featured */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mb-8"
                >
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      {/* Left Side - 1/3 Width Image */}
                      <div className="lg:w-1/3 relative h-[652px] lg:h-[652px]">
                        <div className="relative h-full overflow-hidden">
                          <img 
                            src={boardMembers[0].image} 
                            alt={boardMembers[0].name} 
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-slate-700 text-white px-4 py-2 rounded-full shadow-lg">
                            <span className="text-sm font-bold">
                              {currentLang === 'ar' ? 'رئيس الجمعية' : 'Society President'}
                            </span>
                          </div>
                          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                            <Award className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Side - Enhanced Content */}
                      <div className="lg:w-2/3 p-8 bg-gradient-to-br from-white to-blue-50/30">
                        <div className="h-full flex flex-col justify-center space-y-6">
                          {/* Name and Position */}
                          <div className="text-center lg:text-left">
                            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                              {boardMembers[0].name}
                            </h3>
                            <p className="text-xl text-blue-600 font-semibold mb-4">
                              {boardMembers[0].position}
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-slate-700 mx-auto lg:mx-0"></div>
                          </div>
                          
                          {/* President Message - Enhanced */}
                          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
                            <h4 className="text-lg font-bold text-blue-900 mb-4 flex items-center justify-center lg:justify-start">
                              <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                              {currentLang === 'ar' ? 'كلمة الرئيس' : 'President\'s Message'}
                            </h4>
                            <p className="text-gray-700 leading-relaxed text-base">
                              {currentLang === 'ar' 
                                ? 'يسعدني أن أرحب بكم في جمعية المهندسين البحرينية. نحن ملتزمون بتطوير المهنة الهندسية وخدمة أعضائنا والمجتمع.'
                                : 'I am pleased to welcome you to the Bahrain Society of Engineers. We are committed to developing the engineering profession and serving our members and the community.'
                              }
                            </p>
                          </div>
                          
                          {/* Quick Info - Enhanced */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                              <div className="flex items-center text-gray-700">
                                <Briefcase className="w-5 h-5 text-blue-600 mr-3" />
                                <span className="text-base font-medium">{boardMembers[0].experience}</span>
                              </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                              <div className="flex items-center text-gray-700">
                                <GraduationCap className="w-5 h-5 text-blue-600 mr-3" />
                                <span className="text-base font-medium">{boardMembers[0].specialization}</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Contact - Enhanced */}
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a href={`mailto:${boardMembers[0].contact.email}`} className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                              <Mail className="w-5 h-5 mr-3" />
                              {currentLang === 'ar' ? 'تواصل مع الرئيس' : 'Contact President'}
                            </a>
                            <div className="flex items-center justify-center text-gray-600 text-base px-6 bg-white rounded-full shadow-md">
                              <Phone className="w-5 h-5 mr-2" />
                              {boardMembers[0].contact.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Other Board Members */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {boardMembers.filter(member => member.id > 1).map((member) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.6, delay: member.id * 0.1 }}
                      className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                      {/* Image Section - 3/4 of card height */}
                      <div className="relative h-96 bg-gray-50 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      {/* Header with Name and Position */}
                      <div className="bg-gradient-to-r from-blue-600 to-slate-700 p-3 text-white">
                        <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                        <p className="text-sm text-blue-100">{member.position}</p>
                      </div>
                      
                      {/* Profile Content - Reduced */}
                      <div className="p-4">
                        {/* Bio - Shortened */}
                        <p className="text-gray-600 leading-relaxed mb-3 text-sm line-clamp-1">{member.bio}</p>
                        
                        {/* Contact - Enhanced */}
                        <div className="space-y-2">
                          <a href={`mailto:${member.contact.email}`} className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                            <Mail className="w-4 h-4 mr-2" />
                            {currentLang === 'ar' ? 'تواصل' : 'Contact'}
                          </a>
                          <div className="flex items-center justify-center text-gray-500 text-xs">
                            <Phone className="w-3 h-3 mr-1" />
                            {member.contact.phone}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : (
              <div className="space-y-8">
                {previousBoards.map((board, index) => (
                  <motion.div
                    key={board.year}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  >
                    {/* Board Year Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-slate-700 text-white p-6">
                      <h3 className="text-2xl font-bold text-center">
                        {currentLang === 'ar' ? `مجلس الإدارة ${board.year}` : `Board of Directors ${board.year}`}
                      </h3>
                    </div>
                    
                    {/* Board Members Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {board.members.map((member, memberIndex) => (
                          <motion.div
                            key={memberIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: memberIndex * 0.1 }}
                            whileHover={{ scale: 1.02, y: -5 }}
                            className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-lg transition-all duration-300"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full flex items-center justify-center">
                                  <Users className="w-5 h-5 text-white" />
                                </div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-base font-bold text-gray-900 mb-1 truncate">
                                  {member.name}
                                </h4>
                                <span className="inline-block bg-gradient-to-r from-blue-100 to-slate-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                  {member.position}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Committees Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 left-20 w-80 h-80 bg-slate-500/10 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                  {currentLang === 'ar' ? 'هيكل تنظيمي' : 'Organizational Structure'}
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {currentLang === 'ar' ? 'اللجان الدائمة' : 'Standing Committees'}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-4"
              />
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'اللجان المتخصصة التي تدعم عمل مجلس الإدارة' : 'Specialized committees supporting the board\'s work'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {committees.map((committee, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  {/* Committee Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-slate-700 p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                        {committee.members} {currentLang === 'ar' ? 'عضو' : 'members'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{committee.name}</h3>
                  </div>
                  
                  {/* Committee Content */}
                  <div className="p-5">
                    {/* Chair Info */}
                    <div className="flex items-center mb-4 p-3 bg-blue-50 rounded-xl">
                      <Shield className="w-5 h-5 text-blue-600 ml-3" />
                      <div>
                        <p className="text-xs text-blue-600 font-medium">
                          {currentLang === 'ar' ? 'الرئيس:' : 'Chair:'}
                        </p>
                        <p className="text-sm font-bold text-gray-900">{committee.chair}</p>
                      </div>
                    </div>
                    
                    {/* Focus Description */}
                    <div className="mb-4">
                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                        {committee.focus}
                      </p>
                    </div>
                    
                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm">
                      {currentLang === 'ar' ? 'تفاصيل أكثر' : 'More Details'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

                      </div>
        </section>

        
        {/* Learn About Society Committees Section */}
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-20 w-64 h-64 bg-blue-50/30 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 left-20 w-80 h-80 bg-slate-50/30 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 backdroprog backdrop-blur-sm">
                  {currentLang === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {currentLang === 'ar' ? 'تعرف على لجان الجمعية' : 'Learn About Society Committees'}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-4"
              />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' 
                  ? 'اكتشف المزيد عن لجان الجمعية المختلفة، أهدافها، الشعب العاملة فيها، والفرص المتاحة للمشاركة في أنشطتها'
                  : 'Discover more about the different society committees, their objectives, working groups, and opportunities to participate in their activities'
                }
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100 shadow-lg">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {currentLang === 'ar' ? 'انضم إلى مجتمعنا المهني' : 'Join Our Professional Community'}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                    {currentLang === 'ar' 
                      ? 'تضم جمعية المهندسين البحرينية لجان متخصصة تعمل على تطوير المهنة الهندسية وخدمة الأعضاء والمجتمع. يمكنك الانضمام إلى هذه اللجان والمساهمة في تحقيق أهداف الجمعية'
                      : 'The Bahrain Society of Engineers includes specialized committees working on developing the engineering profession and serving members and the community. You can join these committees and contribute to achieving the society\'s goals'
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {currentLang === 'ar' ? 'جميع اللجان' : 'All Committees'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {currentLang === 'ar' ? 'كيف تنضم؟' : 'How to Join?'}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Board Meetings Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
              }}
              transition={{ 
                duration: 35,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                  {currentLang === 'ar' ? 'جدول الأعمال' : 'Work Schedule'}
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {currentLang === 'ar' ? 'اجتماعات مجلس الإدارة' : 'Board Meetings'}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-4"
              />
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                {currentLang === 'ar' 
                  ? 'نلتزم بانتظام وشفافية في اجتماعاتنا لضمان أفضل أداء للجمعية'
                  : 'We are committed to regularity and transparency in our meetings to ensure the best performance of the society'
                }
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[/* eslint-disable-next-line */
                {
                  icon: Calendar,
                  title: currentLang === 'ar' ? 'الاجتماعات الشهرية' : 'Monthly Meetings',
                  description: currentLang === 'ar'
                    ? 'نعقد اجتماعات منتظمة لمناقشة التقدم والمبادرات الجديدة'
                    : 'We hold regular meetings to discuss progress and new initiatives'
                },
                {
                  icon: Users,
                  title: currentLang === 'ar' ? 'الاجتماعات السنوية' : 'Annual Meetings',
                  description: currentLang === 'ar'
                    ? 'نراجع أداء السنة ونخطط للأهداف المستقبلية'
                    : 'We review the year\'s performance and plan for future goals'
                },
                {
                  icon: Shield,
                  title: currentLang === 'ar' ? 'الاجتماعات الطارئة' : 'Emergency Meetings',
                  description: currentLang === 'ar'
                    ? 'نعقد اجتماعات خاصة عند الحاجة لمعالجة القضايا العاجلة'
                    : 'We hold special meetings when needed to address urgent issues'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                y: [0, -50, 0],
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                y: [0, 50, 0],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 left-10 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block"
              >
                <div className="bg-gradient-to-r from-blue-400 to-slate-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                  {currentLang === 'ar' ? 'تواصل مباشر' : 'Direct Contact'}
                </div>
              </motion.div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {currentLang === 'ar' ? 'تواصل مع مجلس الإدارة' : 'Contact the Board'}
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 bg-gradient-to-r from-blue-400 to-slate-400 mx-auto mb-4"
              />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar' 
                  ? 'نحن هنا للاستماع إلى أفكارك ومقترحاتك لتطوير الجمعية'
                  : 'We are here to listen to your ideas and suggestions for developing the society'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
                >
                  {currentLang === 'ar' ? 'جدول الاجتماعات' : 'Meeting Schedule'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BoardOfDirectors;

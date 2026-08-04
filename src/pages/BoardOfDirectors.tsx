import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Award, Calendar, Mail, Phone, MapPin, Briefcase, GraduationCap, Shield, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Timeline Item Component
const TimelineItem = ({ president, index, onSelect }) => (
  <div className="absolute top-1/2 transform -translate-y-1/2">
    {/* Timeline Point */}
    <motion.div
      className="absolute w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-lg"
      style={{
        left: `${index * 180}px`,
        top: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      animate={{
        scale: [1, 1.3, 1],
        boxShadow: [
          '0 0 0 0 rgba(59, 130, 246, 0.7)',
          '0 0 0 8px rgba(59, 130, 246, 0)',
          '0 0 0 0 rgba(59, 130, 246, 0)'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: index * 0.3
      }}
    />
    
    {/* Year Label */}
    <motion.div
      className="absolute bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-blue-200"
      style={{
        left: `${index * 180}px`,
        top: '50%',
        transform: 'translate(-50%, 35px)'
      }}
      animate={{
        y: ['35px', '40px', '35px']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 0.3
      }}
    >
      <div className="text-sm font-bold text-blue-900">{president.year}</div>
    </motion.div>

    {/* President Bubble - Top with Circular Image */}
    <motion.div
      className="absolute cursor-pointer group"
      style={{
        left: `${index * 180}px`,
        top: '50%',
        transform: 'translate(-50%, -100px)',
        width: '100px'
      }}
      animate={{
        y: ['-100px', '-105px', '-100px'],
        scale: [1, 1.03, 1]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: index * 0.3
      }}
      whileHover={{ scale: 1.1, y: -110 }}
      onClick={() => onSelect(president)}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Circular Image */}
        <div className="relative">
          <motion.img
            src={president.image}
            alt={president.president}
            className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
        </div>
        
        {/* Name Bubble */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-4 py-2 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="text-white font-semibold text-xs text-center whitespace-nowrap">
            {president.president}
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Connecting Line */}
    <svg
      className="absolute pointer-events-none"
      style={{
        left: `${index * 180 - 40}px`,
        top: '50%',
        transform: 'translateY(-50%)',
        width: '80px',
        height: '160px'
      }}
    >
      <motion.line
        x1="40"
        y1="80"
        x2="40"
        y2="50"
        stroke="rgba(59, 130, 246, 0.4)"
        strokeWidth="2"
        strokeDasharray="4 4"
        animate={{
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.3
        }}
      />
    </svg>
  </div>
);

const BoardOfDirectors = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewMode, setViewMode] = useState('current'); // 'current' or 'previous'
  const [selectedPresident, setSelectedPresident] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [timelinePosition, setTimelinePosition] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePrevious = () => {
    setTimelinePosition(prev => Math.min(prev + 200, 0));
  };

  const handleNext = () => {
    const maxPosition = -(presidentsTimeline.length * 200 - 800);
    setTimelinePosition(prev => Math.max(prev - 200, maxPosition));
  };

  const handlePresidentClick = (president) => {
    setSelectedPresident(president);
  };

  // Presidents timeline data - extracted from previousBoards
  const presidentsTimeline = [
    {
      year: 2026,
      president: 'المهندس عبدالنبي الصباح',
      title: 'رئيس الجمعية',
      period: '2026 - حتى الآن',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Media-Jaffar-scaled.jpg',
      achievements: ['قيادة الجمعية نحو التميز', 'تطوير برامج التدريب المهني', 'تعزيز الشراكات الدولية']
    },
    {
      year: 2025,
      president: 'د. رائدة العلوي',
      title: 'رئيسة الجمعية',
      period: '2025 - 2026',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-President-Raida-scaled.jpg',
      achievements: ['استمرارية القيادة', 'تطوير البرامج المهنية', 'تعظيم الأثر المجتمعي']
    },
    {
      year: 2024,
      president: 'د. رائدة العلوي',
      title: 'رئيسة الجمعية',
      period: '2024 - 2025',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-President-Raida-scaled.jpg',
      achievements: ['التحول الرقمي', 'تطوير الخدمات', 'تعزيز العضوية']
    },
    {
      year: 2023,
      president: 'د. رائدة العلوي',
      title: 'رئيسة الجمعية',
      period: '2023 - 2024',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-President-Raida-scaled.jpg',
      achievements: ['قيادة الجمعية نحو التميز', 'تطوير برامج التدريب المهني', 'تعزيز الشراكات الدولية']
    },
    {
      year: 2022,
      president: 'د. رائدة العلوي',
      title: 'رئيسة الجمعية',
      period: '2022 - 2023',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-President-Raida-scaled.jpg',
      achievements: ['استمرارية القيادة', 'تطوير البرامج المهنية', 'تعظيم الأثر المجتمعي']
    },
    {
      year: 2021,
      president: 'د. رائدة العلوي',
      title: 'رئيسة الجمعية',
      period: '2021 - 2022',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-President-Raida-scaled.jpg',
      achievements: ['التحول الرقمي', 'تطوير الخدمات', 'تعزيز العضوية']
    },
    {
      year: 2020,
      president: 'د. ضياء عبدالعزيز توفيقي',
      title: 'رئيس الجمعية',
      period: '2020 - 2021',
      image: 'https://bse.bh/wp-content/uploads/Dr-Zia-Toufeeqi-President-2020-2021.jpg',
      achievements: ['إدارة أزمة كوفيد-19', 'استمرارية الخدمات', 'دعم المهندسين']
    },
    {
      year: 2019,
      president: 'د. ضياء عبدالعزيز توفيقي',
      title: 'رئيس الجمعية',
      period: '2019 - 2020',
      image: 'https://bse.bh/wp-content/uploads/Dr-Zia-Toufeeqi-President-2020-2021.jpg',
      achievements: ['تطوير الاستراتيجيات', 'تعزيز الشراكات', 'تحديث الهوية']
    },
    {
      year: 2018,
      president: 'د. ضياء توفيقي',
      title: 'رئيس الجمعية',
      period: '2018 - 2019',
      image: 'https://bse.bh/wp-content/uploads/Dr-Zia-Toufeeqi-President-2020-2021.jpg',
      achievements: ['تحديث الهوية البصرية', 'تطوير الخدمات الرقمية', 'تعزيز التواجد الإعلامي']
    },
    {
      year: 2017,
      president: 'م. مسعود إبراهيم الهرمي',
      title: 'رئيس الجمعية',
      period: '2017 - 2018',
      image: 'https://bse.bh/wp-content/uploads/Eng-Masoud-Harmi-President-2017-2018.jpg',
      achievements: ['تطوير البنية التحتية', 'تحديث المرافق', 'تطوير البرامج']
    },
    {
      year: 2016,
      president: 'م. مسعود إبراهيم الهرمي',
      title: 'رئيس الجمعية',
      period: '2016 - 2017',
      image: 'https://bse.bh/wp-content/uploads/Eng-Masoud-Harmi-President-2017-2018.jpg',
      achievements: ['استمرارية المشاريع', 'تطوير العضوية', 'تعزيز الأنشطة']
    },
    {
      year: 2015,
      president: 'م. مسعود إبراهيم الهرمي',
      title: 'رئيس الجمعية',
      period: '2015 - 2016',
      image: 'https://bse.bh/wp-content/uploads/Eng-Masoud-Harmi-President-2017-2018.jpg',
      achievements: ['تطوير الشراكات', 'تحديث الخدمات', 'تعزيز التواجد']
    },
    {
      year: 2014,
      president: 'م. مسعود إبراهيم الهرمي',
      title: 'رئيس الجمعية',
      period: '2014 - 2015',
      image: 'https://bse.bh/wp-content/uploads/Eng-Masoud-Harmi-President-2017-2018.jpg',
      achievements: ['تطوير الاستراتيجية', 'تعزيز العضوية', 'تحديث البرامج']
    },
    {
      year: 2013,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2013 - 2014',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2012,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2012 - 2013',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2011,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2011 - 2012',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2010,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2010 - 2011',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2009,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2009 - 2010',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2008,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2008 - 2009',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2007,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2007 - 2008',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2006,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2006 - 2007',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2005,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2005 - 2006',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2004,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2004 - 2005',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2003,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2003 - 2004',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2002,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2002 - 2003',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2001,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2001 - 2002',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 2000,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '2000 - 2001',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1999,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1999 - 2000',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1998,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1998 - 1999',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1997,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1997 - 1998',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1996,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1996 - 1997',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1995,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1995 - 1996',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1994,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1994 - 1995',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1993,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1993 - 1994',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1992,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1992 - 1993',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1991,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1991 - 1992',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1990,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1990 - 1991',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1989,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1989 - 1990',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1988,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1988 - 1989',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1987,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1987 - 1988',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1986,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1986 - 1987',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1985,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1985 - 1986',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1984,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1984 - 1985',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1983,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1983 - 1984',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1982,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1982 - 1983',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1981,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1981 - 1982',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1980,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1980 - 1981',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1979,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1979 - 1980',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1978,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1978 - 1979',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1977,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1977 - 1978',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1976,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1976 - 1977',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1975,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1975 - 1976',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1974,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1974 - 1975',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1973,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1973 - 1974',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    },
    {
      year: 1972,
      president: 'م. عبدالمجيد بشير القصاب',
      title: 'رئيس الجمعية',
      period: '1972 - 1973',
      image: 'https://bse.bh/wp-content/uploads/Eng-Abdul-Majeed-Ghassab-President-2013-2014.jpg',
      achievements: ['تأسيس الجمعية', 'تطوير الهيكل التنظيمي', 'تحديث الخدمات', 'تعزيز الشراكات']
    }
  ];

  const previousBoards = [
    {
      year: 2025,
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
      year: 2024,
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
    },
    {
      year: 2012,
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
    },
    {
      year: 2011,
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
    },
    {
      year: 2010,
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
    },
    {
      year: 2009,
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
    },
    {
      year: 2008,
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
    },
    {
      year: 2007,
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
    },
    {
      year: 2006,
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
    },
    {
      year: 2005,
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
    },
    {
      year: 2004,
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
    },
    {
      year: 2003,
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
    },
    {
      year: 2002,
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
    },
    {
      year: 2001,
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
    },
    {
      year: 2000,
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
    },
    {
      year: 1999,
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
    },
    {
      year: 1998,
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
    },
    {
      year: 1997,
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
    },
    {
      year: 1996,
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
    },
    {
      year: 1995,
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
    },
    {
      year: 1994,
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
    },
    {
      year: 1993,
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
    },
    {
      year: 1992,
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
    },
    {
      year: 1991,
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
    },
    {
      year: 1990,
      members: [
        { name: 'م. عبدالمجيد بشير القصاب', position: 'الرئيس' },
        { name: 'م. عبدالله أحمد جناحي', position: 'نائب الرئيس' },
        { name: 'م. محمد علي الخزاعي', position: 'أمين السر' },
        { name: 'م. حسين جعفر مكي', position: 'الأمين المالي' },
        { name: 'م. جميل خلف العلوي', position: 'مدير المؤتمرات' },
        { name: 'م. أحمد عبدال Rahman الخان', position: 'مدير شؤون العضوية والمهنة' },
        { name: 'م. هدى سلطان مبارك فرج', position: 'مديرة التدريب' },
        { name: 'م. عبدالنبي عبدالله الصباح', position: 'مدير الإعلام' },
        { name: 'م. أيمن محمد ناصر', position: 'مدير الأنشطة العامة' }
      ]
    },
    {
      year: 1989,
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
    },
    {
      year: 1988,
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
    },
    {
      year: 1987,
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
    },
    {
      year: 1986,
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
    },
    {
      year: 1985,
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
    },
    {
      year: 1984,
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
    },
    {
      year: 1983,
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
    },
    {
      year: 1982,
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
    },
    {
      year: 1981,
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
    },
    {
      year: 1980,
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
    },
    {
      year: 1979,
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
    },
    {
      year: 1978,
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
    },
    {
      year: 1977,
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
    },
    {
      year: 1976,
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
    },
    {
      year: 1975,
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
    },
    {
      year: 1974,
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
    },
    {
      year: 1973,
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
    },
    {
      year: 1972,
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
      name: currentLang === 'ar' ? 'المهندس عبدالنبي الصباح' : 'Eng. Abdulnabi Al-Sabbah',
      position: currentLang === 'ar' ? 'رئيس الجمعية' : 'President',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Media-Jaffar-scaled.jpg', // Using existing image as placeholder
      bio: currentLang === 'ar'
        ? 'المهندس عبدالنبي الصباح هو رئيس جمعية المهندسين البحرينية لعام 2026 ويتميز بخبرة واسعة في مجال الهندسة المدنية وإدارة المشاريع.'
        : 'Eng. Abdulnabi Al-Sabbah is the President of Bahrain Society of Engineers for 2026 with extensive experience in civil engineering and project management.',
      experience: currentLang === 'ar' ? '30+ سنة' : '30+ years',
      achievements: [
        currentLang === 'ar' ? 'قيادة الجمعية نحو التميز' : 'Leading the society towards excellence',
        currentLang === 'ar' ? 'تطوير برامج التدريب المهني' : 'Developing professional training programs',
        currentLang === 'ar' ? 'تعزيز الشراكات الدولية' : 'Enhancing international partnerships'
      ],
      education: [
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية' : 'Bachelor in Civil Engineering',
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
      name: currentLang === 'ar' ? 'المهندس جواد الجبل' : 'Eng. Javad Al-Jabal',
      position: currentLang === 'ar' ? 'نائب الرئيس' : 'Vice President',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Media-Jaffar-scaled.jpg', // Using existing image as placeholder
      bio: currentLang === 'ar'
        ? 'المهندس جواد الجبل هو نائب رئيس جمعية المهندسين البحرينية لعام 2026 ويتميز بخبرة واسعة في مجال الهندسة المدنية.'
        : 'Eng. Javad Al-Jabal is the Vice President of Bahrain Society of Engineers for 2026 with extensive experience in civil engineering.',
      experience: currentLang === 'ar' ? '25+ سنة' : '25+ years',
      achievements: [
        currentLang === 'ar' ? 'إدارة المشاريع الكبرى' : 'Managing major projects',
        currentLang === 'ar' ? 'تطوير البنية التحتية' : 'Developing infrastructure',
        currentLang === 'ar' ? 'الخبرة في مجال الهندسة المدنية' : 'Expertise in civil engineering'
      ],
      education: [
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية' : 'Bachelor in Civil Engineering',
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
        ? 'المهندسة هدى سلطان هي الأمين المالي لجمعية المهندسين البحرينية لعام 2026 وتتميز بخبرة واسعة في مجال الهندسة المالية وإدارة الميزانيات.'
        : 'Eng. Huda Sultan is the Treasurer of Bahrain Society of Engineers for 2026 with extensive experience in financial engineering and budget management.',
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
      name: currentLang === 'ar' ? 'المهندس جعفر محمد علي' : 'Eng. Jaffar Mohammed Ali',
      position: currentLang === 'ar' ? 'أمين السر والعلاقات الخارجية' : 'Secretary and External Relations',
      specialization: currentLang === 'ar' ? 'هندسة اتصالات' : 'Communications Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Media-Jaffar-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'المهندس جعفر محمد علي هو أمين السر والعلاقات الخارجية لجمعية المهندسين البحرينية لعام 2026 وتتميز بخبرة واسعة في مجال هندسة الاتصالات والعلاقات العامة.'
        : 'Eng. Jaffar Mohammed Ali is the Secretary and External Relations of Bahrain Society of Engineers for 2026 with extensive experience in communications engineering and public relations.',
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
      name: currentLang === 'ar' ? 'الدكتورة نها الزياني' : 'Dr. Noha Al-Zayani',
      position: currentLang === 'ar' ? 'مديرة شؤون تطوير الأعضاء' : 'Member Development Director',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-President-Raida-scaled.jpg', // Using existing image as placeholder
      bio: currentLang === 'ar'
        ? 'الدكتورة نها الزياني هي مديرة شؤون تطوير الأعضاء لجمعية المهندسين البحرينية لعام 2026 وتتميز بخبرة واسعة في مجال إدارة العضوية وتطوير المهنة الهندسية.'
        : 'Dr. Noha Al-Zayani is the Member Development Director of Bahrain Society of Engineers for 2026 with extensive experience in membership management and engineering profession development.',
      experience: currentLang === 'ar' ? '12 سنة' : '12 years',
      achievements: [
        currentLang === 'ar' ? 'إدارة شؤون الأعضاء' : 'Managing membership affairs',
        currentLang === 'ar' ? 'تطوير المهنة الهندسية' : 'Developing engineering profession',
        currentLang === 'ar' ? 'برامج التطوير المهني' : 'Professional development programs'
      ],
      education: [
        currentLang === 'ar' ? 'دكتوراه في الهندسة المدنية' : 'PhD in Civil Engineering',
        currentLang === 'ar' ? 'ماجستير في إدارة الأعمال' : 'Master in Business Administration'
      ],
      contact: {
        email: 'membership.director@bse.bh',
        phone: '+973 1772 7104',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 6,
      name: currentLang === 'ar' ? 'المهندس بدر سالمين' : 'Eng. Bader Salmeen',
      position: currentLang === 'ar' ? 'مدير العضوية وخدمة المجتمع' : 'Membership and Community Service Director',
      specialization: currentLang === 'ar' ? 'هندسة كهربائية' : 'Electrical Engineering',
      image: 'https://bse.bh/wp-content/uploads/Aamer-bin-rajab-bse-board-member-2023.jpeg', // Using existing image as placeholder
      bio: currentLang === 'ar'
        ? 'المهندس بدر سالمين هو مدير العضوية وخدمة المجتمع لجمعية المهندسين البحرينية لعام 2026 وتتميز بخبرة واسعة في مجال الهندسة الكهربائية.'
        : 'Eng. Bader Salmeen is the Membership and Community Service Director of Bahrain Society of Engineers for 2026 with extensive experience in electrical engineering.',
      experience: currentLang === 'ar' ? '15 سنة' : '15 years',
      achievements: [
        currentLang === 'ar' ? 'إدارة شؤون العضوية' : 'Managing membership affairs',
        currentLang === 'ar' ? 'خدمة المجتمع' : 'Community service',
        currentLang === 'ar' ? 'تطوير البرامج الخدمية' : 'Developing service programs'
      ],
      education: [
        currentLang === 'ar' ? 'بكالوريوس في الهندسة الكهربائية' : 'Bachelor in Electrical Engineering',
        currentLang === 'ar' ? 'ماجستير في إدارة الأعمال' : 'Master in Business Administration'
      ],
      contact: {
        email: 'membership.director@bse.bh',
        phone: '+973 1772 7105',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 7,
      name: currentLang === 'ar' ? 'المهندس خالد الشيخ' : 'Eng. Khalid Al-Sheikh',
      position: currentLang === 'ar' ? 'مدير الإعلام والعلاقات العامة' : 'Media and Public Relations Director',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Conference-Fareed-scaled.jpg', // Using existing image as placeholder
      bio: currentLang === 'ar'
        ? 'المهندس خالد الشيخ هو مدير الإعلام والعلاقات العامة لجمعية المهندسين البحرينية لعام 2026 وتتميز بخبرة واسعة في مجال الإعلام.'
        : 'Eng. Khalid Al-Sheikh is the Media and Public Relations Director of Bahrain Society of Engineers for 2026 with extensive experience in media.',
      experience: currentLang === 'ar' ? '18 سنة' : '18 years',
      achievements: [
        currentLang === 'ar' ? 'إدارة العلاقات العامة' : 'Managing public relations',
        currentLang === 'ar' ? 'الخبرة في الإعلام' : 'Expertise in media',
        currentLang === 'ar' ? 'التواصل المؤسسي' : 'Corporate communications'
      ],
      education: [
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية' : 'Bachelor in Civil Engineering',
        currentLang === 'ar' ? 'ماجستير في الإعلام' : 'Master in Media'
      ],
      contact: {
        email: 'media.director@bse.bh',
        phone: '+973 1772 7106',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 8,
      name: currentLang === 'ar' ? 'المهندس علي القطان' : 'Eng. Ali Al-Qatan',
      position: currentLang === 'ar' ? 'مدير الأنشطة الفنية والاجتماعية' : 'Arts and Social Activities Director',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Activities-Habib-scaled.jpg', // Using existing image as placeholder
      bio: currentLang === 'ar'
        ? 'المهندس علي القطان هو مدير الأنشطة الفنية والاجتماعية لجمعية المهندسين البحرينية لعام 2026 وتتميز بخبرة واسعة في تنظيم الفعاليات.'
        : 'Eng. Ali Al-Qatan is the Arts and Social Activities Director of Bahrain Society of Engineers for 2026 with extensive experience in event organization.',
      experience: currentLang === 'ar' ? '16 سنة' : '16 years',
      achievements: [
        currentLang === 'ar' ? 'تنظيم الأنشطة الفنية' : 'Organizing artistic activities',
        currentLang === 'ar' ? 'إدارة الفعاليات الاجتماعية' : 'Managing social events',
        currentLang === 'ar' ? 'تطوير البرامج الثقافية' : 'Developing cultural programs'
      ],
      education: [
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية' : 'Bachelor in Civil Engineering',
        currentLang === 'ar' ? 'ماجستير في إدارة الفعاليات' : 'Master in Event Management'
      ],
      contact: {
        email: 'activities.director@bse.bh',
        phone: '+973 1772 7107',
        location: currentLang === 'ar' ? 'المنامة، البحرين' : 'Manama, Bahrain'
      }
    },
    {
      id: 9,
      name: currentLang === 'ar' ? 'المهندس حبيب جبوري' : 'Eng. Habib Jubouri',
      position: currentLang === 'ar' ? 'مدير المؤتمرات والمنتديات' : 'Conferences and Forums Director',
      specialization: currentLang === 'ar' ? 'هندسة مدنية' : 'Civil Engineering',
      image: 'https://bse.bh/wp-content/uploads/BOARD-of-Directors-2022-Activities-Habib-scaled.jpg',
      bio: currentLang === 'ar'
        ? 'المهندس حبيب جبوري هو مدير المؤتمرات والمنتديات لجمعية المهندسين البحرينية لعام 2026 وتتميز بخبرة واسعة في تنظيم المؤتمرات.'
        : 'Eng. Habib Jubouri is the Conferences and Forums Director of Bahrain Society of Engineers for 2026 with extensive experience in conference organization.',
      experience: currentLang === 'ar' ? '16 سنة' : '16 years',
      achievements: [
        currentLang === 'ar' ? 'تنظيم المؤتمرات الهندسية' : 'Organizing engineering conferences',
        currentLang === 'ar' ? 'إدارة المنتديات المتخصصة' : 'Managing specialized forums',
        currentLang === 'ar' ? 'تطوير برامج المؤتمرات' : 'Developing conference programs'
      ],
      education: [
        currentLang === 'ar' ? 'بكالوريوس في الهندسة المدنية' : 'Bachelor in Civil Engineering',
        currentLang === 'ar' ? 'ماجستير في إدارة المؤتمرات' : 'Master in Conference Management'
      ],
      contact: {
        email: 'conferences@bse.bh',
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
        {/* Hero Section with Interactive Timeline */}
        <section className="relative h-[600px] lg:h-[700px] bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Bahrain Society of Engineers Building" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-between py-8">
            {/* Header */}
            <div className="text-center px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                  {currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}
                </h1>
                <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'رؤساء الجمعية على مر السنوات - خط زمني تفاعلي'
                    : 'Society Presidents Through the Years - Interactive Timeline'
                  }
                </p>
              </motion.div>

              {/* Selected President Details - Compact */}
              <AnimatePresence>
                {selectedPresident && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="mt-6 max-w-2xl mx-auto"
                  >
                    <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-4 shadow-xl relative overflow-hidden">
                      {/* Decorative gradient */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-xl"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <img 
                                src={selectedPresident.image} 
                                alt={selectedPresident.president}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white/50 shadow-lg"
                              />
                              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-blue-400 rounded-full border border-white shadow-sm"></div>
                              {/* Pulse effect */}
                              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                            </div>
                            <div>
                              <h3 className="text-white font-bold text-sm">{selectedPresident.president}</h3>
                              <p className="text-blue-200 text-xs">{selectedPresident.period}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="hidden sm:flex gap-1">
                              {selectedPresident.achievements.slice(0, 2).map((achievement, index) => (
                                <span key={index} className="bg-blue-500/20 text-blue-100 text-xs px-2 py-1 rounded-full border border-blue-400/20">
                                  {achievement}
                                </span>
                              ))}
                            </div>
                            <button
                              onClick={() => setSelectedPresident(null)}
                              className="w-6 h-6 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 group"
                            >
                              <svg className="w-3 h-3 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Continuous Timeline */}
            <div className="flex-1 flex items-center px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-7xl mx-auto">
                <div className="relative">
                  {/* Timeline Controls */}
                  <div className="flex justify-between items-center mb-6">
                    <button
                      onClick={handlePrevious}
                      className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <ChevronRight className="w-5 h-5" />
                      {currentLang === 'ar' ? 'السابق' : 'Previous'}
                    </button>
                    
                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {isPaused ? (
                        <>
                          {currentLang === 'ar' ? 'تشغيل' : 'Play'}
                          <div className="w-5 h-5 flex items-center justify-center">
                            <div className="w-0 h-0 border-l-8 border-l-white border-y-4 border-y-transparent"></div>
                          </div>
                        </>
                      ) : (
                        <>
                          {currentLang === 'ar' ? 'إيقاف' : 'Pause'}
                          <div className="w-5 h-5 flex items-center justify-center gap-1">
                            <div className="w-1 h-4 bg-white"></div>
                            <div className="w-1 h-4 bg-white"></div>
                          </div>
                        </>
                      )}
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {currentLang === 'ar' ? 'التالي' : 'Next'}
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Timeline Container */}
                  <div className="relative h-72 overflow-hidden">
                    {/* Timeline Line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/20 via-blue-500/40 to-blue-400/20 transform -translate-y-1/2"></div>
                    
                    {/* Timeline Items */}
                    <div
                      className="absolute inset-0"
                      style={{ 
                        transform: `translateX(${timelinePosition}px)`,
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      {!isPaused && (
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            x: currentLang === 'ar' ? [0, -presidentsTimeline.length * 180] : [0, presidentsTimeline.length * 180]
                          }}
                          transition={{
                            x: {
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 120,
                              ease: "linear"
                            }
                          }}
                        >
                          {[...presidentsTimeline, ...presidentsTimeline].map((president, index) => (
                            <TimelineItem
                              key={`${president.year}-${index}`}
                              president={president}
                              index={index}
                              onSelect={handlePresidentClick}
                            />
                          ))}
                        </motion.div>
                      )}
                      
                      {/* Static Timeline Items (when paused or for manual navigation) */}
                      {isPaused && (
                        <div className="absolute inset-0">
                          {presidentsTimeline.map((president, index) => (
                            <TimelineItem
                              key={president.year}
                              president={president}
                              index={index}
                              onSelect={handlePresidentClick}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline Info */}
                  <div className="mt-6 text-center">
                    <p className="text-blue-200 text-sm">
                      {currentLang === 'ar' 
                        ? 'خط زمني متحرك يعرض رؤساء الجمعية عبر السنوات 2013 - 2023'
                        : 'Animated timeline showing society presidents from 2013 - 2023'
                      }
                    </p>
                  </div>
                </div>
              </div>
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

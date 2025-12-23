import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Download, Calendar, Users, TrendingUp, Award, BarChart3, Eye, Clock, CheckCircle, AlertCircle, ArrowRight, Search, Filter, Globe, X, Menu, ChevronDown, FileDown, Languages } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GeneralAssemblyReports = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reports = [
    {
      id: 1,
      year: '2025',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2025-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2025-Arabic.pdf',
      englishTitle: 'AGM report 2025 English',
      arabicTitle: 'تقرير 2025 عربي',
      status: 'published'
    },
    {
      id: 2,
      year: '2024',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2024-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2024-Arabic.pdf',
      englishTitle: 'AGM report 2024 English',
      arabicTitle: 'تقرير 2024 عربي',
      status: 'published'
    },
    {
      id: 3,
      year: '2023',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2023-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2023-Arabic.pdf',
      englishTitle: 'AGM report 2023 English',
      arabicTitle: 'تقرير 2023 عربي',
      status: 'published'
    },
    {
      id: 4,
      year: '2022',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2022-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2022-Arabic.pdf',
      englishTitle: 'AGM report 2022 English',
      arabicTitle: 'تقرير 2022 عربي',
      status: 'published'
    },
    {
      id: 5,
      year: '2021',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2021-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2021-Arabic.pdf',
      englishTitle: 'AGM report 2021 English',
      arabicTitle: 'تقرير 2021 عربي',
      status: 'published'
    },
    {
      id: 6,
      year: '2020',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2020-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2020-Arabic.pdf',
      englishTitle: 'AGM report 2020 English',
      arabicTitle: 'تقرير 2020 عربي',
      status: 'published'
    },
    {
      id: 7,
      year: '2019',
      englishUrl: null,
      arabicUrl: null,
      englishTitle: 'AGM report 2019 English',
      arabicTitle: 'تقرير 2019 عربي',
      status: 'published'
    },
    {
      id: 8,
      year: '2018',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2018-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2018-Arabic.pdf',
      englishTitle: 'AGM report 2018 English',
      arabicTitle: 'تقرير 2018 عربي',
      status: 'published'
    },
    {
      id: 9,
      year: '2017',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2017-English-.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2017-Arabic-.pdf',
      englishTitle: 'AGM report 2017 English',
      arabicTitle: 'تقرير 2017 عربي',
      status: 'published'
    },
    {
      id: 10,
      year: '2016',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2016-English-.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2016-English.pdf',
      englishTitle: 'AGM report 2016 English',
      arabicTitle: 'تقرير 2016 عربي',
      status: 'published'
    },
    {
      id: 11,
      year: '2015',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2015-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2015-Arabic-.pdf',
      englishTitle: 'AGM report 2015 English',
      arabicTitle: 'تقرير 2015 عربي',
      status: 'published'
    },
    {
      id: 12,
      year: '2014',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2014-Engilsh.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Reoport-2014-Arabic.pdf',
      englishTitle: 'AGM report 2014 English',
      arabicTitle: 'تقرير 2014 عربي',
      status: 'published'
    },
    {
      id: 13,
      year: '2013',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2013-English-.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2013-Arabic-.pdf',
      englishTitle: 'AGM report 2013 English',
      arabicTitle: 'تقرير 2013 عربي',
      status: 'published'
    },
    {
      id: 14,
      year: '2012',
      englishUrl: null,
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2012-Arabic.pdf',
      englishTitle: 'AGM report 2012 English',
      arabicTitle: 'تقرير 2012 عربي',
      status: 'published'
    },
    {
      id: 15,
      year: '2011',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2011-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2011-Arabic.pdf',
      englishTitle: 'AGM report 2011 English',
      arabicTitle: 'تقرير 2011 عربي',
      status: 'published'
    },
    {
      id: 16,
      year: '2010',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2010-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2010-Arabic.pdf',
      englishTitle: 'AGM report 2010 English',
      arabicTitle: 'تقرير 2010 عربي',
      status: 'published'
    },
    {
      id: 17,
      year: '2009',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2009-English.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2009-Arabic.pdf',
      englishTitle: 'AGM report 2009 English',
      arabicTitle: 'تقرير 2009 عربي',
      status: 'published'
    },
    {
      id: 18,
      year: '2008',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2008-Englsih-.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2008-Arabic-.pdf',
      englishTitle: 'AGM report 2008 English',
      arabicTitle: 'تقرير 2008 عربي',
      status: 'published'
    },
    {
      id: 19,
      year: '2007',
      englishUrl: null,
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2007-Arabic-.pdf',
      englishTitle: 'AGM report 2007 English',
      arabicTitle: 'تقرير 2007 عربي',
      status: 'published'
    },
    {
      id: 20,
      year: '2006',
      englishUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2006-English-.pdf',
      arabicUrl: 'https://bse.bh/wp-content/uploads/AGM-Report-2006-Arabic-.pdf',
      englishTitle: 'AGM report 2006 English',
      arabicTitle: 'تقرير 2006 عربي',
      status: 'published'
    }
  ];

  // Filter and search functions
  const filteredReports = reports.filter(report => {
    const matchesSearch = searchTerm === '' || 
      report.year.includes(searchTerm) ||
      report.englishTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.arabicTitle.includes(searchTerm);
    
    const matchesYear = filterYear === 'all' || report.year === filterYear;
    
    const matchesLanguage = filterLanguage === 'all' || 
      (filterLanguage === 'english' && report.englishUrl) ||
      (filterLanguage === 'arabic' && report.arabicUrl);
    
    return matchesSearch && matchesYear && matchesLanguage;
  });

  const financialHighlights = [
    {
      year: '2023',
      revenue: currentLang === 'ar' ? '2.8 مليون دينار' : '2.8 million BHD',
      expenses: currentLang === 'ar' ? '2.3 مليون دينار' : '2.3 million BHD',
      surplus: currentLang === 'ar' ? '0.5 مليون دينار' : '0.5 million BHD',
      growth: '+15%'
    },
    {
      year: '2022',
      revenue: currentLang === 'ar' ? '2.4 مليون دينار' : '2.4 million BHD',
      expenses: currentLang === 'ar' ? '2.0 مليون دينار' : '2.0 million BHD',
      surplus: currentLang === 'ar' ? '0.4 مليون دينار' : '0.4 million BHD',
      growth: '+12%'
    },
    {
      year: '2021',
      revenue: currentLang === 'ar' ? '2.1 مليون دينار' : '2.1 million BHD',
      expenses: currentLang === 'ar' ? '1.8 مليون دينار' : '1.8 million BHD',
      surplus: currentLang === 'ar' ? '0.3 مليون دينار' : '0.3 million BHD',
      growth: '+8%'
    }
  ];

  const upcomingMeetings = [
    {
      date: currentLang === 'ar' ? '15 ديسمبر 2024' : 'December 15, 2024',
      title: currentLang === 'ar' ? 'الجمعية العمومية السنوية 2024' : 'Annual General Assembly 2024',
      location: currentLang === 'ar' ? 'فندق الدلماين، المنامة' : 'Dilmun Hotel, Manama',
      agenda: [
        currentLang === 'ar' ? 'مناقشة تقرير العام 2024' : 'Discussing the 2024 annual report',
        currentLang === 'ar' ? 'اعتماد الميزانية المقترحة 2025' : 'Approving the proposed 2025 budget',
        currentLang === 'ar' ? 'انتخاب مجلس إدارة جديد' : 'Electing a new board of directors',
        currentLang === 'ar' ? 'مناقشة المبادرات المستقبلية' : 'Discussing future initiatives'
      ]
    },
    {
      date: currentLang === 'ar' ? '20 مارس 2025' : 'March 20, 2025',
      title: currentLang === 'ar' ? 'اجتماع طارئ للجمعية العمومية' : 'Emergency General Assembly Meeting',
      location: currentLang === 'ar' ? 'مقر الجمعية، المنامة' : 'Society Headquarters, Manama',
      agenda: [
        currentLang === 'ar' ? 'مناقشة تعديلات النظام الأساسي' : 'Discussing bylaws amendments',
        currentLang === 'ar' ? 'اعتماد سياسات جديدة' : 'Adopting new policies',
        currentLang === 'ar' ? 'مشاريع استثمارية مقترحة' : 'Proposed investment projects'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-slate-600/90 text-white';
      case 'draft':
        return 'bg-yellow-600/90 text-white';
      case 'pending':
        return 'bg-orange-600/90 text-white';
      default:
        return 'bg-gray-600/90 text-white';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published':
        return currentLang === 'ar' ? 'منشور' : 'Published';
      case 'draft':
        return currentLang === 'ar' ? 'مسودة' : 'Draft';
      case 'pending':
        return currentLang === 'ar' ? 'معلق' : 'Pending';
      default:
        return currentLang === 'ar' ? 'غير معروف' : 'Unknown';
    }
  };

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
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Annual Reports and Business Meeting" 
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
                  {currentLang === 'ar' ? 'تقارير الجمعية العمومية' : 'General Assembly Reports'}
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  {currentLang === 'ar'
                    ? 'التقارير السنوية التي تعكس شفافية ومساءلة الجمعية'
                    : 'Annual reports that reflect the society\'s transparency and accountability'
                  }
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'التقارير السنوية' : 'Annual Reports'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'جميع تقارير الجمعية العمومية متاحة للتحميل والمراجعة' : 'All general assembly reports are available for download and review'}
              </p>
            </motion.div>

            {/* Professional Search and Filter Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100">
              {/* Advanced Search Bar */}
              <div className="mb-6">
                <div className={`relative transition-all duration-300 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Search className={`w-6 h-6 transition-colors duration-300 ${isSearchFocused ? 'text-blue-600' : 'text-gray-400'}`} />
                  </div>
                  <input
                    type="text"
                    placeholder={currentLang === 'ar' ? 'ابحث عن تقرير بالسنة أو بالاسم...' : 'Search by year or report name...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={`w-full pr-12 pl-4 py-4 text-lg border-2 rounded-2xl transition-all duration-300 ${
                      isSearchFocused 
                        ? 'border-blue-500 bg-blue-50/30 shadow-lg' 
                        : 'border-gray-200 bg-gray-50/50 hover:border-gray-300'
                    } focus:outline-none focus:ring-4 focus:ring-blue-500/20`}
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>
                  )}
                </div>
              </div>

              {/* Advanced Filters Toggle */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Filter className="w-5 h-5" />
                  <span>{currentLang === 'ar' ? 'الفلاتر المتقدمة' : 'Advanced Filters'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAdvancedFilters ? 'rotate-180' : ''}`} />
                </button>

                {/* Results Count */}
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-xl">
                  <span className="text-blue-600 font-medium">
                    {filteredReports.length} {currentLang === 'ar' ? 'نتيجة' : 'results'}
                  </span>
                </div>
              </div>

              {/* Advanced Filters Panel */}
              {showAdvancedFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-blue-50/50 to-slate-50/50 rounded-2xl border border-blue-100"
                >
                  {/* Year Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentLang === 'ar' ? 'السنة' : 'Year'}
                    </label>
                    <select
                      value={filterYear}
                      onChange={(e) => setFilterYear(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="all">{currentLang === 'ar' ? 'جميع السنوات' : 'All Years'}</option>
                      {reports.map(report => (
                        <option key={report.year} value={report.year}>{report.year}</option>
                      ))}
                    </select>
                  </div>

                  {/* Language Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentLang === 'ar' ? 'اللغة' : 'Language'}
                    </label>
                    <select
                      value={filterLanguage}
                      onChange={(e) => setFilterLanguage(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      <option value="all">{currentLang === 'ar' ? 'جميع اللغات' : 'All Languages'}</option>
                      <option value="english">{currentLang === 'ar' ? 'الإنجليزية' : 'English'}</option>
                      <option value="arabic">{currentLang === 'ar' ? 'العربية' : 'Arabic'}</option>
                    </select>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentLang === 'ar' ? 'إجراءات سريعة' : 'Quick Actions'}
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          setSearchTerm('');
                          setFilterYear('all');
                          setFilterLanguage('all');
                        }}
                        className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
                      >
                        {currentLang === 'ar' ? 'مسح' : 'Clear'}
                      </button>
                      <button
                        onClick={() => setShowAdvancedFilters(false)}
                        className="flex-1 px-4 py-3 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-xl font-medium transition-colors duration-200"
                      >
                        {currentLang === 'ar' ? 'تطبيق' : 'Apply'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Reports List */}
        <section className="py-8 lg:py-16 bg-gradient-to-br from-white via-slate-50 to-blue-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-slate-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Professional Reports Table */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Table Header with Language Selector */}
              <div className="bg-gradient-to-r from-slate-700 via-blue-700 to-slate-800 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {currentLang === 'ar' ? 'قائمة التقارير' : 'Reports List'}
                      </h3>
                      <p className="text-blue-100 text-sm">
                        {filteredReports.length} {currentLang === 'ar' ? 'تقرير متاح' : 'reports available'}
                      </p>
                    </div>
                  </div>

                  {/* Language Selector Sidebar */}
                  <div className="relative">
                    <button
                      onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                      className="flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 rounded-2xl text-white transition-all duration-300"
                    >
                      <Languages className="w-5 h-5" />
                      <span className="font-medium">
                        {currentLang === 'ar' ? 'اللغة' : 'Language'}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLanguageMenu ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Language Dropdown Menu */}
                    {showLanguageMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                      >
                        <button
                          onClick={() => {
                            setFilterLanguage('all');
                            setShowLanguageMenu(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3 ${
                            filterLanguage === 'all' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <Globe className="w-4 h-4" />
                          <span>{currentLang === 'ar' ? 'جميع اللغات' : 'All Languages'}</span>
                        </button>
                        <button
                          onClick={() => {
                            setFilterLanguage('english');
                            setShowLanguageMenu(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3 ${
                            filterLanguage === 'english' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">E</span>
                          </div>
                          <span>{currentLang === 'ar' ? 'الإنجليزية' : 'English'}</span>
                        </button>
                        <button
                          onClick={() => {
                            setFilterLanguage('arabic');
                            setShowLanguageMenu(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 flex items-center gap-3 ${
                            filterLanguage === 'arabic' ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                          }`}
                        >
                          <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">ع</span>
                          </div>
                          <span>{currentLang === 'ar' ? 'العربية' : 'Arabic'}</span>
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>

              {/* Table Content */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-center font-bold text-gray-900">
                        <div className="flex items-center justify-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          {currentLang === 'ar' ? 'السنة' : 'Year'}
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center font-bold text-gray-900">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">E</span>
                          </div>
                          {currentLang === 'ar' ? 'تقرير إنجليزي' : 'English Report'}
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center font-bold text-gray-900">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">ع</span>
                          </div>
                          {currentLang === 'ar' ? 'تقرير عربي' : 'Arabic Report'}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredReports.length > 0 ? (
                      filteredReports.map((report, index) => (
                        <motion.tr
                          key={report.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          whileHover={{ backgroundColor: '#f0f9ff', scale: 1.01 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="border-b border-gray-100 hover:bg-blue-50/50 transition-all duration-200"
                        >
                          <td className="px-6 py-6 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-slate-100 rounded-2xl font-bold text-lg text-gray-900 shadow-sm">
                              {report.year}
                            </div>
                          </td>
                          <td className="px-6 py-6 text-center">
                            {report.englishUrl ? (
                              <motion.a
                                href={report.englishUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                <FileDown className="w-5 h-5" />
                                <span>{report.englishTitle}</span>
                                <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                              </motion.a>
                            ) : (
                              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 text-gray-400 rounded-2xl font-medium cursor-not-allowed">
                                <FileDown className="w-5 h-5" />
                                <span>{report.englishTitle}</span>
                              </div>
                            )}
                          </td>
                          <td className="px-6 py-6 text-center">
                            {report.arabicUrl ? (
                              <motion.a
                                href={report.arabicUrl}
                                target="_blank"
                                rel="noreferrer noopener"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                <FileDown className="w-5 h-5" />
                                <span>{report.arabicTitle}</span>
                                <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                              </motion.a>
                            ) : (
                              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 text-gray-400 rounded-2xl font-medium cursor-not-allowed">
                                <FileDown className="w-5 h-5" />
                                <span>{report.arabicTitle}</span>
                              </div>
                            )}
                          </td>
                        </motion.tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="px-6 py-16 text-center text-gray-500">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center max-w-md mx-auto"
                          >
                            <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mb-6">
                              <FileText className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-700 mb-3">
                              {currentLang === 'ar' ? 'لا توجد تقارير مطابقة' : 'No matching reports found'}
                            </h3>
                            <p className="text-gray-500 mb-6">
                              {currentLang === 'ar' 
                                ? 'حاول تعديل معايير البحث أو الفلترة للعثور على التقارير' 
                                : 'Try adjusting your search or filter criteria to find reports'
                              }
                            </p>
                            <button
                              onClick={() => {
                                setSearchTerm('');
                                setFilterYear('all');
                                setFilterLanguage('all');
                              }}
                              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium transition-colors duration-200"
                            >
                              {currentLang === 'ar' ? 'مسح الفلاتر' : 'Clear Filters'}
                            </button>
                          </motion.div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Highlights Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-slate-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-slate-300/30 to-blue-300/30 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-slate-300/30 rounded-full blur-3xl animate-bounce delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'الملخص المالي' : 'Financial Summary'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'نظرة عامة على الأداء المالي للجمعية خلال السنوات الأخيرة' : 'Overview of the society\'s financial performance in recent years'}
              </p>
            </motion.div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-3xl shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-slate-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'السنة' : 'Year'}</th>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'الإيرادات' : 'Revenue'}</th>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'المصروفات' : 'Expenses'}</th>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'الفائض' : 'Surplus'}</th>
                    <th className="px-6 py-4 text-right">{currentLang === 'ar' ? 'النمو' : 'Growth'}</th>
                  </tr>
                </thead>
                <tbody>
                  {financialHighlights.map((item, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b hover:bg-slate-50 transition-colors duration-300"
                    >
                      <td className="px-6 py-4 font-bold text-gray-900">{item.year}</td>
                      <td className="px-6 py-4 text-gray-700">{item.revenue}</td>
                      <td className="px-6 py-4 text-gray-700">{item.expenses}</td>
                      <td className="px-6 py-4 text-slate-600 font-bold">{item.surplus}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                          {item.growth}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Upcoming Meetings Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-slate-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {currentLang === 'ar' ? 'الاجتماعات القادمة' : 'Upcoming Meetings'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'جدول اجتماعات الجمعية العمومية القادمة' : 'Schedule of upcoming general assembly meetings'}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingMeetings.map((meeting, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{meeting.title}</h3>
                      <div className="flex items-center text-slate-600 text-sm mb-3">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{meeting.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{meeting.location}</span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-gray-900 mb-2 text-sm">
                          {currentLang === 'ar' ? 'جدول الأعمال' : 'Agenda'}
                        </h4>
                        <div className="space-y-2">
                          {meeting.agenda.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Information Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-600 to-blue-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {currentLang === 'ar' ? 'معلومات هامة' : 'Important Information'}
              </h2>
              <p className="text-xl text-slate-100 max-w-2xl mx-auto">
                {currentLang === 'ar' 
                  ? 'كل ما تحتاج معرفته عن اجتماعات الجمعية العمومية'
                  : 'Everything you need to know about general assembly meetings'
                }
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <AlertCircle className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'الحقوق والواجبات' : 'Rights and Responsibilities',
                  description: currentLang === 'ar'
                    ? 'لجميع الأعضاء الحق في حضور الجمعية العمومية والتصويت على القرارات والمشاركة في صنع القرار.'
                    : 'All members have the right to attend the general assembly, vote on decisions, and participate in decision-making.'
                },
                {
                  icon: <Eye className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'الشفافية والنزاهة' : 'Transparency and Integrity',
                  description: currentLang === 'ar'
                    ? 'جميع قرارات الجمعية العمومية يتم توثيقها ونشرها لضمان الشفافية الكاملة.'
                    : 'All general assembly decisions are documented and published to ensure complete transparency.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'المشاركة الفعالة' : 'Active Participation',
                  description: currentLang === 'ar'
                    ? 'نشجع جميع الأعضاء على المشاركة الفعالة في اجتماعات الجمعية العمومية لإثراء النقاش.'
                    : 'We encourage all members to actively participate in general assembly meetings to enrich the discussion.'
                },
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: currentLang === 'ar' ? 'الوثائق الرسمية' : 'Official Documents',
                  description: currentLang === 'ar'
                    ? 'يمكن الحصول على نسخ رسمية من تقارير الجمعية العمومية من مقر الجمعية.'
                    : 'Official copies of general assembly reports can be obtained from the society headquarters.'
                }
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-8"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                  <p className="text-slate-100 leading-relaxed">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-green-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-slate-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-slate-600 to-blue-600 bg-clip-text text-transparent mb-6">
                {currentLang === 'ar' ? 'للمزيد من المعلومات' : 'For More Information'}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                {currentLang === 'ar' 
                  ? 'تواصل معنا للحصول على أي معلومات إضافية حول تقارير الجمعية العمومية'
                  : 'Contact us for any additional information about general assembly reports'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-slate-600 to-blue-600 hover:from-slate-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </button>
                <button className="bg-transparent border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
                  {currentLang === 'ar' ? 'الأرشيف الكامل' : 'Full Archive'}
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GeneralAssemblyReports;

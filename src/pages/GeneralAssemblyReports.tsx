import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ReportsHeroSection,
  SearchFilterSection,
  ReportsListSection,
  FinancialHighlightsSection,
  UpcomingMeetingsSection,
  ImportantInfoSection,
  ReportsContactSection,
} from "@/components/reports/ReportsBlueprintSections";
import "@/styles/bse-blueprint.css";

const GeneralAssemblyReports = () => {
  const { lang: currentLang, dir } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [filterLanguage, setFilterLanguage] = useState('all');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

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

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilterYear('all');
    setFilterLanguage('all');
  };

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />
      
      <main className="bse-blueprint">
        <ReportsHeroSection currentLang={currentLang} />
        <SearchFilterSection
          currentLang={currentLang}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterYear={filterYear}
          setFilterYear={setFilterYear}
          filterLanguage={filterLanguage}
          setFilterLanguage={setFilterLanguage}
          showAdvancedFilters={showAdvancedFilters}
          setShowAdvancedFilters={setShowAdvancedFilters}
          isSearchFocused={isSearchFocused}
          setIsSearchFocused={setIsSearchFocused}
          filteredReportsCount={filteredReports.length}
          reports={reports}
        />
        <ReportsListSection
          currentLang={currentLang}
          filteredReports={filteredReports}
          showLanguageMenu={showLanguageMenu}
          setShowLanguageMenu={setShowLanguageMenu}
          filterLanguage={filterLanguage}
          setFilterLanguage={setFilterLanguage}
          onClearFilters={handleClearFilters}
        />
        <FinancialHighlightsSection currentLang={currentLang} financialHighlights={financialHighlights} />
        <UpcomingMeetingsSection currentLang={currentLang} upcomingMeetings={upcomingMeetings} />
        <ImportantInfoSection currentLang={currentLang} />
        <ReportsContactSection currentLang={currentLang} />
      </main>

      <Footer />
    </div>
  );
};

export default GeneralAssemblyReports;

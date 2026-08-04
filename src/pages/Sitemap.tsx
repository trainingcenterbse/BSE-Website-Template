import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { navGroups, relatedSites } from "@/data/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowLeft, ExternalLink, Home, Users, Calendar, FileText, Shield, ChevronRight } from "lucide-react";

const Sitemap = () => {
  const { lang: currentLang, t } = useLanguage();
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev => {
      const newSet = new Set(prev);
      if (newSet.has(groupId)) {
        newSet.delete(groupId);
      } else {
        newSet.add(groupId);
      }
      return newSet;
    });
  };

  const Arrow = currentLang === "ar" ? ArrowLeft : ArrowRight;

  const getGroupIcon = (id: string) => {
    switch (id) {
      case "home": return Home;
      case "about": return Users;
      case "media": return Calendar;
      case "members": return Shield;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {currentLang === 'ar' ? 'خارطة الموقع' : 'Sitemap'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentLang === 'ar'
                ? 'تصفح جميع صفحات وأقسام موقع جمعية المهندسين البحرينية'
                : 'Browse all pages and sections of the Bahrain Society of Engineers website'
              }
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Navigation */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg"
              >
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {currentLang === 'ar' ? 'التنقل الرئيسي' : 'Main Navigation'}
                </h2>

                <div className="space-y-4">
                  {navGroups.map((group, index) => {
                    const Icon = getGroupIcon(group.id);
                    const isExpanded = expandedGroups.has(group.id);

                    return (
                      <motion.div
                        key={group.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                        className="border border-border rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() => toggleGroup(group.id)}
                          className="w-full flex items-center justify-between p-4 bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-left">
                              <h3 className="font-bold text-foreground">
                                {t(group.ar, group.en)}
                              </h3>
                              <p className="text-xs text-muted-foreground">
                                {group.items.length} {currentLang === 'ar' ? 'صفحات' : 'pages'}
                              </p>
                            </div>
                          </div>
                          <ChevronRight
                            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                              isExpanded ? 'rotate-90' : ''
                            }`}
                          />
                        </button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? "auto" : 0,
                            opacity: isExpanded ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0">
                            <ul className="space-y-2">
                              {group.items.map((item) => (
                                <li key={item.path}>
                                  <a
                                    href={item.path}
                                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                                  >
                                    <Arrow className="w-4 h-4" />
                                    <span>{t(item.ar, item.en)}</span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Related Sites */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg"
              >
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  {currentLang === 'ar' ? 'المواقع المرتبطة' : 'Related Sites'}
                </h2>

                <div className="space-y-3">
                  {relatedSites.map((site, index) => (
                    <motion.a
                      key={site.en}
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                    >
                      <img
                        src={site.logo}
                        alt={t(site.ar, site.en)}
                        className="w-10 h-10 rounded-full object-contain bg-card p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-foreground text-sm truncate">
                          {t(site.ar, site.en)}
                        </div>
                        <div className="text-xs text-muted-foreground truncate">
                          {site.url}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-6 shadow-lg mt-6"
              >
                <h2 className="text-xl font-bold mb-4">
                  {currentLang === 'ar' ? 'إحصائيات سريعة' : 'Quick Stats'}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/80">
                      {currentLang === 'ar' ? 'إجمالي الصفحات' : 'Total Pages'}
                    </span>
                    <span className="font-bold text-2xl">
                      {navGroups.reduce((acc, group) => acc + group.items.length, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/80">
                      {currentLang === 'ar' ? 'الأقسام الرئيسية' : 'Main Sections'}
                    </span>
                    <span className="font-bold text-2xl">
                      {navGroups.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/80">
                      {currentLang === 'ar' ? 'المواقع المرتبطة' : 'Related Sites'}
                    </span>
                    <span className="font-bold text-2xl">
                      {relatedSites.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;

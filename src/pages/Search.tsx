import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { navGroups } from "@/data/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ExternalLink, ArrowRight, ArrowLeft, FileText } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const { lang: currentLang, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const Arrow = currentLang === "ar" ? ArrowLeft : ArrowRight;

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const queryLower = searchQuery.toLowerCase();
    const results: any[] = [];

    navGroups.forEach(group => {
      group.items.forEach(item => {
        const arText = item.ar.toLowerCase();
        const enText = item.en.toLowerCase();

        if (arText.includes(queryLower) || enText.includes(queryLower)) {
          results.push({
            ...item,
            groupTitle: currentLang === 'ar' ? group.ar : group.en,
            groupId: group.id
          });
        }
      });
    });

    setSearchResults(results);
  }, [searchQuery, currentLang]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newUrl = `/search?q=${encodeURIComponent(searchQuery)}`;
    window.history.pushState({}, '', newUrl);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {currentLang === 'ar' ? 'بحث' : 'Search'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {currentLang === 'ar' ? 'ابحث في جميع صفحات موقع جمعية المهندسين البحرينية' : 'Search all pages of the Bahrain Society of Engineers website'}
            </p>
          </motion.div>

          {/* Search Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <form onSubmit={handleSearch} className="relative">
              <Search className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${currentLang === 'ar' ? 'right-4' : 'left-4'}`} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={currentLang === 'ar' ? 'ابحث في الموقع...' : 'Search website...'}
                className={`w-full ${currentLang === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 rounded-2xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-lg shadow-lg border border-gray-200 dark:border-gray-700`}
              />
              <button
                type="submit"
                className={`absolute top-1/2 -translate-y-1/2 ${currentLang === 'ar' ? 'left-4' : 'right-4'} px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors`}
              >
                {currentLang === 'ar' ? 'بحث' : 'Search'}
              </button>
            </form>
          </motion.div>

          {/* Search Results */}
          {searchQuery.trim() !== '' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {searchResults.length > 0 ? (
                <>
                  {/* Results Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-foreground">
                      {currentLang === 'ar' ? `نتائج البحث (${searchResults.length})` : `Search Results (${searchResults.length})`}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      {currentLang === 'ar' ? 'للاستعلام' : 'for'} "{searchQuery}"
                    </span>
                  </div>

                  {/* Results List */}
                  <div className="space-y-4">
                    {searchResults.map((result, index) => (
                      <motion.a
                        key={index}
                        href={result.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        className="block bg-card border border-border rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium">
                                {result.groupTitle}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {currentLang === 'ar' ? result.ar : result.en}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="text-gray-400">{result.path}</span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Arrow className={`w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors ${currentLang === 'ar' ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-400 dark:text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {currentLang === 'ar' ? 'لا توجد نتائج' : 'No results found'}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {currentLang === 'ar' ? 'جرب البحث بكلمات مختلفة' : 'Try searching with different keywords'}
                  </p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
                  >
                    {currentLang === 'ar' ? 'مسح البحث' : 'Clear search'}
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Empty State */}
          {searchQuery.trim() === '' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400 dark:text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {currentLang === 'ar' ? 'ابدأ البحث' : 'Start searching'}
              </h3>
              <p className="text-muted-foreground">
                {currentLang === 'ar' ? 'أدخل كلمات البحث في الأعلى للعثور على الصفحات' : 'Enter search terms above to find pages'}
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchPage;

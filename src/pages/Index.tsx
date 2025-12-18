import { useState, useEffect } from "react";
import { ArrowRight, Building, Users, Award, TrendingUp, Calendar, Mail, ChevronRight, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { icon: Users, value: "5000+", label: currentLang === 'ar' ? 'عضو' : 'Members' },
    { icon: Building, value: "50+", label: currentLang === 'ar' ? 'شريك' : 'Partners' },
    { icon: Award, value: "200+", label: currentLang === 'ar' ? 'حدث' : 'Events' },
    { icon: TrendingUp, value: "45", label: currentLang === 'ar' ? 'سنة' : 'Years' }
  ];

  const services = [
    {
      icon: Building,
      title: currentLang === 'ar' ? 'العضوية' : 'Membership',
      description: currentLang === 'ar' ? 'انضم إلى مجتمع المهندسين المحترفين واستفد من الفرص الحصرية' : 'Join the professional engineering community and benefit from exclusive opportunities',
      color: 'blue'
    },
    {
      icon: Calendar,
      title: currentLang === 'ar' ? 'المؤتمرات' : 'Conferences',
      description: currentLang === 'ar' ? 'شارك في المؤتمرات والفعاليات المتخصصة' : 'Participate in specialized conferences and events',
      color: 'purple'
    },
    {
      icon: Award,
      title: currentLang === 'ar' ? 'التدريب' : 'Training',
      description: currentLang === 'ar' ? 'طور مهاراتك من خلال برامجنا المعتمدة' : 'Develop your skills through our accredited programs',
      color: 'green'
    },
    {
      icon: Users,
      title: currentLang === 'ar' ? 'الشبكات' : 'Networking',
      description: currentLang === 'ar' ? 'تواصل مع المهندسين وقم ببناء علاقات مهنية' : 'Connect with engineers and build professional relationships',
      color: 'orange'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      
      <main className="relative -mt-20">
        {/* Hero Section */}
        <Hero />

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    <stat.icon className="h-12 w-12 mx-auto mb-4 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    <div className="text-3xl lg:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-blue-900 mb-4">
                {currentLang === 'ar' ? 'خدماتنا' : 'Our Services'}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'نقدم مجموعة شاملة من الخدمات المهنية للمهندسين' : 'We offer a comprehensive range of professional services for engineers'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-${service.color}-100 group-hover:bg-${service.color}-200 transition-colors`}>
                      <service.icon className={`h-8 w-8 text-${service.color}-600 group-hover:text-${service.color}-700 transition-colors`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors mt-4" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <Sparkles className="h-16 w-16 mx-auto text-white mb-4 animate-pulse" />
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                {currentLang === 'ar' ? 'كن جزءاً من المستقبل' : 'Be Part of the Future'}
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'انضم إلى مجتمع المهندسين المحترفين وساهم في تطوير القطاع' : 'Join the professional engineering community and contribute to sector development'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full hover:scale-105 transition-all shadow-xl">
                  {currentLang === 'ar' ? 'انضم الآن' : 'Join Now'}
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all">
                  {currentLang === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 text-center">
              <Mail className="h-16 w-16 mx-auto text-blue-600 mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                {currentLang === 'ar' ? 'ابق على تواصل' : 'Stay Connected'}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {currentLang === 'ar' ? 'احصل على آخر الأخبار والفعاليات والفرص المهنية' : 'Get the latest news, events, and professional opportunities'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder={currentLang === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                  className="flex-1 px-6 py-4 rounded-full border border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  {currentLang === 'ar' ? 'اشترك' : 'Subscribe'}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/favicon.ico" alt="BSE Logo" className="w-10 h-10" />
                <h3 className="text-xl font-bold text-blue-900">
                  {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'Bahrain Society of Engineers'}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {currentLang === 'ar' 
                  ? 'الريادة في الهندسة منذ عام 1972. نقدم خدمات مهنية متكاملة للمهندسين في البحرين.' 
                  : 'Leadership in Engineering Since 1972. We provide comprehensive professional services for engineers in Bahrain.'
                }
              </p>
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <a href="https://facebook.com/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 00-4.241 2.937 4.958 4.958 0 00-.432-2.229 10 10 0 012.825-.775 4.958 4.958 0 001.553 1.779 4.958 4.958 0 003.688-1.779 10 10 0 002.825.775 4.958 4.958 0 00-.432 2.229 4.958 4.958 0 00-4.241-2.937 4.958 4.958 0 00-4.241 2.937 4.958 4.958 0 00-.432 2.229 10 10 0 002.825.775 4.958 4.958 0 001.553-1.779 4.958 4.958 0 003.688 1.779 10 10 0 002.825-.775 4.958 4.958 0 00-.432-2.229 4.958 4.958 0 00-4.241 2.937 4.958 4.958 0 00-4.241-2.937 4.958 4.958 0 00-.432 2.229 10 10 0 002.825.775 4.958 4.958 0 001.553 1.779 4.958 4.958 0 003.688-1.779 10 10 0 002.825-.775 4.958 4.958 0 00-.432 2.229 4.958 4.958 0 00-4.241 2.937 4.958 4.958 0 00-4.241-2.937 4.958 4.958 0 00-.432 2.229 10 10 0 002.825.775 4.958 4.958 0 001.553 1.779 4.958 4.958 0 003.688 1.779 10 10 0 002.825-.775z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-600 transition-all">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 2.612.051.323.072.658.072 1.985 0 3.496-1.724 4.826-4.799 4.826-.785 0-1.622-.215-2.421-.659 1.603-.281 2.834-1.704 2.834-3.754 0-.027 0-.055 0-.082a4.02 4.02 0 00.692-2.874c-1.729-.152-3.134-.932-3.134-3.746 0-.698.099-1.383.317-2.008-.764 1.484-.149 2.834-.787 2.834-1.804 0-.416-.081-.813-.23-1.169 2.466-.277 4.048-2.412 4.048-4.851 0-2.863-2.322-5.186-5.186-5.186-3.064 0-5.186 2.322-5.186 5.186 0 1.093.353 2.115.951 2.75 1.977 1.834 1.657 3.769.465 3.769-.465 0 0 1.823 1.801 1.823 3.787 0 2.746-2.081 5.004-4.768 5.004z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{currentLang === 'ar' ? 'من نحن' : 'About Us'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'من نحن' : 'About Us'}</a></li>
                <li><a href="/vision-mission" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'المهمة والرؤية' : 'Vision & Mission'}</a></li>
                <li><a href="/founders" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'المؤسسون' : 'Founders'}</a></li>
                <li><a href="/board" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}</a></li>
                <li><a href="/executive" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'الإدارة التنفيذية' : 'Executive Management'}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{currentLang === 'ar' ? 'العضوية' : 'Membership'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/membership-categories" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'أنواع العضوية' : 'Membership Types'}</a></li>
                <li><a href="/membership-terms" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'شروط العضوية' : 'Membership Terms'}</a></li>
                <li><a href="/membership-fees" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'رسوم العضوية' : 'Membership Fees'}</a></li>
                <li><a href="/membership-application" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'طلب العضوية' : 'Membership Application'}</a></li>
                <li><a href="/membership-statistics" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'إحصائيات' : 'Statistics'}</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">{currentLang === 'ar' ? 'التواصل' : 'Contact'}</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</a></li>
                <li><a href="/conferences" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'المؤتمرات' : 'Conferences'}</a></li>
                <li><a href="/training" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'مركز التدريب' : 'Training Center'}</a></li>
                <li><a href="/news" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'الأخبار' : 'News'}</a></li>
                <li><a href="/events" className="hover:text-accent transition-colors">{currentLang === 'ar' ? 'فعاليات' : 'Events'}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} {currentLang === 'ar' ? 'جمعية المهندسين البحرينية. جميع الحقوق محفوظة.' : 'Bahrain Society of Engineers. All rights reserved.'}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <a href="/privacy" className="hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
                </a>
                <a href="/terms" className="hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
                </a>
                <a href="/sitemap" className="hover:text-accent transition-colors">
                  {currentLang === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

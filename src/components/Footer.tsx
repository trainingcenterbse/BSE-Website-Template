// Development & Code by Ultra Cube Team
// www.ucubetech.com
// https://github.com/ultra-cube

import { motion } from "framer-motion";
import bseLogo from "@/assets/bse-logo.png";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang, t } = useLanguage();
  const currentLang = lang;

  return (
    <>
      {/* Footer Separator */}
      <div className="w-full h-[3px] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600"></div>
      
      {/* Professional Footer - Modern Blueprint Style */}
      <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.img 
                src={bseLogo} 
                alt={currentLang === 'ar' ? 'شعار جمعية المهندسين البحرينية' : 'BSE Logo'}
                className="w-24 h-24 rounded-full mb-6 border-4 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.05 }}
              />
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'Bahrain Society of Engineers'}
              </h3>
              <p className="text-blue-300 text-sm mb-4 font-medium">
                {currentLang === 'ar' ? 'منذ عام 1972' : 'Since 1972'}
              </p>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {currentLang === 'ar' 
                  ? 'المنظمة المهنية الرائدة في البحرين، تعمل على تطوير المهندسين ورفع مستوى المهنة الهندسية.'
                  : 'The leading professional organization in Bahrain, working to develop engineers and elevate the engineering profession.'}
              </p>
              <div className="flex gap-3">
                <a href="https://facebook.com/BSEMohandis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/BSE_Bahrain" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/the-bahrain-society-of-engineers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/bsebh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600/20 hover:bg-blue-500/30 border border-blue-400/30 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="4" ry="4"/>
                    <circle cx="12" cy="12" r="3"/>
                    <circle cx="16.5" cy="7.5" r="1" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {currentLang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
              </h4>
              <ul className="space-y-3">
                <li><a href="/about-us" className="text-white/70 hover:text-blue-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full group-hover:bg-blue-400 transition-colors"></span>{currentLang === 'ar' ? 'من نحن' : 'About Us'}</a></li>
                <li><a href="/founders" className="text-white/70 hover:text-blue-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full group-hover:bg-blue-400 transition-colors"></span>{currentLang === 'ar' ? 'المؤسسون' : 'Founders'}</a></li>
                <li><a href="/board-of-directors" className="text-white/70 hover:text-blue-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full group-hover:bg-blue-400 transition-colors"></span>{currentLang === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}</a></li>
                <li><a href="/training-courses" className="text-white/70 hover:text-blue-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full group-hover:bg-blue-400 transition-colors"></span>{currentLang === 'ar' ? 'الدورات التدريبية' : 'Training Courses'}</a></li>
                <li><a href="/contact" className="text-white/70 hover:text-blue-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-blue-500/50 rounded-full group-hover:bg-blue-400 transition-colors"></span>{currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</a></li>
              </ul>
            </div>
            
            {/* Publications */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                {currentLang === 'ar' ? 'إصدارات' : 'Publications'}
              </h4>
              <ul className="space-y-3">
                <li><a href="https://bse.bh/ar/al-mohandis-magazine/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-indigo-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-indigo-500/50 rounded-full group-hover:bg-indigo-400 transition-colors"></span>{currentLang === 'ar' ? 'مجلة المهندس' : 'Al-Mohandis Magazine'}</a></li>
                <li><a href="https://bse.bh/ar/al-mohandis-times/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-indigo-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-indigo-500/50 rounded-full group-hover:bg-indigo-400 transition-colors"></span>{currentLang === 'ar' ? 'المهندس تايمز' : 'Al-Mohandis Times'}</a></li>
                <li><a href="/training-center" className="text-white/70 hover:text-indigo-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-indigo-500/50 rounded-full group-hover:bg-indigo-400 transition-colors"></span>{currentLang === 'ar' ? 'مركز التدريب' : 'Training Center'}</a></li>
                <li><a href="/committees" className="text-white/70 hover:text-indigo-300 text-sm transition-colors duration-300 flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-indigo-500/50 rounded-full group-hover:bg-indigo-400 transition-colors"></span>{currentLang === 'ar' ? 'اللجان الهندسية' : 'Engineering Committees'}</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold text-white mb-6 font-mono uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                {currentLang === 'ar' ? 'معلومات التواصل' : 'Contact Info'}
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">
                      {currentLang === 'ar' ? 'مبنى جمعية المهندسين' : 'BSE Building'}
                    </p>
                    <p className="text-white/60 text-xs">
                      {currentLang === 'ar' ? 'الجفير، البحرين' : 'Juffair, Bahrain'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="tel:+97317727100" className="text-white/90 hover:text-blue-300 text-sm font-medium transition-colors">
                    +973 1772 7100
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@bse.bh" className="text-white/90 hover:text-blue-300 text-sm font-medium transition-colors">
                    info@bse.bh
                  </a>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </footer>
      
      {/* Separate Bottom Bar */}
      <div className="bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs font-mono">
              {currentLang === 'ar' ? '© 2024 جمعية المهندسين البحرينية - جميع الحقوق محفوظة' : '© 2024 Bahrain Society of Engineers - All rights reserved'}
            </p>
            <div className="flex items-center gap-6 text-xs">
              <a href="/privacy" className="text-white/40 hover:text-blue-300 transition-colors duration-300">
                {currentLang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="/terms" className="text-white/40 hover:text-blue-300 transition-colors duration-300">
                {currentLang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
              </a>
              <a href="/sitemap" className="text-white/40 hover:text-blue-300 transition-colors duration-300">
                {currentLang === 'ar' ? 'خريطة الموقع' : 'Sitemap'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

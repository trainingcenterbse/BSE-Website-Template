// Example usage of FloatingSidebar component
// This file demonstrates how to use the FloatingSidebar in different pages

import { useState } from "react";
import FloatingSidebar, { SidebarSection } from "@/components/FloatingSidebar";

const ExamplePage = () => {
  const [currentLang] = useState<'ar' | 'en'>('ar');

  // Define sections for this page
  const pageSections: SidebarSection[] = [
    { id: 'intro', icon: 'home', label: 'Introduction', labelAr: 'مقدمة' },
    { id: 'features', icon: 'award', label: 'Features', labelAr: 'المميزات' },
    { id: 'pricing', icon: 'calendar', label: 'Pricing', labelAr: 'الأسعار' },
    { id: 'testimonials', icon: 'users', label: 'Testimonials', labelAr: 'آراء العملاء' },
    { id: 'contact', icon: 'messageSquare', label: 'Contact', labelAr: 'تواصل' }
  ];

  return (
    <div className="min-h-screen">
      {/* Page Content */}
      <section id="intro" className="min-h-screen flex items-center justify-center">
        <h1>Introduction Section</h1>
      </section>
      
      <section id="features" className="min-h-screen flex items-center justify-center">
        <h1>Features Section</h1>
      </section>
      
      <section id="pricing" className="min-h-screen flex items-center justify-center">
        <h1>Pricing Section</h1>
      </section>
      
      <section id="testimonials" className="min-h-screen flex items-center justify-center">
        <h1>Testimonials Section</h1>
      </section>
      
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h1>Contact Section</h1>
      </section>

      {/* Floating Sidebar */}
      <FloatingSidebar 
        sections={pageSections}
        currentLang={currentLang}
        offset={100} // Custom offset for fixed header
        threshold={0.5} // Custom threshold for intersection detection
      />
    </div>
  );
};

export default ExamplePage;

// Another example with different configuration
const ServicesPage = () => {
  const [currentLang] = useState<'ar' | 'en'>('en');

  const servicesSections: SidebarSection[] = [
    { id: 'overview', icon: 'globe', label: 'Overview', labelAr: 'نظرة عامة' },
    { id: 'web-development', icon: 'target', label: 'Web Development', labelAr: 'تطوير الويب' },
    { id: 'mobile-apps', icon: 'rocket', label: 'Mobile Apps', labelAr: 'تطبيقات الموبايل' },
    { id: 'consulting', icon: 'shield', label: 'Consulting', labelAr: 'الاستشارات' },
    { id: 'support', icon: 'heart', label: 'Support', labelAr: 'الدعم' }
  ];

  return (
    <div className="min-h-screen">
      {/* Page sections with corresponding IDs */}
      <section id="overview" className="min-h-screen">
        {/* Content */}
      </section>
      
      <section id="web-development" className="min-h-screen">
        {/* Content */}
      </section>
      
      <section id="mobile-apps" className="min-h-screen">
        {/* Content */}
      </section>
      
      <section id="consulting" className="min-h-screen">
        {/* Content */}
      </section>
      
      <section id="support" className="min-h-screen">
        {/* Content */}
      </section>

      {/* Floating Sidebar with custom settings */}
      <FloatingSidebar 
        sections={servicesSections}
        currentLang={currentLang}
        className="right-8" // Custom positioning
        showOnMobile={true} // Show on mobile devices
        offset={120}
      />
    </div>
  );
};

export { ServicesPage };

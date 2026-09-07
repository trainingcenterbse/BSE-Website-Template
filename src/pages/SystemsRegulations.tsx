import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, BookOpen, Shield, Users, Award, Scale } from "lucide-react";
import {
  SystemsHeroSection,
  RegulationsGridSection,
  ProceduresSection,
  ImportantNotesSection,
  SystemsContactSection,
} from "@/components/systems/SystemsRegulationsBlueprintSections";
import "@/styles/bse-blueprint.css";

const SystemsRegulations = () => {
  const { lang: currentLang, dir } = useLanguage();

  const regulations = [
    {
      id: 1,
      title: currentLang === 'ar' ? 'النظام الأساسي للجمعية' : 'Society Bylaws',
      description: currentLang === 'ar'
        ? 'النظام الأساسي الذي ينظم عمل الجمعية ويحدد أهدافها واختصاصاتها وهياكلها الإدارية'
        : 'The basic system that regulates the society\'s work and determines its objectives, competencies, and administrative structures',
      category: currentLang === 'ar' ? 'أساسي' : 'Fundamental',
      lastUpdated: currentLang === 'ar' ? '15 نوفمبر 2023' : 'November 15, 2023',
      size: '2.5 MB',
      pages: 45,
      downloadUrl: '/documents/bylaws.pdf',
      icon: <FileText className="w-8 h-8" />
    },
    {
      id: 2,
      title: currentLang === 'ar' ? 'اللائحة الداخلية للجمعية' : 'Internal Regulations',
      description: currentLang === 'ar'
        ? 'اللوائح الداخلية التي تفصل إجراءات العمل اليومي ومسؤوليات الأقسام المختلفة'
        : 'Internal regulations that detail daily work procedures and responsibilities of different departments',
      category: currentLang === 'ar' ? 'تنظيمي' : 'Organizational',
      lastUpdated: currentLang === 'ar' ? '20 أكتوبر 2023' : 'October 20, 2023',
      size: '1.8 MB',
      pages: 32,
      downloadUrl: '/documents/internal-regulations.pdf',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      id: 3,
      title: currentLang === 'ar' ? 'مدونة قواعد السلوك المهني' : 'Professional Code of Conduct',
      description: currentLang === 'ar'
        ? 'المبادئ والمعايير الأخلاقية التي يجب على المهندسين الالتزام بها في ممارساتهم المهنية'
        : 'Ethical principles and standards that engineers must adhere to in their professional practices',
      category: currentLang === 'ar' ? 'أخلاقي' : 'Ethical',
      lastUpdated: currentLang === 'ar' ? '5 سبتمبر 2023' : 'September 5, 2023',
      size: '1.2 MB',
      pages: 28,
      downloadUrl: '/documents/code-of-conduct.pdf',
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: 4,
      title: currentLang === 'ar' ? 'لائحة العضوية وشروط القبول' : 'Membership Regulations',
      description: currentLang === 'ar'
        ? 'الشروط والإجراءات لانضمام المهندسين كأعضاء في الجمعية وفئات العضوية المختلفة'
        : 'Conditions and procedures for engineers to join the society as members and different membership categories',
      category: currentLang === 'ar' ? 'عضوية' : 'Membership',
      lastUpdated: currentLang === 'ar' ? '10 أغسطس 2023' : 'August 10, 2023',
      size: '980 KB',
      pages: 18,
      downloadUrl: '/documents/membership-regulations.pdf',
      icon: <Users className="w-8 h-8" />
    },
    {
      id: 5,
      title: currentLang === 'ar' ? 'الائحة المالية والميزانية' : 'Financial Regulations',
      description: currentLang === 'ar'
        ? 'القواعد والإجراءات المالية التي تحكم إدارة أموال الجمعية وإعداد الميزانية'
        : 'Financial rules and procedures that govern the management of society funds and budget preparation',
      category: currentLang === 'ar' ? 'مالي' : 'Financial',
      lastUpdated: currentLang === 'ar' ? '25 يوليو 2023' : 'July 25, 2023',
      size: '1.5 MB',
      pages: 22,
      downloadUrl: '/documents/financial-regulations.pdf',
      icon: <Award className="w-8 h-8" />
    },
    {
      id: 6,
      title: currentLang === 'ar' ? 'لائحة المسؤولية المهنية' : 'Professional Liability Regulations',
      description: currentLang === 'ar'
        ? 'القواعد التي تحدد مسؤوليات المهندسين تجاه العملاء والمجتمع والإجراءات في حالات الأخطاء المهنية'
        : 'Rules that determine engineers\' responsibilities towards clients and society and procedures in cases of professional errors',
      category: currentLang === 'ar' ? 'قانوني' : 'Legal',
      lastUpdated: currentLang === 'ar' ? '15 يونيو 2023' : 'June 15, 2023',
      size: '2.1 MB',
      pages: 38,
      downloadUrl: '/documents/liability-regulations.pdf',
      icon: <Scale className="w-8 h-8" />
    }
  ];

  const procedures = [
    {
      title: currentLang === 'ar' ? 'إجراءات تقديم الشكاوى' : 'Complaint Submission Procedures',
      description: currentLang === 'ar'
        ? 'الخطوات الواجب اتباعها لتقديم شكوى رسمية ضد مهندس أو الجمعية'
        : 'Steps to follow to submit an official complaint against an engineer or the society',
      steps: [
        currentLang === 'ar' ? 'تعبئة نموذج الشكوى الرسمي' : 'Fill out the official complaint form',
        currentLang === 'ar' ? 'تقديم المستندات الداعمة' : 'Submit supporting documents',
        currentLang === 'ar' ? 'مراجعة اللجنة المختصة' : 'Review by the concerned committee',
        currentLang === 'ar' ? 'البت في الشكوى خلال 30 يوماً' : 'Decision on complaint within 30 days'
      ]
    },
    {
      title: currentLang === 'ar' ? 'إجراءات التجديد السنوي' : 'Annual Renewal Procedures',
      description: currentLang === 'ar'
        ? 'الخطوات اللازمة لتجديد العضوية السنوية والحفاظ على الحالة المهنية'
        : 'Necessary steps for annual membership renewal and maintaining professional status',
      steps: [
        currentLang === 'ar' ? 'تسجيل الدخول إلى البوابة الإلكترونية' : 'Login to the electronic portal',
        currentLang === 'ar' ? 'تحديث المعلومات الشخصية' : 'Update personal information',
        currentLang === 'ar' ? 'سداد رسوم التجديد' : 'Pay renewal fees',
        currentLang === 'ar' ? 'الحصول على شهادة التجديد' : 'Receive renewal certificate'
      ]
    },
    {
      title: currentLang === 'ar' ? 'إجراءات التسجيل في الدورات' : 'Course Registration Procedures',
      description: currentLang === 'ar'
        ? 'كيفية التسجيل في الدورات التدريبية والبرامج المهنية التي تقدمها الجمعية'
        : 'How to register for training courses and professional programs offered by the society',
      steps: [
        currentLang === 'ar' ? 'استعراض الدورات المتاحة' : 'Browse available courses',
        currentLang === 'ar' ? 'التحقق من شروط القبول' : 'Check admission requirements',
        currentLang === 'ar' ? 'إكمال نموذج التسجيل' : 'Complete registration form',
        currentLang === 'ar' ? 'تأكيد الدفع والحصول على التذاكر' : 'Confirm payment and receive tickets'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Header />
      
      <main className="bse-blueprint">
        <SystemsHeroSection currentLang={currentLang} />
        <RegulationsGridSection currentLang={currentLang} regulations={regulations} />
        <ProceduresSection currentLang={currentLang} procedures={procedures} />
        <ImportantNotesSection currentLang={currentLang} />
        <SystemsContactSection currentLang={currentLang} />
      </main>

      <Footer />
    </div>
  );
};

export default SystemsRegulations;

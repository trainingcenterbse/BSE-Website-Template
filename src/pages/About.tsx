import { useState } from "react";
import Header from "@/components/Header";
import { Mail, Users, Award, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const [currentLang, setCurrentLang] = useState('ar');

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            {currentLang === 'ar' ? 'جمعية المهندسين البحرينية' : 'Bahrain Society of Engineers'}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            {currentLang === 'ar' ? 'تأسست الجمعية عام 1972م لتكون المنظمة الرائدة للمهندسين في مملكة البحرين' : 'Established in 1972 to be the leading organization for engineers in the Kingdom of Bahrain'}
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">{currentLang === 'ar' ? 'قصتنا' : 'Our Story'}</h2>
          <p>
            {currentLang === 'ar' ? 'تأسست جمعية المهندسين البحرينية في عام 1972م كمؤسسة رائدة في قطاع الهندسة في مملكة البحرين. ومنذ تأسيسها، كانت الجمعية شريكاً أساسياً في تطوير البنية التحتية والنمو الاقتصادي للمملكة.' : 'The Bahrain Society of Engineers was established in 1972 as a leading institution in the engineering sector in the Kingdom of Bahrain. Since its inception, the Society has been a key partner in developing the infrastructure and economic growth of the Kingdom.'}
          </p>
          <p>
            {currentLang === 'ar' ? 'نحن ملتزمون بتعزيز مهنة الهندسة، ودعم المهندسين، والمساهمة في التنمية المستدامة من خلال الابتكار والتميز في الممارسات الهندسية.' : 'We are committed to advancing the engineering profession, supporting engineers, and contributing to sustainable development through innovation and excellence in engineering practices.'}
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-card p-8">
            <Target className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">{currentLang === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h2>
            <p className="text-muted-foreground">
              {currentLang === 'ar' ? 'أن نكون الجمعية الهندسية الرائدة إقليمياً والمتميزة عالمياً في تعزيز ممارسات الهندسة المستدامة والمساهمة في التنمية الشاملة.' : 'To be the regionally leading and globally distinguished engineering association in promoting sustainable engineering practices and contributing to comprehensive development.'}
            </p>
          </div>
          <div className="rounded-2xl bg-card p-8">
            <Award className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-4">{currentLang === 'ar' ? 'مهمتنا' : 'Our Mission'}</h2>
            <p className="text-muted-foreground">
              {currentLang === 'ar' ? 'تعزيز وتطوير مهنة الهندسة، وتمثيل المهندسين وحماية مصالحهم، والمساهمة في التنمية المستدامة للمملكة من خلال الابتكار والتميز.' : 'To advance and develop the engineering profession, represent and protect engineers\' interests, and contribute to the sustainable development of the Kingdom through innovation and excellence.'}
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">{currentLang === 'ar' ? 'قيمنا' : 'Our Values'}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <Users className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-3">{currentLang === 'ar' ? 'التميز' : 'Excellence'}</h3>
              <p className="text-muted-foreground">
                {currentLang === 'ar' ? 'نطمح إلى تحقيق أعلى معايير الجودة والتميز في جميع جوانب عملنا.' : 'We strive to achieve the highest standards of quality and excellence in all aspects of our work.'}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <Users className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-3">{currentLang === 'ar' ? 'النزاهة' : 'Integrity'}</h3>
              <p className="text-muted-foreground">
                {currentLang === 'ar' ? 'نلتزم بأعلى معايير الأخلاق والمهنية في جميع تعاملاتنا.' : 'We are committed to the highest standards of ethics and professionalism in all our dealings.'}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <Users className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-3">{currentLang === 'ar' ? 'الابتكار' : 'Innovation'}</h3>
              <p className="text-muted-foreground">
                {currentLang === 'ar' ? 'نشجع التفكير الإبداعي وتبني الحلول المبتكرة للتحديات الهندسية.' : 'We encourage creative thinking and adopt innovative solutions to engineering challenges.'}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <Users className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-3">{currentLang === 'ar' ? 'الاستدامة' : 'Sustainability'}</h3>
              <p className="text-muted-foreground">
                {currentLang === 'ar' ? 'نعمل على تعزيز الممارسات الهندسية المستدامة لدعم التنمية المستقبلية.' : 'We work to promote sustainable engineering practices to support future development.'}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">{currentLang === 'ar' ? 'انضم إلى مجتمعنا' : 'Join Our Community'}</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {currentLang === 'ar' ? 'كن جزءاً من مجتمع المهندسين المحترفين واستفد من الفرص والبرامج الحصرية.' : 'Be part of the professional engineering community and benefit from exclusive opportunities and programs.'}
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
            <Users className="mr-2 h-4 w-4" />
            {currentLang === 'ar' ? 'انضم الآن' : 'Join Now'}
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;

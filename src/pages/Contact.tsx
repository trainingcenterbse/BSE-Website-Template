import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(currentLang === 'ar' ? 'تم إرسال الرسالة! سنتواصل معك قريباً.' : "Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            {currentLang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
            {currentLang === 'ar' ? 'هل لديك سؤال أو اقتراح؟ نود أن نسمع منك. تواصل معنا اليوم.' : 'Have a question, suggestion, or inquiry? We\'d love to hear from you. Contact us today.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-2xl bg-card p-8">
            <h2 className="text-2xl font-bold mb-6">{currentLang === 'ar' ? 'أرسل لنا رسالة' : 'Send us a message'}</h2>
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up stagger-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {currentLang === 'ar' ? 'الاسم' : 'Name'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={currentLang === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={currentLang === 'ar' ? 'بريدك الإلكتروني' : 'your.email@example.com'}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {currentLang === 'ar' ? 'الموضوع' : 'Subject'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={currentLang === 'ar' ? 'ماذا يخص رسالتك؟' : 'What is your message about?'}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {currentLang === 'ar' ? 'الرسالة' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder={currentLang === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6"
              >
                {currentLang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="rounded-2xl bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">{currentLang === 'ar' ? 'معلومات التواصل' : 'Contact Information'}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{currentLang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h3>
                    <p className="text-muted-foreground">info@bse.bh</p>
                    <p className="text-muted-foreground text-sm">{currentLang === 'ar' ? 'سنتواصل معك خلال 24 ساعة' : 'We\'ll respond within 24 hours'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{currentLang === 'ar' ? 'الموقع' : 'Location'}</h3>
                    <p className="text-muted-foreground">{currentLang === 'ar' ? 'مملكة البحرين، المنامة' : 'Kingdom of Bahrain, Manama'}</p>
                    <p className="text-muted-foreground text-sm">{currentLang === 'ar' ? 'المقر الرئيسي للجمعية' : 'BSE Main Office'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{currentLang === 'ar' ? 'الهاتف' : 'Phone'}</h3>
                    <p className="text-muted-foreground">+973 1725 0000</p>
                    <p className="text-muted-foreground text-sm">{currentLang === 'ar' ? 'الأحد - الخميس، 8 صباحاً - 4 مساءً' : 'Sun-Thu, 8am-4pm'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{currentLang === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h3>
                    <p className="text-muted-foreground">{currentLang === 'ar' ? 'الأحد - الخميس: 8:00 ص - 4:00 م' : 'Sunday - Thursday: 8:00 AM - 4:00 PM'}</p>
                    <p className="text-muted-foreground text-sm">{currentLang === 'ar' ? 'الجمعة والسبت: مغلق' : 'Friday & Saturday: Closed'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-muted p-8">
              <h3 className="text-xl font-bold mb-4">{currentLang === 'ar' ? 'أسئلة شائعة' : 'Frequently Asked Questions'}</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-1">{currentLang === 'ar' ? 'كيف يمكنني الانضمام إلى الجمعية؟' : 'How can I join the association?'}</h4>
                  <p className="text-muted-foreground">
                    {currentLang === 'ar' ? 'يمكنك التقديم عبر نموذج العضوية الإلكتروني على موقعنا.' : 'You can apply through our online membership application form on our website.'}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{currentLang === 'ar' ? 'ما هي فئات العضوية المتاحة؟' : 'What membership categories are available?'}</h4>
                  <p className="text-muted-foreground">
                    {currentLang === 'ar' ? 'نقدم فئات مختلفة من العضوية للمهندسين وطلاب الهندسة والشركات.' : 'We offer different membership categories for engineers, engineering students, and companies.'}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{currentLang === 'ar' ? 'هل تقدمون دورات تدريبية؟' : 'Do you offer training courses?'}</h4>
                  <p className="text-muted-foreground">
                    {currentLang === 'ar' ? 'نعم، مركز التدريب لدينا يقدم دورات معتمدة للمهندسين.' : 'Yes, our training center offers accredited courses for engineers.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

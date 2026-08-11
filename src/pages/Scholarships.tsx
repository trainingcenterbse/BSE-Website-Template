import { motion } from "framer-motion";
import { GraduationCap, Award, FileText, CheckCircle, Phone, Mail, MapPin, Users, BookOpen } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";

const Scholarships = () => {
  const { lang: currentLang } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              {currentLang === 'ar' ? 'برنامج منح المهندس هشام الشهابي' : 'Eng. Hisham Al-Shihabi Scholarship Program'}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {currentLang === 'ar' 
                ? 'لدراسة بكالوريوس الهندسة في جامعة البحرين'
                : 'For Bachelor of Engineering Studies at University of Bahrain'}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About BSE Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                {currentLang === 'ar' ? 'نبذة عن جمعية المهندسين البحرينية' : 'About Bahrain Society of Engineers'}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
              <p className="mb-4">
                {currentLang === 'ar' 
                  ? 'تأسست جمعية المهندسين البحرينية في يوليو 1972 وهي جمعية مهنية تطوعية تعنى بشئون قطاع المهندسين في البحرين وترعى مصالحهم وتسعى لتطوير قدراتهم من خلال برامجها الفنية العلمية الهندسية والاجتماعية.'
                  : 'The Bahrain Society of Engineers was established in July 1972 as a voluntary professional association concerned with the affairs of the engineering sector in Bahrain, caring for their interests and seeking to develop their capabilities through its technical, scientific, engineering, and social programs.'}
              </p>
              <p className="mb-4">
                {currentLang === 'ar' 
                  ? 'وتتضمن أهداف الجمعية المساهمة في تطوير النهضة الصناعية والعمرانية في البحرين، وتنظيم قواعد مهنة الهندسة ورفع مستواها بالتعاون مع الجهات الأخرى المختصة، بالإضافة إلى التعبير عن المصالح والحقوق المهنية لأعضائها، وتوطيد الصلات وتوثيق التعاون العلمي والفني بين المهندسين سواء في البحرين أو الدول العربية والعالمية.'
                  : 'The Society\'s objectives include contributing to the industrial and urban renaissance in Bahrain, organizing engineering profession rules and raising their standards in cooperation with other specialized bodies, expressing the professional interests and rights of its members, strengthening ties and enhancing scientific and technical cooperation among engineers, whether in Bahrain or Arab and international countries.'}
              </p>
              <p className="mb-4">
                {currentLang === 'ar' 
                  ? 'فضلاً عن القيام بالأبحاث الهندسية العلمية والعملية وتشجيعها عن طريق النشر والمسابقات والمؤتمرات والمحاضرات والزيارات العلمية، وتبادل المعلومات بين الجمعية والجمعيات والمؤسسات الهندسية في الدول الأخرى.'
                  : 'In addition to conducting scientific and practical engineering research and encouraging it through publication, competitions, conferences, lectures, and scientific visits, and exchanging information between the Society and engineering associations and institutions in other countries.'}
              </p>
              <p className="mb-4">
                {currentLang === 'ar' 
                  ? 'ينتسب للجمعية أعضاء من مختلف الفئات والتخصصات والجنسيات البحرينية والعربية والأجنبية، وقد أولت جمعية المهندسين اهتماماً بالغاً بنشر الوعي المهني بين الأعضاء وإيصال أحدث المستجدات الفنية والعلمية بمجال الهندسة إلى أعضائها.'
                  : 'The Society includes members from various categories, specialties, and Bahraini, Arab, and foreign nationalities. The Society of Engineers has paid great attention to spreading professional awareness among members and delivering the latest technical and scientific developments in the field of engineering to its members.'}
              </p>
              <p className="mb-4">
                {currentLang === 'ar' 
                  ? 'كما وتساهم جمعية المهندسين البحرينية وبفعالية في تشجيع الطلبة على الالتحاق بالتخصصات الهندسية من خلال تخصيص منح دراسية لدعم الطلبة أثناء دراستهم. وقد تم إطلاق اسم المهندس الراحل "هشام الشهايب" أحد الأعضاء المؤسسين للجمعية وأحد رؤسائها السابقين، على هذه المنحة تكريماً له ولمساهماته العديدة في تطوير العمل بالجمعية.'
                  : 'The Bahrain Society of Engineers also actively contributes to encouraging students to join engineering specializations by allocating scholarships to support students during their studies. The name of the late Engineer "Hisham Al-Shihabi", one of the founding members of the Society and one of its former presidents, was given to this scholarship in honor of him and his numerous contributions to developing the Society\'s work.'}
              </p>
            </div>
          </div>
        </motion.section>

        {/* About Scholarship Program Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                {currentLang === 'ar' ? 'نبذة عن برنامج المنح' : 'About the Scholarship Program'}
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
              <p className="mb-4">
                {currentLang === 'ar' 
                  ? 'انطلاقاً من التزامها في تطوير النهضة الصناعية والعمرانية في مملكة البحرين، فقد دأبت الجمعية من بدايات تأسيسها على تشجيع الطلبة لدراسة الهندسة بمختلف تخصصاتها.'
                  : 'In line with its commitment to developing the industrial and urban renaissance in the Kingdom of Bahrain, the Society has, since its inception, encouraged students to study engineering in its various specializations.'}
              </p>
              <p className="mb-4">
                {currentLang === 'ar' 
                  ? 'وفي عام 1992 تم تطوير المبادرات السابقة إلى برنامج منتظم سمي «برنامج منح دراسة الهندسة» وذلك لطلبة الهندسة الدارسين في جامعة البحرين وفق معايير محددة وتخصيص ميزانية ثابتة لتنظيم هذا البرنامج.'
                  : 'In 1992, previous initiatives were developed into a regular program called "Engineering Study Scholarship Program" for engineering students studying at the University of Bahrain according to specific criteria, with a fixed budget allocated to organize this program.'}
              </p>
              <p className="mb-4">
                {currentLang === 'ar' 
                  ? 'وزيادة أعداد المستفيدين من البرنامج ليصل اليوم إلى 30 منحة لدراسة الهندسة، وفي عام 2008 تم تغيير اسم البرنامج إلى: «منح المهندس هشام الشهايب لدراسة بكالوريوس الهندسة في جامعة البحرين» وذلك تكريماً ووفاءً لذكراه.'
                  : 'The number of program beneficiaries has increased to reach 30 scholarships for engineering studies today. In 2008, the program name was changed to "Eng. Hisham Al-Shihabi Scholarship for Bachelor of Engineering Studies at University of Bahrain" in honor of his memory.'}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Program Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                {currentLang === 'ar' ? 'مميزات البرنامج' : 'Program Features'}
              </h2>
            </div>
            <p className="text-slate-600 mb-8 text-lg">
              {currentLang === 'ar' ? 'ينقسم البرنامج إلى قسمين:' : 'The program is divided into two sections:'}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Full Scholarship */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {currentLang === 'ar' ? 'أ. المنحة الكلية وتشمل:' : 'A. Full Scholarship includes:'}
                </h3>
                <ul className="space-y-3">
                  {[
                    currentLang === 'ar' ? 'دفع رسوم التسجيل كاملة' : 'Full payment of registration fees',
                    currentLang === 'ar' ? 'بدل قرطاسية' : 'Stationery allowance',
                    currentLang === 'ar' ? 'مصروف جيب' : 'Pocket money',
                    currentLang === 'ar' ? 'علاوة تفوق' : 'Excellence bonus'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Partial Scholarship */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  {currentLang === 'ar' ? 'ب. المنحة الجزئية وتشمل:' : 'B. Partial Scholarship includes:'}
                </h3>
                <ul className="space-y-3">
                  {[
                    currentLang === 'ar' ? 'بدل قرطاسية' : 'Stationery allowance',
                    currentLang === 'ar' ? 'مصروف جيب' : 'Pocket money',
                    currentLang === 'ar' ? 'علاوة تفوق' : 'Excellence bonus'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-slate-600">
                {currentLang === 'ar' 
                  ? 'تقوم اللجنة المختصة بمتابعة شؤون التحصيل العلمي والأكاديمي للطلبة المنضوين تحت هذا البرنامج لكل فصل دراسي على حدة، وتقوم بإعداد تقارير دورية ترفع لمجلس الإدارة لاعتماد توصياتها.'
                  : 'The specialized committee monitors the academic and educational achievement of students enrolled in this program for each semester separately, and prepares periodic reports to be submitted to the Board of Directors for approval of its recommendations.'}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Requirements Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                {currentLang === 'ar' ? 'شروط الحصول على منحة' : 'Scholarship Requirements'}
              </h2>
            </div>
            <div className="space-y-4">
              {[
                currentLang === 'ar' 
                  ? 'أن يكون المتقدم بحريني الجنسية.' 
                  : 'The applicant must be of Bahraini nationality.',
                currentLang === 'ar' 
                  ? 'أن يكون المتقدم حاصلاً على عضوية فئة طالب في جمعية المهندسين البحرينية.' 
                  : 'The applicant must have student membership in the Bahrain Society of Engineers.',
                currentLang === 'ar' 
                  ? 'ألا يكون الطالب مستفيداً من أي منحة تقدمها جهات أخرى (لا ينطبق على طلب المنحة الجزئية).' 
                  : 'The student must not be benefiting from any scholarship provided by other entities (does not apply to partial scholarship application).',
                currentLang === 'ar' 
                  ? 'ألا يقل المعدل التراكمي للطالب عن 2.5 نقطة حسب نظام النقاط الأربع، وفي حالة المعدل المئوي أن لا تقل النسبة عن 75%.' 
                  : 'The student\'s cumulative GPA must not be less than 2.5 points according to the four-point system, and in the case of percentage system, the percentage must not be less than 75%.',
                currentLang === 'ar' 
                  ? 'لن تعطى أكثر من منحة واحدة لأكثر من فرد واحد من أفراد الأسرة في فترة دراسية واحدة.' 
                  : 'More than one scholarship will not be given to more than one individual from the same family in a single academic period.',
                currentLang === 'ar' 
                  ? 'تعبئة الاستمارة الخاصة بطلب المنحة.' 
                  : 'Fill out the scholarship application form.',
                currentLang === 'ar' 
                  ? 'حق للجمعية التحقق من صحة أي من البيانات والوثائق المقدمة لها من قبل الطالب.' 
                  : 'The Society has the right to verify the authenticity of any data and documents submitted by the student.'
              ].map((requirement, index) => (
                <div key={index} className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-green-600 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-slate-700">{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Required Documents Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">
                {currentLang === 'ar' ? 'المستندات اللازمة للحصول على المنحة' : 'Required Documents for Scholarship'}
              </h2>
            </div>
            
            <div className="space-y-6">
              {/* General Documents */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {currentLang === 'ar' ? 'المستندات العامة:' : 'General Documents:'}
                </h3>
                <ul className="space-y-3">
                  {[
                    currentLang === 'ar' ? 'نسخاً من البطاقات الهوية لكافة أفراد الأسرة.' : 'Copies of ID cards for all family members.',
                    currentLang === 'ar' ? 'شهادة راتب المعيل.' : 'Guardian\'s salary certificate.',
                    currentLang === 'ar' ? 'شهادة راتب للأخوة والأخوات وغيرهم من القاطنين على نفس العنوان.' : 'Salary certificates for brothers, sisters, and others living at the same address.',
                    currentLang === 'ar' ? 'نسخة مما يثبت دخل الأسرة الإضافي.' : 'Copy of proof of additional family income.',
                    currentLang === 'ar' ? 'ما يثبت التزامات الأسرة المالية (قروض الإسكان والإيجار).' : 'Proof of family financial obligations (housing loans and rent).',
                    currentLang === 'ar' ? 'نسخة من بطاقة العضوية.' : 'Copy of membership card.',
                    currentLang === 'ar' ? 'رصيد دفع الرسوم مصدق من الجامعة مع نسخة من استمارة التسجيل.' : 'Certified fee payment balance from the university with a copy of the registration form.',
                    currentLang === 'ar' ? 'صورة شخصية حديثة لصاحب الطلب.' : 'Recent personal photo of the applicant.'
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* New Students */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {currentLang === 'ar' ? 'أ. للطلبة المستجدين في الجامعة:' : 'A. For New University Students:'}
                </h3>
                <ul className="space-y-3">
                  {[
                    currentLang === 'ar' ? 'نسخة من شهادة الثانوية العامة.' : 'Copy of high school certificate.',
                    currentLang === 'ar' ? 'نسخة أصلية من إفادة القبول في برنامج هندسي.' : 'Original copy of acceptance letter in an engineering program.'
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-slate-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Students */}
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">
                  {currentLang === 'ar' ? 'ب. للطلبة المنتظمين في الجامعة:' : 'B. For Current University Students:'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      {currentLang === 'ar' ? 'نسخة من كشف الدرجات (Transcript).' : 'Copy of academic transcript.'}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Information Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl shadow-lg p-8 lg:p-12 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">
                {currentLang === 'ar' ? 'لمزيد من المعلومات' : 'For More Information'}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {currentLang === 'ar' ? 'قسم شؤون الأعضاء والمهنة' : 'Member Affairs and Profession Department'}
                    </h3>
                    <p className="text-blue-100">
                      {currentLang === 'ar' ? 'تقسم شؤون الأعضاء والمهنة' : 'Member Affairs and Profession Division'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{currentLang === 'ar' ? 'هاتف:' : 'Phone:'}</h3>
                    <p className="text-blue-100" dir="ltr">17810728 - 17727100</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email:</h3>
                    <p className="text-blue-100">scholarship@bse.bh</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">
                      {currentLang === 'ar' ? 'العنوان:' : 'Address:'}
                    </h3>
                    <p className="text-blue-100">
                      {currentLang === 'ar' 
                        ? 'جمعية المهندسين البحرينية'
                        : 'Bahrain Society of Engineers'}
                    </p>
                    <p className="text-blue-100">
                      {currentLang === 'ar' 
                        ? 'ص.ب: 835، المنامة – مملكة البحرين'
                        : 'P.O. Box 835, Manama – Kingdom of Bahrain'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default Scholarships;

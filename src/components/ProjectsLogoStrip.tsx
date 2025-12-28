import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  name: string;
  nameAr: string;
  logo: string;
  description: string;
  descriptionAr: string;
}

interface ProjectsLogoStripProps {
  currentLang?: string;
}

const ProjectsLogoStrip: React.FC<ProjectsLogoStripProps> = ({ currentLang = 'ar' }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Placeholder project data - can be replaced with real data
  const projects: Project[] = [
    {
      id: 1,
      name: "Engineering Excellence Program",
      nameAr: "برنامج التميز الهندسي",
      logo: "/placeholder.svg",
      description: "Advanced engineering training and certification",
      descriptionAr: "تدريب هندسي متقدم وشهادات"
    },
    {
      id: 2,
      name: "Sustainable Development Initiative",
      nameAr: "مبادرة التنمية المستدامة",
      logo: "/placeholder.svg",
      description: "Green engineering solutions",
      descriptionAr: "حلول هندسية خضراء"
    },
    {
      id: 3,
      name: "Digital Transformation Hub",
      nameAr: "مركز التحول الرقمي",
      logo: "/placeholder.svg",
      description: "Innovation in engineering technology",
      descriptionAr: "الابتكار في التكنولوجيا الهندسية"
    },
    {
      id: 4,
      name: "Youth Engineering Academy",
      nameAr: "أكاديمية الشباب الهندسية",
      logo: "/placeholder.svg",
      description: "Nurturing next generation engineers",
      descriptionAr: "تنمية جيل المهندسين القادم"
    },
    {
      id: 5,
      name: "Industry Partnership Network",
      nameAr: "شبكة الشراكة الصناعية",
      logo: "/placeholder.svg",
      description: "Connecting engineers with industry",
      descriptionAr: "ربط المهندسين بالصناعة"
    },
    {
      id: 6,
      name: "Research & Development Center",
      nameAr: "مركز البحث والتطوير",
      logo: "/placeholder.svg",
      description: "Cutting-edge engineering research",
      descriptionAr: "بحوث هندسية متقدمة"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  if (!isLoaded) {
    return (
      <div className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8 animate-pulse"></div>
            <div className="flex justify-center space-x-8 rtl:space-x-reverse">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-gradient-to-r from-slate-50 to-slate-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            {currentLang === 'ar' ? 'مشاريعنا تحت مظلة الجمعية' : 'Our Projects Under the Society'}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {currentLang === 'ar' 
              ? 'مجموعة متميزة من المشاريع التي تعكس التزامنا بالتميز الهندسي والتنمية المستدامة'
              : 'A distinguished collection of projects reflecting our commitment to engineering excellence and sustainable development'
            }
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative"
        >
          {/* Scrolling logo strip */}
          <div className="flex overflow-hidden">
            <motion.div 
              className="flex space-x-8 rtl:space-x-reverse animate-scroll"
              style={{
                animation: 'scroll 30s linear infinite',
                display: 'flex',
                width: 'max-content'
              }}
            >
              {/* First set of logos */}
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-slate-50">
                    <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                      <img 
                        src={project.logo} 
                        alt={currentLang === 'ar' ? project.nameAr : project.name}
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <h3 className="text-center font-semibold text-slate-800 text-sm mb-2">
                      {currentLang === 'ar' ? project.nameAr : project.name}
                    </h3>
                    <p className="text-center text-xs text-slate-600 line-clamp-2">
                      {currentLang === 'ar' ? project.descriptionAr : project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              {/* Duplicate set for seamless scrolling */}
              {projects.map((project) => (
                <motion.div
                  key={`${project.id}-duplicate`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-slate-50">
                    <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                      <img 
                        src={project.logo} 
                        alt={currentLang === 'ar' ? project.nameAr : project.name}
                        className="w-full h-full object-contain rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <h3 className="text-center font-semibold text-slate-800 text-sm mb-2">
                      {currentLang === 'ar' ? project.nameAr : project.name}
                    </h3>
                    <p className="text-center text-xs text-slate-600 line-clamp-2">
                      {currentLang === 'ar' ? project.descriptionAr : project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectsLogoStrip;

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, ArrowRight, Users, Building, Award } from "lucide-react";

interface EventsSectionProps {
  currentLang: string;
}

const EventsSection = ({ currentLang }: EventsSectionProps) => {
  const events = [
    {
      id: 1,
      title: currentLang === 'ar' ? 'المؤتمر الهندسي السنوي 2024' : 'Annual Engineering Conference 2024',
      description: currentLang === 'ar' ? 'أكبر تجمع للمهندسين في البحرين لمناقشة أحدث التوجهات' : 'Largest gathering of engineers in Bahrain to discuss latest trends',
      date: '2024-12-20',
      time: '09:00 AM',
      location: currentLang === 'ar' ? 'فندق ريتز كارلتون المنامة' : 'Ritz-Carlton Manama',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df7f?w=800&h=400&fit=crop',
      type: 'conference',
      attendees: 500
    },
    {
      id: 2,
      title: currentLang === 'ar' ? 'ورشة عمل: الهندسة المستدامة' : 'Workshop: Sustainable Engineering',
      description: currentLang === 'ar' ? 'تعلم أحدث التقنيات في الهندسة الخضراء' : 'Learn latest techniques in green engineering',
      date: '2024-12-18',
      time: '02:00 PM',
      location: currentLang === 'ar' ? 'مقر الجمعية' : 'BSE Headquarters',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop',
      type: 'workshop',
      attendees: 50
    },
    {
      id: 3,
      title: currentLang === 'ar' ? 'حفل تكريم المهندسين المتميزين' : 'Excellence Engineers Awards Ceremony',
      description: currentLang === 'ar' ? 'تكريم أفضل المهندسين في البحرين لعام 2024' : 'Honoring the best engineers in Bahrain for 2024',
      date: '2024-12-25',
      time: '07:00 PM',
      location: currentLang === 'ar' ? 'مركز البحرين للمؤتمرات' : 'Bahrain International Exhibition Center',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd616ce?w=800&h=400&fit=crop',
      type: 'ceremony',
      attendees: 300
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-100 text-blue-600';
      case 'workshop':
        return 'bg-green-100 text-green-600';
      case 'ceremony':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'conference':
        return currentLang === 'ar' ? 'مؤتمر' : 'Conference';
      case 'workshop':
        return currentLang === 'ar' ? 'ورشة عمل' : 'Workshop';
      case 'ceremony':
        return currentLang === 'ar' ? 'حفل تكريم' : 'Awards Ceremony';
      default:
        return currentLang === 'ar' ? 'حدث' : 'Event';
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-600"></div>
            <div className="mx-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-blue-600 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent mb-6">
            {currentLang === 'ar' ? 'فعالياتنا' : 'Our Events'}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentLang === 'ar' 
              ? 'شارك في فعالياتنا المميزة وكن جزءاً من مجتمع المهندسين النشط'
              : 'Participate in our distinguished events and be part of the active engineering community'
            }
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Event Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getEventTypeColor(event.type)}`}>
                      {getEventTypeLabel(event.type)}
                    </span>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center">
                      <div className="text-lg font-bold text-blue-600">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs text-gray-600">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  
                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-3 text-blue-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                      <span className="text-sm line-clamp-1">{event.location}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-3 text-blue-500" />
                      <span className="text-sm">
                        {currentLang === 'ar' ? `${event.attendees} مشارك` : `${event.attendees} attendees`}
                      </span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors cursor-pointer">
                    <span className="font-semibold">
                      {currentLang === 'ar' ? 'سجل الآن' : 'Register Now'}
                    </span>
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-slate-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              {currentLang === 'ar' ? 'هل تريد المزيد من الفعاليات؟' : 'Want More Events?'}
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {currentLang === 'ar' 
                ? 'استكشف جميع فعالياتنا القادمة واختر ما يناسب اهتماماتك المهنية'
                : 'Explore all our upcoming events and choose what suits your professional interests'
              }
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              {currentLang === 'ar' ? 'عرض جميع الفعاليات' : 'View All Events'}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;

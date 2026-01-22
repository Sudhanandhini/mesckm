import React from 'react';
import { motion } from 'framer-motion';
import imgLibrary from '../assets/lib1.jpg';
import imgLaboratory1 from '../assets/lab.jpg';
import imgLaboratory2 from '../assets/lab.jpg';
import imgComputerLab from '../assets/lib.jpg';
import { 
  BookOpen,
  Microscope,
  MonitorPlay,
  Music,
  Trophy,
  Utensils,
  Bus,
  Wifi,
  Shield,
  Users,
  Award,
  Target,
  Sparkles,
  CheckCircle,
  Clock,
  MapPin,
  Building2,
  GraduationCap,
  Heart,
  Zap,
  Star,
  AlertCircle,
  Info,
  FileText,
  Database,
  Globe,
  TrendingUp,
  Eye,
  Printer,
  Coffee,
  Wind,
  Leaf,
  Lightbulb
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

const Facilities = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const mainFacilities = [
    {
      icon: BookOpen,
      title: 'Library',
      image: imgLibrary,
      color: 'from-[#990c28] to-[#990c28]',
      description: 'The college Library consists vast collection of books with the latest editions on each subject. A well equipped reference Library is housed in the building. A reference section is attached to the Library.',
      features: [
        'Vast collection of latest editions',
        'Reference section available',
        'Peaceful reading environment',
        'Digital catalog system'
      ]
    },
    {
      icon: Microscope,
      title: 'Laboratories',
      image: imgLaboratory1,
      color: 'from-[#990c28] to-[#990c28]',
      description: 'We have well equipped individual laboratories for physics, chemistry and Biology. Practical classes are conducted regularly. The laboratories are enriched every year with modern equipment. Experiments are performed by the students individually.',
      features: [
        'Physics, Chemistry & Biology labs',
        'Modern equipment',
        'Individual experiments',
        'Regular practical sessions'
      ]
    },
    {
      icon: MonitorPlay,
      title: 'Computer Lab',
      image: imgComputerLab,
      color: 'from-[#990c28] to-[#990c28]',
      description: 'Well equipped computer laboratory with latest technology and software. The lab provides hands-on experience with various programming languages and applications, preparing students for the digital world.',
      features: [
        'Latest computers and software',
        'High-speed internet',
        'Programming tools',
        'Technical support'
      ]
    }
  ];

  const additionalFacilities = [
    {
      icon: Music,
      title: 'Auditorium',
      description: 'Well-furnished auditorium for conducting seminars, cultural events, and important functions.',
      color: 'from-[#990c28] to-[#c41537]',
      gradient: true
    },
    {
      icon: Trophy,
      title: 'Sports Facilities',
      description: 'Spacious grounds for various sports activities and physical education programs.',
      color: 'from-[#facc15] to-yellow-600',
      gradient: true
    },
    {
      icon: Utensils,
      title: 'Canteen',
      description: 'Clean and hygienic canteen providing nutritious food at affordable prices.',
      color: 'from-green-500 to-green-600',
      gradient: true
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Bus facility available for students from various parts of the district.',
      color: 'from-blue-500 to-blue-600',
      gradient: true
    }
  ];

  const stats = [
    { icon: BookOpen, count: '15,000+', label: 'Books', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Microscope, count: '4', label: 'Laboratories', color: 'from-[#facc15] to-yellow-600' },
    { icon: MonitorPlay, count: '50+', label: 'Computers', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Building2, count: '10+', label: 'Facilities', color: 'from-[#facc15] to-yellow-600' }
  ];

  const libraryRules = [
    'Students may borrow books from the library every week on the day and the time allotted for issuing books to their classes.',
    'They may borrow two books at a time.',
    'Borrowers shall not write, damage or mark in the books, manuscripts, maps, charts, Log tablets and Lab manuals belonging to the Library.',
    'If any book is damaged, the new book will be collected or double the cost of the book will be collected from the borrower.',
    'Dictionaries, Grammar Books, Language Books and Encyclopedia are meant for reference only and will not be let.',
    'Books must be returned a fortnight earlier to the commencement of annual examinations to get "No Due Certificate" from the librarian.',
    'Students will be entitled to get the admission ticket for the examination only on producing "No Dues Certificate" from library, laboratory and sports section.'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#990c28] via-[#b8102f] to-[#990c28] text-white py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#facc15] opacity-10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-500 opacity-5 rounded-full blur-2xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-3xl mb-6 shadow-2xl"
            >
              <Building2 className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Campus Facilities
            </h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-1 w-16 bg-[#facc15] rounded-full"></div>
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 bg-white rounded-full"
              />
              <div className="h-1 w-16 bg-[#facc15] rounded-full"></div>
            </motion.div>
            <p className="text-xl md:text-2xl text-gray-300">
              World-Class Infrastructure for Holistic Education
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group cursor-pointer`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                
                <div className="text-4xl font-bold mb-2 text-center">{stat.count}</div>
                <div className="text-sm text-center opacity-90">{stat.label}</div>

                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full opacity-10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Infrastructure</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Our Facilities</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full mb-6"
            />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our college provides state-of-the-art facilities designed to enhance learning and 
              create a conducive environment for academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {mainFacilities.map((facility, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Facility Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${facility.color} text-white px-6 py-2 rounded-full font-semibold mb-4`}
                  >
                    <facility.icon className="w-5 h-5" />
                    <span>{facility.title}</span>
                  </motion.div>
                </div>

                <div className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Side */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <motion.div
                      whileHover={{  rotate: 2 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl group"
                    >
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        className="w-full h-[400px] object-cover transition-transform duration-700 " 
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className={`absolute inset-0 bg-gradient-to-t ${facility.color} opacity-60`}
                      />
                      
                      {/* Floating Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="absolute bottom-[1.5rem] right-[1.5rem]"
                      >
                        <div className={`w-20 h-20 bg-gradient-to-br ${facility.color} rounded-2xl shadow-2xl flex items-center justify-center`}>
                          <facility.icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="bg-white rounded-3xl shadow-xl p-8">
                        <h3 className="text-4xl font-bold text-[#990c28] mb-6">{facility.title}</h3>
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          className={`h-2 w-24 bg-gradient-to-r ${facility.color} rounded-full mb-6`}
                        />
                        
                        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          {facility.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-xl font-bold text-gray-800 mb-4">Key Features:</h4>
                          {facility.features.map((feature, fidx) => (
                            <motion.div
                              key={fidx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: fidx * 0.1 }}
                              whileHover={{ x: 10 }}
                              className="flex items-center gap-4"
                            >
                              <div className={`w-10 h-10 bg-gradient-to-br ${facility.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                <CheckCircle className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-gray-700 font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Library Rules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Guidelines</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Library Rules & Regulations</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#990c28] to-[#990c28] p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#990c28]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Important Rules</h3>
                    <p className="text-blue-100">Please adhere to these guidelines</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                {libraryRules.map((rule, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border-l-4 border-[#facc15]"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#990c28] to-[#990c28] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{rule}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#facc15] text-[#990c28] px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Sparkles className="w-5 h-5" />
              <span>More Facilities</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Additional Amenities</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {additionalFacilities.map((facility, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${facility.color} rounded-3xl p-10 text-white shadow-2xl overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  className="relative z-10"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <facility.icon className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-4">{facility.title}</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    {facility.description}
                  </p>
                </motion.div>

                <motion.div
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Facility Highlights</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Wifi, text: 'High-Speed WiFi', color: 'from-[#990c28] to-[#c41537]' },
              { icon: Shield, text: 'Safe & Secure', color: 'from-[#facc15] to-yellow-600' },
              { icon: Lightbulb, text: 'Smart Classrooms', color: 'from-[#990c28] to-[#c41537]' },
              { icon: Heart, text: 'Health Services', color: 'from-[#facc15] to-yellow-600' }
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-gradient-to-br ${highlight.color} rounded-2xl p-6 text-white text-center shadow-xl`}
              >
                <highlight.icon className="w-12 h-12 mx-auto mb-4" />
                <p className="font-bold text-lg">{highlight.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#990c28] opacity-5 rounded-full blur-3xl"
        />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-[#990c28] via-[#990c28] to-[#990c28] rounded-[3rem] shadow-2xl p-16 text-white overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-0 w-full h-full bg-[#990c28] opacity-10 rounded-[3rem]"
            />

            <motion.div className="relative z-10 text-center">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-16 h-16 text-[#facc15] mx-auto" />
              </motion.div>

              <h2 className="text-5xl font-bold mb-6">Experience Our Campus</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Visit our campus to explore our world-class facilities and experience the 
                vibrant learning environment we offer.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/contact" className="inline-flex items-center gap-3 bg-[#facc15] hover:bg-yellow-600 text-[#990c28] px-12 py-6 rounded-full font-bold transition-all shadow-2xl text-lg">
                    <MapPin className="w-6 h-6" />
                    <span>Visit Campus</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/admissions" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
                    <span>Apply Now</span>
                    <GraduationCap className="w-6 h-6" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-12 flex items-center justify-center gap-8 text-sm flex-wrap"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#facc15]" />
                  <span>Modern Library</span>
                </div>
                <div className="flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-[#facc15]" />
                  <span>Advanced Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#facc15]" />
                  <span>Smart Infrastructure</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-500 rounded-full opacity-10 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </section>
<ScrollToTop />

    </div>
  );
};

export default Facilities;
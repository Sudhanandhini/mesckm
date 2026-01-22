import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette,
  Landmark,
  BookOpen,
  Music,
  Theater,
  Award,
  Users,
  Sparkles,
  Star,
  Trophy,
  Camera,
  MapPin,
  Calendar,
  TrendingUp,
  Heart,
  Eye,
  Zap,
  Target,
  CheckCircle,
  Crown,
  Mic,
  Film,
  Paintbrush,
  Globe,
 
  History,
  Scroll,
  GraduationCap,
  PartyPopper,
  Lightbulb,
  Compass
} from 'lucide-react';

import ScrollToTop from '../components/ScrollToTop';

const Arts = () => {
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

  const clubs = [
    {
      title: 'Kalaspoothyi Club',
      icon: Theater,
      color: 'from-[#990c28] to-[#c41537]',
      description: 'Develops positive attitude, confidence, and courage through cultural activities',
      activities: [
        { icon: Music, text: 'Cultural Programs' },
        { icon: Star, text: 'Talent Shows' },
        { icon: Theater, text: 'Drama & Dance' },
        { icon: Mic, text: 'Music Events' }
      ]
    },
    {
      title: 'Heritage Club',
      icon: Landmark,
      color: 'from-[#facc15] to-yellow-600',
      description: 'Creates awareness about Indian heritage and cultural values',
      activities: [
        { icon: MapPin, text: 'Heritage Visits' },
        { icon: Palette, text: 'Cultural Exhibitions' },
        { icon: Users, text: 'Guest Lectures' },
        { icon: Globe, text: 'Awareness Programs' }
      ]
    },
    {
      title: 'History Club',
      icon: Scroll,
      color: 'from-[#990c28] to-[#c41537]',
      description: 'Organizes visits to historical Landmarks and exhibitions',
      activities: [
        { icon: Landmark, text: 'Historical Tours' },
        { icon: BookOpen, text: 'Research Projects' },
        { icon: Trophy, text: 'Competitions' },
        { icon: Film, text: 'Documentaries' }
      ]
    }
  ];

  const stats = [
    { icon: PartyPopper, count: '50+', label: 'Cultural Events', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Landmark, count: '30+', label: 'Heritage Visits', color: 'from-[#facc15] to-yellow-600' },
    { icon: Mic, count: '20+', label: 'Guest Lectures', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Users, count: '500+', label: 'Active Members', color: 'from-[#facc15] to-yellow-600' }
  ];

  const culturalPrograms = [
    'Annual cultural fest celebrations',
    'Inter-college competitions',
    'Traditional dance and music performances',
    'Drama and theater productions',
    'Art and craft exhibitions'
  ];

  const educationalTours = [
    'Visits to historical Landmarks',
    'Museum and gallery tours',
    'Archaeological site explorations',
    'Heritage walk programs',
    'Documentation projects'
  ];

  const benefits = [
    'Development of confidence and self-expression',
    'Enhanced cultural awareness and appreciation',
    'Leadership and teamwork skills',
    'Creative thinking and innovation',
    'Social responsibility and community engagement',
    'Historical knowledge and research skills'
  ];

  const achievements = [
    { title: 'Best Cultural Club Award', year: '2023', icon: Trophy, color: 'from-[#990c28] to-[#c41537]' },
    { title: 'Heritage Conservation Project', year: '2022', icon: Landmark, color: 'from-[#facc15] to-yellow-600' },
    { title: 'Inter-College Competition Winners', year: '2024', icon: Crown, color: 'from-[#990c28] to-[#c41537]' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
    'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400'
  ];

  const activityCards = [
    {
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600',
      title: 'Cultural Activities',
      description: 'Students actively participate in various cultural programs including drama, dance, music, and art exhibitions. These activities help develop confidence and showcase their talents.',
      icon: Theater
    },
    {
      image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=600',
      title: 'Heritage Visits',
      description: 'Regular visits to historical Landmarks, temples, and heritage sites help students understand and appreciate our rich cultural heritage and historical significance.',
      icon: Landmark
    }
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
            className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#facc15] opacity-5 rounded-full blur-2xl"
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
              <Palette className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Arts & Culture Clubs
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
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Kalaspoothyi, Heritage & History Clubs
            </p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-400 italic"
            >
              "Encouragement is as refreshing as a cold drink on a hot summer day"
            </motion.p>
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

      {/* Introduction Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About Us</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">About Our Arts Clubs</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full mb-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#facc15]"
          >
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                At M.E.S. College we have these three clubs especially for Arts students. <strong className="text-[#990c28]">Kalaspoothyi</strong> is aimed to 
                develop Positive attitude, Confidence & Courage among the students. The club provides a platform to the 
                students to express their hidden talents & skills.
              </p>
              <p>
                <strong className="text-[#990c28]">Heritage & History Clubs</strong> are advised to take up activities relating to Social activities. The objective 
                of these two clubs is to create social awareness about Indian heritage & importance of historical Landmarks. 
                Hence the clubs organized guest lectures, visit to historical places, exhibitions & various competitions, 
                students have participated in all the activities enthusiastically.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Clubs Section */}
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
              <span>Our Clubs</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Join Our Vibrant Community</h2>
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
            className="grid md:grid-cols-3 gap-8"
          >
            {clubs.map((club, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${club.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                  className="relative z-10"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <club.icon className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center">{club.title}</h3>
                  <p className="text-sm mb-6 leading-relaxed opacity-90 text-center">
                    {club.description}
                  </p>

                  <div className="space-y-3">
                    {club.activities.map((activity, aidx) => (
                      <motion.div
                        key={aidx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: aidx * 0.1 }}
                        className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
                      >
                        <activity.icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{activity.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

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

      {/* Activities Cards Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">What We Do</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Our Activities</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {activityCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#990c28] via-transparent to-transparent"
                  />
                  
                  {/* Floating Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="absolute bottom-[0.5rem] right-[1.5rem]"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl shadow-2xl flex items-center justify-center">
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#990c28] mb-3">{card.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Key Activities & Programs</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cultural Programs */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#990c28] to-[#c41537] p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#facc15] rounded-2xl flex items-center justify-center">
                    <Theater className="w-8 h-8 text-[#990c28]" />
                  </div>
                  <h3 className="text-3xl font-bold">Cultural Programs</h3>
                </div>
              </div>
              <div className="p-8 space-y-3">
                {culturalPrograms.map((program, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <Star className="w-5 h-5 text-[#facc15] flex-shrink-0" />
                    <span className="text-gray-700">{program}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Educational Tours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#facc15] to-yellow-600 p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#facc15]" />
                  </div>
                  <h3 className="text-3xl font-bold">Educational Tours</h3>
                </div>
              </div>
              <div className="p-8 space-y-3">
                {educationalTours.map((tour, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <Star className="w-5 h-5 text-[#990c28] flex-shrink-0" />
                    <span className="text-gray-700">{tour}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#990c28] to-[#990c28] text-white px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Camera className="w-5 h-5" />
              <span>Gallery</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Activities Gallery</h2>
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
            className="grid md:grid-cols-3 gap-6"
          >
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative h-64 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Activity ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#990c28] via-transparent to-transparent flex items-end p-6"
                >
                  <div className="text-white">
                    <div className="text-lg font-bold">Activity {idx + 1}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Student Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#990c28]">Student Benefits</h3>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-[#facc15] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Join Our Clubs */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#990c28] via-[#990c28] to-[#990c28] text-white rounded-3xl shadow-2xl p-10 relative overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-0 left-0 w-full h-full bg-[#990c28] opacity-10 rounded-3xl"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#facc15] rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-[#990c28]" />
                  </div>
                  <h3 className="text-3xl font-bold">Join Our Clubs</h3>
                </div>
                
                <p className="mb-8 text-lg leading-relaxed opacity-90">
                  Become part of our vibrant arts community. Explore your talents, learn about our rich heritage, 
                  and participate in exciting cultural activities throughout the year.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: GraduationCap, text: 'Open to all Arts students' },
                    { icon: Calendar, text: 'Regular meetings and activities' },
                    { icon: Trophy, text: 'Certificates and recognition' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 bg-white/10 rounded-xl p-4"
                    >
                      <item.icon className="w-6 h-6 text-[#facc15]" />
                      <span className="text-lg">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#990c28] to-[#990c28]  text-white px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Trophy className="w-5 h-5" />
              <span>Achievements</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Our Achievements</h2>
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
            className="grid md:grid-cols-3 gap-8"
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${achievement.color} rounded-3xl p-10 text-white shadow-2xl overflow-hidden group text-center`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                  className="relative z-10"
                >
                  <achievement.icon className="w-20 h-20 mx-auto mb-6" />
                  <h4 className="text-2xl font-bold mb-3">{achievement.title}</h4>
                  <p className="text-lg opacity-90">{achievement.year}</p>
                </motion.div>

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

              <h2 className="text-5xl font-bold mb-6">Unleash Your Creativity</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Join our arts clubs and be part of a vibrant community that celebrates culture, 
                heritage, and creativity. Express yourself and make lasting memories!
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
                    <Users className="w-6 h-6" />
                    <span>Join Now</span>
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
                  <Theater className="w-5 h-5 text-[#facc15]" />
                  <span>Cultural Events</span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#facc15]" />
                  <span>Heritage Tours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#facc15]" />
                  <span>Competitions</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl"
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

export default Arts;
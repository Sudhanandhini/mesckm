import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom,
  Microscope,
  Lightbulb,
  Award,
  Users,
  Sparkles,
  Star,
  Trophy,
  BookOpen,
  GraduationCap,
  Target,
  CheckCircle,
  Calendar,
  Presentation,
  Building2,
  Brain,
  Rocket,
  TrendingUp,
  Heart,
  Globe,
  Crown
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
const Science = () => {
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

  const stats = [
    { icon: Calendar, count: '2008', label: 'Forum Established', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Trophy, count: '50+', label: 'Exhibitions', color: 'from-[#facc15] to-yellow-600' },
    { icon: Presentation, count: '100+', label: 'Seminars', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Users, count: '1000+', label: 'Participants', color: 'from-[#facc15] to-yellow-600' }
  ];

  const activities = [
    {
      icon: Microscope,
      title: 'Science Exhibitions',
      color: 'from-[#990c28] to-[#c41537]',
      description: 'Annual exhibitions showcasing student projects and innovations'
    },
    {
      icon: Presentation,
      title: 'Seminars & Workshops',
      color: 'from-[#facc15] to-yellow-600',
      description: 'Expert talks and hands-on learning sessions'
    },
    {
      icon: Brain,
      title: 'Science Quiz',
      color: 'from-[#990c28] to-[#c41537]',
      description: 'Competitive quizzes to test scientific knowledge'
    },
    {
      icon: Building2,
      title: 'Model Making',
      color: 'from-[#facc15] to-yellow-600',
      description: 'Creative scientific models and demonstrations'
    },
    {
      icon: Calendar,
      title: 'National Science Day',
      color: 'from-[#990c28] to-[#c41537]',
      description: 'Special celebrations and events every year'
    },
    {
      icon: BookOpen,
      title: 'Research Activities',
      color: 'from-[#facc15] to-yellow-600',
      description: 'Student research projects and paper presentations'
    }
  ];

  const scienceDayActivities = [
    'Science Quiz Competitions',
    'Model Exhibitions',
    'Poster Presentations',
    'Guest Lectures',
    'Prize Distribution'
  ];

  const benefits = [
    'Practical knowledge enhancement',
    'Research and innovation skills',
    'Scientific temperament development',
    'Presentation and communication skills',
    'Networking with experts',
    'Career guidance in science fields'
  ];

  const guestLectures = [
    {
      topic: 'Laser Science and Technology',
      speaker: 'Dr. H I Bhat',
      designation: 'Professor, Department of Physics, Indian Institute of Science',
      date: '22.02.2016',
      color: 'from-[#990c28] to-[#c41537]'
    },
    {
      topic: 'Advanced Research in Physics',
      speaker: 'Distinguished Scientists and Researchers',
      designation: 'Various Institutions',
      date: 'Regular sessions throughout the year',
      color: 'from-[#990c28] to-[#c41537]'
    }
  ];

  const exhibitionImages = [
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400',
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400'
  ];

  const achievements = [
    { icon: Calendar, count: '15+', label: 'Years Active', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Trophy, count: '50+', label: 'Exhibitions', color: 'from-[#facc15] to-yellow-600' },
    { icon: Presentation, count: '100+', label: 'Seminars', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Users, count: '1000+', label: 'Participants', color: 'from-[#facc15] to-yellow-600' }
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
              <Atom className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              GALAXY Science Forum
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
              A Cluster of Stars - Nurturing Scientific Minds
            </p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-400 italic"
            >
              Inspiring Innovation Through Science Since 2008
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

      {/* About Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About Galaxy</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">About GALAXY Science Forum</h2>
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
                <strong className="text-[#990c28]">GALAXY</strong> is the name of Science forum of our college. The Greek word <em className="text-[#facc15]">GALAXY</em> means a cluster of stars. 
                To exhibit the talent of science students, we started the science forum in our college in the year <span className="font-bold text-[#990c28]">2008</span>.
              </p>
              <p>
                Through this forum, students can conduct science quiz, seminars, workshops, science exhibitions, article exhibitions, etc. 
                It helps students to learn the subjects more practically.
              </p>
              <p>
                Through this forum we will celebrate <span className="font-bold text-[#990c28]">National Science Day</span> every year. So in all the aspects it helps in the growth of science students.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
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
              <span>Our Activities</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Forum Activities</h2>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${activity.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group`}
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
                    className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <activity.icon className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center">{activity.title}</h3>
                  <p className="text-center opacity-90 leading-relaxed">
                    {activity.description}
                  </p>
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

      {/* Seminars & Workshops Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Learning</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Seminars & Workshops</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#990c28] to-[#c41537] p-8 text-white text-center">
              <Presentation className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">Expert-Led Sessions</h3>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600" 
                    alt="Seminar"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#990c28] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-xl group"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" 
                    alt="Workshop"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#990c28] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-lg text-center">
                Regular seminars and workshops are conducted by inviting eminent scientists, professors, and industry experts. 
                These sessions provide students with exposure to latest developments in science and technology, fostering 
                innovation and research mindset among students.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Science Exhibition Section */}
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#990c28] to-[#990c28] text-white px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Trophy className="w-5 h-5" />
              <span>Exhibitions</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Science Exhibitions</h2>
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
            className="grid md:grid-cols-3 gap-6 mb-8"
          >
            {exhibitionImages.map((image, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative h-64 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Exhibition ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#990c28] via-transparent to-transparent flex items-end p-6"
                >
                  <div className="text-white">
                    <div className="text-lg font-bold">Exhibition {idx + 1}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-8"
          >
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                On the eve of <span className="font-bold text-[#990c28]">Science day celebration</span>, Galaxy Science forum organizes Science model exhibition annually. 
                The event is inaugurated by distinguished guests including joint secretaries from Malnad Education Society.
              </p>
              <p>
                Around <span className="font-bold text-[#990c28]">thirty innovative models</span> are exhibited by students showcasing their creativity and scientific knowledge. 
                The exhibition provides a platform for students to present their research and practical work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guest Lectures Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Experts</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Expert Guest Lectures</h2>
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
            className="space-y-6"
          >
            {guestLectures.map((lecture, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 border-l-4 border-[#facc15]"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${lecture.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#990c28] mb-3">{lecture.topic}</h3>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-[#facc15]" />
                        <strong>Speaker:</strong> {lecture.speaker}
                      </p>
                      <p className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-[#facc15]" />
                        {lecture.designation}
                      </p>
                      <p className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#facc15]" />
                        <strong>Date:</strong> {lecture.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* National Science Day & Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* National Science Day */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
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
                  <div className="w-16 h-16 bg-[#990c28] rounded-2xl flex items-center justify-center">
                    <Star className="w-8 h-8 text-[#990c28]" />
                  </div>
                  <h2 className="text-3xl font-bold">National Science Day</h2>
                </div>
                
                <p className="mb-6 leading-relaxed opacity-90">
                  We celebrate National Science Day every year on <span className="font-bold">February 28th</span> to commemorate the discovery of the Raman Effect 
                  by Sir C.V. Raman.
                </p>

                <div className="space-y-3">
                  {scienceDayActivities.map((activity, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#facc15]" />
                      <span>{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Student Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-10"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#990c28]">Student Benefits</h2>
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
                    <Star className="w-6 h-6 text-[#facc15] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Crown className="w-5 h-5" />
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
            className="grid md:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${achievement.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group text-center`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
                  className="relative z-10"
                >
                  <achievement.icon className="w-16 h-16 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{achievement.count}</div>
                  <div className="text-sm opacity-90">{achievement.label}</div>
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

              <h2 className="text-5xl font-bold mb-6">Join GALAXY Science Forum</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Be part of a vibrant scientific community. Explore, innovate, and contribute 
                to the advancement of science through engaging activities and research.
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
                    <span>Get Involved</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/admissions" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
                    <span>Learn More</span>
                    <Rocket className="w-6 h-6" />
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
                  <Microscope className="w-5 h-5 text-[#facc15]" />
                  <span>Science Exhibitions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Presentation className="w-5 h-5 text-[#facc15]" />
                  <span>Expert Seminars</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#facc15]" />
                  <span>Competitions</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl"
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

export default Science;
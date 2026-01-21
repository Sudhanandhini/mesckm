import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Target, 
  Users, 
  Award, 
  Heart, 
  Star, 
  GraduationCap, 
  Building2, 
  Lightbulb,
  Trophy,
  Globe,
  Briefcase,
  CheckCircle,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import imgPrincipal from '../assets/principal01.jpg';
import im from '../assets/im.jpg';

const About = () => {
  const achievements = [
    { icon: Trophy, title: '100% Results', desc: 'Consistent academic excellence over 40 years' },
    { icon: Award, title: 'University Ranks', desc: 'Students securing top positions regularly' },
    { icon: Users, title: '5000+ Alumni', desc: 'Successful women leaders across sectors' },
    { icon: Globe, title: 'NAAC Accredited', desc: 'Quality education recognized nationally' }
  ];

  const facilities = [
    { icon: BookOpen, title: 'Modern Library', desc: '100,000+ books and digital resources' },
    { icon: Lightbulb, title: 'Smart Labs', desc: 'Well-equipped science and computer laboratories' },
    { icon: Building2, title: 'Spacious Campus', desc: 'State-of-the-art infrastructure and facilities' },
    { icon: Users, title: 'Expert Faculty', desc: '150+ highly qualified teaching professionals' }
  ];

  const programs = [
    { name: 'Bachelor of Arts', icon: '🎨', courses: 'Multiple specializations available' },
    { name: 'Bachelor of Commerce', icon: '💼', courses: 'Commerce and Management streams' },
    { name: 'Bachelor of Science', icon: '🔬', courses: 'Various science specializations' },
    { name: 'BBM', icon: '📊', courses: 'Management and Business programs' }
  ];

  const values = [
    'Academic Excellence',
    'Women Empowerment',
    'Cultural Heritage',
    'Innovation & Research',
    'Social Responsibility',
    'Character Building'
  ];

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

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Exact ICSE Design */}
      <section className="relative bg-gradient-to-br from-[#990c28] via-[#b8102f] to-[#990c28] text-white py-32 overflow-hidden ">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-[#facc15] opacity-10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-[#facc15] opacity-10 rounded-full blur-3xl"
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
              <BookOpen className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              About Us
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
            <p className="text-xl md:text-2xl text-gray-300">Know more about MES College</p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-12 bg-[#990c28]"></div>
                <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Welcome</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6">
                Welcome to MES College For Women
              </h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-2 w-24 bg-gradient-to-r from-[#facc15] to-yellow-600 rounded-full mb-6"
              />
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                MES M.S. Padmavathamma M.K. Sambasiva Setty First Grade College For Women, a pioneer 
                institution of Chikmagalur, came into existence in 1984 with a noble intention of 
                catering to the needs of women in the field of education.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                A bond of dedicated teachers along with supportive management have consistently shaped 
                and honed the personality of students. The students of this college and their parents 
                have always felt privileged.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={im} 
                  alt="College Campus" 
                  className="w-full h-96 object-cover" 
                />
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute top-0 right-0 w-20 h-full bg-[#facc15]"
                  style={{ transformOrigin: 'top' }}
                />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute bottom-8 left-8 w-32 h-32 bg-[#990c28] rounded-2xl flex items-center justify-center shadow-2xl"
                >
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">40+</div>
                    <div className="text-xs">Years</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Vision, Mission, Values */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-3xl p-10 text-white shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#facc15] to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-[#facc15] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <Target className="w-10 h-10 text-[#990c28]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed text-gray-200">
                To empower women through quality education and to create responsible citizens who 
                can contribute to the nation's development.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-3xl p-10 text-white shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#990c28] to-[#c41537] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <Heart className="w-10 h-10 text-[#facc15]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To provide holistic education that nurtures intellectual, emotional, and social growth, 
                preparing women to excel in their chosen fields.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-3xl p-10 text-white shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#facc15] to-yellow-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-[#facc15] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
              >
                <Star className="w-10 h-10 text-[#990c28]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-200">
                {values.slice(0, 3).map((value, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#facc15]" />
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Leadership</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Principal's Desk</h2>
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
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-4 border-[#facc15]"
          >
            <div className="grid md:grid-cols-3 gap-0">
              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <img 
                  src={imgPrincipal}
                  alt="Principal" 
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#990c28]/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-1">Principal</h3>
                    <p className="text-[#facc15]">MES College For Women</p>
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="md:col-span-2 p-8 md:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <GraduationCap className="w-8 h-8 text-[#facc15]" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#990c28]">PRINCIPAL'S DESK</h3>
                      <div className="h-1 w-20 bg-[#facc15] rounded-full mt-2"></div>
                    </div>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-lg italic text-[#990c28] mb-6 font-semibold border-l-4 border-[#facc15] pl-4"
                  >
                    "The aim of education is not the specialist but the man of vision who can humanize 
                    our life by integrating emotional demands with our new knowledge"
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-700 leading-relaxed"
                  >
                    Education is the foundation of progress and development. At MES College, we are 
                    committed to providing quality education that empowers women to become confident, 
                    capable leaders who contribute meaningfully to society.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* College History */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Heritage</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Our History</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border-l-4 border-[#facc15]"
              >
                <p className="text-gray-700 leading-relaxed">
                  MES M.S. Padmavathamma M. K. Sambasiva Setty First Grade College For Women came into 
                  existence in 1984 with a noble intention of catering to the needs of women in the field 
                  of education. A bond of dedicated teachers along with supportive management have 
                  consistently shaped and honed the personality of students.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#facc15]/10 to-yellow-50 rounded-2xl p-8 shadow-lg border-l-4 border-[#990c28]"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 bg-[#990c28] rounded-xl flex items-center justify-center flex-shrink-0"
                  >
                    <Trophy className="w-6 h-6 text-[#facc15]" />
                  </motion.div>
                  <p className="text-[#990c28] font-semibold">
                    It is a proud privilege to say that the academic achievement of our Institution is 
                    100% and we are elated to announce that our students have secured Ranks in University 
                    Examinations.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  We offer Bachelor of Degree in Arts, Commerce and Science. Apart from that the Management 
                  Program (BBM) is started at M.E.S. which is an enriched and fortified program designed to 
                  create sound Managers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Apart from academic glories, our students have participated and won numerous prizes in 
                  University and National level sports meets and various cultural competitions.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600" 
                  alt="College Building"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#990c28]/80 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold">
                    Our college located at the heart of the city with spacious campus and modern facilities
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
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
              <Briefcase className="w-5 h-5" />
              <span>Academic Excellence</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Our Programs</h2>
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
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#facc15] text-center"
              >
                <motion.div
                  animate={floatingAnimation}
                  className="text-5xl mb-4"
                >
                  {program.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#990c28] mb-3">{program.name}</h3>
                <p className="text-gray-600">{program.courses}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#facc15]"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto"
                >
                  <achievement.icon className="w-8 h-8 text-[#facc15]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#990c28] mb-3 text-center">
                  {achievement.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center">
                  {achievement.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
            {facilities.map((facility, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <facility.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[#990c28] mb-2">{facility.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{facility.desc}</p>
                  </div>
                </div>
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
            className="relative bg-gradient-to-br from-[#990c28] via-[#990c28] to-[#990c28] rounded-[3rem] shadow-2xl p-16 text-center text-white overflow-hidden"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-0 w-full h-full bg-[#990c28] opacity-10 rounded-[3rem]"
            />

            <motion.div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-16 h-16 text-[#facc15] mx-auto" />
              </motion.div>
              <h2 className="text-5xl font-bold mb-6">Join Our Legacy</h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Be part of a 40-year legacy of excellence in women's education. Shape your future with us.
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="/admissions" className="inline-flex items-center gap-3 bg-[#facc15] hover:bg-yellow-600 text-[#990c28] px-12 py-6 rounded-full font-bold transition-all shadow-2xl text-lg">
                  <span>Apply for Admission</span>
                  <TrendingUp className="w-6 h-6" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
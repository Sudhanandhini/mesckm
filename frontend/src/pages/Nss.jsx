import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Target, 
  Award,
  Sparkles,
  Calendar,
  Globe,
  HandHeart,
  Lightbulb,
  TreePine,
  BookOpen,
  TrendingUp,
  CheckCircle,
  Star,
  Handshake,
  MessageCircle,
  Leaf,
  Home,
  GraduationCap,
  Smile
} from 'lucide-react';
import imgNssLogo from '../assets/nss.jpg';
import imgActivity1 from '../assets/nss1.jpg';
import imgActivity2 from '../assets/nss2.jpg';
import imgActivity3 from '../assets/mnss.jpg';
import ScrollToTop from '../components/ScrollToTop';

const Nss = () => {
  const objectives = [
    'To provoke the students social consciousness',
    'To provide students with an opportunity to work with the people in villages',
    'To develop quality of social service',
    'To create a forum for students from diverse background',
    'To provide students a forum to develop leadership quality',
    'To earn respect for manual labor',
    'To provide opportunities for corporate living'
  ];

  const programs = [
    { 
      icon: Calendar, 
      title: 'Regular Activities', 
      desc: 'Community service, awareness programs, and social welfare activities',
      color: 'from-[#990c28] to-[#c41537]'
    },
    { 
      icon: Home, 
      title: 'Special Camps', 
      desc: '7-day residential camps in adopted villages for intensive community work',
      color: 'from-[#facc15] to-yellow-600'
    },
    { 
      icon: Globe, 
      title: 'National Events', 
      desc: 'Participation in national integration camps and youth festivals',
      color: 'from-[#990c28] to-[#c41537]'
    }
  ];

  const activities = [
    { icon: TreePine, title: 'Environmental Conservation', desc: 'Tree plantation and cleanliness drives' },
    { icon: BookOpen, title: 'Adult Literacy', desc: 'Teaching programs for adults and children' },
    { icon: Heart, title: 'Health Awareness', desc: 'Blood donation and health camps' },
    { icon: Handshake, title: 'Community Development', desc: 'Village adoption and infrastructure projects' },
    { icon: Leaf, title: 'Sustainable Living', desc: 'Promoting eco-friendly practices' },
    { icon: Users, title: 'Social Welfare', desc: 'Support for underprivileged communities' }
  ];

  const impact = [
    { icon: Users, number: '200+', label: 'Active Volunteers' },
    { icon: HandHeart, number: '50+', label: 'Annual Programs' },
    { icon: Award, number: '15+', label: 'Villages Adopted' },
    { icon: Star, number: '1000+', label: 'Lives Impacted' }
  ];

  const benefits = [
    { icon: GraduationCap, title: 'Leadership Development', desc: 'Enhance leadership and organizational skills' },
    { icon: Users, title: 'Social Awareness', desc: 'Develop understanding of social issues' },
    { icon: Smile, title: 'Personal Growth', desc: 'Build confidence and self-esteem' },
    { icon: Award, title: 'Recognition', desc: 'Certificates and awards for service' }
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
      {/* Hero Section */}
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
              <HandHeart className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              National Service Scheme
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
            <p className="text-xl md:text-2xl text-gray-300">Not Me But You - Service Through Education</p>
          </motion.div>
        </div>
      </section>

      {/* About NSS Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={imgNssLogo}
                  alt="NSS Logo" 
                  className="w-full h-[500px] object-contain bg-white p-8"
                />
                
                {/* Yellow Accent Strip */}
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
                  className="absolute bottom-8 left-8 bg-[#990c28] rounded-2xl p-6 shadow-2xl text-white text-center"
                >
                  <Calendar className="w-12 h-12 text-[#facc15] mx-auto mb-2" />
                  <div className="text-xl font-bold">Since 1969</div>
                  <div className="text-xs">Gandhi Centenary</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-0.5 w-12 bg-[#990c28]"></div>
                  <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About NSS</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6 leading-tight"
              >
                National Service Scheme
              </motion.h2>

              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-2 w-24 bg-gradient-to-r from-[#facc15] to-yellow-600 rounded-full mb-6"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-4 text-gray-700 leading-relaxed text-lg"
              >
                <p>
                  The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, 
                  Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of India 
                  to take part in various government led community service activities & programs.
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-[#facc15]/10 to-yellow-50 border-l-4 border-[#990c28] p-6 rounded-lg"
                >
                  <p className="font-semibold text-[#990c28] text-xl mb-2">
                    "Not Me But You"
                  </p>
                  <p className="text-gray-600">
                    This expresses the essence of democratic living and upholds the need for selfless service 
                    and appreciation of the other person's point of view.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Birth and Motto Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
                <Calendar className="w-10 h-10 text-[#990c28]" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-4">Birth of NSS</h3>
              <p className="text-2xl leading-relaxed text-gray-200">
                September 24, 1969
              </p>
              <p className="text-lg mt-2 text-gray-300">
                During Gandhi Centenary Year
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
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
              <h3 className="text-3xl font-bold mb-4">Motto of NSS</h3>
              <p className="text-2xl font-bold leading-relaxed mb-2">
                "NOT ME BUT YOU"
              </p>
              <p className="text-lg leading-relaxed">
                Expressing the essence of democratic living and selfless service with consideration 
                for fellow human beings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
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
              className="inline-flex items-center gap-2 bg-[#facc15] text-[#990c28] px-6 py-2 rounded-full font-semibold mb-4"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Our Impact</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Making a Difference</h2>
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
            {impact.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all cursor-pointer border-t-4 border-[#facc15]"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="w-8 h-8 text-[#facc15]" />
                </motion.div>
                <div className="text-4xl font-bold text-[#990c28] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Goals and Objectives */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Mission</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Goals & Objectives</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#990c28]"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Target className="w-8 h-8 text-[#facc15]" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-[#990c28] mb-4">Goal of NSS</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Education through community service and community service through education.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-xl p-8 border-t-4 border-[#facc15]"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                >
                  <Lightbulb className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-[#990c28] mb-4">Overall Objective</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Development of student personality through community service.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Specific Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center shadow-lg"
              >
                <CheckCircle className="w-8 h-8 text-[#facc15]" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#990c28]">Specific Objectives</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {objectives.map((objective, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 bg-gradient-to-r from-gray-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{objective}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Our Activities</h2>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#facc15]"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center mb-4 shadow-lg"
                >
                  <activity.icon className="w-7 h-7 text-[#facc15]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#990c28] mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8"
          >
            <h3 className="text-3xl font-bold text-[#990c28] mb-8 text-center">Activity Gallery</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img 
                  src={imgActivity1}
                  alt="NSS Activity 1" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#990c28]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Community Service Program</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img 
                  src={imgActivity2}
                  alt="NSS Activity 2" 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#990c28]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">Social Awareness Campaign</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img 
                src={imgActivity3}
                alt="NSS Activity 3" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#990c28]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">NSS Camp Activities</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Programs</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Key Programs</h2>
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
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${program.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group cursor-pointer`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={floatingAnimation}
                  className="relative z-10"
                >
                  <program.icon className="w-16 h-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-center">{program.title}</h3>
                  <p className="leading-relaxed text-center opacity-90">{program.desc}</p>
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

      {/* Benefits Section */}
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
              className="inline-flex items-center gap-2 bg-[#facc15] text-[#990c28] px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Star className="w-5 h-5" />
              <span>Benefits</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Why Join NSS?</h2>
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
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#facc15] text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto"
                >
                  <benefit.icon className="w-8 h-8 text-[#facc15]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#990c28] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
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

              <h2 className="text-5xl font-bold mb-6">Join NSS Today</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Be part of a movement that transforms lives and communities. Join NSS and make a difference 
                through selfless service and social responsibility.
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
                    <span>Register Now</span>
                    <HandHeart className="w-6 h-6" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/contact" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
                    <span>Learn More</span>
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-12 grid md:grid-cols-3 gap-6"
              >
                {[
                  { icon: Users, text: 'Build Leadership' },
                  { icon: Heart, text: 'Serve Society' },
                  { icon: Award, text: 'Gain Recognition' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  >
                    <item.icon className="w-10 h-10 text-[#facc15] mx-auto mb-3" />
                    <p className="font-semibold">{item.text}</p>
                  </motion.div>
                ))}
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

export default Nss;
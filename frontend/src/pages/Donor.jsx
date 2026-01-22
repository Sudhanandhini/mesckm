import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Star,
  Gift,
  Trophy,
  Building2,
  Sparkles,
  Calendar,
  Target,
  Globe,
  GraduationCap
} from 'lucide-react';
import imgDonor from '../assets/donars.jpg';

import img from '../assets/im.jpg';

import ScrollToTop from '../components/ScrollToTop';

const Donor = () => {
  const achievements = [
    { icon: Gift, number: '₹4M+', label: 'Total Donations', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Users, number: '1000+', label: 'Students Helped', color: 'from-[#facc15] to-yellow-600' },
    { icon: Trophy, number: '40+', label: 'Years Legacy', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Heart, number: '100%', label: 'Dedicated Service', color: 'from-[#facc15] to-yellow-600' }
  ];

  const timeline = [
    { 
      year: '1920', 
      title: 'Birth of a Legend',
      desc: 'M.K. Sambasiva Setty born on February 18, 1920 in Mysore',
      icon: Star
    },
    { 
      year: '1950s', 
      title: 'Philanthropic Journey Begins',
      desc: 'Started contributing to various educational institutions',
      icon: Heart
    },
    { 
      year: '1984', 
      title: 'College Foundation',
      desc: 'MES College for Women established with generous donation',
      icon: Building2
    },
    { 
      year: 'Legacy', 
      title: 'Eternal Impact',
      desc: 'Continues to inspire generations of students',
      icon: Sparkles
    }
  ];

  const contributions = [
    { 
      title: 'Education Support',
      desc: 'Financial aid for thousands of deserving students',
      icon: BookOpen,
      color: 'bg-[#facc15]/5 border-[#facc15]'
    },
    { 
      title: 'Infrastructure Development',
      desc: 'Contributed to building modern educational facilities',
      icon: Building2,
      color: 'bg-[#facc15]/5 border-[#facc15]'
    },
    { 
      title: 'Women Empowerment',
      desc: 'Dedicated focus on women\'s higher education',
      icon: Users,
      color: 'bg-[#facc15]/5 border-[#facc15]'
    },
    { 
      title: 'Cultural Heritage',
      desc: 'Preserved Mysore family history spanning four centuries',
      icon: Globe,
      color: 'bg-[#facc15]/5 border-[#facc15]'
    }
  ];

  const values = [
    'Generosity',
    'Vision',
    'Dedication',
    'Compassion',
    'Excellence',
    'Service'
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
      {/* Hero Section - Same as About */}
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
              <Heart className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              College Donor
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
            <p className="text-xl md:text-2xl text-gray-300">A Legacy of Philanthropy and Vision</p>
          </motion.div>
        </div>
      </section>

      {/* Main Donor Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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
                  src={imgDonor}
                  alt="Donor" 
                  className="w-full h-[600px] object-contain"
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
                  <Gift className="w-12 h-12 text-[#facc15] mx-auto mb-2" />
                  <div className="text-2xl font-bold">₹1M</div>
                  <div className="text-xs">Primary Donation</div>
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
                  <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Philanthropist</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6 leading-tight"
              >
                Sri M. SAMBASHIVA SETTY & Smt. M.S. PADMAVATHAMMA
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
                  On February 18, 1920, a well-known 'Philanthropic Mysore Family' was blessed with 
                  M.K. Sambasiva Setty, son of Mysore Krishna Shetty, who would go on to become one of 
                  the most generous philanthropists in the region.
                </p>
                
                <p>
                  Throughout his lifetime, he made an astonishing contribution of 3 to 4 million rupees 
                  to various causes, cementing his legacy as a person of remarkable generosity and vision. 
                  He is fondly remembered for his donations and kindness that touched countless lives.
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-[#facc15]/10 to-yellow-50 border-l-4 border-[#990c28] p-6 rounded-lg"
                >
                  <p className="font-semibold text-[#990c28]">
                    No one should forget to mention his magnanimous donation of one million rupees to MES 
                    Institution, to name the College as "Smt. Padmavathamma M.K. Sambasiva Setty College for Women"
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl p-6 text-center text-white shadow-lg cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: idx * 0.5 }}
                  className="w-12 h-12 bg-[#facc15] rounded-full flex items-center justify-center mx-auto mb-3"
                >
                  <Star className="w-6 h-6 text-[#990c28]" />
                </motion.div>
                <p className="font-bold">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Impact</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Philanthropic Impact</h2>
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
            {achievements.map((stat, idx) => (
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
                  animate={floatingAnimation}
                  className="relative z-10"
                >
                  <stat.icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
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

      {/* Timeline Section */}
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
              <Calendar className="w-5 h-5" />
              <span>Journey</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Legacy Timeline</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#990c28] via-[#facc15] to-[#990c28] rounded-full hidden md:block"
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-[#facc15]"
                    >
                      <div className={`flex items-center gap-3 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center"
                        >
                          <item.icon className="w-6 h-6 text-[#facc15]" />
                        </motion.div>
                        <span className="text-3xl font-bold text-[#facc15]">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#990c28] mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </motion.div>
                  </div>

                  {/* Center Point */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.2 }}
                    className="hidden md:block w-6 h-6 bg-[#facc15] rounded-full border-4 border-white shadow-lg z-10"
                  />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Key Contributions</h2>
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
            {contributions.map((contribution, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`${contribution.color} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2`}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
                  >
                    <contribution.icon className="w-8 h-8 text-[#990c28]" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[#990c28] mb-2">
                      {contribution.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {contribution.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Biography */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Biography</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Life & Legacy</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  Many service organizations and other institutions have thrived towards their achievement 
                  because of his dedicational work towards those organizations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  He, in his lifetime, made an astonishing contribution by donating 3 to 4 million rupees, 
                  no matter whatever the purposes may be. He is often remembered for his donations and kindness.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl p-8 shadow-lg text-white"
              >
                <Award className="w-12 h-12 text-[#facc15] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Historic Achievement</h3>
                <p className="leading-relaxed text-gray-100">
                  He was the sole person to collect the data of Four Centuries to prepare the "Mysore Family Tree", 
                  which is a historical document now.
                </p>
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
                  Besides his philanthropic work, he proved to be a helping hand for many poor students and 
                  is a well-known personality in Chikmagalur.
                </p>
                <p className="text-[#990c28] font-bold text-lg">
                  His contributions and achievements have made him a personality which Chikmagalur can never forget.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-lg h-64"
              >
                <img 
                  src={img} 
                  alt="Students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#990c28]/90 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <GraduationCap className="w-10 h-10 text-[#facc15] mb-2" />
                    <p className="font-semibold">Thousands of students benefited from his vision</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
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

            <motion.div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Trophy className="w-16 h-16 text-[#facc15] mx-auto" />
              </motion.div>

              <h2 className="text-5xl font-bold mb-6 text-center">Legacy of Philanthropy</h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-xl mb-8 leading-relaxed text-gray-200 text-center max-w-3xl mx-auto"
              >
                The generous contribution of Sri M. Sambashiva Setty and Smt. M.S. Padmavathamma has enabled 
                thousands of young women to pursue higher education and achieve their dreams. Their vision and 
                dedication continue to inspire us to maintain the highest standards of education and character formation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid md:grid-cols-3 gap-6 mt-12"
              >
                {[
                  { icon: Heart, text: 'Compassionate Vision' },
                  { icon: Users, text: 'Community Impact' },
                  { icon: Star, text: 'Lasting Legacy' }
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

export default Donor;
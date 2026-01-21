import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Target,
  Sparkles,
  BookOpen,
  GraduationCap,
  BarChart3,
  PieChart,
  DollarSign,
  Building2,
  Lightbulb,
  Globe,
  Rocket,
  CheckCircle,
  Star,
  Trophy,
  Calculator,
  LineChart,
  ShoppingCart,
  Presentation,
  FileText,
  Calendar,
  Clock,
  MapPin,
  Zap,
  Heart,
  Eye,
  Crown,
  Megaphone,
  Store,
  TrendingDown
} from 'lucide-react';

const Commerce = () => {
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
    { icon: Calendar, count: '2006', label: 'Forum Established', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Users, count: '500+', label: 'Active Students', color: 'from-[#facc15] to-yellow-600' },
    { icon: Presentation, count: '50+', label: 'Seminars/Year', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Award, count: '15+', label: 'Years Experience', color: 'from-[#facc15] to-yellow-600' }
  ];

  const departments = [
    {
      icon: Briefcase,
      title: 'Commerce Forum',
      color: 'from-[#990c28] to-[#c41537]',
      year: 'Since 2006',
      description: 'Platform for students to showcase their talents in commerce subjects and cultural activities.',
      features: [
        { icon: Star, text: 'Talent Exhibition Platform' },
        { icon: BookOpen, text: 'Commerce Subject Focus' },
        { icon: Users, text: 'Cultural Activities' },
        { icon: Trophy, text: 'Student Recognition' }
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Marketing Club',
      color: 'from-[#facc15] to-yellow-600',
      year: 'Active Programs',
      description: 'Conducts marketing seminars and activities to enhance practical knowledge in marketing management.',
      features: [
        { icon: Megaphone, text: 'Marketing Seminars' },
        { icon: LineChart, text: 'Market Research' },
        { icon: Globe, text: 'Industry Connect' },
        { icon: Lightbulb, text: 'Practical Learning' }
      ]
    },
    {
      icon: Building2,
      title: 'MES Chamber of Commerce',
      color: 'from-[#990c28] to-[#c41537]',
      year: 'Since 2011-12',
      description: 'Organizes commerce seminars and career-oriented programs for holistic student development.',
      features: [
        { icon: Presentation, text: 'Expert Seminars' },
        { icon: Target, text: 'Career Programs' },
        { icon: TrendingUp, text: 'Skill Development' },
        { icon: Award, text: 'Industry Exposure' }
      ]
    }
  ];

  const programs = [
    {
      icon: Calculator,
      code: 'B.Com',
      title: 'Bachelor of Commerce',
      color: 'from-[#990c28] to-[#c41537]',
      description: 'Comprehensive commerce education with focus on accounting, taxation, and business management.',
      subjects: [
        'Financial Accounting',
        'Business Law',
        'Income Tax',
        'Corporate Accounting',
        'Cost Accounting',
        'Management Principles'
      ]
    },
    {
      icon: Briefcase,
      code: 'BBA',
      title: 'Bachelor of Business Administration',
      color: 'from-[#facc15] to-yellow-600',
      description: 'Professional degree preparing students for managerial roles in modern business organizations.',
      subjects: [
        'Business Management',
        'Marketing Management',
        'Human Resource',
        'Financial Management',
        'Operations Management',
        'Business Analytics'
      ]
    }
  ];

  const activities = [
    {
      title: 'Seminar Events',
      color: 'from-[#990c28] to-[#c41537]',
      icon: Presentation,
      description: 'Expert-led seminars on contemporary commerce topics'
    },
    {
      title: 'Cultural Activities',
      color: 'from-[#facc15] to-yellow-600',
      icon: Star,
      description: 'Student talent showcase and cultural programs'
    },
    {
      title: 'Marketing Club',
      color: 'from-[#990c28] to-[#c41537]',
      icon: ShoppingCart,
      description: 'Practical marketing campaigns and competitions'
    },
    {
      title: 'Chamber Events',
      color: 'from-[#facc15] to-yellow-600',
      icon: Building2,
      description: 'Industry interactions and career guidance sessions'
    }
  ];

  const benefits = [
    'Practical industry exposure through seminars',
    'Leadership development opportunities',
    'Networking with commerce professionals',
    'Career guidance and placement support',
    'Entrepreneurship development programs',
    'Skill enhancement workshops',
    'Cultural and personality development',
    'Research and project opportunities'
  ];

  const highlights = [
    { icon: TrendingUp, title: 'Career Growth', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Users, title: 'Industry Connect', color: 'from-[#facc15] to-yellow-600' },
    { icon: Lightbulb, title: 'Innovation Hub', color: 'from-green-500 to-green-600' },
    { icon: Award, title: 'Excellence', color: 'from-blue-500 to-blue-600' }
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
              <Briefcase className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Commerce & Management
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
              Excellence in Commerce Education and Career Development
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About Department</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Department Overview</h2>
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
                Department of Commerce and Management Sciences has started <span className="font-bold text-[#990c28]">Commerce and Management forum in 2006 April</span>, 
                with an intention to provide a platform to the students to exhibit their talents relating to Commerce 
                subjects and Cultural activities.
              </p>
              <p>
                Department of Commerce and Management forum also have a <span className="font-bold text-[#990c28]">marketing club</span> under which various marketing 
                related seminars and other marketing related activities are undertaken every year.
              </p>
              <p>
                In <span className="font-bold text-[#990c28]">2011-12</span> both the department, along with PU Commerce students have started <span className="font-bold text-[#990c28]">M E S Chamber of Commerce</span> 
                with an intention to conduct series of excellent commerce related seminars and career oriented programs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
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
              <span>Our Forums</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Forums & Clubs</h2>
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
            {departments.map((dept, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${dept.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group`}
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
                    <dept.icon className="w-10 h-10" />
                  </motion.div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{dept.title}</h3>
                    <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm">
                      {dept.year}
                    </div>
                  </div>
                  
                  <p className="text-sm mb-6 leading-relaxed opacity-90 text-center">
                    {dept.description}
                  </p>

                  <div className="space-y-3">
                    {dept.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fidx * 0.1 }}
                        className="flex items-center gap-3 bg-white/10 rounded-xl p-3"
                      >
                        <feature.icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">{feature.text}</span>
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

      {/* Programs Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Courses</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Programs Offered</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${program.color} p-8 text-white`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <program.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Program</div>
                      <h3 className="text-3xl font-bold">{program.code}</h3>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{program.title}</h4>
                  <p className="opacity-90 text-sm">{program.description}</p>
                </div>
                
                <div className="p-8">
                  <h5 className="text-lg font-bold text-gray-800 mb-4">Key Subjects:</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {program.subjects.map((subject, sidx) => (
                      <motion.div
                        key={sidx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: sidx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 bg-gray-50 rounded-xl p-3"
                      >
                        <CheckCircle className="w-4 h-4 text-[#facc15] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{subject}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#990c28] to-[#990c28] text-white px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Star className="w-5 h-5" />
              <span>Activities</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Department Activities</h2>
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
            {activities.map((activity, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${activity.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group cursor-pointer h-80`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ rotate: [0, 36] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative z-10 flex flex-col items-center justify-center h-full text-center"
                >
                  <activity.icon className="w-20 h-20 mb-6" />
                  
                  <h3 className="text-2xl font-bold mb-4">{activity.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{activity.description}</p>
                 
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-0.5 w-12 bg-[#990c28]"></div>
                  <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
                </div>
                <h2 className="text-5xl font-bold text-[#990c28] mb-4">Student Benefits</h2>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className="h-2 w-24 bg-gradient-to-r from-[#facc15] to-yellow-600 rounded-full mb-6"
                />
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
                    className="flex items-center gap-4 bg-gray-50 rounded-xl p-4"
                  >
                    <CheckCircle className="w-6 h-6 text-[#facc15] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`bg-gradient-to-br ${highlight.color} rounded-3xl p-8 text-white shadow-xl text-center`}
                  >
                    <highlight.icon className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold">{highlight.title}</h4>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-3xl p-8 text-white shadow-xl"
              >
                <h4 className="text-2xl font-bold mb-4">Join Our Department</h4>
                <p className="mb-6 opacity-90">
                  Be part of a dynamic learning environment that prepares you for a successful career in commerce and management.
                </p>
                <div className="flex gap-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a href="/admissions" className="inline-flex items-center gap-2 bg-[#facc15] hover:bg-yellow-600 text-[#990c28] px-6 py-3 rounded-full font-bold transition-all">
                      <GraduationCap className="w-5 h-5" />
                      <span>Apply Now</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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

              <h2 className="text-5xl font-bold mb-6">Start Your Commerce Journey</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Join our Commerce and Management department to develop business acumen, 
                leadership skills, and prepare for a successful career in the corporate world.
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
                    <span>Visit Department</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/admissions" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
                    <span>Admission Info</span>
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
                  <Briefcase className="w-5 h-5 text-[#facc15]" />
                  <span>B.Com & BBA</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#facc15]" />
                  <span>Career Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#facc15]" />
                  <span>Industry Connect</span>
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
    </div>
  );
};

export default Commerce;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope,
  FlaskConical,
  Dna,
  MonitorPlay,
  Shield,
  Users,
  Settings,
  Zap,
  CheckCircle,
  Clock,
  BookOpen,
  Award,
  Target,
  Sparkles,
  TrendingUp,
  Eye,
  Droplet,
  Atom,
  Binary,
  Wifi,
  Printer,
  Database,
  Code,
  Gauge,
  AlertTriangle,
  HeartPulse,
  Beaker,
  TestTube,
  Ruler,
  Calendar,
  MapPin,
  Activity
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

const Laboratories = () => {
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

  const labs = [
    {
      name: 'Physics Laboratory',
      icon: Atom,
      color: 'from-[#990c28] to-[#990c28]',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600',
      description: 'Our Physics laboratory is equipped with modern instruments and apparatus for conducting experiments in mechanics, optics, electricity, and modern physics.',
      facilities: [
        { icon: Gauge, text: 'Advanced measuring instruments' },
        { icon: Eye, text: 'Optics equipment' },
        { icon: Zap, text: 'Electrical circuits setup' },
        { icon: Activity, text: 'Digital multimeters' }
      ]
    },
    {
      name: 'Chemistry Laboratory',
      icon: FlaskConical,
      color: 'from-[#990c28] to-[#990c28]',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600',
      description: 'Well-ventilated chemistry lab with all necessary chemicals, apparatus, and safety equipment for organic, inorganic, and physical chemistry experiments.',
      facilities: [
        { icon: Shield, text: 'Fume hoods and safety equipment' },
        { icon: TestTube, text: 'Chemical storage facility' },
        { icon: Gauge, text: 'Analytical balance' },
        { icon: Beaker, text: 'pH meters and spectrophotometers' }
      ]
    },
    {
      name: 'Biology Laboratory',
      icon: Dna,
      color: 'from-[#990c28] to-[#990c28]',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600',
      description: 'Fully equipped biology laboratory with microscopes, specimens, models, and charts for botany, zoology, and microbiology studies.',
      facilities: [
        { icon: Microscope, text: 'Compound microscopes' },
        { icon: Ruler, text: 'Dissection instruments' },
        { icon: Droplet, text: 'Preserved specimens' },
        { icon: BookOpen, text: 'Charts and models' }
      ]
    },
    {
      name: 'Computer Laboratory',
      icon: MonitorPlay,
      color: 'from-[#990c28] to-[#990c28]',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
      description: 'Modern computing facilities with latest software and hardware. Regular practical sessions enhance technical skills and prepare students for the digital world.',
      facilities: [
        { icon: MonitorPlay, text: 'Latest high-speed computers' },
        { icon: Wifi, text: 'High-speed internet connectivity' },
        { icon: Code, text: 'Programming tools and IDEs' },
        { icon: Printer, text: 'Printing and scanning facilities' }
      ]
    }
  ];

  const stats = [
    { icon: Microscope, count: '4', label: 'Modern Labs', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Settings, count: '100+', label: 'Equipment', color: 'from-[#facc15] to-yellow-600' },
    { icon: Users, count: '50+', label: 'Students/Batch', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Award, count: '10+', label: 'Lab Staff', color: 'from-[#facc15] to-yellow-600' }
  ];

  const features = [
    { title: 'Modern Equipment', icon: Settings, desc: 'Latest instruments and apparatus', color: 'from-blue-500 to-blue-600' },
    { title: 'Safety Measures', icon: Shield, desc: 'First aid and fire safety equipment', color: 'from-red-500 to-red-600' },
    { title: 'Qualified Staff', icon: Users, desc: 'Experienced lab technicians', color: 'from-green-500 to-green-600' },
    { title: 'Regular Maintenance', icon: Settings, desc: 'Well-maintained facilities', color: 'from-purple-500 to-purple-600' },
    { title: 'Adequate Space', icon: TrendingUp, desc: 'Spacious labs for learning', color: 'from-orange-500 to-orange-600' },
    { title: 'Individual Practice', icon: Target, desc: 'Each student performs experiments', color: 'from-pink-500 to-pink-600' }
  ];

  const timings = [
    { lab: 'Physics Lab', timing: '9:00 AM - 5:00 PM', days: 'Monday - Saturday' },
    { lab: 'Chemistry Lab', timing: '9:00 AM - 5:00 PM', days: 'Monday - Saturday' },
    { lab: 'Biology Lab', timing: '9:00 AM - 5:00 PM', days: 'Monday - Saturday' },
    { lab: 'Computer Lab', timing: '8:30 AM - 5:30 PM', days: 'Monday - Saturday' }
  ];

  const generalRules = [
    'Students must wear lab coats in chemistry and biology labs',
    'Follow all safety instructions carefully',
    'Handle equipment with care',
    'Report any breakage or accidents immediately',
    'Keep the lab clean and organized'
  ];

  const safetyGuidelines = [
    'No eating or drinking in laboratories',
    'Wear safety goggles when required',
    'Dispose of chemicals properly',
    'Know the location of safety equipment',
    'Follow emergency evacuation procedures'
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
              <Microscope className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Laboratory Facilities
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
              State-of-the-Art Laboratories for Hands-On Learning
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About Our Labs</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">World-Class Laboratory Facilities</h2>
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
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                We have <span className="font-bold text-[#990c28]">well-equipped individual laboratories</span> for Physics, Chemistry, Biology, and Computer Science. 
                Practical classes are conducted regularly. The laboratories are enriched every year with modern equipment. 
                <span className="font-bold text-[#990c28]"> Experiments are performed by the students individually.</span>
              </p>
              <p>
                Series of lecturing will be held throughout the academic year by the best orators in various fields.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Labs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-20">
            {labs.map((lab, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileHover={{  rotate: 2 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl group"
                  >
                    <img 
                      src={lab.image} 
                      alt={lab.name}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={`absolute inset-0 bg-gradient-to-t ${lab.color} opacity-60`}
                    />
                    
                    {/* Floating Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="absolute top-6 right-6"
                    >
                      <div className={`w-20 h-20 bg-gradient-to-br ${lab.color} rounded-2xl shadow-2xl flex items-center justify-center`}>
                        <lab.icon className="w-10 h-10 text-white" />
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
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${lab.color} rounded-xl flex items-center justify-center`}>
                        <lab.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="h-0.5 w-12 bg-[#990c28]"></div>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-[#990c28] mb-4">{lab.name}</h3>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      className={`h-2 w-24 bg-gradient-to-r ${lab.color} rounded-full mb-6`}
                    />
                    
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                      {lab.description}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Key Facilities:</h4>
                      {lab.facilities.map((facility, fidx) => (
                        <motion.div
                          key={fidx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: fidx * 0.1 }}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md"
                        >
                          <div className={`w-10 h-10 bg-gradient-to-br ${lab.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <facility.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{facility.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              <Sparkles className="w-5 h-5" />
              <span>Why Choose Us</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Lab Features & Benefits</h2>
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
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${feature.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group`}
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
                    <feature.icon className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-center">{feature.title}</h3>
                  <p className="text-center opacity-90 leading-relaxed">{feature.desc}</p>
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

      {/* Rules & Regulations Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Safety First</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Rules & Regulations</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* General Rules */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#990c28] to-[#c41537] p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#facc15] rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#990c28]" />
                  </div>
                  <h3 className="text-3xl font-bold">General Rules</h3>
                </div>
              </div>
              <div className="p-8 space-y-4">
                {generalRules.map((rule, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{rule}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Safety Guidelines */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-3xl font-bold">Safety Guidelines</h3>
                </div>
              </div>
              <div className="p-8 space-y-4">
                {safetyGuidelines.map((guideline, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{guideline}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lab Timings Section */}
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
              <Clock className="w-5 h-5" />
              <span>Operating Hours</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Laboratory Timings</h2>
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
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#990c28] to-[#c41537] text-white">
                    <th className="px-8 py-5 text-left font-bold text-lg">Laboratory</th>
                    <th className="px-8 py-5 text-left font-bold text-lg">Timing</th>
                    <th className="px-8 py-5 text-left font-bold text-lg">Days</th>
                  </tr>
                </thead>
                <tbody>
                  {timings.map((timing, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ backgroundColor: '#fef3c7' }}
                      className="border-b border-gray-200 transition-colors duration-300"
                    >
                      <td className="px-8 py-5 font-bold text-gray-800">{timing.lab}</td>
                      <td className="px-8 py-5 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[#990c28]" />
                          {timing.timing}
                        </div>
                      </td>
                      <td className="px-8 py-5 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#990c28]" />
                          {timing.days}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
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

              <h2 className="text-5xl font-bold mb-6">Experience Hands-On Learning</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Our state-of-the-art laboratories provide the perfect environment for practical learning 
                and scientific exploration. Visit us to see our facilities firsthand.
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
                    <span>Visit Our Labs</span>
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
                  <span>4 Modern Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#facc15]" />
                  <span>100+ Equipment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#facc15]" />
                  <span>Expert Staff</span>
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

export default Laboratories;
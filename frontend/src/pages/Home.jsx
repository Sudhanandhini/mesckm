import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  Brain, 
  Users, 
  Trophy, 
  TrendingUp,
  BookOpen,
  Award,
  Target,
  Heart,
  Check,
  Globe,
  Phone
} from 'lucide-react';
import img from '../assets/img.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('mission');
  const observerRefs = useRef([]);

  useEffect(() => {
    const observers = [];
    
    observerRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [index]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  // Counter animation hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }, [end, duration]);
    
    return count;
  };

  const stats = [
    { icon: Brain, label: 'Expert Teachers', value: 150, suffix: '+' },
    { icon: Users, label: 'Students', value: 1000, suffix: '+' },
    { icon: Trophy, label: 'Awards Won', value: 50, suffix: '+' },
    { icon: TrendingUp, label: 'Pass Rate', value: 99, suffix: '%' }
  ];

  const features = [
    { icon: BookOpen, title: 'Quality Education', description: 'Comprehensive programs following UGC guidelines' },
    { icon: Users, title: 'Expert Faculty', description: 'Experienced teachers dedicated to student success' },
    { icon: Award, title: 'Academic Excellence', description: 'Consistent outstanding results and university ranks' },
    { icon: Target, title: 'Holistic Development', description: 'Focus on academics, sports, and character building' }
  ];

  const aboutFeatures = [
    'NAAC Accredited',
    'UGC Recognized',
    'Modern Infrastructure',
    'Holistic Development',
    'Student-Centered Learning',
    'Co-curricular Activities'
  ];

  const StatCard = ({ icon: Icon, label, value, suffix }) => {
    const count = useCounter(value);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10, scale: 1.05 }}
        className="bg-white rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all cursor-pointer border-t-4 border-[#facc15]"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center mx-auto mb-4"
        >
          <Icon className="w-8 h-8 text-[#facc15]" />
        </motion.div>
        <motion.p
          className="text-4xl font-bold text-[#990c28] mb-2"
        >
          {count}{suffix}
        </motion.p>
        <p className="text-gray-600 font-semibold">{label}</p>
      </motion.div>
    );
  };

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

  const aboutItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="overflow-hidden bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#990c28] via-[#b8102f] to-[#990c28] text-white py-32 overflow-hidden ">
        {/* Animated Background */}
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
          <motion.div
            animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-500 opacity-5 rounded-full blur-3xl"
          />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#facc15] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

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
              className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#facc15] via-yellow-500 to-yellow-600 rounded-3xl mb-6 shadow-2xl relative"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-3xl border-4 border-dashed border-white opacity-30"
              />
              <GraduationCap className="w-12 h-12 text-white relative z-10" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-[#facc15]" />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
                MES College For Women
              </span>
            </motion.h1>

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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              Empowering Women Through Quality Education Since 1984
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/admissions" className="group relative inline-flex items-center gap-2 bg-[#facc15] hover:bg-yellow-600 text-[#990c28] px-10 py-5 rounded-full font-bold transition-all shadow-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Apply for Admission</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold transition-all border-2 border-white/30">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="relative -mt-16 z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, idx) => (
              <StatCard
                key={idx}
                icon={stat.icon}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Find Your Program Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={el => observerRefs.current[0] = el}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={img} 
                  alt="Student" 
                  className="w-full h-[500px] object-cover"
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

                {/* Icon Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
                  className="absolute bottom-8 left-8 w-32 h-32 bg-[#990c28] rounded-2xl flex items-center justify-center shadow-2xl"
                >
                  <GraduationCap className="w-16 h-16 text-[#facc15]" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              ref={el => observerRefs.current[1] = el}
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
                  <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Programs</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6 leading-tight"
              >
                Find Your Program
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 mb-8 leading-relaxed text-lg"
              >
                We offer comprehensive undergraduate and postgraduate programs in Arts, Commerce, 
                Science, and Management. Our curriculum is designed to meet industry standards and 
                prepare students for successful careers.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {[
                  { name: 'Arts', icon: '🎨', color: 'from-[#990c28]/10 to-[#990c28]/5' },
                  { name: 'Commerce', icon: '💼', color: 'from-[#990c28]/10 to-[#990c28]/5' },
                  { name: 'Science', icon: '🔬', color: 'from-[#990c28]/10 to-[#990c28]/5' },
                  { name: 'Management', icon: '📊', color: 'from-[#990c28]/10 to-[#990c28]/5' }
                ].map((program, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`group bg-gradient-to-br ${program.color} p-6 rounded-xl cursor-pointer border border-[#990c28]/10 shadow-lg hover:shadow-xl transition-all`}
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl mb-2"
                    >
                      {program.icon}
                    </motion.div>
                    <div className="font-semibold text-[#990c28]">{program.name}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/course-regulations" 
                    className="inline-block px-8 py-4 bg-[#facc15] text-[#990c28] rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Learn more →
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/admissions" 
                    className="inline-block px-8 py-4 bg-white border-2 border-[#990c28] text-[#990c28] rounded-full font-bold hover:bg-[#990c28] hover:text-white transition-all shadow-lg hover:shadow-xl"
                  >
                    Apply Now →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Mission & Vision Tabs */}
      <section className="py-20 bg-gradient-to-r from-[#990c28]/5 via-[#990c28]/1 to-[#990c28]/1">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <motion.div
              ref={el => observerRefs.current[2] = el}
              initial={{ opacity: 0, x: -50 }}
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
                  <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About Us</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-8 leading-tight"
              >
                About The College
              </motion.h2>

              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 mb-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'mission'
                      ? 'bg-[#facc15] text-[#990c28] shadow-lg'
                      : 'bg-[#990c28]/10 text-[#990c28] hover:bg-[#990c28]/20'
                  }`}
                >
                  Our Mission
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === 'vision'
                      ? 'bg-[#facc15] text-[#990c28] shadow-lg'
                      : 'bg-[#990c28]/10 text-[#990c28] hover:bg-[#990c28]/20'
                  }`}
                >
                  Our Vision
                </motion.button>
              </motion.div>

              {/* Tab Content */}
              <div className="min-h-[300px]">
                {activeTab === 'mission' && (
                  <motion.div
                    key="mission"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-gray-700 leading-relaxed mb-6 text-lg"
                    >
                      MES M.S. Padmavathamma M.K. Sambasiva Setty College For Women, a pioneer 
                      institution of Chikmagalur, came into existence in 1984 with a noble intention 
                      of catering to the needs of women in the field of education.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-700 leading-relaxed mb-6 text-lg"
                    >
                      A bond of dedicated teachers along with a supportive management have consistently 
                      shaped and honed the personality of students.
                    </motion.p>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 gap-4 mb-8"
                    >
                      {aboutFeatures.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          variants={aboutItemVariants}
                          className="flex items-center gap-3 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="flex-shrink-0 w-8 h-8 bg-[#facc15] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl"
                          >
                            <Check className="w-5 h-5 text-[#990c28]" strokeWidth={3} />
                          </motion.div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === 'vision' && (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-gray-700 leading-relaxed mb-6 text-lg"
                    >
                      To be recognized as a leading institution for women's education, fostering 
                      holistic development and empowering young women to become confident, capable, 
                      and compassionate leaders who contribute meaningfully to society.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-gray-700 leading-relaxed mb-6 text-lg"
                    >
                      We envision a future where every woman has access to quality education that 
                      not only prepares them for successful careers but also instills values of 
                      integrity, social responsibility, and lifelong learning.
                    </motion.p>

                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="space-y-3 mb-8"
                    >
                      {[
                        'Excellence in academic and co-curricular activities',
                        'Create globally competitive graduates',
                        'Build a strong research and innovation culture',
                        'Establish industry partnerships for placements'
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          variants={aboutItemVariants}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <motion.span
                            whileHover={{ scale: 1.5 }}
                            className="w-2 h-2 bg-[#facc15] rounded-full"
                          />
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/about"
                    className="inline-block px-10 py-4 bg-[#facc15] text-[#990c28] rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Read More About Us →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              ref={el => observerRefs.current[3] = el}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600" 
                  alt="About College" 
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Overlay with Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, type: "spring" }}
                        className="text-3xl font-bold text-[#990c28] mb-1"
                      >
                        40+
                      </motion.div>
                      <div className="text-sm text-gray-600">Years Legacy</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="text-3xl font-bold text-[#990c28] mb-1"
                      >
                        90+
                      </motion.div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <motion.div
            ref={el => observerRefs.current[4] = el}
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
              <Heart className="w-5 h-5" />
              <span>Why Choose Us</span>
            </motion.div>

            <h2 className="text-5xl font-bold text-[#990c28] mb-4">
              Why Choose MES College?
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#facc15] relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#facc15]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-[#990c28] mb-3 relative z-10">
                  {feature.title}
                </h3>

                <p className="text-gray-700 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                <motion.div
                  className="absolute bottom-0 right-0 w-24 h-24 bg-[#990c28] rounded-tl-full opacity-5"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Information for Students Section */}
      <section className="bg-gradient-to-b from-[#990c28]/5 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={el => observerRefs.current[5] = el}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6"
              >
                Information for Current Students
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 leading-relaxed mb-6 text-lg"
              >
                Access important resources, academic calendars, examination schedules, and student services. 
                Stay updated with all campus activities and announcements.
              </motion.p>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 mb-8"
              >
                {[
                  'Academic Calendar 2024-25',
                  'Examination Time Tables',
                  'Internal Assessment Schedules',
                  'Results and Grade Cards',
                  'Student Portal Access',
                  'Library Resources'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={aboutItemVariants}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <motion.span
                      whileHover={{ scale: 1.5, rotate: 360 }}
                      className="w-2 h-2 bg-[#990c28] rounded-full"
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/students" 
                    className="inline-block px-8 py-4 bg-[#990c28] text-white rounded-full font-bold hover:bg-[#7a0a20] transition-all shadow-lg hover:shadow-xl"
                  >
                    Student Portal
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact" 
                    className="inline-block px-8 py-4 bg-[#facc15] text-[#990c28] rounded-full font-bold hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    Contact Support
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={el => observerRefs.current[6] = el}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600" 
                  alt="Students in library" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="bg-white py-20">
        <div 
          ref={el => observerRefs.current[7] = el}
          className="max-w-7xl mx-auto px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">
              Our Facilities
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=600" 
                alt="Campus facilities" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#990c28]/80 to-transparent flex items-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-white"
                >
                  <h3 className="text-2xl font-bold mb-2">Modern Infrastructure</h3>
                  <p>State-of-the-art facilities for enhanced learning</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600" 
                alt="Sports complex" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#990c28]/80 to-transparent flex items-end p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-white"
                >
                  <h3 className="text-2xl font-bold mb-2">Sports & Recreation</h3>
                  <p>World-class sports facilities and wellness center</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Learning */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={el => observerRefs.current[8] = el}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600" 
                  alt="Professional learning" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
            </motion.div>

            <motion.div
              ref={el => observerRefs.current[9] = el}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6"
              >
                Professional learning that gets recognized
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 leading-relaxed mb-8 text-lg"
              >
                Our programs are designed in collaboration with industry experts to ensure that our students 
                receive education that is relevant, practical, and recognized by top employers and institutions worldwide.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { icon: '🏆', text: 'NAAC Accredited' },
                  { icon: '🎓', text: 'UGC Recognized' },
                  { icon: '💼', text: 'Industry Partnerships' },
                  { icon: '🌟', text: 'Placement Support' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-[#990c28]/5 p-6 rounded-xl text-center cursor-pointer shadow-lg hover:shadow-xl transition-all"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl mb-2"
                    >
                      {item.icon}
                    </motion.div>
                    <div className="font-semibold text-[#990c28]">{item.text}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      {/* <section className="bg-gradient-to-r from-[#990c28]/10 to-[#990c28]/5 py-20">
        <div 
          ref={el => observerRefs.current[10] = el}
          className="max-w-7xl mx-auto px-4"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {[
              { 
                title: 'New Science',
                description: 'Cutting-edge research and modern laboratories',
                color: 'from-orange-500 to-orange-600'
              },
              { 
                title: 'Best Offer',
                description: 'Scholarships and financial aid programs',
                color: 'from-teal-500 to-teal-600'
              },
              { 
                title: 'Best Teachers',
                description: 'Experienced faculty committed to excellence',
                color: 'from-blue-500 to-blue-600'
              },
              { 
                title: 'Online Classes',
                description: 'Flexible learning with digital resources',
                color: 'from-purple-500 to-purple-600'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`bg-gradient-to-br ${card.color} text-white p-8 rounded-2xl shadow-xl cursor-pointer`}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold mb-4"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-white/90"
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Impact Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={el => observerRefs.current[11] = el}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6"
              >
                The world is changing and so are we
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-700 leading-relaxed mb-8 text-lg"
              >
                We continuously evolve our curriculum and teaching methodologies to meet the demands of 
                the modern world. Our commitment to innovation ensures our students are always ahead.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/about" 
                    className="inline-block px-10 py-4 bg-[#990c28] text-white rounded-full font-bold hover:bg-[#7a0a20] transition-all shadow-lg hover:shadow-xl"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              ref={el => observerRefs.current[12] = el}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-orange-100 p-6 rounded-xl text-center shadow-lg"
              >
                <motion.div
                  animate={floatingAnimation}
                  className="text-5xl mb-3"
                >
                  📚
                </motion.div>
                <div className="text-3xl font-bold text-[#990c28] mb-1">100K+</div>
                <div className="text-gray-600">Books in Library</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-orange-100 p-6 rounded-xl text-center shadow-lg"
              >
                <motion.div
                  animate={floatingAnimation}
                  className="text-5xl mb-3"
                >
                  🔬
                </motion.div>
                <div className="text-3xl font-bold text-[#990c28] mb-1">15+</div>
                <div className="text-gray-600">Modern Labs</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="col-span-2"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600" 
                    alt="Research" 
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </motion.div>
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
            ref={el => observerRefs.current[13] = el}
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

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-16 h-16 text-[#facc15] mx-auto" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-6"
              >
                Ready to Start Your Journey?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200"
              >
                Admissions are now open for the new academic year. Give yourself the gift of quality education.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/admissions" className="group inline-flex items-center gap-3 bg-[#facc15] hover:bg-yellow-600 text-[#990c28] px-12 py-6 rounded-full font-bold transition-all shadow-2xl text-lg relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">Apply Now</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </Link>
                </motion.div>
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
    </div>
  );
};

export default Home;
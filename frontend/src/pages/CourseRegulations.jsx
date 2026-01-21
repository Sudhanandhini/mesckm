import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Award, 
  Users, 
  Target, 
  TrendingUp,
  Briefcase,
  GraduationCap,
  Clock,
  CheckCircle,
  FileText,
  Calendar,
  Globe,
  Lightbulb,
  Star,
  Building2,
  ArrowRight,
  Sparkles,
  Heart,
  Trophy,
  MessageSquare,
  Rocket
} from 'lucide-react';
import imgPrincipal from '../assets/principal01.jpg';

const CourseRegulations = () => {
  const courses = [
    { 
      name: 'Bachelor of Arts (BA)', 
      icon: '🎨',
      color: 'from-[#990c28] to-[#c41537]',
      subjects: ['English', 'History', 'Economics', 'Psychology'],
      duration: '3 Years'
    },
    { 
      name: 'Bachelor of Commerce (B.Com)', 
      icon: '💼',
      color: 'from-[#facc15] to-yellow-600',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Statistics'],
      duration: '3 Years'
    },
    { 
      name: 'Bachelor of Science (B.Sc)', 
      icon: '🔬',
      color: 'from-[#990c28] to-[#c41537]',
      subjects: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
      duration: '3 Years'
    },
    { 
      name: 'Bachelor of Business Administration (BBA)', 
      icon: '📊',
      color: 'from-[#facc15] to-yellow-600',
      subjects: ['Management', 'Marketing', 'Finance', 'HR'],
      duration: '3 Years'
    }
  ];

  const bbaHighlights = [
    { icon: Target, title: 'Strategic Decision Making', desc: 'Focus on analytical and strategic thinking' },
    { icon: Users, title: 'Leadership Skills', desc: 'Develop management and leadership competencies' },
    { icon: Globe, title: 'Global Perspective', desc: 'Understanding of international business dynamics' },
    { icon: Lightbulb, title: 'Innovation Focus', desc: 'Emphasis on creative problem-solving' }
  ];

  const admissionSteps = [
    { step: '01', title: 'Application', desc: 'Submit application form with required documents', icon: FileText },
    { step: '02', title: 'Verification', desc: 'Document verification and eligibility check', icon: CheckCircle },
    { step: '03', title: 'Fee Payment', desc: 'Pay admission and semester fees', icon: Award },
    { step: '04', title: 'Enrollment', desc: 'Complete enrollment process', icon: GraduationCap }
  ];

  const documents = [
    'Secondary School Leaving Certificate or Marks Card',
    'Transfer Certificate (TC) from the college last attended',
    'Conduct Certificate',
    'Study Certificate',
    'Migration/Eligibility Certificate (if applicable)',
    '10th Marks card (xerox)',
    'Four Passport size and two stamp size photos'
  ];

  const benefits = [
    { icon: Trophy, title: 'Quality Education', desc: 'Affiliated to Kuvempu University with experienced faculty' },
    { icon: Building2, title: 'Modern Infrastructure', desc: 'Well-equipped classrooms and laboratories' },
    { icon: Users, title: 'Industry Exposure', desc: 'Internships, workshops, and company visits' },
    { icon: Rocket, title: 'Career Growth', desc: 'Placement support and career guidance' }
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
              <BookOpen className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Courses Offered
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
            <p className="text-xl md:text-2xl text-gray-300">Empowering Future Leaders Through Quality Education</p>
          </motion.div>
        </div>
      </section>

      {/* Course Overview Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Programs</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Our Degree Programs</h2>
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
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${course.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group cursor-pointer`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={floatingAnimation}
                  className="text-5xl mb-4"
                >
                  {course.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{course.name}</h3>
                
                <div className="flex items-center gap-2 mb-4 text-sm opacity-90">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>

                <div className="space-y-1 text-sm opacity-90">
                  {course.subjects.map((subject, sidx) => (
                    <div key={sidx} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>

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

      {/* BBA Detailed Section */}
      <section className="py-20 bg-gray-50">
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
                  src={imgPrincipal}
                  alt="BBA Program" 
                  className="w-full h-[600px] object-cover"
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
                  <Briefcase className="w-12 h-12 text-[#facc15] mx-auto mb-2" />
                  <div className="text-2xl font-bold">BBA</div>
                  <div className="text-xs">Management Program</div>
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
                  <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Featured Program</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6 leading-tight"
              >
                Bachelor of Business Administration (BBA)
              </motion.h2>

              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-2 w-24 bg-gradient-to-r from-[#facc15] to-yellow-600 rounded-full mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-sm mb-6"
              >
                (Affiliated to Kuvempu University & approved by the Govt. of Karnataka)
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4 text-gray-700 leading-relaxed mb-8"
              >
                <p>
                  BBA program at MES is uniquely designed to meet the demands placed on business professionals 
                  by global markets. Our Management Program emphasizes strategic decision-making, workplace 
                  relationships, effective communication, and both quantitative and qualitative analysis.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-[#facc15]/10 to-yellow-50 border-l-4 border-[#990c28] p-6 rounded-lg"
                >
                  <p className="font-semibold text-[#990c28]">
                    Students get challenging projects, internships, seminars, workshops, group discussions, 
                    guest talks, and company visits to interact with industry leaders.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* BBA Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bbaHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#facc15]"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto"
                >
                  <highlight.icon className="w-8 h-8 text-[#facc15]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#990c28] mb-3 text-center">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-center text-sm">
                  {highlight.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Other Degree Programs</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full mb-6"
            />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Bachelor of Degree in Arts, Commerce & Science
            </p>
            <p className="text-gray-500 text-sm">(Affiliated to Kuvempu University & approved by the Govt. of Karnataka)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-12 border-t-4 border-[#facc15]"
          >
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <GraduationCap className="w-8 h-8 text-[#facc15]" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#990c28] mb-4">Aims and Objectives</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The main aim and objectives of higher education in quality enhancement and sustenance drive 
                  realize its ultimate objective. The realm of higher education is the creator of ideas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The college strives to play the role of catalyst in synergizing the efforts of all stakeholders 
                  namely, the Government, the teachers, the parents, the society and the students. Our effort is 
                  to promote participation of students in the learning process and create an ambience of gaining 
                  knowledge, information, culture, career guidance, personality and skill development.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-[#990c28]/5 to-[#990c28]/15 rounded-2xl p-8 border-l-4 border-[#facc15]"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-[#990c28]" />
                <h4 className="text-xl font-bold text-[#990c28]">Duration of the Programme</h4>
              </div>
              <p className="text-gray-700 text-lg">
                Three academic years (Six Semesters) as prescribed by Kuvempu University.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process Section */}
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
              <FileText className="w-5 h-5" />
              <span>Admission Process</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">How to Apply</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {admissionSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-xl flex items-center justify-center shadow-lg"
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="text-4xl font-bold text-[#990c28] opacity-20">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#990c28] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </motion.div>
                
                {/* Arrow between steps (hidden on mobile) */}
                {idx < admissionSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                  >
                    <ArrowRight className="w-8 h-8 text-[#facc15]" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-8 border-l-4 border-[#990c28]"
          >
            <div className="flex items-start gap-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
              >
                <CheckCircle className="w-8 h-8 text-[#facc15]" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-[#990c28] mb-4">Eligibility for Admission</h3>
                <p className="text-gray-700 leading-relaxed">
                  Eligibility norms for admission to the Bachelor Degree of all courses: candidates must have 
                  passed PUC I/PUC II/10+2 (Arts, Science & Commerce) or its equivalent examination from any 
                  approved board or council.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Required Documents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FileText className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#990c28]">Required Documents</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{doc}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 bg-gradient-to-r from-[#990c28]/5 to-[#facc15]/5 border-l-4 border-[#990c28] p-6 rounded-lg"
            >
              <p className="text-gray-700">
                <strong className="text-[#990c28]">Note:</strong> Students belonging to SC/ST/Cat 1 
                and others claiming reservation under any category should attach a copy of the caste certificate. 
                The complete application form should be submitted in two sets of photocopies along with original documents.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Examination Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Assessment</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Examination System</h2>
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
              className="bg-gradient-to-br from-[#990c28]/5 to-white rounded-2xl p-8 shadow-xl border-t-4 border-[#facc15]"
            >
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="w-12 h-12 text-[#990c28]" />
                <h3 className="text-2xl font-bold text-[#990c28]">Semester Examinations</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Semester Examinations are conducted at the end of October and in the second week of April, 
                along with two compulsory tests for internal assessment marks for all degree students.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>October & April</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MessageSquare className="w-4 h-4" />
                  <span>2 Internal Assessments</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#990c28]/5 to-white rounded-2xl p-8 shadow-xl border-t-4 border-[#facc15]"
            >
              <div className="flex items-center gap-4 mb-6">
                <Star className="w-12 h-12 text-[#990c28]" />
                <h3 className="text-2xl font-bold text-[#990c28]">Requirements</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#990c28] flex-shrink-0 mt-1" />
                  <span>Minimum 75% attendance required in each subject</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#990c28] flex-shrink-0 mt-1" />
                  <span>Minimum 50% marks excluding internal assessments in theory/practical</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#990c28] flex-shrink-0 mt-1" />
                  <span>Minimum 40% aggregate marks including internal assessments</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <Heart className="w-5 h-5" />
              <span>Why Choose Us</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Why Study at MES College?</h2>
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
            {benefits.map((benefit, idx) => (
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
                    className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <benefit.icon className="w-8 h-8 text-[#facc15]" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[#990c28] mb-2">{benefit.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{benefit.desc}</p>
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

              <h2 className="text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Join MES College and embark on a transformative educational experience. Applications are now open 
                for the new academic year.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/admissions" className="inline-flex items-center gap-3 bg-[#facc15] hover:bg-yellow-600 text-[#990c28] px-12 py-6 rounded-full font-bold transition-all shadow-2xl text-lg">
                    <span>Apply for Admission</span>
                    <ArrowRight className="w-6 h-6" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/contact" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
                    <span>Contact Us</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CourseRegulations;
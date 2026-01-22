import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  TrendingUp,
  CheckCircle,
  FileText,
  Clock,
  DollarSign,
  Sparkles,
  Heart,
  BookOpen,
  Target,
  Phone,
  Mail,
  Calendar,
  Info,
  Download,
  AlertCircle,
  GraduationCap,
  Home,
  Briefcase
} from 'lucide-react';
import imgScholarship from '../assets/scholar.jpg';
import ScrollToTop from '../components/ScrollToTop';

const Scholarship = () => {
  const scholarships = [
    { 
      id: 1,
      name: 'Post Metric Scholarships to SC, ST & other Backward Class Students',
      category: 'Government',
      icon: Users
    },
    { 
      id: 2,
      name: 'Scholarships to the children & dependants of service personnel and ex-service Personnel (Army, Air Force, Navy)',
      category: 'Defense',
      icon: Award
    },
    { 
      id: 3,
      name: 'Government of India Hindi Scholarships',
      category: 'Language',
      icon: BookOpen
    },
    { 
      id: 4,
      name: 'Government of India National Merit Scholarships for children of Primary & Secondary School Teachers',
      category: 'Merit',
      icon: GraduationCap
    },
    { 
      id: 5,
      name: 'Government of India National Merit Scholarships',
      category: 'Merit',
      icon: Award
    },
    { 
      id: 6,
      name: 'Govt. of India Physically Handicapped Scholarships',
      category: 'Special',
      icon: Heart
    },
    { 
      id: 7,
      name: 'Coffee Board Scholarships',
      category: 'Industry',
      icon: Briefcase
    },
    { 
      id: 8,
      name: 'Jindal Scholarships',
      category: 'Corporate',
      icon: Award
    },
    { 
      id: 9,
      name: 'Minority Scholarship and loan',
      category: 'Minority',
      icon: Users
    },
    { 
      id: 10,
      name: 'Urdu Scholarship',
      category: 'Language',
      icon: BookOpen
    },
    { 
      id: 11,
      name: 'Spices Board Scholarship',
      category: 'Industry',
      icon: Briefcase
    },
    { 
      id: 12,
      name: 'Scholarship to the children of Labour Class',
      category: 'Social',
      icon: Home
    }
  ];

  const stats = [
    { icon: Users, number: '100+', label: 'Students Benefited Annually', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Award, number: '12+', label: 'Scholarship Programs', color: 'from-[#facc15] to-yellow-600' },
    { icon: DollarSign, number: '₹10L+', label: 'Total Aid Distributed', color: 'from-[#990c28] to-[#c41537]' },
    { icon: TrendingUp, number: '100%', label: 'Support Assistance', color: 'from-[#facc15] to-yellow-600' }
  ];

  const applicationSteps = [
    { 
      step: '01', 
      title: 'Check Eligibility',
      desc: 'Review the eligibility criteria for your desired scholarship',
      icon: CheckCircle
    },
    { 
      step: '02', 
      title: 'Gather Documents',
      desc: 'Collect all required documents and certificates',
      icon: FileText
    },
    { 
      step: '03', 
      title: 'Submit Application',
      desc: 'Fill and submit the application form before deadline',
      icon: Download
    },
    { 
      step: '04', 
      title: 'Verification',
      desc: 'Wait for document verification and approval',
      icon: Clock
    }
  ];

  const documents = [
    'Income Certificate',
    'Caste Certificate (if applicable)',
    'Previous Year Mark Sheets',
    'Aadhaar Card Copy',
    'Bank Account Details',
    'Bonafide Certificate',
    'Recent Passport Size Photographs'
  ];

  const benefits = [
    { icon: DollarSign, title: 'Financial Support', desc: 'Tuition fee waiver and monthly stipends' },
    { icon: BookOpen, title: 'Educational Materials', desc: 'Free books and study materials' },
    { icon: Users, title: 'Mentorship', desc: 'Guidance from experienced mentors' },
    { icon: Award, title: 'Recognition', desc: 'Certificate of merit and achievement' }
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
              <Award className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Scholarship Programs
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
            <p className="text-xl md:text-2xl text-gray-300">Empowering Dreams Through Financial Support</p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
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

      {/* About Scholarships Section */}
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
                  src={imgScholarship}
                  alt="Scholarship" 
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
                  <Award className="w-12 h-12 text-[#facc15] mx-auto mb-2" />
                  <div className="text-2xl font-bold">12+</div>
                  <div className="text-xs">Programs</div>
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
                  <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Financial Aid</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-[#990c28] mb-6 leading-tight"
              >
                Empowering Students Through Scholarships
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
                  At MES College, we believe that financial constraints should never be a barrier to quality 
                  education. We offer comprehensive scholarship programs to support deserving students in their 
                  academic journey.
                </p>

                <p>
                  Our scholarship programs are designed to recognize academic excellence, support students from 
                  diverse backgrounds, and ensure that every eligible student receives the financial assistance 
                  they need to pursue their educational goals.
                </p>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-[#facc15]/10 to-yellow-50 border-l-4 border-[#990c28] p-6 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-[#990c28] flex-shrink-0 mt-1" />
                    <p className="font-semibold text-[#990c28]">
                      We assist students with application procedures and provide guidance throughout the 
                      scholarship process to ensure maximum benefit.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Scholarships Section */}
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
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Available Scholarships</h2>
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
            className="grid md:grid-cols-2 gap-6"
          >
            {scholarships.map((scholarship, idx) => (
              <motion.div
                key={scholarship.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-l-4 border-[#facc15] group"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                  >
                    <scholarship.icon className="w-7 h-7 text-[#facc15]" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-white bg-[#facc15] px-3 py-1 rounded-full">
                        {scholarship.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#990c28] mb-2 group-hover:text-[#b8102f] transition-colors">
                      {scholarship.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-yellow-500" />
                      <span>Available for eligible students</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process Section */}
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
              <FileText className="w-5 h-5" />
              <span>How to Apply</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Application Process</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {applicationSteps.map((step, idx) => (
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
              </motion.div>
            ))}
          </div>

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
                className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center shadow-lg"
              >
                <FileText className="w-8 h-8 text-[#facc15]" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#990c28]">Required Documents</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-[#990c28] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  <strong className="text-[#990c28]">Important:</strong> All documents should be 
                  submitted in original along with self-attested photocopies. Specific requirements 
                  may vary by scholarship program.
                </p>
              </div>
            </motion.div>
          </motion.div>
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
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Scholarship Benefits</h2>
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
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#facc15] text-center"
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

      {/* Eligibility & Application Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#990c28]/5 to-white rounded-3xl p-8 shadow-xl border-t-4 border-[#990c28]"
            >
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-12 h-12 text-[#facc15]" />
                <h3 className="text-2xl font-bold text-[#990c28]">Eligibility</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Students meeting the specific criteria of each scholarship program can apply. 
                Documentation and academic performance requirements vary by program.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-1" />
                  <span>Academic performance requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-1" />
                  <span>Category-specific criteria</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-1" />
                  <span>Income certificate requirements</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-3xl p-8 shadow-xl text-white"
            >
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-12 h-12 text-[#facc15]" />
                <h3 className="text-2xl font-bold">Application Process</h3>
              </div>
              <p className="leading-relaxed mb-4">
                Applications are accepted through the college office. Students must submit required 
                documents before the deadline for each scholarship program.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-1" />
                  <span>Visit college office for forms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-1" />
                  <span>Submit before deadline</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0 mt-1" />
                  <span>Track application status</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#facc15]/10 to-yellow-50 rounded-3xl shadow-xl p-8 md:p-12 border-l-4 border-[#990c28]"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <Info className="w-8 h-8 text-[#facc15]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-[#990c28]">Need Help?</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  For more information about eligibility criteria, application procedures, and deadlines 
                  for various scholarship programs, please contact the college office.
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-semibold">Phone</div>
                    <div className="text-[#990c28] font-bold text-lg">91-08262-233973</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-semibold">Email</div>
                    <div className="text-[#990c28] font-bold text-lg">mesmpsckm@gmail.com</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-semibold">Office Hours</div>
                    <div className="text-[#990c28] font-bold text-lg">Mon - Sat: 9 AM - 5 PM</div>
                  </div>
                </motion.div>
              </div>
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

              <h2 className="text-5xl font-bold mb-6">Apply for Scholarship Today</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Don't let financial constraints hold you back. Explore our scholarship programs and 
                take the first step towards your educational dreams.
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
                    <span>Contact Us</span>
                    <Phone className="w-6 h-6" />
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/admissions" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
                    <span>Visit Admissions</span>
                    <GraduationCap className="w-6 h-6" />
                  </a>
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
  <ScrollToTop />

    </div>
  );
};

export default Scholarship;
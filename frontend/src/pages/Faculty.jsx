import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Trophy,
  Sparkles,
  Search,
  Filter,
  Star,
  CheckCircle,
  TrendingUp,
  Brain,
  Lightbulb,
  Target,
  Heart,
  Calendar,
  Mail,
  Phone,
  Globe,
  Briefcase,
  FileText,
  Eye,
  Crown
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

import img1 from "../assets/teaching/36.jpg"
import img2 from "../assets/teaching/37.jpg"
import img3 from "../assets/teaching/38.jpg"
import img4 from "../assets/teaching/39.jpg"
import img5 from "../assets/teaching/40.jpg"
import img6 from "../assets/teaching/41.jpg"
import img7 from "../assets/teaching/42.jpg"
import img8 from "../assets/teaching/43.jpg"
import img9 from "../assets/teaching/444.jpg"
import img10 from "../assets/teaching/44.jpg"
import img11 from "../assets/teaching/45.jpg"
import img12 from "../assets/teaching/46.jpg"
import img13 from "../assets/teaching/47.jpg"
import img14 from "../assets/teaching/48.jpg"
import img15 from "../assets/teaching/49.jpg"
import img16 from "../assets/teaching/50.jpg"
import img17 from "../assets/teaching/51.jpg"
import img18 from "../assets/teaching/52.jpg"
import img19 from "../assets/teaching/53.jpg"
import img20 from "../assets/teaching/54.jpg"
import img21 from "../assets/teaching/55.jpg"
import img22 from "../assets/teaching/56.jpg"
import img23 from "../assets/teaching/57.jpg"
import img24 from "../assets/teaching/58.jpg"
import img25 from "../assets/teaching/60.jpg"
import img26 from "../assets/teaching/61.jpg"
import img27 from "../assets/teaching/62.jpg"
import img28 from "../assets/teaching/63.jpg"
import img29 from "../assets/teaching/64.jpg"
import img30 from "../assets/teaching/65.jpg"
import img31 from "../assets/teaching/66.jpg"
import img32 from "../assets/teaching/67.jpg"
import img33 from "../assets/teaching/68.jpg"
import img34 from "../assets/teaching/69.jpg"
import img35 from "../assets/teaching/70.jpg"
import img36 from "../assets/teaching/71.jpg"
import img37 from "../assets/teaching/72.jpg"
import img38 from "../assets/teaching/f38.jpg"
import img39 from "../assets/teaching/f39.jpg"
import img40 from "../assets/teaching/f40.jpg"
import img41 from "../assets/teaching/f41.jpg"
import img42 from "../assets/teaching/f42.jpg"
import img43 from "../assets/teaching/f43.jpg"
import img44 from "../assets/teaching/f44.jpg"
import img45 from "../assets/teaching/f45.jpg"
import img46 from "../assets/teaching/f46.jpg"
import img47 from "../assets/teaching/n1.jpg"

const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

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

  const facultyData = [
    { id: 1, name: 'Dr. H. Vishnuvardhana', designation: 'Principal and Asst. Professor', department: 'Administration', dateOfEntry: '19.05.2010', qualification: 'M.A., Ph.D.', image: img1 },
    { id: 2, name: 'Smt. Savithri M', designation: 'Professor and Head', department: 'Economics', dateOfEntry: '01.08.2002', qualification: 'M.A., M.Phil.', image: img2 },
    { id: 3, name: 'Smt. Haseena Banu', designation: 'Professor and Head', department: 'History', dateOfEntry: '01.08.2002', qualification: 'M.A., M.Phil.', image: img3 },
    { id: 4, name: 'Sri. Avinash G.M.', designation: 'Associate Professor and Head', department: 'Commerce', dateOfEntry: '01.02.2006', qualification: 'M.Com., M.Phil.', image: img4 },
    { id: 5, name: 'Sri. Veeranna Gowda B R', designation: 'Associate Professor and Head', department: 'Political Science', dateOfEntry: '01.07.2006', qualification: 'M.A., M.Phil.', image: img5 },
    { id: 6, name: 'Smt. Mallikarjuna K S', designation: 'Asst. Professor', department: 'Kannada', dateOfEntry: '16.07.2008', qualification: 'M.A., B.Ed.', image: img6 },
    { id: 7, name: 'Dr. Nanditha S', designation: 'Associate Professor', department: 'English', dateOfEntry: '22.07.2008', qualification: 'M.A., M.Phil., M.Ed.', image: img7 },
    { id: 8, name: 'Sri. Sadangi B.G.', designation: 'Asst. Professor', department: 'Mathematics', dateOfEntry: '01.07.2008', qualification: 'M.Sc., M.Phil.', image: img8 },
    { id: 9, name: 'Smt. Mounika Bopana P', designation: 'Asst. Professor', department: 'Statistics', dateOfEntry: '14.01.2009', qualification: 'M.A., M.B.A.', image: img9 },
    { id: 10, name: 'Dr. Pallavi Rani N', designation: 'Asst. Professor', department: 'Physics', dateOfEntry: '15.07.2010', qualification: 'M.Sc., M.Ed.', image: img10 },
    { id: 11, name: 'Dr. Madhu Soodan N.L.', designation: 'Asst. Professor', department: 'English', dateOfEntry: '19.07.2010', qualification: 'M.A., M.Phil.', image: img11 },
    { id: 12, name: 'Dr. Ravindra N', designation: 'Asst. Professor', department: 'Economics', dateOfEntry: '19.01.2011', qualification: 'M.A., M.Phil., Ph.D.', image: img12 },
    { id: 13, name: 'Sri. Manjunath', designation: 'Asst. Professor', department: 'Commerce', dateOfEntry: '09.01.2012', qualification: 'M.Com., M.Phil.', image: img13 },
    { id: 14, name: 'Sri. Channappa', designation: 'Asst. Professor', department: 'History', dateOfEntry: '16.16.2009', qualification: 'M.A., M.Phil., M.Ed.', image: img14 },
    { id: 15, name: 'Dr. Asha Lingaraj D', designation: 'Asst. Professor', department: 'English', dateOfEntry: '12.08.2011', qualification: 'M.A., M.Phil.', image: img15 },
    { id: 16, name: 'Dr. Jagadeesha K.M.', designation: 'Asst. Professor', department: 'Physics', dateOfEntry: '27.07.2011', qualification: 'M.Sc., M.Phil.', image: img16 },
    { id: 17, name: 'Sri. Saravathi Kumari P', designation: 'Asst. Professor', department: 'English', dateOfEntry: '19.08.2011', qualification: 'M.A., B.Ed.', image: img17 },
    { id: 18, name: 'Smt. Archana N', designation: 'Asst. Professor', department: 'English', dateOfEntry: '20.07.2012', qualification: 'M.A., B.Ed.', image: img18 },
    { id: 19, name: 'Smt. Asha Rao S', designation: 'Asst. Professor', department: 'Commerce', dateOfEntry: '21.07.2012', qualification: 'M.Com., M.B.A.', image: img19 },
    { id: 20, name: 'Sri. Mohan Narayana', designation: 'Asst. Professor', department: 'Commerce', dateOfEntry: '23.07.2011', qualification: 'M.Com.', image: img20 },
    { id: 21, name: 'Smt. Pramoda S S', designation: 'Asst. Professor', department: 'Economics', dateOfEntry: '24.08.2012', qualification: 'M.A., M.Com.', image: img21 },
    { id: 22, name: 'Smt. Vijayalaxmi C G', designation: 'Asst. Professor', department: 'Kannada', dateOfEntry: '25.07.2010', qualification: 'M.A., B.Ed.', image: img22 },
    { id: 23, name: 'Smt. Asha H.H.', designation: 'Asst. Professor', department: 'Political Science', dateOfEntry: '26.08.2013', qualification: 'M.A., M.Com.', image: img23 },
    { id: 24, name: 'Smt. Anupama H.K.', designation: 'Asst. Professor', department: 'Chemistry', dateOfEntry: '27.08.2014', qualification: 'M.Sc., B.Ed.', image: img24 },
    { id: 25, name: 'Dr. Suma Gowda R S', designation: 'Asst. Professor', department: 'English', dateOfEntry: '28.07.2014', qualification: 'M.A., B.Ed.', image: img25 },
    { id: 26, name: 'Smt. Geetha P M', designation: 'Asst. Professor', department: 'Commerce', dateOfEntry: '29.07.2013', qualification: 'M.A.', image: img26 },
    { id: 27, name: 'Smt. Pavithra B R', designation: 'Asst. Professor', department: 'English', dateOfEntry: '30.08.2015', qualification: 'M.Com., M.B.A., M.Ed.', image: img27 },
    { id: 28, name: 'Dr. Prasanna Kumari', designation: 'Asst. Professor', department: 'Mathematics', dateOfEntry: '31.07.2015', qualification: 'M.Sc.', image: img28 },
    { id: 29, name: 'Sri. Abdul Lathif B', designation: 'Asst. Professor', department: 'Mathematics', dateOfEntry: '01.08.2015', qualification: 'M.Sc.', image: img29 },
    { id: 30, name: 'Smt. Binayaka M', designation: 'Asst. Professor', department: 'Kannada', dateOfEntry: '02.07.2015', qualification: 'M.A., M.Com.', image: img30 },
    { id: 31, name: 'Smt. Drakshi K.K.', designation: 'Asst. Professor', department: 'Economics', dateOfEntry: '03.08.2015', qualification: 'M.A.', image: img31 },
    { id: 32, name: 'Smt. Vasundhara B N', designation: 'Asst. Professor', department: 'Botany', dateOfEntry: '04.08.2015', qualification: 'M.Sc.', image: img32 },
    { id: 33, name: 'Smt. Jyothi Kumar B N', designation: 'Asst. Professor', department: 'Sociology', dateOfEntry: '05.07.2016', qualification: 'M.A., B.Ed.', image: img33 },
    { id: 34, name: 'Smt. Savitha K.A.', designation: 'Asst. Professor', department: 'Economics', dateOfEntry: '06.08.2016', qualification: 'M.A., M.Com.', image: img34 },
    { id: 35, name: 'Sri. Anantha', designation: 'Asst. Professor', department: 'Economics', dateOfEntry: '07.08.2016', qualification: 'M.A., B.Ed.', image: img35 },
    { id: 36, name: 'Smt. Binaca S', designation: 'Asst. Professor', department: 'Chemistry', dateOfEntry: '08.07.2016', qualification: 'M.Sc., M.Com.', image: img36 },
    { id: 37, name: 'Smt. Ashwina M R', designation: 'Asst. Professor', department: 'Kannada', dateOfEntry: '09.07.2016', qualification: 'M.A., M.Com.', image: img37 },
    { id: 38, name: 'Sri. B.M.Binj H.S.', designation: 'Asst. Professor', department: 'Commerce', dateOfEntry: '10.07.2018', qualification: 'M.Com., M.B.A.', image: img38 },
    { id: 39, name: 'Smt. Nuby H.C.', designation: 'Asst. Professor', department: 'Physics', dateOfEntry: '11.07.2018', qualification: 'M.Sc., M.Com.', image: img39 },
    { id: 40, name: 'Sri. Dr. Shiva S', designation: 'Asst. Professor', department: 'English', dateOfEntry: '12.08.2018', qualification: 'M.A.', image: img40 },
    { id: 41, name: 'Smt. Sunitha P M', designation: 'Asst. Professor', department: 'English', dateOfEntry: '13.08.2018', qualification: 'M.A.', image: img41 },
    { id: 42, name: 'Smt. Puttaraju Setty', designation: 'Asst. Professor', department: 'Mathematics', dateOfEntry: '14.07.2019', qualification: 'M.A., B.Ed.', image: img42 },
    { id: 43, name: 'Smt. Kavithabai Sette', designation: 'Asst. Professor', department: 'Mathematics', dateOfEntry: '15.08.2019', qualification: 'M.A., B.Ed.', image: img43 },
    { id: 44, name: 'Smt. Suneetha N S', designation: 'Asst. Professor', department: 'English', dateOfEntry: '16.07.2019', qualification: 'M.A., B.Ed.', image: img44 },
    { id: 45, name: 'Smt. Jayanthi T', designation: 'Librarian', department: 'Library', dateOfEntry: '17.01.2019', qualification: 'M.Lib., M.Sc.', image: img45 },
    { id: 46, name: 'Sri. Manjunatha K G', designation: 'Physical Director', department: 'Sports', dateOfEntry: '18.08.2020', qualification: 'M.P.Ed.', image: img46 },
    { id: 47, name: 'Smt. Rekha M', designation: 'Asst. Professor', department: 'Computer Science', dateOfEntry: '19.07.2020', qualification: 'M.Sc., M.C.A.', image: img47 },
  ];

  const stats = [
    { icon: Users, count: '47', label: 'Qualified Faculty', color: 'from-[#990c28] to-[#c41537]' },
    { icon: GraduationCap, count: '15+', label: 'Ph.D. Holders', color: 'from-[#facc15] to-yellow-600' },
    { icon: Calendar, count: '20+', label: 'Years Experience', color: 'from-[#990c28] to-[#c41537]' },
    { icon: FileText, count: '30+', label: 'Research Papers', color: 'from-[#facc15] to-yellow-600' }
  ];

  const features = [
    { 
      icon: Brain, 
      title: 'Experienced Faculty', 
      description: 'Highly qualified teaching staff with extensive industry experience',
      color: 'from-[#990c28] to-[#c41537]'
    },
    { 
      icon: BookOpen, 
      title: 'Research Oriented', 
      description: 'Active in research publications and academic conferences',
      color: 'from-[#facc15] to-yellow-600'
    },
    { 
      icon: Target, 
      title: 'Student Mentoring', 
      description: 'Dedicated mentors guiding students throughout their journey',
      color: 'from-[#990c28] to-[#c41537]'
    }
  ];

  const departments = ['All', 'Commerce', 'English', 'Economics', 'Mathematics', 'Physics', 'Chemistry', 'Kannada', 'History', 'Political Science', 'Botany', 'Sociology', 'Statistics', 'Computer Science', 'Administration', 'Library', 'Sports'];

  const filteredFaculty = facultyData.filter(faculty => {
    const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faculty.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || faculty.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const phdCount = facultyData.filter(f => f.qualification.includes('Ph.D')).length;

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
              <GraduationCap className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Teaching Faculty
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
              Dedicated Educators Committed to Excellence
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

      {/* About Faculty Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About Our Team</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">About Our Faculty</h2>
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
            className="max-w-4xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#facc15] mb-12"
          >
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Our college takes pride in its <span className="font-bold text-[#990c28]">highly qualified and experienced teaching faculty</span>. Each faculty member 
                brings expertise in their respective fields, ensuring quality education for all students.
              </p>
              <p>
                The faculty members are excellent educators, active researchers, and dedicated mentors who guide 
                students throughout their academic journey. With <span className="font-bold text-[#990c28]">{phdCount}+ Ph.D. holders</span> and numerous research publications, 
                our team represents the pinnacle of academic excellence.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
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
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                  className="relative z-10"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <feature.icon className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
                  <p className="text-center opacity-90 leading-relaxed">
                    {feature.description}
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

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or designation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
                />
              </div>

              {/* Department Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center text-gray-600">
              Showing <span className="font-bold text-[#990c28]">{filteredFaculty.length}</span> faculty members
            </div>
          </motion.div>
        </div>
      </section>

      {/* Faculty Table Section */}
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
              <span>Our Team</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Faculty Directory</h2>
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
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#990c28] to-[#c41537] p-6">
              <h3 className="text-3xl font-bold text-center text-white">Teaching Staff Details</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-[#990c28]">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">SI NO</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Photo</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Name</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Department</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Designation</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Qualification</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Date of Entry</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFaculty.map((faculty, index) => (
                    <motion.tr
                      key={faculty.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: '#fef3c7' }}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} transition-all duration-300`}
                    >
                      <td className="px-6 py-4 border-b">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-lg flex items-center justify-center text-white font-bold">
                          {faculty.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 border-b">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-20 rounded-xl overflow-hidden border-2 border-[#facc15] shadow-lg"
                        >
                          <img 
                            src={faculty.image} 
                            alt={faculty.name} 
                            className="w-full h-full object-cover" 
                          />
                        </motion.div>
                      </td>
                      <td className="px-6 py-4 border-b">
                        <div className="font-bold text-gray-800">{faculty.name}</div>
                      </td>
                      <td className="px-6 py-4 border-b">
                        <span className="inline-block bg-[#facc15] text-[#990c28] px-3 py-1 rounded-full text-sm font-semibold">
                          {faculty.department}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b text-gray-700">{faculty.designation}</td>
                      <td className="px-6 py-4 border-b">
                        <div className="flex flex-wrap gap-1">
                          {faculty.qualification.split(',').map((qual, idx) => (
                            <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {qual.trim()}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 border-b text-gray-600">{faculty.dateOfEntry}</td>
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

              <h2 className="text-5xl font-bold mb-6">Join Our Faculty</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Be part of an exceptional team of educators dedicated to shaping the future. 
                We're always looking for passionate and qualified individuals to join our faculty.
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
                    <Mail className="w-6 h-6" />
                    <span>Get In Touch</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/admissions" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
                    <span>Learn More</span>
                    <Eye className="w-6 h-6" />
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
                  <GraduationCap className="w-5 h-5 text-[#facc15]" />
                  <span>47 Expert Faculty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#facc15]" />
                  <span>15+ Ph.D. Holders</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#facc15]" />
                  <span>Excellence in Teaching</span>
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

export default Faculty;
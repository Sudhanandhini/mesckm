import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/libstaff.jpg';
import img2 from "../assets/lib1.jpg";
import { 
  BookOpen, 
  Users, 
  Globe, 
  Wifi, 
  Printer, 
  Monitor,
  BookMarked,
  Clock,
  Shield,
  Newspaper,
  Library as LibraryIcon,
  Award,
  Target,
  Heart,
  Sparkles,
  ExternalLink,
  CheckCircle,
  Info,
  Calendar,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
  Database,
  Zap,
  Star,
  BookOpenCheck,
  FileText,
  Download
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
const Library = () => {
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

  const services = [
    { icon: BookOpen, name: 'Reference Service', color: 'from-blue-500 to-blue-600' },
    { icon: BookMarked, name: 'Lending Service', color: 'from-green-500 to-green-600' },
    { icon: Wifi, name: 'Internet & Wi-Fi', color: 'from-purple-500 to-purple-600' },
    { icon: Printer, name: 'Reprographic Service', color: 'from-orange-500 to-orange-600' },
    { icon: Monitor, name: 'Digital Library', color: 'from-red-500 to-red-600' },
    { icon: Database, name: 'E-Resources', color: 'from-indigo-500 to-indigo-600' },
    { icon: Award, name: 'Book Bank Facility', color: 'from-pink-500 to-pink-600' },
    { icon: Users, name: 'Reading Room', color: 'from-teal-500 to-teal-600' }
  ];

  const stats = [
    { icon: BookOpen, count: '15,000+', label: 'Total Books', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Newspaper, count: '50+', label: 'Journals', color: 'from-[#facc15] to-yellow-600' },
    { icon: FileText, count: '25+', label: 'Magazines', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Users, count: '150', label: 'Seating Capacity', color: 'from-[#facc15] to-yellow-600' }
  ];

  const collection = [
    { title: 'Books', count: '12,138', icon: BookOpen, color: 'from-[#990c28] to-[#c41537]' },
    { title: 'Journals', count: '48', icon: Newspaper, color: 'from-[#facc15] to-yellow-600' },
    { title: 'Magazines', count: '82', icon: FileText, color: 'from-[#990c28] to-[#c41537]' }
  ];

  const eResources = [
    { name: 'E-Paathshala', link: 'https://epgp.inflibnet.ac.in/', icon: BookOpenCheck },
    { name: 'National Digital Library of India', link: 'https://ndl.iitkgp.ac.in/', icon: LibraryIcon },
    { name: 'LibGuides', link: 'https://libguides.ukings.ca/c.php?g=735145&p=5292978', icon: BookMarked },
    { name: 'Vijay Karnataka', link: 'https://www.vijaykarnatakaepaper.com/', icon: Newspaper },
    { name: 'The Hindu', link: 'https://epaper.thehindu.com/reader', icon: Newspaper },
    { name: 'Shodhganga', link: 'https://shodhganga.inflibnet.ac.in/', icon: Database },
    { name: 'Vlib', link: 'https://vlib.org/', icon: Globe },
    { name: 'Bartleby', link: 'https://www.bartleby.com/', icon: BookOpen }
  ];

  const facilities = [
    ['1', 'Total Books', '15,000+'],
    ['2', 'Journals', '50+'],
    ['3', 'Magazines', '25+'],
    ['4', 'Newspapers', '10+'],
    ['5', 'E-Resources', 'Available'],
    ['6', 'Seating Capacity', '150'],
    ['7', 'Working Hours', '8:30 AM - 5:30 PM']
  ];

  const rules = [
    'Students may borrow books from the library every week for one day and fee free detailed for reading books to their classroom.',
    'They may borrow two books at a time.',
    'Students should not damages or scribble or mark in the books, Newspapers, maps, charts, Log tables and lab manuals belonging to the Library.',
    'If any book is damaged, the loss shall not be reflected on marks of any of the book and be collected from the students.',
    'Whispering, Universal Books, Language Books and Encyclopedias are Kept in the reference only and will not be for issue.',
    'Books must be returned through within 15 days.',
    'Students will be entitled to get two admission/Open for the experiments class.'
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
            className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#facc15] opacity-5 rounded-full blur-2xl"
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
              <LibraryIcon className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Library Facilities
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
              A Hub of Knowledge and Learning Resources
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-12 bg-[#990c28]"></div>
                <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-5xl font-bold text-[#990c28] mb-4">About the Library</h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-2 w-24 bg-gradient-to-r from-[#facc15] to-yellow-600 rounded-full mb-6"
              />
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Library was established in <span className="font-bold text-[#990c28]">1984</span>. The centralized library is going to be shifted to new building which is under 
                  location in the College campus. College Library is a hub of student's activities. Students and staff of the college are 
                  utilizing the library facilities throughout the day.
                </p>
                <p>
                  The library plays a dominant role in providing the information necessary for all the academic and research activities. 
                  The Library is always catering to the academic needs of students and the faculty.
                </p>
              </div>

              {/* Vision & Mission */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl p-6 text-white"
                >
                  <Target className="w-10 h-10 text-[#facc15] mb-3" />
                  <h3 className="text-xl font-bold mb-3">Vision</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    The Library aims to make the students learning environment to the college campus. It imparts to the physical and 
                    virtual library with international caliber of service.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl p-6 text-white"
                >
                  <Heart className="w-10 h-10 mb-3" />
                  <h3 className="text-xl font-bold mb-3">Mission</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    To provide comprehensive resources and services to the teaching and learning needs of the students and faculties.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={img2} 
                  alt="Library" 
                  className="w-full h-[500px] object-cover" 
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#990c28] via-transparent to-transparent"
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#990c28]">1984</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">What We Offer</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Library Services</h2>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${service.color} rounded-3xl p-6 text-white shadow-xl overflow-hidden group cursor-pointer`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-center">{service.name}</h3>
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

      {/* Collection Section */}
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
              <BookOpen className="w-5 h-5" />
              <span>Our Collection</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Library Collection</h2>
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
            {collection.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${item.color} rounded-3xl p-10 text-white shadow-2xl overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
                  className="relative z-10 text-center"
                >
                  <item.icon className="w-20 h-20 mx-auto mb-6" />
                  <div className="text-5xl font-bold mb-3">{item.count}</div>
                  <div className="text-xl font-semibold">{item.title}</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full opacity-10"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Table Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Details</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Library Facilities</h2>
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
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[#990c28] to-[#c41537] text-white">
                    <th className="px-6 py-4 text-left font-bold">Sl. No</th>
                    <th className="px-6 py-4 text-left font-bold">Particulars</th>
                    <th className="px-6 py-4 text-left font-bold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {facilities.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ backgroundColor: '#fef3c7' }}
                      className="border-b border-gray-200 transition-colors duration-300"
                    >
                      {row.map((cell, cidx) => (
                        <td key={cidx} className="px-6 py-4 text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-Resources Section */}
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
              <Globe className="w-5 h-5" />
              <span>Digital Access</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">E-Resources</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-600 text-lg">Access our comprehensive digital library resources</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {eResources.map((resource, idx) => (
              <motion.a
                key={idx}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.03, x: 10 }}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border-l-4 border-[#facc15] hover:border-[#990c28] transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#990c28] transition-colors">
                        {resource.name}
                      </h3>
                      <p className="text-sm text-gray-500">Click to access resource</p>
                    </div>
                  </div>
                  <ExternalLink className="w-6 h-6 text-[#990c28] group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Library Hours Section */}
      <section className="py-20 bg-gradient-to-br from-[#990c28] via-[#b8102f] to-[#990c28] text-white relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#facc15] opacity-10 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-[#facc15] rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <Clock className="w-12 h-12 text-[#990c28]" />
              </div>
            </motion.div>

            <h2 className="text-5xl font-bold mb-6">Library Hours</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-[#facc15] mx-auto rounded-full mb-8"
            />
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { day: 'Monday - Friday', time: '8:30 AM - 5:30 PM', icon: Calendar },
                { day: 'Saturday', time: '9:00 AM - 2:00 PM', icon: Clock },
                { day: 'Sunday & Holidays', time: 'Closed', icon: Info }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <item.icon className="w-10 h-10 text-[#facc15] mx-auto mb-3" />
                  <div className="text-lg font-bold mb-2">{item.day}</div>
                  <div className="text-2xl font-bold text-[#facc15]">{item.time}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Library Rules Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Guidelines</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Library Rules & Regulations</h2>
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
            className="max-w-5xl mx-auto space-y-4"
          >
            {rules.map((rule, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#facc15] flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">{rule}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Library Staff Section */}
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
              <Users className="w-5 h-5" />
              <span>Our Team</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Library Staff</h2>
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
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-96 md:h-auto">
                  <img 
                    src={img1} 
                    alt="Librarian" 
                    className="w-full h-full object-cover" 
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#990c28] via-transparent to-transparent"
                  />
                </div>

                {/* Content Side */}
                <div className="p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-[#facc15] text-[#990c28] px-4 py-2 rounded-full font-semibold text-sm mb-4">
                      <Award className="w-4 h-4" />
                      <span>Librarian</span>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-[#990c28] mb-3">Smt. Jayashri T. M.</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-semibold">M.Lib., M.Sc., M.Phil</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">+91-8262-236XXX</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="tel:+91-8262-236XXX" 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-[#990c28] to-[#c41537] hover:from-[#7a0a20] hover:to-[#990c28] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Contact Librarian</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
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

              <h2 className="text-5xl font-bold mb-6">Visit Our Library</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Explore our extensive collection of books, journals, and digital resources. 
                Our library is open to all students and faculty members.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="tel:91-08262-233973" className="inline-flex items-center gap-3 bg-[#facc15] hover:bg-yellow-600 text-[#990c28] px-12 py-6 rounded-full font-bold transition-all shadow-2xl text-lg">
                    <Phone className="w-6 h-6" />
                    <span>Call Library</span>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-12 flex items-center justify-center gap-8 text-sm"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#facc15]" />
                  <span>15,000+ Books</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#facc15]" />
                  <span>E-Resources</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#facc15]" />
                  <span>150 Seats</span>
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

export default Library;
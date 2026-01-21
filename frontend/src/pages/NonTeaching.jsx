import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Award,
  Calendar,
  Briefcase,
  Search,
  Filter,
  Sparkles,
  Mail,
  Eye,
  CheckCircle,
  Target,
  Shield,
  Wrench,
  BookOpen,
  Building,
  Heart,
  TrendingUp,
  Star
} from 'lucide-react';

import img1 from "../assets/n2.jpg"
import img2 from "../assets/n3.jpg"
import img3 from "../assets/73.jpg"
import img4 from "../assets/n4.jpg"
import img5 from "../assets/n5.jpg"
import img6 from "../assets/n6.jpg"
import img7 from "../assets/n7.jpg"
import img8 from "../assets/n8.jpg"

const NonTeaching = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const nonTeachingData = [
    {
      id: 1,
      name: 'Smt. Bhavani B.S.',
      designation: 'Superintendent',
      dateOfEntry: '01.07.1994',
      qualification: 'M.Com.',
      category: 'Administrative',
      image: img1
    },
    {
      id: 2,
      name: 'Smt. Usha Rani C.M.',
      designation: 'S.D.A.',
      dateOfEntry: '08.09.2003',
      qualification: 'M.Com.',
      category: 'Administrative',
      image: img2
    },
    {
      id: 3,
      name: 'Sri. Chandan Gowda M C',
      designation: 'S.D.A.',
      dateOfEntry: '01.12.2011',
      qualification: 'D.C.A.',
      category: 'Administrative',
      image: img3
    },
    {
      id: 4,
      name: 'Kum. Nandini P',
      designation: 'Office Asst.',
      dateOfEntry: '11.07.2016',
      qualification: 'M.Com.',
      category: 'Administrative',
      image: img4
    },
    {
      id: 5,
      name: 'Sri. Keshava Murthy H S',
      designation: 'Lab. Asst.',
      dateOfEntry: '01.07.2000',
      qualification: 'ITI',
      category: 'Laboratory',
      image: img5
    },
    {
      id: 6,
      name: 'Smt. Sowmya N V',
      designation: 'Attender',
      dateOfEntry: '20.04.2015',
      qualification: 'II PUC',
      category: 'Support',
      image: img6
    },
    {
      id: 7,
      name: 'Sri. Shekaraiah R.S.',
      designation: 'Peon',
      dateOfEntry: '15.07.1999',
      qualification: 'SSLC',
      category: 'Support',
      image: img7
    },
    {
      id: 8,
      name: 'Sri. Prakash K.B.',
      designation: 'Peon',
      dateOfEntry: '12.08.2005',
      qualification: 'SSLC',
      category: 'Support',
      image: img8
    },
  ];

  const stats = [
    { icon: Users, count: '8', label: 'Dedicated Staff', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Briefcase, count: '4', label: 'Administrative', color: 'from-[#facc15] to-yellow-600' },
    { icon: Calendar, count: '25+', label: 'Years Experience', color: 'from-[#990c28] to-[#c41537]' },
    { icon: Award, count: '100%', label: 'Commitment', color: 'from-[#facc15] to-yellow-600' }
  ];

  const features = [
    { 
      icon: Target, 
      title: 'Administrative Excellence', 
      description: 'Efficient management of college operations and student services',
      color: 'from-[#990c28] to-[#c41537]'
    },
    { 
      icon: Shield, 
      title: 'Dedicated Support', 
      description: 'Committed to maintaining a productive academic environment',
      color: 'from-[#facc15] to-yellow-600'
    },
    { 
      icon: Heart, 
      title: 'Student First', 
      description: 'Always available to assist students and faculty members',
      color: 'from-[#990c28] to-[#c41537]'
    }
  ];

  const categories = ['All', 'Administrative', 'Laboratory', 'Support'];

  const filteredStaff = nonTeachingData.filter(staff => {
    const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         staff.designation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || staff.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Exactly same as Faculty */}
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
              <Users className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Non-Teaching Staff
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
              Dedicated Professionals Supporting Academic Excellence
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
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">About Our Non-Teaching Staff</h2>
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
                Our dedicated <span className="font-bold text-[#990c28]">non-teaching staff</span> plays a crucial role in maintaining the smooth functioning 
                of the college. From administrative support to laboratory assistance, our team ensures that students and 
                faculty have all the resources they need for a productive academic environment.
              </p>
              <p>
                Their commitment to excellence and service is an integral part of our institution's success. Each member 
                brings <span className="font-bold text-[#990c28]">years of experience and dedication</span> to their role, contributing to the overall growth and 
                development of our institution.
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

      {/* Departments Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#facc15] text-[#990c28] px-6 py-2 rounded-full font-semibold mb-4"
            >
              <Sparkles className="w-5 h-5" />
              <span>Our Services</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Departments & Services</h2>
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
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl flex items-center justify-center"
                >
                  <Building className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#990c28]">Administrative Department</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Office Management',
                  'Student Records & Documentation',
                  'Admissions Support',
                  'Financial Administration',
                  'General Administration'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl flex items-center justify-center"
                >
                  <Wrench className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-[#990c28]">Support Services</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Laboratory Maintenance',
                  'Library Operations',
                  'Campus Maintenance',
                  'Security Services',
                  'Housekeeping Services'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <CheckCircle className="w-5 h-5 text-[#facc15] flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
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

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-center text-gray-600">
              Showing <span className="font-bold text-[#990c28]">{filteredStaff.length}</span> staff members
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff Table Section */}
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
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Staff Directory</h2>
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
              <h3 className="text-3xl font-bold text-center text-white">Non-Teaching Staff Details</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b-2 border-[#990c28]">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">SI NO</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Photo</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Name</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Category</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Designation</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Qualification</th>
                    <th className="px-6 py-4 text-left font-bold text-gray-700">Date of Entry</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStaff.map((staff, index) => (
                    <motion.tr
                      key={staff.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ backgroundColor: '#fef3c7' }}
                      className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} transition-all duration-300`}
                    >
                      <td className="px-6 py-4 border-b">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-lg flex items-center justify-center text-white font-bold">
                          {staff.id}
                        </div>
                      </td>
                      <td className="px-6 py-4 border-b">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-20 rounded-xl overflow-hidden border-2 border-[#facc15] shadow-lg"
                        >
                          <img 
                            src={staff.image} 
                            alt={staff.name} 
                            className="w-full h-full object-cover" 
                          />
                        </motion.div>
                      </td>
                      <td className="px-6 py-4 border-b">
                        <div className="font-bold text-gray-800">{staff.name}</div>
                      </td>
                      <td className="px-6 py-4 border-b">
                        <span className="inline-block bg-[#facc15] text-[#990c28] px-3 py-1 rounded-full text-sm font-semibold">
                          {staff.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b text-gray-700">{staff.designation}</td>
                      <td className="px-6 py-4 border-b">
                        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {staff.qualification}
                        </span>
                      </td>
                      <td className="px-6 py-4 border-b text-gray-600">{staff.dateOfEntry}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roles & Responsibilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Roles & Responsibilities</h2>
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
            {[
              {
                icon: BookOpen,
                title: 'Administrative Support',
                desc: 'Managing office operations, documentation, and student services',
                color: 'from-[#990c28] to-[#c41537]'
              },
              {
                icon: Wrench,
                title: 'Laboratory Support',
                desc: 'Maintaining lab equipment and assisting in practical sessions',
                color: 'from-[#facc15] to-yellow-600'
              },
              {
                icon: Building,
                title: 'Campus Services',
                desc: 'Ensuring clean and safe campus environment for all',
                color: 'from-[#990c28] to-[#c41537]'
              }
            ].map((role, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${role.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group`}
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
                    <role.icon className="w-10 h-10" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center">{role.title}</h3>
                  <p className="text-center opacity-90 leading-relaxed">
                    {role.desc}
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

              <h2 className="text-5xl font-bold mb-6">Join Our Team</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Be part of an exceptional support team dedicated to creating an excellent academic environment. 
                We're always looking for dedicated and skilled individuals to join our staff.
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
                  <a href="/about" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
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
                  <Users className="w-5 h-5 text-[#facc15]" />
                  <span>8 Dedicated Staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#facc15]" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#facc15]" />
                  <span>100% Commitment</span>
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

export default NonTeaching;
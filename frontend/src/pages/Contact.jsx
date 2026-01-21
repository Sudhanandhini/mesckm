import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  Building2,
  Train,
  Bus,
  Car,
  Navigation,
  Info,
  CheckCircle,
  User,
  Sparkles,
  Globe,
  Calendar,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    { 
      icon: MapPin, 
      title: 'Address',
      content: 'R.G. Road, Chikmagalur – 577 101, Karnataka',
      color: 'from-[#990c28] to-[#c41537]'
    },
    { 
      icon: Phone, 
      title: 'Phone',
      content: '91-08262-233973 / +91 9916283623',
      color: 'from-[#facc15] to-yellow-600'
    },
    { 
      icon: Mail, 
      title: 'Email',
      content: 'mesmpsckm@gmail.com',
      color: 'from-[#990c28] to-[#c41537]'
    },
    { 
      icon: Clock, 
      title: 'Office Hours',
      content: 'Mon - Sat: 9:00 AM - 5:00 PM',
      color: 'from-[#facc15] to-yellow-600'
    }
  ];

  const transportOptions = [
    {
      icon: Train,
      title: 'By Train',
      color: 'from-[#990c28] to-[#c41537]',
      routes: [
        'Route: Bangalore - Tumkur - Arsikere - Kadur',
        'Kadur: Nearest railway station (3 hours)',
        'Kadur to Chikmagalur: 45 minutes by bus/taxi',
        'Alternative: Birur station (50 minutes to Chikmagalur)'
      ]
    },
    {
      icon: Bus,
      title: 'By Bus (KSRTC)',
      color: 'from-[#facc15] to-yellow-600',
      routes: [
        'Via Bangalore - Hassan - Belur - Chikmagalur (5-5.5 hours)',
        'Via Bangalore - Arsikere - Kadur - Chikmagalur (5-5.5 hours)',
        'Regular private and government buses available'
      ]
    },
    {
      icon: Car,
      title: 'By Car',
      color: 'from-[#990c28] to-[#c41537]',
      routes: [
        'Distance from Bangalore: ~245 km',
        'Well-connected highways',
        'Scenic route through Western Ghats',
        'Parking available at campus'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What are the admission timings?',
      answer: 'Admission office is open from 9:00 AM to 5:00 PM on weekdays (Monday to Saturday).'
    },
    {
      question: 'How can I schedule a campus visit?',
      answer: 'Call us at 91-08262-233973 or email mesmpsckm@gmail.com to schedule a guided campus tour.'
    },
    {
      question: 'Is hostel accommodation available?',
      answer: 'Please contact the administration office for hostel availability and booking information.'
    },
    {
      question: 'How do I check my application status?',
      answer: 'Visit the college office with your application number or call the admission helpline.'
    }
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
              <MessageCircle className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Contact Us
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
            <p className="text-xl md:text-2xl text-gray-300">We're Here to Help - Get in Touch With Us</p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info Cards */}
      <section className="relative -mt-16 z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`relative bg-gradient-to-br ${info.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group cursor-pointer`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4"
                >
                  <info.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-lg font-bold mb-2 text-center">{info.title}</h3>
                <p className="text-sm text-center opacity-90 leading-relaxed">{info.content}</p>

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

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-0.5 w-12 bg-[#990c28]"></div>
                  <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#990c28] mb-4">Send us a Message</h2>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className="h-2 w-24 bg-gradient-to-r from-[#facc15] to-yellow-600 rounded-full mb-4"
                />
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                      Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all"
                      placeholder="Subject"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#facc15] focus:border-transparent transition-all resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#990c28] to-[#c41537] hover:from-[#7a0a20] hover:to-[#990c28] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* College Address */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-3xl p-8 text-white shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#facc15] rounded-2xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-[#990c28]" />
                  </div>
                  <h3 className="text-2xl font-bold">College Address</h3>
                </div>
                <div className="space-y-3 text-gray-100">
                  <p className="font-bold text-white">MES M.S. Padmavathamma M.K. Sambasiva Setty College For Women</p>
                  <p>R.G. Road</p>
                  <p>Chikmagalur – 577 101, Karnataka</p>
                  <div className="mt-6 space-y-3 border-t border-white/20 pt-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#facc15]" />
                      <span>91-08262-233973</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#facc15]" />
                      <span>+91 9916283623</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-[#facc15]" />
                      <span>mesmpsckm@gmail.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Management Address */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-3xl p-8 text-white shadow-xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                    <Globe className="w-8 h-8 text-[#facc15]" />
                  </div>
                  <h3 className="text-2xl font-bold">Management Address</h3>
                </div>
                <div className="space-y-3">
                  <p className="font-bold">MALNAD EDUCATION SOCIETY (REGD.)</p>
                  <p>Rathnagiri Road</p>
                  <p>Chikmagalur – 577 101, Karnataka</p>
                  <div className="mt-6 space-y-3 border-t border-white/20 pt-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>91-08262-236821</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>Fax: 91-08262-220314</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border-l-4 border-[#990c28]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-[#990c28]" />
                  <h3 className="text-xl font-bold text-[#990c28]">Office Hours</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-semibold">Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-semibold">Sunday</span>
                    <span className="text-red-600">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Reach Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Travel Guide</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">How to Reach Chikmagalur</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-600 text-lg">From Bangalore (State Capital)</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {transportOptions.map((option, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative bg-gradient-to-br ${option.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <option.icon className="w-16 h-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-center">{option.title}</h3>
                  <ul className="space-y-3">
                    {option.routes.map((route, ridx) => (
                      <li key={ridx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{route}</span>
                      </li>
                    ))}
                  </ul>
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

      {/* FAQs Section */}
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
              <HelpCircle className="w-5 h-5" />
              <span>FAQs</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Frequently Asked Questions</h2>
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
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border-l-4 border-[#facc15]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-[#facc15]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#990c28] mb-2">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

   
      {/* Map Section */}
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
        <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Location</span>
        <div className="h-0.5 w-16 bg-[#990c28]"></div>
      </div>

      <h2 className="text-5xl font-bold text-[#990c28] mb-4">Find Us on Map</h2>

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
      {/* Replace previous placeholder with iframe */}
      <div className="relative h-[500px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9254.045678924918!2d77.56601924446397!3d12.977334749354013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16052b7ceb8b%3A0xf9db1b29f78b9f96!2sMajestic%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1768990081535!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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

              <h2 className="text-5xl font-bold mb-6">Ready to Visit Us?</h2>
              
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-200">
                Schedule a campus tour or reach out to our admissions team for personalized guidance 
                on your educational journey.
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
                    <span>Call Now</span>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <a href="/admissions" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold transition-all border-2 border-white/30">
                    <span>Visit Admissions</span>
                    <ArrowRight className="w-6 h-6" />
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
                  <Clock className="w-5 h-5 text-[#facc15]" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#facc15]" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#facc15]" />
                  <span>24/7 Support</span>
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
    </div>
  );
};

export default Contact;
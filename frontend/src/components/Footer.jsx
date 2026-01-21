import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Heart,
  Sparkles
} from 'lucide-react';

const Footer = () => {
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

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
    { icon: Linkedin, href: '#', color: 'hover:bg-blue-700' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' }
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Company' },
    { to: '/donor', label: 'Donor' },
    { to: '/course-regulations', label: 'Course Regulations' },
    { to: '/faculty', label: 'Faculty' },
    { to: '/non-teaching', label: 'Non-Teaching' },
    { to: '/nss', label: 'NSS' },
    { to: '/scholarship', label: 'Scholarship' }
  ];

  const services = [
    { to: '/facilities', label: 'Facilities' },
    { to: '/library', label: 'Library' },
    { to: '/laboratories', label: 'Laboratories' },
    { to: '/arts', label: 'Arts Forum' },
    { to: '/commerce', label: 'Commerce Forum' },
    { to: '/science', label: 'Science Forum' },
    { to: '/rank-holders', label: 'Rank Holders' },
    { to: '/yoga-wellness', label: 'Yoga Wellness Centre' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#990c28] via-[#990c28] to-[#990c28] text-white mt-auto overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#facc15] rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* College Info */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 bg-[#facc15] rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#990c28]" />
              </div>
            </motion.div>
            
            <h3 className="text-xl font-bold mb-4 text-[#facc15]">
              Malnad Education Society (R)
            </h3>
            <p className="text-sm mb-4 leading-relaxed text-gray-300">
              MES M.S. Padmavathamma M.K. Sambasiva Setty College For Women, Chikmagalur - 01
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 border border-white/20`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-[#facc15] flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    to={link.to} 
                    className="group flex items-center gap-2 text-gray-300 hover:text-[#facc15] transition-all duration-300"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#facc15] group-hover:w-4 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-[#facc15] flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.map((service, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link 
                    to={service.to} 
                    className="group flex items-center gap-2 text-gray-300 hover:text-[#facc15] transition-all duration-300"
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-[#facc15] group-hover:w-4 transition-all duration-300"
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {service.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4 text-[#facc15] flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 bg-[#facc15]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <MapPin className="w-4 h-4 text-[#facc15]" />
                </motion.div>
                <span>R.G. Road, Chikmagalur - 577 101, Karnataka, India</span>
              </motion.li>
              
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 bg-[#facc15]/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Phone className="w-4 h-4 text-[#facc15]" />
                </motion.div>
                <a href="tel:+918262236212" className="hover:text-[#facc15] transition-colors">
                  +91-8262-236212
                </a>
              </motion.li>
              
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-8 h-8 bg-[#facc15]/20 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <Mail className="w-4 h-4 text-[#facc15]" />
                </motion.div>
                <a href="mailto:hello@mesckm.edu.in" className="hover:text-[#facc15] transition-colors">
                  hello@mesckm.edu.in
                </a>
              </motion.li>
            </ul>

            {/* Newsletter Box */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            >
              <p className="text-xs text-gray-300 mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#facc15]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#facc15] text-[#990c28] rounded-lg font-semibold text-sm hover:bg-yellow-500 transition-colors"
                >
                  →
                </motion.button>
              </div>
            </motion.div> */}
          </motion.div>
        </motion.div>

        {/* Bottom Copyright Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative border-t border-[#facc15]/30 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-300 flex items-center gap-2"
            >
              <span>© Malnad Education Society 2026</span>
              <span className="text-[#facc15]">|</span>
              <span>All Rights Reserved</span>
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gray-300 flex items-center gap-2"
            >
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              <span>by</span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-[#facc15] font-semibold"
              >
                Sunsys Technologies
              </motion.span>
            </motion.p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute -top-6 right-4 w-12 h-12 bg-[#facc15] text-[#990c28] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[#facc15]/50 transition-all duration-300"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#facc15] to-transparent"
        />
      </div>
    </footer>
  );
};

export default Footer;
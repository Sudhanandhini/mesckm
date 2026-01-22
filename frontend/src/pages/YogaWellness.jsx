import React from 'react';
import { motion } from 'framer-motion';
import imgYoga1 from '../assets/yoga1.jpg';
import imgYoga2 from '../assets/yoga2.jpg';
import imgYoga3 from '../assets/yoga3.jpg';
import imgYoga4 from '../assets/yoga4.jpg';
import imgYoga5 from '../assets/yoga5.jpg';
import imgYoga6 from '../assets/yoga6.jpg';
import { 
  Heart, 
  Brain, 
  Activity, 
  Users, 
  Award, 
  Calendar,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  CheckCircle,
  Sun,
  Moon,
  Target,
  Zap,
  TrendingUp,
  Smile,
  Eye,
  Wind,
  Flower2,
  Leaf
} from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';

const YogaWellness = () => {
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

  const physicalBenefits = [
    { icon: Activity, text: 'Improves flexibility and strength' },
    { icon: Heart, text: 'Enhances cardiovascular health' },
    { icon: Zap, text: 'Boosts immunity' },
    { icon: TrendingUp, text: 'Improves posture and balance' }
  ];

  const mentalBenefits = [
    { icon: Brain, text: 'Reduces stress and anxiety' },
    { icon: Eye, text: 'Improves concentration and focus' },
    { icon: Smile, text: 'Promotes emotional well-being' },
    { icon: Target, text: 'Enhances self-awareness' }
  ];

  const programs = [
    {
      icon: Sun,
      title: 'Regular Classes',
      description: 'Daily yoga sessions for students and community members focusing on various asanas and pranayama.',
      timing: 'Morning & Evening Batches',
      color: 'from-[#990c28] to-[#c41537]'
    },
    {
      icon: Award,
      title: 'Special Workshops',
      description: 'Periodic workshops on specific yoga techniques, meditation, and stress management.',
      timing: 'Weekend Programs',
      color: 'from-[#facc15] to-yellow-600'
    },
    {
      icon: Users,
      title: 'Certification Courses',
      description: 'Professional yoga training programs leading to certification from MDNIY, New Delhi.',
      timing: '3-6 Month Courses',
      color: 'from-[#990c28] to-[#c41537]'
    }
  ];

  const images = [
    { src: imgYoga1, alt: 'Yoga Activity 1' },
    { src: imgYoga2, alt: 'Yoga Activity 2' },
    { src: imgYoga3, alt: 'Yoga Activity 3' },
    { src: imgYoga4, alt: 'Yoga Activity 4' },
    { src: imgYoga5, alt: 'Yoga Activity 5' },
    { src: imgYoga6, alt: 'Yoga Activity 6' }
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
            className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 opacity-10 rounded-full blur-3xl"
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
              <Flower2 className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-[#facc15] to-white bg-clip-text text-transparent">
              Yoga & Wellness Centre
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
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Swami Vivekananda District Yoga Wellness Centre
            </p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg text-gray-400"
            >
              A unit of Morarji Desai National Institute of Yoga, New Delhi
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative -mt-16 z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border-l-4 border-[#facc15]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-0.5 w-12 bg-[#990c28]"></div>
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">About Us</span>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                <strong className="text-[#990c28]">Malnad Education Society (R.)</strong> apart from fulfilling its primary responsibility of 
                educating the students who come from remote parts of Chikmagalur district and giving the best so as to 
                compete with growing standards is even having its vision of rendering services for the benefit of the 
                public and overall development of the students. Keeping this in mind is <strong className="text-[#990c28]">Swami Vivekananda District 
                Yoga wellness centre, a unit of Morarji Desai National Institute of Yoga Delhi, New Delhi</strong> (Under 
                public private partnership) is running successfully under the guidance of the Malnad Education Society (R.) 
                since 2013 and is having 2 well trained staff members who are performing their best by conducting yoga 
                related activities routinely which has become a matter of appreciation by the public. With the growing 
                demands in the stream of yoga, we are happy to admit that day after day the unit is becoming successful 
                in creating awareness and instill a spirit of learning thereby reaching great heights and is the only unit 
                in the district about which we are proud of.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="flex items-center gap-4 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl p-4 text-white">
                <Calendar className="w-10 h-10 text-[#facc15]" />
                <div>
                  <div className="text-3xl font-bold">2013</div>
                  <div className="text-sm opacity-90">Established</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-2xl p-4 text-white">
                <Users className="w-10 h-10" />
                <div>
                  <div className="text-3xl font-bold">2</div>
                  <div className="text-sm opacity-90">Trained Staff</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-2xl p-4 text-white">
                <Award className="w-10 h-10" />
                <div>
                  <div className="text-3xl font-bold">#1</div>
                  <div className="text-sm opacity-90">In District</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits of Yoga Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Why Yoga</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Benefits of Yoga</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-gradient-to-r from-[#facc15] to-yellow-600 mx-auto rounded-full mb-4"
            />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience holistic wellness through the ancient practice of yoga
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Physical Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#990c28] to-[#c41537] rounded-3xl p-8 text-white shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-[#facc15] rounded-2xl flex items-center justify-center"
                  >
                    <Heart className="w-8 h-8 text-[#990c28]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold">Physical Benefits</h3>
                </div>

                <div className="space-y-4">
                  {physicalBenefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                    >
                      <benefit.icon className="w-6 h-6 text-[#facc15] flex-shrink-0" />
                      <span className="text-lg">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#facc15] rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Mental Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#facc15] to-yellow-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{ rotate: [0, -360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center"
                  >
                    <Brain className="w-8 h-8 text-[#facc15]" />
                  </motion.div>
                  <h3 className="text-3xl font-bold">Mental Benefits</h3>
                </div>

                <div className="space-y-4">
                  {mentalBenefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm"
                    >
                      <benefit.icon className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Offered Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Our Programs</span>
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

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative bg-gradient-to-br ${program.color} rounded-3xl p-8 text-white shadow-2xl overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
                  className="relative z-10"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6"
                  >
                    <program.icon className="w-10 h-10" />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold mb-4 text-center">{program.title}</h4>
                  <p className="text-sm mb-6 leading-relaxed opacity-90">
                    {program.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 bg-white/20 rounded-xl px-4 py-3">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">{program.timing}</span>
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

      {/* Image Gallery Section */}
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
              <Leaf className="w-5 h-5" />
              <span>Our Activities</span>
            </motion.div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Yoga in Action</h2>
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {images.map((image, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#990c28] via-transparent to-transparent flex items-end p-6"
                >
                  <div className="text-white">
                    <div className="text-lg font-bold">{image.alt}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* International Yoga Day Section */}
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
            className="text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-[#facc15] rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <Sun className="w-12 h-12 text-[#990c28]" />
              </div>
            </motion.div>

            <h2 className="text-5xl font-bold mb-6">International Yoga Day</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="h-2 w-32 bg-[#facc15] mx-auto rounded-full mb-8"
            />
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl leading-relaxed text-gray-200 mb-8">
                Every year on <span className="text-[#facc15] font-bold">June 21st</span>, our yoga wellness centre actively participates in International Yoga Day 
                celebrations. We organize mass yoga sessions, awareness programs, and demonstrations to promote the 
                ancient science of yoga and its benefits for holistic health and well-being.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  { icon: Users, text: 'Mass Yoga Sessions' },
                  { icon: Wind, text: 'Awareness Programs' },
                  { icon: Sparkles, text: 'Live Demonstrations' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <item.icon className="w-10 h-10 text-[#facc15] mx-auto mb-3" />
                    <div className="font-semibold">{item.text}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
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
              <span className="text-[#990c28] font-bold text-sm uppercase tracking-wider">Get Started</span>
              <div className="h-0.5 w-16 bg-[#990c28]"></div>
            </div>
            <h2 className="text-5xl font-bold text-[#990c28] mb-4">Join Our Yoga Programs</h2>
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
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Left Side */}
                <div className="bg-gradient-to-br from-[#990c28] to-[#c41537] p-10 text-white">
                  <h3 className="text-3xl font-bold mb-6">Contact Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#facc15] rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#990c28]" />
                      </div>
                      <div>
                        <div className="font-bold mb-1">Address</div>
                        <div className="text-sm opacity-90">
                          Swami Vivekananda District Yoga Wellness Centre<br />
                          MES M.S. Padmavathamma M.K. Sambasiva Setty College For Women<br />
                          Chikmagalur
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#facc15] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#990c28]" />
                      </div>
                      <div>
                        <div className="font-bold mb-1">Phone</div>
                        <div className="text-sm opacity-90">91-08262-233973</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#facc15] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-[#990c28]" />
                      </div>
                      <div>
                        <div className="font-bold mb-1">Timing</div>
                        <div className="text-sm opacity-90">
                          Morning & Evening Batches<br />
                          Mon - Sat
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-[#990c28] mb-6">Enrollment Information</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    For enrollment and more information about our yoga wellness programs, please contact the yoga centre 
                    at the college premises. Our trained staff will guide you through the registration process and help 
                    you choose the right program for your needs.
                  </p>

                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 bg-[#990c28]/5 rounded-xl p-4"
                    >
                      <CheckCircle className="w-6 h-6 text-[#990c28]" />
                      <span className="text-gray-700">Free Trial Session Available</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 bg-[#990c28]/5 rounded-xl p-4"
                    >
                      <CheckCircle className="w-6 h-6 text-[#990c28]" />
                      <span className="text-gray-700">Flexible Batch Timings</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 bg-[#990c28]/5 rounded-xl p-4"
                    >
                      <CheckCircle className="w-6 h-6 text-[#990c28]" />
                      <span className="text-gray-700">Certified Instructors</span>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8"
                  >
                    <a 
                      href="tel:91-08262-233973" 
                      className="block w-full bg-gradient-to-r from-[#990c28] to-[#c41537] hover:from-[#7a0a20] hover:to-[#990c28] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" />
                        <span>Call Now to Enroll</span>
                      </div>
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
        <ScrollToTop />
    </div>
  );
};

export default YogaWellness;
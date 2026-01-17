import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
      `}</style>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/50 text-white h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-pulse"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
              Empowering Women Through Quality Education Since 1984
            </h1>
            <p className="text-xl mb-8 text-gray-100 animate-fadeInUp delay-200">
              MES M.S. Padmavathamma M.K. Sambasiva Setty College For Women - Chikmagalur
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp delay-300">
              <Link 
                to="/admissions" 
                className="bg-gold text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                Apply Now
              </Link>
              <Link 
                to="/about" 
                className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 shadow-lg"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 animate-float">
          <div className="text-[300px]">🎓</div>
        </div>
      </div>

      

      {/* Find Your Program Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group animate-fadeInLeft">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600" 
                  alt="Students" 
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-primary p-6 rounded-xl shadow-xl animate-pulse">
                <div className="text-3xl font-bold">NAAC</div>
                <div className="text-sm">Accredited</div>
              </div>
            </div>
            <div className="space-y-6 animate-fadeInRight">
              <h2 className="text-4xl font-bold text-primary mb-4">Find Your Program</h2>
              <p className="text-gray-700 leading-relaxed">
                We offer comprehensive undergraduate and postgraduate programs in Arts, Commerce, Science, and Management. 
                Our curriculum is designed to meet industry standards and prepare students for successful careers.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Arts', 'Commerce', 'Science', 'Management'].map((program, index) => (
                  <div 
                    key={index}
                    className={`bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-scaleIn delay-${(index + 1) * 100}`}
                  >
                    <div className="text-2xl mb-2">📖</div>
                    <div className="font-semibold text-primary">{program}</div>
                  </div>
                ))}
              </div>
              <Link 
                to="/course-regulations" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:scale-110 transition-all duration-300"
              >
                View All Programs →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '40+', label: 'Years of Excellence', icon: '🎓' },
              { number: '2000+', label: 'Students Enrolled', icon: '👩‍🎓' },
              { number: '100%', label: 'Academic Achievement', icon: '📚' },
              { number: '50+', label: 'Experienced Faculty', icon: '👨‍🏫' }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center animate-scaleIn delay-${(index + 1) * 100}`}
              >
                <div className="text-5xl mb-4 animate-bounce">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeInLeft">
              <h2 className="text-4xl font-bold text-primary mb-4">About The College</h2>
              <p className="text-gray-700 leading-relaxed">
                MES M.S. Padmavathamma M. K. Sambasiva Setty First Grade College For Women, a pioneer institution of 
                Chikmagalur, came into existence in 1984 with a noble intention of catering to the needs of women in 
                the field of education.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A bond of dedicated teachers along with a supportive management have consistently shaped and honed the 
                personality of students. We take pride in our 100% academic achievement and university rank holders.
              </p>
              <div className="flex gap-4">
                <div className="flex-1 bg-primary text-white p-4 rounded-lg text-center hover:scale-110 transition-all duration-300 animate-scaleIn delay-200">
                  <div className="text-2xl font-bold">1984</div>
                  <div className="text-sm">Established</div>
                </div>
                <div className="flex-1 bg-gold text-primary p-4 rounded-lg text-center hover:scale-110 transition-all duration-300 animate-scaleIn delay-300">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Results</div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:scale-110 transition-all duration-300"
              >
                Read More About Us →
              </Link>
            </div>
            <div className="relative group animate-fadeInRight">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600" 
                  alt="About College" 
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admissions Banner */}
      <div className="bg-gradient-to-r from-primary to-primary py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl animate-spin" style={{animationDuration: '20s'}}>⭐</div>
          <div className="absolute bottom-10 right-10 text-9xl animate-spin" style={{animationDuration: '15s'}}>✨</div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fadeInUp">
            Admissions Open for 2024-25
          </h2>
          <p className="text-xl text-gray-100 mb-8 animate-fadeInUp delay-200">
            Graduate and Post Graduate courses - Apply now for the upcoming academic year
          </p>
          <Link 
            to="/admissions" 
            className="inline-block bg-gold text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-300 shadow-xl animate-fadeInUp delay-300"
          >
            Online Admission Application →
          </Link>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12 animate-fadeInUp">Our Facilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Modern Library', desc: 'Extensive collection of books and digital resources', icon: '📚', link: '/facilities/library' },
              { title: 'Well-Equipped Labs', desc: 'State-of-the-art laboratories for practical learning', icon: '🔬', link: '/facilities/laboratories' },
              { title: 'Sports Complex', desc: 'Indoor and outdoor sports facilities', icon: '⚽', link: '/facilities' },
              { title: 'Computer Lab', desc: 'Latest technology and software', icon: '💻', link: '/facilities' },
              { title: 'Auditorium', desc: 'Modern auditorium for events and seminars', icon: '🎭', link: '/facilities' },
              { title: 'Yoga Wellness', desc: 'Dedicated yoga and wellness center', icon: '🧘', link: '/yoga-wellness' }
            ].map((facility, index) => (
              <Link
                key={index}
                to={facility.link}
                className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group animate-scaleIn delay-${(index + 1) * 100}`}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{facility.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Campus Life Section */}
      {/* <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12 animate-fadeInUp">Campus Life</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group h-[300px] animate-fadeInLeft">
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" 
                alt="Campus" 
                className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Student Activities</h3>
                <p>Diverse clubs and cultural programs</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl group h-[300px] animate-fadeInRight">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800" 
                alt="Events" 
                className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">NSS & Social Service</h3>
                <p>Community engagement and development</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

     

      {/* Important Documents */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-primary text-center mb-12 animate-fadeInUp">Important Documents</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'NAAC Accreditation Certificate',
                'SSR Report Documents',
                'Annual Quality Assurance Report (AQAR) 2023-24',
                'Annual Quality Assurance Report (AQAR) 2022-23',
                'Course Regulations & Syllabus',
                'Academic Calendar 2024-25'
              ].map((doc, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 hover:rotate-1 transition-all duration-300 flex items-center space-x-4 group animate-fadeInUp delay-${(index + 1) * 100}`}
                >
                  <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">📄</div>
                  <div className="flex-1">
                    <div className="font-semibold text-primary group-hover:text-secondary transition-colors">
                      {doc}
                    </div>
                    <div className="text-sm text-gray-500">Click to view →</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-8 bg-gold/20 border-2 border-gold rounded-xl p-6 max-w-2xl mx-auto animate-pulse">
              <p className="text-xl font-bold text-primary">
                NAAC Track ID: <span className="text-secondary">KACOGN21787</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 text-9xl animate-bounce">🎓</div>
            <div className="absolute bottom-10 right-10 text-9xl animate-bounce" style={{animationDelay: '0.5s'}}>📚</div>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-black mb-6 animate-fadeInUp">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto animate-fadeInUp delay-200">
            Join thousands of successful women who have built their careers with us
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fadeInUp delay-300">
            <Link 
              to="/contact" 
              className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              to="/admissions" 
              className="bg-gold text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-300 shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
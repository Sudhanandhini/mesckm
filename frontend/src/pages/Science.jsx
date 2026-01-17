import React from 'react';

const Science = () => {
  return (
    <div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideIn { animation: slideIn 0.6s ease-out; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
      `}</style>

      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">GALAXY Science Forum</h1>
          <p className="text-xl animate-fadeIn delay-1">A Cluster of Stars - Nurturing Scientific Minds</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* About Galaxy */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-primary mb-4">About GALAXY Science Forum</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>GALAXY</strong> is the name of Science forum of our college. The Greek word <em>GALAXY</em> means a cluster of stars. 
            To exhibit the talent of science students, we started the science forum in our college in the year 2008.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Through this forum, students can conduct science quiz, seminars, workshops, science exhibitions, article exhibitions, etc. 
            It helps students to learn the subjects more practically.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through this forum we will celebrate National Science Day every year. So in all the aspects it helps in the growth of science students.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Science Exhibitions', icon: '🔬', desc: 'Annual exhibitions showcasing student projects and innovations' },
            { title: 'Seminars & Workshops', icon: '📊', desc: 'Expert talks and hands-on learning sessions' },
            { title: 'Science Quiz', icon: '🧪', desc: 'Competitive quizzes to test scientific knowledge' },
            { title: 'Model Making', icon: '🏗️', desc: 'Creative scientific models and demonstrations' },
            { title: 'National Science Day', icon: '🎓', desc: 'Special celebrations and events every year' },
            { title: 'Research Activities', icon: '📚', desc: 'Student research projects and paper presentations' }
          ].map((activity, i) => (
            <div key={i} className={`bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fadeIn delay-${(i % 3) + 1}`}>
              <div className="text-5xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{activity.title}</h3>
              <p className="text-gray-600">{activity.desc}</p>
            </div>
          ))}
        </div>

        {/* Seminar Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 animate-slideIn">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
            <h2 className="text-3xl font-bold text-center">SEMINARS & WORKSHOPS</h2>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600" alt="Seminar" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" alt="Workshop" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Regular seminars and workshops are conducted by inviting eminent scientists, professors, and industry experts. 
              These sessions provide students with exposure to latest developments in science and technology, fostering 
              innovation and research mindset among students.
            </p>
          </div>
        </div>

        {/* Science Exhibition Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 mb-12 animate-fadeIn delay-2">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">SCIENCE EXHIBITIONS</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400" alt="Exhibition 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400" alt="Exhibition 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400" alt="Exhibition 3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-700 leading-relaxed mb-4">
              On the eve of Science day celebration, Galaxy Science forum organizes Science model exhibition annually. 
              The event is inaugurated by distinguished guests including joint secretaries from Malnad Education Society.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Around thirty innovative models are exhibited by students showcasing their creativity and scientific knowledge. 
              The exhibition provides a platform for students to present their research and practical work.
            </p>
          </div>
        </div>

        {/* Guest Lectures */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-slideIn delay-1">
          <h2 className="text-3xl font-bold text-primary mb-6">Expert Guest Lectures</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6 hover:bg-primary/5 p-4 rounded transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-2">Laser Science and Technology</h3>
              <p className="text-gray-700 mb-2">
                <strong>Speaker:</strong> Dr. H I Bhat, Professor, Department of Physics, Indian Institute of Science
              </p>
              <p className="text-gray-600 text-sm">Date: 22.02.2016</p>
            </div>
            <div className="border-l-4 border-secondary pl-6 hover:bg-secondary/5 p-4 rounded transition-all duration-300">
              <h3 className="text-xl font-bold text-primary mb-2">Advanced Research in Physics</h3>
              <p className="text-gray-700 mb-2">
                <strong>Speaker:</strong> Distinguished Scientists and Researchers
              </p>
              <p className="text-gray-600 text-sm">Regular sessions throughout the year</p>
            </div>
          </div>
        </div>

        {/* National Science Day */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 shadow-lg animate-fadeIn">
            <h2 className="text-3xl font-bold mb-4">National Science Day</h2>
            <p className="mb-4">
              We celebrate National Science Day every year on February 28th to commemorate the discovery of the Raman Effect 
              by Sir C.V. Raman.
            </p>
            <ul className="space-y-2">
              {['Science Quiz Competitions', 'Model Exhibitions', 'Poster Presentations', 'Guest Lectures', 'Prize Distribution'].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg animate-fadeIn delay-1">
            <h2 className="text-3xl font-bold text-primary mb-4">Student Benefits</h2>
            <ul className="space-y-3">
              {[
                'Practical knowledge enhancement',
                'Research and innovation skills',
                'Scientific temperament development',
                'Presentation and communication skills',
                'Networking with experts',
                'Career guidance in science fields'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-700 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gold text-xl">★</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn delay-2">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { count: '15+', label: 'Years Active', icon: '📅' },
              { count: '50+', label: 'Exhibitions', icon: '🏆' },
              { count: '100+', label: 'Seminars', icon: '🎤' },
              { count: '1000+', label: 'Participants', icon: '👥' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.count}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
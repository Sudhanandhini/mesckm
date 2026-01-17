import React from 'react';

const Arts = () => {
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
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .animate-slideIn { animation: slideIn 0.6s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
      `}</style>

      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Kalaspoothyi, Heritage & History Clubs</h1>
          <p className="text-xl animate-fadeIn delay-1">Encouragement is as refreshing as a cold drink on a hot summer day</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Intro */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-primary mb-6">About Our Arts Clubs</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At M.E.S. College we have these three clubs especially for Arts students. <strong>Kalaspoothyi</strong> is aimed to 
              develop Positive attitude, Confidence & Courage among the students. The club provides a platform to the 
              students to express their hidden talents & skills.
            </p>
            <p>
              <strong>Heritage & History Clubs</strong> are advised to take up activities relating to Social activities. The objective 
              of these two clubs is to create social awareness about Indian heritage & importance of historical monuments. 
              Hence the clubs organized guest lectures, visit to historical places, exhibitions & various competitions, 
              students have participated in all the activities enthusiastically.
            </p>
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: 'Kalaspoothyi Club',
              icon: '🎭',
              desc: 'Develops positive attitude, confidence, and courage through cultural activities',
              color: 'from-primary to-secondary',
              activities: ['Cultural Programs', 'Talent Shows', 'Drama & Dance', 'Music Events']
            },
            {
              title: 'Heritage Club',
              icon: '🏛️',
              desc: 'Creates awareness about Indian heritage and cultural values',
              color: 'from-secondary to-primary',
              activities: ['Heritage Visits', 'Cultural Exhibitions', 'Guest Lectures', 'Awareness Programs']
            },
            {
              title: 'History Club',
              icon: '📜',
              desc: 'Organizes visits to historical monuments and exhibitions',
              color: 'from-primary to-gold',
              activities: ['Historical Tours', 'Research Projects', 'Competitions', 'Documentaries']
            }
          ].map((club, i) => (
            <div key={i} className={`bg-gradient-to-br ${club.color} text-white rounded-lg shadow-lg p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-scaleIn delay-${i + 1}`}>
              <div className="text-5xl mb-4">{club.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{club.title}</h3>
              <p className="mb-4 text-sm">{club.desc}</p>
              <ul className="space-y-2">
                {club.activities.map((activity, j) => (
                  <li key={j} className="flex items-center space-x-2 text-sm">
                    <span>✓</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Activities Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-slideIn">
            <div className="h-64 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600" alt="Cultural Event" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Cultural Activities</h3>
              <p className="text-gray-700 leading-relaxed">
                Students actively participate in various cultural programs including drama, dance, music, and art exhibitions. 
                These activities help develop confidence and showcase their talents.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-slideIn delay-1">
            <div className="h-64 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=600" alt="Historical Visit" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-3">Heritage Visits</h3>
              <p className="text-gray-700 leading-relaxed">
                Regular visits to historical monuments, temples, and heritage sites help students understand and appreciate 
                our rich cultural heritage and historical significance.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { count: '50+', label: 'Cultural Events', icon: '🎪' },
            { count: '30+', label: 'Heritage Visits', icon: '🏰' },
            { count: '20+', label: 'Guest Lectures', icon: '🎤' },
            { count: '500+', label: 'Active Members', icon: '👥' }
          ].map((stat, i) => (
            <div key={i} className={`bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg p-6 text-center hover:scale-105 hover:shadow-lg transition-all duration-300 animate-scaleIn delay-${i + 1}`}>
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.count}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key Activities */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-8 mb-12 animate-fadeIn delay-2">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Key Activities & Programs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-4">Cultural Programs</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Annual cultural fest celebrations',
                  'Inter-college competitions',
                  'Traditional dance and music performances',
                  'Drama and theater productions',
                  'Art and craft exhibitions'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gold">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-secondary mb-4">Educational Tours</h3>
              <ul className="space-y-2 text-gray-700">
                {[
                  'Visits to historical monuments',
                  'Museum and gallery tours',
                  'Archaeological site explorations',
                  'Heritage walk programs',
                  'Documentation projects'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gold">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fadeIn">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Activities Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400',
              'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
              'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
              'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
              'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400'
            ].map((img, i) => (
              <div key={i} className="h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <img src={img} alt={`Activity ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 animate-slideIn">
            <h3 className="text-2xl font-bold text-primary mb-4">Student Benefits</h3>
            <ul className="space-y-3">
              {[
                'Development of confidence and self-expression',
                'Enhanced cultural awareness and appreciation',
                'Leadership and teamwork skills',
                'Creative thinking and innovation',
                'Social responsibility and community engagement',
                'Historical knowledge and research skills'
              ].map((benefit, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-700 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gold text-xl">✓</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-8 shadow-lg animate-slideIn delay-1">
            <h3 className="text-2xl font-bold mb-4">Join Our Clubs</h3>
            <p className="mb-6">
              Become part of our vibrant arts community. Explore your talents, learn about our rich heritage, 
              and participate in exciting cultural activities throughout the year.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📝</span>
                <span>Open to all Arts students</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎯</span>
                <span>Regular meetings and activities</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <span>Certificates and recognition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn delay-3">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Best Cultural Club Award', year: '2023', icon: '🏆' },
              { title: 'Heritage Conservation Project', year: '2022', icon: '🏛️' },
              { title: 'Inter-College Competition Winners', year: '2024', icon: '🥇' }
            ].map((achievement, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-bold text-primary mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arts;
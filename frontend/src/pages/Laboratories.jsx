import React from 'react';

const Laboratories = () => {
  return (
    <div>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slideUp { animation: slideUp 0.6s ease-out; }
        .animate-slideLeft { animation: slideLeft 0.6s ease-out; }
        .animate-slideRight { animation: slideRight 0.6s ease-out; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
      `}</style>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slideUp">Laboratory Facilities</h1>
          <p className="text-xl animate-slideUp delay-1">State-of-the-art laboratories for hands-on learning</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12 animate-slideUp">
          <h2 className="text-3xl font-bold text-primary mb-4">Our Laboratories</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We have well-equipped individual laboratories for Physics, Chemistry, Biology, and Computer Science. 
            Practical classes are conducted regularly. The laboratories are enriched every year with modern equipment. 
            Experiments are performed by the students individually.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Series of lecturing will be held throughout the academic year by the best orators in various fields.
          </p>
        </div>

        {/* Physics Lab */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="animate-slideLeft">
            <div className="h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600" alt="Physics Lab" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div className="animate-slideRight">
            <h2 className="text-3xl font-bold text-primary mb-4">Physics Laboratory</h2>
            <p className="text-gray-700 mb-4">
              Our Physics laboratory is equipped with modern instruments and apparatus for conducting experiments 
              in mechanics, optics, electricity, and modern physics.
            </p>
            <ul className="space-y-2">
              {['Advanced measuring instruments', 'Optics equipment', 'Electrical circuits setup', 'Digital multimeters'].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Chemistry Lab */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="order-2 md:order-1 animate-slideLeft">
            <h2 className="text-3xl font-bold text-primary mb-4">Chemistry Laboratory</h2>
            <p className="text-gray-700 mb-4">
              Well-ventilated chemistry lab with all necessary chemicals, apparatus, and safety equipment 
              for organic, inorganic, and physical chemistry experiments.
            </p>
            <ul className="space-y-2">
              {['Fume hoods and safety equipment', 'Chemical storage facility', 'Analytical balance', 'pH meters and spectrophotometers'].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 animate-slideRight">
            <div className="h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600" alt="Chemistry Lab" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* Biology Lab */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="animate-slideLeft">
            <div className="h-80 bg-gradient-to-br from-primary/20 to-gold/20 rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600" alt="Biology Lab" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          <div className="animate-slideRight">
            <h2 className="text-3xl font-bold text-primary mb-4">Biology Laboratory</h2>
            <p className="text-gray-700 mb-4">
              Fully equipped biology laboratory with microscopes, specimens, models, and charts for 
              botany, zoology, and microbiology studies.
            </p>
            <ul className="space-y-2">
              {['Compound microscopes', 'Dissection instruments', 'Preserved specimens', 'Charts and models'].map((item, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-gold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Computer Lab */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 animate-slideUp">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 md:p-8">
            <h2 className="text-3xl font-bold mb-2">Computer Laboratory</h2>
            <p className="text-gray-100">Modern computing facilities with latest software and hardware</p>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" alt="Computer Lab" className="w-full h-64 object-cover rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Facilities Available</h3>
                <ul className="space-y-3">
                  {[
                    'Latest computers with high-speed processors',
                    'High-speed internet connectivity',
                    'Licensed software applications',
                    'Programming tools and IDEs',
                    'Multimedia facilities',
                    'Printing and scanning facilities'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-gold text-xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The computer lab provides students with hands-on experience in various programming languages, 
              software applications, and digital technologies. Regular practical sessions are conducted 
              to enhance technical skills and prepare students for the digital world.
            </p>
          </div>
        </div>

        {/* Lab Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'Modern Equipment', icon: '🔬', desc: 'Latest instruments and apparatus' },
            { title: 'Safety Measures', icon: '🛡️', desc: 'First aid and fire safety equipment' },
            { title: 'Qualified Staff', icon: '👨‍🔬', desc: 'Experienced lab technicians and assistants' },
            { title: 'Regular Maintenance', icon: '🔧', desc: 'Well-maintained equipment and facilities' },
            { title: 'Adequate Space', icon: '📐', desc: 'Spacious labs for comfortable learning' },
            { title: 'Individual Practice', icon: '👩‍🔬', desc: 'Each student performs experiments' }
          ].map((feature, i) => (
            <div key={i} className={`bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-slideUp delay-${(i % 3) + 1}`}>
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Lab Rules */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 md:p-8 mb-12 animate-slideUp">
          <h2 className="text-3xl font-bold text-primary mb-6">Laboratory Rules & Regulations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-secondary mb-3">General Rules</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Students must wear lab coats in chemistry and biology labs</li>
                <li>Follow all safety instructions carefully</li>
                <li>Handle equipment with care</li>
                <li>Report any breakage or accidents immediately</li>
                <li>Keep the lab clean and organized</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-3">Safety Guidelines</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>No eating or drinking in laboratories</li>
                <li>Wear safety goggles when required</li>
                <li>Dispose of chemicals properly</li>
                <li>Know the location of safety equipment</li>
                <li>Follow emergency evacuation procedures</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Lab Timings */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 animate-slideUp">
          <h2 className="text-3xl font-bold text-primary mb-6">Laboratory Timings</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-3 text-left">Laboratory</th>
                  <th className="p-3 text-left">Timing</th>
                  <th className="p-3 text-left">Days</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Physics Lab', '9:00 AM - 5:00 PM', 'Monday - Saturday'],
                  ['Chemistry Lab', '9:00 AM - 5:00 PM', 'Monday - Saturday'],
                  ['Biology Lab', '9:00 AM - 5:00 PM', 'Monday - Saturday'],
                  ['Computer Lab', '8:30 AM - 5:30 PM', 'Monday - Saturday']
                ].map((row, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="p-3 font-semibold text-gray-700">{row[0]}</td>
                    <td className="p-3 text-gray-600">{row[1]}</td>
                    <td className="p-3 text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratories;
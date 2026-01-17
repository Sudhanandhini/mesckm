import React from 'react';

import img1 from '../assets/libstaff.jpg';
import img2 from  "../assets/lib1.jpg"

const Library = () => {
  return (
    <div>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out; }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; animation-fill-mode: forwards; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards; }
      `}</style>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 animate-slideInLeft">Library Facilities</h1>
          <p className="text-xl animate-slideInLeft delay-1">A hub of knowledge and learning resources</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Library Images */}
        {/* <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`animate-fadeIn delay-${i} overflow-hidden rounded-lg shadow-lg group`}>
              <div className="h-64 bg-gray-200 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          ))}
        </div> */}

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-primary text-white rounded-lg p-6 sticky top-4 animate-slideInLeft">
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['About Library', 'Services', 'Collection', 'Resources', 'Hours', 'Rules', 'Staff'].map((item, i) => (
                  <li key={i} className="hover:translate-x-2 transition-transform duration-300">
                    <a href={`#${item.toLowerCase()}`} className="hover:text-gold">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* About */}
            <section id="about" className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn delay-2">
              <h2 className="text-3xl font-bold text-primary mb-4">About the Library</h2>
              <p className="text-gray-700 mb-4">
                The Library was established in 1984. The centralized library is going to be shifted to new building which is under 
                location in the College campus. College Library is a hub of student's activities. Students and staff of the college are 
                utilizing the library facilities throughout the day.
              </p>
              <p className="text-gray-700">
                The library plays a dominant role in providing the information necessary for all the academic and research activities. 
                The Library is always catering to the academic needs of students and the faculty.
              </p>
            </section>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 animate-fadeIn delay-3">
                <h3 className="text-2xl font-bold text-primary mb-3">Vision</h3>
                <p className="text-gray-700">
                  The Library aims to make the students learning environment to the college campus. It imparts to the physical and 
                  virtual library with international caliber of service.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gold/10 to-primary/10 rounded-lg p-6 animate-fadeIn delay-4">
                <h3 className="text-2xl font-bold text-primary mb-3">Mission</h3>
                <p className="text-gray-700">
                  To provide comprehensive resources and services to the teaching and learning needs of the students and faculties.
                </p>
              </div>
            </div>

             <section id="services" className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-primary mb-6">Library </h2>
             <img src={img2} alt="Librarian" className="w-full h-full object-cover" />
            </section>

            {/* Services */}
            <section id="services" className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-primary mb-6">Library Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Reference Service',
                  'Lending Service',
                  'Internet & Wi-Fi',
                  'Reprographic Service',
                  'Digital Library',
                  'E-Resources',
                  'Book Bank Facility',
                  'Reading Room'
                ].map((service, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-primary/5 hover:translate-x-2 transition-all duration-300">
                    <span className="text-2xl">✓</span>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Facilities Table */}
            <section className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-primary mb-6">Library Facilities</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="border border-gray-300 p-3 text-left">Sl. No</th>
                      <th className="border border-gray-300 p-3 text-left">Particulars</th>
                      <th className="border border-gray-300 p-3 text-left">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['1', 'Total Books', '15,000+'],
                      ['2', 'Journals', '50+'],
                      ['3', 'Magazines', '25+'],
                      ['4', 'Newspapers', '10+'],
                      ['5', 'E-Resources', 'Available'],
                      ['6', 'Seating Capacity', '150'],
                      ['7', 'Working Hours', '8:30 AM - 5:30 PM']
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 transition-colors duration-200">
                        {row.map((cell, j) => (
                          <td key={j} className="border border-gray-300 p-3">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Collection */}
            <section id="collection" className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-primary mb-6">Library Collection</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: 'Books', count: '12,138', icon: '📚' },
                  { title: 'Journals', count: '48', icon: '📰' },
                  { title: 'Magazines', count: '82', icon: '📖' }
                ].map((item, i) => (
                  <div key={i} className="bg-gradient-to-br from-primary/5 to-gold/5 p-6 rounded-lg text-center hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <div className="text-3xl font-bold text-primary mb-2">{item.count}</div>
                    <div className="text-gray-600">{item.title}</div>
                  </div>
                ))}
              </div>
            </section>
{/* Resources */}
<section id="resources" className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
  <h2 className="text-3xl font-bold text-primary mb-6">E-Resources</h2>

  <div className="space-y-3">
    {[
      { name: 'E-Paathshala', link: 'https://epgp.inflibnet.ac.in/' },
      { name: 'National Digital Library of India', link: 'https://ndl.iitkgp.ac.in/' },
      { name: 'LibGuides', link: 'https://libguides.ukings.ca/c.php?g=735145&p=5292978' },
      { name: 'Vijay Karnataka', link: 'https://www.vijaykarnatakaepaper.com/' },
      { name: 'The Hindu', link: 'https://epaper.thehindu.com/reader' },
      { name: 'Shodhganga', link: 'https://shodhganga.inflibnet.ac.in/' },
      { name: 'Vlib', link: 'https://vlib.org/' },
      { name: 'Bartleby', link: 'https://www.bartleby.com/' }
    ].map((resource, i) => (
      <div
        key={i}
        className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-primary/5 hover:translate-x-2 transition-all duration-300"
      >
        <span className="font-semibold text-gray-700">{resource.name}</span>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-gold font-semibold"
        >
          View Link →
        </a>
      </div>
    ))}
  </div>
</section>

            {/* Library Hours */}
            <section id="hours" className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold mb-4">Library Hours</h2>
              <div className="text-xl">
                <p className="mb-2">Monday to Friday: 8:30 AM - 5:30 PM</p>
                <p className="mb-2">Saturday: 9:00 AM - 2:00 PM</p>
                <p>Library remains closed on Sundays and Public Holidays</p>
              </div>
            </section>

            {/* Rules */}
            <section id="rules" className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-primary mb-6">Library Rules</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Students may borrow books from the library every week for one day and fee free detailed for reading books to their classroom.</li>
                <li>They may borrow two books at a time.</li>
                <li>Students should not damages or scribble or mark in the books, Newspapers, maps, charts, Log tables and lab manuals belonging to the Library.</li>
                <li>If any book is damaged, the loss shall not be reflected on marks of any of the book and be collected from the students.</li>
                <li>Whispering, Universal Books, Language Books and Encyclopedias are Kept in the reference only and will not be for issue.</li>
                <li>Books must be returned through within 15 days.</li>
                <li>Students will be entitled to get two admission/Open for the experiments class.</li>
              </ol>
            </section>

            {/* Staff */}
            <section id="staff" className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-primary mb-6">Library Staff</h2>
              <div className="flex items-center space-x-6 p-6 bg-gradient-to-r from-primary/5 to-gold/5 rounded-lg">
                <div className="w-32 h-32 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                 <img src={img1} alt="Librarian" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Smt. Jayashri T. M.</h3>
                  <p className="text-gray-700 mb-1">M.Lib., M.Sc., M.Phil</p>
                  <p className="text-gray-700 mb-1">Librarian</p>
                  <p className="text-gray-600">Phone: +91-8262-236XXX</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
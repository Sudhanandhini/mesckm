import React from 'react';

import img1 from "../assets/teaching/36.jpg"
import img2 from "../assets/teaching/37.jpg"
import img3 from "../assets/teaching/38.jpg"
import img4 from "../assets/teaching/39.jpg"
import img5 from "../assets/teaching/40.jpg"
import img6 from "../assets/teaching/41.jpg"
import img7 from "../assets/teaching/42.jpg"
import img8 from "../assets/teaching/43.jpg"
import img9 from "../assets/teaching/444.jpg"
import img10 from "../assets/teaching/44.jpg"
import img11 from "../assets/teaching/45.jpg"
import img12 from "../assets/teaching/46.jpg"
import img13 from "../assets/teaching/47.jpg"
import img14 from "../assets/teaching/48.jpg"
import img15 from "../assets/teaching/49.jpg"
import img16 from "../assets/teaching/50.jpg"
import img17 from "../assets/teaching/51.jpg"
import img18 from "../assets/teaching/52.jpg"
import img19 from "../assets/teaching/53.jpg"
import img20 from "../assets/teaching/54.jpg"
import img21 from "../assets/teaching/55.jpg"
import img22 from "../assets/teaching/56.jpg"
import img23 from "../assets/teaching/57.jpg"
import img24 from "../assets/teaching/58.jpg"
import img25 from "../assets/teaching/60.jpg"
import img26 from "../assets/teaching/61.jpg"
import img27 from "../assets/teaching/62.jpg"
import img28 from "../assets/teaching/63.jpg"
import img29 from "../assets/teaching/64.jpg"
import img30 from "../assets/teaching/65.jpg"
import img31 from "../assets/teaching/66.jpg"
import img32 from "../assets/teaching/67.jpg"
import img33 from "../assets/teaching/68.jpg"
import img34 from "../assets/teaching/69.jpg"
import img35 from "../assets/teaching/70.jpg"
import img36 from "../assets/teaching/71.jpg"
import img37 from "../assets/teaching/72.jpg"
import img38 from "../assets/teaching/f38.jpg"
import img39 from "../assets/teaching/f39.jpg"
import img40 from "../assets/teaching/f40.jpg"
import img41 from "../assets/teaching/f41.jpg"
import img42 from "../assets/teaching/f42.jpg"
import img43 from "../assets/teaching/f43.jpg"
import img44 from "../assets/teaching/f44.jpg"
import img45 from "../assets/teaching/f45.jpg"
import img46 from "../assets/teaching/f46.jpg"
import img47 from "../assets/teaching/n1.jpg"



const Faculty = () => {
  const facultyData = [
    { id: 1, name: 'Dr. H. Vishnuvardhana', designation: 'Principal and Asst. Professor', dateOfEntry: '19.05.2010', qualification: 'M.A., P.hD.', image:img1 },
    { id: 2, name: 'Smt. Savithri M', designation: 'Professor and Head, Department of Economics', dateOfEntry: '01.08.2002', qualification: 'M.A., M.Phil.', image: img2 },
    { id: 3, name: 'Smt. Haseena Banu', designation: 'Professor and Head, Department of History', dateOfEntry: '01.08.2002', qualification: 'M.A., M.Phil.', image: img3 },
    { id: 4, name: 'Sri. Avinash G.M.', designation: 'Associate Professor and Head-Dept of Commerce', dateOfEntry: '01.02.2006', qualification: 'M.Com., M.Phil.', image: img4 },
    { id: 5, name: 'Sri. Veeranna Gowda B R', designation: 'Associate Professor and Head-Dept of Political Science', dateOfEntry: '01.07.2006', qualification: 'M.A., M.Phil.', image: img5 },
    { id: 6, name: 'Smt. Mallikarjuna K S', designation: 'Asst. Professor-Dept of Kannada', dateOfEntry: '16.07.2008', qualification: 'M.A., B.Ed.', image: img6 },
    { id: 7, name: 'Dr. Nanditha S', designation: 'Associate Professor-Dept of English', dateOfEntry: '22.07.2008', qualification: 'M.A., M.Phil., M.Ed.', image: img7 },
    { id: 8, name: 'Sri. Sadangi B.G.', designation: 'Asst. Professor-Dept of Mathematics', dateOfEntry: '01.07.2008', qualification: 'M.Sc., M.Phil.', image: img8 },
    { id: 9, name: 'Smt. Mounika Bopana P', designation: 'Asst. Professor-Dept of Statistics', dateOfEntry: '14.01.2009', qualification: 'M.A., M.B.A.', image: img9 },
    { id: 10, name: 'Dr. Pallavi Rani N', designation: 'Asst. Professor-Dept of Physics', dateOfEntry: '15.07.2010', qualification: 'M.Sc., M.Ed.', image: img10 },
    { id: 11, name: 'Dr. Madhu Soodan N.L.', designation: 'Asst. Professor-Dept of English', dateOfEntry: '19.07.2010', qualification: 'M.A., M.Phil.', image: img11 },
    { id: 12, name: 'Dr. Ravindra N', designation: 'Asst. Professor-Dept of Economics', dateOfEntry: '19.01.2011', qualification: 'M.A., M.Phil., Ph.D.', image: img12 },
    { id: 13, name: 'Sri. Manjunath', designation: 'Asst. Professor-Dept of Commerce', dateOfEntry: '09.01.2012', qualification: 'M.Com., M.Phil.', image: img13 },
    { id: 14, name: 'Sri. Channappa', designation: 'Asst. Professor-Dept of History', dateOfEntry: '16.16.2009', qualification: 'M.A., M.Phil., M.Ed.', image: img14 },
    { id: 15, name: 'Dr. Asha Lingaraj D', designation: 'Asst. Professor-Dept of English', dateOfEntry: '12.08.2011', qualification: 'M.A., M.Phil.', image: img15 },
    { id: 16, name: 'Dr. Jagadeesha K.M.', designation: 'Asst. Professor-Dept of Physics', dateOfEntry: '27.07.2011', qualification: 'M.Sc., M.Phil.', image: img16 },
    { id: 17, name: 'Sri. Saravathi Kumari P', designation: 'Asst. Professor-Dept of English', dateOfEntry: '19.08.2011', qualification: 'M.A., B.Ed.', image: img17 },
    { id: 18, name: 'Smt. Archana N', designation: 'Asst. Professor-Dept of English', dateOfEntry: '20.07.2012', qualification: 'M.A., B.Ed.', image: img18 },
    { id: 19, name: 'Smt. Asha Rao S', designation: 'Asst. Professor-Dept of Commerce', dateOfEntry: '21.07.2012', qualification: 'M.Com., M.B.A.', image: img19 },
    { id: 20, name: 'Sri. Mohan Narayana', designation: 'Asst. Professor-Dept of Commerce', dateOfEntry: '23.07.2011', qualification: 'M.Com.', image: img20 },
    { id: 21, name: 'Smt. Pramoda S S', designation: 'Asst. Professor-Dept of Economics', dateOfEntry: '24.08.2012', qualification: 'M.A., M.Com.', image: img21 },
    { id: 22, name: 'Smt. Vijayalaxmi C G', designation: 'Asst. Professor-Dept of Kannada', dateOfEntry: '25.07.2010', qualification: 'M.A., B.Ed.', image: img22 },
    { id: 23, name: 'Smt. Asha H.H.', designation: 'Asst. Professor-Dept of Political Science', dateOfEntry: '26.08.2013', qualification: 'M.A., M.Com.', image: img23 },
    { id: 24, name: 'Smt. Anupama H.K.', designation: 'Asst. Professor-Dept of Chemistry', dateOfEntry: '27.08.2014', qualification: 'M.Sc., B.Ed.', image: img24 },
    { id: 25, name: 'Dr. Suma Gowda R S', designation: 'Asst. Professor-Dept of English', dateOfEntry: '28.07.2014', qualification: 'M.A., B.Ed.', image: img25 },
    { id: 26, name: 'Smt. Geetha P M', designation: 'Asst. Professor-Dept of Commerce', dateOfEntry: '29.07.2013', qualification: 'M.A.', image: img26},
    { id: 27, name: 'Smt. Pavithra B R', designation: 'Asst. Professor-Dept of English', dateOfEntry: '30.08.2015', qualification: 'M.Com., M.B.A., M.Ed.', image: img27 },
    { id: 28, name: 'Dr. Prasanna Kumari', designation: 'Asst. Professor-Dept of Mathematics', dateOfEntry: '31.07.2015', qualification: 'M.Sc.', image: img28 },
    { id: 29, name: 'Sri. Abdul Lathif B', designation: 'Asst. Professor-Dept of Mathematics', dateOfEntry: '01.08.2015', qualification: 'M.Sc.', image: img29 },
    { id: 30, name: 'Smt. Binayaka M', designation: 'Asst. Professor-Dept of Kannada', dateOfEntry: '02.07.2015', qualification: 'M.A., M.Com.', image: img30 },
    { id: 31, name: 'Smt. Drakshi K.K.', designation: 'Asst. Professor-Dept of Economics', dateOfEntry: '03.08.2015', qualification: 'M.A.', image: img31 },
    { id: 32, name: 'Smt. Vasundhara B N', designation: 'Asst. Professor-Dept of Botany', dateOfEntry: '04.08.2015', qualification: 'M.Sc.', image: img32 },
    { id: 33, name: 'Smt. Jyothi Kumar B N', designation: 'Asst. Professor-Dept of Sociology', dateOfEntry: '05.07.2016', qualification: 'M.A., B.Ed.', image: img33 },
    { id: 34, name: 'Smt. Savitha K.A.', designation: 'Asst. Professor-Dept of Economics', dateOfEntry: '06.08.2016', qualification: 'M.A., M.Com.', image: img34 },
    { id: 35, name: 'Sri. Anantha', designation: 'Asst. Professor-Dept of Economics', dateOfEntry: '07.08.2016', qualification: 'M.A., B.Ed.', image: img35 },
    { id: 36, name: 'Smt. Binaca S', designation: 'Asst. Professor-Dept of Chemistry', dateOfEntry: '08.07.2016', qualification: 'M.Sc., M.Com.', image: img36 },
    { id: 37, name: 'Smt. Ashwina M R', designation: 'Asst. Professor-Dept of Kannada', dateOfEntry: '09.07.2016', qualification: 'M.A., M.Com.', image: img37 },
    { id: 38, name: 'Sri. B.M.Binj H.S.', designation: 'Asst. Professor-Dept of Commerce', dateOfEntry: '10.07.2018', qualification: 'M.Com., M.B.A.', image: img38 },
    { id: 39, name: 'Smt. Nuby H.C.', designation: 'Asst. Professor-Dept of Physics', dateOfEntry: '11.07.2018', qualification: 'M.Sc., M.Com.', image: img39 },
    { id: 40, name: 'Sri. Dr. Shiva S', designation: 'Asst. Professor-Dept of English', dateOfEntry: '12.08.2018', qualification: 'M.A.', image: img40 },
    { id: 41, name: 'Smt. Sunitha P M', designation: 'Asst. Professor-Dept of English', dateOfEntry: '13.08.2018', qualification: 'M.A.', image: img41 },
    { id: 42, name: 'Smt. Puttaraju Setty', designation: 'Asst. Professor-Dept of Mathematics', dateOfEntry: '14.07.2019', qualification: 'M.A., B.Ed.', image: img42 },
    { id: 43, name: 'Smt. Kavithabai Sette', designation: 'Asst. Professor-Dept of Mathematics', dateOfEntry: '15.08.2019', qualification: 'M.A., B.Ed.', image: img43 },
    { id: 44, name: 'Smt. Suneetha N S', designation: 'Asst. Professor-Dept of English', dateOfEntry: '16.07.2019', qualification: 'M.A., B.Ed.', image: img44 },
    { id: 45, name: 'Smt. Jayanthi T', designation: 'Librarian', dateOfEntry: '17.01.2019', qualification: 'M.Lib., M.Sc.', image: img45 },
    { id: 46, name: 'Sri. Manjunatha K G', designation: 'Physical Director', dateOfEntry: '18.08.2020', qualification: 'M.P.Ed.', image: img46 },
    { id: 47, name: 'Smt. Rekha M', designation: 'Asst. Professor-Dept of Computer Science', dateOfEntry: '19.07.2020', qualification: 'M.Sc., M.C.A.', image: img47 },
  ];

  return (
    <div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
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
        .row-hover { transition: all 0.3s ease; }
        .row-hover:hover { transform: translateX(5px); background-color: rgba(153, 12, 40, 0.05); }
      `}</style>

      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Teaching Faculty</h1>
          <p className="text-xl animate-fadeIn delay-1">Dedicated educators committed to excellence</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { count: '47', label: 'Qualified Faculty', icon: '👨‍🏫' },
            { count: '15+', label: 'Ph.D. Holders', icon: '🎓' },
            { count: '20+', label: 'Years Experience', icon: '📚' },
            { count: '30+', label: 'Research Papers', icon: '📄' }
          ].map((stat, i) => (
            <div key={i} className={`bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-all duration-300 animate-scaleIn delay-${i + 1}`}>
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold mb-2">{stat.count}</div>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12 animate-scaleIn">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
            <h2 className="text-3xl font-bold text-center">TEACHING STAFF DETAILS</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-primary">
                <tr>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">SI NO</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">Name</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">Designation</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">Date of Entry</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">Qualification</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">PHOTO</th>
                </tr>
              </thead>
              <tbody>
                {facultyData.map((faculty, index) => (
                  <tr key={faculty.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} row-hover`}>
                    <td className="px-4 py-4 border-b font-semibold text-primary">{faculty.id}</td>
                    <td className="px-4 py-4 border-b font-semibold text-gray-800">{faculty.name}</td>
                    <td className="px-4 py-4 border-b text-gray-700">{faculty.designation}</td>
                    <td className="px-4 py-4 border-b text-gray-700">{faculty.dateOfEntry}</td>
                    <td className="px-4 py-4 border-b text-gray-700">{faculty.qualification}</td>
                    <td className="px-4 py-4 border-b">
                      <div className="w-20 h-24 rounded-lg overflow-hidden border-2 border-primary/20 hover:scale-110 hover:border-primary transition-all duration-300 shadow-md">
                        <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* About */}
        <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-lg shadow-lg p-8 mb-12 animate-fadeIn delay-2">
          <h3 className="text-3xl font-bold text-primary mb-4">About Our Faculty</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our college takes pride in its highly qualified and experienced teaching faculty. Each faculty member 
            brings expertise in their respective fields, ensuring quality education for all students.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The faculty members are excellent educators, active researchers, and dedicated mentors who guide 
            students throughout their academic journey.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Experienced Faculty', icon: '👨‍🏫', desc: 'Highly qualified teaching staff', color: 'from-primary to-secondary' },
            { title: 'Research Oriented', icon: '🔬', desc: 'Active in research and publications', color: 'from-secondary to-primary' },
            { title: 'Student Mentoring', icon: '🎯', desc: 'Dedicated mentors for students', color: 'from-primary to-gold' }
          ].map((feature, i) => (
            <div key={i} className={`bg-gradient-to-br ${feature.color} text-white rounded-lg shadow-lg p-6 hover:scale-105 transition-all duration-300 animate-slideIn delay-${i + 1}`}>
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
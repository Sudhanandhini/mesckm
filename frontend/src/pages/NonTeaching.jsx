import React from 'react';
import img1 from "../assets/n2.jpg"
import img2 from "../assets/n3.jpg"
import img3 from "../assets/73.jpg"
import img4 from "../assets/n4.jpg"
import img5 from "../assets/n5.jpg"
import img6 from "../assets/n6.jpg"
import img7 from "../assets/n7.jpg"
import img8 from "../assets/n8.jpg"

const NonTeaching = () => {
  const nonTeachingData = [
    {
      id: 1,
      name: 'Smt. Bhavani B.S.',
      designation: 'Superintendent',
      dateOfEntry: '01.07.1994',
      qualification: 'M.Com.',
      image: img1
    },
    {
      id: 2,
      name: 'Smt. Usha Rani C.M.',
      designation: 'S.D.A.',
      dateOfEntry: '08.09.2003',
      qualification: 'M.Com.',
      image: img2
    },
    {
      id: 3,
      name: 'Sri. Chandan Gowda M C',
      designation: 'S.D.A.',
      dateOfEntry: '01.12.2011',
      qualification: 'D.C.A.',
      image: img3
    },
    {
      id: 4,
      name: 'Kum. Nandini P',
      designation: 'Office Asst.',
      dateOfEntry: '11.07.2016',
      qualification: 'M.Com.',
      image:  img4
    },
    {
      id: 5,
      name: 'Sri. Keshava Murthy H S',
      designation: 'Lab. Asst.',
      dateOfEntry: '01.07.2000',
      qualification: 'ITI',
      image:  img5
    },
    {
      id: 6,
      name: 'Smt. Sowmya N V',
      designation: 'Attender',
      dateOfEntry: '20.04.2015',
      qualification: 'II PUC',
      image:  img6
    },
    {
      id: 7,
      name: 'Sri. Shekaraiah R.S.',
      designation: 'Peon',
      dateOfEntry: '15.07.1999',
      qualification: 'SSLC',
      image:  img7
    },
    {
      id: 8,
      name: 'Sri. Prakash K.B.',
      designation: 'Peon',
      dateOfEntry: '12.08.2005',
      qualification: 'SSLC',
      image:  img8
    },
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
        .delay-4 { animation-delay: 0.4s; opacity: 0; animation-fill-mode: forwards; }
        .row-hover { transition: all 0.3s ease; }
        .row-hover:hover { transform: translateX(5px); background-color: rgba(153, 12, 40, 0.05); }
      `}</style>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Non-Teaching Staff</h1>
          <p className="text-xl animate-fadeIn delay-1">Dedicated professionals supporting academic excellence</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Staff Table */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12 animate-scaleIn">
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
            <h2 className="text-3xl font-bold text-center">NON-TEACHING STAFF DETAILS</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-primary">
                <tr>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">SI NO</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">Name</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">Designation</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">Date of Entry in to Service</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">Qualification</th>
                  <th className="px-4 py-4 text-left font-bold text-gray-700">PHOTO</th>
                </tr>
              </thead>
              <tbody>
                {nonTeachingData.map((staff, index) => (
                  <tr key={staff.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} row-hover`}>
                    <td className="px-4 py-4 border-b font-semibold text-primary">{staff.id}</td>
                    <td className="px-4 py-4 border-b font-semibold text-gray-800">{staff.name}</td>
                    <td className="px-4 py-4 border-b text-gray-700">{staff.designation}</td>
                    <td className="px-4 py-4 border-b text-gray-700">{staff.dateOfEntry}</td>
                    <td className="px-4 py-4 border-b text-gray-700">{staff.qualification}</td>
                    <td className="px-4 py-4 border-b">
                      <div className="w-20 h-24 rounded-lg overflow-hidden border-2 border-primary/20 hover:scale-110 hover:border-primary transition-all duration-300 shadow-md">
                        <img 
                          src={staff.image} 
                          alt={staff.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gradient-to-r from-primary/5 to-gold/5 rounded-lg shadow-lg p-8 mb-12 animate-fadeIn delay-2">
          <h3 className="text-3xl font-bold text-primary mb-4">About Our Non-Teaching Staff</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our dedicated non-teaching staff plays a crucial role in maintaining the smooth functioning of the college. 
            From administrative support to laboratory assistance, our team ensures that students and faculty have all 
            the resources they need for a productive academic environment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Their commitment to excellence and service is an integral part of our institution's success. Each member 
            brings years of experience and dedication to their role, contributing to the overall growth and development 
            of our institution.
          </p>
        </div>

        {/* Staff Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { count: '5+', label: 'Administrative Staff', icon: '👨‍💼', color: 'from-primary to-secondary' },
            { count: '3+', label: 'Laboratory Assistants', icon: '🔬', color: 'from-secondary to-primary' },
            { count: '2+', label: 'Library Staff', icon: '📚', color: 'from-primary to-gold' },
            { count: '4+', label: 'Support Staff', icon: '🤝', color: 'from-gold to-primary' }
          ].map((item, i) => (
            <div key={i} className={`bg-gradient-to-br ${item.color} text-white rounded-lg shadow-lg p-6 text-center hover:scale-105 hover:shadow-xl transition-all duration-300 animate-scaleIn delay-${i + 1}`}>
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-3xl font-bold mb-2">{item.count}</div>
              <p className="text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Departments */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-slideIn">
            <h3 className="text-2xl font-bold text-primary mb-4">Administrative Department</h3>
            <ul className="space-y-3">
              {[
                'Office Management',
                'Student Records & Documentation',
                'Admissions Support',
                'Financial Administration',
                'General Administration'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-700 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gold text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-slideIn delay-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Support Services</h3>
            <ul className="space-y-3">
              {[
                'Laboratory Maintenance',
                'Library Operations',
                'Campus Maintenance',
                'Security Services',
                'Housekeeping Services'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-700 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gold text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Roles & Responsibilities */}
        <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeIn">
          <h3 className="text-3xl font-bold text-primary mb-6 text-center">Roles & Responsibilities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Administrative Support',
                desc: 'Managing office operations, documentation, and student services',
                icon: '📋'
              },
              {
                title: 'Laboratory Support',
                desc: 'Maintaining lab equipment and assisting in practical sessions',
                icon: '🔧'
              },
              {
                title: 'Campus Services',
                desc: 'Ensuring clean and safe campus environment for all',
                icon: '🏫'
              }
            ].map((role, i) => (
              <div key={i} className="text-center p-6 bg-gradient-to-br from-primary/5 to-gold/5 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{role.icon}</div>
                <h4 className="text-xl font-bold text-primary mb-2">{role.title}</h4>
                <p className="text-gray-600">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonTeaching;
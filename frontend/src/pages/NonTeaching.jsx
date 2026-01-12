import React from 'react';

const NonTeaching = () => {
  const nonTeachingData = [
    {
      id: 1,
      name: 'Smt. Bhavani B.S.',
      designation: 'Superintendent',
      dateOfEntry: '01.07.1994',
      qualification: 'M.Com.',
    },
    {
      id: 2,
      name: 'Smt. Usha Rani C.M.',
      designation: 'S.D.A.',
      dateOfEntry: '08.09.2003',
      qualification: 'M.Com.',
    },
    {
      id: 3,
      name: 'Sri. Chandan Gowda M C',
      designation: 'S.D.A.',
      dateOfEntry: '01.12.2011',
      qualification: 'D.C.A.',
    },
    {
      id: 4,
      name: 'Kum. Nandini P',
      designation: 'Office Asst.',
      dateOfEntry: '11.07.2016',
      qualification: 'M.Com..',
    },
    {
      id: 5,
      name: 'Sri. Keshava Murthy H S',
      designation: 'Lab. Asst.',
      dateOfEntry: '01.07.2000',
      qualification: 'ITI',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Faculty List</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary text-white p-4">
            <h2 className="text-2xl font-bold text-center">NON-TEACHING STAFF DETAILS</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 border-b-2 border-primary">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">SI NO</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Name</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Designation</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Date of Entry in to Service</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">Qualification</th>
                  <th className="px-4 py-3 text-left font-bold text-gray-700">PHOTO</th>
                </tr>
              </thead>
              <tbody>
                {nonTeachingData.map((staff, index) => (
                  <tr key={staff.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 border-b">{staff.id}</td>
                    <td className="px-4 py-4 border-b font-semibold">{staff.name}</td>
                    <td className="px-4 py-4 border-b">{staff.designation}</td>
                    <td className="px-4 py-4 border-b">{staff.dateOfEntry}</td>
                    <td className="px-4 py-4 border-b">{staff.qualification}</td>
                    <td className="px-4 py-4 border-b">
                      <div className="w-20 h-24 bg-blue-100 flex items-center justify-center rounded">
                        <span className="text-xs text-gray-500">Photo</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-accent mb-4">About Our Non-Teaching Staff</h3>
          <p className="text-gray-700 leading-relaxed">
            Our dedicated non-teaching staff plays a crucial role in maintaining the smooth functioning of the college. 
            From administrative support to laboratory assistance, our team ensures that students and faculty have all 
            the resources they need for a productive academic environment. Their commitment to excellence and service 
            is an integral part of our institution's success.
          </p>
        </div>

        {/* Staff Categories */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-primary text-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">5+</div>
            <p className="text-sm">Administrative Staff</p>
          </div>

          <div className="bg-secondary text-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">3+</div>
            <p className="text-sm">Laboratory Assistants</p>
          </div>

          <div className="bg-accent text-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">2+</div>
            <p className="text-sm">Library Staff</p>
          </div>

          <div className="bg-gold text-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold mb-2">4+</div>
            <p className="text-sm">Support Staff</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonTeaching;

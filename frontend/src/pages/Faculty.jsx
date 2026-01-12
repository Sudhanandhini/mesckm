import React from 'react';

const Faculty = () => {
  const facultyData = [
    {
      id: 1,
      name: 'Dr. H. Vishnuvardhana',
      designation: 'Principal and Asst. Professor.',
      dateOfEntry: '19.05.2010',
      qualification: 'M.A.,P.hD.',
    },
    {
      id: 2,
      name: 'Smt. Savithri M',
      designation: 'Professor and Head, Department of Economics',
      dateOfEntry: '01.08.2002',
      qualification: 'M.A.,M.Phil.',
    },
    {
      id: 3,
      name: 'Smt. Haseena Banu',
      designation: 'Professor and Head, Department of History',
      dateOfEntry: '01.08.2002',
      qualification: 'M.A.,M.Phil.',
    },
    {
      id: 4,
      name: 'Sri. Avinash G.M.',
      designation: 'Associate professor and Head-Dept of Commerce.',
      dateOfEntry: '01.02.2006',
      qualification: 'M.Com.,M.Phil.',
    },
    {
      id: 5,
      name: 'Sri. Veeranna Gowda B R',
      designation: 'Associate Professor and Head-Dept of . Political science',
      dateOfEntry: '01.07.2006',
      qualification: 'M.A.,M.Phil.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Faculty List</h1>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-primary text-white p-4">
            <h2 className="text-2xl font-bold text-center">TEACHING & NON-TEACHING STAFF DETAILS</h2>
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
                {facultyData.map((faculty, index) => (
                  <tr key={faculty.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-4 border-b">{faculty.id}</td>
                    <td className="px-4 py-4 border-b font-semibold">{faculty.name}</td>
                    <td className="px-4 py-4 border-b">{faculty.designation}</td>
                    <td className="px-4 py-4 border-b">{faculty.dateOfEntry}</td>
                    <td className="px-4 py-4 border-b">{faculty.qualification}</td>
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
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Experienced Faculty</h3>
            <p className="text-sm">Highly qualified and experienced teaching staff committed to student success.</p>
          </div>

          <div className="bg-secondary text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Research Oriented</h3>
            <p className="text-sm">Faculty members actively engaged in research and publications.</p>
          </div>

          <div className="bg-accent text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Student Mentoring</h3>
            <p className="text-sm">Dedicated mentors guiding students in their academic and personal growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;

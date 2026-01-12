import React from 'react';

const Scholarship = () => {
  const scholarships = [
    'Post Metric Scholarships to SC, ST & other Backward Class Students.',
    'Scholarships to the children & dependants of service personnel and ex-service Personnel. (In Army, Air Force And the Navy)',
    'Government of India Hindi Scholarships.',
    'Government of India National Merit Scholarships for the children of Primary & Secondary School Teachers.',
    'Government of India National Merit Scholarships.',
    'Govt. of India Physically Handicapped Scholarships.',
    'Coffee Board Scholarships.',
    'Jindal Scholarships.',
    'Minority Scholarship and loan.',
    'Urdu Scholarship.',
    'Spices Board Scholarship',
    'Scholarship to the children of Labour Class.',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Scholarship Programs</h1>

        {/* Header Image */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gray-200 w-96 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Scholarship Image</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-accent mb-4">
              The following are the various Scholarships available to the students:
            </h2>
          </div>

          {/* Scholarship List */}
          <div className="bg-blue-50 rounded-lg p-6">
            <ol className="space-y-3">
              {scholarships.map((scholarship, index) => (
                <li key={index} className="flex items-start">
                  <span className="font-bold text-primary mr-3">{index + 1}.</span>
                  <span className="text-gray-700 leading-relaxed">{scholarship}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Eligibility</h3>
            <p className="text-sm leading-relaxed">
              Students meeting the specific criteria of each scholarship program can apply. Documentation and academic 
              performance requirements vary by program.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent to-red-600 text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Application Process</h3>
            <p className="text-sm leading-relaxed">
              Applications are accepted through the college office. Students must submit required documents before the 
              deadline for each scholarship program.
            </p>
          </div>
        </div>

        {/* Contact for Scholarship */}
        <div className="mt-8 bg-amber-50 border-l-4 border-accent rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-accent mb-3">Need Help with Scholarships?</h3>
          <p className="text-gray-700 mb-4">
            For more information about eligibility criteria, application procedures, and deadlines for various 
            scholarship programs, please contact the college office.
          </p>
          <div className="flex flex-col md:flex-row gap-4 text-sm">
            <div>
              <span className="font-semibold">Phone:</span> 91-08262-233973
            </div>
            <div>
              <span className="font-semibold">Email:</span> mesmpsckm@gmail.com
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-accent mb-4">Scholarship Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <p className="text-sm text-gray-700">Students Benefited Annually</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <p className="text-sm text-gray-700">Scholarship Programs</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-gray-700">Support Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship;

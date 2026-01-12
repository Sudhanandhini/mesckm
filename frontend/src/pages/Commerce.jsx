import React from 'react';

const Commerce = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">
          About Commerce and Department of Management Sciences
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Department of Commerce and Management Sciences has started Commerce and Management forum in 2006 April, 
              with an intention to provide a platform to the students to exhibit their talents relating to Commerce 
              subjects and Cultural activities.
            </p>

            <p>
              Department of Commerce and Management forum also have a marketing club under which various marketing 
              related seminars and other marketing related activities are undertaken every year.
            </p>

            <p>
              In 2011-12 both the department, along with PU Commerce students have started M E S Chamber of Commerce 
              with an intention to conduct series of excellent commerce related seminars and career oriented programs.
            </p>
          </div>
        </div>

        {/* Activities Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">Department Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Seminar Event Photo</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Cultural Activity Photo</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Marketing Club Activity</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Chamber Event Photo</span>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold mb-3">Commerce Forum</h4>
            <p className="leading-relaxed">
              Platform for students to showcase their talents in commerce subjects and cultural activities since 2006.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent to-red-600 text-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold mb-3">Marketing Club</h4>
            <p className="leading-relaxed">
              Conducts marketing seminars and activities to enhance practical knowledge in marketing management.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold to-yellow-600 text-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold mb-3">MES Chamber</h4>
            <p className="leading-relaxed">
              Organizes commerce seminars and career-oriented programs for holistic student development.
            </p>
          </div>
        </div>

        {/* Programs Offered */}
        <div className="mt-8 bg-blue-50 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-accent mb-6">Programs Offered</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="text-xl font-bold text-primary mb-3">B.Com</h4>
              <p className="text-gray-700">Bachelor of Commerce with focus on accounting, taxation, and business management.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="text-xl font-bold text-primary mb-3">BBA</h4>
              <p className="text-gray-700">Bachelor of Business Administration preparing students for managerial roles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commerce;

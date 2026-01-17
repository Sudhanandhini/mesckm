import React from 'react';

const Commerce = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Commerce and Management Sciences</h1>
          <p className="text-xl animate-fadeIn delay-1">Excellence in Commerce Education and Career Development</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 animate-fadeIn delay-2">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="transform hover:translate-x-1 transition-transform duration-300">
                Department of Commerce and Management Sciences has started Commerce and Management forum in 2006 April, 
                with an intention to provide a platform to the students to exhibit their talents relating to Commerce 
                subjects and Cultural activities.
              </p>

              <p className="transform hover:translate-x-1 transition-transform duration-300">
                Department of Commerce and Management forum also have a marketing club under which various marketing 
                related seminars and other marketing related activities are undertaken every year.
              </p>

              <p className="transform hover:translate-x-1 transition-transform duration-300">
                In 2011-12 both the department, along with PU Commerce students have started M E S Chamber of Commerce 
                with an intention to conduct series of excellent commerce related seminars and career oriented programs.
              </p>
            </div>
          </div>

          {/* Activities Gallery */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-accent mb-6 text-center animate-fadeIn delay-3">Department Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-64 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fadeIn delay-4">
                <span className="text-white text-lg font-semibold">Seminar Event Photo</span>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-600 h-64 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fadeIn delay-5">
                <span className="text-white text-lg font-semibold">Cultural Activity Photo</span>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-64 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fadeIn delay-6">
                <span className="text-white text-lg font-semibold">Marketing Club Activity</span>
              </div>
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 h-64 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer animate-fadeIn delay-7">
                <span className="text-white text-lg font-semibold">Chamber Event Photo</span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fadeIn delay-4 group">
              <div className="transform group-hover:scale-125 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-3">Commerce Forum</h4>
              </div>
              <p className="leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                Platform for students to showcase their talents in commerce subjects and cultural activities since 2006.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent to-red-600 text-white rounded-lg shadow-lg p-6 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fadeIn delay-5 group">
              <div className="transform group-hover:scale-125 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-3">Marketing Club</h4>
              </div>
              <p className="leading-relaxed group-hover:text-red-100 transition-colors duration-300">
                Conducts marketing seminars and activities to enhance practical knowledge in marketing management.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gold to-yellow-600 text-white rounded-lg shadow-lg p-6 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-fadeIn delay-6 group">
              <div className="transform group-hover:scale-125 transition-transform duration-300">
                <h4 className="text-2xl font-bold mb-3">MES Chamber</h4>
              </div>
              <p className="leading-relaxed group-hover:text-yellow-100 transition-colors duration-300">
                Organizes commerce seminars and career-oriented programs for holistic student development.
              </p>
            </div>
          </div>

          {/* Programs Offered */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-accent mb-6 animate-fadeIn">Programs Offered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-primary animate-fadeIn delay-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">📚</div>
                  <h4 className="text-xl font-bold text-primary">B.Com</h4>
                </div>
                <p className="text-gray-700">Bachelor of Commerce with focus on accounting, taxation, and business management.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-accent animate-fadeIn delay-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl">💼</div>
                  <h4 className="text-xl font-bold text-accent">BBA</h4>
                </div>
                <p className="text-gray-700">Bachelor of Business Administration preparing students for managerial roles.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Commerce;

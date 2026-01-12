import React from 'react';

const Science = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">GALAXY (A Cluster of stars)</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              GALAXY is the name of Science forum of our college. The Greek word GALAXY means a cluster of stars. 
              To exhibit the talent of science students we started the science forum in our college, in the year 2008. 
              Through this forum students can conduct science quiz, science seminars, workshops, science exhibitions, 
              Article exhibitions, etc. It helps students to learn the subjects more practically. Through this forum 
              we will celebrate National Science Day every year. So in all the aspects it helps in the growth of science 
              students.
            </p>
          </div>
        </div>

        {/* Science Activities */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">SEMINAR</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Science Seminar Photo 1</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Science Seminar Photo 2</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Exhibition Photo</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">National Science Day</span>
            </div>
          </div>
        </div>

        {/* Activities List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold mb-4">Science Quiz</h4>
            <p>Regular quiz competitions to test and enhance scientific knowledge and analytical thinking.</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold mb-4">Science Seminars</h4>
            <p>Expert seminars on latest scientific developments and research methodologies.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold mb-4">Workshops</h4>
            <p>Hands-on workshops in various scientific fields for practical learning experience.</p>
          </div>

          <div className="bg-gradient-to-br from-accent to-red-600 text-white rounded-lg shadow-lg p-6">
            <h4 className="text-2xl font-bold mb-4">Exhibitions</h4>
            <p>Science and article exhibitions showcasing student projects and innovations.</p>
          </div>
        </div>

        {/* National Science Day */}
        <div className="bg-primary text-white rounded-lg shadow-lg p-8">
          <h3 className="text-3xl font-bold mb-4 text-center">National Science Day Celebration</h3>
          <p className="text-center leading-relaxed">
            Every year, the GALAXY forum celebrates National Science Day to commemorate the discovery of the Raman Effect 
            by Indian physicist Sir C.V. Raman. The day is marked with various scientific activities, demonstrations, 
            and lectures to inspire students and promote scientific temper.
          </p>
        </div>

        {/* Science Departments */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-blue-600 mb-3">Physics Department</h4>
            <p className="text-gray-700 text-sm">
              Well-equipped laboratory with modern instruments for practical learning in mechanics, optics, and electronics.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">Chemistry Department</h4>
            <p className="text-gray-700 text-sm">
              State-of-the-art chemistry lab facilitating experiments in organic, inorganic, and physical chemistry.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-purple-600 mb-3">Biology Department</h4>
            <p className="text-gray-700 text-sm">
              Comprehensive laboratory setup for botany and zoology with specimens and research facilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;

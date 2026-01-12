import React from 'react';

const Arts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">
          Kalaspoothyi, Heritage & History Clubs
        </h1>

        <div className="bg-gradient-to-r from-accent to-red-600 text-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Encouragement is as refreshing as a cold drink on a hot summer day
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              At M.E.S. College we have these three clubs especially for Arts students. Kalaspoothyi is aimed to 
              develop Positive attitude, Confidence & Courage among the students. The club provides a Diaz to the 
              students to express their hidden talents & skills.
            </p>

            <p>
              Heritage & History Clubs are advised to take up activities relating to Social activities. The objective 
              of these two clubs is to create social awareness about Indian heritage & importance of historical monuments. 
              Hence the clubs organized guest lectures, visit to historical places, exhibitions & various competitions, 
              students have participated in all the activities enthusiastically.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">Activities Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Cultural Event Photo 1</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Historical Visit Photo</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Guest Lecture Photo</span>
            </div>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Student Activity Photo</span>
            </div>
          </div>
        </div>

        {/* Club Objectives */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold mb-3">Kalaspoothyi Club</h4>
            <p className="text-sm">Develops positive attitude, confidence, and courage among students through cultural activities.</p>
          </div>

          <div className="bg-gradient-to-br from-accent to-red-600 text-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold mb-3">Heritage Club</h4>
            <p className="text-sm">Creates awareness about Indian heritage and cultural values through various programs.</p>
          </div>

          <div className="bg-gradient-to-br from-gold to-yellow-600 text-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold mb-3">History Club</h4>
            <p className="text-sm">Organizes visits to historical monuments and exhibitions to understand our rich history.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arts;

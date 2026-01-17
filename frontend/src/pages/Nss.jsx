import React from 'react';
import imgNssLogo from '../assets/nss.jpg';
import imgActivity1 from '../assets/nss1.jpg';
import imgActivity2 from '../assets/nss2.jpg';
import imgActivity3 from '../assets/mnss.jpg';


const Nss = () => {
  return (

 <div>
 {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">  National Service Scheme (NSS)</h1>
          <p className="text-xl animate-fadeIn delay-1">Dedicated educators committed to excellence</p>
        </div>
      </div>
    

    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">
          National Service Scheme (NSS)
        </h1>

        {/* NSS Logo and Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
           <img src={imgNssLogo} alt="NSS Logo" className="w-32 h-32" />
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-primary mb-4">About NSS</h2>
              <p className="text-gray-700 leading-relaxed">
                The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth 
                Affairs & Sports. It provides opportunity to the student youth of India to take part in various 
                government led community service activities & programs.
              </p>
            </div>
          </div>
        </div>

        {/* Birth and Motto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-3">Birth of N S S:-</h3>
            <p className="leading-relaxed">
              September 24th 1969 during Gandhi centenary year.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent to-red-600 text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-3">Motto of N S S:-</h3>
            <p className="leading-relaxed">
              The motto or watchwood of the National Service Scheme is NOT ME BUT YOU. This express the essence of 
              democratic living and upholds the need for selfless service and appreciation of the other man point of 
              view and also to show consideration for fellow human beings.
            </p>
          </div>
        </div>

        {/* Goal and Objective */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-accent mb-4">Goal of N S S:-</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Education through community service and community service through education.
          </p>

          <h3 className="text-2xl font-bold text-accent mb-4">Overall objective of N S S:-</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Development of student personality through community service.
          </p>

          <h3 className="text-2xl font-bold text-accent mb-4">Specific objective:-</h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
            <li>To provoke the students social consciousness</li>
            <li>To provide students with an opportunity to work with the people in villages</li>
            <li>To develop quality of social service</li>
            <li>To create a forum for students from diverse background</li>
            <li>To provide students a forum to develop leadership quality</li>
            <li>To earn respect for manual labor</li>
            <li>To provide opportunities for corporate living</li>
          </ol>
        </div>

        {/* Activities Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">NSS Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={imgActivity1} alt="NSS Activity 1" className="rounded-lg shadow-md w-full " />
          <img src={imgActivity2} alt="NSS Activity 2" className="rounded-lg shadow-md w-full " />
         
          </div>

          <div className="grid my-4 grid-cols-1  gap-6">
         
          <img src={imgActivity3} alt="NSS Activity 3" className="rounded-lg shadow-md w-full" />
          </div>
        </div>

        {/* Key Programs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-lg shadow p-6">
            <h4 className="text-lg font-bold text-primary mb-2">Regular Activities</h4>
            <p className="text-sm text-gray-700">Community service, awareness programs, and social welfare activities.</p>
          </div>

          <div className="bg-green-50 rounded-lg shadow p-6">
            <h4 className="text-lg font-bold text-green-600 mb-2">Special Camps</h4>
            <p className="text-sm text-gray-700">7-day residential camps in adopted villages for intensive community work.</p>
          </div>

          <div className="bg-amber-50 rounded-lg shadow p-6">
            <h4 className="text-lg font-bold text-accent mb-2">National Events</h4>
            <p className="text-sm text-gray-700">Participation in national integration camps and youth festivals.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Nss;

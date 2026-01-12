import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">About us</h1>

        {/* Principal's Desk Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3">
              <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">Principal's Photo</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-accent mb-4">PRINCIPAL'S DESK</h2>
              <p className="text-lg italic text-primary mb-4 font-semibold">
                The aim of education is not the specialist but the man of vision who can humanize our 
                life by integrating emotional demands with our new knowledge
              </p>
            </div>
          </div>
        </div>

        {/* College History */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-accent mb-6">Our History</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              MES M.S. Padmavathamma M. K. Sambasiva Setty First Grade College For Women, a pioneer institution of 
              Chikmagalur, imparting quality education, came into existence in 1984 with a noble intention of catering 
              to the needs of women in the field of education. A bond of dedicated teachers along with a supportive 
              management have consistently shaped and honed the personality of students. The students of this college 
              and their parents have always felt privileged.
            </p>
            
            <p>
              We offer Bachelor of Degree in Arts, Commerce and Science. Apart from that the Management Program (BBM) 
              is started at M.E.S. Which is an enriched and fortified one and designed to create sound Managers. MES 
              provides you with a distinctive combination of academic excellence and professional relevance, a combination 
              designed to provide a foundation for a life time of professional and personal development. The students of 
              MES represent a cross-section of academic background, cultural and regional diversities a strategic move to 
              enhance understanding and throw-up challenges of inter-personal relationship at the primary non-academic level.
            </p>

            <div className="bg-amber-50 border-l-4 border-primary p-4 my-6">
              <p className="font-semibold text-primary">
                It is a proud privilege of institution to say that the academic achievement of our Institution is 100% 
                and we are elated to announce that our students have secured Ranks in University Examinations.
              </p>
            </div>

            <p>
              Apart from academic glories our students have participated and won numerous prizes in University and 
              National level sports meets and various cultural competitions.
            </p>

            <p>
              Our college which is located at the heart of the city is the cynosure of all. The college has a spacious 
              campus, auditorium, well furnished lecture halls, full fledged and sophisticated laboratories, Library, 
              Computer Lab and well experienced teaching staff so as to help the students of our institutions to flourish 
              with updated knowledge and excellent results.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-accent mb-4">Vision</h3>
            <p className="text-gray-700">
              To empower women through quality education and to create responsible citizens who can contribute 
              to the nation's development.
            </p>
          </div>

          <div className="bg-green-50 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-accent mb-4">Mission</h3>
            <p className="text-gray-700">
              To provide holistic education that nurtures intellectual, emotional, and social growth, 
              preparing women to excel in their chosen fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

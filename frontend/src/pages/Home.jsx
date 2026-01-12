import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to MES M.S. Padmavathamma M.K. Sambasiva Setty First Grade College For Women</h1>
        <p className="text-lg">A pioneer institution of Chikmagalur, imparting quality education since 1984</p>
      </div>

      {/* Important Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-accent mb-4">Important Documents</h2>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Click to View "NAAC ACCREDITATION CERTIFICATE"
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Click to View "SSR Report Documents"
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Click to View "ANNUAL QUALITY ASSURANCE REPORT (AQAR) 2019-2020"
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Click to View "ANNUAL QUALITY ASSURANCE REPORT (AQAR) 2018-2019"
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-bold text-accent mb-4">NAAC Accreditation</h2>
          <div className="bg-amber-50 border-l-4 border-primary p-4 mb-4">
            <p className="text-lg font-semibold text-primary">Track ID-NAAC "KACOGN21787"</p>
          </div>
          <p className="text-gray-700 mb-4">
            Our college has been accredited by NAAC with high standards of quality education and infrastructure.
          </p>
        </div>
      </div>

      {/* Admissions Section */}
      <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-3xl font-bold text-accent text-center mb-4">
          Admissions Opened for Graduate and Post Graduate courses for the academic year 2023-24
        </h2>
        <div className="text-center">
          <a href="#" className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Online Admission Application For UG and PG
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-accent mb-6">About Our College</h2>
        <div className="prose max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            MES M.S. Padmavathamma M. K. Sambasiva Setty First Grade College For Women, a pioneer institution of 
            Chikmagalur, imparting quality education, came into existence in 1984 with a noble intention of catering 
            to the needs of women in the field of education.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            A bond of dedicated teachers along with a supportive management have consistently shaped and honed the 
            personality of students. The students of this college and their parents have always felt privileged.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer Bachelor of Degree in Arts, Commerce and Science. Apart from that the Management Program (BBM) 
            is started at M.E.S. Which is an enriched and fortified one and designed to create sound Managers.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-6">
            <p className="font-semibold text-green-800">
              It is a proud privilege of institution to say that the academic achievement of our Institution is 100% 
              and we are elated to announce that our students have secured Ranks in University Examinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

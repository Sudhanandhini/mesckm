import React from 'react';

const CourseRegulations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Course Offered</h1>

        {/* BBA Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gray-200 w-64 h-48 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Principal's Image</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-accent text-center mb-6">
            BACHELOR OF BUSINESS ADMINISTRATION(BBA)
          </h2>
          <p className="text-center text-gray-600 mb-8">
            (Affiliated to Kuvempu University & approved by the Govt. of Karnataka)
          </p>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-3">AIMS AND OBJECTIVES</h3>
              <p className="leading-relaxed">
                BBA, this unique design meets the new demands placed on business professionals by the global markets. 
                The Management Program at MES believes that business education is not collective study of subjects, 
                but a framework that encourages development of knowledge and skills for managerial roles through the 
                application of a few sensible rules and themes to maximize the value of the firm and that encourages 
                students initiative and commitment to take appropriate action based upon the analysis of business 
                challenges and opportunities. BBA program is designed with the objective to emphasize on strategic 
                decision making and motivation, significance of work place relationships, effective communication 
                competencies quantitative and qualitative analysis, the challenges of software/software, the buoyancy 
                of national and international economics, personality and skills development etc., are some of the 
                aspects that the students get grounded at MES.
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                The students of BBA, get the most challenging and path breaking projects for their internship and 
                academic project work from their, seminars, workshops, group discussions, interactions, guest talk, 
                company and industrial visits are conducted in the institute so that the students can get to interact 
                with the best minds in corporate and industry.
              </p>
            </div>
          </div>
        </div>

        {/* Other Courses Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-accent mb-6">OTHER COURSES OFFERED</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-accent mb-4">
              BACHELOR OF DEGREE IN ARTS, COMMERCE & SCIENCE:
            </h3>
            <p className="text-gray-600 mb-4">(Affiliated to Kuvempu University & approved by the Govt. of Karnataka)</p>
            <p className="text-gray-700 leading-relaxed">
              The main aim and objectives of higher education in quality enhancement and sustenance drive realize its 
              ultimate objective. The realm of higher education is the creator of ideas: The shrinking or extinction 
              of the realm necessarily implies shrinking or extinction of ideas. Hence an individual who comes under 
              higher education. The college strives to play the role of catalyst in synergizing the efforts of all 
              stakeholders namely, the Government, the teachers the parents, the society and the students. Our effort 
              is to promote participation of students in the learning process and create an ambience of gaining 
              knowledge, information, culture, career guidance, personality and skill development and tools related 
              to quality assurance in higher education.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h4 className="text-xl font-bold text-primary mb-2">DURATION OF THE PROGRAMME</h4>
            <p className="text-gray-700">Three academic years (Six Semesters) as prescribed by Kuvempu University.</p>
          </div>

          {/* Eligibility */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-accent mb-3">ELIGIBILITY FOR ADMISSION</h4>
            <p className="text-gray-700 mb-2">
              Eligibility norms for admission to the Bachelor Degree of all courses must have passed in any of the 
              following examinations i.e., pucI/pucII/10 + 2 (Arts, Science & Commerce) or its equivalent examination 
              of any other approved board or council.
            </p>
          </div>

          {/* Admission Procedure */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-accent mb-3">ADMISSION PROCEDURE</h4>
            <p className="text-gray-700 mb-2">
              Application for the admission must be made in the prescribed form available in the college office. 
              Incomplete applications will not be entertained.
            </p>
            <p className="text-gray-700 mb-2">
              Students belonging to SC/ST/Cat 1 and others claiming reservation under any category should attach a 
              copy of the caste certificate.
            </p>
            <p className="text-gray-700 mb-3">
              The complete application form should be submitted in two set of photo copies along with the original 
              documents.
            </p>
            <p className="text-gray-700 mb-2">During the admission, the applicant should produce the following original documents/certificates</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>Secondary School Leaving Certificate or Marks Card</li>
              <li>Transfer Certificate (TC) from the college last attended.</li>
              <li>Conduct Certificate.</li>
              <li>Study Certificate</li>
              <li>Migration/Eligibility Certificate from the University for candidate coming from other states or other universities.</li>
              <li>10th Marks card (xerox)</li>
              <li>Four Passport size and two stamp size photos.</li>
            </ul>
          </div>

          {/* Examination */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-accent mb-3">EXAMINATION</h4>
            <p className="text-gray-700 mb-2">
              There will be Semester Examinations at the end of the October and second week of April besides the two 
              Compulsory tests for internal assessment marks for all group of degree students.
            </p>
            <p className="text-gray-700 mb-2">
              A candidate who does not satisfy the requirements of 75% attendance in each subject and who does not 
              record a minimum of 50% marks excluding internal assessments in each of the theory/practical examination 
              and the candidate should score a minimum of 40% of the marks in aggregate in each semester including 
              internal assessments and development will be void.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegulations;

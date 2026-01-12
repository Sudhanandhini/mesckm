import React from 'react';

const Donor = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">College Donor</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Donor Photo */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-200 w-96 h-80 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">Donor's Photo</span>
            </div>
          </div>

          {/* Donor Information */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Sri M. SAMBASHIVA SETTY & Smt. M.S. PADMAVATHAMMA
            </h2>
          </div>

          {/* Donor Description */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              On 18-2-1920 a well known 'Philanthropic Mysore Family' was in a joy of celebrating the flowering of a bud, 
              M.K. Sambasiva shetty who stepped into this world as the son of Mysore krishna Shetty.
            </p>

            <p>
              Many service organizations and other institutions have thrived towards their achievement because of his 
              dedicational work towards those organizations.
            </p>

            <p>
              He, in his lifetime have made an astonishing job by donating 3 to 4 million rupees, no matter whatever 
              the purposes may be. He is often remembered for his donations & kindness.
            </p>

            <p>
              Besides, he has proved to be a helping hand for many poor students and is a well known personality in 
              Chikmagalur.
            </p>

            <div className="bg-amber-50 border-l-4 border-primary p-6 my-6">
              <p className="font-semibold text-primary">
                He was the sole person to collect the data of Four Centuries to prepare the "Mysore Family Tree", 
                which is a document now.
              </p>
            </div>

            <p>
              No one should forget to tell about his magnanimous donation of one million rupees to MES institution, 
              to name the College as "Smt. Padmavathamma M.K. Sambasiva setty college for women"
            </p>

            <p className="font-semibold text-lg text-primary mt-6">
              His contributions and his achievements have made him the personality which Chikmagalur can never forget.
            </p>
          </div>

          {/* Legacy Section */}
          <div className="mt-8 bg-primary text-white rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Legacy of Philanthropy</h3>
            <p className="leading-relaxed">
              The generous contribution of Sri M. Sambashiva Setty and Smt. M.S. Padmavathamma has enabled thousands 
              of young women to pursue higher education and achieve their dreams. Their vision and dedication continue 
              to inspire us to maintain the highest standards of education and character formation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donor;

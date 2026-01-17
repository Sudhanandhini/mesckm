import React from 'react';

const RankHolders = () => {
  const ugRankHolders2022 = [
    {
      name: 'SHRIYANKA T KAVIRAJ',
      rank: '10th Rank - B.COM.',
      percentage: '96.33%',
    },
  ];

  const ugRankHolders2021 = [
    {
      name: 'Student Name 1',
      rank: 'University Rank',
      percentage: '95.5%',
    },
    {
      name: 'Student Name 2',
      rank: 'University Rank',
      percentage: '94.8%',
    },
    {
      name: 'Student Name 3',
      rank: 'University Rank',
      percentage: '94.2%',
    },
  ];

  return (

      <div>
 {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Rank Holder</h1>
          <p className="text-xl animate-fadeIn delay-1">Dedicated educators committed to excellence</p>
        </div>
      </div>

    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">UG Rank Holder's List</h1>

        {/* Batch 2022-23 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="bg-amber-100 rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-bold text-primary text-center">Batch(2022-23)</h2>
          </div>

          <div className="flex justify-center">
            {ugRankHolders2022.map((holder, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-200 w-48 h-56 mx-auto rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">Student Photo</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{holder.name}</h3>
                <p className="text-gray-700 mb-1">{holder.rank}</p>
                <p className="text-2xl font-bold text-accent">{holder.percentage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Batch 2021-22 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="bg-amber-100 rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-bold text-primary text-center">Batch(2021-22)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ugRankHolders2021.map((holder, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-full h-56 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500">Student Photo</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{holder.name}</h3>
                <p className="text-gray-700 mb-1">{holder.rank}</p>
                <p className="text-xl font-bold text-accent">{holder.percentage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Academic Excellence</h2>
          <p className="text-lg leading-relaxed">
            We are proud of our students who have achieved university ranks through their dedication and hard work. 
            Their success is a testament to the quality education provided by our institution and the support of our 
            dedicated faculty.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <p className="text-gray-700">Pass Percentage</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-gray-700">University Ranks</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
            <p className="text-gray-700">Gold Medalists</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-700">First Class Results</p>
          </div>
        </div>

        {/* Hall of Fame */}
        <div className="mt-8 bg-blue-50 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">Hall of Fame</h3>
          <p className="text-gray-700 text-center leading-relaxed">
            Our college has consistently produced university rank holders across various disciplines. The dedication 
            of our students combined with excellent teaching methodology has resulted in outstanding academic 
            achievements year after year. We congratulate all our rank holders and wish them success in their future 
            endeavors.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RankHolders;

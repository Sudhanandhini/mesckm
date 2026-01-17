import React from 'react';
import imgLibrary from '../assets/lib1.jpg';
import imgLaboratory1 from '../assets/lab.jpg';
import imgLaboratory2 from '../assets/lab.jpg';
import imgComputerLab from '../assets/lib.jpg';  

const Facilities = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Facilities</h1>
          <p className="text-xl animate-fadeIn delay-1">Dedicated educators committed to excellence</p>
        </div>
      </div>
        
      <div className="container mx-auto px-4 py-8"> 
      <div className="max-w-5xl mx-auto">


     

        {/* Library Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-center mb-6">
            <img src={imgLibrary} alt="Library" className="rounded-lg shadow-md w-full max-w-2xl" />  
          </div>

          <h2 className="text-3xl font-bold text-accent mb-6">LIBRARY</h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            The college Library consists vast collection of books with the latest editions on each subject. A well 
            equipped reference Library is housed in the building A reference section is attached to the Library.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-primary mb-4">RULES:-</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Students may borrow books from the library every week on the day and the time allotted for issuing books to their classes.</li>
              <li>They may borrow two books at a time.</li>
              <li>Borrowers shall not write, damage or mark in the books, manuscripts, maps, charts, Log tablets and Lab manuals belonging to the Library.</li>
              <li>If any book is damaged, the new book will be collected or double the cost of the book will be collected from the borrower.</li>
              <li>Dictionaries, Grammar Books, Language Books and Encyclopedia are meant for reference only and will not be let.</li>
              <li>Books must be returned a fortnight earlier to the commencement of annual examinations to get ¡ć½ No Due Certificate¡ć½ from the librarian.</li>
              <li>Students will be entitled to get the admission ticket for the examination only on producing ¡ć½No Dues Certificate ¡ć½ from library, laboratory and sports section.</li>
            </ol>
          </div>
        </div>

        {/* Laboratories Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-accent mb-6">LABORATORIES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
           
           <img src={imgLaboratory1} alt="Laboratory 1" className="rounded-lg shadow-md w-full" />
           
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            We have well equipped individual laboratories for physics, chemistry and Biology. Practical classes are 
            conducted regularly. The laboratories are enriched every year with modern equipment. Experiments are 
            performed by the students individually. Series of lecturing will be held throughout the academic year by 
            the best orators in various fields.
          </p>
        </div>

        {/* Computer Lab Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-accent mb-6">COMPUTER LAB</h2>
          
          <div className="flex items-center justify-center mb-6">
           <img src={imgComputerLab} alt="Computer Lab" className="rounded-lg shadow-md w-full max-w-2xl" />
          </div>

          <p className="text-gray-700 leading-relaxed">
            We have well equipped individual laboratories for physics, chemistry and Biology. Practical classes are 
            conducted regularly. The laboratories are enriched every year with modern equipment. Experiments are 
            performed by the students individually. Series of lecturing will be held throughout the academic year by 
            the best orators in various fields.
          </p>
        </div>

        {/* Additional Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Auditorium</h3>
            <p className="leading-relaxed">
              Well-furnished auditorium for conducting seminars, cultural events, and important functions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Sports Facilities</h3>
            <p className="leading-relaxed">
              Spacious grounds for various sports activities and physical education programs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Canteen</h3>
            <p className="leading-relaxed">
              Clean and hygienic canteen providing nutritious food at affordable prices.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Transportation</h3>
            <p className="leading-relaxed">
              Bus facility available for students from various parts of the district.
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Facilities;

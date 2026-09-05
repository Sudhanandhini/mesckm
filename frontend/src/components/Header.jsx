import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mesckm.jpg';
import pdf from '../assets/COLLEGE-COMMITTEES.pdf';
import affiliationEnglish from '../assets/Affilation Approved Copy 2026-27 - English.jpg';
import affiliationKannada from '../assets/Affilation Approved Copy 2026-27 - Kannada.jpg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [affiliationOpen, setAffiliationOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Top Bar - Phone & Email */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-xs md:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 mb-2 md:mb-0">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              mesmspsckm@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.97.76l1.1 4.41a1 1 0 01-.5 1.11l-1.7.85a11.05 11.05 0 005.52 5.52l.85-1.7a1 1 0 011.11-.5l4.41 1.1a1 1 0 01.76.97V19a2 2 0 01-2 2h-1C8.61 21 3 15.39 3 8.5V5z" />
              </svg>
              08262 – 200458
            </span>
          </div>
          <div className="hidden md:flex space-x-3 lg:space-x-4 xl:space-x-6 text-xs lg:text-sm">
            <button onClick={() => setAffiliationOpen(true)} className="hover:text-gold transition-colors">Affiliation</button>
            <Link to="/nss" className="hover:text-gold transition-colors">NSS</Link>
            <Link to="/scholarship" className="hover:text-gold transition-colors">Scholarship</Link>
            <Link to="/yoga-wellness" className="hover:text-gold transition-colors">Yoga Wellness Centre</Link>
            
            <Link to="/donor" className="hover:text-gold transition-colors">Donor</Link>
          </div>
        </div>
      </div>

      {/* Logo and Menu */}
      <div className="border-b py-3 md:py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Left */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-[180px] sm:w-[200px] md:w-[220px] lg:w-[300px] h-auto" />
          </div>

          {/* Hamburger Menu Button - Mobile */}
          <button 
            className="md:hidden text-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 text-xs lg:text-sm xl:text-base">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About us</Link>
          
            <Link to="/course-regulations" className="hover:text-primary transition-colors whitespace-nowrap">Course Regulations</Link>
            
            <div className="relative group">
              <button className="hover:text-primary transition-colors">Facilities ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-[180px] lg:min-w-[200px] z-20 border border-gray-200">
                <Link to="/facilities" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Facilities</Link>
                <Link to="/library" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Library</Link>
                <Link to="/laboratories" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Laboratories</Link>
              </div>
            </div>

            {/* <div className="relative group">
              <button className="hover:text-primary transition-colors">Faculty ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-[180px] lg:min-w-[200px] z-20 border border-gray-200">
                <Link to="/faculty" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Teaching</Link>
                <Link to="/non-teaching" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Non-Teaching</Link>
              </div>
            </div> */}

                  <a href={pdf} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors whitespace-nowrap">Mandatory Disclosure</a>

            <div className="relative group">
              <button className="hover:text-primary transition-colors">Forum ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-[180px] lg:min-w-[200px] z-20 border border-gray-200">
                <Link to="/arts" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Arts</Link>
                <Link to="/commerce" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Commerce</Link>
                <Link to="/science" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Science</Link>
              </div>
            </div>

            {/* <div className="relative group">
              <button className="hover:text-primary transition-colors whitespace-nowrap">Rank Holders ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-[180px] lg:min-w-[200px] z-20 border border-gray-200">
                <Link to="/rank-holders" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">Rank Holders</Link>
                <Link to="/rank-holders/ug" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">UG Rank Holders</Link>
                <Link to="/rank-holders/pg" className="block px-4 py-2 text-xs lg:text-sm hover:bg-gray-100 hover:text-primary transition-colors">PG Rank Holders</Link>
              </div>
            </div> */}
 <Link to="/contact" className="hover:text-primary transition-colors whitespace-nowrap">Contact us</Link>
      
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 mt-3">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <Link to="/" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About us</Link>
              <Link to="/donor" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Donor</Link>
              <Link to="/course-regulations" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Course Regulations</Link>
              
              {/* Facilities Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('facilities')}
                  className="w-full text-left py-2 text-sm sm:text-base hover:text-primary transition-colors flex justify-between items-center"
                >
                  Facilities
                  <span className="transform transition-transform duration-200" style={{ transform: openDropdown === 'facilities' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {openDropdown === 'facilities' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/facilities" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
                    <Link to="/library" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Library</Link>
                    <Link to="/laboratories" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Laboratories</Link>
                  </div>
                )}
              </div>

              {/* Faculty Dropdown */}
              {/* <div>
                <button 
                  onClick={() => toggleDropdown('faculty')}
                  className="w-full text-left py-2 text-sm sm:text-base hover:text-primary transition-colors flex justify-between items-center"
                >
                  Faculty
                  <span className="transform transition-transform duration-200" style={{ transform: openDropdown === 'faculty' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {openDropdown === 'faculty' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/faculty" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Teaching</Link>
                    <Link to="/non-teaching" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Non-Teaching</Link>
                  </div>
                )}
              </div> */}

              {/* Forum Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('forum')}
                  className="w-full text-left py-2 text-sm sm:text-base hover:text-primary transition-colors flex justify-between items-center"
                >
                  Forum
                  <span className="transform transition-transform duration-200" style={{ transform: openDropdown === 'forum' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {openDropdown === 'forum' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/arts" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Arts</Link>
                    <Link to="/commerce" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                    <Link to="/science" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Science</Link>
                  </div>
                )}
              </div>

              {/* Rank Holders Dropdown */}
              {/* <div>
                <button 
                  onClick={() => toggleDropdown('rank')}
                  className="w-full text-left py-2 text-sm sm:text-base hover:text-primary transition-colors flex justify-between items-center"
                >
                  Rank Holders
                  <span className="transform transition-transform duration-200" style={{ transform: openDropdown === 'rank' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {openDropdown === 'rank' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/rank-holders" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Rank Holders</Link>
                    <Link to="/rank-holders/ug" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>UG Rank Holders</Link>
                    <Link to="/rank-holders/pg" className="block py-2 text-xs sm:text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>PG Rank Holders</Link>
                  </div>
                )}
              </div> */}

              {/* Mobile Top Links */}
              <div className="border-t pt-4 mt-4 space-y-2">
                <button
                  onClick={() => { setAffiliationOpen(true); setMobileMenuOpen(false); }}
                  className="block w-full text-left py-2 text-sm sm:text-base hover:text-primary transition-colors"
                >
                  Affiliation
                </button>
                <Link to="/nss" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>NSS</Link>
                <Link to="/scholarship" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Scholarship</Link>
                <Link to="/yoga-wellness" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Yoga Wellness Centre</Link>
                <Link to="/contact" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
                <a href={pdf} target="_blank" rel="noopener noreferrer" className="block py-2 text-sm sm:text-base hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Mandatory Disclosure</a>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Affiliation Popup */}
      {affiliationOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setAffiliationOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setAffiliationOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-primary text-2xl leading-none p-2"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-lg sm:text-xl font-semibold text-center mb-4 text-primary">Affiliation Approved Copy 2026-27</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={affiliationEnglish}
                alt="Affiliation Approved Copy 2026-27 - English"
                className="w-full h-auto border border-gray-200 rounded cursor-zoom-in hover:opacity-90 transition-opacity"
                onClick={() => setEnlargedImage(affiliationEnglish)}
              />
              <img
                src={affiliationKannada}
                alt="Affiliation Approved Copy 2026-27 - Kannada"
                className="w-full h-auto border border-gray-200 rounded cursor-zoom-in hover:opacity-90 transition-opacity"
                onClick={() => setEnlargedImage(affiliationKannada)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Enlarged Image Viewer */}
      {enlargedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <button
            onClick={() => setEnlargedImage(null)}
            className="absolute top-3 right-3 text-white hover:text-gold text-3xl leading-none p-2"
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={enlargedImage}
            alt="Affiliation Approved Copy 2026-27 - enlarged"
            className="max-w-full max-h-full object-contain cursor-zoom-out"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Header;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Top Bar - Phone & Email */}
      <div className="bg-primary text-white">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm">
          <div className="flex items-center space-x-2 md:space-x-4 mb-2 md:mb-0">
            <span className="flex items-center">📧 hello@mesckm.edu.in</span>
            <span className="flex items-center">📞 +91-8262-236212</span>
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            <Link to="/nss" className="hover:text-gold transition-colors">NSS</Link>
            <Link to="/scholarship" className="hover:text-gold transition-colors">Scholarship</Link>
            <Link to="/yoga-wellness" className="hover:text-gold transition-colors">Yoga Wellness Centre</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Contact us</Link>
          </div>
        </div>
      </div>

      {/* Logo and Menu */}
      <div className="bg-white border-b py-3 md:py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo Left */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-24 md:w-32 h-auto" />
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
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm lg:text-base">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About us</Link>
            <Link to="/donor" className="hover:text-primary transition-colors">Donor</Link>
            <Link to="/course-regulations" className="hover:text-primary transition-colors whitespace-nowrap">Course Regulations</Link>
            
            <div className="relative group">
              <button className="hover:text-primary transition-colors">Facilities ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-[200px] z-20 border border-gray-200">
                <Link to="/facilities" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Facilities</Link>
                <Link to="/library" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Library</Link>
                <Link to="/laboratories" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Laboratories</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-primary transition-colors">Faculty ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-[200px] z-20 border border-gray-200">
                <Link to="/faculty" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Teaching</Link>
                <Link to="/non-teaching" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Non-Teaching</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-primary transition-colors">Forum ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-[200px] z-20 border border-gray-200">
                <Link to="/arts" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Arts</Link>
                <Link to="/commerce" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Commerce</Link>
                <Link to="/science" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Science</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:text-primary transition-colors whitespace-nowrap">Rank Holders ▼</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-[200px] z-20 border border-gray-200">
                <Link to="/rank-holders" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">Rank Holders</Link>
                <Link to="/rank-holders/ug" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">UG Rank Holders</Link>
                <Link to="/rank-holders/pg" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors">PG Rank Holders</Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 mt-3">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <Link to="/" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>About us</Link>
              <Link to="/donor" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Donor</Link>
              <Link to="/course-regulations" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Course Regulations</Link>
              
              {/* Facilities Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('facilities')}
                  className="w-full text-left py-2 hover:text-primary transition-colors flex justify-between items-center"
                >
                  Facilities
                  <span className="transform transition-transform duration-200" style={{ transform: openDropdown === 'facilities' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {openDropdown === 'facilities' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/facilities" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
                    <Link to="/library" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Library</Link>
                    <Link to="/laboratories" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Laboratories</Link>
                  </div>
                )}
              </div>

              {/* Faculty Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('faculty')}
                  className="w-full text-left py-2 hover:text-primary transition-colors flex justify-between items-center"
                >
                  Faculty
                  <span className="transform transition-transform duration-200" style={{ transform: openDropdown === 'faculty' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {openDropdown === 'faculty' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/faculty" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Teaching</Link>
                    <Link to="/non-teaching" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Non-Teaching</Link>
                  </div>
                )}
              </div>

              {/* Forum Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('forum')}
                  className="w-full text-left py-2 hover:text-primary transition-colors flex justify-between items-center"
                >
                  Forum
                  <span className="transform transition-transform duration-200" style={{ transform: openDropdown === 'forum' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {openDropdown === 'forum' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/arts" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Arts</Link>
                    <Link to="/commerce" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Commerce</Link>
                    <Link to="/science" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Science</Link>
                  </div>
                )}
              </div>

              {/* Rank Holders Dropdown */}
              <div>
                <button 
                  onClick={() => toggleDropdown('rank')}
                  className="w-full text-left py-2 hover:text-primary transition-colors flex justify-between items-center"
                >
                  Rank Holders
                  <span className="transform transition-transform duration-200" style={{ transform: openDropdown === 'rank' ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
                </button>
                {openDropdown === 'rank' && (
                  <div className="pl-4 space-y-2">
                    <Link to="/rank-holders" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Rank Holders</Link>
                    <Link to="/rank-holders/ug" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>UG Rank Holders</Link>
                    <Link to="/rank-holders/pg" className="block py-2 text-sm hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>PG Rank Holders</Link>
                  </div>
                )}
              </div>

              {/* Mobile Top Links */}
              <div className="border-t pt-4 mt-4 space-y-2">
                <Link to="/nss" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>NSS</Link>
                <Link to="/scholarship" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Scholarship</Link>
                <Link to="/yoga-wellness" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Yoga Wellness Centre</Link>
                <Link to="/contact" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact us</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
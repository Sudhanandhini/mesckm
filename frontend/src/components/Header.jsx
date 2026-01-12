import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-100 to-amber-50 border-b-4 border-primary">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="font-bold text-primary text-xs">MES</div>
                <div className="text-[10px] text-gray-600">Chikmagalur</div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">Malnad Education Society (R)</h1>
              <p className="text-gray-600">Chikmagalur - 01</p>
            </div>
          </div>
        </div>
      </div>

      {/* Building Images Banner */}
      <div className="bg-white border-b-2 border-primary">
        <div className="container mx-auto">
          <div className="h-48 bg-gradient-to-r from-sky-200 to-sky-100 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <p className="text-sm">College Buildings Banner</p>
              <p className="text-xs">(Add images here)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary text-white shadow-lg">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap">
            <li>
              <Link to="/" className="block px-4 py-3 hover:bg-secondary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block px-4 py-3 hover:bg-secondary transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="/donor" className="block px-4 py-3 hover:bg-secondary transition-colors">
                Donor
              </Link>
            </li>
            <li>
              <Link to="/course-regulations" className="block px-4 py-3 hover:bg-secondary transition-colors">
                Course Regulations
              </Link>
            </li>
            
            {/* Facilities Dropdown */}
            <li className="relative group">
              <button className="block px-4 py-3 hover:bg-secondary transition-colors">
                Facilities ▼
              </button>
              <ul className="absolute hidden group-hover:block bg-secondary min-w-[200px] shadow-lg z-10">
                <li>
                  <Link to="/facilities" className="block px-4 py-2 hover:bg-primary">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link to="/facilities/library" className="block px-4 py-2 hover:bg-primary">
                    Library
                  </Link>
                </li>
                <li>
                  <Link to="/facilities/laboratories" className="block px-4 py-2 hover:bg-primary">
                    Laboratories
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/faculty" className="block px-4 py-3 hover:bg-secondary transition-colors">
                Faculty
              </Link>
            </li>
            <li>
              <Link to="/non-teaching" className="block px-4 py-3 hover:bg-secondary transition-colors">
                Non-Teaching
              </Link>
            </li>

            {/* Forum Dropdown */}
            <li className="relative group">
              <button className="block px-4 py-3 hover:bg-secondary transition-colors">
                Forum ▼
              </button>
              <ul className="absolute hidden group-hover:block bg-secondary min-w-[200px] shadow-lg z-10">
                <li>
                  <Link to="/forum/arts" className="block px-4 py-2 hover:bg-primary">
                    Arts
                  </Link>
                </li>
                <li>
                  <Link to="/forum/commerce" className="block px-4 py-2 hover:bg-primary">
                    Commerce
                  </Link>
                </li>
                <li>
                  <Link to="/forum/science" className="block px-4 py-2 hover:bg-primary">
                    Science
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/nss" className="block px-4 py-3 hover:bg-secondary transition-colors">
                NSS
              </Link>
            </li>
            <li>
              <Link to="/scholarship" className="block px-4 py-3 hover:bg-secondary transition-colors">
                Scholarship
              </Link>
            </li>

            {/* Rank Holders Dropdown */}
            <li className="relative group">
              <button className="block px-4 py-3 hover:bg-secondary transition-colors">
                Rank Holders ▼
              </button>
              <ul className="absolute hidden group-hover:block bg-secondary min-w-[200px] shadow-lg z-10">
                <li>
                  <Link to="/rank-holders" className="block px-4 py-2 hover:bg-primary">
                    Rank Holders
                  </Link>
                </li>
                <li>
                  <Link to="/rank-holders/ug" className="block px-4 py-2 hover:bg-primary">
                    UG Rank Holders
                  </Link>
                </li>
                <li>
                  <Link to="/rank-holders/pg" className="block px-4 py-2 hover:bg-primary">
                    PG Rank Holders
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/yoga-wellness" className="block px-4 py-3 hover:bg-secondary transition-colors">
                Yoga Wellness Centre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block px-4 py-3 hover:bg-secondary transition-colors">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

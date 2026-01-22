import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Import all pages
import Home from './pages/Home';
import About from './pages/About';
import Donor from './pages/Donor';
import CourseRegulations from './pages/CourseRegulations';
import Facilities from './pages/Facilities';
import Faculty from './pages/Faculty';
import NonTeaching from './pages/NonTeaching';
import Arts from './pages/Arts';
import Commerce from './pages/Commerce';
import Science from './pages/Science';
import Nss from './pages/Nss';
import Scholarship from './pages/Scholarship';
import RankHolders from './pages/RankHolders';
import YogaWellness from './pages/YogaWellness';
import Contact from './pages/Contact';
import Library from './pages/Library';
import Laboratories from './pages/Laboratories';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/mesckm">
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <main className="flex-grow">
          <Routes>

            {/* 👇 FIX: This makes the home page visible */}
            <Route index element={<Home />} />

            {/* Optional: You can keep this or remove it */}
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/donor" element={<Donor />} />
            <Route path="/course-regulations" element={<CourseRegulations />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/library" element={<Library />} />
            <Route path="/laboratories" element={<Laboratories />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/non-teaching" element={<NonTeaching />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/science" element={<Science />} />
            <Route path="/nss" element={<Nss />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/rank-holders" element={<RankHolders />} />
            <Route path="/rank-holders/ug" element={<RankHolders />} />
            <Route path="/rank-holders/pg" element={<RankHolders />} />
            <Route path="/yoga-wellness" element={<YogaWellness />} />
            <Route path="/contact" element={<Contact />} />


          </Routes>
        </main>

        <Footer />

<ScrollToTop />

      </div>
    </Router>
  );
}

export default App;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* College Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">College Address</h3>
            <p className="text-sm leading-relaxed">
              <strong>MES M.S. Padmavathamma</strong><br />
              <strong>M.K. Sambasiva Setty College For Women</strong><br />
              R.G. Road<br />
              Chikmagalur – 577 101.<br />
              <br />
              <strong>Phone:</strong> 91-08262-233973<br />
              <strong>Mobile:</strong> +91 9916283623<br />
              <strong>E-mail:</strong> mesmpsckm@gmail.com
            </p>
          </div>

          {/* Management Address */}
          <div>
            <h3 className="text-xl font-bold mb-4">Management Address</h3>
            <p className="text-sm leading-relaxed">
              <strong>MALNAD EDUCATION SOCIETY (REGD.)</strong><br />
              Rathnagiri Road,<br />
              Chikmagalur – 577 101<br />
              <br />
              <strong>Phone:</strong> 91-08262-236821<br />
              <strong>Fax:</strong> 91-08262-220314.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-gold transition-colors">NAAC Accreditation Certificate</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">SSR Report Documents</a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-colors">Annual Quality Assurance Reports</a>
              </li>
              <li className="mt-4 font-semibold">
                Track ID-NAAC "KACOGN21787"
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MES M.S. Padmavathamma M.K. Sambasiva Setty College For Women. All Rights Reserved.</p>
          <p className="mt-2 text-xs">Developed by Sunsys Technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

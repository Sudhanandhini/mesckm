import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">Contact us</h1>

        {/* Accessibility Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-accent mb-6">
            Accessibility to Chickmagalur from State Capital
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">From Bangalore by Train</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Route : Bangalore- Tumkur - Arsikere - Kadur.</li>
                <li>Kadur is the nearest railway station to Chickmagalur.</li>
                <li>By Express Train 3 hours running time to Kadur.</li>
                <li>From Kadur 45 minutes journey by bus/taxi to Chickmagalur.</li>
                <li>If the train is of non-stop at Kadur, then Birur is the next nearest railway station.</li>
                <li>From Birur 50 minutes journey by bus/taxi to Chickmagalur.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary mb-3">
                From Bangalore by Road (Both Private and KSRTC Buses are available)
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Buses are available via Bangalore - Hassan - Belur- Chickmagalur (5 hours 30 minutes/ 5 hours)</li>
                <li>Buses are available via Bangalore - Arsikere - Kadur - Chickmagalur (5 hours 30 minutes / 5 hours)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* College Address */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-accent mb-4">COLLEGE ADDRESS:</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>MES M.S. Padmavathamma</strong></p>
              <p><strong>M.K. Sambasiva Setty College For Women</strong></p>
              <p>R.G. Road</p>
              <p>Chikmagalur – 577 101.</p>
              <div className="mt-4 space-y-1">
                <p><strong>Phone:</strong> 91-08262-233973</p>
                <p><strong>Mobile:</strong> +91 9916283623</p>
                <p><strong>E-mail:</strong> mesmpsckm@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Management Address */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-accent mb-4">MANAGEMENT ADDRESS:</h3>
            <div className="space-y-2 text-gray-700">
              <p><strong>MALNAD EDUCATION SOCIETY (REGD.)</strong></p>
              <p>Rathnagiri Road,</p>
              <p>Chikmagalur – 577 101</p>
              <div className="mt-4 space-y-1">
                <p><strong>Phone:</strong> 91-08262-236821</p>
                <p><strong>Fax:</strong> 91-08262-220314.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-accent hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">Our Location</h3>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Google Map Embed Here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

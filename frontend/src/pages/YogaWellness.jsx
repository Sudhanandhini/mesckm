import React from 'react';
import imgYoga1 from '../assets/yoga1.jpg';
import imgYoga2 from '../assets/yoga2.jpg';
import imgYoga3 from '../assets/yoga3.jpg';
import imgYoga4 from '../assets/yoga4.jpg';
import imgYoga5 from '../assets/yoga5.jpg';
import imgYoga6 from '../assets/yoga6.jpg';


const YogaWellness = () => {
  return (


      <div>
 {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">YOGA</h1>
          <p className="text-xl animate-fadeIn delay-1">Dedicated educators committed to excellence</p>
        </div>
      </div>

    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-accent mb-8 text-center">YOGA</h1>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              <strong>Malnad Education Society (R.)</strong> apart from fulfilling its primary responsibility of 
              educating the students who come from remote parts of Chikmagalur district and giving the best so as to 
              compete with growing standards is even having its vision of rendering services for the benefit of the 
              public and overall development of the students. Keeping this in mind is <strong>Swami Vivekananda District 
              Yoga wellness centre, a unit of Morarji Desai National Institute of Yoga Delhi, New Delhi</strong> (Under 
              public private partnership) is running successfully under the guidance of the Malnad Education Society (R.) 
              since 2013 and is having 2 well trained staff members who are performing their best by conducting yoga 
              related activities routinely which has become a matter of appreciation by the public. With the growing 
              demands in the stream of yoga, we are happy to admit that day after day the unit is becoming successful 
              in creating awareness and instill a spirit of learning thereby reaching great heights and is the only unit 
              in the district about which we are proud of.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-accent mb-6 text-center">Yoga Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <img src={imgYoga1} alt="Yoga Activity 1" className="rounded-lg shadow-md w-full" /> 
            <img src={imgYoga2} alt="Yoga Activity 2" className="rounded-lg shadow-md w-full" />  
                        <img src={imgYoga3} alt="Yoga Activity 1" className="rounded-lg shadow-md w-full" /> 
            <img src={imgYoga4} alt="Yoga Activity 2" className="rounded-lg shadow-md w-full" />  
                    <img src={imgYoga5} alt="Yoga Activity 1" className="rounded-lg shadow-md w-full" /> 
            <img src={imgYoga6} alt="Yoga Activity 2" className="rounded-lg shadow-md w-full" />  

          </div>
        </div>

        {/* Benefits of Yoga */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-3xl font-bold mb-6 text-center">Benefits of Yoga</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-bold mb-3">Physical Benefits</h4>
              <ul className="space-y-2 text-sm">
                <li>• Improves flexibility and strength</li>
                <li>• Enhances cardiovascular health</li>
                <li>• Boosts immunity</li>
                <li>• Improves posture and balance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">Mental Benefits</h4>
              <ul className="space-y-2 text-sm">
                <li>• Reduces stress and anxiety</li>
                <li>• Improves concentration and focus</li>
                <li>• Promotes emotional well-being</li>
                <li>• Enhances self-awareness</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Programs Offered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-accent mb-3">Regular Classes</h4>
            <p className="text-gray-700 text-sm mb-4">
              Daily yoga sessions for students and community members focusing on various asanas and pranayama.
            </p>
            <div className="text-primary font-semibold">Morning & Evening Batches</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-green-600 mb-3">Special Workshops</h4>
            <p className="text-gray-700 text-sm mb-4">
              Periodic workshops on specific yoga techniques, meditation, and stress management.
            </p>
            <div className="text-green-600 font-semibold">Weekend Programs</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h4 className="text-xl font-bold text-blue-600 mb-3">Certification Courses</h4>
            <p className="text-gray-700 text-sm mb-4">
              Professional yoga training programs leading to certification from MDNIY, New Delhi.
            </p>
            <div className="text-blue-600 font-semibold">3-6 Month Courses</div>
          </div>
        </div>

        {/* International Yoga Day */}
        <div className="bg-amber-50 border-l-4 border-accent rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-accent mb-4">International Yoga Day Celebration</h3>
          <p className="text-gray-700 leading-relaxed">
            Every year on June 21st, our yoga wellness centre actively participates in International Yoga Day 
            celebrations. We organize mass yoga sessions, awareness programs, and demonstrations to promote the 
            ancient science of yoga and its benefits for holistic health and well-being.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-primary text-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-center">Join Our Yoga Programs</h3>
          <p className="text-center mb-4">
            For enrollment and more information about our yoga wellness programs, please contact the yoga centre 
            at the college premises.
          </p>
          <div className="text-center text-sm">
            <p>Swami Vivekananda District Yoga Wellness Centre</p>
            <p>MES M.S. Padmavathamma M.K. Sambasiva Setty College For Women</p>
            <p className="mt-2">Phone: 91-08262-233973</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default YogaWellness;

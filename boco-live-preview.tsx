import React from 'react';
import { Check, ArrowRight, ChevronRight } from 'lucide-react';

const BocoWebsite = () => {
  return (
    <div className="font-sans bg-white">
      {/* Header Navigation */}
      <header className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl">boco</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-indigo-900">Shopify Store Build</a>
          <a href="#" className="text-gray-700 hover:text-indigo-900">Landing Page Design</a>
          <a href="#" className="text-gray-700 hover:text-indigo-900">Case Studies</a>
        </nav>
        <button className="bg-indigo-900 text-white px-4 py-2 rounded-full flex items-center text-sm">
          Talk to Us
          <div className="ml-2 bg-white rounded-full p-1">
            <ArrowRight size={14} className="text-indigo-900" />
          </div>
        </button>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-900 leading-tight mb-6">
            We build high-converting<br />
            Shopify stores that drive Profit
          </h1>
          <p className="mb-6 text-gray-700">
            We're a leading Shopify & Shopify Plus agency who design and develop<br />
            strategic ecommerce websites
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center">
              <div className="mr-2 bg-green-100 rounded-full p-1">
                <Check size={16} className="text-green-600" />
              </div>
              <span className="text-gray-700">Unmatched Speed & Stability</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 bg-green-100 rounded-full p-1">
                <Check size={16} className="text-green-600" />
              </div>
              <span className="text-gray-700">Built for Conversions</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 bg-green-100 rounded-full p-1">
                <Check size={16} className="text-green-600" />
              </div>
              <span className="text-gray-700">Reduced App Stack & Developer Dependencies</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="border border-gray-300 px-6 py-2 rounded-full text-gray-700 hover:bg-gray-50">
              Audit My Website
            </button>
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-full flex items-center text-sm">
              Talk to Us
              <div className="ml-2 bg-white rounded-full p-1">
                <ArrowRight size={14} className="text-indigo-900" />
              </div>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-indigo-100 rounded-2xl px-6 pt-6 pb-0 md:w-11/12 ml-auto relative overflow-hidden">
            <img
              src="/api/placeholder/400/320"
              alt="Shopify store preview"
              className="rounded-t-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="mb-8 flex justify-center items-center">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
          <span className="text-gray-700 ml-2 text-sm">10+ Brands & Counting</span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 grayscale opacity-70">
          <div className="flex justify-center items-center">
            <div className="h-6 w-32 bg-gray-300 rounded-sm relative flex items-center justify-center text-xs text-gray-600">STYLISM ENGINE</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-6 w-32 bg-gray-300 rounded-sm relative flex items-center justify-center text-xs text-gray-600">Vibrant Living</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-6 w-32 bg-gray-300 rounded-sm relative flex items-center justify-center text-xs text-gray-600">The Bakery</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-6 w-32 bg-gray-300 rounded-sm relative flex items-center justify-center text-xs text-gray-600">JOHI</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-6 w-32 bg-gray-300 rounded-sm relative flex items-center justify-center text-xs text-gray-600">relaxwell</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-6 w-32 bg-gray-300 rounded-sm relative flex items-center justify-center text-xs text-gray-600">clean x</div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-2">
          Stunningly Crafted Shopify Solutions
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-8">
          Driven by Insights
        </h3>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-700">
          As Shopify Partners with over 10 years of experience, we approach e-commerce through 
          strategic planning and robust Shopify development. We bring a fresh strategic approach to your brand, 
          focusing on delivering pixel perfect websites, built for Conversions & Growth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/250/250"
              alt="Shopify store example 1"
              className="w-full h-auto"
            />
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/250/400"
              alt="Shopify store example 2"
              className="w-full h-auto"
            />
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/250/250"
              alt="Shopify store example 3"
              className="w-full h-auto"
            />
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/250/400"
              alt="Shopify store example 4"
              className="w-full h-auto"
            />
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/250/250"
              alt="Shopify store example 5"
              className="w-full h-auto"
            />
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/250/400"
              alt="Shopify store example 6"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
            <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
            <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-2">
          Enhance customer experience
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-16">
          by focusing on the details that matters most
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Conversion Rate Card */}
          <div className="bg-indigo-50 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-indigo-100"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-indigo-100"></div>
            
            <div className="mb-8">
              <img
                src="/api/placeholder/80/80"
                alt="Conversion icon"
                className="w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-indigo-900 mb-6">
              Conversion Rate<br />Optimisation
            </h4>
            <ul className="space-y-4">
              {['Design Optimization', 'Speed Optimization', 'On Page SEO', 'Tech Maintenance & Support'].map((item) => (
                <li key={item} className="flex items-start">
                  <div className="text-indigo-200 mr-3">
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* UI/UX Design Card */}
          <div className="bg-indigo-50 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-indigo-100"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-indigo-100"></div>
            
            <div className="mb-8">
              <img
                src="/api/placeholder/80/80"
                alt="UI/UX icon"
                className="w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-indigo-900 mb-6">
              UI / UX<br />Design
            </h4>
            <ul className="space-y-4">
              {['Landing Pages', 'Visual Identity (Web & Digital)', 'Icons & Illustrations', 'Assets & Components'].map((item) => (
                <li key={item} className="flex items-start">
                  <div className="text-indigo-200 mr-3">
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Web Development Card */}
          <div className="bg-indigo-50 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-indigo-100"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-indigo-100"></div>
            
            <div className="mb-8">
              <img
                src="/api/placeholder/80/80"
                alt="Web Development icon"
                className="w-16 h-16"
              />
            </div>
            <h4 className="text-2xl font-bold text-indigo-900 mb-6">
              Web<br />Development
            </h4>
            <ul className="space-y-4">
              {['Code & E-commerce Customization', 'Third Party & Custom Apps', 'Front End Development', 'Back end & CMS Setup'].map((item) => (
                <li key={item} className="flex items-start">
                  <div className="text-indigo-200 mr-3">
                    <Check size={20} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-16">
          Read our recent Case Studies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Case Study 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden relative">
            <div className="absolute top-6 left-6 bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm">
              Fashion
            </div>
            <img
              src="/api/placeholder/600/300"
              alt="Stylish Wardrobe case study"
              className="w-full h-auto"
            />
            <div className="p-8">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">
                Stylish Wardrobe <span className="font-normal">saw a 3X growth in revenue within 90 days of revamp</span>
              </h3>
              
              <div className="grid grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-900">3x</div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-900">1.87<span className="text-lg">s</span></div>
                  <div className="text-sm text-gray-600">Page Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-900">48%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
              </div>
              
              <a href="#" className="text-indigo-900 font-medium flex items-center">
                Read Full Case Study <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden relative">
            <div className="absolute top-6 left-6 bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm">
              Health & Wellness
            </div>
            <img
              src="/api/placeholder/600/300"
              alt="The Good Leaf case study"
              className="w-full h-auto"
            />
            <div className="p-8">
              <h3 className="text-xl font-bold text-indigo-900 mb-4">
                Store Revamp for <span className="font-bold">The Good Leaf</span> <span className="font-normal">doubles Revenue & Boosts Conversions by 10%</span>
              </h3>
              
              <div className="grid grid-cols-3 gap-6 my-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-900">150%</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-900">1.87<span className="text-lg">s</span></div>
                  <div className="text-sm text-gray-600">Page Load Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-900">25%</div>
                  <div className="text-sm text-gray-600">Conversion Rate</div>
                </div>
              </div>
              
              <a href="#" className="text-indigo-900 font-medium flex items-center">
                Read Full Case Study <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="border border-gray-300 px-8 py-3 rounded-full text-gray-700 hover:bg-gray-50">
            View Case Studies
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-indigo-50 rounded-2xl my-16">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-10">
          Let's Get Started
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-indigo-900 text-white px-8 py-3 rounded-full flex items-center justify-center">
            Book a Call
            <div className="ml-2 bg-white rounded-full p-1">
              <ArrowRight size={14} className="text-indigo-900" />
            </div>
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-full text-gray-700 hover:bg-white">
            Audit my Website
          </button>
        </div>
      </section>

      {/* Final Tagline */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-16">
          Faster Websites. Higher conversion. More revenue.
        </h2>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-10 md:mb-0">
            <div className="font-bold text-xl mb-6">boco</div>
            <p className="text-gray-600 max-w-md">
              We all shop on ecommerce sites and we're builders. If you think the same way, we'd love a good chat.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-indigo-900">Shopify Store Build</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-900">Custom Landing Pages</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-900">Case Studies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
          © Copyright - BOCO 2024
        </div>
      </footer>
    </div>
  );
};

export default BocoWebsite;

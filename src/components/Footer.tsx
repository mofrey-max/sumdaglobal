import { Facebook, Twitter, Linkedin, Building } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sumda Global</h3>
                <p className="text-sm text-gray-400">Ventures Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of inorganic fertilizers, clean sachet water production, 
              quality block manufacturing, and professional estate agency services. Building stronger communities through 
              quality products and reliable services.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Inorganic Fertilizers</li>
              <li className="text-gray-400">Sachet Water Production</li>
              <li className="text-gray-400">Block Manufacturing</li>
              <li className="text-gray-400">Estate Agency Services</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Sumda Global Ventures Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
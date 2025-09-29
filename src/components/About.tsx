import { Target, Users, Award, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To provide high-quality products that support sustainable agriculture, clean water access, and reliable construction materials.'
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'We are committed to serving farmers, communities, and the construction industry with integrity and excellence.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Every product we deliver meets the highest standards of quality and reliability, ensuring customer satisfaction.'
  },
  {
    icon: Globe,
    title: 'Sustainable Growth',
    description: 'We believe in responsible business practices that contribute to long-term environmental and economic sustainability.'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sumda Global Ventures</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sumda Global Ventures Ltd. is a leading company specializing in the supply of inorganic fertilizers, 
              sachet water production, block manufacturing, and comprehensive estate agency services. We are dedicated to delivering exceptional products 
              and services that support agricultural productivity, community health, infrastructure development, and real estate solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment extends beyond just business – we strive to create positive impacts in the communities 
              we serve, supporting farmers with quality fertilizers, providing clean water access, and supplying 
              reliable construction materials, and offering professional real estate services for building stronger communities.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">4</div>
                <div className="text-sm text-gray-600">Core Services</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
              alt="About Sumda Global Ventures"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">Quality</div>
              <div className="text-sm">Guaranteed</div>
            </div>
          </div>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-8 gap-4 h-full">
              {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="bg-green-600 rounded-full w-2 h-2"></div>
              ))}
            </div>
          </div>
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-200">
                <value.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
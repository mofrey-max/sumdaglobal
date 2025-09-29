import { Quote, Award, Users, TrendingUp } from 'lucide-react';

export function CEO() {
  const achievements = [
    {
      icon: Award,
      title: 'Industry Leadership',
      description: '15+ years leading agricultural and manufacturing sectors'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Served over 10,000 farmers and 50+ communities'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: '300% company growth under visionary leadership'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our CEO</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionary leadership driving innovation and excellence across all our business sectors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* CEO Image and Info */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="public/ceo.jpg"
                alt="CEO of Sumda Global Ventures"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* CEO Content */}
          <div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Bilal Bello Sumda</h3>
              <p className="text-lg text-green-600 font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                With extensive expertise in forest resources management and agricultural development, 
                Bilal has been the driving force behind Sumda Global 
                Ventures' remarkable growth and community impact.
              </p>
              <p className="text-gray-600 leading-relaxed">
                His background in forestry, wildlife management, and cooperative leadership has 
                positioned the company as a trusted partner for farmers, communities, and 
                construction professionals across Ghana.
              </p>
            </div>

            {/* Education & Background */}
            <div className="bg-gray-50 p-6 rounded-xl mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Background & Education</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  MSc in Forest Resources Management and Product Utilization (Forest Resources Economics and Policy)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  B.Tech Forestry and Wildlife Management
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Secretary, Gainako Farmer Cooperative Society LTD
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CEO Quote */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600 mb-12">
          <div className="flex items-start space-x-4">
            <Quote className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                "Our mission goes beyond just supplying products. We're building sustainable 
                communities through sustainable forest resource management, providing farmers with 
                quality fertilizers, ensuring clean water access, and supporting infrastructure 
                development. Every decision we make is guided by our commitment to environmental 
                sustainability and community empowerment."
              </blockquote>
              <cite className="text-green-600 font-semibold">- Bilal Bello Sumda, CEO</cite>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-200">
                <achievement.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Leadership Vision</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              "To transform Sumda Global Ventures into West Africa's leading integrated 
              supplier of agricultural inputs, clean water solutions, and construction 
              materials while maintaining our core values of quality, integrity, and 
              community service."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
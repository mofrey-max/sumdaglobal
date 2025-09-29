import { useState } from 'react';
import { Leaf, Droplets, Building2, Home, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    id: 'fertilizers',
    title: 'Inorganic Fertilizers',
    description: 'Premium quality inorganic fertilizers to boost crop yields and ensure sustainable farming practices for agricultural communities.',
    image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Leaf,
    features: ['NPK Fertilizers', 'Soil Enhancers', 'Crop-Specific Formulations'],
    detailedInfo: {
      overview: 'Our comprehensive range of inorganic fertilizers is designed to meet the diverse needs of modern agriculture. We supply high-quality nutrients that enhance soil fertility and maximize crop productivity.',
      products: [
        { name: 'NPK Complex Fertilizers', description: 'Balanced nutrition with nitrogen, phosphorus, and potassium for optimal plant growth' },
        { name: 'Urea (46% N)', description: 'High-nitrogen fertilizer ideal for leafy crops and grass production' },
        { name: 'Superphosphate', description: 'Phosphorus-rich fertilizer for root development and flowering' },
        { name: 'Potassium Chloride', description: 'Essential potassium for fruit quality and disease resistance' }
      ],
      benefits: ['Increased crop yields by up to 40%', 'Improved soil nutrient content', 'Cost-effective farming solutions', 'Expert agricultural consultation included']
    }
  },
  {
    id: 'water',
    title: 'Sachet Water Production',
    description: 'Clean, safe, and affordable sachet water production serving communities with reliable access to pure drinking water.',
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Droplets,
    features: ['Pure Water Processing', 'Quality Assurance', 'Community Distribution'],
    detailedInfo: {
      overview: 'Our state-of-the-art sachet water production facility ensures communities have access to clean, safe drinking water. We maintain the highest standards of hygiene and quality control.',
      products: [
        { name: '500ml Sachet Water', description: 'Standard size perfect for individual consumption and retail distribution' },
        { name: 'Bulk Water Supply', description: 'Large volume water supply for events, institutions, and communities' },
        { name: 'Custom Packaging', description: 'Branded water sachets for businesses and special events' }
      ],
      benefits: ['WHO-approved water treatment process', '24/7 quality monitoring', 'Affordable pricing for communities', 'Reliable distribution network', 'Eco-friendly packaging options']
    }
  },
  {
    id: 'blocks',
    title: 'Block Production',
    description: 'Durable and high-quality building blocks for construction projects, supporting infrastructure development across communities.',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Building2,
    features: ['Concrete Blocks', 'Custom Sizes', 'Quality Standards'],
    detailedInfo: {
      overview: 'We manufacture premium concrete blocks that meet international construction standards. Our blocks are designed for durability, strength, and versatility in various construction applications.',
      products: [
        { name: 'Standard Concrete Blocks', description: '6-inch and 8-inch hollow blocks for general construction' },
        { name: 'Solid Concrete Blocks', description: 'Heavy-duty blocks for load-bearing walls and foundations' },
        { name: 'Decorative Blocks', description: 'Architectural blocks for aesthetic and functional applications' },
        { name: 'Custom Blocks', description: 'Made-to-order blocks for specific project requirements' }
      ],
      benefits: ['High compressive strength (>7 N/mm²)', 'Consistent quality and dimensions', 'Weather-resistant properties', 'Competitive bulk pricing', 'Technical support and consultation']
    }
  },
  {
    id: 'estate',
    title: 'Estate Agency Services',
    description: 'Professional real estate services including property sales, rentals, property management, and investment consultation for residential and commercial properties.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    icon: Home,
    features: ['Property Sales', 'Rental Services', 'Property Management'],
    detailedInfo: {
      overview: 'Our comprehensive estate agency services cover all aspects of real estate transactions and property management. We provide expert guidance for buyers, sellers, landlords, and tenants across residential and commercial properties.',
      products: [
        { name: 'Residential Sales', description: 'Complete sales service for houses, apartments, and land with market analysis and negotiation support' },
        { name: 'Commercial Properties', description: 'Office spaces, retail locations, and industrial properties for sale or lease' },
        { name: 'Property Rentals', description: 'Tenant matching, lease agreements, and rental management services' },
        { name: 'Property Management', description: 'Full-service property maintenance, rent collection, and tenant relations' },
        { name: 'Investment Consultation', description: 'Real estate investment advice and portfolio management services' }
      ],
      benefits: ['Licensed and certified agents', 'Extensive property database', 'Market expertise and valuation services', 'Legal documentation support', 'After-sales property management', '24/7 customer support']
    }
  }
];

export function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleServiceDetails = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive solutions across three key sectors, delivering quality products 
            that support agriculture, communities, and construction industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                expandedService === service.id ? 'transform -translate-y-2' : 'hover:transform hover:-translate-y-2'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => toggleServiceDetails(service.id)}
                  className="flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 group w-full justify-between"
                >
                  <span className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  {expandedService === service.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                
                {/* Expanded Details */}
                {expandedService === service.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-in slide-in-from-top duration-300">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Overview</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{service.detailedInfo.overview}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Our Products</h4>
                        <div className="space-y-3">
                          {service.detailedInfo.products.map((product, index) => (
                            <div key={index} className="bg-gray-50 p-3 rounded-lg">
                              <h5 className="font-medium text-gray-900 text-sm">{product.name}</h5>
                              <p className="text-xs text-gray-600 mt-1">{product.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {service.detailedInfo.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-xs text-gray-600">
                              <div className="w-1 h-1 bg-green-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
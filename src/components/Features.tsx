import { Code2, Users, Cloud } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Complete Code',
    description: 'Production-ready, well-documented, and optimized performance for seamless deployment.',
  },
  {
    icon: Users,
    title: 'Two Discovery Sessions',
    description: 'Comprehensive planning and milestone reviews to ensure project success.',
  },
  {
    icon: Cloud,
    title: 'Deployment Support',
    description: 'Full server setup, configuration, and launch assistance for smooth deployment.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
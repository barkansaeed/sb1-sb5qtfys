import { CheckCircle2, Users, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Discovery Session',
    description: 'Initial consultation, requirements gathering, and project scope definition',
  },
  {
    icon: Code2,
    title: 'First Version of the App',
    description: 'AI-powered development and core functionality implementation',
  },
  {
    icon: CheckCircle2,
    title: 'Review Session',
    description: 'Client feedback, adjustments, and refinements',
  },
  {
    icon: Rocket,
    title: 'Handover to Developer',
    description: 'Code optimization, final testing, and project completion',
  },
];

export default function Process() {
  return (
    <section className="py-20 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-lg shadow-lg mx-8 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
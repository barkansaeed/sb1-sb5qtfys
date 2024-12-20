import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter Package',
    price: 1999,
    features: [
      'Simple applications',
      'Upto 8 Screens',
      'Basic features',
      'Standard support',
      '30-day maintenance',
      'Deployment'
    ],
    popular: false,
  },
  {
    name: 'Medium Package',
    price: 2999,
    features: [
      'Medium complexity',
      'Upto 12 Screens',
      'Mobile or Web',
      '30-day maintenance',
      'Deployment',
      'Stripe Payment Integration'
    ],
    popular: true,
  },
  {
    name: 'Ultimate Package',
    price: 4999,
    features: [
      'Complex applications',
      'Upto 15 Screens',
      'Mobile or Web',
      '30-day maintenance',
      'Deployment',
      'Stripe Payment Integration'
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">
                  ${plan.price.toLocaleString()}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                plan.popular
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
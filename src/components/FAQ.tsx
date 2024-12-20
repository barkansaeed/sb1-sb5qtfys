import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How long does it take to develop an MVP?',
    answer: 'Development time varies based on the complexity of your project. Simple MVPs typically take 3-4 weeks, while more complex applications may require 6-8 weeks. We will provide a detailed timeline during the discovery session.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We primarily work with modern web technologies including React, Angular, Node.js, and various cloud services. Our tech stack is chosen based on your specific requirements and scalability needs.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes, all our packages include post-launch support. The duration varies by package, ranging from 30 to 60 days. During this period, we handle bug fixes and minor adjustments.',
  },
  {
    question: 'Can I request changes during development?',
    answer: 'Absolutely! We have regular review sessions where you can provide feedback and request changes. The number of revision rounds depends on your chosen package.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
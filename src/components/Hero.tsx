import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToPackages = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ship your MVP in less time with our{' '}
            <span className="text-blue-300">AI Enabled Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your ideas into production-ready applications faster than ever with our AI-powered development process.
          </p>
          <button
            onClick={scrollToPackages}
            className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
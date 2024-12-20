import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white' : 'text-gray-200 hover:text-white';
  };

  const scrollToPackages = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ul className="flex justify-end space-x-8">
          <li>
            <Link to="/" className={`text-lg font-medium transition-colors ${isActive('/')}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className={`text-lg font-medium transition-colors ${isActive('/portfolio')}`}>
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white' : 'text-gray-200 hover:text-white';
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ul className="flex justify-end space-x-8">
          <li>
            <Link 
              to="/" 
              className={`text-lg font-medium transition-colors ${isActive('/')}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/portfolio" 
              className={`text-lg font-medium transition-colors ${isActive('/portfolio')}`}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
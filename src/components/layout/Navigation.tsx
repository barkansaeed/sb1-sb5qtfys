import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="absolute top-0 right-0 p-6">
      <ul className="flex space-x-8">
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
  );
}
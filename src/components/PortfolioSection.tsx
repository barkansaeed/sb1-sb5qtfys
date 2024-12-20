import { Link } from 'react-router-dom';
import ProjectGrid from './portfolio/ProjectGrid';

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <Link 
            to="/portfolio"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All Projects →
          </Link>
        </div>
        <ProjectGrid />
      </div>
    </section>
  );
}
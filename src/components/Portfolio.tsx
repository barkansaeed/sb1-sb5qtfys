interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  complexity: 'Simple' | 'Medium' | 'Complex';
}

/*const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product management, cart, and checkout functionality.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80',
    complexity: 'Simple'
  },
  {
    title: 'Task Management System',
    description: 'Intuitive project and task management platform for teams of all sizes.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    complexity: 'Simple'
  },
  {
    title: 'Learning Management System',
    description: 'Comprehensive platform for online education and course management.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80',
    complexity: 'Medium'
  },
  {
    title: 'Healthcare Booking Platform',
    description: 'Advanced appointment scheduling system for healthcare providers.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    complexity: 'Medium'
  },
  {
    title: 'Real Estate Marketplace',
    description: 'Feature-rich platform connecting property buyers, sellers, and agents.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
    complexity: 'Complex'
  },
  {
    title: 'Financial Trading Dashboard',
    description: 'Real-time financial data visualization and trading platform.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
    complexity: 'Complex'
  }
];*/

const complexityColors = {
  Simple: 'bg-green-100 text-green-800',
  Medium: 'bg-orange-100 text-orange-800',
  Complex: 'bg-blue-100 text-blue-800'
};

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${complexityColors[item.complexity]}`}>
                  {item.complexity}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
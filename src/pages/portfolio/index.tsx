import Navigation from '../../components/Navigation';
import ProjectGrid from '../../components/portfolio/ProjectGrid';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';

export default function Portfolio() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
            <h1 className="text-4xl font-bold text-center text-white">Our Portfolio</h1>
          </div>
        </div>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectGrid />
          </div>
        </section>
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
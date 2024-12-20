import Header from '../components/Header';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import FAQ from '../components/FAQ';

export default function Portfolio() {
  return (
    <div>
      <Header />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-16">Our Portfolio</h1>
          <ProjectGrid />
        </div>
      </section>
      <FAQ />
    </div>
  );
}
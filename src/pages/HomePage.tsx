import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import PortfolioSection from '../components/PortfolioSection';
import Process from '../components/Process';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow">
        <Hero />
        <PortfolioSection />
        <Process />
        <Features />
        <Pricing />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
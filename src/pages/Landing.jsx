import Header from '@/components/landing/Header';
import HeroScroll from '@/components/landing/HeroScroll';
import Manifesto from '@/components/landing/Manifesto';
import LearningFormats from '@/components/landing/LearningFormats';
import About from '@/components/landing/About';
import Reviews from '@/components/landing/Reviews';
import FAQSection from '@/components/landing/FAQ';
import BookingSection from '@/components/landing/BookingSection';
import Footer from '@/components/landing/Footer';
import FilmGrain from '@/components/landing/FilmGrain';

export default function Landing() {
  return (
    <div className="relative bg-alabaster">
      <FilmGrain />
      <Header />
      <main>
        <HeroScroll />
        <Manifesto />
        <About />
        <LearningFormats />
        <Reviews />
        <FAQSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}

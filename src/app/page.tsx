import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Marquee from "@/components/Marquee";
import SignatureDishes from "@/components/SignatureDishes";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import ReservationSection from "@/components/ReservationSection";
import EventsSection from "@/components/EventsSection";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Marquee />
        <SignatureDishes />
        <MenuSection />
        <About />
        <Experience />
        <Gallery />
        <Testimonials />
        <ReservationSection />
        <EventsSection />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
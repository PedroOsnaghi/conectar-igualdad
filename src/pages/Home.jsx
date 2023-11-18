import About from "../components/About";
import Hero from "../components/Hero";
import SectionNetbook from "../components/SectionNetbook";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <SectionNetbook />
        <Footer />
      </main>
    </>
  );
}

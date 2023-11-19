import About from "./components/About";
import Hero from "./components/Hero";
import SectionNetbook from "./components/SectionNetbook";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/navbar";

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

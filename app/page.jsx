//components
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Foolter from "@/components/Foolter";

export default function Home() {
  return (
    <>

    <section id="home">
      <Hero/>
    </section>
    
    <section id="services" className="scroll-mt-25">
      <Services/>
    </section>
    
    <section id="about" className="scroll-mt-25">
      <About/>
    </section>
    
    <section id="resume" className="scroll-mt-25">
      <Resume/>
    </section>
    
    <section id="portfolio" className="scroll-mt-25">
      <Portfolio/>
    </section>
    
    <section id="pricing" className="scroll-mt-25">
      <Pricing/>
    </section>
    
    <section id="contact" className="scroll-mt-25">
      <Contact/>
    </section>
    
    <section id="blog" className="scroll-mt-25">
      <Blog/>
    </section>
    
    <section id="foolter" className="scroll-mt-25">
      <Foolter/>
    </section>
    
    </>
  );
}

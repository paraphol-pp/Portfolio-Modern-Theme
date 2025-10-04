import Image from "next/image";
//components
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import About from "@/components/About";

export default function Home() {
  return (
    <>

    <section id="home">
      <Hero/>
    </section>
    
    <section id="services">
      <Services/>
    </section>
    
    <section id="about">
      <About/>
    </section>
    
    </>
  );
}
